import createUser from "../services/user/createUser";
import listChildrens from "../services/children/listChildrens";
import listChildrensByParent from "../services/children/listChildrensByParent";
import listProgressByIdChildren from "../services/levels/listProgressByIdChildren";
import countLevelsByChildren from "../services/levels/countProgressByIdChildren";
import countLevelsChildren from "../services/levels/countLevelsChildren"

export default {
  async index(req,res){
    try{
      const childrens = await listChildrens();
      // console.log('users',user)
      res.status(200).json(childrens);
    }catch(err){
      console.log('err',err)
      res.status(400).json({ error: 'Erro ao retornar crianças' });
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
      res.status(400).json({ error: err.message });
    }
  },
  update(req,res){
  },
  delete(req,res){
  },
  async indexByParent(req,res){
    try{
      const idParent = req.params.idParent;
      const childrens = await listChildrensByParent(idParent);
      // console.log('users',user)
      res.status(200).json(childrens);
    }catch(err){
      console.log('err',err)
      res.status(400).json({ error: 'Erro ao retornar crianças' });
    }
  },

  async indexLevelsByChildren(req, res){
      try{
        const idChildren = req.params.idChildren;
        const progress = await listProgressByIdChildren(idChildren);
        // console.log('users',user)
        res.status(200).json(progress);
      }catch(err){
        console.log('err',err)
        res.status(400).json({ error: 'Erro ao retornar progresso da criança' });
      }
    
  },

  async countLevelsByChildren(req, res){
    try{
      const idChildren = req.params.idChildren;
      const progress = await countLevelsByChildren(idChildren);
      // console.log('users',user)
      res.status(200).json(progress);
    }catch(err){
      console.log('err',err)
      res.status(400).json({ error: 'Erro ao retornar qual o progresso da criança' });
    }
  },

  async countLevelsChildren(req, res){
    try{
      const progress = await countLevelsChildren();
      // console.log('users',user)
      res.status(200).json(progress);
    }catch(err){
      console.log('err',err)
      res.status(400).json({ error: 'Erro ao retornar qual o progresso das criança' });
    }
  }

  
};