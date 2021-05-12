// $(document).ready(function(){
    $(window).scroll(function(){
        var postop = $(document).scrollTop();
        console.log(postop);
        if(postop==0){
            $('.header img').addClass('animated zoomIn');
            $('.header h1').addClass('animated zoomIn');
            $('.header p').addClass('animated zoomIn');
            $('nav').addClass('animated zoomIn')
        }
        if(postop>71 && postop<780){
            $('.mid-content').addClass('animated bounceInLeft');
            $('.ban-content button').addClass('animated flipInX')
        }
        if(postop>780 && postop<1500){
            $('.verti').addClass('animated zoomIn');
            $('.hori').addClass('animated zoomIn')
            $('.matter').addClass('animated zoomIn')
        }
        if(postop>1300 && postop<2000){
            $('.aspects h1').addClass('animated zoomIn');
            $('.card').addClass('animated zoomIn')
            $('.matter').addClass('animated zoomIn')
        }
        if(postop>1800 && postop<2800){
            $('.choose').addClass('animated fadeIn');
        }
        if(postop>2000 && postop<4000){
            $('.courses').addClass('animated zoomIn');
        }
        if(postop>2800 && postop<4000){
            $('.Gallery h1').addClass('animated zoomInDown');
            $('.Gallery p').addClass('animated zoomInDown');
        }
        if(postop>3000 && postop<4000){
            $('.pic').addClass('animated zoomInDown');
        }
        if(postop>3500 && postop<4000){
            $('.instructor').addClass('animated zoomInDown');
        }
        if(postop>4100 && postop<4500){
            $('.appointment').addClass('animated rubberBand');
        }
    });
// });
function myfun(){
    var showhide = document.getElementById('links');
    if(showhide.style.display === "block"){
        showhide.style.display = "none";
    }
    else{
        showhide.style.display = "block";
    }
}
