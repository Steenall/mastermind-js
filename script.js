var tentatives = 0;
var prop=[3];
var combinaison=[3];
for(i=0;i<4;i++)prop[i]=9;
var coulSelect=9;
var end=false;
var repeat=false;
var max=12;
var tempEmplacement=9;
function endDrag(){
  if(tempEmplacement<4&&tempEmplacement>=0){
    prop[tempEmplacement]=coulSelect;
    afficheProp();
    document.getElementById('submit').disabled=false;
    document.getElementById('retry').disabled=false;
  }
}
function dragCouleur(couleur){
  if(end)return 0;
  coulSelect=couleur;
}
function dropCouleur(emplacement){
  if(end)return 0;
  if(emplacement>=0&&emplacement<4)tempEmplacement=emplacement;
  else emplacement=9;
}
function updateVoid(){
  document.getElementById('void').innerHTML='<img src="vide.png" alt="blanc" class="invisible" value="0">';
  for(i=tentatives;i<max-1;i++){
    document.getElementById('void').innerHTML+='<br/><br/><img src="vide.png" alt="blanc" class="invisible" value="0">';
  }
}
function clickCouleur(couleur){
  if(end)return 0;
  document.getElementById('submit').disabled=false;
  document.getElementById('retry').disabled=false;
  if(prop[0]==9)prop[0]=couleur;
  else{
    if(prop[1]==9)prop[1]=couleur;
    else{
      if(prop[2]==9)prop[2]=couleur;
      else{
        if(prop[3]==9)prop[3]=couleur;
        else{
           return -1;
        }
      }
    }
  }
  afficheProp();
}
function afficheProp(){
  var STV_PROPOSITIONS=document.getElementById('propositions');
  STV_PROPOSITIONS.innerHTML='';
  for(i=0;i<4;i++){
    ajoutCouleur(prop[i],i);
  }
  STV_PROPOSITIONS.innerHTML+='&nbsp;&nbsp;';
  for(i=0;i<4;i++)STV_PROPOSITIONS.innerHTML+='<img src="vide.png" alt="blanc" class="invisible" value="0">';
}
function affichePropSansInvisible(){
  var STV_PROPOSITIONS=document.getElementById('propositions');
  STV_PROPOSITIONS.innerHTML='';
  var i;
  for(i=0;i<4;i++){
    if(prop[i]!=9)ajoutCouleur(prop[i],i);
    else ajoutCouleur(9,i);
  }
}
function ajoutCouleur(couleur,i){
  if(end)return 0;
  var STV_PROPOSITIONS=document.getElementById('propositions');
  switch (couleur) {
    case 0:
      STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_Blue.svg" alt="bleu" ondragover="dropCouleur('+i+')" ondragleave="dropCouleur(9)" class="prop" value="0">';
      break;
    case 1:
      STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_Yellow.svg" alt="jaune" ondragover="dropCouleur('+i+')" ondragleave="dropCouleur(9)" class="prop" value="0">';
      break;
    case 2:
      STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_Green.svg" alt="vert" ondragover="dropCouleur('+i+')" ondragleave="dropCouleur(9)" class="prop" value="0">';
      break;
    case 3:
      STV_PROPOSITIONS.innerHTML+='<img src="Redbutton.svg" alt="rouge" ondragover="dropCouleur('+i+')" ondragleave="dropCouleur(9)" class="prop" value="0">';
      break;
    case 4:
      STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_Purple.svg" alt="violet" ondragover="dropCouleur('+i+')" ondragleave="dropCouleur(9)" class="prop" value="0">';
      break;
    case 5:
      STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_Brown.svg" alt="marron" ondragover="dropCouleur('+i+')" ondragleave="dropCouleur(9)" class="prop" value="0">';
      break;
    default:
      STV_PROPOSITIONS.innerHTML+='<img src="vide.png" alt="blanc" ondragover="dropCouleur('+i+')" ondragleave="dropCouleur(9)" class="invisible" value="0">';
      break;
  }
  //document.getElementById('void').innerHTML-='<br/><br/><vide.png" alt="blanc" class="invisible" value="0">';
  //document.getElementById('void').innerHTML='<img src="Button_Icon_White.svg" alt="blanc" class="invisible" value="0">';
  //for(i=0;i<10-tentatives;i++)document.getElementById('void').innerHTML+='<br/><br/><img src="Button_Icon_White.svg" alt="blanc" class="invisible" value="0">';
}
function genereCombinaison(){
  tentatives=0;
  end=false;
  for(i=0;i<4;i++)prop[i]=9;
  coulSelect=9;
  end=false;
  document.getElementById('soluce').innerHTML='';
  document.getElementById('combi1').value=Math.floor(Math.random() * (6));
  do{
    document.getElementById('combi2').value=Math.floor(Math.random() * (6));
  }while(document.getElementById('combi2').value==document.getElementById('combi1').value&&repeat==false);
  do{
    document.getElementById('combi3').value=Math.floor(Math.random() * (6));
  }while(repeat==false&&(document.getElementById('combi3').value==document.getElementById('combi1').value||document.getElementById('combi3').value==document.getElementById('combi2').value));
  do{
    document.getElementById('combi4').value=Math.floor(Math.random() * (6));
  }while(repeat==false&&(document.getElementById('combi4').value==document.getElementById('combi1').value||document.getElementById('combi4').value==document.getElementById('combi2').value||document.getElementById('combi4').value==document.getElementById('combi3').value));
  afficheProp();
  document.getElementById('submit').disabled=true;
  document.getElementById('retry').disabled=true;
  document.getElementById('compteRendu').innerHTML='';
  document.getElementById('void').innerHTML='<img src="vide.png" alt="blanc" class="invisible" value="0">';
  for(i=0;i<max-2;i++)document.getElementById('void').innerHTML+='<br/><br/><img src="vide.png" alt="blanc" class="invisible" value="0">';
  document.getElementById('void').innerHTML+='<br/><img src="vide.png" alt="blanc" class="equilibre" value="0">';
}
function testCombinaison(){
  var STV_PROPOSITIONS=document.getElementById('propositions'),
  combi1=document.getElementById('combi1').value,
  combi2=document.getElementById('combi2').value,
  combi3=document.getElementById('combi3').value,
  combi4=document.getElementById('combi4').value,
  impossible=[3];
  for(i=0;i<4;i++)impossible[i]=8;
  tentatives++;
  affichePropSansInvisible();
  var gagner=0;
  STV_PROPOSITIONS.innerHTML+='&nbsp;&nbsp;';
  if(prop[0]==combi1){
    STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_Black.svg" alt="noir" class="res" value="0">';
    impossible[0]=combi1;
    gagner++;
    prop[0]=9;
  }
  if(prop[1]==combi2){
    STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_Black.svg" alt="noir" class="res" value="0">';
    gagner++;
    impossible[1]=combi2;
    prop[1]=9;
  }
  if(prop[2]==combi3){
    STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_Black.svg" alt="noir" class="res" value="0">';
    gagner++;
    impossible[2]=combi3;
    prop[2]=9;
  }
  if(prop[3]==combi4){
    STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_Black.svg" alt="noir" class="res" value="0">';
    gagner++;
    impossible[3]=combi4;
    prop[3]=9;
  }
  if(gagner<4){
    if(prop[0]!=9&&prop[0]!=impossible[1]&&prop[0]!=impossible[2]&&prop[0]!=impossible[3]){
      if(prop[0]==combi2){
        STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_White.svg" alt="blanc" class="res" value="0">';
        gagner++;
        impossible[0]=combi2;
        console.log('prop[0] combi2');
      }
      if(prop[0]==combi3){
        STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_White.svg" alt="blanc" class="res" value="0">';
        gagner++;
        impossible[0]=combi3;
        console.log('prop[0] combi3');
      }
      if(prop[0]==combi4){
        STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_White.svg" alt="blanc" class="res" value="0">';
        gagner++;
        impossible[0]=combi4;
        console.log('prop[0] combi4');
      }
    }
    if(prop[1]!=9&&prop[1]!=impossible[0]&&prop[1]!=impossible[2]&&prop[1]!=impossible[3]){
      if(prop[1]==combi1){
        STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_White.svg" alt="blanc" class="res" value="0">';
        gagner++;
        impossible[1]=combi1;
        console.log('prop[1] combi1');
      }
      if(prop[1]==combi3){
        STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_White.svg" alt="blanc" class="res" value="0">';
        gagner++;
        impossible[1]=combi3;
        console.log('prop[1] combi3');
      }
      if(prop[1]==combi4){
        STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_White.svg" alt="blanc" class="res" value="0">';
        gagner++;
        impossible[1]=combi4;
        console.log('prop[1] combi4');
      }
    }
    if(prop[2]!=9&&prop[2]!=impossible[0]&&prop[2]!=impossible[1]&&prop[2]!=impossible[3]){
      if(prop[2]==combi1){
        STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_White.svg" alt="blanc" class="res" value="0">';
        gagner++;
        impossible[2]=combi1;
        console.log('prop[2] combi1');
      }
      if(prop[2]==combi2){
        STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_White.svg" alt="blanc" class="res" value="0">';
        gagner++;
        impossible[2]=combi2;
        console.log('prop[2] combi2');
      }
      if(prop[2]==combi4){
        STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_White.svg" alt="blanc" class="res" value="0">';
        gagner++;
        impossible[2]=combi4;
        console.log('prop[2] combi4');
      }
    }
    if(prop[3]!=9&&prop[3]!=impossible[0]&&prop[3]!=impossible[1]&&prop[3]!=impossible[2]){
      if(prop[3]==combi1){
        STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_White.svg" alt="blanc" class="res" value="0">';
        gagner++;
        impossible[3]=combi1;
        console.log('prop[3] combi1');
      }
      if(prop[3]==combi2){
        STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_White.svg" alt="blanc" class="res" value="0">';
        gagner++;
        impossible[3]=combi2;
        console.log('prop[3] combi2');
      }
      if(prop[3]==combi3){
        STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_White.svg" alt="blanc" class="res" value="0">';
        gagner++;
        impossible[3]=combi3;
      }
    }
    if(gagner<4){
      for(i=gagner;i<4;i++){
        STV_PROPOSITIONS.innerHTML+='<img src="vide.png" alt="blanc" class="invisible" value="0">';
      }
    }
    STV_PROPOSITIONS.innerHTML+='<br/><br/>';
    if(tentatives>=max){
      STV_PROPOSITIONS.innerHTML+='<br/><div id="win">Vous avez Perdu, trop de tentatives incorrectes</div>';
      end=true;
      if(inverse)document.getElementById('win').setAttribute('style','color : black');
    }
    var STV_COMPTERENDU=document.getElementById('compteRendu');
    STV_COMPTERENDU.innerHTML+=STV_PROPOSITIONS.innerHTML;
    STV_PROPOSITIONS.innerHTML='';
  }else{
    STV_PROPOSITIONS.innerHTML+='<br><br/><div id="win">Bravo, vous avez gagné </div>';
    if(inverse)document.getElementById('win').setAttribute('style','color : black');
    var STV_COMPTERENDU=document.getElementById('compteRendu');
    STV_COMPTERENDU.innerHTML+=STV_PROPOSITIONS.innerHTML;
    STV_PROPOSITIONS.innerHTML='';
    end=true;
  }
  if(end==true){
    STV_COMPTERENDU.innerHTML+='<br><input type="button" onclick="recommencer();" class="button" value="Recommencer une partie">';

  }
  for(i=0;i<4;i++)prop[i]=9;
  document.getElementById('submit').disabled=true;
  document.getElementById('retry').disabled=true;

  updateVoid();
  //document.getElementById('void').innerHTML+='<br/><img src="vide.png" alt="blanc" class="invisible" value="0">';
}
function supprCombinaison(){
  var STV_PROPOSITIONS=document.getElementById('propositions');
  STV_PROPOSITIONS.innerHTML='';
  for(i=0;i<4;i++)prop[i]=9;
  document.getElementById('submit').disabled=true;
  document.getElementById('retry').disabled=true;
}

