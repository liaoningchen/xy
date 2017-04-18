$(document).ready(function(){

	var navWrap = $(".nav-wrap");
	//获得  导航条距离网页原点的距离
	var navPos = navWrap.offset().top;
	//获得导航条的实际高度
	var navHeight = navWrap.outerHeight();
	 // alert(navPos);
	 // alert(navHeight);
	
	//滚动监听
	$(window).scroll(function(event) {
		
		//获取当前滚动条的位置
		var sTop = $(window).scrollTop();
		//如果滚动条超出100px 就显示回到顶部按钮 否则隐藏
		if(sTop > 100) {
			$("#topcontrol").fadeIn(500);
		} else {

			$("#topcontrol").fadeOut(500);
		}
		//当滚动条超过导航条的位置 导航条fixed
		if(sTop >= navPos) {
			if(!navWrap.hasClass('fixed')) {
				navWrap.addClass('fixed');
								
				//用margin填补导航条的空白占位
				// $(".banner").css("margin-bottom",navHeight);
			}
		}else{
			if(navWrap.hasClass('fixed')) {
				navWrap.removeClass('fixed');
				$(".banner").css("margin-bottom",0);
			}
		}

		//滚动监听高亮导航条
		var intro = {
			offsetTop:$("#post-intro").offset().top,
			height:$("#post-intro").outerHeight()
		}

		var usage = {
			offsetTop:$("#post-usage").offset().top,
			height:$("#post-usage").outerHeight()
		}

		var choiceness = {
			offsetTop:$("#choiceness").offset().top,
			height:$("#choiceness").outerHeight()
		}
		//海量正版下载
		if(sTop >= intro.offsetTop - navHeight && sTop <= intro.height+ intro.offsetTop - navHeight){

			if(!$(".intro").hasClass('active'))
			$(".intro").addClass('active');
		}else{
			$(".intro").removeClass('active');
		}
		//无需密码
		if(sTop >= usage.offsetTop - navHeight && sTop <= usage.height+ usage.offsetTop - navHeight){

			if(!$(".usage").hasClass('active'))
			$(".usage").addClass('active');
		}else{
			$(".usage").removeClass('active');
		}
		//手机瘦身
		if(sTop >= choiceness.offsetTop - navHeight && sTop <= choiceness.height+ choiceness.offsetTop - navHeight){

			if(!$(".choice").hasClass('active'))
			$(".choice").addClass('active');
		}else{
			$(".choice").removeClass('active');
		}
	});

	//点击回到顶部
	$("#topcontrol").click(function(event) {
		$("html,body").animate({scrollTop:0},1000);
	});

	//锚点链接过度
	$(".nav-wrap a").click(function(event) {
		//获得对应板块的偏移量
		var offsetTop = $(this.hash).offset().top;
		$("html,body").animate({scrollTop:offsetTop - navHeight},1000);


		return false;
	});

});