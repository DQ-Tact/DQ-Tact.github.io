var Awk = 0;
var AwkStatBuff =   {"5":{"code":null,"hp":30,"mp":0,"atk":0,"def":0,"agl":0,"wis":0,"move":1,"stype":null}
                    ,"4":{"code":null,"hp":30,"mp":0,"atk":0,"def":0,"agl":0,"wis":0,"move":1,"stype":null}
                    ,"3":{"code":null,"hp":30,"mp":0,"atk":0,"def":0,"agl":0,"wis":0,"move":1,"stype":null}
                    ,"2":{"code":null,"hp":0,"mp":0,"atk":0,"def":0,"agl":0,"wis":0,"move":1,"stype":null}
                    ,"1":{"code":null,"hp":0,"mp":0,"atk":0,"def":0,"agl":0,"wis":0,"move":1,"stype":null}
                    ,"0":{"code":null,"hp":0,"mp":0,"atk":0,"def":0,"agl":0,"wis":0,"move":0,"stype":null}};

var AwkStatsUp =    {"5":{"code":null,"hp":1.25,"mp":1.25,"atk":1.25,"def":1.25,"agl":1.25,"wis":1.25,"move":1,"stype":null},"4":{"code":null,"hp":1.2,"mp":1.2,"atk":1.2,"def":1.2,"agl":1.2,"wis":1.2,"move":1,"stype":null},"3":{"code":null,"hp":1.15,"mp":1.15,"atk":1.15,"def":1.15,"agl":1.15,"wis":1.15,"move":1,"stype":null},"2":{"code":null,"hp":1.1,"mp":1.1,"atk":1.1,"def":1.1,"agl":1.1,"wis":1.1,"move":1,"stype":null},"1":{"code":null,"hp":1.05,"mp":1.05,"atk":1.05,"def":1.05,"agl":1.05,"wis":1.05,"move":1,"stype":null},"0":{"code":null,"hp":1,"mp":1,"atk":1,"def":1,"agl":1,"wis":1,"move":1,"stype":null}}; 

var TalentBlossomStats = {"code":null,"hp":35,"mp":35,"atk":23,"def":23,"agl":23,"wis":23,"move":0,"stype":null};
var CharBuilderLargeNodes = {"code":null,"hp":100,"mp":100,"atk":50,"def":50,"agl":50,"wis":50,"move":0,"stype":null};
var FullTalent = false;
var nodeATK = false;
var nodeHP = false;
var nodeAGL = false;
var nodeDEF = false;
var nodeMP = false;
var nodeWIS = false;

function applyStats() {
    $('#HP').text(Math.floor((795 + (AwkStatBuff[Awk] ? AwkStatBuff[Awk].hp : 0) + (FullTalent ? TalentBlossomStats.hp : 0) + (nodeHP ? CharBuilderLargeNodes.hp : 0)) * (AwkStatsUp[Awk] ? AwkStatsUp[Awk].hp : 0)));
    $('#MP').text(Math.floor((275 + (AwkStatBuff[Awk] ? AwkStatBuff[Awk].mp : 0) + (FullTalent ? TalentBlossomStats.mp : 0) + (nodeMP ? CharBuilderLargeNodes.mp : 0)) * (AwkStatsUp[Awk] ? AwkStatsUp[Awk].mp : 0)));
    $('#ATK').text(Math.floor((338 + (AwkStatBuff[Awk] ? AwkStatBuff[Awk].atk : 0) + (FullTalent ? TalentBlossomStats.atk : 0) + (nodeATK ? CharBuilderLargeNodes.atk : 0)) * (AwkStatsUp[Awk] ? AwkStatsUp[Awk].atk : 0)));
    $('#DEF').text(Math.floor((276 + (AwkStatBuff[Awk] ? AwkStatBuff[Awk].def : 0) + (FullTalent ? TalentBlossomStats.def : 0) + (nodeDEF ? CharBuilderLargeNodes.def : 0)) * (AwkStatsUp[Awk] ? AwkStatsUp[Awk].def : 0)));
    $('#AGL').text(Math.floor((320 + (AwkStatBuff[Awk] ? AwkStatBuff[Awk].agl : 0) + (FullTalent ? TalentBlossomStats.agl : 0) + (nodeAGL ? CharBuilderLargeNodes.agl : 0)) * (AwkStatsUp[Awk] ? AwkStatsUp[Awk].agl : 0)));
    $('#WIS').text(Math.floor((260 + (AwkStatBuff[Awk] ? AwkStatBuff[Awk].wis : 0) + (FullTalent ? TalentBlossomStats.wis : 0) + (nodeWIS ? CharBuilderLargeNodes.wis : 0)) * (AwkStatsUp[Awk] ? AwkStatsUp[Awk].wis : 0)));
    $('#Move').text(2 + ((AwkStatBuff[Awk] ? AwkStatBuff[Awk].move : 0) + (FullTalent ? TalentBlossomStats.move : 0)));
}

$(document).ready( function () {
applyStats();
$(".formawk").on("change", function() {
    Awk = $(this).val();
    applyStats();
});
if ($("#TalentBlossom").is(":checked")) {
    FullTalent = true;
    applyStats();
} else {
    FullTalent = false;
    applyStats();
}
$("#TalentBlossom").change(function() {
    if ($(this).is(":checked")) {
        FullTalent = true;
        applyStats();
    } else {
        FullTalent = false;
        applyStats();
    }
});

$('input:radio[value=ATK]').change(function() {
    if ($(this).is(":checked")) {
        nodeATK = true;
        nodeHP = false;
        nodeAGL = false;
        applyStats();
    } else {
        nodeATK = false;
        applyStats();
    }
});

$('input:radio[value=HP]').change(function() {
    if ($(this).is(":checked")) {
        nodeATK = false;
        nodeHP = true;
        nodeAGL = false;
        applyStats();
    } else {
        nodeHP = false;
        applyStats();
    }
});

$('input:radio[value=AGL]').change(function() {
    if ($(this).is(":checked")) {
        nodeATK = false;
        nodeHP = false;
        nodeAGL = true;
        applyStats();
    } else {
        nodeAGL = false;
        applyStats();
    }
});

$('input:radio[value=NONE]').change(function() {
    if ($(this).is(":checked")) {
        nodeATK = false;
        nodeHP = false;
        nodeAGL = false;
        applyStats();
    }
});

$('input:radio[value=DEF]').change(function() {
    if ($(this).is(":checked")) {
        nodeDEF = true;
        nodeMP = false;
        nodeWIS = false;
        applyStats();
    } else {
        nodeDEF = false;
        applyStats();
    }
});

$('input:radio[value=MP]').change(function() {
    if ($(this).is(":checked")) {
        nodeDEF = false;
        nodeMP = true;
        nodeWIS = false;
        applyStats();
    } else {
        nodeMP = false;
        applyStats();
    }
});

$('input:radio[value=WIS]').change(function() {
    if ($(this).is(":checked")) {
        nodeDEF = false;
        nodeMP = false;
        nodeWIS = true;
        applyStats();
    } else {
        nodeAGL = false;
        applyStats();
    }
});

$('input:radio[value=NONE2]').change(function() {
    if ($(this).is(":checked")) {
        nodeDEF = false;
        nodeMP = false;
        nodeWIS = false;
        applyStats();
    }
});

} );