function recommencer(){
  genereCombinaison();
  var STV_COMPTERENDU=document.getElementById('compteRendu');
  var STV_PROPOSITIONS=document.getElementById('propositions');
  STV_PROPOSITIONS.innerHTML='';
  STV_COMPTERENDU.innerHTML='';
  document.getElementById('submit').disabled=true;
  document.getElementById('retry').disabled=true;
}

function affichecombinaison(){
  return "1: "+document.getElementById('combi1').value+", 2: "+document.getElementById('combi2').value+", 3: "+document.getElementById('combi3').value+", 4: "+document.getElementById('combi4').value;
}
var wasDisabled;
function afficheRegle(){
  document.getElementById('rules').innerHTML='<div class="setting"><br/><h2>Paramètres de l\'ordinateur</h2><br/><label for="tentativesMax">Changer le nombre de tentatives maximales('+max+' actuellement)</label><br/></div>';
  document.getElementById('rules').innerHTML+='<br/><input id="tentativesMax" type="text"><input type="button" class="minibutton" value="Appliquer" onclick="editTentativesMax();">';//<br/><br/><input id="repeteCouleur" type="checkbox" class="button" onclick="editCoulRepet();"><label for="repeteCouleur">Autoriser l\'ordinateur à généré des combinaisons<br/>avec des couleurs qui se répètent</label>';
  document.getElementById('rules').innerHTML+='<div class="setting"><br/><br/><h2>Apparence</h2><br/><label for="backgroundSelect">Changer la couleur du fond</label><br/><br/><select id="backgroundSelect" onchange="changeFond();" class="list"><option value="#34495e">Couleur par défaut</option><option value="black">Noir</option><option value="white">Blanc</option><option value="firebrick">Rouge</option><option value="deepskyblue">Bleu</option><option value="green">Vert</option><option value="lightslategray">Gris</option><option value="purple">Violet</option></select></div>';
  document.getElementById('rules').innerHTML+='<br/><br/><input id="textCouleur" type="checkbox" class="button" onclick="changePolice();"><label for="repeteCouleur" class="setting">Inverser la couleur du texte</label>';
  document.getElementById('rules').innerHTML+='<div class="setting"><br/><br/><h2>Règles</h2>Lire les règles du mastermind <br/><br/><input type="button" class="minibutton" onclick="window.open(\'regle.html\');" value="Version en HTML"><input type="button" class="minibutton" onclick="window.open(\'regle.pdf\')" value="Version en PDF"></div>';
  document.getElementById('rules').innerHTML+='<br/><br/><h2 class="setting">Débogage</h2><input type="button" class="minibutton" value="Afficher la combinaison gagnante" onclick="afficheCombi();"></input>';
  document.getElementById('regle').value="Masquer les paramètres";
  document.getElementById('regle').onclick=function(){masquerRegle();};
  liste=document.getElementsByClassName('select');
  for(i=0;i< liste.length ;i++){
    liste[i].removeAttribute("onclick");
    liste[i].removeAttribute("ondrag");
  }
  wasDisabled=document.getElementById('submit').disabled;
  document.getElementById('jeu').hidden=true;
  document.getElementById('submit').disabled=true;
  document.getElementById('retry').disabled=true;
  document.getElementById('footer').hidden=false;
  if(inverse)document.getElementById('textCouleur').checked=true;
  changePolice();
}
function afficheCombi(){
  var STV_SOLUCE=document.getElementById('soluce');
  var tabSoluce=[];
  tabSoluce[0]=document.getElementById('combi1').value;
  tabSoluce[1]=document.getElementById('combi2').value;
  tabSoluce[2]=document.getElementById('combi3').value;
  tabSoluce[3]=document.getElementById('combi4').value;
  STV_SOLUCE.innerHTML='<br/>';
  for(i=0;i<4;i++){
    console.log(tabSoluce[i]);
    switch (tabSoluce[i]) {
      case '0':
        STV_SOLUCE.innerHTML+='<img src="Button_Icon_Blue.svg" alt="bleu" class="prop" value="0">'
        break;
      case '1':
        STV_SOLUCE.innerHTML+='<img src="Button_Icon_Yellow.svg" alt="jaune" class="prop" value="0">'
        break;
      case '2':
        STV_SOLUCE.innerHTML+='<img src="Button_Icon_Green.svg" alt="vert" class="prop" value="0">'
        break;
      case '3':
        STV_SOLUCE.innerHTML+='<img src="Redbutton.svg" alt="rouge" class="prop" value="0">'
        break;
      case '4':
        STV_SOLUCE.innerHTML+='<img src="Button_Icon_Purple.svg" alt="violet" class="prop" value="0">'
        break;
      case '5':
        STV_SOLUCE.innerHTML+='<img src="Button_Icon_Brown.svg" alt="brown" class="prop" value="0">'
        break;
      default:
        break;
    }
  }
}
function masquerRegle(){
  document.getElementById('rules').innerHTML='';
  document.getElementById('regle').value="Afficher les paramètres";
  document.getElementById('regle').onclick=function(){afficheRegle();};
  document.getElementById('jeu').hidden=false;
  document.getElementById('footer').hidden=true;
  liste=document.getElementsByClassName('select');
  for(i=0;i< liste.length ;i++){
    liste[i].setAttribute("onclick","clickCouleur("+i+")");
    liste[i].setAttribute("ondrag","dragCouleur("+i+")");
  }
  document.getElementById('compteRendu').hidden=false;
  document.getElementById('propositions').hidden=false;
  document.getElementById('void').hidden=false;
  if(wasDisabled==false){
    document.getElementById('submit').disabled=false;
    document.getElementById('retry').disabled=false;
  }
}

