$(document).ready(function(){
	
	// scroll to the top
	$.fn.scrollToTop=function(){$(this).hide().removeAttr("href");if($(window).scrollTop()!="0"){$(this).fadeIn("slow")}var scrollDiv=$(this);$(window).scroll(function(){if($(window).scrollTop()=="0"){$(scrollDiv).fadeOut("slow")}else{$(scrollDiv).fadeIn("slow")}});$(this).click(function(){$("html, body").animate({scrollTop:0},"slow")})}
	$("#toTop").scrollToTop();

	// to the top button fadeIn/fadeOut
	$(window).scroll(function () {
		if ($(document).scrollTop() > 39) {
			$('.bottom-header').addClass('fixed');
		} else { 
			$('.fixed').removeClass('fixed');
		}
	});
    
    $(function(){
        $("#datepicker-button").datepicker();
    });
    
    $(function(){
        $(".tabs").tabs();
    });
    $(function(){
        $("input.checkboxradio").checkboxradio();
    });
    $(function(){
        $(".selectmenu").selectmenu();
    });
        
    /* POPUP */
        $('.popup1 .close_window1, .overlay1').click(function (){
           $('.popup1, .overlay1').css({'opacity':'0', 'display':'none'});
        });
        $('a.open_window1').click(function (e){
           $('.popup1, .overlay1').css({'opacity':'1', 'display':'block'});
           e.preventDefault();
        });
        
    
    
        $('.popup2 .close_window2, .overlay2').click(function (){
           $('.popup2, .overlay2').css({'opacity':'0', 'display':'none'});
        });
        $('a.open_window2').click(function (e){
           $('.popup2, .overlay2').css({'opacity':'1', 'display':'block'});
           e.preventDefault();
        });
        
        
        
        $('.popup3 .close_window3, .overlay3').click(function (){
           $('.popup3, .overlay3').css({'opacity':'0', 'display':'none'});
        });
        $('a.open_window3').click(function (e){
           $('.popup3, .overlay3').css({'opacity':'1', 'display':'block'});
           e.preventDefault();
        });
        
        
        
        $('.popup5 .close_window5, .overlay5').click(function (){
           $('.popup5, .overlay5').css({'opacity':'0', 'display':'none'});
        });
        $('a.open_window5').click(function (e){
           $('.popup5, .overlay5').css({'opacity':'1', 'display':'block'});
           e.preventDefault();
        });
        
        $('.popup6 .close_window6, .overlay6').click(function (){
           $('.popup6, .overlay6').css({'opacity':'0', 'display':'none'});
        });
        $('a.open_window6').click(function (e){
           $('.popup6, .overlay6').css({'opacity':'1', 'display':'block'});
           e.preventDefault();
        });
    /* POPUP */
    
    $('.popup .input.error').click(function(e){
        e.preventDefault();
        $('.popup .input.error').removeClass('error');
    });
    
    
    $('.city span').click(function(e){
        e.preventDefault();
        $('.chose-your-city').toggleClass('active');
    });
    $('.chose-your-city-close').click(function(e){
        e.preventDefault();
        $('.chose-your-city').toggleClass('active');
    });
    
    
    $('.for-filter-block1').click(function(e){
        e.preventDefault();
        $('.filter-block1').toggleClass('active');
    });
    $('.for-filter-block2').click(function(e){
        e.preventDefault();
        $('.filter-block2').toggleClass('active');
    });
    $('.for-filter-block3').click(function(e){
        e.preventDefault();
        $('.filter-block3').toggleClass('active');
    });
    $('.for-filter-block4').click(function(e){
        e.preventDefault();
        $('.filter-block4').toggleClass('active');
    });
    $('.for-filter-block5').click(function(e){
        e.preventDefault();
        $('.filter-block5').toggleClass('active');
    });
    $('.for-filter-block6').click(function(e){
        e.preventDefault();
        $('.filter-block6').toggleClass('active');
    });
    $('.for-filter-block7').click(function(e){
        e.preventDefault();
        $('.filter-block7').toggleClass('active');
    });
    $('.for-filter-block8').click(function(e){
        e.preventDefault();
        $('.filter-block8').toggleClass('active');
    });
    $('.for-filter-block9').click(function(e){
        e.preventDefault();
        $('.filter-block9').toggleClass('active');
    });
    $('.for-filter-block10').click(function(e){
        e.preventDefault();
        $('.filter-block10').toggleClass('active');
    });
    $('.for-filter-block11').click(function(e){
        e.preventDefault();
        $('.filter-block11').toggleClass('active');
    });
    $('.for-filter-block12').click(function(e){
        e.preventDefault();
        $('.filter-block12').toggleClass('active');
    });
    $('.main-menu-button').click(function(e){
        e.preventDefault();
        $('.main-menu ul').toggleClass('active');
        $('.main-menu-button').toggleClass('active');
    });
    $('.menu-of-orders-button').click(function(e){
        e.preventDefault();
        $('.menu-of-orders').toggleClass('active');
        $('.menu-of-orders-button').toggleClass('active');
    });
    $('.title-of-catalog').click(function(e){
        e.preventDefault();
        $('.catalog-menu ul').toggleClass('active');
        $('.filter-content-button.active').removeClass('active');
        $('.filter-main-content.active').removeClass('active');
    });
    $('.mobil-menu-button').click(function(e){
        e.preventDefault();
        $('.top-header ul').toggleClass('active');
        $('.mobil-menu-button').toggleClass('active');
    });
    
    $('.filter-content-button').click(function(e){
        e.preventDefault();
        $('.filter-content-button').toggleClass('active');
        $('.filter-main-content').toggleClass('active');
        $('.catalog-menu ul.active').removeClass('active');
    });
    $('.cart-right').click(function(e){
        e.preventDefault();
        $('.cart').toggleClass('active');
    });
    
    
    $(function(){
        var spinner = $( ".spinner" ).spinner();
    });
    
    
    /*$(function(){
        $('.uncycle').slick({
          infinite: false,
          speed: 350,
        // определяем скорость перелистывания
          slidesToShow: 5,
        //количество слайдов для показа
          slidesToScroll: 1,
        //сколько слайдов за раз перелистнется
            responsive: [
                {
                  breakpoint: 1200,
                  //сообщает, при какой ширине экрана нужно включать настройки
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 940,
                  //сообщает, при какой ширине экрана нужно включать настройки
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 766,
                  //сообщает, при какой ширине экрана нужно включать настройки
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 479,
                  //сообщает, при какой ширине экрана нужно включать настройки
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                }
            ]
            
        });
    });*/
    $(function() {
        $.mask.definitions['~'] = "[+-]";
        $("#date").mask("99/99/9999",{completed:function(){alert("completed!");}});
        $("#phone").mask("(999) 999-9999");
        $("#phoneExt").mask("(999) 999-9999? x99999");
        $("#iphone").mask("+33 999 999 999");
        $("#tin").mask("99-9999999");
        $(".ssn").mask("+7 999-99-9999");
        $("#product").mask("a*-999-a999", { placeholder: " " });
        $("#eyescript").mask("~9.99 ~9.99 999");
        $("#po").mask("PO: aaa-999-***");
		$("#pct").mask("99%");

        $("input").blur(function() {
            $("#info").html("Unmasked value: " + $(this).mask());
        }).dblclick(function() {
            $(this).unmask();
        });
    });
	
    /*$(function() {
				$('.slider1').carouFredSel({
					synchronise: ['.slide', false, true],
					auto: true,
					width: 100 + "%",
					items: {
						visible: 3,
						start: 0
					},
					scroll: {
						onBefore: function( data ) {
							data.items.old.eq(1).removeClass('selected');
							data.items.visible.eq(1).addClass('selected');
						}
					},
					prev: '#prev',
					next: '#next'
				});

				$('#images').carouFredSel({
					auto: false,
					items: 1,
					scroll: {
						fx: 'fade'
					}
				});

				$('#thumbs img').click(function() {
					$('#thumbs').trigger( 'slideTo', [this, -1] );
				});
				$('#thumbs img:eq(1)').addClass('selected');
    });*/
	
	// Owl Carousel
	$('.owlslider').owlCarousel();
	
	
});