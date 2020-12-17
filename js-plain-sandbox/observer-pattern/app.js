//Creating a class (without using the modern JS Class approach where there is a contructor and the function directly in the class)
function EventObserver() {
  this.observers = [];
}

//Attaching prototypes to the class
EventObserver.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },
  unsubscribe: function (fn) {
    this.observers = this.observers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  },
  fire: function () {
    this.observers.forEach(function (item) {
      item.call();
    });
  }
};

//Instantiating an event observer object
const click = new EventObserver();

//Event listeners
document.querySelector('.sub-ms').addEventListener('click', function () {
  click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function () {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function () {
  click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function () {
  click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', function () {
  click.fire();
});


//Click handler
const getCurMilliseconds = function () {
  console.log(`Current milliseconds ${new Date().getMilliseconds()}`);
};

const getCurSeconds = function () {
  console.log(`Current seconds ${new Date().getSeconds()}`);
};