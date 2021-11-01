import UsersRepository from "../repository/UsersRepository"

export default async function handle(email, password){
  if(email && password){
    console.log(email, password)
    try{
      return await UsersRepository.authenticate(email, password)
    }catch(err){
      return new Error("Entrada de dados inválida");
    }
  }else{
    return new Error("Entrada de dados inválida");
  }
} 