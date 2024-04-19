const {createClient} =require("redis");

const redisClient=createClient({

    url:process.env.REDIS_URL,
    password:"amrat@12"


});

(async()=>{

    console.log(".............................Redis connection established................");
    await redisClient.connect();
})();


redisClient.on('connect',()=>{

    console.log("...........................connection to redis.................");
});



redisClient.on('error',(err)=>{

    console.log("redis error:",err);
});

module.exports=redisClient;