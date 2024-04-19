const dbConfig = require('../config/Dbconfigmain');

const { EmployeeData } = dbConfig.model;

const login = async (req, res) => {
    const { email, Password } = req.body;

    try {
        const employee = await EmployeeData.findOne({ where: { email, Password} });
        if (!employee) {
            return res.status(404).json({ error: 'Invalid email or password' });
        }

        res.json({ message: 'Login successful', employee });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const CreateEmployee = async (req, res) => {
    const { name,email,Password,Address} = req.body;

      try {
        const EmployeeName = await EmployeeData.findOne({
          where: { name: name }
        });
        if (EmployeeName) {
          return res.status(404).json({ error: 'the Employee is exist'});
        }
        else{

             const Employee = await EmployeeData.create({
               name:name,
               email:email,
               Password:Password,
               Address:Address
              });
          
              res.json(Employee);
        }
      } catch (error) {
        console.error('Error creating Employee:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    };

    // const getEmployeeData=async(req,res)=>{
    //     try{
    //         const Employee=await EmployeeData.findAll({offset:10, limit:5});
    //         res.json(Employee);

    //     }catch(error){
    //         res.status(404).json({error:'something id wrong'});
    //     }

    // };
    const getEmployeeData = async (req, res) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 5;
            const offset = (page - 1) * limit;
    
            const employees = await EmployeeData.findAll({ offset, limit });
    
            res.json(employees);
        } catch (error) {
            console.error('Fetch Data Error:', error);
            res.status(404).json({ error: 'Something went wrong' });
        }
    };

    const getEmployeeById = async(req,res)=>{
        const id=req.params.id;
        try{
            const Employee=await EmployeeData.findByPk(id);
            if(Employee){
                res.json(Employee);
            }else{
                res.json({message:'the employee is not found'});
            }

        }catch(error){
            console.log("the error is:="+error);
        }
        
    }

    const DeleteEmployeeData=async(req,res)=>{

            const id=req.params.id;
            try{
                const Employee=await EmployeeData.findByPk(id);
                if(!Employee){
                    res.status(404).json({message:'the ID is not found'});
                }else{
                     await Employee.destroy();
                     res.json({ message: 'Employee deleted successfully' });
                }


            }catch(error){
                
                res.status(404).json({error:'error'});
                res.status(404).json({message:'internal server error'});

            }

    };

    const UpdateEmployeeData=async(req,res)=>{

        const id=req.params.id;
        const {name,email,Password,Address}=req.body;
        try{

            const Employee=await EmployeeData.findByPk(id);
            if(!Employee){
                res.status(404).json({message:'the ID is not found'});
            }
            Employee.name=name;
            Employee.email=email;
            Employee.Password=Password;
            Employee.Address=Address;
            await Employee.save();
            res.json({message:'the Employee is updated successfully'});
        }
        catch(error){
            res.status(404).json({error:"something went wrong"});
        }
    }
    module.exports = { login,CreateEmployee,getEmployeeById,getEmployeeData,DeleteEmployeeData,UpdateEmployeeData};
