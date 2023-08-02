import { request, response } from "express";
import admin_register_service from "../../services/admin/admin_register_service.mjs";

class admin_register_controller{
    async handle(req = request, res= response){
        const { nome_empresa, razao_social, logotipo, nome_admin, UF,endereco_emrpesa, complemento_empresa, CEP_empresa, CPF_admin, CNPJ_admin, CNPJ_empresa, telefone, telefone_empresa, celular, login, senha, latitude, longitude, email } = req.body;

        const new_admin = new admin_register_service();
        
        const admin = await new_admin.execute(
            nome_empresa,
            razao_social, 
            logotipo, 
            nome_admin,
            UF,
            endereco_emrpesa,
            complemento_empresa, 
            CEP_empresa, 
            CPF_admin, 
            CNPJ_admin, 
            CNPJ_empresa,
            telefone, 
            telefone_empresa,
            celular, 
            login, 
            senha, 
            latitude, 
            longitude,
            email
        )

        return res.send(admin)
    }

   
}

export { admin_register_controller }