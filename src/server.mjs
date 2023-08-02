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