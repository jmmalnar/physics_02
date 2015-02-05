/**
 * Created by jmm5872 on 1/31/15.
 */
function LengthContraction {

}

function timeDilation() {
    var rel_velocity = document.getElementById("velocity").value;
    var delta_t = document.getElementById("time_0").value;

    var x = 1-(rel_velocity*rel_velocity);
    var t = Math.sqrt(x);
    var dt_p = (delta_t)/(Math.sqrt(1-(Math.pow(rel_velocity, 2))));

    document.getElementById("demo2").innerHTML = dt_p;
};

$(document).ready(timeDilation());

var main = function() {

};

$(document).ready(main);