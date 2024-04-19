const express=require("express");
const mysql=require("mysql");

const app=express();

app.use(express.json());



const db=mysql.createConnection({
    host: 'localhost',
    user: 'amrat',
    password: 'root@123',
    database: 'company'
})
db.connect((err)=>{

    if(err){
        throw err;    
    }
    console.log("mysql is connected");
})

app.get('/api/companies', (req, res) => {
    db.query('SELECT * FROM companyInfo', (err, results) => {
        if (err) {
            throw err;
        }
        res.json(results);
    });
});


app.post('/api/companies',(req,res)=>{

    const {name,address,type,industry,revenue }=req.body;
    db.query('insert into companyInfo(name,address,type,industry,revenue)values(?,?,?,?,?)',[name,address,type,industry,revenue],(err,result)=>{
        if(err){
            throw err;
        }
        res.json({ message: 'Book added successfully.'});

    })

})

app.put('/api/companies/:id',(req,res)=>{
    var id=req.params.id;
    const qry=`select * from companyInfo where id=${id}`;
    db.query(qry,(err,result)=>{

        if(err){
            throw err;
        }
        res.json(result);

    })



})
app.put('/api/companies/:id',(req,res)=>{

        var id=req.params.id;
        var name=req.params.name;
        var type=req.params.type;
        var industry=req.params.industry;
        var revenue=req.params.revenue;
        const qry=`update companyInfo set name="${name}",type=${type},industry=${industry},revenue=${revenue} where id=${id}`;
        db.query(qry,(req,data,err)=>{
            if(err){
                throw err;
            }
                res.json({message:'data is updated'});

        })

})


app.delete('/api/companies/:id',(req,res)=>{
         var id=id.params.id;
         const qry=`delete from companyInfo where ${id}`;
         db.query(qry,function(){
            if(err){
                throw err;
            }
            res.json({message:'data is deleted'});
         })
})


app.listen(3000,()=>{

    console.log("the server is running on port 3000");
})