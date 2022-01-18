import UsersRepository from "../../repository/UsersRepository"

export default async function handle(email, password){
  if(email && password){
    try{
      const user = await UsersRepository.authenticate(email, password);
      if(user.length == 0) {
        let erro
        throw erro = "Credenciais inválidas"
      }else{
        return user
      }
    }catch(err){
      // console.log('err', err)
      throw err;
    }
  }else{
    throw err = "Credenciais inválidas"
  }
} 