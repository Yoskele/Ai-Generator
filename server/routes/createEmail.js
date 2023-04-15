import Emails from '../db/models/EmailSchema.js';

// create a new Email
const createEmail = async (req, res) => {
  const {email} = req.body
  try{
    const MongoEmail = await Emails.findOne({email: email})
    if(!MongoEmail){
      const newEmail = new Emails({
          email: email
      })
      await newEmail.save();
      res.status(200).json(newEmail)
    }else{
      res.status(200).json('Email exist.')
    }
  }catch(error){
    res.status(400).json({error:error.message})
  }
}

export default createEmail;

