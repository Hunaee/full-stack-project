import express from 'express'
import { config, app } from './config/app.config.js'
import cors from 'cors'
import contactRouter from './resources/contacts/contact.routes.js'
import db from './config/database.config.js'
import clientRouter from './resources/client/client.routes.js'
import Client from './resources/client/client.model.js'


const PORT = config.port_server || 3000

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
app.use('/api', clientRouter)

try {
    const newClient = new Client({
      lastname: "Doe",
      firstname: "John",
      birthdate: new Date('1990-05-15'),
      company: "Tech Corp",
      email: "john.doe@techcorp.com",
      address: [{
        street: "123 Tech Street",
        number: "42",
        city: "Brussels",
        country: "Belgium",
        postal_code: "1000"
      }],
      vat: "BE0123456789",
      client_number: 1001,
      registration_date: new Date(),
      sectors: "technology",
      revenues: 3000,
      user: "6507b6a1bc1f1234567890ab" // You'll need a valid ObjectId here
    });

    await newClient.save();
  } catch (error) {
    console.error('Error creating client:', error);
  }

//Schéma défini ton modèlezeffezzfzef