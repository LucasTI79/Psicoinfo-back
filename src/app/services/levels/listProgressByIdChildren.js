import childrensRepository from "../../repository/ChildrensRepository"

export default async function handle(idChildren){
  try{
    const childrens = await childrensRepository.listProgressByIdChildren(idChildren);
    // console.log('childrens',childrens)
    return childrens
  }catch(err){
    return new Error("Erro ao buscar progresso da criança");
  }
} 
