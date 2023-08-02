import { createClient } from '@supabase/supabase-js'

import bodyParser from 'body-parser';
import express from 'express'
import morgan from 'morgan'
import { ControleDeTeste } from './controllers/ControleDeTeste.mjs'
import { admin_register_controller } from './controllers/admin/admin_register_controller.mjs';
import cors from 'cors';



const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY


const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: false,
      detectSessionInUrl: true
    }
    
  })


const app = express()
app.use(morgan('combined'));
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT  || 3001



app.post('/teste/usuario',new ControleDeTeste().handle);
app.post('/cadastro/admin', new admin_register_controller().handle)

app.get("/",(req,res)=>{
  return res.json("Hello world!")
})

app.get("/testando",(req,res)=>{
  return res.json("Testando essa rota")
})

app.listen(3333, () => {
    console.log(`> Ready on http://localhost:3333`);
});




export { app }
export default supabase
