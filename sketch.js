/*Link para os vídeos:
Unidade 2 - Começando o projeto do jogo: Evite Acidentes! https://youtu.be/227liM_9N9M
Unidade 3 - Projeto finalizado do jogo: Evite Acidentes!
https://youtu.be/Jg2iRAuMiyQ
*/
var tela=1;
var chances=3;
var largura=200;
var altura=50;
var IniciarX=100;
var IniciarY=83;
var InformacoesY=135;
var CreditosX=245;
var CreditosY=5;
var largura2=150;
var altura2=40;
var largura3=50;
var altura3=50;
var OpcaoX=10;
var XrectOpcao=30;
var YrectOpcao=30;
var XOpcao=30;
var XOpcao2=245;
var XOpcao3=270;
var XOpcao4=305;
let tela1;
let carlos;
let sore;
function preload(){
  tela1=loadImage('teladomenu1.jpg');
  carlos=loadImage('carlos.jpg');
  sore=loadImage('sore.jpg');
}
function setup() {
  createCanvas(400, 400);
}
function draw() {
  image(tela1,0,0)
  textStyle(NORMAL);
if(tela==1){
  //Menu com três opções
  //Iniciar o jogo
  textAlign(CENTER);   
  if(mouseX>IniciarX && mouseX<IniciarX+largura &&  
       mouseY>IniciarY && mouseY<IniciarY+altura){
      stroke(0);
      fill(255,137,33);
      rect(IniciarX,IniciarY,largura,altura,40);
    if(mouseIsPressed){
      tela=2;
    }
  }
  fill(255);
  stroke(0);
  strokeWeight(5);
  textSize(50);
  textFont('Times New Roman');
  text("Iniciar",200,125);
    
  //Informações do jogo
  if(mouseX>IniciarX && mouseX<IniciarX+largura &&  
    mouseY>InformacoesY && mouseY<InformacoesY+altura){
      stroke(0);
      //laranja
      fill(255,137,33);
      rect(IniciarX,InformacoesY,largura,altura,40);
    if(mouseIsPressed){
      tela=6;
    }
  }  
  fill(255);
  stroke(0);
  strokeWeight(4);
  textSize(28);
  text("Informações",200,170);
    
  //Créditos do jogo
  if(mouseX>CreditosX && mouseX<CreditosX+largura2 &&  
       mouseY>CreditosY && mouseY<CreditosY+altura2){
      stroke(0);
      //laranja
      fill(255,137,33);
      rect(CreditosX,CreditosY,largura2,altura2,40);
    if(mouseIsPressed){
      tela=7;
    }
  }
  fill(255);
  stroke(0);
  strokeWeight(4);
  textSize(24);
  text("Créditos",320,33);
}

//Jogo em ação, questão 1
else if(tela==2){
  fill(255);
  stroke(0);
  strokeWeight(4);
  textSize(32);
  text('Questão 1',200,45);
  
  fill(255);
  stroke(0);
  strokeWeight(4);
  textSize(28);
  text('Os produtos inflamáveis causam\n incêndio e até explosão, por\n isso vou guardá-los bem longe do:',190,85);
  //azul
  fill(109,174,239);
  rect(XOpcao,163,XrectOpcao,YrectOpcao,30);
  //opção a)
  if(mouseX>XOpcao && mouseX<XOpcao+XrectOpcao &&  
    mouseY>163 && mouseY<163+YrectOpcao){
      //laranja
    fill(255,137,33);
    rect(XOpcao,163,XrectOpcao,YrectOpcao,30);
    if(mouseIsPressed){
        tela=3;
        chances=chances-1;
    }
  }
  fill(255);
  text('a)Geladeira',130,195);
  
  //azul
  fill(109,174,239);
  rect(XOpcao,205,XrectOpcao,YrectOpcao,30);
  //opção b)
  if(mouseX>XOpcao && mouseX<XOpcao+XrectOpcao &&  
    mouseY>205 && mouseY<205+YrectOpcao){
    //laranja
    fill(255,137,33);
    rect(XOpcao,205,XrectOpcao,YrectOpcao,30);
    if(mouseIsPressed){
      tela=3;
    }
  }
  fill(255);
  text('b)Fogão',115,235);
  
  //azul
  fill(109,174,239);
  rect(XOpcao,248,XrectOpcao,YrectOpcao,30);
  //opção c)
  if(mouseX>XOpcao && mouseX<XOpcao+XrectOpcao &&  
    mouseY>248 && mouseY<248+YrectOpcao){
    //laranja
    fill(255,137,33);
    rect(XOpcao,248,XrectOpcao,YrectOpcao,30);
    if(mouseIsPressed){
      tela=3;
      chances=chances-1;
    }
  }
  fill(255);
  text('c)Sofá',105,275);  
  text('Clique na opção',180,350);
  
  fill(255,0,0);
  noStroke();
  textSize(23);
  text('Chances: '+chances,55,35);
}
//questão 2
else if(tela==3){
  fill(255);
  stroke(0);
  strokeWeight(4);
  textSize(32);
  text('Questão 2',200,45);
  
  fill(255);
  stroke(0);
  strokeWeight(4);
  textSize(28);
  text('Criança esperta não faz uso \nescondida de medicamentos.\n Por isso evita:',190,85);
  //azul
  fill(109,174,239);
  rect(XOpcao2,163,XrectOpcao,YrectOpcao,30);
  //opção a)
  if(mouseX>XOpcao2 && mouseX<XOpcao2+XrectOpcao &&  
    mouseY>163 && mouseY<163+YrectOpcao){
    //laranja
    fill(255,137,33);
    rect(XOpcao2,163,XrectOpcao,YrectOpcao,30);
    if(mouseIsPressed){
      tela=4;
    }
  }
  fill(255);
  text('a)Envenenamento',130,195);
  
  //azul
  fill(109,174,239);
  rect(XOpcao2,205,XrectOpcao,YrectOpcao,30);
  //opção b)
  if(mouseX>XOpcao2 && mouseX<XOpcao2+XrectOpcao &&  
    mouseY>205 && mouseY<205+YrectOpcao){
    //laranja
    fill(255,137,33);
    rect(XOpcao2,205,XrectOpcao,YrectOpcao,30);
    if(mouseIsPressed){
      tela=4;
      chances=chances-1;
    }
  }
  fill(255);
  text('b)Isolamento',103,235);
  
  //azul
  fill(109,174,239);
  rect(XOpcao2,248,XrectOpcao,YrectOpcao,30);
  //opção c)
  if(mouseX>XOpcao2 && mouseX<XOpcao2+XrectOpcao &&  
    mouseY>248 && mouseY<248+YrectOpcao){
    //laranja
    fill(255,137,33);
    rect(XOpcao2,248,XrectOpcao,YrectOpcao,30);
    if(mouseIsPressed){
      tela=4;
      chances=chances-1;
    }
  }
  fill(255);
  text('c)Fome',72,275);  
  text('Clique na opção',180,350);
  
  fill(255,0,0);
  noStroke();
  textSize(23);
  text('Chances: '+chances,55,35);
}
//questão 3
else if(tela==4){
  fill(255);
  stroke(0);
  strokeWeight(4);
  textSize(32);
  text('Questão 3',200,45);
  
  fill(255);
  stroke(0);
  strokeWeight(4);
  textSize(28);
  text('Criança não brinca com \neletricidade, isso já sabemos que\n é certo. Além do mais,\n evita o risco de:',190,85);
  
  //azul
  fill(109,174,239);
  rect(XOpcao3,205,XrectOpcao,YrectOpcao,30);
  //opção a)
  if(mouseX>XOpcao3 && mouseX<XOpcao3+XrectOpcao &&  
    mouseY>205 && mouseY<205+YrectOpcao){
    //laranja
    fill(255,137,33);
    rect(XOpcao3,205,XrectOpcao,YrectOpcao,30);
    if(mouseIsPressed){
      tela=5;
      chances=chances-1;
    }
  }
  fill(255);
  text('a)Corte',80,235);
  
  //azul
  fill(109,174,239);
  rect(XOpcao3,248,XrectOpcao,YrectOpcao,30);
  //opção b)
  if(mouseX>XOpcao3 && mouseX<XOpcao3+XrectOpcao &&  
    mouseY>248 && mouseY<248+YrectOpcao){
    //laranja
    fill(255,137,33);
    rect(XOpcao3,248,XrectOpcao,YrectOpcao,30);
    if(mouseIsPressed){
      tela=5;
      chances=chances-1;
    }
  }
  fill(255);
  text('b)Queda',87,275);
  
  //azul
  fill(109,174,239);
  rect(XOpcao3,291,XrectOpcao,YrectOpcao,30);
  //opção c)
  if(mouseX>XOpcao3 && mouseX<XOpcao3+XrectOpcao &&  
    mouseY>291 && mouseY<291+YrectOpcao){
    //laranja
    fill(255,137,33);
    rect(XOpcao3,291,XrectOpcao,YrectOpcao,30);
    if(mouseIsPressed){
      tela=5;
    }
  }
  fill(255);
  text('c)Choque elétrico',138,315);  
  text('Clique na opção',180,350);
  
  fill(255,0,0);
  noStroke();
  textSize(23);
  text('Chances: '+chances,55,35);
}
//Tente Novamente
else if(chances===0){
  tela=8;
    if(tela===8){
    fill(255);
    stroke(0);
    text('Você acabou com todas as chances!\nMas não desista.',200,130);
    //laranja
    fill(255,137,33);
    fill(255);
    textSize(32);
    text('TENTE NOVAMENTE',200,230);
    //azul
    fill(109,174,239);
    rect(180,250,30,30,30);
    if(mouseX>180 && mouseX<180+30 &&
       mouseY>250 && mouseY<250+30){
      //laranja
      fill(255,137,33);
      rect(180,250,30,30,30);
      if(mouseIsPressed){
        tela=1;
      }
    }
    fill(255);
    stroke(3);
    textSize(28);
    text('Obrigado por jogar!',200,340);
    }
}
//questão 4
else if(tela==5){
  fill(255);
  stroke(0);
  strokeWeight(4);
  textSize(32);
  text('Questão 4',200,45);
  
  fill(255);
  stroke(0);
  strokeWeight(4);
  textSize(28);
  text('Criança gosta de brincar e\n soltar a imaginação, mas não\n pode subir em móveis ou janelas,\n isso evita risco de:',190,85);
  
  //azul
  fill(109,174,239);
  rect(XOpcao4,205,XrectOpcao,YrectOpcao,30);
  //opção a)
  if(mouseX>XOpcao4 && mouseX<XOpcao4+XrectOpcao &&  
    mouseY>205 && mouseY<205+YrectOpcao){
    //laranja
    fill(255,137,33);
    rect(XOpcao4,205,XrectOpcao,YrectOpcao,30);
    if(mouseIsPressed){
      tela=9;
      chances=chances-1;
    }
  }
  fill(255);
  text('a)Fogo',82,235);
  
  //azul
  fill(109,174,239);
  rect(XOpcao4,248,XrectOpcao,YrectOpcao,30);
  //opção b)
  if(mouseX>XOpcao4 && mouseX<XOpcao4+XrectOpcao &&  
    mouseY>248 && mouseY<248+YrectOpcao){
    //laranja
    fill(255,137,33);
    rect(XOpcao4,248,XrectOpcao,YrectOpcao,30);
    if(mouseIsPressed){
      tela=9;
    }
  }
  fill(255);
  text('b)Quedas',95,275);
  
  //azul
  fill(109,174,239);
  rect(XOpcao4,291,XrectOpcao,YrectOpcao,30);
  //opção c)
  if(mouseX>XOpcao4 && mouseX<XOpcao4+XrectOpcao &&  
    mouseY>291 && mouseY<291+YrectOpcao){
    //laranja
    fill(255,137,33);
    rect(XOpcao4,291,XrectOpcao,YrectOpcao,30);
    if(mouseIsPressed){
      tela=9;
      chances=chances-1;
    }
  }
  fill(255);
  text('c)Afogamento',120,315);  
  text('Clique na opção',180,350);
  
  fill(255,0,0);
  noStroke();
  textSize(23);
  text('Chances: '+chances,55,35);
}
//Informações sobre o jogo
else if(tela==6){
  textStyle(NORMAL);
  textAlign(CENTER);
  textSize(21);
  textFont('Times New Roman');
    
  stroke(0);
  //laranja
  fill(235,137,33);
  rect(25,25,350,350,30);
    
  fill(255);
  stroke(0);
  strokeWeight(4);
  text('Ano: 2º ano do\n ensino fundamental\n\nMatéria: Ciências: \n(EF02CI03) Discutir os cuidados\n necessários à prevenção de acidentes\n domésticos (objetos cortantes e\n inflamáveis, eletricidade, produtos de\n limpeza, medicamentos etc.)\nSão 5 perguntas sobre como \n se prevenir de acidentes.\n Tem 3 chanches para acertá-las.\nAperte ESC para voltar.',190,45);
  }
//Créditos do jogo
else if(tela==7){
  image(carlos,50,0);
  image(sore,50,200);
  textStyle(NORMAL);
  textAlign(CENTER);
  textSize(20);
  textFont('Times New Roman');
  
  stroke(0);
  //laranja
  fill(255,137,33);
  rect(215,25,175,175,30);
    
  fill(255);
  stroke(0);
  strokeWeight(4);
  text('Carlos Eduardo\nLopes de Souza\n Filho\nEstudante de \nbacharelado em \nCiência e Tecnologia',300,45);

  stroke(0);
  //laranja
  fill(255,137,33);
  rect(215,225,175,175,30);
  
  fill(255);
  stroke(0);
  strokeWeight(4);
  text('Soré Maria\nde Moura Souza\n Professora de ensino\n fundamental\n\nAperte ESC\npara voltar',300,245);
}
else if(tela==9){
  textSize(30);
  fill(255);
  stroke(0);
  text('Parabéns!!!!!!!\nVocê conseguiu evitar acidentes!',200,150);
  text('Obrigado por jogar!',200,340);
}
}
function keyPressed(){
if(key=="Escape"){
  tela=1;
  chances=3;
}
}