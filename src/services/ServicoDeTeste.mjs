import supabase from "../index.mjs";

class CriandoServicoDeTeste {
    async execute(nome = String, email = String) {
  
              const { data, error } = await supabase
                .from('tabela_de_teste')
                .insert([
                  { nome: nome,
                    email: email },
                ])
                .select();
              
              if (error) {
                console.error(error);
              } else {
                console.log(data);
              }
    
    }
  }
  
export default  CriandoServicoDeTeste;