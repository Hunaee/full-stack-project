import { Schema, mongoose } from 'mongoose';
import addressSchema from './adress.schema.js';

export const clientSchema = new Schema({
    lastname: {
      type: String,
      required: true
    },
    firstname: {
      type: String,
      required: true
    },
    birthdate: {
      type: Date,
      required: true
    },
    company: {
      type: String
      // optional by default
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    address: {
      type: [addressSchema],
      required: true
    },
    vat: {
      type: String,
      unique: true,
      required: function () {
        return !!this.company;
      }
    },
    client_number: {
      type: Number,
      required: true
    },
    registration_date: {
      type: Date,
      required: true
    },
    sectors: {
      type: String,
      enum: ['technology', 'finance', 'health', 'education', 'other'], // adapte à tes valeurs
      required: true
    },
    revenues: {
      type: Number,
      min: 0,
      max: 5000,
      required: function () {
        return !!this.company;
      }
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  });

clientSchema.methods.getAge = async function(){
  const today = new Date();
  const birth = new Date(this.birthdate);
  
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
}