/**
 * Created by Administrator on 2018/4/29.
 */
;//$(function () {
summerready = function(){
    $(".saoma").on("click", function () {
    	var params = {zxing : false};
			ZBar.scan(params, function(args){
			    summer.toast({
			        msg: args,
			        duration:"long"
			    });
			}, function(args){
			    summer.toast({
			        msg: args,
			         duration:"long"
			    });
			});
      /*  getAPPMethod(function () {
            if (window.gasstation) {
                window.gasstation.zxingClick();
            }
        },function () {
            if(window.webkit){
                window.webkit.messageHandlers.zxingClick.postMessage(null);
            }
        })*/
    })
    }
//})