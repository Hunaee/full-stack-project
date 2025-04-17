import express from 'express'
import {config, app} from './config/app.config.js'
import cors from 'cors'
import contactRouter from './resources/contacts/contact.routes.js'

const PORT = config.port || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

if(config.env !== 'development'){
    app.use(cors())
}

app.listen(PORT, () =>{
    console.log('Server is running on', PORT)
})


app.get('/', (req, res) => {
    res.status(200).json({message:'Hello world'})
})

app.use('/api', contactRouter)