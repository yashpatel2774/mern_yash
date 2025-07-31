const user = require('../models/user-model.js');
const contact = require('../models/contact-model.js')

const getAllUsers = async (req, res, next) => {
    try {
        const users = await user.find({}, { password: 0 });
        if (!users || users.length === 0) {
            return res.status(404).json({message : "No users Find"})
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
} 

const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await contact.find();
        if (!contacts || contact.length === 0) {
            return res.status(404).json({message : "No contacts found"})
        }
        return res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
} 


const deleteUser = async (req, res, next) => {
    const userId = req.params.id;   
    try {
        const deletedUser = await user.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({message : "User not found"});
        }
        return res.status(200).json({message : "User deleted successfully"});
    } catch (error) {
        next(error);
    }
}



const updateUser = async (req, res, next) => {
    const userId = req.params.id;
    const { username, email, phone } = req.body;

    try {
        const updatedUser = await user.findByIdAndUpdate(userId,
            { username, email, phone },
            { new: true, runValidators: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        next(error);
    }
}

const deleteContact = async (req, res, next) => {
    const contactId = req.params.id;
    try {
        const deletedContact = await contact.findByIdAndDelete(contactId);
        if (!deletedContact) {
            return res.status(404).json({ message: "Contact not found" });
        }
        return res.status(200).json({ message: "Contact deleted successfully" });
    } catch (error) {
        next(error);
    }
}

module.exports = { getAllUsers, getAllContacts, deleteUser, updateUser, deleteContact };