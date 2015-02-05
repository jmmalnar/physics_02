/**
 * Created by jmm5872 on 2/2/15.
 */
var main = function() {
    $('.under_title').click(function() {
        $('.under_title').animate({
            left: '0px'
        }, 200);
    });
};

$(document).ready(main);