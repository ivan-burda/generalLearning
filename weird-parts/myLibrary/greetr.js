(function (global, $){
//'new' an object
  var Greetr = function(firstname, lastname, language){
    return new Greetr.init(firstname,lastname,language);
  }

  //hidden within the scope of the IIFE and never directly accessible
  var supportedLanguages = ['en', 'es'];

  const greetings = {
    en: 'Hello',
    es: 'Hola'
  };

  const formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };

  //logger messages
  let logMessages = {
    en: 'Logged in',
    es: 'Inicio sesion'
  }

  Greetr.prototype = {
    fullName: function(){
      return this.firstname + ' ' + this.lastname;
    },
    validate: function (){
      if(supportedLanguages.indexOf(this.language) === -1){
        throw 'Invalid language';
      }
    },
    greeting: function(){
      return greetings[this.language] + ' ' + this.firstname + '!';
    },
    formalGreeting: function(){
      return formalGreetings[this.language] + ', ' + this.fullName();
    },
    greet: function(formal){
      let msg;
      if(formal){
        msg = this.formalGreeting();
      }
      else{
        msg = this.greeting();
      }
      if(console){
        console.log(msg);
      }
      return this;
    },
    log: function(){
      if(console){
        console.log(logMessages[this.language] + ': ' + this.fullName());
      }
      return this;
    },
    setLang: function(lang){
      this.language = lang;
      this.validate();
      return this;
    },
    HTMLGreeting: function(selector, formal){
      if(!$){
        throw 'JQuery not loaded';
      }
      if(!selector){
        throw 'Missing jQuery selector';
      }
      var msg;
      if(formal){
        msg = this.formalGreeting();
      }
      else{
        msg = this.greeting();
      }
      $(selector).html(msg);
      return this;
    }
    
  };

  //the actual object is created here, alowing us to 'new' an object without calling 'new'
  Greetr.init = function(firstname, lastname,language){
    var self = this;
    self.firstname = firstname ||'';
    self.lastname = lastname ||'';
    self.language = language ||'en';

    self.validate();
  }

  //this borwed from jquery so we dont have to use the 'new' keyword
  Greetr.init.prototype = Greetr.prototype;

  //attach our Greetr to the global object, and provide a shorthand '$G' for ease our poor fingers
  global.Greetr = global.G$ = Greetr; //global.Greetr = global.G$; global.Greetr means we are attaching Greetr to the global object such as window; global.G$ means we are aliasing the global.Greetr and can instead used just the shorter alias
  

}(window, jQuery));


