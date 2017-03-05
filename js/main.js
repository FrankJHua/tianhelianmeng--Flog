var _URL = 'images/';
var eraseMax = 50;//擦除次数
var datas =
[
	[
		{"green":4,"leisure":4,"frog":-296},
		{"green":4,"leisure":3,"frog":-99},
		{"green":3,"leisure":4,"frog":-666},
		{"green":4,"leisure":3,"frog":-296}
	],
	[
		{"green":4,"leisure":3,"frog":-666},
		{"green":5,"leisure":3,"frog":-296},
		{"green":4,"leisure":4,"frog":-99},
		{"green":5,"leisure":3,"frog":-666}
	],
	[
		{"green":4,"leisure":4,"frog":-99},
		{"green":4,"leisure":4,"frog":-666},
		{"green":4,"leisure":4,"frog":-296},
		{"green":4,"leisure":4,"frog":-99}
	]
];
var tripType = 1,//当前选择的旅行类型 (1:沙滩    2:绿林   3:城市)
	temp,//当前选择的旅行类型 ("beach","city","forest")
	route_index = 0,//选择旅行路线的下标
	frog;//雾霾指数

//页面初始化
function pageIndex(){
	$(".index-txt1").addClass("slideInLeft");
	$(".index-txt2").addClass("slideInRight");
	$(".clouds > img").addClass("slideOutLeft1");
	setTimeout(function(){
		$(".index-btn").addClass("zoomIn");
	},1000);
}
//function page1Dark(){
//	$("#arrow-black-left").addClass("slideOutLeft2");
//	$("#arrow-black-right").addClass("slideOutRight");
//}
function page1Bright(){
	$(".p1-bright-txt1,.p1-bright-txt2,.p1-bright-txt3").addClass("slideOutRight2");
	setTimeout(function(){
		$(".p1-tip").addClass("fadeIn");
	},1000);
}
function page2(){
	setTimeout(function(){
		$(".p2-txt").eq(0).addClass("fadeInUp");
		setTimeout(function(){
			$(".p2-txt").eq(1).addClass("fadeInUp");
			setTimeout(function(){
				$(".p2-txt").eq(2).addClass("fadeInUp");
				setTimeout(function(){
					$(".p2-txt").eq(3).addClass("fadeInUp");
					setTimeout(function(){
						$(".p2-btn").addClass("zoomIn");
					},800);
				},800);
			},800);
		},800);
	},800);
}
function page3(){
	$(".p3-top-txt").addClass("fadeInUp");
	setTimeout(function(){
		$(".p3-tip").addClass("fadeIn");
		setTimeout(function(){
			$(".p3-confirm").addClass("bounceIn");
		},800);
	},800);
	touch.on(".p3-trip-view","swipeleft",function(e){
		e.preventDefault();
		showNextPic("right");
	});
	touch.on(".p3-trip-view","swiperight",function(e){
		e.preventDefault();
		showNextPic("left")

	});
	$(".left").on("click",function(e){
		e.stopPropagation();
		showNextPic("left");
	});
	$(".right").on("click",function(e){
		e.stopPropagation();
		showNextPic("right");
	});
	function showNextPic(direction){
		$(".p3-bottom-txt").removeClass("bar"+tripType);
		$(".p3-bottom-txt > img:nth-child("+tripType+")").removeClass("fadeIn");
		$(".p3-trip-view > img:nth-child("+tripType+")").removeClass("fadeIn");
		$(".bar").removeClass("bar"+tripType);
		if("left"==direction){
			tripType = (--tripType == 0 ? 3 : tripType);
		}
		else if("right"==direction){
			tripType = (++tripType == 4 ? 1 : tripType);
		}
		$(".p3-bottom-txt").addClass("bar"+tripType);
		$(".p3-bottom-txt > img:nth-child("+tripType+")").addClass("fadeIn");
		$(".p3-trip-view > img:nth-child("+tripType+")").addClass("fadeIn");
		$(".bar").addClass("bar"+tripType);
	}
}
function page4(){
	setTimeout(function(){
		$(".p4-top-txt").addClass("fadeIn");
		setTimeout(function(){
			$(".p4-middle").addClass("fadeIn");
			setTimeout(function(){
				$(".item1").addClass("fadeInUp");
				setTimeout(function(){
					$(".item2").addClass("fadeInUp");
					setTimeout(function(){
						$(".item3").addClass("fadeInUp");
						setTimeout(function(){
							$(".item4").addClass("fadeInUp");
							setTimeout(function(){
								$(".p4-confirm").addClass("bounceIn");
							},800);
						},500);
					},500);
				},500);
			},1000);
		},1000);
	},800);
}
function page5(green,leisure){//green: 绿化指数，leisure:休闲指数
	$(".route-level").addClass("bounceInDown");
	setTimeout(function(){
		showLocation();
		setTimeout(function(){
			$(".indexs-wrap").addClass("fadeIn");
			setTimeout(function(){
				showStars(green, leisure);
				setTimeout(function(){
					$(".trip-result-btn").addClass("bounceIn");
				},3300);
			},800);
		},2600);
	},1000);
}
//逐个显示路线地点
function showLocation(){
	$(".route > li:nth-child(1)").addClass("bounceIn");
	setTimeout(function(){
		$(".route > li:nth-child(2)").addClass("bounceIn");
		setTimeout(function(){
			$(".route > li:nth-child(3)").addClass("bounceIn");
			setTimeout(function(){
				$(".route > li:nth-child(4)").addClass("bounceIn");
				setTimeout(function(){
					$(".route > li:nth-child(5)").addClass("bounceIn");
				},500);
			},500);
		},500);
	},500);
}
//逐个显示星星
function showStars(green,leisure){
	var i=1,
		j=1;
	var intervalID = setInterval(function(){
		if(i>green && j>leisure){
			clearInterval(intervalID);
		}else{
			if(i > green){
				$(".leisure-stars > li").eq(j-1).find("img").attr("src", basep + "p5-star-yellow.png");
				j++;
			}else{
				$(".green-stars > li").eq(i-1).find("img").attr("src", basep + "p5-star-yellow.png");
				i++;
			}
		}
	},350);
}

