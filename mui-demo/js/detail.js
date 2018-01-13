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
			mui('#title')[0].innerHTML = e.detail.title;
			mui.toast(e.detail.id, {
				type: 'div'
			});
			self.speak()
		})
	}
	speak() {
		console.log(this.name)
	}
}