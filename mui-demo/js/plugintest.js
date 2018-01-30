document.addEventListener('plusready', function(){
	//声明js扩展插件别名
	var _BARCODE = 'plugintest',
		B = window.plus.bridge;
	var plugintest = {
		fn: function(name, age, successCallback, errorCallback) {
			var success = typeof successCallback !== 'function' ? null : function(args) {
					successCallback(args);
				},
				fail = typeof errorCallback !== 'function' ? null : function(err) {
					errorCallback(err);
				};
			callbackID = B.callbackId(success, fail);
			// 通知Native层plugintest扩展插件运行”fn”方法
            return B.exec(_BARCODE, "fn", [callbackID, name, age]);
		}
	};
	window.plus.plugintest = plugintest;
}, true);