$(document).ready(function(){

    $('#education, #interests').hide('fast');

    $('#expheadtitle').click(function(){
    // Hide all the DIVs, and show just the one we want
 		// $(this).find('i').toggleClass('fa-chevron-circle-up');
	  //  	$(this).find('i').toggleClass('fa-chevron-circle-down');
        $ ('#ulsocial, #education, #interests').hide(1000);
        $("#experience").slideToggle(500);
    });


    $('#eduheadtitle').click(function(){
    // Hide all the DIVs, and show just the one we want
    // 	$(this).find('i').toggleClass('fa-chevron-circle-down');
	  	// $(this).find('i').toggleClass('fa-chevron-circle-up');
        $ ('#experience, #ulsocial, #interests').hide(1000);
        $("#education").slideToggle(500);
    });

    $('#intheadtitle').click(function(){
    // Hide all the DIVs, and show just the one we want
	  // $(this).find('i').toggleClass('fa-chevron-circle-down');
	  // $(this).find('i').toggleClass('fa-chevron-circle-up');
        $ ('#experience, #education, #ulsocial').hide(1000);
        $("#interests").slideToggle(500);
    });

    $('#expheadtitle, #eduheadtitle, #intheadtitle').click(function(){
    // Change Arrows
      $(this).find('i').toggleClass('fa-chevron-circle-down');
      $(this).find('i').toggleClass('fa-chevron-circle-up');
    });

});
