import UsersRepository from "../repository/UsersRepository"

export default async function handle(){
  try{
    return await UsersRepository.listUsers()
  }catch(err){
    return new Error("Erro ao buscar usuários");
  }
} 