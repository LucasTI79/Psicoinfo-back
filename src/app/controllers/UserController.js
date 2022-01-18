import createUser from "../services/user/createUser";
import listUsers from "../services/user/listUsers";
import authUser from "../services/user/authUser";
import forgotUser from "../services/user/forgotUser";
import resetPassword from "../services/user/resetPassword";

export default {
  async index(req,res){
    try{
      const user = await listUsers();
      // console.log('users',user)
      res.status(200).json(user);
    }catch(err){
      // console.log('err',err)
      res.status(400).json({ error: 'Erro ao retornar usuários' });
    }
  },
  show(req,res){
  },

  async store(req,res){
    try{
      const { username, email, password } = req.body;
      // console.log('files',req.body, req.file)
      // console.log('filname',req.filename)
      await createUser(username, email, password, req.file.filename );
      res.status(201).json({ message: 'Usuário criado com sucesso' });
    }catch(err){
      res.status(400).json({ error: err });
    }
  },
  update(req,res){
  },
  delete(req,res){
  },
  async auth(req, res){
    try{
      const { email, password } = req.body;
      const user = await authUser(email, password);
      delete user[0].pw
      res.status(200).json({user});
    }catch(err){
      console.log('err',err)
      res.status(400).json({ error: err });
    }
  },

  async forgot(req, res){
    try{
        const { email } = req.body;
        await forgotUser(email);
        res.status(200).json({ message: 'Email enviado' });
        }catch(err){
        res.status(400).send({ error: err});
     }
  },

  async reset(req,res){
    try {
        const { token, password } = req.body;

        await resetPassword( token, password)

        res.status(200).json({message: 'Senha alterada com sucesso'});

    } catch (err){
        res.status(400).send({ error: 'Cannot update password, try again' })
    }
  }
};