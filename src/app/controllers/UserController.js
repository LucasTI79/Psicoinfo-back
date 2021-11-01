import createUser from "../services/createUser";
import listUsers from "../services/listUsers";
import authUser from "../services/authUser";

export default {
  async index(req,res){
    try{
      const user = await listUsers();
      res.status(200).json(user).send();
    }catch(err){
      console.log(err)
      res.status(400).json({ error: 'Erro ao retornar usuários' });
    }
  },
  show(req,res){
  },
  async store(req,res){
    try{
      const { username, email, password } = req.body;
      await createUser(username, email, password);
      res.status(201).json({ message: 'Usuário criado com sucesso' }).send();
    }catch(err){
      res.status(400).json({ error: err.message });
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
      res.status(201).send(user);
    }catch(err){
      // console.log(err)
      res.status(400).json({ error: err.message });
    }
  }
};