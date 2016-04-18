// Faz um seed pra popular
function populateDB(tx,source) {
  //Popula, sempre dropo e create só pra testar mesmo
  //VERIFICAR COM CLEBER primary Key PROVAVELMENTE NÃO SERA AUTOINCREMENT  (pegar do server..)
  //VERIFICAR COMO ELE QUER O LAT LONG, VEM COMO FLOAT NO GEOLOCATION
  //VERIFICAR CAMPO "ENVIADO" ESTÁ EM BOOLEAN, NÃO SERIA MELHOR INT?
  //VERIFICAR SE É NECESSÁRIO FOREIGN KEY APLICADA NO CREATE (ACHO QUE NAO).
  if(source=="local"){
  tx.executeSql('DROP TABLE IF EXISTS user');
  tx.executeSql('CREATE TABLE IF NOT EXISTS user (idUser INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT not null, login TEXT not null, password TEXT not null)');
  tx.executeSql('INSERT INTO user(nome,login,password) VALUES ("Tulio Tanikawa","Tulio","1")');
  tx.executeSql('INSERT INTO user(nome,login,password) VALUES ("Donald Trump","Trump","666")');

  tx.executeSql('DROP TABLE IF EXISTS product');
  tx.executeSql('CREATE TABLE IF NOT EXISTS product (idProduct INTEGER PRIMARY KEY AUTOINCREMENT, tipo TEXT not null, nome TEXT not null, valor int)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Cabelo","Shampo A",15)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Cabelo","Shampo A",15)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Perfume","Perfume B",136)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Cabelo","Condicionador C",75)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Rosto","Maquiagem D",81)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Rosto","Creme de Rosto E",83)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Corpo","Sabonete Liquido F",58)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Corpo","Sabonete Barra G",41)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Algodão","Algodão H",88)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Rosto","Anti Age I",96)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Rosto","Anti olheira J",119)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Corpo","Anti Rugas nos ombros K",122)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Pes","Anti Frieiras L",150)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Pes","Anti calos M",30)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Cabelo","Shampo N",122)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Perfume","Perfume O",98)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Cabelo","Condicionador P",59)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Rosto","Maquiagem Q",124)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Rosto","Creme de Rosto R",144)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Corpo","Sabonete Liquido S",112)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Corpo","Sabonete Barra T",79)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Algodão","Algodão U",82)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Rosto","Anti Age V",51)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Rosto","Anti olheira X",146)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Corpo","Anti Rugas nos ombros Y",32)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Pes","Anti Frieiras Z",102)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Pes","Anti calos AA",16)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Cabelo","Shampo BB",47)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Perfume","Perfume CC",86)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Cabelo","Condicionador DD",18)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Rosto","Maquiagem EE",60)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Rosto","Creme de Rosto FF",57)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Corpo","Sabonete Liquido GG",45)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Corpo","Sabonete Barra HH",62)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Algodão","Algodão II",67)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Rosto","Anti Age JJ",83)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Rosto","Anti olheira KK",21)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Corpo","Anti Rugas nos ombros LL",57)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Pes","Anti Frieiras MM",123)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Pes","Anti calos NN",81)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Cabelo","Shampo OO",24)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Perfume","Perfume PP",125)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Cabelo","Condicionador RR",39)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Rosto","Maquiagem SS",95)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Rosto","Creme de Rosto TT",105)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Corpo","Sabonete Liquido UU",85)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Corpo","Sabonete Barra VV",114)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Algodão","Algodão XX",133)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Rosto","Anti Age YY",106)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Rosto","Anti olheira ZZ",24)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Corpo","Anti Rugas nos ombros AAA",49)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Pes","Anti Frieiras BBB",18)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Pes","Anti calos CCC",51)');




  tx.executeSql('DROP TABLE IF EXISTS gps');
  tx.executeSql('CREATE TABLE IF NOT EXISTS gps (idGps INTEGER PRIMARY KEY AUTOINCREMENT, idUser int, data datetime, lat float, long float, enviado boolean)');
  tx.executeSql('INSERT INTO gps(idUser,lat,long,enviado) VALUES ("1",-23.000,-46.000,1)');

  tx.executeSql('DROP TABLE IF EXISTS chat');
  tx.executeSql('CREATE TABLE IF NOT EXISTS chat (idChat INTEGER PRIMARY KEY AUTOINCREMENT, idUser int,de Text not null, para Text not null, message TEXT, lat float, long float)');
  tx.executeSql('INSERT INTO chat(idUser,de,para,message,lat,long) VALUES ("1","Tulio Tanikawa","Aecio Roussef da Silva","Quero money",-23.000,-46.000)');

  tx.executeSql('DROP TABLE IF EXISTS ponto');
  tx.executeSql('CREATE TABLE IF NOT EXISTS ponto (idPonto INTEGER PRIMARY KEY AUTOINCREMENT, idUser int, data datetime, situacao TEXT, lat float, long float)');
  tx.executeSql('INSERT INTO ponto(idUser,situacao,lat,long) VALUES ("1","situacao precaria",-23.000,-46.000)');

  tx.executeSql('DROP TABLE IF EXISTS log');
  tx.executeSql('CREATE TABLE IF NOT EXISTS log (idLog INTEGER PRIMARY KEY AUTOINCREMENT, idUser int, message TEXT, data datetime, lat float, long float)');
  tx.executeSql('INSERT INTO log(idUser,message,lat,long) VALUES ("1","Deu problema pra caramba na Base",-23.000,-46.000)');

  tx.executeSql('DROP TABLE IF EXISTS support');
  tx.executeSql('CREATE TABLE IF NOT EXISTS support (idSupport INTEGER PRIMARY KEY AUTOINCREMENT, idUser int, message TEXT NOT NULL,data datetime, lat float, long float, situacao TEXT NOT NULL)');
  tx.executeSql('INSERT INTO support(idUser,message,lat,long,situacao) VALUES ("1","Suporte, me traga um copo dagua",-23.000,-46.000,"Situacao de ter sede")');

  tx.executeSql('DROP TABLE IF EXISTS pedido');
  tx.executeSql('CREATE TABLE IF NOT EXISTS pedido (idPedido INTEGER PRIMARY KEY AUTOINCREMENT, idUser int, idProduto int, quantidade int, situacao TEXT, lat float, long float, data datetime)');
  tx.executeSql('INSERT INTO pedido(idUser,idProduto,quantidade,situacao,lat,long) VALUES ("1","1","666","Processado",-23.000,-46.000)');
}else{

  tx.executeSql('DROP TABLE IF EXISTS product');
  tx.executeSql('CREATE TABLE IF NOT EXISTS product (idProduct INTEGER PRIMARY KEY AUTOINCREMENT, tipo TEXT not null, nome TEXT not null, valor int)');
  tx.executeSql('INSERT INTO product(tipo,nome,valor) VALUES ("Cabelo","Shampo A",15)');


}
}


