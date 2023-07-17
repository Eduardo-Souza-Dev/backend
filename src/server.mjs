// import { createClient } from '@supabase/supabase-js'
// const supabaseUrl = 'https://vtdnjwhphkxsgfculrsn.supabase.co'
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0ZG5qd2hwaGt4c2dmY3VscnNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc5NjU0NjUsImV4cCI6MjAwMzU0MTQ2NX0.cQaYd3JY-5C39T9WCVKNBzP3ymJvBImh8eqPHzwsmcw"
// const supabase = createClient(supabaseUrl, supabaseKey)



// async function executeQuery() {
//     try {
//       const { data, error } = await supabase
//         .from('tabela_de_teste')
//         .insert([
//           { nome: 'someValue', email: 'otherValue' },
//         ])
//         .select();
      
//       if (error) {
//         console.error(error);
//       } else {
//         console.log(data);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   executeQuery();


const app = express();

app.use(express.json());


app.use((err,req ,res) =>{
   
    if(err instanceof Error){
        return res.status(400).json({
            err: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
    })

})