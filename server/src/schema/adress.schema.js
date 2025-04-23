import { Schema } from 'mongoose';

const addressSchema = new Schema ({
    street: String,
    city: String,
    zip: String
})

export default addressSchema