// Após o estado deviceReady na pagina index:
function startSeed() {

  var db = window.openDatabase("dbPDV", "1.0", "PDV Demo", 200000);
  db.transaction(populateDB, errorCB, successCB);

}

function startUpdate(){
  //alert("alerta a");
  var db = window.openDatabase("dbPDV", "1.0", "PDV Demo", 200000);
  db.transaction(function(tx)
  {
  tx.executeSql('DROP TABLE IF EXISTS user');
    });

  $.getJSON("http://app.businessmap.com.br/json/users/",function(result){
        $.each(result, function(i, field){

        var db = window.openDatabase("dbPDV", "1.0", "PDV Demo", 200000);
        //alert('INSERT INTO user(idUser,nome,login,password) VALUES ("'+field.id+'","'+field.name+'","'+field.email+'","'+field.senhaapp+'")');
        db.transaction(function(tx)
        {
        tx.executeSql('CREATE TABLE IF NOT EXISTS user (idUser int, nome TEXT not null, login TEXT not null, password TEXT not null)');
          });

        db.transaction(function(tx)
        {
          //tx.executeSql('INSERT INTO user(nome,login,password) VALUES ("Tulio Tanikawa","Tulio","1")');
          tx.executeSql('INSERT INTO user(idUser,nome,login,password) VALUES ("'+field.name+'","'+field.name+'","'+field.email+'","'+field.senhaapp+'")');
        });
     });
      });
      //alert("deu boa");
      db.transaction(function(tx)
      {

      tx.executeSql('DROP TABLE IF EXISTS product');
      });
  $.getJSON("http://app.businessmap.com.br/json/products/",function(result){
          $.each(result, function(i, field){
              var db = window.openDatabase("dbPDV", "1.0", "PDV Demo", 200000);

            db.transaction(function(tx)
            {
            tx.executeSql('CREATE TABLE IF NOT EXISTS product (idProduct, tipo TEXT not null, nome TEXT not null, valor int)');
              });
              db.transaction(function(tx)
              {
            tx.executeSql('INSERT INTO product(idProduct,tipo,nome,valor) VALUES ("'+field.id_produto+'","'+field.tipo+'","'+field.name+'","'+field.preco+'")');
              });
      //    alert(field.name);[{"id_produto":"1","name":"asdfasdfasdf","preco":"12","tipo_id":"1","tipo":"asdfasdf"}
       });
      });
}


