// import { createConnection } from "typeorm";
import mysql from "mysql2";
import {mySqlConfig} from "../config/mysqlconfig";

// createConnection().then(() => console.log('Successfully connected with database'))
export default function executar(instrucao) {
  // VERIFICA A VARIÁVEL DE AMBIENTE SETADA EM app.js
//   console.log('env',process.env.NODE_ENV)
  if (process.env.NODE_ENV == "production") {
      return new Promise(function (resolve, reject) {
          sql.connect(sqlServerConfig).then(function () {
              return sql.query(instrucao);
          }).then(function (resultados) {
              console.log(resultados);
              resolve(resultados.recordset);
          }).catch(function (erro) {
              reject(erro);
              console.log('ERRO: ', erro);
          });
          sql.on('error', function (erro) {
              return ("ERRO NO SQL SERVER (Azure): ", erro);
          });
      });
  } else if (process.env.NODE_ENV == "development") {
      return new Promise(function (resolve, reject) {
          var conexao = mysql.createConnection(mySqlConfig);
        
          conexao.connect();
        
          conexao.query(instrucao, function (erro, resultados) {
              conexao.end();
              if (erro) {
                  reject(erro);
              }
              // console.log(resultados);
              resolve(resultados);
          });
          conexao.on('error', function (erro) {
              return ("ERRO NO MySQL WORKBENCH (Local): ", erro.sqlMessage);
          });
      });
  } else {
      return new Promise(function (resolve, reject) {
          console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
          reject("AMBIENTE NÃO CONFIGURADO EM app.js")
      });
  }
}
