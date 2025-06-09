const nodemailer = require('nodemailer');


const sendEmail = async (req, res) => {
    let testAccounts = await nodemailer.createTestAccount();

    //These are test-only detail. If using real details, store&read them from the env file
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'alexa.schuppe@ethereal.email',
            pass: 'bBW4njUJ3vzcyFheBG'
        }
    });

    let info = await transporter.sendMail({
        from: '"Coding Addict" <codingaddict@gmail.com>',
        to: 'bar@example.com',
        subject: 'Hello',
        html: '<h2>Sending email with nodejs</h2>'
    })

    res.json(info);
}

module.exports = sendEmail;