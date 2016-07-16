$(document).ready(function() {
    $(".paging-4fourx").show(); 
    $(".paging-4fourx a:first").addClass("active");

var imageWidth = $(".coolslider-4fourx").width(); 
var imageSum = $(".4fourx_img img").size(); 
var imageReelWidth = imageWidth * imageSum;

    $(".4fourx_img").css({'width' : imageReelWidth});

rotate = function(){ var triggerID = $active.attr("rel") - 1; 

var 4fourx_imgPosition = triggerID * imageWidth;

    $(".paging-4fourx a").removeClass('active');
        $active.addClass('active');

    $(".cooltitle4fourx").stop(true,true).slideUp('slow');
    $(".cooltitle4fourx").eq( 
    $('.paging-4fourx a.active').attr("rel") - 1 ).slideDown("slow"); 
    $(".4fourx_img").animate({left: -4fourx_imgPosition}, 400 );
    };

rotateSwitch = function(){
    $(".cooltitle4fourx").eq( $('.paging-4fourx a.active').attr("rel") - 1 ).slideDown("slow");

play = setInterval(function(){
    $active = $('.paging-4fourx a.active').next();

if ( $active.length === 0) {
    $active = $('.paging-4fourx a:first'); } rotate(); }, 4000); };

rotateSwitch(); $(".4fourx_img a, .cooltitle4fourx a").hover(function() {
    clearInterval(play); }, function() { rotateSwitch();
    });
    $(".paging-4fourx a").click(function() { $active = $(this);
    clearInterval(play); rotate(); rotateSwitch();  return false;
    });
});
