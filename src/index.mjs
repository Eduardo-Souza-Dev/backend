import { createClient } from '@supabase/supabase-js'

import bodyParser from 'body-parser';
import express from 'express'
import morgan from 'morgan'
import { ControleDeTeste } from './controllers/ControleDeTeste.mjs'
import cors from 'cors';



const supabaseUrl = "https://vtdnjwhphkxsgfculrsn.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0ZG5qd2hwaGt4c2dmY3VscnNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc5NjU0NjUsImV4cCI6MjAwMzU0MTQ2NX0.cQaYd3JY-5C39T9WCVKNBzP3ymJvBImh8eqPHzwsmcw"


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

app.get("/",(req,res)=>{
  return res.json("Hello world!")
})

// app.listen(3333, () => {
//     console.log(`> Ready on http://localhost:3333`);
// });

app.listen(port,() =>{
  console.log("Esta indo agora")
})



export { app }
export default supabase
