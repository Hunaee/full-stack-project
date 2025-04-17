import express from 'express'
import { getContacts, getContactId, createNewContact, modifyContact, deleteContact } from './contact.controller.js'
const contactRouter = express.Router()


contactRouter.get('/contacts', getContacts)

contactRouter.get('/contacts/:id', getContactId)

contactRouter.post('/contacts', createNewContact)

contactRouter.put('/contacts/:id', modifyContact)

contactRouter.delete('/contacts/:id', deleteContact)

export default contactRouter