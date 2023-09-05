$(function(){
	//表单验证
	//关于注册账号
	
	var $setNumberBtn     =$('.setNumberbtn');//获取提交按钮
	var $setNumberTishi1  =$('.setNumber-tishi1');//获取账号提示信息
	var $setNumber3a      =$('.setNumber-3a');//获取账号输入框
	//账号输入框键盘抬起时间
	$setNumber3a.keyup(function(){
		var zhanghaoReg       =/[^1{1}\d{10}]/ig    //匹配到非正常手机号码
		var $setNumber3a      =$('.setNumber-3a').val();//获取账号内的value值
		console.log($setNumber3a);
		var $setNumberL       =$('.setNumber-3a').val().length;//获取长度
		console.log($setNumberL);
		if(!zhanghaoReg.test($setNumber3a)&&$setNumberL!=11){
			$setNumberTishi1.css({color:'#E5004F'}).html('请正确输入手机号');
		}else{
			$setNumberTishi1.css({color:'#E5004F'}).html('手机号输入正确');
		}
	})
		//太难了  还是先写密码吧   密码输入框
	var $setNumber4a    =$('.setNumber-4a');
	//密码输入框键盘抬起时间
	$setNumber4a.keyup(function(){
		var $setNumber4aL        =$('.setNumber-4a').val().length;
		var $setNumberTishi2  =$('.setNumber-tishi2');//获取密码提示信息
		if($setNumber4aL<6){
			$setNumberTishi2.html('6-16个字符，可使用字母、数字、符号任意组合');
			$('#setNumber-ts').css({display:'none'});
		}
		else if($setNumber4aL>=6&&$setNumber4aL<=9){
			$setNumberTishi2.html('');
			$('#setNumber-ts').css({display:'block'});
			$('#setNumber-ts .mimaruo').css({background:'#E5004F'});
			$('#setNumber-ts .mimazhong').css({background:'#ccc'});
			$('#setNumber-ts .mimaqiang').css({background:'#ccc'});
		}
		else if($setNumber4aL>=10&&$setNumber4aL<13){
			$setNumberTishi2.html('');
			$('#setNumber-ts').css({display:'block'});
			$('#setNumber-ts .mimaruo').css({background:'#ccc'});
			$('#setNumber-ts .mimazhong').css({background:'#E5004F'});
			$('#setNumber-ts .mimaqiang').css({background:'#ccc'});	
		}else if($setNumber4aL>=13&&$setNumber4aL<=16){
			$setNumberTishi2.html('');
			$('#setNumber-ts').css({display:'block'});
			$('#setNumber-ts .mimaruo').css({background:'#ccc'});
			$('#setNumber-ts .mimazhong').css({background:'#ccc'});
			$('#setNumber-ts .mimaqiang').css({background:'#E5004F'});
		}else if($setNumber4aL>16){
			$setNumberTishi2.html('');
			$('#setNumber-ts').css({display:'block'});
			$('#setNumber-ts .mimaruo').css({background:'#ccc'});
			$('#setNumber-ts .mimazhong').css({background:'#ccc'});
			$('#setNumber-ts .mimaqiang').css({background:'#E5004F'});
			var mima  = $setNumber4a.val().slice(0,17);
			$setNumber4a.val(mima);
		}
	})
	$setNumber4a.focus(function(){
		var con =$setNumber3a.val();
		if(con.length==0){
			$setNumberTishi1.css({color:'#E5004F'}).html('注册账号不能为空');
		}
		$('.set-yanzm-wrap').css({display:'block'});
		var a=[];
		for(var i=0;i<=3;i++){
			var m=parseInt(Math.random()*10);
			a.push(m);
		}
		$('.set-yanzm').html(a.join(''));
	})
	//密码输入框键盘失去焦点事件
	$setNumber4a.blur(function(){
		var $setNumber4aL        =$('.setNumber-4a').val().length;
		var $setNumberTishi2  =$('.setNumber-tishi2');//获取密码提示信息
		if($setNumber4aL==0){
			$setNumberTishi2.css({color:'#e5004f'}).html('密码不能为空');	
		}
	})
		//  密码重复框
	//密码重复框获得焦点事件
	var $setNumber5a    =$('.setNumber-5a');
	$setNumber5a.focus(function(){
		var $setNumber4aL        =$('.setNumber-4a').val().length;
		var $setNumberTishi2  =$('.setNumber-tishi2');//获取密码提示信息
		if($setNumber4aL==0){
			$setNumberTishi2.css({color:'#e5004f'}).html('密码不能为空');	
		}
	})
	//密码重复输入框键盘失去焦点事件
	var $setNumber5a    =$('.setNumber-5a');
	$setNumber5a.blur(function(){
		//console.log($setNumber5a.val());
		var $setNumberTishi3  =$('.setNumber-tishi3');
		var $setNumber4aCon        =$('.setNumber-4a').val();
		if(($setNumber5a.val().length)>=6){
			if($setNumber5a.val()!=$setNumber4aCon){
				$setNumberTishi3.css({color:'#E5004F'}).html('两次密码不一致,请确认');
			}
			if($setNumber5a.val()==$setNumber4aCon){
				$setNumberTishi3.css({color:'#E5004F'}).html('密码正确');
			}
			if(($setNumber5a.val().length)>16){
				//console.log(1)
				var mima2  = $setNumber5a.val().slice(0,17);
				$setNumber5a.val(mima2);
			}
		}
		if(($setNumber5a.val().length)==0){
			$setNumberTishi3.css({color:'#E5004F'}).html('重复密码不能为空');
		}
	})
	//验证码更换按钮
	$('.set-yanzm-wrap a').on('click',function(){
		var a=[];
		for(var i=0;i<=3;i++){
			var m=parseInt(Math.random()*10);
			a.push(m);
		}
		$('.set-yanzm').html(a.join(''));
	})
	






































})



