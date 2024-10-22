import supabase from "../../server.mjs";
import { hash } from "bcrypt";

class admin_register_service{

    async verifica_login(login){
        const { data, error } = await supabase
        .from('admin')
        .select()
        .eq('login',login)

        //Verifica se o email já existe, caso sim da um erro caso não executa o insert
      
        if(data.length > 0){
            throw new Error("Login já existe!");
        }

        if(error){
            throw new Error(error);
        }

        return login;
    }

    async hash_senha(senha){
        const hashing = await hash(senha,8)
        return hashing
    }

    async execute(nomeEmpresa, razaoSocial, logotipo, nomeAdmin, UF, enderecoEmpresa, complementoEmpresa, CEP_empresa, CPF_admin, CNPJ_admin, CNPJ_empresa, telefone, telefoneEmpresa, celular, login, senha, latitude, longitude, email){

       //Chamada da função para verificar e-mail 
       await this.verifica_login(login)

       //Chamada da função para fazer hash na senha
       const passwordHash = await this.hash_senha(senha)
    

        const { data, error } = await supabase
        .from('admin')
        .insert([
            {
               nome_empresa:nomeEmpresa,
               razao_social:razaoSocial,
               logotipo:logotipo,
               nome_admin:nomeAdmin,
               UF:UF,
               endereco_empresa:enderecoEmpresa,
               complemento_empresa:complementoEmpresa,
               CEP_empresa:CEP_empresa,
               CPF_admin:CPF_admin,
               CNPJ_admin:CNPJ_admin,
               CNPJ_empresa:CNPJ_empresa,
               telefone:telefone,
               telefone_empresa:telefoneEmpresa,
               celular:celular,
               login:login,
               senha:passwordHash,
               latitude:latitude,
               longitude:longitude,
               email: email 
            }
        ])
        .select()

        try{
            return data
        }catch(error){
            throw new Error("Erro ao cadastrar usuário")
        }


    }

   
}


export default admin_register_service
