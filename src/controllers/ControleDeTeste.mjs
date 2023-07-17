import { request, response } from "express";
import CriandoServicoDeTeste from "../services/ServicoDeTeste.mjs";

class ControleDeTeste{
    async handle(req = request,res = response){
        const { nome,email } = req.body;

        const novoTeste = new CriandoServicoDeTeste();

        const Teste = await novoTeste.execute(
            nome,
            email
        )

        return res.send(Teste)
    }
}

export { ControleDeTeste }