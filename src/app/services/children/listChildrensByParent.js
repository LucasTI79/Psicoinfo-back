import childrensRepository from "../../repository/ChildrensRepository"

export default async function handle(idParent){
  try{
    const childrens = await childrensRepository.listChildrenByParentId(idParent);
    // console.log('childrens',childrens)
    return childrens
  }catch(err){
    return new Error("Erro ao buscar crianças pelo id do parente");
  }
} 