function editCoulRepet(){
  if(repeat==true)repeat=false;
  else repeat=true;
}

function editTentativesMax(){
  temp=document.getElementById('tentativesMax').value;
  if(isNaN(temp)||parseInt(temp)<=0||parseInt(temp)>=100)window.alert("Veuillez rentrer un nombre supérieur à 0 et inférieur à 100");
  else if(temp!=null)max=parseInt(temp);
  afficheRegle();
}
var waswhite=false,wasblack=false;
function changeFond(){
  document.getElementById('body').setAttribute('style', 'background-color : '+document.getElementById('backgroundSelect').value);
  if(document.getElementById('backgroundSelect').value=='white'){
    document.getElementById('textCouleur').checked=true;
    changePolice();
    waswhite=true
  }
  if(document.getElementById('backgroundSelect').value=='black'){
    document.getElementById('textCouleur').checked=false;
    changePolice();
    wasblack=true
  }
  if(waswhite&&document.getElementById('backgroundSelect').value!='white'&&wasblack==false){
    waswhite=false;
    document.getElementById('textCouleur').checked=false;
    changePolice();
  }
  if(wasblack&&document.getElementById('backgroundSelect').value!='black'&&waswhite==false){
    waswhite=false;
    document.getElementById('textCouleur').checked=false;
    changePolice();
  }
}
var inverse=false;
function changePolice(){
  var liste=document.getElementsByClassName('setting');
  if(document.getElementById('textCouleur').checked){
    inverse=true;
    for(i=0;i<liste.length;i++){
      liste[i].setAttribute('style', 'color : black');
    }
    document.getElementById('footer').setAttribute('style', 'color : black');
  }else {
    inverse=false;
    for(i=0;i<liste.length;i++){
      liste[i].setAttribute('style', 'color : white');
    }
    document.getElementById('footer').setAttribute('style', 'color : white');
  }
}