function page6(){
	$(".poster-title").addClass("fadeIn");
	setTimeout(function(){
		$(".frog").addClass("bounceIn");
		setTimeout(function(){
			$(".poster-content").addClass("fadeIn");
			setTimeout(function(){
				$(".share-tip").addClass("fadeInUp");
				setTimeout(function(){
					$(".p6-btn").addClass("bounceIn");
				},1200);
			},800);
		},800);
	},800);
}
function f_pinchout(){
	//setTimeout(function(){
		$(".frogs").fadeOut(3000);
		//$(".frog-left").addClass("slideOutLeft3");
		//$(".frog-right").addClass("slideOutRight3");
		setTimeout(function(){

			page1Bright();
		},2500);
	//},800);
}
function eraseFinish(){
	f_pinchout();
}
//事件绑定
$(function(){
	//首页按钮
	$(".index-btn").on("click",function(){
		$(".index").addClass("hide");
		$(".page1").addClass("fadeIn");
		console.log(jQuery('.img-frogs').eraser({size:60}));
	});

	$('.frogs').on('touchstart',function(){
		console.log(1);
		$(".hand").fadeOut(500);
	})

	$(".p1-bright").on("click",function(){
		$(".page1").removeClass("fadeIn");
		$(".page2").addClass("fadeIn");
		page2();
	});

	//第二页
	$(".p2-btn").on("click",function(){
		$(".page2").removeClass("fadeIn");
		$(".page3").addClass("fadeIn");
		page3();
	});

	//第三页
	//选择旅行类型
	$(".p3-confirm > a").on("click",function(e){
		e.preventDefault();
		e.stopPropagation();
		if(1==tripType){
			temp = "beach";
		}else if(2==tripType){
			temp = "forest";
		}else if(3==tripType){
			temp = "city";
		}
		$("." + temp).removeClass("hide");
		$(".route-items").eq(tripType-1).removeClass("hide");
		$(".page4").addClass("fadeIn");
		$(".page3").removeClass("fadeIn");
		page4();
	});

	//第四页
	$(".route-items > ul > li").on("click",function(){
		$(this).parent().children().eq(route_index).removeClass("selected");
		$(this).addClass("selected");
		route_index = $(this).index();
//		var index = $(this).index(),
//			route = $(this).find("p").text().split("-");
//		setTimeout(function(){
//			var data = datas[tripType-1][index];
//			frog = data["frog"];
//			$(".page5").find("span").each(function(index){
//				$(this).text(route[index]);
//			});
//			$(".page5").addClass("fadeIn");
//			$(".page4").removeClass("fadeIn");
//			page5(data["green"],data["leisure"]);
//		},500);
	});
	$(".p4-confirm > a").on("click",function(e){
		e.preventDefault();
		e.stopPropagation();
		var data = datas[tripType-1][route_index],
			route_txt = $(".triptype"+tripType+">li").eq(route_index).find("p").text().split("-");
		console.log(route_txt);
		frog = data["frog"];
		$(".page5").find("span").each(function(index){
			$(this).text(route_txt[index]);
		});
		$(".page5").addClass("fadeIn");
		$(".page4").removeClass("fadeIn");
		page5(data["green"],data["leisure"]);
	});
	
	//第五页
	$(".trip-result-btn").on("click",function(){
		console.log(frog)
		var poster_txt;
		switch(frog){
			case -99 : {
				poster_txt = "成功解脱，可以跟雾霾说再见了，哈哈！";
				break;
			}
			case -296 : {
				poster_txt = "天呐，只要你踏上这条旅程，你就完全看不见雾霾的影子了……";
				break;
			}
			case -666 : {
				poster_txt = "一趟旅程下来，恐怕会忘了雾霾长什么模样了吧(•ω•)";
				break;
			}
			default:{
				console.log("未知的雾霾指数类型");
				return;
			}
		}
		$(".frog").text(frog);
		$(".poster-txt").text(poster_txt);
		$(".page6").addClass("fadeIn");
		$(".page5").removeClass("fadeIn");
		page6();
	});

	//分享弹窗
	$("#to-share").on("click",function(){
		$(".share").removeClass("hide");
	});
	$(".share").on("click",function(){
		$(".share").addClass("hide");
	});
});
