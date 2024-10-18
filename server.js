const express = require("express")
const cors = require("cors")

app = express()



app.use(express.json())
app.use(cors())

const dados = []


app.post("/emprestimo",(req,res)=>{
    const {idade,cpf,nome,salario,localizacao} = req.body


    if(salario <= 3000 || (salario > 3000 && salario <=5000 && idade < 30 && localizacao === 'SP')){
        dados.push({type:"Pessoal", taxa: 4})
    }

    if(salario >= 5000){
        dados.push({type:'Consignado', taxa: 2})
    }

    if(salario <= 3000 || (salario > 3000 && salario <=5000 && idade < 30 && localizacao === 'SP')){
        dados.push({type:'Emprestimo com garantia', taxa:3})
    }

    return res.status(200).json({
        usuario:nome,
        dados:dados
    })
})


app.get("/",(req,res)=>{
    res.json(dados)
})


app.listen(3000,()=>{
    console.log("Servidor rodando...")
})