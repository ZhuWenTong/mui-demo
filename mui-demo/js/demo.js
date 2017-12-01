(function($) {
    //获得slider插件对象
    var gallery = $('.mui-slider');
    gallery.slider({
        interval: 3000 //自动轮播周期，若为0则不自动播放，默认为0；
    });
    $('#alert')[0].addEventListener('tap', function() {
        $.alert('这是一个提示框', '温馨提示', '确定', function(e) {
            console.log(JSON.stringify(e))
        }, 'div')
    });
    $('#confirm')[0].addEventListener('tap', function() {
        $.confirm('这是一个确认框', '温馨提示', ['取消', '确认'], function(e) {
            console.log(JSON.stringify(e))
        }, 'div')
    });
    $('#prompt')[0].addEventListener('tap', function() {
        $.prompt('用户名', '请输入用户名', '温馨提示', ['取消', '确认'], function(e) {
            console.log(JSON.stringify(e))
        }, 'div')
    })
    $('#toast')[0].addEventListener('tap', function() {
        $.toast('这是一个提示框', { type: 'div' })
    });
    $('.mui-scroll-wrapper').scroll({
		indicators: false //隐藏滚动条
	});
    $('#sheet').popover('toggle');
    //list
    var list = document.querySelector('.mui-table-view.mui-table-view-radio');
    list.addEventListener('selected', function(e) {
        console.log(JSON.stringify(e), e)
        console.log(e.detail.el.innerText)
    })
})(mui)