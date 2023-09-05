$(function(){
	//遮罩层运动事件
	var $liWrap      =  $('#li-wrap');//取出遮罩层
	var $oneListA    =  $('#one-list a');//取出li下的a
	$oneListA.hover(
		function(){
			var i  =$(this).index();
			$(this).
			css({'background-position':'0 -108px','background-color':'rgba(0,0,0,0.1)'})
		},function(){
			$(this).
			css({'background-position':'0 0px','background-color':'rgba(0,0,0,0)'})
		}
	)
	
	//第一个倒计时
	//边框问题
	var $salaConA1=$('#sale-con-a .con-a1');//获取带边框的元素;
	$salaConA1.hover(
		function(){
			$(this).css({border:'2px solid #E5004F'})
		},function(){
			$(this).css({border:'2px solid #fff'})
		}
	)
	//倒计时用插件
	//%D--天      %H--时     %M--分        %S--秒     
		$(function(){
			$('.dao-day').countdown('2016/9/20', function(event) {
			   $(this).html(event.strftime('%D'));
			   $('.dao-house').html(event.strftime('%H'));
			   $('.dao-min').html(event.strftime('%M'));
			   $('.pic-dao-day').html(event.strftime('%D'));
			   $('.pic-dao-house').html(event.strftime('%H'));
			   $('.pic-dao-min').html(event.strftime('%M'));
			});
		})
//		$(function(){
//			$('.dao-house').countdown('2016/9/20', function(event) {
//			   $(this).html(event.strftime('%H'));
//			});
//		})
//		$(function(){
//			$('.dao-min').countdown('2016/9/20', function(event) {
//			   $(this).html(event.strftime('%M'));
//			});
//		})
	//滑进滑出边框事件	
	var $contentPics  =$('.content-pics');//获取整个元素
	$contentPics.hover(
		function(){
			$(this).css({'border-color':'#e5004f'});
		},function(){
			$(this).css({'border-color':'#fff'});
		}
	)
	//图片划过大小变化
	var $picsRightImg   =$('.pics-right img');//获取变化的图片
	$picsRightImg.hover(
		function(){
			$(this).stop(true,false).animate({
				width:892,
				height:'anto',
				left:-50,
				top:-20
			},300)
		},function(){
			$(this).stop(true,false).animate({
				width:792,
				height:'anto',
				top:0,
				left:0
			},300)
		}
	)
	var $contentRight     =$('#content-right');//获取吸顶元素
	$(window).on('scroll',function(){
		var $conHeight  =$contentRight.offset().top;
		console.log($(window).scrollTop())
		if(($(window).scrollTop())>1063&&($(window).scrollTop())<=1965){
			$contentRight.css({position:'fixed',top:0,right:116})
		}else if(($(window).scrollTop())>1965){
			$contentRight.css({position:'relative',right:0,top:870})
		}else{
			$contentRight.css({position:'relative',right:0})
		}
	})

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})