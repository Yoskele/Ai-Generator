import Users from '../db/models/UserSchema.js';

const getUserRender = async (req, res) =>{
    console.log('hello')
    const {walletID} = req.body
    console.log('walletID ',walletID)
    try{
        const MongoUser = await Users.findOne({walletID: walletID})
        if(!MongoUser){
         
          res.status(200).json(newUser)
        }else{
          res.status(200).json('User exist.')
        }
      }catch(err){
        res.status(400).json({error:error.message})
      }
}

export default getUserRender;