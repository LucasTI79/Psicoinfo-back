import UsersRepository from "../repository/UsersRepository"
import mailer from '../../modules/mailer'
import crypto from 'crypto';

export default async function handle(email){
  try{
    const user = await UsersRepository.listUserByEmail(email)
    if(user.length == 0){
      throw new Error('User not found')
    }

    const token = crypto.randomBytes(20).toString('hex');
    const now = new Date();
    now.setHours(now.getHours() + 1);

    await UsersRepository.setToken(user[0].id, token, new Date().toISOString().substring(0,16));

    await mailer.sendMail({
        to: email,
        from: 'lukasalves271@gmail.com',
        template: 'auth/forgot_password',
        context: { token },
    }, (err) => {
        if(err){
          throw new Error('Cannot send forgot password email')
        }
        return 
    });
  }catch(err){
    console.log('err',err)
    throw new Error(err);
  }
} 