import Users from '../db/models/UserSchema.js';

// create a new User
export const createUser = async (req, res) => {
  const {walletID} = req.body
  try{
    const MongoUser = await Users.findOne({},{walletID: walletID})
    if(!MongoUser){
      const newUser = new Users({
        walletID:walletID,
        render:5,
      })
      await newUser.save();
      res.status(200).json(newUser)
    }else{
      res.status(200).json('User exist.')
    }
  }catch(error){
    res.status(400).json({error:error.message})
  }
}
// Get User Renders
export const userRenders = async (req, res) => {
  let _walletID = req.params;
  try{
    let data = await Users.findOne({}, {walletID: _walletID, render:true})
    if(!data){
      return res.status(200).json('User Doesnt exist.')
    }
    if(data){
      // Return Users amount of render
      return  res.status(200).json(data.render);
    }
  }catch(error){
    console.log('Error ', error.message)
  }
}

export const deleteRender = async (req,res) => {
  const _walletID = req.params.id;
  try{
    let currentRender = await Users.findOne({},{walletID: _walletID, render:true})
    // Remove one hit
    const reduceRender = await Users.updateOne(
      {walletID:_walletID}, 
      { $set: {render:currentRender.render - 1}}
    )
    let updatedRender = await Users.findOne({walletID: _walletID})
    if(!updatedRender){
      return res.status(500).json('Update did not go throw')
    }
    if(updatedRender){
      // Return Users amount of render
      return res.status(200).json(updatedRender.render)
    }
  }catch(error){
    console.log('Error ', error.message)
    res.status(500).json({msg:error.message});
  }
}

