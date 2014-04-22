$(document).ready(function(){

//    $('#education, #interests').hide('fast');

//    $('#expheadtitle').click(function(){
    // Hide all the DIVs, and show just the one we want
 		// $(this).find('i').toggleClass('fa-chevron-circle-up');
	  //  	$(this).find('i').toggleClass('fa-chevron-circle-down');
//        $ ('#ulsocial, #education, #interests').hide(10);
//        $("#experience").toggle(10);
//    });


//    $('#eduheadtitle').click(function(){
    // Hide all the DIVs, and show just the one we want
    // 	$(this).find('i').toggleClass('fa-chevron-circle-down');
	  	// $(this).find('i').toggleClass('fa-chevron-circle-up');
//        $ ('#experience, #ulsocial, #interests').hide(10);
//        $("#education").toggle(10);
//    });

//    $('#intheadtitle').click(function(){
    // Hide all the DIVs, and show just the one we want
	  // $(this).find('i').toggleClass('fa-chevron-circle-down');
	  // $(this).find('i').toggleClass('fa-chevron-circle-up');
//        $ ('#experience, #education, #ulsocial').hide(10);
//        $("#interests").toggle(10);
//    });

//    $('#expheadtitle, #eduheadtitle, #intheadtitle').click(function(){
    // Change Arrows
//      $(this).find('i').toggleClass('fa-chevron-circle-down');
//      $(this).find('i').toggleClass('fa-chevron-circle-up');
//    });

//});
$('.expbody').hide();
$('.exp h3').on('click', function(e) {
 // $(this).next('.expbody').slideToggle();
    e.preventDefault();
    var elem = $(this).next('.expbody')
        $('.expbody').not(elem).hide('fast');
        elem.slideToggle('fast');
});

});