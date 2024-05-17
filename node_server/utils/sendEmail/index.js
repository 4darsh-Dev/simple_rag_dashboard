import nodemailer from "nodemailer";

export const sendEmail = async({email, subject, text})=>{
    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: process.env.MAIL_SECURE,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        } 
    })
    
    try{
        const user = await transport.sendMail({
            from: "Simple Rag DashBoard",
            to: email,
            subject: subject,
            html: text
        })
        console.log("Email sent successfully")
    }
    catch(error){
        console.log(error)
        throw error;
    }
}