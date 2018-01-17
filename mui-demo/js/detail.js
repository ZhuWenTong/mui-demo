'use strict'
mui.plusReady(function() {
	new DetailPage().init();
})

class DetailPage {
	constructor() {
		this.name = 'zwt';
		this.val = 0;
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
			self.speak();
			self.val = parseFloat(e.detail.id);
			document.querySelector(".result").innerText = self.val;
		})
		document.querySelector(".promise").addEventListener('tap', function() {
			var obj = {
				self: self
			}
			self.myPromise(obj);
		})
		document.querySelector(".promise1").addEventListener('tap', function() {
			var w = plus.nativeUI.showWaiting('请稍后···'),
				p1 = new Promise(function(resolve, reject) {
					setTimeout(function() {
						resolve('p1');
					}, 1000)
				}),
				p2 = new Promise(function(resolve, reject) {
					setTimeout(function() {
						resolve('p2');
						w.close();
					}, 2000);
				});
			Promise.all([p1, p2]).then(function(result) {
				console.log(JSON.stringify(result));
				document.querySelector(".all").innerText = result;
			})
			Promise.race([p1, p2]).then(function(result) {
				console.log(result)
				document.querySelector(".race").innerText = result;
			})
		})
	}
	speak() {
		console.log(this.name)
	}
	myPromise(obj) {
		obj.w = plus.nativeUI.showWaiting('请稍后')
		var p = new Promise(function(resolve, reject) {
				resolve(obj);
			});
		p.then(this.add).then(this.min).then(this.multiple).then(this.divsion).catch(function(err) {
			console.log(JSON.stringify(err));
		})
	}
	add(obj) {
		obj.self.val += 10;
		console.log(obj.self.val)
		document.querySelector(".result").innerText = obj.self.val;
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(obj)
			}, 1000);
		})
	}
	min(obj) {
		obj.self.val -= 5;
		console.log(obj.self.val);
		document.querySelector(".result").innerText = obj.self.val;
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(obj);
			}, 1000);
		})
	}
	multiple(obj) {
		obj.self.val *= 10;
		console.log(obj.self.val);
		document.querySelector(".result").innerText = obj.self.val;
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(obj)
			}, 1000);
		})
	}
	divsion(obj) {
		obj.self.val /= 5;
		console.log(obj.self.val);
		document.querySelector(".result").innerText = obj.self.val;
		obj.w.close();
		//		return new Promise(function(resolve, reject) {
		//			setTimeout(function(resolve, reject) {
		//				resolve(val);
		//			}, 1000);
		//		})
	}
}