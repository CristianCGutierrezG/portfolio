import { motion } from "framer-motion";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const variants = {
    open: { scale: 1 },
    closed: { scale: 0 },
};

export default function CardEmail({info, click}) {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4ukoxom', 'template_d2yfhzj', form.current, 'NhcDkzP71JyWoIIz3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
             });
    };

    return(
        <motion.div
        initial={{ scale: 0 }}
        animate={info ? "open" : "closed"}
        variants={variants}
        className="cardEmail"
        >
            <button onClick={click}>X</button>
            <div className="cardEmail_title">
                <h2>SEND ME AN EMAIL</h2>
            </div> 
            <div className="cardPage_content">
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </motion.div>
    );
}