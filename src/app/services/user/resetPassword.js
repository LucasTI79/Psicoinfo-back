import UsersRepository from "../../repository/UsersRepository"

export default async function handle(token, password){
  try{
    const user = await UsersRepository.listUserByToken(token)
    if(user.length == 0){
      throw new Error('User not found')
    }

    const now = new Date();

    if (now > user[0].passwordResetExpires){
      throw new Error('Token expired, generate a new one')
    }
           
    await UsersRepository.resetPassword(token, password);
    
    return
    
  }catch(err){
    throw new Error(err);
  }
} 