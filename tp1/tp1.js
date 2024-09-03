//Gimenez Nazarena Comision 2-----Legajo 91579/3
//VIDEO URL:  
/*Nota: Profe pude hacer correr el codigo, pero cuando recien aparece la ilusion aparece en blanco y negro
y cuando uso la funcion de mouse clicked que reinicia las variables si aparece con los colores normales y el key pressed 
ejecuta bien los colores, pero ese blanco y negro al inicio no supe como acomodarlo*/

  let ilusion;
  
  let Blancos = ( 255 );
  let Negros = ( 0 );
  let Violetas = ( 150 , 0 , 220 );
  let Verdes = ( 0 , 220 , 120 );

function setup(){
    createCanvas( 800 , 400 );
  
  ilusion = loadImage( "asset/ReferenciaOP.png" );
  
}//*****************************************************************************************************************CIERRE DE LLAVE DEL SETUP

function draw(){
  
    image( ilusion , 0 , 0 );
  
  if ( mouseX > width/24 ){
    fill( Blancos);
    rect( 400 , 0 , 400 , height );
  }
  
//***********************************************************+Primera serie de cuadrados N1 (SUPERIOR IZQUIERDA)

  for ( let xni=440 ; xni <=700 ; xni=xni+80 ){
  for ( let yni=40 ; yni <=300 ; yni=yni+80 ) {
  
    cuadraN1( xni , yni , 40 , 40 );

  }
}

//***********************************************************+Segunda serie de cuadrados B1 (SUPERIOR DERECHA)

  for ( let xbd=480 ; xbd <=760 ; xbd=xbd+80 ){
  for ( let ybd=40 ; ybd <=300 ; ybd=ybd+80 ) {
  
    cuadraB1( xbd , ybd , 40 , 40 );

  }
}

//***********************************************************+Tercera serie de cuadrados B2 (INFERIOR IZQUIERDA)

  for ( let xbi=440 ; xbi <=700 ; xbi=xbi+80 ){
  for ( let ybi=80 ; ybi <=360 ; ybi=ybi+80 ) {
  
    cuadraB2( xbi , ybi , 40 , 40 );

  }
}

//************************************************************+Cuarta serie de cuadrados N2 (INFERIOR DERECHA)

  for ( let xnd=480 ; xnd <=760 ; xnd=xnd+80 ){
  for ( let ynd=80 ; ynd <=360 ; ynd=ynd+80 ) {
  
    cuadraN2( xnd , ynd , 40 , 40 );

  }
}

}//*****************************************************************************************************************CIERRE DE LLAVE DEL DRAW

function keyPressed(){

  Blancos = color ( random ( 125 , 250 ) );
  Negros = color ( random ( 0 , 125 ) );
  Violetas = color( random( 150 ), random ( 0 ), random( 220 ));
  Verdes = color( random( 0 ), random ( 220 ) , random( 120 ));

}//*****************************************************************************************************************CIERRE DE LLAVE DEL KEYPRESSED

function mouseClicked(){

    
  Blancos = color( 255 );
  Negros = color( 0 );
  Violetas = color( 150 , 0 , 220 );
  Verdes = color( 0 , 220 , 120 );

}//*****************************************************************************************************************CIERRE DE LLAVE DEL MOUSECLICKED
