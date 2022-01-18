export default async function handle(){
  try{
    const childrens = await childrensRepository.countProgressChildrens();
    // console.log('childrens',childrens)
    return childrens
  }catch(err){
    return new Error("Erro ao progresso das crianças");
  }
} 