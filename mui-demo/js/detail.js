'use strict'
mui.plusReady(function() {
	new DetailPage().init();
})

class DetailPage {
	constructor() {
		this.name = 'zwt';
	}
	init() {
		/**
		 * 向左滑动
		 */
		var self = this;
		mui('html')[0].addEventListener("swiperight", function() {
			mui.back();
		});
		window.addEventListener('options', function(e) { //通过自定义事件 获取参数
			console.log(e.detail.id + '---' + e.detail.title)
			mui('#title')[0].innerHTML = 'promise - ' + e.detail.title;
			mui.toast(e.detail.id, {
				type: 'div'
			});
			self.speak()
		})
		document.querySelector(".promise").addEventListener('tap', function() {
			self.myPromise(20);
		})
		document.querySelector(".promise1").addEventListener('tap', function() {
			var p1 = new Promise(function(resolve, reject) {
					setTimeout(function() {
						resolve('p1');
					}, 1000)
				}),
				p2 = new Promise(function(resolve, reject) {
					setTimeout(function() {
						resolve('p2');
					}, 2000);
				});
			Promise.all([p1, p2]).then(function(result) {
				console.log(JSON.stringify(result));
			})
			Promise.race([p1, p2]).then(function(result) {
				console.log(result)
			})
		})
	}
	speak() {
		console.log(this.name)
	}
	myPromise(val) {
		var p = new Promise(function(resolve, reject) {
			resolve(val);
		})
		p.then(this.add).then(this.min).then(this.multiple).then(this.divsion).catch(function(err) {
			console.log(JSON.stringify(err));
		})
	}
	add(val) {
		val += val;
		console.log(val)
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(val)
			}, 1000);
		})
	}
	min(val) {
		val -= 5;
		console.log(val);
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(val);
			}, 1000);
		})
	}
	multiple(val) {
		val *= 10;
		console.log(val);
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(val)
			}, 1000);
		})
	}
	divsion(val) {
		val /= 5;
		console.log(val);
		//		return new Promise(function(resolve, reject) {
		//			setTimeout(function(resolve, reject) {
		//				resolve(val);
		//			}, 1000);
		//		})
	}
}