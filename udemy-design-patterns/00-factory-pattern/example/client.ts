//  Factory use case example

import ChairFactory from "./chair-factory";

const chair = ChairFactory.getChair('BigChair');
console.log(chair.getDimensions());