$(document).ready(function(){

    $('#education, #interests').hide('fast');

    $('#expheadtitle').click(function(){
    // Hide all the DIVs, and show just the one we want        
 		$(this).find('i').toggleClass('fa-chevron-circle-up');
	   	$(this).find('i').toggleClass('fa-chevron-circle-down');
        $ ('#ulsocial, #education, #interests').hide(100);
        $("#experience").toggle(100);
    });


    $('#eduheadtitle').click(function(){
    // Hide all the DIVs, and show just the one we want
    	$(this).find('i').toggleClass('fa-chevron-circle-down');
	  	$(this).find('i').toggleClass('fa-chevron-circle-up');
        $ ('#experience, #ulsocial, #interests').hide(100);
        $("#education").toggle(100);
    });

    $('#intheadtitle').click(function(){
    // Hide all the DIVs, and show just the one we want  
	  $(this).find('i').toggleClass('fa-chevron-circle-down');
	  $(this).find('i').toggleClass('fa-chevron-circle-up');
        $ ('#experience, #education, #ulsocial').hide(100);
        $("#interests").toggle(100);
    });

});
