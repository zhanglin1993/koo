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
		$(".btnright").click(function(){
			c()
		})
		$(".btnleft").click(function(){
			d()
		});
		
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
		var gg = ["img/pro1.jpg","img/pro2.jpg","img/pro3.jpg","img/pro4.jpg","img/pro5.jpg","img/pro6.jpg",]
		var gg2 = ["img/main1.png","img/main2.png","img/main3.png","img/main4.png","img/main5.png","img/main6.jpg",]
		function gm(i){
			 $(".maindiv:nth-of-type("+ (i+1) +")>img").mouseover(function(){
			this.src=gg[i];
		});
		};
		function gmout(i){
			 $(".maindiv:nth-of-type("+ (i+1) +")>img").mouseleave(function(){
			this.src=gg2[i];
		});
		};
		for(var i = 0;i<gg.length;i++){
			gm(i);
			gmout(i)
		};
		var colnum = ["orange","lightblue","pink","red","green","blue"]
		function col(i){
			$(".maindiv:nth-of-type(" + (i+1) +")>p").eq(0).mouseover(function(){
				$(".maindiv:nth-of-type(" + (i+1) +")>p").eq(0).css("color",colnum[i]);
				
			})
		};
		function col2(i){
			$(".maindiv:nth-of-type(" + (i+1) +")>p").eq(0).mouseleave(function(){
				$(".maindiv:nth-of-type(" + (i+1) +")>p").eq(0).css("color","black");
				
			})
		};
		for(var i = 0;i<colnum.length;i++){
			col(i);
			col2(i);
		}
function change(i){
	$(".footmiddletop>ul>li").eq(i).mouseover(function(){
		$(".footmain").css("display","none");
		$(".footmain").eq(i).css("display","block");
		
	})
};
for(var i =0;i<3;i++){
	change(i);
}
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
$(".pointer").click(function(){
	 $('body,html').animate({scrollTop:0},1000);
})
function changeColor(i){
			$(".topmainul>li:nth-of-type("+ (i+1) + ")>a").mouseover(function(){
			$(".topmainul>li>a").css({"background-color":"transparent","font-size":"16px"})
			$(".topmainul>li:nth-of-type("+ (i+1) + ")>a").css({"background-color":"red","font-size":"18px"})
		})
		}
		function changeColor2(i){
			$(".topmainul>li:nth-of-type("+ (i+1) + ")>a").mouseleave(function(){
			$(".topmainul>li>a").css({"background-color":"transparent","font-size":"16px"})
			$(".topmainul>li:nth-of-type("+ (1) + ")>a").css({"background-color":"red","font-size":"18px"})
		})
		}
		for(i=0;i<7;i++){
			changeColor(i);
			changeColor2(i)
		}