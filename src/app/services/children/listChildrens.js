import childrensRepository from "../../repository/ChildrensRepository"

export default async function handle(){
  try{
    const childrens = await childrensRepository.listChildrens();
    // console.log('childrens',childrens)
    return childrens
  }catch(err){
    return new Error("Erro ao buscar crianças");
  }
} 