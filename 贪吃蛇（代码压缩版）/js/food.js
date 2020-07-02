
// 食物对象

// 自调用函数 -- 开启一个新的作用域，避免命名冲突
(function (){
	var position = 'absolute';

	var elements = []; // 创建的食物放进数组中来

	
	function Food(options){
		options = options || {};
		this.x = options.x || 0;
		this.y = options.y || 0;
		this.width = options.width || 20;
		this.height = options.height || 20;
		this.backgroundColor = options.backgroundColor || 'red';
		this.borderRadius = options.borderRadius || 50;
	
	}
	
	
	Food.prototype.render = function(map) {
	
		remove();
		// 创建食物对象
		this.x = Tools.getRandom(0,map.offsetWidth/this.width - 1) * this.width;
		this.y = Tools.getRandom(0,map.offsetHeight/this.height - 1) * this.height;
	
		var div = document.createElement('div');
		map.appendChild(div);
	
		// 创建的食物放进数组中来
		elements.push(div);
	
		div.style.position = position;
		div.style.left = this.x + 'px';
		div.style.top = this.y + 'px';
		div.style.width = this.width + 'px';
		div.style.height = this.height + 'px';
		div.style.backgroundColor = this.backgroundColor;
		div.style.borderRadius = this.borderRadius + 'px';
	
	
	}
	
	function remove() {
		for(var i = elements.length - 1; i >= 0; i--) {
			//删除div
			elements[i].parentNode.removeChild(elements[i]);
			// 删除数组中的元素
			// 删除数组元素的：第一个参数，从哪个元素开始删除，第二个参数，删除第几个元素
			elements.splice(i,1);
	
		}
	}
	window.Food = Food; 
})()





// var map = document.getElementById('map'); 
// var foods = new Food();
// foods.render(map);