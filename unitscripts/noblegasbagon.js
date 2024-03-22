var Awk = 0;
var AwkStatBuff =   {"5":{"code":null,"hp":30,"mp":0,"atk":0,"def":0,"agl":0,"wis":0,"move":0,"stype":null}
                    ,"4":{"code":null,"hp":0,"mp":0,"atk":0,"def":0,"agl":0,"wis":0,"move":0,"stype":null}
                    ,"3":{"code":null,"hp":0,"mp":0,"atk":0,"def":0,"agl":0,"wis":0,"move":0,"stype":null}
                    ,"2":{"code":null,"hp":0,"mp":0,"atk":0,"def":0,"agl":0,"wis":0,"move":0,"stype":null}
                    ,"1":{"code":null,"hp":0,"mp":0,"atk":0,"def":0,"agl":0,"wis":0,"move":0,"stype":null}
                    ,"0":{"code":null,"hp":0,"mp":0,"atk":0,"def":0,"agl":0,"wis":0,"move":0,"stype":null}};

var AwkStatsUp =    {"5":{"code":null,"hp":1.25,"mp":1.25,"atk":1.25,"def":1.25,"agl":1.25,"wis":1.25,"move":1,"stype":null},"4":{"code":null,"hp":1.2,"mp":1.2,"atk":1.2,"def":1.2,"agl":1.2,"wis":1.2,"move":1,"stype":null},"3":{"code":null,"hp":1.15,"mp":1.15,"atk":1.15,"def":1.15,"agl":1.15,"wis":1.15,"move":1,"stype":null},"2":{"code":null,"hp":1.1,"mp":1.1,"atk":1.1,"def":1.1,"agl":1.1,"wis":1.1,"move":1,"stype":null},"1":{"code":null,"hp":1.05,"mp":1.05,"atk":1.05,"def":1.05,"agl":1.05,"wis":1.05,"move":1,"stype":null},"0":{"code":null,"hp":1,"mp":1,"atk":1,"def":1,"agl":1,"wis":1,"move":1,"stype":null}}; 

function applyStats() {
    $('#HP').text(Math.floor((1051 + (AwkStatBuff[Awk] ? AwkStatBuff[Awk].hp : 0)) * (AwkStatsUp[Awk] ? AwkStatsUp[Awk].hp : 0)));
    $('#MP').text(Math.floor((336 + (AwkStatBuff[Awk] ? AwkStatBuff[Awk].mp : 0)) * (AwkStatsUp[Awk] ? AwkStatsUp[Awk].mp : 0)));
    $('#ATK').text(Math.floor((177 + (AwkStatBuff[Awk] ? AwkStatBuff[Awk].atk : 0)) * (AwkStatsUp[Awk] ? AwkStatsUp[Awk].atk : 0)));
    $('#DEF').text(Math.floor((363 + (AwkStatBuff[Awk] ? AwkStatBuff[Awk].def : 0)) * (AwkStatsUp[Awk] ? AwkStatsUp[Awk].def : 0)));
    $('#AGL').text(Math.floor((357 + (AwkStatBuff[Awk] ? AwkStatBuff[Awk].agl : 0)) * (AwkStatsUp[Awk] ? AwkStatsUp[Awk].agl : 0)));
    $('#WIS').text(Math.floor((139 + (AwkStatBuff[Awk] ? AwkStatBuff[Awk].wis : 0)) * (AwkStatsUp[Awk] ? AwkStatsUp[Awk].wis : 0)));
    $('#Move').text(2 + (AwkStatBuff[Awk] ? AwkStatBuff[Awk].move : 0));
}

$(document).ready( function () {
applyStats();
$(".formawk").on("change", function() {
    Awk = $(this).val();
    applyStats();
});

} );