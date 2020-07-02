(function(){
	var position = 'absolute';
	var elements = [];
	function Snake(options) {
		options = options || {};
	
		this.width = options.width || 20;
		this.height = options.height || 20;
		this.direction = options.direction || 'right';
	
		this.body = [
			{x: 3, y: 2, color: 'red' },
			{x: 2, y: 2, color: 'green' },
			{x: 1, y: 2, color: 'green' }
		];
	}

	Snake.prototype.render = function (map) {
		//先删除蛇
		remove();

		//在创建蛇
		for(var i = 0,len = this.body.length; i < len; i++) {
			var object = this.body[i];

			
			var div = document.createElement('div');
			map.appendChild(div);

			elements.push(div);

			div.style.position = position;
			div.style.width = this.width + 'px';
			div.style.height = this.height + 'px';
			div.style.left = object.x * this.width + 'px';
			div.style.top = object.y * this.height + 'px';
			div.style.backgroundColor = object.color;
		}
	}

	// 控制蛇移动
	Snake.prototype.move = function(food,map) {

		for(var i = this.body.length -1; i > 0; i--) {
			// 控制蛇的身体移动（当前蛇节到 上一个蛇节的位置）
			this.body[i].x = this.body[i - 1].x;
			this.body[i].y = this.body[i - 1].y;
		}
	
		// 蛇身体移动
		var head = this.body[0];
		switch(this.direction) {
			case 'right'  : head.x += 1;break;
			case 'left'   : head.x -= 1;break;
			case 'top'    : head.y -= 1;break;
			case 'bottom' : head.y += 1;break;

		}

		var headX = head.x * this.width;
		var headY = head.y * this.height;

		if(headX === food.x && headY === food.y) {
			//让蛇增加一节
			//获取蛇的最后一节
			// food.render(map);
			var last = this.body[this.body.length - 1];
			this.body.push({
				x: last.x,
				y: last.y,
				color: last.color
			})

			// 地图上随机生成食物 
			food.render(map);
		}
	}

	function remove(){
		for(var i = elements.length - 1; i >= 0; i--) {
			//删除div
			elements[i].parentNode.removeChild(elements[i]);
			//删除数组中的元素
			elements.splice(i, 1);
		}
	}


	window.Snake = Snake;
	
})()

// var map = document.getElementById('map');
// var ss = new Snake();
// ss.render(map);