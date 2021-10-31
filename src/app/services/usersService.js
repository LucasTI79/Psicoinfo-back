import UsersRepository from "../repository/UsersRepository"

export const registerUser = (username, email, password) => {
  if(username && email && password){
    try{
      return await UsersRepository.createUser(username, email, password)
    }catch(err){
      throw new Error("Entrada de dados inválida");
    }
  }else{
    throw new Error("Entrada de dados inválida");
  }
} 

export const listUsers = () => {
  return [{ name: 'Lucas' }, { name: 'Lucas' }]  
} 

export const listUserbyId = () => {
  return [{ name: 'Lucas' }]  
} 