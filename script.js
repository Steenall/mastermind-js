var tentatives = 0;
var prop=[3];
var combinaison=[3];
for(i=0;i<4;i++)prop[i]=9;
function dragCouleur(couleur, emplacement){
  document.getElementById('submit').disabled=false;
  document.getElementById('retry').disabled=false;
  if(emplacement>0&&emplacement<4)prop[emplacement]=couleur;
  afficheProp();
}
function clickCouleur(couleur){
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
  var i;
  for(i=0;i<4;i++){
    if(prop[i]!=9)ajoutCouleur(prop[i]);
    else ajoutCouleur(9);
  }
  for(i=0;i<4;i++)STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_White.svg" alt="blanc" class="invisible" value="0">';
  STV_PROPOSITIONS.innerHTML+='&nbsp;&nbsp;';
}
function affichePropSansInvisible(){
  var STV_PROPOSITIONS=document.getElementById('propositions');
  STV_PROPOSITIONS.innerHTML='';
  var i;
  for(i=0;i<4;i++){
    if(prop[i]!=9)ajoutCouleur(prop[i]);
    else ajoutCouleur(9);
  }
}
function ajoutCouleur(couleur){
  var i;
  for(i=0;i<4;i++){
    if(prop[i]!=9){
      var STV_PROPOSITIONS=document.getElementById('propositions');
      switch (couleur) {
        case 0:
          STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_Blue.svg" alt="bleu" class="prop" value="0">';
          return 0;
        case 1:
          STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_Yellow.svg" alt="jaune" class="prop" value="0">';
          return 0;
        case 2:
          STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_Green.svg" alt="vert" class="prop" value="0">';
          return 0;
        case 3:
          STV_PROPOSITIONS.innerHTML+='<img src="Redbutton.svg" alt="rouge" class="prop" value="0">';
          return 0;
        case 4:
          STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_Purple.svg" alt="violet" class="prop" value="0">';
          return 0;
        case 5:
          STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_Brown.svg" alt="marron" class="prop" value="0">';
          return 0;
        case 9:
          STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_White.svg" alt="blanc" class="invisible" value="0">';
          return 0;
      }
    }
  }
}
function genereCombinaison(){
  document.getElementById('combi1').value=Math.floor(Math.random() * (6));
  do{
    document.getElementById('combi2').value=Math.floor(Math.random() * (6));
  }while(document.getElementById('combi2').value==document.getElementById('combi1').value);
  do{
    document.getElementById('combi3').value=Math.floor(Math.random() * (6));
  }while(document.getElementById('combi3').value==document.getElementById('combi1').value||document.getElementById('combi3').value==document.getElementById('combi2').value);
  do{
    document.getElementById('combi4').value=Math.floor(Math.random() * (6));
  }while(document.getElementById('combi4').value==document.getElementById('combi1').value||document.getElementById('combi4').value==document.getElementById('combi2').value||document.getElementById('combi4').value==document.getElementById('combi3').value);
  for(i=0; i<4; i++) {
      prop.fill(9);
  }
}
function testCombinaison(){
  var STV_PROPOSITIONS=document.getElementById('propositions'),
  combi1=document.getElementById('combi1').value,
  combi2=document.getElementById('combi2').value,
  combi3=document.getElementById('combi3').value,
  combi4=document.getElementById('combi4').value,
  impossible=[3],
  end=false;
  if (prop[3] === 9) {
    return 0;
  }
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
      }
      if(prop[0]==combi3){
        STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_White.svg" alt="blanc" class="res" value="0">';
        gagner++;
      }
      if(prop[0]==combi4){
        STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_White.svg" alt="blanc" class="res" value="0">';
        gagner++;
      }
    }
    if(prop[1]!=9&&prop[1]!=impossible[0]&&prop[1]!=impossible[2]&&prop[1]!=impossible[3]){
      if(prop[1]==combi1){
        STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_White.svg" alt="blanc" class="res" value="0">';
        gagner++;
      }
      if(prop[1]==combi3){
        STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_White.svg" alt="blanc" class="res" value="0">';
        gagner++;
      }
      if(prop[1]==combi4){
        STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_White.svg" alt="blanc" class="res" value="0">';
        gagner++;
      }
    }
    if(prop[2]!=9&&prop[2]!=impossible[0]&&prop[3]!=impossible[1]&&prop[2]!=impossible[3]){
      if(prop[2]==combi1){
        STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_White.svg" alt="blanc" class="res" value="0">';
        gagner++;
      }
      if(prop[2]==combi2){
        STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_White.svg" alt="blanc" class="res" value="0">';
        gagner++;
      }
      if(prop[2]==combi4){
        STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_White.svg" alt="blanc" class="res" value="0">';
        gagner++;
      }
    }
    if(prop[3]!=9&&prop[3]!=impossible[0]&&prop[3]!=impossible[1]&&prop[2]!=impossible[2]){
      if(prop[3]==combi1){
        STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_White.svg" alt="blanc" class="res" value="0">';
        gagner++;
      }
      if(prop[3]==combi2){
        STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_White.svg" alt="blanc" class="res" value="0">';
        gagner++;
      }
      if(prop[3]==combi3){
        STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_White.svg" alt="blanc" class="res" value="0">';
        gagner++;
      }
    }
    if(gagner<4){
      for(i=gagner;i<4;i++){
        STV_PROPOSITIONS.innerHTML+='<img src="Button_Icon_White.svg" alt="blanc" class="invisible" value="0">';
      }
    }
    STV_PROPOSITIONS.innerHTML+='<br/><br/>';
    if(tentatives>=12){
      STV_PROPOSITIONS.innerHTML+='<br/>Vous avez Perdu, trop de tentatives incorrectes';
      end=true;
    }
    var STV_COMPTERENDU=document.getElementById('compteRendu');
    STV_COMPTERENDU.innerHTML+=STV_PROPOSITIONS.innerHTML;
    STV_PROPOSITIONS.innerHTML='';
  }else{
    STV_PROPOSITIONS.innerHTML+='<br><br/>Bravo, vous avez gagné ';
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
  tentatives=0;
  document.getElementById('submit').disabled=false;
  document.getElementById('retry').disabled=false;
}

function affichecombinaison(){
  return "1: "+document.getElementById('combi1').value+", 2: "+document.getElementById('combi2').value+", 3: "+document.getElementById('combi3').value+", 4: "+document.getElementById('combi4').value;
}