function geolocatingAll(logado){
  if(logado==true){
    var options = { timeout: 30000 };
    watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
  }else{
    alert("nao logado");
  }

}
//Uso o callback pra testar se deu certo
function successCB() {
  //debug
  //alert("banco populado");
  //
}

//Callback de erros
function errorCB(err) {
  alert("Error processing SQL: "+err.code);
}

//Teste de conectar usuário
function connectUser(user,passcode){
  var usuario = user;
  var password = passcode;
  if(usuario+"t"=="t"){

    usuario="InsiraNome"
  }
  if(password+"t"=="t"){
    password="InsiraSenha";
  }
  //debug
  //alert('user '+usuario+" senha "+password);
  //
  var salt='asgasd&2141!FRM!)_!asdgf1++_1!@1';
  password =salt+password;
  //alert(password);
  var md5 = $.md5(password);
  //alert(md5);
  var db = window.openDatabase("dbPDV", "1.0", "PDV Demo", 200000);
  db.transaction(function(tx)
  {
    tx.executeSql("SELECT * FROM user where login='"+usuario+"' and password='"+md5+"' ", [], UserSuccess, errorCB)
  });

}
function getProduct(){
  var db = window.openDatabase("dbPDV", "1.0", "PDV Demo", 200000);
  db.transaction(function(tx)
  {
    tx.executeSql("SELECT * FROM product order by tipo", [], localProductResult, errorCB)
  });
  //alert("inside getProduct");

}
function setPedido(){
  var name="idPedidoTeste24";
  var produtosSelecionados = '1,2,3';
  var quantidadesSelecionados = '12,24,36';
  var user_id = 1;

  $.ajax({
    type: 'POST',
    url: "http://app.businessmap.com.br/pedido/store/",
    data: {'name':name,'produtosSelecionados':produtosSelecionados,'quantidadesSelecionados':quantidadesSelecionados,'user_id':user_id},
    success: function(responseData, textStatus, jqXHR) {
      alert("foiiiis");
    },
    error: function (responseData, textStatus, errorThrown) {
      alert('POST failed.' + responseData + ", " + textStatus + ", " + errorThrown);
    }
  });

//Post do pedido ID = var
//[11:59:51] Cleber Pereira da Silva: produtosSelecionados = []
//[12:00:00] Cleber Pereira da Silva: quantidadesSelecionados = []
//[12:00:13] Cleber Pereira da Silva: name = codigo do pedido
//[12:00:27] Cleber Pereira da Silva: user_id = user do logadol
//[12:01:56] Cleber Pereira da Silva: [ 'name' :'124fasdfefDF', 'produtosSelecionados' : [21,34,56], 'quantidadesSelecionados' : [2,2,2], 'user_id' :1]

}
function localProductResult(tx,results){

  var len = results.rows.length;

  var coluna='<table data-role="table" id="produtoTable" data-filter="true" data-input="#filterTable-input" class="ui-responsive">';
  coluna+="<thead><tr><th>Tipo</th><th>Nome</th><th>Valor</th><th>Ad.</th><th>Del.</th><th>Qtd</th></tr></thead><tbody>";
  for(var i=0 ; i<len ; i++){
    coluna+="<tr>";coluna+='<td>'+ results.rows.item(i).tipo+'</td>';
    coluna+='<td>'+ results.rows.item(i).nome+'</td>';
    coluna+='<td> R$ '+ results.rows.item(i).valor+'</td>';
    coluna+='<td><div id="custom-border-radius"><div class="ui-input-btn-b ui-btn ui-icon-plus ui-btn-icon-notext ui-corner-all">  <input type="button" data-enhanced="true" value="Enhanced - Icon only" style="background:green;">  </div></td>';
    coluna+='<td><div id="custom-border-radius"><div class="ui-input-btn-b ui-btn ui-icon-delete ui-btn-icon-notext ui-corner-all">  <input type="button" data-enhanced="true" value="Enhanced - Icon only" style="background:red;">  </div></td>';
    coluna+='<td><button class="ui-btn-b ui-shadow ui-btn-inline ui-btn-icon">12</button></td>';
    coluna+="</tr>"
  }
  coluna+="</tbody></table>"
  $("#divTabelaResultado").html(coluna);
  $.mobile.changePage("#pageProduto");
}

function UserSuccess(tx, results){
  var len = results.rows.length;
  if(len==0){
    alert("Usuário ou senha errada!");
    $.mobile.changePage('#pageIndexMain');

  }if(len>0){
    //alert("senha correta, logar o user");
    logado=true;
    nomeCompleto= results.rows.item(0).nome;
    usuario = results.rows.item(0).login;
    idUsuario=results.rows.item(0).idUser;
    $("#divNomeCompleto").html("<h3>Bem vindo "+nomeCompleto+"! Você está online</h3>");
    $.mobile.changePage('#pageLogado');
    geolocatingAll(logado);
  }
}

