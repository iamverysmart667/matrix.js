window.onload = function() {
	var canvas = document.getElementById('c');
	var ctx = canvas.getContext('2d');

	canvas.width = screen.width;
	canvas.height = screen.height - 5;

	ctx.fillStyle = '#000';
	ctx.fillRect(0, 0, canvas.width, canvas.height);	


	function Symbol() {
		this.val = getRandChar();
		this.x = getRandX();
		this.y = 0;
		this.v = 15;
		this.color = '#00FF00';
	}

	Symbol.prototype.draw = function() {
		if(this.v < 10) 
			this.v += 10;

		this.y += this.v;

		this.val = getRandChar();

		ctx.font = '12px Consolas';
		ctx.fillStyle = this.color;
		
		ctx.fillText(getRandChar(), this.x, this.y+5);
	}

	var symbols = [];


	setInterval(function() {
		ctx.fillStyle = 'rgba(0,0,0,0.05)';
		ctx.fillRect(0, 0, canvas.width, canvas.height);


		symbols.push(new Symbol());

		for (var i = 0; i < symbols.length; i++) {  
			symbols[i].draw();
			symbols[i].val = getRandChar();
		}


	}, 60);

	
	setInterval(function() {
		for (var i = 0; i < symbols.length / 2; i++) {
			symbols.pop();
		}
	}, 20000);


	function getRandChar() {
		var chars = "すせそゥヵヰニビクㄟㄧㄤㄦモビゼスズフッガォジトゲヰムベヂソェィサゞヮワ㈨㈩㈱123456789@#$%&";
		var rand = Math.floor(Math.random() * chars.length);

		return chars[rand]; 
	}

	function getRandX() {
		var a = Math.floor(Math.random() * canvas.width);
		var b = a % 12;

		return a - b;
	}



}