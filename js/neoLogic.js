var vm = new Vue({
  el:"#app",
    data: {
      message: "",
      counter: 0,
      MAX_RAND: 10,
      MIN_RAND: 0,
      showTable: false,
      randoms: [0,0,0],
      guesses: [0,0,0],
    },
    methods: {
      getRandomNumber: function(event) {
        return Math.floor((Math.random() * this.MAX_RAND)+this.MIN_RAND);
      },
      guess: function(event) {
        let guessForm = document.querySelector('#guessForm')
        if(guessForm.checkValidity()) {
          event.preventDefault();
          this.counter = 0;

          for(let i in this.randoms) {
            this.randoms.$set(i, this.getRandomNumber());
          }

          this.showTable = true;

          for(let i in [...Array(3)]) {
            if(i == 0) {
               console.log('///////////////////////////////////////////////')
            }


            if(this.randoms[i] == this.guesses[i]) {
              this.counter++;
              console.log(this.counter);
              console.log("randoms: " + this.randoms[i])
              console.log("gusses:  " + this.guesses[i])
              console.log('------------------------------------------------')
            }
          }


          console.table("RANDOMS: " + this.randoms)
          console.table("GUESSES: " + this.guesses)



          switch (this.counter) {
            case 3:
                this.message = "Well done you guessed all the numbers!! You lucky bastard!!";
              break;
            case 2:
              this.message = "Well done you guessed 2 numbers!! ";
              break;
            case 1:
                this.message = "You guessed one at least!";
                break;
            case 0:
            default:
                this.message = "You unlucky, You didn't guessed even one.";
                break;
          }

          console.log("MESSAGE: " + this.message)
          console.log('------------------------------------------------')
        } // checkValidity closing
      },
      reset: function(evemt) {
        event.preventDefault();
        this.showTable = false;

        for(let i in this.randoms) {
          this.randoms.$set(i, 0);
        }

        for(let i in this.guesses) {
          this.guesses.$set(i, 0);
        }
        this.message = "";
      },
    }
});
