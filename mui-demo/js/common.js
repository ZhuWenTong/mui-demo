/**
 * @author zwt
 * @date 2017-11-22
 * TODO 获取网络类型
 */
function getNetwork() {
	var types = {}; 
    types[plus.networkinfo.CONNECTION_UNKNOW] = "Unknown connection"; 
    types[plus.networkinfo.CONNECTION_NONE] = "None connection"; 
    types[plus.networkinfo.CONNECTION_ETHERNET] = "Ethernet connection"; 
    types[plus.networkinfo.CONNECTION_WIFI] = "WiFi connection"; 
    types[plus.networkinfo.CONNECTION_CELL2G] = "Cellular 2G connection"; 
    types[plus.networkinfo.CONNECTION_CELL3G] = "Cellular 3G connection"; 
    types[plus.networkinfo.CONNECTION_CELL4G] = "Cellular 4G connection"; 
    if(types[plus.networkinfo.getCurrentType()] == 'None connection') {
    	return false;
    } else {
    	return true;
    }
}
/**
 * @date 2017-11-22
 * TODO 监听网络变化
 */
function onNetChange() {
	var nt = plus.networkinfo.getCurrentType();　
	console.log(nt)　
	switch(nt) {　　　　
		case plus.networkinfo.CONNECTION_ETHERNET:
			　　　　
		case plus.networkinfo.CONNECTION_WIFI:
			mui.toast("当前网络为WiFi", {duration: 'short', type: 'div'});
			break;
		case plus.networkinfo.CONNECTION_CELL2G:
			mui.toast("当前网络为2G", {duration: 'short', type: 'div'});
			break;
		case plus.networkinfo.CONNECTION_CELL3G:
			mui.toast("当前网络为3G", {duration: 'short', type: 'div'});
			break;
		case plus.networkinfo.CONNECTION_CELL4G:
			mui.toast("当前网络为4G", {duration: 'short', type: 'div'});
			break;　　　　
		default:
			mui.toast("当前没有网络", {duration: 'short', type: 'div'});
			break;　　
	}
}