const service = require('../models/service-model');

const services = async (req, res) => {
    try {
        const response = await service.find();
        if (!response){
            res.status(404).json({msg : "No service found"})
        }
        res.status(200).json({msg : response})
    } catch (error) {
        console.log(`Service:  ${error}`)
    }   
}

module.exports = services;