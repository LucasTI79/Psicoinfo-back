import UsersRepository from "../repository/UsersRepository"

export default async function handle(){
  try{
    const users = await UsersRepository.listUsers();
    console.log('users',users)
    return users
  }catch(err){
    return new Error("Erro ao buscar usuários");
  }
} 