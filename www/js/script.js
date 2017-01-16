$(document).ready(function(){
	
	// scroll to the top
	$.fn.scrollToTop=function(){$(this).hide().removeAttr("href");if($(window).scrollTop()!="0"){$(this).fadeIn("slow")}var scrollDiv=$(this);$(window).scroll(function(){if($(window).scrollTop()=="0"){$(scrollDiv).fadeOut("slow")}else{$(scrollDiv).fadeIn("slow")}});$(this).click(function(){$("html, body").animate({scrollTop:0},"slow")})}
	$("#toTop").scrollToTop();

	// to the top button fadeIn/fadeOut
	$(window).scroll(function () {
		if ($(document).scrollTop() > 39) {
			$('header').addClass('fixed');
		} else { 
			$('.fixed').removeClass('fixed');
		}
	});
    
    $(".datepicker-button").datepicker();
    $(".tabs").tabs();
    $("input.checkboxradio").checkboxradio();
    $(".selectmenu").selectmenu();
        
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
    
    
    var spinner = $( ".spinner" ).spinner();
    
	// Masked Input
    $.mask.definitions['~'] = "[+-]";
	$("input.date").mask("99/99/9999",{completed:function(){alert("completed!");}});
	$("input.phone").mask("+7 (999) 999-9999");
	$("input.phoneExt").mask("(999) 999-9999? x99999");
	$("input.iphone").mask("+33 999 999 999");
	$("input.tin").mask("99-9999999");
	$("input.ssn").mask("+7 999-99-9999");
	$("input.product").mask("a*-999-a999", { placeholder: " " });
	$("input.eyescript").mask("~9.99 ~9.99 999");
	$("input.po").mask("PO: aaa-999-***");
	$("input.pct").mask("99%");

	/*$("input").blur(function() {
		$("#info").html("Unmasked value: " + $(this).mask());
	}).dblclick(function() {
		$(this).unmask();
	});*/
	
    	
	// Owl Carousels
	$('.owlslider').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		items:1
	});
	
	$('.index-right .slider').owlCarousel({
		items:1,
		margin: 15
	});
	
	$('.slick-slider').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		responsive:{
			0:{
				items:1
			},
			475: {
				items:2
			},
			670:{
				items:3
			},
			910:{
				items:4
			},
			1160:{
				items:5
			}
		}
	});
	
	// Animal's card editing
	var animal_editing = false;
	$('.update-animal').on('click', function(e){
		e.preventDefault();
		var show_a = $(this).parent().parent().parent('.show-animal');
		var edit_a = $(this).parent().parent().parent('.show-animal').siblings('.edit-animal');
		if (!animal_editing) {
			animal_editing = true;
			show_a.slideUp(400);
			setTimeout(function(){
				edit_a.slideDown(400);
			}, 400);
			setTimeout(function(){
				animal_editing = false;
			}, 800);
		}
	});
	$('.save a').on('click', function(e){
		e.preventDefault();
		var show_a = $(this).parent().parent('.edit-animal').siblings('.show-animal');
		var edit_a = $(this).parent().parent('.edit-animal');
		if (!animal_editing) {
			animal_editing = true;
			edit_a.slideUp(400);
			setTimeout(function(){
				show_a.slideDown(400);
			}, 400);
			setTimeout(function(){
				animal_editing = false;
			}, 800);
		}
	});
	
	
});