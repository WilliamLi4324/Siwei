$(function(){
	
	
	var $logNumberPic  =  $('#logNumber-pic');//获取元素
	var $logNumberPic1 =  $('#logNumber-pic .img1');//获取要移动的第一个图片
	var $logNumberPic2 =  $('#logNumber-pic .img2');//获取要移动的第2个图片
	$logNumberPic.hover(
		function(){
			$logNumberPic1.animate({left:20},300);
			$logNumberPic2.fadeIn(300);
		},function(){
			$logNumberPic1.animate({left:80},300);
			$logNumberPic2.fadeOut(300);
		}
	)
	
	var $setNumber1    =$('#setNumber-1 span');//  获取两个按钮
	var $setNumberC    =$('.setNumber-C');//  获取隐藏显示的内容
	$setNumber1.on('click',function(){
		var i=$(this).index();
		$setNumber1.removeClass();
		$(this).addClass('log-number-a');
		$setNumberC.css({display:'none'});
		$setNumberC.eq(i).css({display:'block'});
	})
	
	
	var $setNumber3a      =$('.setNumber-3a');//获取账号输入框
	var $setNumberTishi1  =$('.setNumber-tishi1');//获取账号输入警示框
	var $setNumber4a      =$('.setNumber-4a');//获取密码输入框
	var $setNumberTishi2  =$('.setNumber-tishi2');//获取密码输入警示框
	// var $setNumber6a      =$('.setNumber-6a');//获取验证码输入框
	// var $setNumberTishi4  =$('.setNumber-tishi4')//获取验证码警示框
	//账号输入框键盘抬起事件
	$setNumber3a.keyup(function(){
		var setNumber3aCon =$setNumber3a.val();
		if(setNumber3aCon=='15236485465'){
			$setNumberTishi1.css({color:'#E5004F'}).html('输入手机号正确');
		}else{
			$setNumberTishi1.css({color:'#E5004F'}).html('该手机号尚未注册');
		}
	})
	//账号输入框失去焦点事件
	$setNumber3a.blur(function(){
		var setNumber3aCon =$setNumber3a.val();
		if(setNumber3aCon.length==0){
			$setNumberTishi1.css({color:'#E5004F'}).html('账号不能为空');
		}else if(setNumber3aCon=='15236485465'){
			$setNumberTishi1.css({color:'#E5004F'}).html('输入手机号正确');
		}else{
			$setNumberTishi1.css({color:'#E5004F'}).html('输入手机号不正确');
		}
	})
	//密码输入框获得焦点事件
	$setNumber4a.focus(function(){
		var $setNumber3aCon  = $setNumber3a.val();
		if($setNumber3aCon.length==0){
			$setNumberTishi1.css({color:'#E5004F'}).html('账号不能为空');
		}
		$('.log-yanzm-wrap').css({display:'block'});
		var a=[];
		for(var i=0;i<=3;i++){
			var m=parseInt(Math.random()*10);
			a.push(m);
		}
		$('.log-yanzm').html(a.join(''));
	})
	//验证码更换按钮
	$('.log-yanzm-wrap a').on('click',function(){
		var a=[];
		for(var i=0;i<=3;i++){
			var m=parseInt(Math.random()*10);
			a.push(m);
		}
		$('.log-yanzm').html(a.join(''));
	})
	//密码输入框失去焦点事件
	$setNumber4a.blur(function(){
		var $setNumber4aCon  = $setNumber4a.val();
		console.log($setNumber4aCon.length);
		if($setNumber4aCon.length>=6){
			$setNumberTishi2.html('');
		}else{
			$setNumberTishi2.css({color:'#E5004F'}).html('6-16个字符，可使用字母、数字任意组合');
		}
		
	})
	var setNumberBtn  =$('.setNumberbtn');//获取登录按钮
	setNumberBtn.on('click',function(){
		var $setNumber4aCon  = $setNumber4a.val();//获取密码内容
		var $setNumber3aCon  = $setNumber3a.val();//获取账号内容
		// var $yanzmCon        = $('.log-yanzm').html();//获取提供的验证码内容
		// var $yanzmCon2       = $('.setNumber-6a').val();//获取用户输入的验证码
		if($setNumber4aCon=='lin930616'&&$setNumber3aCon=='15236485465'&&$yanzmCon==$yanzmCon2)
		{
			window.open('tiao_index.html','_self');
		}
		if($setNumber4aCon!='lin930616'){
			$setNumberTishi2.css({color:'#E5004F'}).html('密码不正确，请重新输入');
		}
		if($yanzmCon!=$yanzmCon2){
			// $('.setNumber-tishi4').css({color:'#e5004f'}).html('请输入正确的验证码');
			$('.setNumber-6a').css({'border-color':'#e5004f'});
		}
	})
	
	
	
	
	
	
	
	
	
	
	
	
})