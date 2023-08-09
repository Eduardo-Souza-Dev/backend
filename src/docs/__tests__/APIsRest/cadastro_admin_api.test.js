import axios from 'axios';
import bcrypt from 'bcrypt';
import { app } from '../../../server.mjs';
import admin_register_service from '../../../services/admin/admin_register_service.mjs';
import MockAdapter from 'axios-mock-adapter';
import supertest from 'supertest';
/*
pt-BR

Documentação oficial de testes de APIRest do sistema System Parking, aqui é aonde você vai entender como funiona nossas requisições e tipagens

De Dev para Dev

----------------------------------------

en-EN

Official documentation of System Parking APIRest tests, here is where you will can understand how our requests and typing work

From Dev to Dev


*/




describe('cadastro de usuário admin',() =>{

  async function cadastrarAdmin(data) {
    try
    {
      const response = await axios.post("http://localhost:3333/cadastro/admin", data);
      console.log(response.data);
      return response.data;
    }
    catch(error){
      console.log(error);
    }
    
  }

  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });


  it('POST /cadastro/admin retorna dados corretos e barra e-mail', async() => {

      const data = { 
      nome_empresa: 'Empresa de Teste 66666',
      razao_social: 'EMPRESA DE TESTE LTDA', 
      logotipo: 'linkdeimagemimaginário', 
      nome_admin: 'Eduardo',
      UF:'SP',
      endereco_emrpesa: 'Rua de Teste',
      complemento_empresa: 'Próximo ao Bairro XXXXX', 
      CEP_empresa: '13545-143', 
      CPF_admin: '544.343.345-46', 
      CNPJ_admin: '12.456.789/0001-1', 
      CNPJ_empresa: '12.456.789/0001-1',
      telefone: '55 19 9034-324', 
      telefone_empresa: '55 19 9034-324',
      celular: '55 19 9034-324', 
      login: 'empresa212121212121@systemapark.com', 
      senha: 'senha_com_hash', 
      latitude: '-2144324 W', 
      longitude: '80982348902 S°',
      email: 'emaildeteste@email.com' 
    };
  
    mock.onPost("http://localhost:3333/cadastro/admin").reply(200,{ data:data ,status:200} );

    //Esperando a resposta da função que chama a rota de cadastro
    const response = await cadastrarAdmin(data);

    console.log(response);
    expect(response.data).toEqual(data);
    expect(response.status).toEqual(200); 
  });

  test('Deve gerar o hash da senha', async() =>{
    const senha = '1234';
    const hash = new admin_register_service();

    const gera_hash = await hash.hash_senha(senha,8);

    expect(gera_hash).not.toBe(senha);
    const senhaValida = await bcrypt.compare(senha,gera_hash);
    expect(senhaValida).toBe(true);

  });

})

