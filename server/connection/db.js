import mongoose from 'mongoose';

const Connection = async() =>{
   try{
        const URL = `mongodb+srv://admin:admin@inshorts-clone.xwvle.mongodb.net/inshorts-clone?retryWrites=true&w=majority`
        await mongoose.connect(URL, { useNewUrlParser: true })

        console.log('Database connected Successfully');

   } catch(error){
       console.log("Error while connecting with database ",error);
   }
}
export default Connection;