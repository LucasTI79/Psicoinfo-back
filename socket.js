import app from './app'
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer(app);
const io = new Server(httpServer, { cors: {
  origin: '*',
} });

let users = [];
let rooms = [];
let messages = []

io.on("connection", (socket) => {
  console.log(`socket:${socket.id}:connected!`)

  socket.emit("nickname")

  socket.on("nickname", name => {
    users[socket.id] = name;
    console.log('newUser', users[socket.id])


    io.sockets.emit("system", {
      type: 'connect',
      username: users[socket.id]
    });
    socket.emit("atualizar mensagens antigas", messages)
  });

  // socket.emit("atualizar mensagens antigas", messages)

  // ...
  socket.on("enviar mensagem", function(mensagem_enviada, callback){
    // console.log('msg enviada', mensagem_enviada)
    mensagem_enviada.datetime = pegarDataAtual();
    // console.log('mensagem_enviada',mensagem_enviada)
    messages.push(mensagem_enviada);
    io.sockets.emit("atualizar mensagens", mensagem_enviada);
    callback();
  });
  socket.on("disconnect", () => {
    // not triggered
    console.log(`socket:${socket.id}:disconnect!`)
    io.sockets.emit("system", {
      type: 'disconnect',
      username: users[socket.id]
    });
  });
});

function pegarDataAtual(){
  var dataAtual = new Date();
  var dia = (dataAtual.getDate()<10 ? '0' : '') + dataAtual.getDate();
  var mes = ((dataAtual.getMonth() + 1)<10 ? '0' : '') + (dataAtual.getMonth() + 1);
  var ano = dataAtual.getFullYear();
  var hora = (dataAtual.getHours()<10 ? '0' : '') + dataAtual.getHours();
  var minuto = (dataAtual.getMinutes()<10 ? '0' : '') + dataAtual.getMinutes();
  var segundo = (dataAtual.getSeconds()<10 ? '0' : '') + dataAtual.getSeconds();

  var dataFormatada = dia + "/" + mes + "/" + ano + " " + hora + ":" + minuto + ":" + segundo;
  return dataFormatada;
}

export default httpServer;