
import News from './model/news.js';
import { data } from './constants/data.js';

const DefaultData = async () =>{
    try{
        await News.deleteMany({});
        await News.insertMany(data);
        console.log('Data imported Sucessfully');

    }catch(error){
        console.log('error',error.message);
    }
}

export default DefaultData;