const express = require('express')
const router = express.Router()
const User_Data = require('./models/userTable') // includes our model

// get all user info
router.get('/user_data', async (req, res) => {
    try {
        const userData = await User_Data.find()
        return res.status(200).json(userData)
    } catch (error) {
        return res.status(500).json({"error":error})
    }
})

// get user info data
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

// create one user info
router.post('/user_data', async (req, res) => {

    try {
        const { Name } = req.body
        const { Email } = req.body
        const { Phone } = req.body
        const { Country } = req.body
        const { Destination } = req.body
        const { VacationInterest } = req.body
        const { NumberOfNights } = req.body
        const { Rooms } = req.body
        const { Adults } = req.body
        const { Children } = req.body
        const { CommentsOrQuestions } = req.body
     

        const userData = await User_Data.create({
            Name,
            Email,
            Phone,
            Country,
            Destination,
            VacationInterest,
            NumberOfNights,
            Rooms,
            Adults,
            Children,
            CommentsOrQuestions
        })

        return res.status(201).json(userData)
    } catch (error) {
        return res.status(500).json({"error":error})
    }

})

// update one user info
router.put('/user_data/:id', async(req, res) => {

    try {
        const _id = req.params.id 
        const { Name, Email, Phone, Country, Destination, VacationInterest, NumberOfNights, Rooms, Adults, Children, CommentsOrQuestions  } = req.body

        let userData = await User_Data.findOne({_id})

        if(!userData){
            userData = await User_Data.create({
                Name,
                Email,
                Phone,
                Country, 
                Destination, 
                VacationInterest, 
                NumberOfNights, 
                Rooms, 
                Adults, 
                Children, 
                CommentsOrQuestions 
            })    
            return res.status(201).json(userData)
        }else{
            userData.Name = Name
            userData.Email = Email
            userData.Phone = Phone
            userData.Country = Country
            userData.Destination = Destination
            userData.VacationInterest = VacationInterest
            userData.NumberOfNights = NumberOfNights
            userData.Rooms = Rooms
            userData.Adults = Adults
            userData.Children = children
            userData.CommentsOrQuestions = CommentsOrQuestions

            await userData.save()
            return res.status(200).json(userData)
        }
    } catch (error) {
        return res.status(500).json({"error":error})
    }

})

// delete one user info
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