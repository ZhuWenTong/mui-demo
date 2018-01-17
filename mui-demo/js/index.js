mui.plusReady(function() {
	new IndexPage();
})

function IndexPage() {
	this.author = 'zhuwt';
	this.init()
}

IndexPage.prototype.init = function() {
	/**
	 * 版本信息
	 */
	var version = mui.os.version;
	console.log(version + '---' + this.author)
	/**
	 * 监听网络状态变化
	 */
	document.addEventListener("netchange", onNetChange, false);
    mui('.mui-content').on('tap', '.action', function() {
        plus.nativeUI.actionSheet({
            title: "系统选择按钮框",
            cancel: "取消",
            buttons: [{
                title: '1'
            }, {
                title: "2"
            }]
        }, function(e) {
            console.log("User pressed: " + e.index);
        });
    })
    mui('.mui-content').on('tap', '.alert', function() {
        plus.nativeUI.alert("系统提示对话框", function() {
            console.log("User pressed!");
        }, "提示", "OK");
    });
    mui('.mui-content').on('tap', '.confirm', function() {
//      plus.nativeUI.confirm("系统确认对话框", function(e) {
//          console.log("Close confirm: " + e.index);
//      });
		mui.confirm('请稍后', '温馨提示',['cancel', 'sure'], function(e) {
			console.log(e.index);
		}, 'div');
    });
    mui('.mui-content').on('tap', '.waiting', function() {
        plus.nativeUI.showWaiting("等待中...");
        setTimeout(function() {
            plus.nativeUI.closeWaiting();
        }, 2000);
    })
    mui('.mui-content').on('tap', '.date', function() {
        plus.nativeUI.pickDate(function(e) {
            var d = e.date;
            console.log("选择的日期：" + d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate());
        }, function(e) {
            console.log("未选择日期：" + e.message);
        });
    })
    mui('.mui-content').on('tap', '.time', function() {
        plus.nativeUI.pickTime(function(e) {
            var d = e.date;
            console.log("选择的时间：" + d.getHours() + ":" + d.getMinutes());
        }, function(e) {
            console.log("未选择时间：" + e.message);
        });
    })
    mui('.mui-content').on('tap', '.prompt', function() {
//      plus.nativeUI.prompt("Input your name: ", function(e) {
//          console.log(((e.index == 0) ? "OK: " : "Cancel") + e.value);
//      }, "输入对话框", "your name", ["OK", "Cancel"]);
		mui.prompt("输入用户名: ",'输入用户名', '提示', ['取消', '确定'], function(e) {
			if(e.index == 1) {
				var val = document.querySelector(".mui-popup-input textarea").value.trim();
				console.log(val)
			}
		}, 'div');
		var tt = document.querySelector(".mui-popup-input");
		tt.innerHTML = '<textarea autofocus="autofocus" rows="2"></textarea>';
    })
    mui('.mui-content').on('tap', '.toast', function() {
        mui.toast("I'am toast information!", {type: 'div'});
    })
    mui('.mui-content').on('tap', '.actionbuttonstyles', function() {
        var actionbuttons = [{
            title: "不同意",
            style: "destructive"
        }, {
            title: "1"
        }, {
            title: "2"
        }, {
            title: "3"
        }];
        var actionstyle = {
            title: "原生选择按钮框的样式参数",
            cancel: "取消",
            buttons: actionbuttons
        };
        plus.nativeUI.actionSheet(actionstyle, function(e) {
            console.log("User pressed: " + e.index);
        });
    })
    mui('.mui-content').on('tap', '.confirmoptions', function() {
        plus.nativeUI.confirm("Are you sure ready?", function(e) {
            console.log("Close confirm: " + e.index);
        }, {
            "title": "确认对话框的参数",
            "buttons": ["Yes", "No"],
            "verticalAlign": "center" //top center bottom
        });
    })
    mui('.mui-content').on('tap', '.pickdateoption', function() {
        //		plus.nativeUI.pickDate( function(e){
        //			var d=e.date;
        //			console.log( "选择的日期："+d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate() );
        //		},function(e){
        //			console.log( "未选择日期："+e.message );
        //		},{title:"请选择日期："});
        var d = new Date();
        d.setFullYear(2017, 7, 8);
        plus.nativeUI.pickDate(function(e) {
            var d = e.date;
            console.log("选择的日期：" + d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate());

        }, function(e) {
            console.log("未选择日期：" + e.message);
        }, {
            date: d,
            title: '请选择日期'
        }); //date minDate maxDate title
    })
    mui('.mui-content').on('tap', '.picktimeoption', function() {
        var t = new Date();
        t.setHours(13, 0);
        plus.nativeUI.pickTime(function(e) {
            var d = e.date;
            console.log("选择的时间：" + d.getHours() + ":" + d.getMinutes());
        }, function(e) {
            console.log("未选择时间：" + e.message);
        }, {
            time: t,
            title: '请选择时间',
            is24Hour: true
        });
    })
    mui('.mui-content').on('tap', '.waitingobj', function() {
        var w = plus.nativeUI.showWaiting("等待中...");
        // 2秒后更新
        setTimeout(function() {
            w.setTitle("正在更新");
        }, 2000);
        //3s后关闭
        setTimeout(function() {
            w.close();
        }, 3000)
    })
    mui('.mui-content').on('tap', '.actionsheetcallback', function() {
        var actionbuttons = [{
            title: "不同意",
            style: "destructive"
        }, {
            title: "test1"
        }, {
            title: "test2"
        }, {
            title: "3"
        }];
        var actionstyle = {
            title: "选择按钮框的回调函数",
            cancel: "取消",
            buttons: actionbuttons
        };
        plus.nativeUI.actionSheet(actionstyle, function(e) {
            if (e.index > 0) {
                console.log("User pressed: " + actionbuttons[e.index - 1].title);
            } else {
                console.log("User pressed 取消");
            }
        });
    })
    mui('.mui-content').progressbar({
        progress: 20
    }).show();
    document.getElementById('refresh').addEventListener('tap', function() {
        mui.openWindow({
            url: 'html/refresh.html',
            id: 'refresh.html',
            show: {
            	aniShow: 'slide-in-top'
            }
        })
    })
    document.getElementById('demo').addEventListener('tap', function() {
    	/**
    	 * getNetwork() 为false - 无网络
    	 */
    	if(getNetwork()) {
    		mui.openWindow({
	            url: 'html/demo.html',
	            id: 'demo.html',
	            show: {
	            	aniShow: 'pop-in'
	            }
	        })
    	} else {
    		mui.alert('当前无网络连接', '温馨提示', function(e) {
    			
    		}, 'div');
    	}
    });
	var allBtn = document.querySelectorAll("button");
	for(var i = 0; i < allBtn.length; i++) {
		allBtn[i].addEventListener('tap', function(e) {
//			console.log(this.getAttribute('id'));
//			var id = this.getAttribute('id');
//			if(id != 'bowen') {
//				return false;
//			}
			console.log(this.offsetHeight + '---' + this.offsetWidth + '---' + this.offsetTop + '---' + this.offsetLeft);
			var ripple = document.createElement('div');
			ripple.className = 'ripple';
			ripple.style.height = ripple.style.width = Math.max(this.offsetWidth, this.offsetHeight) + 'px';
			console.log(this.offsetWidth + '---' + this.offsetHeight)
			this.appendChild(ripple);
			ripple.classList.remove('show');
			console.log(JSON.stringify(e))
			var top = e.detail.center.y - this.offsetTop - ripple.offsetHeight / 2 - document.body.scrollTop;
			var left = e.detail.center.x - this.offsetLeft - ripple.offsetWidth / 2 - document.body.scrollLeft;
			ripple.style.top = top + 'px';
			ripple.style.left = left + 'px';
			ripple.classList.add('show');
		})
	}
}
