<template>
	<div class="wrapper">
		<h1>Simon Says</h1>
			<div class="game-board">
				<div class="simon">
					<ul class="game">
						<li class="circle" :class="{lit: isLit[1]}" @click="clicked(1)"></li>
            <li class="circle" :class="{lit: isLit[2]}" @click="clicked(2)"></li>
						<li class="circle" :class="{lit: isLit[3]}" @click="clicked(3)"></li>
						<li class="circle" :class="{lit: isLit[4]}" @click="clicked(4)"></li>
					</ul>
				</div>
			</div>
			<div class="game-info">
				<h2>{{showScore}}</h2>
				<button @click="startGame">{{centerButton}}</button>
				<!-- <p data-action="lose">Sorry, you lost after <span data-round="0"></span> rounds!</p> -->
			</div>
			<div class="game-options">
				<h2>Game Options:</h2>
				<input
          type="radio"
          name="mode"
          v-on:change="easyOn"
          checked
        >easy<br>
				<input
          type="radio"
          name="mode"
          v-on:change="normalOn"
        >normal<br>
				<input
          type="radio"
          name="mode"
          v-on:change="hardOn"
        >hard<br>
			</div>
		<div data-action="sound"></div>
	</div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    centerButton: "START",
    easy: true,
    normal: false,
    hard: false,
    playing: false,
    isClickable: false,
    isWon: false,
    isWrong: false,
    strict: false,
    score: 0,
    sequence: [],
    sequenceInterval: null,
    playerSequence: [],
    isLit: {
      1: false,
      2: false,
      3: false,
      4: false
    },
  }),
  computed: {
    showScore() {
      if (this.isWon) {
        return "Play Again?";
      }
      return "Round: " + this.score;
    }
  },
  methods: {
    easyOn() {
      this.easy = true;
      this.normal = false;
      this.hard = false;
    },
    normalOn() {
      this.easy = false;
      this.normal = true;
      this.hard = false;
    },
    hardOn() {
      this.easy = false;
      this.normal = false;
      this.hard = true;
    },
    startGame() {
      this.playing = true;
      this.sequence = [];
      this.playerSequence = [];
      this.centerButton = "RESET";
      this.isWon = false;
      this.isWrong = false;
      this.score = 0;
      clearInterval(this.sequenceInterval);
      this.showSequence();
    },
    clicked(tile) {
      if (this.isClickable) {
        this.lightUp(tile);
        this.playerSequence.push(tile);
        this.checkWinLose();
      }
    },
    checkWinLose() {
      for (let i = 0; i < this.playerSequence.length; i++) {
        if (this.playerSequence[i] !== this.sequence[i]) {
          this.playerSequence = [];
          this.sequence = [];
          this.centerButton = "Wrong!";
          this.isWrong = true;
          setTimeout(() => {
            this.centerButton = "RESET";
            this.isWrong = false;
          }, 1000);
          this.showSequence(true);
        }
      }
      if (this.playerSequence.length === this.sequence.length) {
        this.playerSequence = [];
        this.score++;
        if (this.score === 20) {
          this.centerButton = "Winner!";
          this.isClickable = false;
          this.isWon = true;
        } else {
          this.showSequence();
        }
      }
    },
    lightUp(tile) {
      this.isLit[tile] = true;
      setTimeout(() => {
        this.isLit[tile] = false;
      }, 300);
    },
    showSequence(redo) {
      let currentIndex = 0;
      let speed;
      if (this.easy) {
        speed = 1500;
      } else if (this.normal) {
        speed = 1000;
      } else speed = 400;
      this.isClickable = false;
      if (!redo) {
        this.sequence.push(Math.floor(Math.random() * 4 + 1));
        console.log(this.sequence, currentIndex);

      }
      this.sequenceInterval = setInterval(() => {
        if (currentIndex >= this.sequence.length) {
          clearInterval(this.sequenceInterval);
          return (this.isClickable = true);
        }
        this.lightUp(this.sequence[currentIndex]);
        currentIndex++;
      }, speed);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
	font-family: Arial, serif;
	color: #333;
	-webkit-user-select: none; /* Chrome/Safari */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* IE10+ */
	-o-user-select: none;
	user-select: none;
}

h1 {
	margin: 1em 0 2em;
	text-align: center;
}

ul {
	list-style: none;
}

ul, li {
	padding: 0;
	margin: 0;
}

p[data-action="lose"] {
	display: none;
}

.active {
	opacity: 1 !important;
}

.clearfix {
	width: 100%;
	clear: both;
}

.wrapper {
	width: 540px;
	margin: 0 auto;
}
.container {
	width: 305px;
}

.simon {
	background: #fff;
	position: relative;
	float: left;
	margin-right: 3em;
	width: 302px;
	height: 295px;
	-webkit-border-radius: 150px 150px 150px 150px;
	border-radius: 150px 150px 150px 150px;
    -moz-box-shadow: 2px 1px 12px #aaa;
    -webkit-box-shadow: 2px 1px 12px #aaa;
    -o-box-shadow: 2px 1px 12px #aaa;
    box-shadow: 2px 1px 12px #aaa;
}

.circle {
	opacity: 0.6;
	-webkit-transition: opacity 250ms ease;
	-moz-transition: opacity 250ms ease;
	-ms-transition: opacity 250ms ease;
	-o-transition: opacity 250ms ease;
	transition: opacity 250ms ease;
  height: 290px;
	-webkit-border-radius: 150px 150px 150px 150px;
	border-radius: 150px 150px 150px 150px;
	position: absolute;
	text-indent: 10000px;
}

.circle:nth-of-type(1) {
  background: #FF5643;
	clip: rect(0px, 300px, 150px, 150px);
	width: 296px;
}
.circle:nth-of-type(2) {
  background: dodgerblue;
	clip: rect(0px, 150px, 150px, 0px);
	width: 300px;
}
.circle:nth-of-type(3) {
  background: #FEEF33;
	clip: rect(150px, 150px, 300px, 0px);
	width: 300px;
}
.circle:nth-of-type(4) {
  background: #BEDE15;
	clip: rect(150px,300px, 300px, 150px);
	width: 296px;
}

.circle:nth-of-type(1):hover,
.circle:nth-of-type(2):hover,
.circle:nth-of-type(3):hover,
.circle:nth-of-type(4):hover {
  border: 2px solid black
}
.circle.lit {
	opacity: 1;
}

.game-info {
	margin-top: 90px;
}

.game-info button {
	width: 5em;
	box-sizing: border-box;
	font-size: 1.4em;
	-webkit-border-radius: 10px 10px 10px 10px;
	border-radius: 10px 10px 10px 10px;
	background: #6DABE8;
	border: none;
	padding: 0.3em 0.6em;
}

.game-info button:hover {
	background: #78BCFF;
}

.game-options h2 {
	margin-top: 30px;
	margin-bottom: 0;
}

.game-options input[type="radio"] {
	margin-right: 10px;
}

.hoverable:hover {
	cursor: pointer;
}

footer {
	position: absolute;
	bottom: 20px;
	width: 540px;
	clear: both;
	text-align: center;
}
</style>
