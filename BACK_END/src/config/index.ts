import dotenv from 'dotenv';

dotenv.config();

export const env = {
    port : process.env.PORT ,
    mongoURI : process.env.MONGO_URI,
    token : process.env.TOKEN
}