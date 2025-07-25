const { z } = require('zod');


const loginSchema = z.object({
    email: z.string({required_error: "Email is required"}).trim().email({ message: "Invalid Email Address" }).min(3, "Email must be at least 3 characters long").max(255, "Email must not exceed 255 characters"),
     password: z.string({required_error: "Password is required"}).trim().min(7, "Password must be at least 7 characters long").max(1024, "Password must not exceed 1024 characters"),
})


const signUpSchema = loginSchema.extend({
    username: z.string({required_error: "Username is required"}).trim().min(3, "Username must be at least 3 characters long").max(255, "Username must not exceed 255 characters"),
    phone: z.string({required_error: "phone is required"}).trim().min(10, "Phone must be at least 10 characters long").max(10, "Phone must not exceed 20 characters"),
});

module.exports = { signUpSchema, loginSchema};