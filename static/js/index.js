$(function(){
	
//  关于我的银泰里的小导航
	var $myYintai      =   $('#my-yintai');  
	var $myYintai1     =   $('#my-yintai1');
	var $myYintaiSpan  =   $('#my-yintai  span');
	$myYintai.hover(
		function(){
			$myYintai.css({background:'#fff',width:75,marginRight:0});
			$myYintai1.css({display:'block'});
			$myYintaiSpan.eq(1).css({display:'block'});
		},function(){
			$myYintai.css({background:'#eee',width:60,marginRight:15});
			$myYintai1.css({display:'none'});
			$myYintaiSpan.eq(1).css({display:'none'})
		}
	)
//   关于  上面的那个小广播
	var $radioLis   =  $('#radio-lis');//获取 运动的ul
	var radioLisNum =  0;
	setInterval(function(){
		radioLisNum++;
		$radioLis.animate({top:-radioLisNum*25},500);
		if(radioLisNum==2){
			radioLisNum=0;
			$radioLis.animate({top:0},10);
		}
	},2000)


//关于楼层导航的动作  
	var $floorNavs     =$('#floor-navs');//获取 整个侧边框
	var $floorNavsSpan =$('.floor-navs-span');//获取标签上字体
	var $floorLis      =$('#floor-navs > li'); //获取li
	$floorLis.hover(	
		function(){
			var i=$(this).index();//获取  划过li的下标
			$floorNavsSpan.eq(i).css({display:'block'});
		},function(){
			var i=$(this).index()
			$floorNavsSpan.eq(i).css({display:'none'});
			floorAutoMove();
		}
	);
	$floorLis.on('click',function(){
		var i=$(this).index();
		$floorNavsSpan.eq(i).css({display:'none'});
		if(i<9){
			$('html,body').animate({scrollTop:1440+i*451},500)
		}else{
			$('html,body').animate({scrollTop:0},500)
			
		}
		
	})
	
	
	
	
	$(window).on('scroll',function(){
		floorAutoMove();
		
	})
	var floorAutoMove=function(){
			var $scrollHeight  =$(window).scrollTop();
			if($scrollHeight>=800){
				$floorNavs.css({display:'block'})
			}else{
				$floorNavs.css({display:'none'})
			}//是否显示导航
			if($scrollHeight>=1440&&$scrollHeight<=1890){
				$floorNavsSpan.eq(0).css({display:'block'});
			}else{
				$floorNavsSpan.eq(0).css({display:'none'});
			}//一楼文字显示与消失
			if($scrollHeight>1890&&$scrollHeight<=2340){
				$floorNavsSpan.eq(1).css({display:'block'});
			}else{
				$floorNavsSpan.eq(1).css({display:'none'});
			}//二楼文字显示与消失
			if($scrollHeight>2340&&$scrollHeight<=2790){
				$floorNavsSpan.eq(2).css({display:'block'});
			}else{
				$floorNavsSpan.eq(2).css({display:'none'});
			}//三楼文字显示与消失
			if($scrollHeight>2790&&$scrollHeight<=3240){
				$floorNavsSpan.eq(3).css({display:'block'});
			}else{
				$floorNavsSpan.eq(3).css({display:'none'});
			}//四楼文字显示与消失
			if($scrollHeight>3240&&$scrollHeight<3690){
				$floorNavsSpan.eq(4).css({display:'block'});
			}else{
				$floorNavsSpan.eq(4).css({display:'none'});
			}//五楼文字显示与消失
			if($scrollHeight>3690&&$scrollHeight<=4140){
				$floorNavsSpan.eq(5).css({display:'block'});
			}else{
				$floorNavsSpan.eq(5).css({display:'none'});
			}//六楼文字显示与消失
			if($scrollHeight>4140&&$scrollHeight<=4590){
				$floorNavsSpan.eq(6).css({display:'block'});
			}else{
				$floorNavsSpan.eq(6).css({display:'none'});
			}//七楼文字显示与消失
			if($scrollHeight>4590&&$scrollHeight<=5040){
				$floorNavsSpan.eq(7).css({display:'block'});
			}else{
				$floorNavsSpan.eq(7).css({display:'none'});
			}//八楼文字显示与消失
			if($scrollHeight>5040&&$scrollHeight<=5490){
				$floorNavsSpan.eq(8).css({display:'block'});
			}else{
				$floorNavsSpan.eq(8).css({display:'none'});
			}//九楼文字显示与消失
			if($scrollHeight>5490){
				$floorNavsSpan.eq(9).css({display:'block'});
			}else{
				$floorNavsSpan.eq(9).css({display:'none'});
			}
		}
	
	
	
	
	
	
	
	
//	来一个goodsnav选项卡效果
	var $goodsNavs       =    $('.all-goods-nav');
	var $goodsNavsGoods  =    $('.goods-navs-goods');
	var $goodsLiSpan     =    $('.goods-li-span');
	$goodsNavs.hover(
//		划过的动作color:#c52257;
		
		function(){
			var i = $(this).index();
			$(this).css({background:'#c52257'});
			$goodsNavsGoods.eq(i).css({display:'block'});
			$goodsLiSpan.eq(i).css({display:'none'});
		},
//		划过后的动作
		function(){
			var i = $(this).index();
			$(this).css({background:'#333'});
			$goodsNavsGoods.eq(i).css({display:'none'});
			$goodsLiSpan.eq(i).css({display:'block'});
		}
	)
//   goodsnav选项卡完毕 
	
//   主页轮播图效果
	var $banner          =    $('#banner');//去除承载banner图的div
	var $bannerBigPic    =    $('.banner-big-pic');//取出所有banner大图；
	var $bannerLeftBtn   =    $('#banner-left-btn');  //取出左边按钮；
	var $bannerRightBtn  =    $('#banner-right-btn');//取出右边按钮；
	var $bannerNavA      =    $('#banner-nav > a');//取出下边按钮；
	var timer            =    null;               //设置一个全局计时器；
	var iNum             =    0;                //给下标一个初始值；
	var bannerAutoMove=function(){		//封装一个自动播放函数
		timer=setInterval(function(){     //计时器   图片自动播放
			iNum++;               //每次下标++；
			if(iNum==4){          //临界值当下标为4时   重置为0；
				iNum=0;
			}
			$bannerNavA.removeClass();      //去除所有banner图下面的a标签class名
			$bannerNavA.eq(iNum).addClass('banner-nav1');   //下标对应加class名
			$bannerBigPic.stop(true,false).fadeOut("slow");    //所有图片透明度渐变  直至消失
			$bannerBigPic.eq(iNum).stop(true,false).fadeIn('slow');  //下标对应的渐变显示	
		},1500)
	}
	bannerAutoMove();

	$banner.hover(           //承载轮播图容器的div  滑进滑出效果
		function(){          //划入
			clearInterval(timer);       //关闭计时器
			$bannerLeftBtn.css({display:'block'});    //左右键显示
			$bannerRightBtn.css({display:'block'});	
		}, 
		function(){                  //划出
			$bannerLeftBtn.css({display:'none'});       //左右键隐藏
			$bannerRightBtn.css({display:'none'});      
			bannerAutoMove();              //开启计时器
		}
	)
	
	$bannerNavA.on('mouseenter',function(){   //为下面小图标添加划过效果
		var i=$(this).index();            //获取划入按钮的下标
		iNum=i;                          //赋给全局下标保持同步
		$bannerBigPic.stop(true,false).fadeOut("slow");    //所有图片透明度渐变  直至消失
		$bannerBigPic.eq(iNum).stop(true,false).fadeIn('slow');  //下标对应的渐变显示
		$bannerNavA.removeClass();      //去除所有banner图下面的a标签class名
		$bannerNavA.eq(iNum).addClass('banner-nav1');   //下标对应加class名
	})
	
	$bannerLeftBtn.on('click',function(){   //点击左键事件
		iNum--;   
		if(iNum<0){          //下标临界值判断
			iNum=3;
		}
		$bannerBigPic.stop(true,false).fadeOut("slow");    //所有图片透明度渐变  直至消失
		$bannerBigPic.eq(iNum).stop(true,false).fadeIn('slow');  //下标对应的渐变显示
		$bannerNavA.removeClass();      //去除所有banner图下面的a标签class名
		$bannerNavA.eq(iNum).addClass('banner-nav1');   //下标对应加class名
	})
	
	$bannerRightBtn.on('click',function(){   //点击右键事件
		iNum++;   
		if(iNum>=4){          //下标临界值判断
			iNum=0;
		}
		$bannerBigPic.stop(true,false).fadeOut("slow");    //所有图片透明度渐变  直至消失
		$bannerBigPic.eq(iNum).stop(true,false).fadeIn('slow');  //下标对应的渐变显示
		$bannerNavA.removeClass();      //去除所有banner图下面的a标签class名
		$bannerNavA.eq(iNum).addClass('banner-nav1');   //下标对应加class名
	})
	var $bannerRightPic      =     $('#banner-right-pic');  //获取banner图 最右边的  图片
	$bannerRightPic.hover(                    //添加滑进滑出效果  
		function(){							//划入   
			$bannerRightPic.stop(true,false).animate({left:'1345px'},300);//向左偏移一点
			$bannerLeftBtn.css({display:'none'});       //左右键隐藏
			$bannerRightBtn.css({display:'none'});      
		},
		function(){
			$bannerRightPic.stop(true,false).animate({left:'1355px'},300);//恢复原来位置
			$bannerLeftBtn.css({display:'block'});       //左右键隐藏
			$bannerRightBtn.css({display:'block'});
		}
	)
//    主页轮播图算是写完了
	
//    写  第一个    选项卡   hot-goods  	
	var $hotGoodsNavs    =   $('.hot-goods-nav > li');//获取  选项卡效果中的头部导航部分
	var $hotGoodsBottom  =   $('.hot-goods-bottom > li');// h获取选项卡中需要切换的部分
	$hotGoodsNavs.mouseenter(function(){    //对头部导航添加划过事件
		var i=$(this).index();             //获取划过的导航的下标
		$hotGoodsNavs.removeClass();       //让所有的头部导航恢复默认样式
		$hotGoodsBottom.removeClass();     //内容区恢复
		$hotGoodsNavs.eq(i).addClass('hot-goods-nav1');  //对应下标导航设施class名
		$hotGoodsBottom.eq(i).addClass('hot-goods-li1'); //对应下标切换内容显示
	})
//    第一个选项卡   写完了    hot-goods	
	
//   第二个选项卡   专柜同款   shoppe-goods
	var $shoppeGoodsNav    =  $('.shoppe-goods-nav > li');//获取  选项卡效果中的头部导航部分
	var $shoppeGoodsPics   =  $('.shoppe-goods-pics > li');// h获取选项卡中需要切换的部分
	$shoppeGoodsNav.on('mouseenter',function(){
		var i=$(this).index();
		$shoppeGoodsNav.removeClass();
		$shoppeGoodsPics.removeClass();
		$shoppeGoodsNav.eq(i).addClass('shoppe-goods-nav1');
		$shoppeGoodsPics.eq(i).addClass('shoppe-goods-picone');
	})
//   上面是第二个选项卡   专柜同款   shoppe-goods
	
//   专柜同款  选项卡中   流动边框
	var $shoppeGoodsPic2a    =   $('.shoppe-goods-pic2a');       //    获取  所有载体
	var $shoppeBorderTop     =  $('.shoppe-border-top');   //	获取上边框div	
	var $shoppeBorderLeft    =  $('.shoppe-border-left');   //
	var $shoppeBorderRight   =  $('.shoppe-border-right');  //
	var $shoppeBorderBottom  =  $('.shoppe-border-bottom');  //
	
	$shoppeGoodsPic2a.hover(      //给所有载体写  划入划出事件
		function(){              //  划入
			var i=$(this).index();      //获取划入下标
			$shoppeBorderBottom.eq(i).stop(true,false).animate({width:198},400);
			//和下标同步的div要运动
			$shoppeBorderTop.eq(i).stop(true,false).animate({width:198},400);
			$shoppeBorderLeft.eq(i).stop(true,false).animate({height:248},400);
			$shoppeBorderRight.eq(i).stop(true,false).animate({height:248},400);
		},function(){
			var i=$(this).index();
			$shoppeBorderBottom.eq(i).stop(true,false).animate({width:0},400);
			$shoppeBorderTop.eq(i).stop(true,false).animate({width:0},400);
			$shoppeBorderLeft.eq(i).stop(true,false).animate({height:0},400);
			$shoppeBorderRight.eq(i).stop(true,false).animate({height:0},400);
		}
	)
//   专柜同款  选项卡中   流动边框  
	
	
	
//一  楼  	
//    下面楼层中左侧  轮播图效果    one-left  
	var $oneLeftUl   =   $('#one-left-ul');  //获取需要运动的UL;
	var $oneLeftBtn  =   $('#one-left-btn'); // 获取  左边点击按钮；
	var $oneLeftBtn2 =   $('#one-left-btn2');//获取右侧点击按钮；
	var $oneLeftInum =   1;
	var floorRightPic=function(){          //分装楼层左侧轮播图运动函数
			$oneLeftUl.stop(true,false).animate({left:-$oneLeftInum*200},500)    //运动方式；
			if($oneLeftInum==0){     //判断临界值
				$oneLeftInum=2;		//重置下标
				$oneLeftUl.animate({left:-$oneLeftInum*200},10)  //ul拉回初始位置
			}
			if($oneLeftInum==3){
				$oneLeftInum=1;
				$oneLeftUl.animate({left:-$oneLeftInum*200},10)
			}	
		}
	$oneLeftBtn2.on('click',function(){   //右键点击事件
		$oneLeftInum--;
		floorRightPic()          //引用函数
	});
	$oneLeftBtn.on('click',function(){    //左键点击事件
		$oneLeftInum++;
		floorRightPic();	    //引用函数
	});
	
//    上面楼层中左侧  轮播图效果    one-left 	
	
//下面是   楼层中间  轮播图	
	var $oneConCenter   =$('#one-con-center');    //获取轮播图载体
	var $oneCenterPics  =$("#one-center-pics");  //获取运动的ul
	var $oneCenterBtn   =$('#one-center-btn');  //获取左侧按键
	var $oneCenterBtn2  =$('#one-center-btn2');  //获取右侧按钮
	var $oneCenterNav   =$('#one-center-nav > a')  //获取底部小按钮
	$oneConCenter.hover(    //划入 划出   左右按钮  显示  隐藏
		function(){
			$oneCenterBtn.css({display:'block'});
			$oneCenterBtn2.css({display:'block'});
		},
		function(){
			$oneCenterBtn.css({display:'none'});
			$oneCenterBtn2.css({display:'none'});
		})
	$oneCenterBtn2.on('click',function(){        //点击右键  执行动作
		$oneCenterPics.stop(true,false).animate({left:-390},500);
		$oneCenterNav.removeClass();          //底部按钮换颜色
		$oneCenterNav.eq(1).addClass('one-center-nav1');
	});
	$oneCenterBtn.on('click',function(){            //点击左键  执行动作
		$oneCenterPics.stop(true,false).animate({left:0},500);
		$oneCenterNav.removeClass();          //底部按钮换颜色
		$oneCenterNav.eq(0).addClass('one-center-nav1');
	})
	
	$oneCenterNav.on('click',function(){    //给底部小按钮添加点击事件
		var i=$(this).index();
		$oneCenterNav.removeClass();
		$oneCenterNav.eq(i).addClass('one-center-nav1');
		if(i==0){
			$oneCenterPics.stop(true,false).animate({left:0},500);
		}else{
			$oneCenterPics.stop(true,false).animate({left:-390},500);
		}
	})
	//  一楼  中间  伪  轮播图
	
	//试着写一下 一楼右侧这个 流动边框
	var $oneRightPic      =  $('.one-right-pic');       //    获取  所有载体
	var $oneBorderTop     =  $('.one-border-top');   //		
	var $oneBorderLeft    =  $('.one-border-left');   //
	var $oneBorderRight   =  $('.one-border-right');  //
	var $oneBorderBottom  =  $('.one-border-bottom');  //
	
	$oneRightPic.hover(
		function(){
			var i=$(this).index();
			$oneBorderBottom.eq(i).stop(true,false).animate({width:270},400);
			$oneBorderTop.eq(i).stop(true,false).animate({width:270},400);
			$oneBorderLeft.eq(i).stop(true,false).animate({height:180},400);
			$oneBorderRight.eq(i).stop(true,false).animate({height:180},400);
		},function(){
			var i=$(this).index();
			$oneBorderBottom.eq(i).stop(true,false).animate({width:0},400);
			$oneBorderTop.eq(i).stop(true,false).animate({width:0},400);
			$oneBorderLeft.eq(i).stop(true,false).animate({height:0},400);
			$oneBorderRight.eq(i).stop(true,false).animate({height:0},400);
		}
	)
	//流动边框完    
	//  一楼完
	
	//二  楼  	
//    下面楼层中左侧  轮播图效果    two-left  
	var $twoLeftUl   =   $('#two-left-ul');  //获取需要运动的UL;
	var $twoLeftBtn  =   $('#two-left-btn'); // 获取  左边点击按钮；
	var $twoLeftBtn2 =   $('#two-left-btn2');//获取右侧点击按钮；
	var $twoLeftInum =   1;
	var floorRightPic2=function(){          //分装楼层左侧轮播图运动函数
			$twoLeftUl.stop(true,false).animate({left:-$twoLeftInum*200},500)    //运动方式；
			if($twoLeftInum==0){     //判断临界值
				$twoLeftInum=2;		//重置下标
				$twoLeftUl.animate({left:-$twoLeftInum*200},10)  //ul拉回初始位置
			}
			if($twoLeftInum==3){
				$twoLeftInum=1;
				$twoLeftUl.animate({left:-$twoLeftInum*200},10)
			}	
		}

	$twoLeftBtn2.on('click',function(){   //右键点击事件
		$twoLeftInum--;
		floorRightPic2()          //引用函数
	});
	$twoLeftBtn.on('click',function(){    //左键点击事件
		$twoLeftInum++;
		floorRightPic2();	    //引用函数
	});
	
//    上面楼层中左侧  轮播图效果    two-left 	
	
	//试着写一下 一楼右侧这个 流动边框
	var $twoRightPic      =  $('.two-right-pic');       //    获取  所有载体
	var $twoBorderTop     =  $('.two-border-top');   //		
	var $twoBorderLeft    =  $('.two-border-left');   //
	var $twoBorderRight   =  $('.two-border-right');  //
	var $twoBorderBottom  =  $('.two-border-bottom');  //
	$twoRightPic.hover(
		function(){
			var i=$(this).index();
			$twoBorderBottom.eq(i).stop(true,false).animate({width:270},400);
			$twoBorderTop.eq(i).stop(true,false).animate({width:270},400);
			$twoBorderLeft.eq(i).stop(true,false).animate({height:180},400);
			$twoBorderRight.eq(i).stop(true,false).animate({height:180},400);
		},function(){
			var i=$(this).index();
			$twoBorderBottom.eq(i).stop(true,false).animate({width:0},400);
			$twoBorderTop.eq(i).stop(true,false).animate({width:0},400);
			$twoBorderLeft.eq(i).stop(true,false).animate({height:0},400);
			$twoBorderRight.eq(i).stop(true,false).animate({height:0},400);
		}
	)
	//流动边框完    
	//  二楼完
	
	//三  楼  	
//    下面楼层中左侧  轮播图效果    two-left  
	var $threeLeftUl   =   $('#three-left-ul');  //获取需要运动的UL;
	var $threeLeftBtn  =   $('#three-left-btn'); // 获取  左边点击按钮；
	var $threeLeftBtn2 =   $('#three-left-btn2');//获取右侧点击按钮；
	var $threeLeftInum =   1;
	var floorRightPic3=function(){          //分装楼层左侧轮播图运动函数
			$threeLeftUl.stop(true,false).animate({left:-$threeLeftInum*200},500)    //运动方式；
			if($threeLeftInum==0){     //判断临界值
				$threeLeftInum=2;		//重置下标
				$threeLeftUl.animate({left:-$threeLeftInum*200},10)  //ul拉回初始位置
			}
			if($threeLeftInum==3){
				$threeLeftInum=1;
				$threeLeftUl.animate({left:-$threeLeftInum*200},10)
			}	
	}
	$threeLeftBtn2.on('click',function(){   //右键点击事件
		$threeLeftInum--;
		floorRightPic3()          //引用函数
	});
	$threeLeftBtn.on('click',function(){    //左键点击事件
		$threeLeftInum++;
		floorRightPic3();	    //引用函数
	});	
//    上面楼层中左侧  轮播图效果    three-left 	
	
	//试着写一下 楼右侧这个 流动边框
	var $threeRightPic      =  $('.three-right-pic');       //    获取  所有载体
	var $threeBorderTop     =  $('.three-border-top');   //		
	var $threeBorderLeft    =  $('.three-border-left');   //
	var $threeBorderRight   =  $('.three-border-right');  //
	var $threeBorderBottom  =  $('.three-border-bottom');  //	
	$threeRightPic.hover(
		function(){
			var i=$(this).index();
			$threeBorderBottom.eq(i).stop(true,false).animate({width:270},400);
			$threeBorderTop.eq(i).stop(true,false).animate({width:270},400);
			$threeBorderLeft.eq(i).stop(true,false).animate({height:180},400);
			$threeBorderRight.eq(i).stop(true,false).animate({height:180},400);
		},function(){
			var i=$(this).index();
			$threeBorderBottom.eq(i).stop(true,false).animate({width:0},400);
			$threeBorderTop.eq(i).stop(true,false).animate({width:0},400);
			$threeBorderLeft.eq(i).stop(true,false).animate({height:0},400);
			$threeBorderRight.eq(i).stop(true,false).animate({height:0},400);
		}
	)
	//流动边框完    
	//  三楼完
	
	
	//四  楼  	
//    下面楼层中左侧  轮播图效果    two-left  
	var $fourLeftUl   =   $('#four-left-ul');  //获取需要运动的UL;
	var $fourLeftBtn  =   $('#four-left-btn'); // 获取  左边点击按钮；
	var $fourLeftBtn2 =   $('#four-left-btn2');//获取右侧点击按钮；
	var $fourLeftInum =   1;
	var floorRightPic4=function(){          //分装楼层左侧轮播图运动函数
			$fourLeftUl.stop(true,false).animate({left:-$fourLeftInum*200},500)    //运动方式；
			if($fourLeftInum==0){     //判断临界值
				$fourLeftInum=2;		//重置下标
				$fourLeftUl.animate({left:-$fourLeftInum*200},10)  //ul拉回初始位置
			}
			if($fourLeftInum==3){
				$fourLeftInum=1;
				$fourLeftUl.animate({left:-$fourLeftInum*200},10)
			}	
		}

	$fourLeftBtn2.on('click',function(){   //右键点击事件
		$fourLeftInum--;
		floorRightPic4()          //引用函数
	});
	$fourLeftBtn.on('click',function(){    //左键点击事件
		$fourLeftInum++;
		floorRightPic4();	    //引用函数
	});
	
//    上面楼层中左侧  轮播图效果    four-left 	
	
//下面是   楼层中间  轮播图	
	var $fourConCenter   =$('#four-con-center');    //获取轮播图载体
	var $fourCenterPics  =$("#four-center-pics");  //获取运动的ul
	var $fourCenterBtn   =$('#four-center-btn');  //获取左侧按键
	var $fourCenterBtn2  =$('#four-center-btn2');  //获取右侧按钮
	var $fourCenterNav   =$('#four-center-nav > a')  //获取底部小按钮
	$fourConCenter.hover(    //划入 划出   左右按钮  显示  隐藏
		function(){
			$fourCenterBtn.css({display:'block'});
			$fourCenterBtn2.css({display:'block'});
		},
		function(){
			$fourCenterBtn.css({display:'none'});
			$fourCenterBtn2.css({display:'none'});
		})
	$fourCenterBtn2.on('click',function(){        //点击右键  执行动作
		$fourCenterPics.stop(true,false).animate({left:-390},500);
		$fourCenterNav.removeClass();          //底部按钮换颜色
		$fourCenterNav.eq(1).addClass('four-center-nav1');
	});
	$fourCenterBtn.on('click',function(){            //点击左键  执行动作
		$fourCenterPics.stop(true,false).animate({left:0},500);
		$fourCenterNav.removeClass();          //底部按钮换颜色
		$fourCenterNav.eq(0).addClass('four-center-nav1');
	})
	
	$fourCenterNav.on('click',function(){    //给底部小按钮添加点击事件
		var i=$(this).index();
		$fourCenterNav.removeClass();
		$fourCenterNav.eq(i).addClass('four-center-nav1');
		if(i==0){
			$fourCenterPics.stop(true,false).animate({left:0},500);
		}else{
			$fourCenterPics.stop(true,false).animate({left:-390},500);
		}
	})
	//  楼  中间  伪  轮播图
	
	//试着写一下 楼右侧这个 流动边框
	var $fourRightPic      =  $('.four-right-pic');       //    获取  所有载体
	var $fourBorderTop     =  $('.four-border-top');   //		
	var $fourBorderLeft    =  $('.four-border-left');   //
	var $fourBorderRight   =  $('.four-border-right');  //
	var $fourBorderBottom  =  $('.four-border-bottom');  //
	
	$fourRightPic.hover(
		function(){
			var i=$(this).index();
			$fourBorderBottom.eq(i).stop(true,false).animate({width:270},400);
			$fourBorderTop.eq(i).stop(true,false).animate({width:270},400);
			$fourBorderLeft.eq(i).stop(true,false).animate({height:180},400);
			$fourBorderRight.eq(i).stop(true,false).animate({height:180},400);
		},function(){
			var i=$(this).index();
			$fourBorderBottom.eq(i).stop(true,false).animate({width:0},400);
			$fourBorderTop.eq(i).stop(true,false).animate({width:0},400);
			$fourBorderLeft.eq(i).stop(true,false).animate({height:0},400);
			$fourBorderRight.eq(i).stop(true,false).animate({height:0},400);
		}
	)
	//流动边框完    
	//  四楼完
	
	//五 楼  	
//    下面楼层中左侧  轮播图效果    two-left  
	var $fiveLeftUl   =   $('#five-left-ul');  //获取需要运动的UL;
	var $fiveLeftBtn  =   $('#five-left-btn'); // 获取  左边点击按钮；
	var $fiveLeftBtn2 =   $('#five-left-btn2');//获取右侧点击按钮；
	var $fiveLeftInum =   1;
	var floorRightPic5=function(){          //分装楼层左侧轮播图运动函数
			$fiveLeftUl.stop(true,false).animate({left:-$fiveLeftInum*200},500)    //运动方式；
			if($fiveLeftInum==0){     //判断临界值
				$fiveLeftInum=2;		//重置下标
				$fiveLeftUl.animate({left:-$fiveLeftInum*200},10)  //ul拉回初始位置
			}
			if($fiveLeftInum==3){
				$fiveLeftInum=1;
				$fiveLeftUl.animate({left:-$fiveLeftInum*200},10)
			}	
		}

	$fiveLeftBtn2.on('click',function(){   //右键点击事件
		$fiveLeftInum--;
		floorRightPic5()          //引用函数
	});
	$fiveLeftBtn.on('click',function(){    //左键点击事件
		$fiveLeftInum++;
		floorRightPic5();	    //引用函数
	});
	
//    上面楼层中左侧  轮播图效果    five-left 	
	
//下面是   楼层中间  轮播图	
	var $fiveConCenter   =$('#five-con-center');    //获取轮播图载体
	var $fiveCenterPics  =$("#five-center-pics");  //获取运动的ul
	var $fiveCenterBtn   =$('#five-center-btn');  //获取左侧按键
	var $fiveCenterBtn2  =$('#five-center-btn2');  //获取右侧按钮
	var $fiveCenterNav   =$('#five-center-nav > a')  //获取底部小按钮
	$fiveConCenter.hover(    //划入 划出   左右按钮  显示  隐藏
		function(){
			$fiveCenterBtn.css({display:'block'});
			$fiveCenterBtn2.css({display:'block'});
		},
		function(){
			$fiveCenterBtn.css({display:'none'});
			$fiveCenterBtn2.css({display:'none'});
		})
	$fiveCenterBtn2.on('click',function(){        //点击右键  执行动作
		$fiveCenterPics.stop(true,false).animate({left:-390},500);
		$fiveCenterNav.removeClass();          //底部按钮换颜色
		$fiveCenterNav.eq(1).addClass('five-center-nav1');
	});
	$fiveCenterBtn.on('click',function(){            //点击左键  执行动作
		$fiveCenterPics.stop(true,false).animate({left:0},500);
		$fiveCenterNav.removeClass();          //底部按钮换颜色
		$fiveCenterNav.eq(0).addClass('five-center-nav1');
	})
	
	$fiveCenterNav.on('click',function(){    //给底部小按钮添加点击事件
		var i=$(this).index();
		$fiveCenterNav.removeClass();
		$fiveCenterNav.eq(i).addClass('five-center-nav1');
		if(i==0){
			$fiveCenterPics.stop(true,false).animate({left:0},500);
		}else{
			$fiveCenterPics.stop(true,false).animate({left:-390},500);
		}
	})
	//  楼  中间  伪  轮播图
	
	//试着写一下 楼右侧这个 流动边框
	var $fiveRightPic      =  $('.five-right-pic');       //    获取  所有载体
	var $fiveBorderTop     =  $('.five-border-top');   //		
	var $fiveBorderLeft    =  $('.five-border-left');   //
	var $fiveBorderRight   =  $('.five-border-right');  //
	var $fiveBorderBottom  =  $('.five-border-bottom');  //
	
	$fiveRightPic.hover(
		function(){
			var i=$(this).index();
			$fiveBorderBottom.eq(i).stop(true,false).animate({width:270},400);
			$fiveBorderTop.eq(i).stop(true,false).animate({width:270},400);
			$fiveBorderLeft.eq(i).stop(true,false).animate({height:180},400);
			$fiveBorderRight.eq(i).stop(true,false).animate({height:180},400);
		},function(){
			var i=$(this).index();
			$fiveBorderBottom.eq(i).stop(true,false).animate({width:0},400);
			$fiveBorderTop.eq(i).stop(true,false).animate({width:0},400);
			$fiveBorderLeft.eq(i).stop(true,false).animate({height:0},400);
			$fiveBorderRight.eq(i).stop(true,false).animate({height:0},400);
		}
	)
	//流动边框完    
	//  五楼完
	
	//六 楼  	
//    下面楼层中左侧  轮播图效果    two-left  
	var $sixLeftUl   =   $('#six-left-ul');  //获取需要运动的UL;
	var $sixLeftBtn  =   $('#six-left-btn'); // 获取  左边点击按钮；
	var $sixLeftBtn2 =   $('#six-left-btn2');//获取右侧点击按钮；
	var $sixLeftInum =   1;
	var floorRightPic6=function(){          //分装楼层左侧轮播图运动函数
			$sixLeftUl.stop(true,false).animate({left:-$sixLeftInum*200},500)    //运动方式；
			if($sixLeftInum==0){     //判断临界值
				$sixLeftInum=2;		//重置下标
				$sixLeftUl.animate({left:-$sixLeftInum*200},10)  //ul拉回初始位置
			}
			if($sixLeftInum==3){
				$sixLeftInum=1;
				$sixLeftUl.animate({left:-$sixLeftInum*200},10)
			}	
		}

	$sixLeftBtn2.on('click',function(){   //右键点击事件
		$sixLeftInum--;
		floorRightPic6()          //引用函数
	});
	$sixLeftBtn.on('click',function(){    //左键点击事件
		$sixLeftInum++;
		floorRightPic6();	    //引用函数
	});
	
//    上面楼层中左侧  轮播图效果    six-left 	
	
//下面是   楼层中间  轮播图	
	var $sixConCenter   =$('#six-con-center');    //获取轮播图载体
	var $sixCenterPics  =$("#six-center-pics");  //获取运动的ul
	var $sixCenterBtn   =$('#six-center-btn');  //获取左侧按键
	var $sixCenterBtn2  =$('#six-center-btn2');  //获取右侧按钮
	var $sixCenterNav   =$('#six-center-nav > a')  //获取底部小按钮
	$sixConCenter.hover(    //划入 划出   左右按钮  显示  隐藏
		function(){
			$sixCenterBtn.css({display:'block'});
			$sixCenterBtn2.css({display:'block'});
		},
		function(){
			$sixCenterBtn.css({display:'none'});
			$sixCenterBtn2.css({display:'none'});
		})
	$sixCenterBtn2.on('click',function(){        //点击右键  执行动作
		$sixCenterPics.stop(true,false).animate({left:-390},500);
		$sixCenterNav.removeClass();          //底部按钮换颜色
		$sixCenterNav.eq(1).addClass('six-center-nav1');
	});
	$sixCenterBtn.on('click',function(){            //点击左键  执行动作
		$sixCenterPics.stop(true,false).animate({left:0},500);
		$sixCenterNav.removeClass();          //底部按钮换颜色
		$sixCenterNav.eq(0).addClass('six-center-nav1');
	})
	
	$sixCenterNav.on('click',function(){    //给底部小按钮添加点击事件
		var i=$(this).index();
		$sixCenterNav.removeClass();
		$sixCenterNav.eq(i).addClass('six-center-nav1');
		if(i==0){
			$sixCenterPics.stop(true,false).animate({left:0},500);
		}else{
			$sixCenterPics.stop(true,false).animate({left:-390},500);
		}
	})
	//  楼  中间  伪  轮播图
	
	//试着写一下 楼右侧这个 流动边框
	var $sixRightPic      =  $('.six-right-pic');       //    获取  所有载体
	var $sixBorderTop     =  $('.six-border-top');   //		
	var $sixBorderLeft    =  $('.six-border-left');   //
	var $sixBorderRight   =  $('.six-border-right');  //
	var $sixBorderBottom  =  $('.six-border-bottom');  //
	
	$sixRightPic.hover(
		function(){
			var i=$(this).index();
			$sixBorderBottom.eq(i).stop(true,false).animate({width:270},400);
			$sixBorderTop.eq(i).stop(true,false).animate({width:270},400);
			$sixBorderLeft.eq(i).stop(true,false).animate({height:180},400);
			$sixBorderRight.eq(i).stop(true,false).animate({height:180},400);
		},function(){
			var i=$(this).index();
			$sixBorderBottom.eq(i).stop(true,false).animate({width:0},400);
			$sixBorderTop.eq(i).stop(true,false).animate({width:0},400);
			$sixBorderLeft.eq(i).stop(true,false).animate({height:0},400);
			$sixBorderRight.eq(i).stop(true,false).animate({height:0},400);
		}
	)
	//流动边框完    
	//  六楼完
	
	//七 楼  	
//    下面楼层中左侧  轮播图效果    two-left  
	var $sevenLeftUl   =   $('#seven-left-ul');  //获取需要运动的UL;
	var $sevenLeftBtn  =   $('#seven-left-btn'); // 获取  左边点击按钮；
	var $sevenLeftBtn2 =   $('#seven-left-btn2');//获取右侧点击按钮；
	var $sevenLeftInum =   1;
	var floorRightPic7=function(){          //分装楼层左侧轮播图运动函数
			$sevenLeftUl.stop(true,false).animate({left:-$sevenLeftInum*200},500)    //运动方式；
			if($sevenLeftInum==0){     //判断临界值
				$sevenLeftInum=2;		//重置下标
				$sevenLeftUl.animate({left:-$sevenLeftInum*200},10)  //ul拉回初始位置
			}
			if($sevenLeftInum==3){
				$sevenLeftInum=1;
				$sevenLeftUl.animate({left:-$sevenLeftInum*200},10)
			}	
		}

	$sevenLeftBtn2.on('click',function(){   //右键点击事件
		$sevenLeftInum--;
		floorRightPic7()          //引用函数
	});
	$sevenLeftBtn.on('click',function(){    //左键点击事件
		$sevenLeftInum++;
		floorRightPic7();	    //引用函数
	});
	
//    上面楼层中左侧  轮播图效果    seven-left 	
	
//下面是   楼层中间  轮播图	
	var $sevenConCenter   =$('#seven-con-center');    //获取轮播图载体
	var $sevenCenterPics  =$("#seven-center-pics");  //获取运动的ul
	var $sevenCenterBtn   =$('#seven-center-btn');  //获取左侧按键
	var $sevenCenterBtn2  =$('#seven-center-btn2');  //获取右侧按钮
	var $sevenCenterNav   =$('#seven-center-nav > a')  //获取底部小按钮
	$sevenConCenter.hover(    //划入 划出   左右按钮  显示  隐藏
		function(){
			$sevenCenterBtn.css({display:'block'});
			$sevenCenterBtn2.css({display:'block'});
		},
		function(){
			$sevenCenterBtn.css({display:'none'});
			$sevenCenterBtn2.css({display:'none'});
		})
	$sevenCenterBtn2.on('click',function(){        //点击右键  执行动作
		$sevenCenterPics.stop(true,false).animate({left:-390},500);
		$sevenCenterNav.removeClass();          //底部按钮换颜色
		$sevenCenterNav.eq(1).addClass('seven-center-nav1');
	});
	$sevenCenterBtn.on('click',function(){            //点击左键  执行动作
		$sevenCenterPics.stop(true,false).animate({left:0},500);
		$sevenCenterNav.removeClass();          //底部按钮换颜色
		$sevenCenterNav.eq(0).addClass('seven-center-nav1');
	})
	
	$sevenCenterNav.on('click',function(){    //给底部小按钮添加点击事件
		var i=$(this).index();
		$sevenCenterNav.removeClass();
		$sevenCenterNav.eq(i).addClass('seven-center-nav1');
		if(i==0){
			$sevenCenterPics.stop(true,false).animate({left:0},500);
		}else{
			$sevenCenterPics.stop(true,false).animate({left:-390},500);
		}
	})
	//  楼  中间  伪  轮播图
	
	//试着写一下 楼右侧这个 流动边框
	var $sevenRightPic      =  $('.seven-right-pic');       //    获取  所有载体
	var $sevenBorderTop     =  $('.seven-border-top');   //		
	var $sevenBorderLeft    =  $('.seven-border-left');   //
	var $sevenBorderRight   =  $('.seven-border-right');  //
	var $sevenBorderBottom  =  $('.seven-border-bottom');  //
	
	$sevenRightPic.hover(
		function(){
			var i=$(this).index();
			$sevenBorderBottom.eq(i).stop(true,false).animate({width:270},400);
			$sevenBorderTop.eq(i).stop(true,false).animate({width:270},400);
			$sevenBorderLeft.eq(i).stop(true,false).animate({height:180},400);
			$sevenBorderRight.eq(i).stop(true,false).animate({height:180},400);
		},function(){
			var i=$(this).index();
			$sevenBorderBottom.eq(i).stop(true,false).animate({width:0},400);
			$sevenBorderTop.eq(i).stop(true,false).animate({width:0},400);
			$sevenBorderLeft.eq(i).stop(true,false).animate({height:0},400);
			$sevenBorderRight.eq(i).stop(true,false).animate({height:0},400);
		}
	)
	//流动边框完    
	//  七楼完
	
	//八 楼  	
//    下面楼层中左侧  轮播图效果    two-left  
	var $eightLeftUl   =   $('#eight-left-ul');  //获取需要运动的UL;
	var $eightLeftBtn  =   $('#eight-left-btn'); // 获取  左边点击按钮；
	var $eightLeftBtn2 =   $('#eight-left-btn2');//获取右侧点击按钮；
	var $eightLeftInum =   1;
	var floorRightPic8=function(){          //分装楼层左侧轮播图运动函数
			$eightLeftUl.stop(true,false).animate({left:-$eightLeftInum*200},500)    //运动方式；
			if($eightLeftInum==0){     //判断临界值
				$eightLeftInum=2;		//重置下标
				$eightLeftUl.animate({left:-$eightLeftInum*200},10)  //ul拉回初始位置
			}
			if($eightLeftInum==3){
				$eightLeftInum=1;
				$eightLeftUl.animate({left:-$eightLeftInum*200},10)
			}	
		}

	$eightLeftBtn2.on('click',function(){   //右键点击事件
		$eightLeftInum--;
		floorRightPic8()          //引用函数
	});
	$eightLeftBtn.on('click',function(){    //左键点击事件
		$eightLeftInum++;
		floorRightPic8();	    //引用函数
	});
	
//    上面楼层中左侧  轮播图效果    eight-left 	
	
//下面是   楼层中间  轮播图	
	var $eightConCenter   =$('#eight-con-center');    //获取轮播图载体
	var $eightCenterPics  =$("#eight-center-pics");  //获取运动的ul
	var $eightCenterBtn   =$('#eight-center-btn');  //获取左侧按键
	var $eightCenterBtn2  =$('#eight-center-btn2');  //获取右侧按钮
	var $eightCenterNav   =$('#eight-center-nav > a')  //获取底部小按钮
	$eightConCenter.hover(    //划入 划出   左右按钮  显示  隐藏
		function(){
			$eightCenterBtn.css({display:'block'});
			$eightCenterBtn2.css({display:'block'});
		},
		function(){
			$eightCenterBtn.css({display:'none'});
			$eightCenterBtn2.css({display:'none'});
		})
	$eightCenterBtn2.on('click',function(){        //点击右键  执行动作
		$eightCenterPics.stop(true,false).animate({left:-390},500);
		$eightCenterNav.removeClass();          //底部按钮换颜色
		$eightCenterNav.eq(1).addClass('eight-center-nav1');
	});
	$eightCenterBtn.on('click',function(){            //点击左键  执行动作
		$eightCenterPics.stop(true,false).animate({left:0},500);
		$eightCenterNav.removeClass();          //底部按钮换颜色
		$eightCenterNav.eq(0).addClass('eight-center-nav1');
	})
	
	$eightCenterNav.on('click',function(){    //给底部小按钮添加点击事件
		var i=$(this).index();
		$eightCenterNav.removeClass();
		$eightCenterNav.eq(i).addClass('eight-center-nav1');
		if(i==0){
			$eightCenterPics.stop(true,false).animate({left:0},500);
		}else{
			$eightCenterPics.stop(true,false).animate({left:-390},500);
		}
	})
	//  楼  中间  伪  轮播图
	
	//试着写一下 楼右侧这个 流动边框
	var $eightRightPic      =  $('.eight-right-pic');       //    获取  所有载体
	var $eightBorderTop     =  $('.eight-border-top');   //		
	var $eightBorderLeft    =  $('.eight-border-left');   //
	var $eightBorderRight   =  $('.eight-border-right');  //
	var $eightBorderBottom  =  $('.eight-border-bottom');  //
	
	$eightRightPic.hover(
		function(){
			var i=$(this).index();
			$eightBorderBottom.eq(i).stop(true,false).animate({width:270},400);
			$eightBorderTop.eq(i).stop(true,false).animate({width:270},400);
			$eightBorderLeft.eq(i).stop(true,false).animate({height:180},400);
			$eightBorderRight.eq(i).stop(true,false).animate({height:180},400);
		},function(){
			var i=$(this).index();
			$eightBorderBottom.eq(i).stop(true,false).animate({width:0},400);
			$eightBorderTop.eq(i).stop(true,false).animate({width:0},400);
			$eightBorderLeft.eq(i).stop(true,false).animate({height:0},400);
			$eightBorderRight.eq(i).stop(true,false).animate({height:0},400);
		}
	)
	//流动边框完    
	//  八楼完
	
	//九楼  	
//    下面楼层中左侧  轮播图效果    two-left  
	var $nineLeftUl   =   $('#nine-left-ul');  //获取需要运动的UL;
	var $nineLeftBtn  =   $('#nine-left-btn'); // 获取  左边点击按钮；
	var $nineLeftBtn2 =   $('#nine-left-btn2');//获取右侧点击按钮；
	var $nineLeftInum =   1;
	var floorRightPic9=function(){          //分装楼层左侧轮播图运动函数
			$nineLeftUl.stop(true,false).animate({left:-$nineLeftInum*200},500)    //运动方式；
			if($nineLeftInum==0){     //判断临界值
				$nineLeftInum=2;		//重置下标
				$nineLeftUl.animate({left:-$nineLeftInum*200},10)  //ul拉回初始位置
			}
			if($nineLeftInum==3){
				$nineLeftInum=1;
				$nineLeftUl.animate({left:-$nineLeftInum*200},10)
			}	
		}

	$nineLeftBtn2.on('click',function(){   //右键点击事件
		$nineLeftInum--;
		floorRightPic9()          //引用函数
	});
	$nineLeftBtn.on('click',function(){    //左键点击事件
		$nineLeftInum++;
		floorRightPic9();	    //引用函数
	});
	
//    上面楼层中左侧  轮播图效果    nine-left 	

	//试着写一下 楼右侧这个 流动边框
	var $nineRightPic      =  $('.nine-right-pic');       //    获取  所有载体
	var $nineBorderTop     =  $('.nine-border-top');   //		
	var $nineBorderLeft    =  $('.nine-border-left');   //
	var $nineBorderRight   =  $('.nine-border-right');  //
	var $nineBorderBottom  =  $('.nine-border-bottom');  //
	
	$nineRightPic.hover(
		function(){
			var i=$(this).index();
			$nineBorderBottom.eq(i).stop(true,false).animate({width:270},400);
			$nineBorderTop.eq(i).stop(true,false).animate({width:270},400);
			$nineBorderLeft.eq(i).stop(true,false).animate({height:180},400);
			$nineBorderRight.eq(i).stop(true,false).animate({height:180},400);
		},function(){
			var i=$(this).index();
			$nineBorderBottom.eq(i).stop(true,false).animate({width:0},400);
			$nineBorderTop.eq(i).stop(true,false).animate({width:0},400);
			$nineBorderLeft.eq(i).stop(true,false).animate({height:0},400);
			$nineBorderRight.eq(i).stop(true,false).animate({height:0},400);
		}
	)
	//流动边框完    
	//  九楼完
	








})
