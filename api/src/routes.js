const express = require('express')
const router = express.Router()
const User_Data = require('./models/userTable') // includes our model

// get all quiz questions
router.get('/user_data', async (req, res) => {
    try {
        const userData = await User_Data.find()
        return res.status(200).json(userData)
    } catch (error) {
        return res.status(500).json({"error":error})
    }
})

// get one quiz question
router.get('/user_data/:id', async (req, res) => {
    try {
        const _id = req.params.id 

        const userData = await User_Data.findOne({_id})        
        if(!userData){
            return res.status(404).json({})
        }else{
            return res.status(200).json(userData)
        }
    } catch (error) {
        return res.status(500).json({"error":error})
    }
})

// create one quiz question
router.post('/user_data', async (req, res) => {

    try {
        const { Name } = req.body
        const { Email } = req.body
        const { Phone } = req.body

        const userData = await User_Data.create({
            Name,
            Email,
            Phone
        })

        return res.status(201).json(userData)
    } catch (error) {
        return res.status(500).json({"error":error})
    }

})

// update one quiz question
router.put('/user_data/:id', async(req, res) => {

    try {
        const _id = req.params.id 
        const { Name, Email, Phone } = req.body

        let userData = await User_Data.findOne({_id})

        if(!userData){
            userData = await User_Data.create({
                Name,
                Email,
                Phone 
            })    
            return res.status(201).json(userData)
        }else{
            userData.Name = Name
            userData.Email = Email
            userData.Phone = Phone
            await userData.save()
            return res.status(200).json(userData)
        }
    } catch (error) {
        return res.status(500).json({"error":error})
    }

})

// delete one quiz question
router.delete('/user_data/:id', async (req, res) => {

    try {
        const _id = req.params.id 

        const userData = await User_Data.deleteOne({_id})

        if(userData.deletedCount === 0){
            return res.status(404).json()
        }else{
            return res.status(204).json()
        }
    } catch (error) {
        return res.status(500).json({"error":error})
    }
})



module.exports = router