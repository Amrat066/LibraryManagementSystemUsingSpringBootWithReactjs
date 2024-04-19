
// controller/userController.js


const dbConfig = require('../config/Dbconfigmain');
const { User,CompanyData} = dbConfig.model;
const APIResponse=require('../../I18NPro/ApiResponse')
const fs=require('fs');

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});

const upload = multer({ storage: storage });


const CreateUser = async (req, res) => {
  const { email, password, companyName } = req.body;

  try {
    const company = await CompanyData.findOne({
      where: { name: companyName }
    });

    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }

    const files = req.files; 

    const filePaths = files.map(file => file.path);

    const user = await User.create({
      email: email,
      password: password,
      file: filePaths.join(','), 
      companyId: company.id,
    });
    
    res.json(user);


  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


const getAllUsers = async (req, res) => {
  try {
    const  users = await User.findAll();
    res.json( APIResponse.success(users).toJSON());
   

  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


const updateUser = async (req, res) => {
  const userId = req.params.userId;
  const { email, password, companyName } = req.body;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const company = await CompanyData.findOne({ where: { name: companyName } });
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }

    // Check if files are uploaded
    if (req.files && req.files.length > 0) {
      // Delete old files associated with the user
      const filePaths = user.file.split(',');
      filePaths.forEach(filePath => {
        fs.unlinkSync(filePath);
      });

      // Upload new files
      const files = req.files;
      const newFilePaths = files.map(file => file.path);

      // Update file field with new file paths
      user.file = newFilePaths.join(',');
    }

    user.email = email;
    user.password = password;
    user.companyId = company.id;

    await user.save();

    res.json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// const updateUser = async (req, res) => {
//   const userId = req.params.userId;
//   const { email, password, companyName } = req.body;

//   try {
//     const user = await User.findByPk(userId);
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     const company = await CompanyData.findOne({ where: { name: companyName } });
//     if (!company) {
//       return res.status(404).json({ error: 'Company not found' });
//     }

//     // Check if files are uploaded
//     if (req.files && req.files.length > 0) {
//       const files = req.files;
//       const filePaths = files.map(file => file.path);
      
//       // Update file field with new file paths
//       user.file = filePaths.join(',');
//     }

//     // Update user information
//     user.email = email;
//     user.password = password;
//     user.companyId = company.id;

//     await user.save();

//     res.json(user);
//   } catch (error) {
//     console.error('Error updating user:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// const deleteUser = async (req, res) => {
//   const userId = req.params.userId;
//   try {
//     const user = await User.findByPk(userId);
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     await user.destroy();
//     res.json({ message: 'User deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting user:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };




const deleteUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const filePaths = user.file.split(',');
    filePaths.forEach(filePath => {
      fs.unlinkSync(filePath);
    });

    await user.destroy();

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { CreateUser, getAllUsers, updateUser, deleteUser };
