$(document).ready(function(){
    $(".player-inactive").hide();

    $("div.player").click(function(){
        var inactive;

        $(this).toggleClass("player-inactive");

        inactive = $(this).parent().children(".player-inactive");

        if (inactive.length > 11) {
            inactive.show();

        } else {
            inactive.hide();
        }
        
        calc_bonus();
    });

    calc_bonus();

    function calc_bonus() {

        var fws = 0;
        var omcs = 0;
        var omws = 0;
        var mcs = 0;
        var mws = 0;
        var dmcs = 0;
        var dmws = 0;
        var dcs = 0;
        var dws = 0;

        if ($("#fw1").hasClass("player-inactive") == false) { fws++ ;}
        if ($("#fw2").hasClass("player-inactive") == false) { fws++ ;}
        if ($("#fw3").hasClass("player-inactive") == false) { fws++ ;}

        if ($("#om2").hasClass("player-inactive") == false) { omcs++ ;}
        if ($("#om3").hasClass("player-inactive") == false) { omcs++ ;}

        if ($("#om1").hasClass("player-inactive") == false) { omws++ ;}
        if ($("#om4").hasClass("player-inactive") == false) { omws++ ;}

        if ($("#m2").hasClass("player-inactive") == false) { mcs++ ;}
        if ($("#m3").hasClass("player-inactive") == false) { mcs++ ;}
        if ($("#m4").hasClass("player-inactive") == false) { mcs++ ;}

        if ($("#m1").hasClass("player-inactive") == false) { mws++ ;}
        if ($("#m5").hasClass("player-inactive") == false) { mws++ ;}

        if ($("#dm2").hasClass("player-inactive") == false) { dmcs++ ;}
        if ($("#dm3").hasClass("player-inactive") == false) { dmcs++ ;}

        if ($("#dm1").hasClass("player-inactive") == false) { dmws++ ;}
        if ($("#dm4").hasClass("player-inactive") == false) { dmws++ ;}

        if ($("#d2").hasClass("player-inactive") == false) { dcs++ ;}
        if ($("#d3").hasClass("player-inactive") == false) { dcs++ ;}
        if ($("#d4").hasClass("player-inactive") == false) { dcs++ ;}

        if ($("#d1").hasClass("player-inactive") == false) { dws++ ;}
        if ($("#d5").hasClass("player-inactive") == false) { dws++ ;}

        var off_sp = Math.min(fws + omcs + omws + 0.8*(mcs + mws) + 0.4*(dmcs + dmws + dws) + 1.5, 7.5);
        var off_tb = Math.min(1.1*fws + omcs + 0.85*mcs + 0.7*omws + 3, 7.9);
        var off_di = Math.min(mcs + mws + 0.95*(dmcs + dmws) + 0.9*(dcs + dws), 7.6);
        var off_lb = Math.min(fws + omcs + 0.2*omws + 4.45, 7.5);
        var off_wa = Math.min(omws + 0.8*mws + 0.6*dmws + 0.4*dws + 4.8, 7.6);

        var def_sp = Math.min(dcs + dmcs + 0.5*(mcs + dws) + 0.25*(dmws + mws) + 2.1, 10);
        var def_tb = Math.min(dcs + dmcs + 0.6*(dws) + 0.3*(dmws) + 2.9, 10);
        var def_di = Math.min(dcs + dws + 0.9*(dmcs + dmws) + 0.8*(mcs + mws), 10);
        var def_lb = Math.min(dcs + 0.8*dws + 0.6*dmcs + 3.1, 10);
        var def_wa = Math.min(dcs + dws + 0.6*dmws + 0.4*mws + 0.2*omws + 1.9, 10);

        var fwsB = 0;
        var omcsB = 0;
        var omwsB = 0;
        var mcsB = 0;
        var mwsB = 0;
        var dmcsB = 0;
        var dmwsB = 0;
        var dcsB = 0;
        var dwsB = 0;

        if ($("#fw1B").hasClass("player-inactive") == false) { fwsB++ ;}
        if ($("#fw2B").hasClass("player-inactive") == false) { fwsB++ ;}
        if ($("#fw3B").hasClass("player-inactive") == false) { fwsB++ ;}

        if ($("#om2B").hasClass("player-inactive") == false) { omcsB++ ;}
        if ($("#om3B").hasClass("player-inactive") == false) { omcsB++ ;}

        if ($("#om1B").hasClass("player-inactive") == false) { omwsB++ ;}
        if ($("#om4B").hasClass("player-inactive") == false) { omwsB++ ;}

        if ($("#m2B").hasClass("player-inactive") == false) { mcsB++ ;}
        if ($("#m3B").hasClass("player-inactive") == false) { mcsB++ ;}
        if ($("#m4B").hasClass("player-inactive") == false) { mcsB++ ;}

        if ($("#m1B").hasClass("player-inactive") == false) { mwsB++ ;}
        if ($("#m5B").hasClass("player-inactive") == false) { mwsB++ ;}

        if ($("#dm2B").hasClass("player-inactive") == false) { dmcsB++ ;}
        if ($("#dm3B").hasClass("player-inactive") == false) { dmcsB++ ;}

        if ($("#dm1B").hasClass("player-inactive") == false) { dmwsB++ ;}
        if ($("#dm4B").hasClass("player-inactive") == false) { dmwsB++ ;}

        if ($("#d2B").hasClass("player-inactive") == false) { dcsB++ ;}
        if ($("#d3B").hasClass("player-inactive") == false) { dcsB++ ;}
        if ($("#d4B").hasClass("player-inactive") == false) { dcsB++ ;}

        if ($("#d1B").hasClass("player-inactive") == false) { dwsB++ ;}
        if ($("#d5B").hasClass("player-inactive") == false) { dwsB++ ;}

        var off_spB = Math.min(fwsB + omcsB + omwsB + 0.8*(mcsB + mwsB) + 0.4*(dmcsB + dmwsB + dwsB) + 1.5, 7.5);
        var off_tbB = Math.min(1.1*fwsB + omcsB + 0.85*mcsB + 0.7*omwsB + 3, 7.9);
        var off_diB = Math.min(mcsB + mwsB + 0.95*(dmcsB + dmwsB) + 0.9*(dcsB + dwsB), 7.6);
        var off_lbB = Math.min(fwsB + omcsB + 0.2*omwsB + 4.45, 7.5);
        var off_waB = Math.min(omwsB + 0.8*mwsB + 0.6*dmwsB + 0.4*dwsB + 4.8, 7.6);

        var def_spB = Math.min(dcsB + dmcsB + 0.5*(mcsB + dwsB) + 0.25*(dmwsB + mwsB) + 2.1, 10);
        var def_tbB = Math.min(dcsB + dmcsB + 0.6*(dwsB) + 0.3*(dmwsB) + 2.9, 10);
        var def_diB = Math.min(dcsB + dwsB + 0.9*(dmcsB + dmwsB) + 0.8*(mcsB + mwsB), 10);
        var def_lbB = Math.min(dcsB + 0.8*dwsB + 0.6*dmcsB + 3.1, 10);
        var def_waB = Math.min(dcsB + dwsB + 0.6*dmwsB + 0.4*mwsB + 0.2*omwsB + 1.9, 10);

        $( "#off_sp" ).html((off_sp - def_spB).toFixed(2));
        $( "#off_tb" ).html((off_tb - def_tbB).toFixed(2));
        $( "#off_di" ).html((off_di - def_diB).toFixed(2));
        $( "#off_lb" ).html((off_lb - def_lbB).toFixed(2));
        $( "#off_wa" ).html((off_wa - def_waB).toFixed(2));

        $( "#def_sp" ).html((def_sp - off_spB).toFixed(2));
        $( "#def_tb" ).html((def_tb - off_tbB).toFixed(2));
        $( "#def_di" ).html((def_di - off_diB).toFixed(2));
        $( "#def_lb" ).html((def_lb - off_lbB).toFixed(2));
        $( "#def_wa" ).html((def_wa - off_waB).toFixed(2));

    };


});
