const dbConfig = require('../config/Dbconfigmain');

const { CompanyData } = dbConfig.model;
const CreateCompany = async (req, res) => {
    const { name } = req.body;
      try {
        const companyname = await CompanyData.findOne({
          where: { name: name }
        });
        if (companyname) {
          return res.status(404).json({ error: 'the company is exist'});
        }
        else{

             const company = await CompanyData.create({
               name:name
              });
          
              res.json(company);
        }
      } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    };

    const getCompanyData=async(req,res)=>{
        try{
            const company=await CompanyData.findAll();
            res.json(company);

        }catch(error){
            res.status(404).json({error:'something id wrong'});
        }

    };

    const DeleteCompanyData=async(req,res)=>{

            const comId=req.params.comId;
            try{
                const company=await CompanyData.findByPk(comId);
                if(!company){
                    res.status(404).json({message:'the ID is not found'});
                }else{
                     await company.destroy();
                     res.json({ message: 'companyData deleted successfully' });
                }


            }catch(error){
                
                res.status(404).json({error:'error'});
                res.status(404).json({message:'internal server error'});

            }

    };

    const UpdateCompanyData=async(req,res)=>{

        const comId=req.params.comId;
        const {name}=req.body;
        try{

            const company=await CompanyData.findByPk(comId);
            if(!company){
                res.status(404).json({message:'the ID is not found'});
            }
            company.name=name;
            await company.save();
            res.json({message:'the data is updated successfully'});
        }
        catch(error){
            res.status(404).json({error:"something went wrong"});
        }
    }
    module.exports = { CreateCompany,getCompanyData,DeleteCompanyData,UpdateCompanyData};
