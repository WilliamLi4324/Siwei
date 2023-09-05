$(function(){
	//放大镜底部  微信  及  链接  显示
	var $numWeixin    =   $('#goods-num > .weixin');//获取显示隐藏的父元素
	var $numWeixin2   =   $('.weixin-er');
	//console.log($numWeixin);
	$numWeixin.hover(
		function(){
			$numWeixin2.css({display:'block'});
		},function(){
			$numWeixin2.css({display:'none'});
		}
	)
	var $numLinks     =    $('.show-links');
	var $numLinks2    =    $('.show-links-er');
	$numLinks.hover(
		function(){
			$numLinks2.css({display:'block'});
		},function(){
			$numLinks2.css({display:'none'});
		}
	)
	//  完  
	
	
	
	//找不到放大镜插件  只好自己写...
	var $smallPics    =$('#small-pics img');//获取三张小图
	var $middlePic    =$('#middle-pic img');//获取那种中等大小的图
	var $smallAs      =$('#small-pics a');//获取  承载小图的a标签
	var $middlePicBox =$('#middle-pic');   //获取  承载中图的div
	var $bigPic       =$('#big-pic img');  //获取大图
	var $bigPicBox    =$('#big-pic');    //获取大图的父元素
	var $jingPian=$('#jingpian');       //获取  镜片
	$smallAs.on('mouseenter',function(){    //给小图  一个选项卡效果
		var i      =  $(this).index();      //获取下标
		var iSrc   =  $smallPics.eq(i-1).attr('src');   //获取该下标的图片src属性值
		$middlePic.attr({src:iSrc});                    //赋给对应大图
		$bigPic.attr({src:iSrc});                       
		$smallAs.removeClass();                         //下图样式改变
		$smallAs.eq(i-1).addClass('small-pics1');
		
	})
	$middlePicBox.hover(                    //中图滑进滑出   大图显示隐藏
		function(){
			$bigPicBox.css({display:'block'});	
			$jingPian.css({display:'block'});
		},function(){
			$bigPicBox.css({display:'none'});
			$jingPian.css({display:'none'});
		}
	)
	
	$middlePic.parent().on('mousemove',$middlePic,function(e){  //支持未来元素写法  否则镜片上无法获取坐标
		var clientY    =e.pageY;//获取鼠标Y坐标
		var clientX    =e.pageX;//
		var $jpWidth   =$jingPian.width();  //获取放大镜镜片宽度;
		var $jpHeight  =$jingPian.height();  //
		var middleTop  =$middlePicBox.offset().top;//获取中图父元素的offsettop/left
		var middleLeft =$middlePicBox.offset().left;// 
		$jingPian.css({top:clientY-$jpHeight/2-middleTop,left:clientX-middleLeft-$jpWidth/2});
		if(parseInt($jingPian.css('top'))<0){
			$jingPian.css({top:0})
		}
		if(parseInt($jingPian.css('left'))<0){
			$jingPian.css({left:0})
		}
		if(parseInt($jingPian.css('top'))>$middlePicBox.height()-$jpHeight){
			$jingPian.css({top:$middlePicBox.height()-$jpHeight})
		}
		if(parseInt($jingPian.css('left'))>$middlePicBox.width()-$jpWidth+25){
			$jingPian.css({left:$middlePicBox.width()-$jpWidth+25})
		}
		$bigPic.css({top:parseInt($jingPian.css('top'))*-25/10});
		$bigPic.css({left:parseInt($jingPian.css('left'))*-2})

	})
	//  放大镜完
	
	//下面是选择尺寸
	var $goodsShowSize   =   $('#goods-show-con>.spans6>a')//获取大小尺寸的标签
	$goodsShowSize.on('click',function(){
		$goodsShowSize.removeClass();
		$(this).addClass('spans6-xuanz');
	});
	//下面是数量变化
	var $goodsShowNumber =1;
	var $goodsNumUp      =$('#goods-show-num .goods-num-up');//获取增加按钮                       
	var $goodsNumDown    =$('#goods-show-num .goods-num-down');//获取减少按钮
	var $goodsShowNums   =$('#goods-show-num .goods-show-nums');//获取显示数量的textarea;
	
	$goodsShowNums.keyup(function(){   //键盘抬起时间
		var reg=/[^\d*]/ig;   //匹配非数字 一次或多次
		if(reg.test($goodsShowNums.val())){   //若匹配到非数字则为true；
			$goodsShowNums.val('');           //输入框为空
		}else{                                    
			if($goodsShowNums.val()>=99){      //若大于99  
				$goodsShowNumber=99;           //则为99
				$goodsShowNums.val(99);         
			}                                    
			if($goodsShowNums.val()<=1){          //若小于1   则为1
				$goodsShowNumber=1
				$goodsShowNums.val(1);
			}
		}
		$goodsShowNumber=$goodsShowNums.val();        //其余情况正常显示
	})
	$goodsNumUp.on('click',function(){  //++键点击事件
		$goodsShowNumber++;
		if($goodsShowNums.val()>=99){
			$goodsShowNumber=99;
			$goodsShowNums.val(99);
		}else{
			$goodsShowNums.val($goodsShowNumber);
		}
	});
	$goodsNumDown.on('click',function(){   //--键点击事件
		$goodsShowNumber--;
		if($goodsShowNums.val()<=1){
			$goodsShowNumber=1
			$goodsShowNums.val(1);
		}else{
			$goodsShowNums.val($goodsShowNumber);
		}
	});
	
	//手机二维码及加入购物车下拉图
	var $phoneShopping   =$('#phone-shopping');//获取是否隐藏元素的父元素
	var $phoneShoppingImg=$('#phone-shopping img');//获取显示隐藏的元素
	var $phoneShoppingA  =$('#phone-shopping a');
	$phoneShopping.hover(
		function(){
			$phoneShoppingImg.css({display:'block'});
		},
		function(){
			$phoneShoppingImg.css({display:'none'});
		}
	);
	var $joinShoppingcar2      =$('#join-shoppingcar2');
	var $joinShoppingcar2Img   =$('#join-shoppingcar2 img');
	$joinShoppingcar2.hover(
		function(){
			$joinShoppingcar2Img.css({display:'block'});
		},
		function(){
			$joinShoppingcar2Img.css({display:'none'});
		}
	);
	//关于咨询问题提交
	var $formBtn1      =$('.form-btn1');//获取提交按钮
	var $formSelect2   =$('.form-select2');//获取下拉菜单
	var $select2Option =$('.form-select2 option');
	var opt=0;
	var formTishi1     =$('.form-tishi1');//获取第一个提示
	var formTishi2     =$('.form-tishi2');//获取第二个提示
	$formBtn1.on('click',function(){     //给提交按钮添加事件
		opt=$('.form-select2').val();    //获取option中的value值   充当下标
		var optionVal=($select2Option.eq(opt).html()); //获取option内容
		var textAreaVal   =$('.textarea').val().length;  //获取输入框文字长度
		if(optionVal=='请选择'){                 //选择类做判断
			formTishi1.css({display:'block'});
			formTishi2.css({display:'none'})
		}else if(textAreaVal<=5){            //文本长度判断
			formTishi2.css({display:'block'});
			formTishi1.css({display:'none'})
		}else{                              //正常动作
			formTishi2.css({display:'none'});
			formTishi1.css({display:'none'});
			alert('提交成功');
		}
	})
	
	//左边那个大的选项卡效果
	var goodsDetails      = $('#goods-details .span');//获取选项按钮
	var detailsPicsLeft = $('#details-pics-left ul');//获取下面的选项内容
	goodsDetails.on('click',function(){
		var i=$(this).index();
		$(window).scrollTop(792)
		goodsDetails.removeClass('span1');
		$(this).addClass('span1');
		detailsPicsLeft.css({display:'none'});
		detailsPicsLeft.eq(i).css({display:'block'});
	})
	
	//右边换一批按钮  选项卡效果；
	var $goodsTooA             =$('#goods-too a')//获取按钮
	var $goodsTooNum           =0;      //设施初始状态
	var $detailsPicsRight    =$('#details-pics-right ul')//获取切换内容
	$goodsTooA.on('click',function(){
		$goodsTooNum++;
		if($goodsTooNum>=3){
			$goodsTooNum=0;
		}
		$detailsPicsRight.css({display:'none'});
		$detailsPicsRight.eq($goodsTooNum).css({display:'block'});
	})
	
	//补一个菜单吸顶
	var $goodsDetails=$('#goods-details');//获取吸顶元素
	$(window).scroll(function(){
		if(($(window).scrollTop())>792){
			$goodsDetails.css({position:'fixed',top:0})
		}else{
			$goodsDetails.css({position:'relative'})
		}
	})
//	if($goodsDetails.offset().top>=792){
//		$goodsDetails.css({position:'fixed'})
//	}
	$('.join-shoppingcar').on('click',function(){
		// 存储之前判断一下是否存储过该商品
	var $spans1     =$('.spans1').text();//获取商品名称
	var $picImgSrc  =$('#middle-pic img').attr('src');//获取图片src
	var $goodsPri   =$('.spans2 span').eq(2).text();//获取价格
	var sGoods = $.cookie('cookie-car');
					//console.log(typeof sGoods)
					if(typeof sGoods === 'undefined') {
						var oGoods = {
							goods: $spans1,
							img: $picImgSrc,
							num: 1,
							pri: $goodsPri
						};
						// 存储所有商品
						var aGoods = [];
						aGoods.push(oGoods);
					} else {
						var
							aGoods = JSON.parse(sGoods),
							isFirst = true; // 默认它是第一次添加
							
						for(var i =0; i < aGoods.length; i++) {
							if(aGoods[i].goods === $spans1){
								aGoods[i].num++;                     //不是的话只加数量
								isFirst = false;
							}
						}

						// 判断是否为第一次添加
						if(isFirst) {
							var oGoods = {
								goods: $spans1,
								img: $picImgSrc,
								num: 1,
								pri: $goodsPri
							};
							aGoods.push(oGoods);
						}
					}
					$.cookie('cookie-car',JSON.stringify(aGoods),{expires:7,path:'/'})
					console.log($.cookie('cookie-car'));
					var oObj      =JSON.parse($.cookie('cookie-car'));
					var goodsNum  =oObj[0].num
					var $goodsJian   =$('.goods-jian');//购物车显示件数
					$goodsJian.html(goodsNum);
	})


	
	
	
	
	
	
	
	
	
	
	
	
})
