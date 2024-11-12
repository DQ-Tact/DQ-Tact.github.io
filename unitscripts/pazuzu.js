var Awk = 0;
var Elemental = 0;
var AwkStatBuff =   {"5":{"code":null,"hp":100,"mp":0,"atk":0,"def":0,"agl":0,"wis":0,"move":0,"stype":null}
                    ,"4":{"code":null,"hp":0,"mp":0,"atk":0,"def":0,"agl":0,"wis":0,"move":0,"stype":null}
                    ,"3":{"code":null,"hp":0,"mp":0,"atk":0,"def":0,"agl":0,"wis":0,"move":0,"stype":null}
                    ,"2":{"code":null,"hp":0,"mp":0,"atk":0,"def":0,"agl":0,"wis":0,"move":0,"stype":null}
                    ,"1":{"code":null,"hp":0,"mp":0,"atk":0,"def":0,"agl":0,"wis":0,"move":0,"stype":null}
                    ,"0":{"code":null,"hp":0,"mp":0,"atk":0,"def":0,"agl":0,"wis":0,"move":0,"stype":null}};

var AwkStatsUp =    {"5":{"code":null,"hp":1.25,"mp":1.25,"atk":1.25,"def":1.25,"agl":1.25,"wis":1.25,"move":1,"stype":null},"4":{"code":null,"hp":1.2,"mp":1.2,"atk":1.2,"def":1.2,"agl":1.2,"wis":1.2,"move":1,"stype":null},"3":{"code":null,"hp":1.15,"mp":1.15,"atk":1.15,"def":1.15,"agl":1.15,"wis":1.15,"move":1,"stype":null},"2":{"code":null,"hp":1.1,"mp":1.1,"atk":1.1,"def":1.1,"agl":1.1,"wis":1.1,"move":1,"stype":null},"1":{"code":null,"hp":1.05,"mp":1.05,"atk":1.05,"def":1.05,"agl":1.05,"wis":1.05,"move":1,"stype":null},"0":{"code":null,"hp":1,"mp":1,"atk":1,"def":1,"agl":1,"wis":1,"move":1,"stype":null}}; 
var ElementalStatsUp =    {"9":{"code":null,"hp":0.07,"mp":0.05,"atk":0,"def":0.05,"agl":0,"wis":0,"move":0,"stype":null},"8":{"code":null,"hp":0.04,"mp":0.04,"atk":0,"def":0.04,"agl":0,"wis":0,"move":0,"stype":null},"7":{"code":null,"hp":0.04,"mp":0.03,"atk":0,"def":0.03,"agl":0,"wis":0,"move":0,"stype":null},"6":{"code":null,"hp":0.03,"mp":0.03,"atk":0,"def":0.03,"agl":0,"wis":0,"move":0,"stype":null},"5":{"code":null,"hp":0.03,"mp":0.02,"atk":0,"def":0.02,"agl":0,"wis":0,"move":0,"stype":null},"4":{"code":null,"hp":0.02,"mp":0.02,"atk":0,"def":0.02,"agl":0,"wis":0,"move":0,"stype":null},"3":{"code":null,"hp":0.02,"mp":0.01,"atk":0,"def":0.01,"agl":0,"wis":0,"move":0,"stype":null},"2":{"code":null,"hp":0.01,"mp":0.01,"atk":0,"def":0.01,"agl":0,"wis":0,"move":0,"stype":null},"1":{"code":null,"hp":0.01,"mp":0,"atk":0,"def":0,"agl":0,"wis":0,"move":0,"stype":null},"0":{"code":null,"hp":0,"mp":0,"atk":0,"def":0,"agl":0,"wis":0,"move":0,"stype":null}}; 

var TalentBlossomStats1 = {"code":null,"hp":50,"mp":0,"atk":0,"def":0,"agl":0,"wis":0,"move":0,"stype":null};
var FullTalent1 = false;
var TalentBlossomStats2 = {"code":null,"hp":50,"mp":0,"atk":0,"def":0,"agl":0,"wis":0,"move":0,"stype":null};
var FullTalent2 = false;
var TalentBlossomStats3 = {"code":null,"hp":50,"mp":0,"atk":0,"def":0,"agl":0,"wis":0,"move":0,"stype":null};
var FullTalent3 = false;

function applyStats() {
    $('#HP').text(Math.floor((967 + (AwkStatBuff[Awk] ? AwkStatBuff[Awk].hp : 0) + (FullTalent1 ? TalentBlossomStats1.hp : 0) + (FullTalent2 ? TalentBlossomStats2.hp : 0) + (FullTalent3 ? TalentBlossomStats3.hp : 0)) * ((AwkStatsUp[Awk] ? AwkStatsUp[Awk].hp : 0) + (ElementalStatsUp[Elemental] ? ElementalStatsUp[Elemental].hp : 0))));
    $('#MP').text(Math.floor((412 + (AwkStatBuff[Awk] ? AwkStatBuff[Awk].mp : 0)) * ((AwkStatsUp[Awk] ? AwkStatsUp[Awk].mp : 0) + (ElementalStatsUp[Elemental] ? ElementalStatsUp[Elemental].mp : 0))));
    $('#ATK').text(Math.floor((272 + (AwkStatBuff[Awk] ? AwkStatBuff[Awk].atk : 0)) * (AwkStatsUp[Awk] ? AwkStatsUp[Awk].atk : 0)));
    $('#DEF').text(Math.floor((348 + (AwkStatBuff[Awk] ? AwkStatBuff[Awk].def : 0)) * ((AwkStatsUp[Awk] ? AwkStatsUp[Awk].def : 0) + (ElementalStatsUp[Elemental] ? ElementalStatsUp[Elemental].def : 0))));
    $('#AGL').text(Math.floor((432 + (AwkStatBuff[Awk] ? AwkStatBuff[Awk].agl : 0)) * (AwkStatsUp[Awk] ? AwkStatsUp[Awk].agl : 0)));
    $('#WIS').text(Math.floor((221 + (AwkStatBuff[Awk] ? AwkStatBuff[Awk].wis : 0)) * (AwkStatsUp[Awk] ? AwkStatsUp[Awk].wis : 0)));
    $('#Move').text(2 + ((AwkStatBuff[Awk] ? AwkStatBuff[Awk].move : 0)));
}

$(document).ready( function () {
applyStats();
$(".formawk").on("change", function() {
    Awk = $(this).val();
    applyStats();
});
$(".formelement").on("change", function() {
    Elemental = $(this).val();
    applyStats();
});

$("#TalentBlossom1").change(function() {
    if ($(this).is(":checked")) {
        FullTalent1 = true;
        applyStats();
    } else {
        FullTalent1 = false;
        applyStats();
    }
});
$("#TalentBlossom2").change(function() {
    if ($(this).is(":checked")) {
        FullTalent2 = true;
        applyStats();
    } else {
        FullTalent2 = false;
        applyStats();
    }
});
$("#TalentBlossom3").change(function() {
    if ($(this).is(":checked")) {
        FullTalent3 = true;
        applyStats();
    } else {
        FullTalent3 = false;
        applyStats();
    }
});

});