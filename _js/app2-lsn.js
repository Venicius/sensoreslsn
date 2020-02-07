
  function retornaDataTemperaturaLsn(){
    var timestamp;
    var dia;
    var aux ;
    var mes;
  
    if((document.getElementById('inputDataTemperatura2').value!="") || (document.getElementById('inputDataTemperatura2').value.length < 10)){
        var resultadoData=(document.getElementById("inputDataTemperatura2").value).split("/");
        dia=resultadoData[0];
        mes=resultadoData[1];
  
  
        return dia + "-"+ mes +"-" + resultadoData[2];
  
      } else {
        document.getElementById("inputDataTemperatura2").focus();       
      }
     
        
  }
  
  function retornaRegistrosTemperatura2Lsn(){
     
      var data = retornaDataTemperaturaLsn();
       var registros = [];
    
      var query = firebase.database().ref("DadosSensores2/Temperatura/"+ data).orderByKey();
      //console.log(query);
      query.once("value")
            .then(function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
                var key = childSnapshot.key;
                var childData = childSnapshot.val();
                //console.log(data);
                registros.push(childData.valor);
                });
          });
      return registros;
  }
        
  function retornaHoraTemperatura2Lsn(){
      var data = retornaDataTemperaturaLsn();
      var horarios = [];
      var query = firebase.database().ref("DadosSensores2/Temperatura/"+ data).orderByKey();
      query.once("value")
            .then(function(snapshot) {
              
              
          snapshot.forEach(function(childSnapshot) {
                // key will be "ada" the first time and "alan" the second time
                var key = childSnapshot.key;
                // childData will be the actual contents of the child
                var childData = childSnapshot.val();
                //console.log(data);
                //dados.push(childData);
              horarios.push(childSnapshot.key);
              
                });
          });
      return horarios;
  }
                  
  function criaGrafTemperaturaPorDataLsn(){
  
  mChart.destroy()

  mChart = new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: retornaHoraTemperatura2Lsn(),
      datasets: [{ 
          data: retornaRegistrosTemperatura2Lsn(),
          label: 'ºC',
          borderColor: "#3e95cd",
          fill: false
        }
      ]
    },
    options: {
          responsive:true,
          title: {
        display: true,
        text: "Temperatura em: " + retornaDataTemperaturaLsn()
      }
    }
  });

  
  mChart.update();
  
  }

  //___________________________Umidade____________________

  function retornaDataUmidadeLsn(){
    var timestamp;
    var dia;
    var aux ;
    var mes;
  
    if((document.getElementById('inputDataUmidade2').value!="") || (document.getElementById('inputDataUmidade2').value.length < 10)){
        var resultadoData=(document.getElementById("inputDataUmidade2").value).split("/");
        dia=resultadoData[0];
        mes=resultadoData[1];
  
  
        return dia + "-"+ mes +"-" + resultadoData[2];
  
      } else {
        document.getElementById("inputDataUmidade2").focus();       
      }
     
        
  }
  
  function retornaRegistrosUmidade2Lsn(){
     
      var data = retornaDataUmidadeLsn();
       var registros = [];
    
      var query = firebase.database().ref("DadosSensores2/Umidade/"+ data).orderByKey();
      //console.log(query);
      query.once("value")
            .then(function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
                var key = childSnapshot.key;
                var childData = childSnapshot.val();
                //console.log(data);
                registros.push(childData.valor);
                });
          });
      return registros;
  }
        
  function retornaHoraUmidade2Lsn(){
      var data = retornaDataUmidadeLsn();
      var horarios = [];
      var query = firebase.database().ref("DadosSensores2/Umidade/"+ data).orderByKey();
      query.once("value")
            .then(function(snapshot) {
              
              
          snapshot.forEach(function(childSnapshot) {
                // key will be "ada" the first time and "alan" the second time
                var key = childSnapshot.key;
                // childData will be the actual contents of the child
                var childData = childSnapshot.val();
                //console.log(data);
                //dados.push(childData);
              horarios.push(childSnapshot.key);
              
                });
          });
      return horarios;
  }
                  
  function criaGrafUmidadePorData2Lsn(){
  
  mChart.destroy()

  mChart = new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: retornaHoraUmidade2Lsn(),
      datasets: [{ 
          data: retornaRegistrosUmidade2Lsn(),
          label: '%',
          borderColor: "#3e95cd",
          fill: false
        }
      ]
    },
    options: {
          responsive:true,
          title: {
        display: true,
        text: "LSN: Umidade em: " + retornaDataUmidadeLsn()
      }
    }
  });

  
  mChart.update();
  
  }