var cronometro = (function (){
	var ss = 0;
	var mm = 0;
    var hh = 0;
    
    var tempo = 1000;
    var cron;

    function iniciar(){
        //Executa uma funçao a cada x tempos passados no timeout
        cron = setInterval(() => {
            _timer();
        }, tempo);
    }    

    function parar(){
        //Serve para parar o setInterval.
        clearInterval(cron);
    }
    
    function zerar(){
        clearInterval(cron);
        hh = 0;
        mm = 0;
        ss = 0;

        document.getElementById('temporizador').innerText = '00:00:00';
    }

	function timer(){
        ss++;
        
		if (ss == 60) { mm++; ss = 0; }
        else if (mm == 60) { hh++; ss = 0; mm = 0; }
        _atualizarTempo();		
    }
    

    function atualizarTempo(){
        temporizador.textContent = retornarTempoAtualizado();
    }    

    //00:00:00

    function retornarTempoAtualizado(){

        var segundos = (ss < 10) ? "0" + ss : ss;
        var minutos = (mm < 10) ? "0" + mm : mm;
        var horas = (hh < 10) ? "0" + hh : hh;

        return `${horas}:${minutos}:${segundos}`
    }

    return{
        iniciar, 
        parar,
        zerar,
        retornarTempoAtualizado 
    }

})()


