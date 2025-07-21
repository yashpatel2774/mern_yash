const contact = require('../models/contact-model.js');

const contactForm = async (req, res) => {
    try {
        const response = req.body;
        await contact.create(response); 
        res.status(200).json({ message: "Contact form submitted successfully" });
    }
    catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = contactForm ;