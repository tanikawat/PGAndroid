   // Faz um seed pra popular
    function populateDB(tx) {
		//Popula, sempre dropo e create só pra testar mesmo
		//VERIFICAR COM CLEBER primary Key PROVAVELMENTE NÃO SERA AUTOINCREMENT  (pegar do server..)
		//VERIFICAR COMO ELE QUER O LAT LONG, VEM COMO FLOAT NO GEOLOCATION
		//VERIFICAR CAMPO "ENVIADO" ESTÁ EM BOOLEAN, NÃO SERIA MELHOR INT?
		//VERIFICAR SE É NECESSÁRIO FOREIGN KEY APLICADA NO CREATE (ACHO QUE NAO).
		tx.executeSql('DROP TABLE IF EXISTS user');
        tx.executeSql('CREATE TABLE IF NOT EXISTS user (idUser INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT not null, login TEXT not null, password TEXT not null)');
		tx.executeSql('INSERT INTO user(nome,login,password) VALUES ("Tulio Tanikawa","Tulio","1")');
		
		tx.executeSql('DROP TABLE IF EXISTS product');
        tx.executeSql('CREATE TABLE IF NOT EXISTS product (idProduct INTEGER PRIMARY KEY AUTOINCREMENT, idUser int, tipo TEXT not null, nome TEXT not null, valor int)');
		tx.executeSql('INSERT INTO product(idUser,tipo,nome,valor) VALUES (1,"Pilula Do Sono","Dormilandia Pill",5000)');
		
		tx.executeSql('DROP TABLE IF EXISTS gps');
        tx.executeSql('CREATE TABLE IF NOT EXISTS gps (idGps INTEGER PRIMARY KEY AUTOINCREMENT, idUser int, data datetime, lat float, long float, enviado boolean)');
		tx.executeSql('INSERT INTO gps(idUser,lat,long,enviado) VALUES ("1","-23.000","-46.000",1)');
		
		tx.executeSql('DROP TABLE IF EXISTS chat');
        tx.executeSql('CREATE TABLE IF NOT EXISTS chat (idChat INTEGER PRIMARY KEY AUTOINCREMENT, idUser int,de Text not null, para Text not null, message TEXT, lat float, long float)');
		tx.executeSql('INSERT INTO chat(idUser,de,para,message,lat,long) VALUES ("1","Tulio Tanikawa","Aecio Roussef da Silva","Quero money","-23.000","-46.000")');
		
        tx.executeSql('DROP TABLE IF EXISTS ponto');
		tx.executeSql('CREATE TABLE IF NOT EXISTS ponto (idPonto INTEGER PRIMARY KEY AUTOINCREMENT, idUser int, data datetime, situacao TEXT, lat float, long float)');
		tx.executeSql('INSERT INTO ponto(idUser,situacao,lat,long) VALUES ("1","situacao precaria","-23.000","-46.000")');
		
		tx.executeSql('DROP TABLE IF EXISTS log');
        tx.executeSql('CREATE TABLE IF NOT EXISTS log (idLog INTEGER PRIMARY KEY AUTOINCREMENT, idUser int, message TEXT, data datetime, lat float, long float)');
		tx.executeSql('INSERT INTO log(idUser,message,lat,long) VALUES ("1","Deu problema pra caramba na Base","-23.000","-46.000")');
		
		tx.executeSql('DROP TABLE IF EXISTS support');
        tx.executeSql('CREATE TABLE IF NOT EXISTS support (idSupport INTEGER PRIMARY KEY AUTOINCREMENT, idUser int, message TEXT NOT NULL,data datetime, lat float, long float, situacao TEXT NOT NULL)');
		tx.executeSql('INSERT INTO support(idUser,message,lat,long,situacao) VALUES ("1","Suporte, me traga um copo dagua","-23.000","-46.000","Situacao de ter sede")');
		
		tx.executeSql('DROP TABLE IF EXISTS pedido');
        tx.executeSql('CREATE TABLE IF NOT EXISTS pedido (idPedido INTEGER PRIMARY KEY AUTOINCREMENT, idUser int, idProduto int, quantidade int, situacao TEXT, lat float, long float, data datetime)');
		tx.executeSql('INSERT INTO pedido(idUser,idProduto,quantidade,situacao,lat,long) VALUES ("1","1","666","Processado","-23.000","-46.000")');
    }
	
	
	 // Após o estado deviceReady na pagina index:
    function startSeed() {
        var db = window.openDatabase("dbPDV", "1.0", "PDV Demo", 200000);
        db.transaction(populateDB, errorCB, successCB);
    }
	//Uso o callback pra testar se deu certo 
    function successCB() {
		//debug
        alert("banco populado");
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
		//debug 
		alert('user '+usuario+" senha "+password);
		//
		var db = window.openDatabase("dbPDV", "1.0", "PDV Demo", 200000);
		 db.transaction(function(tx) 
		{
			tx.executeSql("SELECT * FROM user where login='"+usuario+"' and password='"+password+"' ", [], UserSuccess, errorCB)
		});
		 
	}
	
	function UserSuccess(tx, results){
		 var len = results.rows.length;
		 if(len==0){
			alert("senha errada, retornar alguma coisa");
			//descobrir pq nao funfa o load no div container
		 }if(len==1){
			alert("senha correta, logar o user");
			//descobrir pq nao funfa o load no div container
		 }
			//debug
			//for (var i=0; i<len; i++){
			// alert("Row = " + i + " idUser = " + results.rows.item(i).idUser + " nome =  " + results.rows.item(i).nome+ " login =  " + results.rows.item(i).login+ " pass =  " + results.rows.item(i).password );
        
		}
		
		
	}