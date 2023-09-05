$(function(){
	console.log($.cookie('cookie-car'));
	var oObj      =JSON.parse($.cookie('cookie-car'));
	var goodsNum  =oObj[0].num
	console.log(oObj[0].num);
	
	$newDiv  =$('<div>');
	$newDiv.attr('class','car-con3b');
	$newDiv.html('<div class="input"><input type="checkbox" value="" name="car-con3b"></div><div class="pic"><img src="img/goods-show-big1.jpg"></div><div class="con"><p>缔五季 时尚针织七分袖连衣裙 7744</p><p style="color: #ccc;">颜色：粉红  &nbsp;&nbsp;尺码：L</p></div><div class="con2"><span style="color: #E5004F;">￥79</span><span class="span16"><b>1.6</b>折</span></div><div class="num"><a href="javascript:;">-</a><span>'
	+goodsNum+
	'</span><a href="javascript:;">+</a></div><div class="num2">79</div><div class="caozuo"><a href="javascript:;">移入收藏</a><a href="javascript:;">删除商品</a></div>');
	$newDiv.appendTo($('#car-con3'));
	$('.caozuo a').eq(1).on('click',function(){
		$.cookie('cookie-car','',{expires:-1,path:'/'});
		$('.caozuo a').parent().parent().css('display','none');
		var $goodsPri     =$('.goods-pri');//获取商品总价
		var $goodsAllPri   =$('.goods-all-pri');//获取商品最后价格
		var $endPri        =$('.end-pri');
		$goodsPri.html(0);
		$goodsAllPri.html(0);
		$endPri.html(0);
		
	})
	
	
	var $goodsPri     =$('.goods-pri');//获取商品总价
	var $goodsAllPri   =$('.goods-all-pri');//获取商品最后价格
	var $endPri        =$('.end-pri');
	$goodsPri.html(goodsNum*79);
	$goodsAllPri.html(goodsNum*79+15);
	$endPri.html(goodsNum*79+15);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})