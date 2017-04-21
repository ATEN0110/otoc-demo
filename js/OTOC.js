$(function () {
	
//    无限滚动  
	  $(document).on("pageInit", "#page-infinite-scroll-bottom", function(e, id, page) {
// 加载flag
      var loading = false;
      // 每次加载添加多少条目
      var itemsPerLoad = 20;  
      // 最多可加载的条目
      var maxItems = 100;
      var lastIndex = $('.card-container > div').length;
      
      function addItems(number, lastIndex) {
              // 生成新条目的HTML
              var html = '';
              for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
                  html += '<div class="card">'+
						    '<div class="card-header">'+
						    	'<span class="pull-left">保养'+i+'</span>'+
						    	'<span class="pull-right">已结算</span>'+
						    '</div>'+
						    '<div class="card-content">'+
						      '<div class="card-content-inner">'+
						      	'<div class="card-carnum">浙B-88672</div>'+
						      	'2017-10-10 9:00<br/>'+
						      	'服务顾问：周晓静'+
						      '</div>'+
						    '</div>'+
						  '</div>';
              }
              // 添加新条目  
              $('.infinite-scroll .card-container').append(html);

      }

      // 注册'infinite'事件处理函数
      $(page).on('infinite', '.infinite-scroll',function() {
          // 如果正在加载，则退出
          if (loading) return;

          // 设置flag
          loading = true;

          // 模拟1s的加载过程
          setTimeout(function() {
              // 重置加载flag
              loading = false;
              
              if (lastIndex >= maxItems) {
                  // 加载完毕，则注销无限加载事件，以防不必要的加载
                  $.detachInfiniteScroll($('.infinite-scroll'));
                  // 删除加载提示符
                  $('.infinite-scroll-preloader').remove();
                  return;
              }

              // 添加新条目
              addItems(itemsPerLoad, lastIndex);
              // 更新最后加载的序号
              lastIndex = $('.card-container > div').length;
              //容器发生改变,如果是js滚动，需要刷新滚动
              $.refreshScroller();
          }, 1000);
      });
  });
 $.init();
   
});





//倒计时
  $(function () {
            $("#btn_get_phonecode").click(function () {
            	var btn_code = $('#btn_get_phonecode')
                var count = 60;
                var countdown = setInterval(CountDown, 1000);
                function CountDown() {
                    $(btn_code).attr("disabled", true);
                    $(btn_code).addClass("otoc-opacity-50");  //兼容性调整 半透明
                    $(btn_code).val(count + " 秒后重新获取!");
                    if (count == 0) {
                        $(btn_code).val("重新获取验证码").removeAttr("disabled");
                        $("#btn_code").removeClass("otoc-opacity-50");
                        clearInterval(countdown);
                    }
                    count--;
                }
            })
        });
        
