const mongoose=require('mongoose')


// database connection 
const Connection=process.env.DATABASE
mongoose.connect(Connection).then((res)=>{
    console.log('Atles Connection Established!');
}).catch((err)=>{
    console.log(err);
    console.log("Internet Connection Faild.  Your Offline!");
    console.log('Atles Connection Failded!');

})