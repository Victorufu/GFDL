/**
 * Created by victor on 23/04/2015.
 */
$(document).ready(function(){

    $('.menu li').hover(

        function(){
            $('ul',this).fadeIn();

        },
        function(){
            $('ul',this).fadeOut();
        }
    );

})
