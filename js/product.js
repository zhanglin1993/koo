var mm = ["img/lunbo1.jpg","img/lunbo2.jpg","img/lunbo3.jpg","img/lunbo4.jpg",]
		var n = 0;
		function c(){
			
			if(n<mm.length-1){n++;
				$(".lunbo").css("background","url(" + mm[n] + ")")
				$(".bianse").css("background","transparent")
				$(".bianse").eq(n).css("background","#fff");
				
			}else{
				n=0;
				$(".lunbo").css("background","url(" + mm[n] + ")")
				$(".bianse").css("background","transparent")
				$(".bianse").eq(n).css("background","#fff");
				
				
			}
		}
		function d(){
			n--;
			if(n<0){n=mm.length;
				$(".lunbo").css("background","url(" + mm[n] + ")")
				$(".bianse").css("background","transparent")
				$(".bianse").eq(n).css("background","#fff")
			}else{
				
				$(".lunbo").css("background","url(" + mm[n] + ")")
				$(".bianse").css("background","transparent")
				$(".bianse").eq(n).css("background","#fff")
			}
		}
		
		
		function e(k){
				$(".bianse").eq(k).click(function(){
					$(".lunbo").css("background","url(" + mm[k] + ")")
					$(".bianse").css("background","transparent")
			$(".bianse").eq(k).css("background-color","#fff")
		})
		}
		for(var k = 0;k<mm.length;k++){
			e(k)
		};
		var inter = setInterval(c,2000);
		$(".lunbo").mouseover(function(){
			clearInterval(inter);
		});
		$(".lunbo").mouseleave(function(){
			inter = setInterval(c,2000);
		});
		function changeColor(i){
			$(".topmainul>li:nth-of-type("+ (i+1) + ")>a").mouseover(function(){
			$(".topmainul>li>a").css({"background-color":"transparent","font-size":"16px"})
			$(".topmainul>li:nth-of-type("+ (i+1) + ")>a").css({"background-color":"red","font-size":"18px"})
		})
		}
		function changeColor2(i){
			$(".topmainul>li:nth-of-type("+ (i+1) + ")>a").mouseleave(function(){
			$(".topmainul>li>a").css({"background-color":"transparent","font-size":"16px"})
			$(".topmainul>li:nth-of-type("+ (3) + ")>a").css({"background-color":"red","font-size":"18px"})
		})
		}
		for(i=0;i<7;i++){
			changeColor(i);
			changeColor2(i)
		};
 $(function () {
    showScroll();
    function showScroll() {
        $(window).scroll(function () {
            var scrollValue = $(window).scrollTop();
            scrollValue > 100 ? $('.pointer').fadeIn() : $('.pointer').fadeOut();
        });
        $('#scroll').click(function () {
            $("html,body").animate({ scrollTop: 0 }, 200);
        });
    }
});