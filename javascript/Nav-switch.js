/**
 * Created by Administrator on 2016/3/19.
 */
$(function(){
   $(".nav-ul a").click(function(){
       $(this).parent("li").siblings().removeClass("li-selected");
       $(this).parent("li").addClass("li-selected");
   });
});