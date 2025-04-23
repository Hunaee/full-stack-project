import express from 'express'
import { getClientAge } from './client.controller.js'
const clientRouter = express.Router()


clientRouter.get("/:id/age", getClientAge);


export default clientRouter