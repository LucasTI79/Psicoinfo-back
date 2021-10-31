import createUser from "../services/createUser";

export default {
  index(req,res){
   
  },
  show(req,res){
      const { id } = req.params;

      const user = users.find((user) => user.id === Number(id));

      if(!user){
         return res.send(200,{ error: 'user not found' });
      }
      
      res.send(200, user);
  },
  store(req,res){
    const { username, email, password } = req.body;
    try{
      const user = await createUser(username, email, password);
      res.status(201).json(user).send();
    }catch(err){
      res.status(400).json({ error: 'parámetros inválidos' });
    }
  },
  update(req,res){
      let { id } = req.params;
      const { name } = req.body;

      id = Number(id);

      const userExists = users.find((user) => user.id === id)

      if(!userExists){
          return res.send(400, { error: 'User not found'})
      }

      users = users.map((user)=>{
          if(user.id === id){
              return{
                  ...user,
                  name,
              }
          }

      return user;
      })

      res.send(200, { id, name});
  },
  delete(req,res){
      let { id } = req.params;
      id = Number(id);

      users = users.filter((user) => user.id !== id);
      res.send(200, { deleted: true})
  }
};