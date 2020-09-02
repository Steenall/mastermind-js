var tentatives = 0;
var prop=[3];
var combinaison=[3];
for(i=0;i<4;i++)prop[i]=0;
function ajoutCouleur(couleur){
  var i;
  for(i=0;i<4;i++){
    if(prop[i]==9){
      var STV_PROPOSITIONS=document.getElementById('propositions');
      prop[i]=couleur;
      switch (couleur) {
        case 0:
          STV_PROPOSITIONS.innerHTML+='<label class="bleu">██</label> ';
          return 0;
        case 1:
          STV_PROPOSITIONS.innerHTML+='<label class="jaune">██</label> ';
          return 0;
        case 2:
          STV_PROPOSITIONS.innerHTML+='<label class="vert">██</label> ';
          return 0;
        case 3:
          STV_PROPOSITIONS.innerHTML+='<label class="rouge">██</label> ';
          return 0;
        case 4:
          STV_PROPOSITIONS.innerHTML+='<label class="orange">██</label> ';
          return 0;
        case 5:
          STV_PROPOSITIONS.innerHTML+='<label class="marron">██</label> ';
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
  end=false;
  if (prop[3] === 9) {
    return 0;
  }
  tentatives++;
  STV_PROPOSITIONS.innerHTML+='&nbsp;';
  var gagner=0;
  if(prop[0]==combi1){
    STV_PROPOSITIONS.innerHTML+='<label class="noir">██</label> ';
    gagner++;
    prop[0]=9;
  }
  if(prop[1]==combi2){
    STV_PROPOSITIONS.innerHTML+='<label class="noir">██</label> ';
    gagner++;
    prop[1]=9;
  }
  if(prop[2]==combi3){
    STV_PROPOSITIONS.innerHTML+='<label class="noir">██</label> ';
    gagner++;
    prop[2]=9;
  }
  if(prop[3]==combi4){
    STV_PROPOSITIONS.innerHTML+='<label class="noir">██</label> ';
    gagner++;
    prop[3]=9;
  }
  if(gagner<4){
    if(prop[0]!=9){
      if(prop[0]==combi2)STV_PROPOSITIONS.innerHTML+='<label class="blanc">██</label> ';
      if(prop[0]==combi3)STV_PROPOSITIONS.innerHTML+='<label class="blanc">██</label> ';
      if(prop[0]==combi4)STV_PROPOSITIONS.innerHTML+='<label class="blanc">██</label> ';
    }
    if(prop[1]!=9){
      if(prop[1]==combi1)STV_PROPOSITIONS.innerHTML+='<label class="blanc">██</label> ';
      if(prop[1]==combi3)STV_PROPOSITIONS.innerHTML+='<label class="blanc">██</label> ';
      if(prop[1]==combi4)STV_PROPOSITIONS.innerHTML+='<label class="blanc">██</label> ';
    }
    if(prop[2]!=9){
      if(prop[2]==combi1)STV_PROPOSITIONS.innerHTML+='<label class="blanc">██</label> ';
      if(prop[2]==combi2)STV_PROPOSITIONS.innerHTML+='<label class="blanc">██</label> ';
      if(prop[2]==combi4)STV_PROPOSITIONS.innerHTML+='<label class="blanc">██</label> ';
    }
    if(prop[3]!=9){
      if(prop[3]==combi1)STV_PROPOSITIONS.innerHTML+='<label class="blanc">██</label> ';
      if(prop[3]==combi2)STV_PROPOSITIONS.innerHTML+='<label class="blanc">██</label> ';
      if(prop[3]==combi3)STV_PROPOSITIONS.innerHTML+='<label class="blanc">██</label> ';
    }
    STV_PROPOSITIONS.innerHTML+='<br>';
    if(tentatives>10){
      STV_PROPOSITIONS.innerHTML+='<br>Vous avez Perdu, trop de tentatives incorrectes';
      end=true;
    }
    var STV_COMPTERENDU=document.getElementById('compteRendu');
    STV_COMPTERENDU.innerHTML+=STV_PROPOSITIONS.innerHTML;
    STV_PROPOSITIONS.innerHTML='';
  }else{
    STV_PROPOSITIONS.innerHTML+='<br>Bravo, vous avez gagné ';
    var STV_COMPTERENDU=document.getElementById('compteRendu');
    STV_COMPTERENDU.innerHTML+=STV_PROPOSITIONS.innerHTML;
    STV_PROPOSITIONS.innerHTML='';
    end=true;
  }
  for(i=0;i<4;i++)prop[i]=0;
  if(end==true){
    STV_COMPTERENDU.innerHTML+='<br><input type="button" onclick="recommencer();" value="Recommencer une partie">';
    document.getElementById('submit').disabled=true;
    document.getElementById('retry').disabled=true;
  }
  for(i=0;i<4;i++)prop[i]=9;
}
function supprCombinaison(){
  var STV_PROPOSITIONS=document.getElementById('propositions');
  STV_PROPOSITIONS.innerHTML='';
  for(i=0;i<4;i++)prop[i]=0;
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
