const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        require: [true, 'Please provide a rating']
    },
    title: {
        type: String,
        trim: true,
        require: [true, 'Please provide a review title'],
        maxLength: 100
    },
    comment: {
        type: String,
        require: [true, 'Please provide a review text'],
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: true
    }
}, {timestamps: true});


ReviewSchema.index({product: 1, user: 1}, {unique: true});

ReviewSchema.statics.calculateAverageRating = async function (productId) {
    const result = await this.aggregate([
        {$match: {product: productId}},
        {
            $group: {
                _id: null,
                averageRating: {$avg: '$rating'},
                numOfReviews: {$sum: 1}
            }
        }
    ])
    console.log(result);
    try {
        await this.model('Product').findOneAndUpdate(
            {_id: productId},
            {averageRating: Math.ceil(result[0]?.averageRating || 0)},
            {numOfReviews: result[0]?.averageRating || 0})
    } catch (err) {
        console.log(err);
    }
}

ReviewSchema.post('save', async function () {
    await this.constructor.calculateAverageRating(this.product)
})

ReviewSchema.post('remove', async function () {
    await this.constructor.calculateAverageRating(this.product)
})

module.exports = mongoose.model('Review', ReviewSchema);
