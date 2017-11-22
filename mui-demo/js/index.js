mui.plusReady(function() {
	/**
	 * 监听网络状态变化
	 */
	document.addEventListener("netchange", onNetChange, false);
    mui('.mui-content').on('tap', '.action', () => {
        plus.nativeUI.actionSheet({
            title: "系统选择按钮框",
            cancel: "取消",
            buttons: [{
                title: "1"
            }, {
                title: "2"
            }]
        }, function(e) {
            console.log("User pressed: " + e.index);
        });
    })
    mui('.mui-content').on('tap', '.alert', () => {
        plus.nativeUI.alert("系统提示对话框", function() {
            console.log("User pressed!");
        }, "提示", "OK");
    });
    mui('.mui-content').on('tap', '.confirm', () => {
//      plus.nativeUI.confirm("系统确认对话框", function(e) {
//          console.log("Close confirm: " + e.index);
//      });
		mui.confirm('请稍后', '温馨提示',['cancel', 'sure'], function(e) {
			console.log(e.index);
		}, 'div');
    });
    mui('.mui-content').on('tap', '.waiting', () => {
        plus.nativeUI.showWaiting("等待中...");
        setTimeout(function() {
            plus.nativeUI.closeWaiting();
        }, 2000);
    })
    mui('.mui-content').on('tap', '.date', () => {
        plus.nativeUI.pickDate(function(e) {
            var d = e.date;
            console.log("选择的日期：" + d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate());
        }, function(e) {
            console.log("未选择日期：" + e.message);
        });
    })
    mui('.mui-content').on('tap', '.time', () => {
        plus.nativeUI.pickTime(function(e) {
            var d = e.date;
            console.log("选择的时间：" + d.getHours() + ":" + d.getMinutes());
        }, function(e) {
            console.log("未选择时间：" + e.message);
        });
    })
    mui('.mui-content').on('tap', '.prompt', () => {
        plus.nativeUI.prompt("Input your name: ", function(e) {
            console.log(((e.index == 0) ? "OK: " : "Cancel") + e.value);
        }, "输入对话框", "your name", ["OK", "Cancel"]);
    })
    mui('.mui-content').on('tap', '.toast', () => {
        plus.nativeUI.toast("I'am toast information!");
    })
    mui('.mui-content').on('tap', '.actionbuttonstyles', () => {
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
    mui('.mui-content').on('tap', '.confirmoptions', () => {
        plus.nativeUI.confirm("Are you sure ready?", function(e) {
            console.log("Close confirm: " + e.index);
        }, {
            "title": "确认对话框的参数",
            "buttons": ["Yes", "No"],
            "verticalAlign": "center" //top center bottom
        });
    })
    mui('.mui-content').on('tap', '.pickdateoption', () => {
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
    mui('.mui-content').on('tap', '.picktimeoption', () => {
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
    mui('.mui-content').on('tap', '.waitingobj', () => {
        var w = plus.nativeUI.showWaiting("等待中...");
        // 2秒后更新
        setTimeout(() => {
            w.setTitle("正在更新");
        }, 2000);
        //3s后关闭
        setTimeout(() => {
            w.close();
        }, 3000)
    })
    mui('.mui-content').on('tap', '.actionsheetcallback', () => {
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
            id: 'refresh.html'
        })
    })
    document.getElementById('demo').addEventListener('tap', function() {
    	/**
    	 * getNetwork() 为false - 无网络
    	 */
    	if(getNetwork()) {
    		mui.openWindow({
	            url: 'html/demo.html',
	            id: 'demo.html'
	        })
    	} else {
    		mui.alert('当前无网络连接', '温馨提示', function(e) {
    			
    		}, 'div');
    	}
    })
})