AFRAME.registerComponent("pooltable", {
	init: function() {
		var ball = document.querySelector("#cueball");
		var cue = document.querySelector("#cue");
		var cam = document.querySelector("a-camera");
		var ballpos = ball.getAttribute("position").y;
		this.objects = document.querySelectorAll("a-sphere");
		this.redscore = document.querySelector("#redscore");
		this.bluescore = document.querySelector("#bluescore");
		var button1 = document.querySelector("#button1");
		var button2 = document.querySelector("#button2");
		var button3 = document.querySelector("#button3");
		var skyCycle = 1;
		var sky = document.querySelector("a-sky");
		var cueCycle = 1;
		var ballCycle = 1;
		ball.addEventListener("click", function() {
			var bz = ball.getAttribute("position").z;
			cue.setAttribute("animation", "to", { x: 0, y: -.3, z: bz });
			cue.emit("shoot");
		})
		cue.addEventListener("animationcomplete", function() {
			var deg = cam.getAttribute("rotation").y;
			var power = (Math.random() * -5) - 10;
			var x = Math.sin(deg * Math.PI / 180) * power;
			var z = Math.cos(deg * Math.PI / 180) * power;
			ball.body.velocity.set(x, .5, z);
			cue.setAttribute("position", "0 -.3 -.2");
			

			setTimeout(function() {
				ball.body.velocity.set(0, 0, 0);

			}, 1000);

		})
		button1.addEventListener("click", function() {
			if (skyCycle == 1) {
				sky.setAttribute("color", "#FF6F61");
			}
			else if (skyCycle == 2) {
				sky.setAttribute("color", "#F7CAC9");
			}
			else if (skyCycle == 3) {
				sky.setAttribute("color", "#92A8D1");
			}
			else {
				sky.setAttribute("color", "#1b4401");
				skyCycle = 1;
			}
			skyCycle = skyCycle + 1;
		})
		button2.addEventListener("click", function() {
			if (cueCycle == 1) {
				cue.setAttribute("color", "black");
				cueCycle = 2;
			}
			else if (cueCycle == 2) {
				cue.setAttribute("color", "red");
				cueCycle = 3;
			}
			else if (cueCycle == 3) {
				cue.setAttribute("color", "seagreen");
				cueCycle = 4;
			}
			else if (cueCycle >= 4) {
				cue.setAttribute("color", "tan");
				cueCycle = 1;
			}
		})
		button3.addEventListener("click", function() {
			if (ballCycle == 1) {
				ball.setAttribute("color", "#DD4124");
				ballCycle = 2;
			}
			else if (ballCycle == 2) {
				ball.setAttribute("color", "#5B5EA6");
				ballCycle = 3;
			}
			else if (ballCycle == 3) {
				ball.setAttribute("color", "#9A8B4F");
				ballCycle = 4;
			}
			else if (ballCycle >= 4) {
				ball.setAttribute("color", "white");
				ballCycle = 1;
			}
		})
	},


	tick: function() {
		var scorered = 7;
		var scoreblue = 7;
		for (var i = 0; i < this.objects.length; i++) {
			var y = this.objects[i].getAttribute("position").y
			var color = this.objects[i].getAttribute("color");
			if (y < 0 && color == "solid") {
				scorered--;
			} else if (y < 0 && color == "stripe") {
				scoreblue--;
			}
			if(scorered == 0){
				window.location.href = 'RedWins.html';
			} else if(scoreblue == 0){
				window.location.href = 'BlueWins.html';
			}

			var ball = document.querySelector("#cueball");
			var ballY = ball.getAttribute("position").y;
			var eightball = document.querySelector("#eightball");
			var eightballY = eightball.getAttribute("position").y;
			if (eightballY < 0) {
				alert('Game Over! The 8-Ball was shot into a pocket! Use Crtl+R to play again!');
			}
			if (ballY < .1) {
				ball.body.velocity.set(0, 0, 0);
				setTimeout(function() {
					ball.body.position.set(0, .25, -3);
				}, 2500);
			}


		}
		this.redscore.setAttribute("value", "Solids: "+scorered);
		this.bluescore.setAttribute("value", "Stripes: " +scoreblue);


	}

})