import { clientSchema } from "../../schema/client.schema.js";
import { mongoose } from "mongoose";

const Client = mongoose.model("Client", clientSchema);

export default Client;