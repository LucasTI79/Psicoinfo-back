import UsersRepository from "../repository/UsersRepository"
import mailer from '../../modules/mailer'
import crypto from 'crypto';

export default async function handle(email, token, password){
  try{
    const user = await UsersRepository.listUserByEmail(email)
    if(!user){
      throw new Error('User not found')
    }

    if(token !== user[0].passwordResetToken){
      throw new Error('Token invalid')

    }

    const now = new Date();

    if (now > user[0].passwordResetExpires){
      throw new Error('Token expired, generate a new one')
    }
           
    await UsersRepository.resetPassword(user[0].id, email, token, password);
    
    return
    
  }catch(err){
    // console.log('err',err)
    throw new Error(err);
  }
} 