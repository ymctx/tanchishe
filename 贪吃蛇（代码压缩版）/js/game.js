

// 游戏对象
(function() {

	function Game(map) {
		this.food = new Food()
		this.snake = new Snake();
		this.map = map;
		that = this;
	}

	Game.prototype.start = function() {

		// 把食物和蛇渲染到地图上
		this.food.render(this.map);
		this.snake.render(this.map);
		runSnake (); //蛇移动
		bindKey();   //控制蛇移动方向
		// this.snake.move();
		// this.snake.render(this.map);

	}

	function runSnake () {
		var timerId = setInterval(function () {
		// 在定时器setInterval中的this指向window对象的
		this.snake.move(this.food,this.map);
		this.snake.render(this.map);

		// 获取蛇头坐标
		var maxX = this.map.offsetWidth / this.snake.width;
		var maxY = this.map.offsetHeight / this.snake.height;
		var headX = this.snake.body[0].x;
		var headY = this.snake.body[0].y;

		if(headX < 0 || headX >= maxX) {

			alert('游戏结束！');
			clearInterval(timerId);
		}

		if(headY < 0 || headY >= maxY) {
			alert('游戏结束！');
			clearInterval(timerId);
		}
		}.bind(that),100); 
	}



	function bindKey() {
		document.addEventListener('keydown',function (e) {
			// console.log(e.keyCode);

			// 37 - left
			// 38 - top
			// 39 - right 
			// 40 - bottom
			switch(e.keyCode) {
				case 37: this.snake.direction = 'left';break;
				case 38: this.snake.direction = 'top' ;break;
				case 39: this.snake.direction = 'right';break;
				case 40: this.snake.direction = 'bottom';break;
			}
		}.bind(that),false);
	}

	// 暴露给外部访问
	window.Game = Game;
})()




