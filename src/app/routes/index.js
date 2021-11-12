import { Router } from 'express';
import UsersRouter from './users';

const routes = Router();

routes.use('/users', UsersRouter);


export { routes };

//               {
//                 'nome':'lucas',
//                 'email':'sdadsa@das',
//                 'password':'1532156'
//               }
//               POST => Usado quando se precisa passar dados pela rota
//               GET => Usado para buscar informações
//               /users?page=2

// navegador => /users => aplicação

//                         aplicação contém:

//                           um cara q pega os dados e manda pro model
//                           e depois pega a resposta do model e retorna para o usuário
//                           (Garçom)

//                           --controller => 

//                                 O cara que executa a query(instrução) tanto de seleção cadastro update etc

//                                 --model(repository) => 

//                                     contem todos os dados
//                                     --bd