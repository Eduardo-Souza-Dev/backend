import { createClient } from '@supabase/supabase-js'
import bodyParser from 'body-parser';
import express from 'express'
import morgan from 'morgan'
import admin_register_controller from './controllers/admin/admin_register_controller.mjs';
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

app.post('/cadastro/admin', new admin_register_controller().handle)



export { app };
export default supabase;
