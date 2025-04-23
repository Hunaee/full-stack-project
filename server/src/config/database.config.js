import mongoose from 'mongoose'
import { config } from './app.config.js'


const db = mongoose.connect(`mongodb://app-user:app-passw0rd@mongodb:${config.port_mongoose}/training-node-mongodb`)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));


export default db
