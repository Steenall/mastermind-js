var tentatives = 0;
var prop = [3];
function ajoutCouleur(couleur) {
    "use strict";
    var stop = 0, i,
        STV_PROPOSITIONS = document.getElementById('propositions');
    for (i = 0; i < 4 && stop === 0; i = i + 1) {
        if (prop[i] === 0) {
            prop[i] = couleur;
            switch (couleur) {
            case 0:
                STV_PROPOSITIONS.innerHTML += '<label class = "bleu">██</label> ';
                break;
            case 1:
                STV_PROPOSITIONS.innerHTML += '<label class = "jaune">██</label> ';
                break;
            case 2:
                STV_PROPOSITIONS.innerHTML += '<label class = "vert">██</label> ';
                break;
            case 3:
                STV_PROPOSITIONS.innerHTML += '<label class = "rouge">██</label> ';
                break;
            case 4:
                STV_PROPOSITIONS.innerHTML += '<label class = "orange">██</label> ';
                break;
            case 5:
                STV_PROPOSITIONS.innerHTML += '<label class = "marron">██</label> ';
                break;
            }
            stop = 1;
        }
    }
}
function genereCombinaison() {
    "use strict";
    document.getElementById('combi1').value = Math.floor(Math.random() * (6));
    do {
        document.getElementById('combi2').value = Math.floor(Math.random() * (6));
    } while (document.getElementById('combi2').value === document.getElementById('combi1').value);
    do {
        document.getElementById('combi3').value = Math.floor(Math.random() * (6));
    } while (document.getElementById('combi3').value === document.getElementById('combi1').value || document.getElementById('combi3').value === document.getElementById('combi2').value);
    do {
        document.getElementById('combi4').value = Math.floor(Math.random() * (6));
    } while (document.getElementById('combi4').value === document.getElementById('combi1').value || document.getElementById('combi4').value === document.getElementById('combi2').value || document.getElementById('combi4').value === document.getElementById('combi3').value);
    var i;
    for (i = 0; i < 4; i = i + 1) {
        prop.fill(9);
    }
}
function testCombinaison() {
    "use strict";
    tentatives = tentatives + 1;
    var STV_PROPOSITIONS = document.getElementById('propositions'),
        combi1 = document.getElementById('combi1').value,
        combi2 = document.getElementById('combi2').value,
        combi3 = document.getElementById('combi3').value,
        combi4 = document.getElementById('combi4').value,
        gagner = 0,
        STV_COMPTERENDU = document.getElementById('compteRendu'),
        end = false,
        i;
    if (prop[3] === 9) {
        return 0;
    }
    STV_PROPOSITIONS.innerHTML += '&nbsp;';
    if (prop[0] === combi1) {
        STV_PROPOSITIONS.innerHTML += '<label class = "noir">██</label> ';
        gagner = gagner + 1;
        prop[0] = 9;
    }
    if (prop[1] === combi2) {
        STV_PROPOSITIONS.innerHTML += '<label class = "noir">██</label> ';
        gagner = gagner + 1;
        prop[1] = 9;
    }
    if (prop[2] === combi3) {
        STV_PROPOSITIONS.innerHTML += '<label class = "noir">██</label> ';
        gagner = gagner + 1;
        prop[2] = 9;
    }
    if (prop[3] === combi4) {
        STV_PROPOSITIONS.innerHTML += '<label class = "noir">██</label> ';
        gagner = gagner + 1;
        prop[3] = 9;
    }
    if (gagner < 4) {
        if (prop[0] !== 9) {
            if (prop[0] === combi2) {
                STV_PROPOSITIONS.innerHTML += '<label class = "blanc">██</label> ';
            }
            if (prop[0] === combi3) {
                STV_PROPOSITIONS.innerHTML += '<label class = "blanc">██</label> ';
            }
            if (prop[0] === combi4) {
                STV_PROPOSITIONS.innerHTML += '<label class = "blanc">██</label> ';
            }
        }
        if (prop[1] !== 9) {
            if (prop[1] === combi1) {
                STV_PROPOSITIONS.innerHTML += '<label class = "blanc">██</label> ';
            }
            if (prop[1] === combi3) {
                STV_PROPOSITIONS.innerHTML += '<label class = "blanc">██</label> ';
            }
            if (prop[1] === combi4) {
                STV_PROPOSITIONS.innerHTML += '<label class = "blanc">██</label> ';
            }
        }
        if (prop[2] !== 9) {
            if (prop[2] === combi1) {
                STV_PROPOSITIONS.innerHTML += '<label class = "blanc">██</label> ';
            }
            if (prop[2] === combi2) {
                STV_PROPOSITIONS.innerHTML += '<label class = "blanc">██</label> ';
            }
            if (prop[2] === combi4) {
                STV_PROPOSITIONS.innerHTML += '<label class = "blanc">██</label> ';
            }
        }
        if (prop[3] !== 9) {
            if (prop[3] === combi1) {
                STV_PROPOSITIONS.innerHTML += '<label class = "blanc">██</label> ';
            }
            if (prop[3] === combi2) {
                STV_PROPOSITIONS.innerHTML += '<label class = "blanc">██</label> ';
            }
            if (prop[3] === combi3) {
                STV_PROPOSITIONS.innerHTML += '<label class = "blanc">██</label> ';
            }
        }
        STV_PROPOSITIONS.innerHTML += '<br>';
        if (tentatives > 10) {
            STV_PROPOSITIONS.innerHTML += '<br>Vous avez Perdu, trop de tentatives incorrectes';
            end = true;
        }
        STV_COMPTERENDU.innerHTML += STV_PROPOSITIONS.innerHTML;
        STV_PROPOSITIONS.innerHTML = '';
    } else {
        STV_PROPOSITIONS.innerHTML += '<br>Bravo, vous avez gagné ';
        STV_COMPTERENDU.innerHTML += STV_PROPOSITIONS.innerHTML;
        STV_PROPOSITIONS.innerHTML = '';
        end = true;
    }
    for (i  =  0; i < 4; i  =  i + 1) {
        prop[i]  =  0;
    }
    if (end === true) {
        STV_COMPTERENDU.innerHTML += '<br><input type = "button" onclick = "recommencer();" value = "0">';
    }
    for (i = 0; i < 4; i = i + 1) {
        prop[i] = 9;
    }
}
function supprCombinaison() {
    "use strict";
    var STV_PROPOSITIONS = document.getElementById('propositions'), i;
    STV_PROPOSITIONS.innerHTML = '';
    for (i = 0; i < 4; i = i + 1) {
        prop[i] = 0;
    }
}

function recommencer() {
    "use strict";
    genereCombinaison();
    var STV_COMPTERENDU = document.getElementById('compteRendu'),
        STV_PROPOSITIONS = document.getElementById('propositions');
    STV_PROPOSITIONS.innerHTML = '';
    STV_COMPTERENDU.innerHTML = '';
    tentatives = 0;
    document.getElementById('submit').disabled = "true";
    document.getElementById('retry').disabled = "true";
}

function affichecombinaison() {
    "use strict";
    return "1: " + document.getElementById('combi1').value + ", 2: " + document.getElementById('combi2').value + ", 3: " + document.getElementById('combi3').value + ", 4: " + document.getElementById('combi4').value;
}
