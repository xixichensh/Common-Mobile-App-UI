/**
 * Created by New on 2015/9/28.
 */
(function($){

    //timeoutFun 空函数用来填充某些逻辑
    var timeoutFun = function(){};

    $.extend($, {


        initLoadingMask:function(){
            var loadingMaskUI = $("#_loadingMaskUI_");
            if(loadingMaskUI != null) {
                loadingMaskUI.remove();
            }

            var _uihtml = "<div id='_loadingMaskUI_'>" +
                                "<div class='inner'>";

            _uihtml +=              "<div ui class='_maskload_'>" +
                                        "<div class='loading' type='12'></div>" +
                                        "<span>加载中</span>" +
                                    "</div>";

            _uihtml +=          "</div>" +
                            "</div>";

            $("body").append(_uihtml);
        },

        loadTxt: function(txt) {
            $("#_loadingMaskUI_ div[ui]").hide();
            $("#_loadingMaskUI_ ._maskload_").show().find("span").html(txt);
        },

        hardLoad:function(txt,callback){
            var _this = this;
            _this.loadTxt(txt ? txt : "加载中");
            var loadingMaskUI = $("#_loadingMaskUI_");

            if(loadingMaskUI.is(":visible"))
            {
                return false;
            }

            loadingMaskUI.css({"display": "table", "background": "rgba(0,0,0,0)"});

            var tempCustomFun = callback ? callback : function(){

            };

            var tempCallback = function(){
                //_this.hideMaskForce();
                tempCustomFun();
            };

            clearTimeout(timeoutFun);
            timeoutFun = setTimeout(tempCallback, 30000);
        },

        hideMaskForce:function(){
            var loadingMaskUI = $("#_loadingMaskUI_");
            loadingMaskUI.css("display","none");
            clearTimeout(timeoutFun);
        }


    });

    $.initLoadingMask();

    window.$ = Zepto;

})(Zepto);