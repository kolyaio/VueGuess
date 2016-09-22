var vm = new Vue({
  el:"#app",
    data: {
      message: "",
      counter: 0,
      clickCount: 0,
      MAX_RAND: 10,
      MIN_RAND: 0,
      showTable: false,
      numbers: {
        randoms:[
          { value: 0 },
          { value: 0 },
          { value: 0 }
        ],
        guesses:[
          { value: 0 },
          { value: 0 },
          { value: 0 }
        ]
      },
    },
    methods: {
      randomize: function(event) {
        return Math.floor((Math.random() * this.MAX_RAND)+this.MIN_RAND);
      },
      guess: function(event) {
        let guessForm = document.querySelector('#guessForm')
        if(guessForm.checkValidity()) {
          event.preventDefault();
          let _this = this;
          this.showTable = true;
          this.numbers.randoms.forEach(function(element) {
            element.value = _this.randomize();
          })
          for(let index in [...Array(3)]) {
            // if(index == 0) {
            //   console.log('///////////////////////////////////////////////')
            // }
            if(this.numbers.randoms[index].value == this.numbers.guesses[index].value) {
              _this.counter = _this.counter + 1;
            }
            // console.log("randoms: " + this.numbers.randoms[index].value)
            // console.log("gusses: " + this.numbers.guesses[index].value)
            // console.log("counter: " + _this.counter);
            // console.log('------------------------------------------------')
          }
          _this.counter = 0;

          if (this.counter == 3) {
            this.message = "Well done you guessed all the numbers!! You lucky bastard!!";
          }
          else if (this.counter == 2) {
            this.message = "Well done you guessed 2 numbers!! ";
          }
          else if (this.counter == 1 ) {
            this.message = "You guessed one at least!";
          }
          else if(this.counter == 0){
            this.message = "You unlucky, You didn't guessed even one.";
          }
          if(this.clickCount > 0) {
            this.message = ""
          }
        }
      },
      reset: function(evemt) {
        event.preventDefault();
        this.showTable = false;
        this.numbers.randoms.forEach(function(element) {
          element.value = 0;
        })
        this.numbers.guesses.forEach(function(element) {
          element.value = 0;
        })
        this.message = "";
      },
    }
});
