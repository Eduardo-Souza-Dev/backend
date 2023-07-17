import { createClient } from '@supabase/supabase-js'

import bodyParser from 'body-parser';
import express from 'express'
import morgan from 'morgan'
import { ControleDeTeste } from './controllers/ControleDeTeste.mjs'
import cors from 'cors';



const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabaseKeyUrl = process.env.SUPABASE_WITH_KEY


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
app.use(supabase)


app.post('/teste/usuario',new ControleDeTeste().handle);

app.get("/",(res,req)=>{
  console.log("Testando")
})

app.listen(3333, () => {
    console.log(`> Ready on http://localhost:3333`);
});



export { app }
export default supabase