//Callback do geolocation watchID
function onSuccess(position) {

  var db = window.openDatabase("dbPDV", "1.0", "PDV Demo", 200000);
  //alert(position.coords.latitude );
  //Relembrando formatação de data pra checar qual é compativel com datetime do sqlite
  var date = new Date();
  var year = date.getFullYear();
  var day = date.getDay();
  var month = date.getMonth();
  var min = ('0'+date.getMinutes()).substr(-2);
  var seconds = ('0'+date.getSeconds()).substr(-2);
  var hour = ('0'+date.getHours()).substr(-2);
  var dataTeste= year+"-"+month+"-"+day+" "+hour+":"+min+":"+seconds;
  //alert("data inteira= "+date+" separada : "+year+"-"+month+"-"+day+" "+hour+":"+min+":"+seconds);

  //'2007-01-01 10:00:00' < formato no banco
  //Inserta no banco
  db.transaction(function(tx)
  {
    tx.executeSql('INSERT INTO gps(idUser,lat,long,enviado,data) VALUES ("'+idUsuario+'","'+position.coords.latitude+'","'+position.coords.longitude+'",1,"'+dataTeste+'")');
  });

  $.ajax({
    type: 'POST',
    url: "http://app.businessmap.com.br/coordenadas/new/",
    data: {'user_id':idUsuario,'lat':position.coords.latitude,'lng':position.coords.longitude,'data':dataTeste},
    success: function(responseData, textStatus, jqXHR) {
      //$("#pageLogado").html(responseData+" horario"+dataTeste);
    },
    error: function (responseData, textStatus, errorThrown) {
      //alert('POST failed.' + responseData + ", " + textStatus + ", " + errorThrown);
    }
  });
}

// Log de erro do Geolocation //
function onError(error) {
  alert('code: '    + error.code    + '\n' +
  'message: ' + error.message + '\n');
}

/*Chat Functions*/

function getChatUpdates(){

$.mobile.changePage('#pageChat');
/*

//alert("alerta a");
var db = window.openDatabase("dbPDV", "1.0", "PDV Demo", 200000);
db.transaction(function(tx)
{
tx.executeSql('DROP TABLE IF EXISTS user');
  });

$.getJSON("http://app.businessmap.com.br/json/users/",function(result){
      $.each(result, function(i, field){

      var db = window.openDatabase("dbPDV", "1.0", "PDV Demo", 200000);
      //alert('INSERT INTO user(idUser,nome,login,password) VALUES ("'+field.id+'","'+field.name+'","'+field.email+'","'+field.senhaapp+'")');
      db.transaction(function(tx)
      {
      tx.executeSql('CREATE TABLE IF NOT EXISTS user (idUser int, nome TEXT not null, login TEXT not null, password TEXT not null)');
        });

      db.transaction(function(tx)
      {
        //tx.executeSql('INSERT INTO user(nome,login,password) VALUES ("Tulio Tanikawa","Tulio","1")');
        tx.executeSql('INSERT INTO user(idUser,nome,login,password) VALUES ("'+field.name+'","'+field.name+'","'+field.email+'","'+field.senhaapp+'")');
      });
   });
    });
    //alert("deu boa");
    db.transaction(function(tx)
    {

    tx.executeSql('DROP TABLE IF EXISTS product');
    });
$.getJSON("http://app.businessmap.com.br/json/products/",function(result){
        $.each(result, function(i, field){
            var db = window.openDatabase("dbPDV", "1.0", "PDV Demo", 200000);

          db.transaction(function(tx)
          {
          tx.executeSql('CREATE TABLE IF NOT EXISTS product (idProduct, tipo TEXT not null, nome TEXT not null, valor int)');
            });
            db.transaction(function(tx)
            {
          tx.executeSql('INSERT INTO product(idProduct,tipo,nome,valor) VALUES ("'+field.id_produto+'","'+field.tipo+'","'+field.name+'","'+field.preco+'")');
            });
    //    alert(field.name);[{"id_produto":"1","name":"asdfasdfasdf","preco":"12","tipo_id":"1","tipo":"asdfasdf"}
     });
    });
*/

//now.receiveMessage = function(name, message){
//  $("#incomingMessages").append("<div class='message'><span class='username'>" + name + ":</span> " + message + "</div>");
//  $("#incomingMessages").scrollTop($("#incomingMessages")[0].scrollHeight);
//}
//idUsuario;
//http://app.businessmap.com.br/chat/list/user_id
};
