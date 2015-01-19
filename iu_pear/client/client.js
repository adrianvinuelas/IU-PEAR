
var reactiva = null;
Tracker.autorun(function(){

    reactiva = Turno.find();
    //console.log(reactiva);    
    reactiva.forEach(function(m){
   
        if(m.Comando === "EmpezarPartida" && m.ladoscroll == ""){
            console.log("1111");
            EmpezarTodo(m.Jugadores, m.User_id);
        }
        if(Meteor.userId() != User_IdIA){
		    if(!m.scroll){
                if(m.Comando === "PedirPieza"){
                    if(!m.rotacion){     //cuando deja de ser mi turno, solo se pinta si m.rotacion esta a false(cambiar este if)         
                        console.log("2222") ; 
                        var piezaNueva = new pieza (m.nombrePieza, 11.5*64, 8*64);
                        board.add(piezaNueva);
                    }else{
                        rotacionTracker = [m.rotacion, m.numRotacion];
                    }
                
                }else if(m.Comando === "ColocarPieza"){
				    colocadaTracker = true;
                	xTracker = m.posx;
				    yTracker = m.posy;
                } else if (m.Comando === "ColocarSeguidor") {
				    colocadoSegTracker = true;
				    xsegTracker = m.posxseg;
				    ysegTracker = m.posyseg;
                    console.log("33333") ; 
                    
                }else if (m.Comando === "ActualizarTurno") {
						
				     JugadoresIA = m.Jugadores;
				     User_IdIA = m.User_id;
				     console.log("44444")
				     if(Meteor.userId() === User_IdIA){
						    otrapieza = true;
						    DejarScroll = true;
				       		Game.setBoard(2,new TextoPideFicha("Pulsa enter para pedir ficha ",playGame));
						    console.log("55555") ;
		      		 }
		     		console.log("66666") ;
				    Game.setBoard(1,new Jugadores(JugadoresIA));
			    }
		    }else{
			    DejarScroll = true;
			    ladoScrollTracker = m.ladoscroll;
			    contadorScroll++;
			    //ScrollTracker = false;
			    console.log("77777")		
	      	}
		} else {
		    //if(m.Comando === "ActualizarTurno"){
                JugadoresIA = m.Jugadores;
		        User_IdIA = m.User_id;
                Game.setBoard(1,new Jugadores(JugadoresIA));
            //}
        }
        
    });
        
});


Meteor.startup(function(){
    console.log("Arrancado Cliente");
    Meteor.subscribe("turnoIU");
});

Accounts.ui.config({
        passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});
