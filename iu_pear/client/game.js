function startGame() {
    var canvas = $('#game')[0];

    var ctx = canvas.getContext && canvas.getContext('2d');

    if(!ctx) {
	// Si no hay contexto 2d informamos al usuario
	alert('Please upgrade your browser');
	return;
    }
    
   
    // Dibujar rectangulo marron
    ctx.fillStyle = "#775C18";
    ctx.fillRect(50,50,850,650);



    // Cargar la hoja de sprites de images/sprites.png 
  //  var img = new Image();
    // Cuando el fichero asignado a img.src mas abajo haya sido
    // cargado, se ejecutara esta callback:
   // img.onload = function() {
	// Dibuja toda la hoja de sprites en el destino dx dy
	//                dx  dy
	//ctx.drawImage(img,100,100);

	// Escala a dWidth dHeight la hoja de sprites, y la dibuja en dx dy
	//                    dx dy   dWidth dHeight
	//ctx.drawImage(img,    0, 250, 300,   100);

	// Coge de la hoja de sprites el rectangulo
        // sx,sy,sWidth,sHeight y lo coloca en dx,dy escalado a dWidth
        // y dHeight
        //                sx sy sWidth sHeight dx   dy   dWidth dHeight
	//ctx.drawImage(img,0, 0, 37,    42,     200, 400, 37,    42);
        // En este caso hemos pintado el sprite de la nave
  //  }

   
   // img.src = 'images/sprites.png'; //Aqui deberiamos coger nuestros sprites 

}


$(startGame);

