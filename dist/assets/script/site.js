<script type="text/javascript">

$(function(){
	$(".group").fancybox();
	});

$(function(){
    var setElm = $('.pic'),
    delaySpeed = 50,
    fadeSpeed = 1500;

    $(window).load(function(){
        randomShow();
        function randomShow(){
            var elmLength = setElm.length,
            randomSet = Math.floor(Math.random()*elmLength);

            $(setElm[randomSet]).css({display:'block',opacity:'0'}).animate({opacity:'1'},fadeSpeed);
            setElm.splice(randomSet,1);

            if (elmLength > 0) {
                setTimeout(function(){randomShow();},delaySpeed);
            } else {
                return false;
            }
        }
    });
});


</script>
