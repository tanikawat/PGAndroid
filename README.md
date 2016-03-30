# AndroidWebOne
- Get Position, each x time per day
- Online Chat
- Store Sales
- UserID


#Database
- tbl_user: Nome, Login, Senha
- tbl_produto: id_user,tipo, nome, valor
- tbl_gps: id_user,hora, lat, long, enviado(true, false)
- tbl_chat: id_user,de, para, message, lat, lng
- tbl_ponto: id_user, hora, situacao, lat, lng
- tbl_logs: id_user, msg, hora, lat, lng
- tbl_suport: id_user, msg, hora, lat, lng, situacao

#Steps
 - Sincronizar com a Web as tabelas tbl_user e tbl_produtos
 - Permitir login
 - Armazenar posições e ir enviando de tempo em tempo
