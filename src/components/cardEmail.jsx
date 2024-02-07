import { motion } from "framer-motion";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const variants = {
    open: { scale: 1 },
    closed: { scale: 0 },
};


export default function CardEmail({ info, click }) {
    const form = useRef();

    const validateForm = () => {
        const formData = new FormData(form.current);

        // Verificar si cada parte del formulario está llena correctamente
        if (
            formData.get('user_name') &&
            formData.get('user_email') &&
            formData.get('message')
        ) {
            return true;
        }

        return false;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (validateForm()) {
            emailjs.sendForm('service_4ukoxom', 'template_d2yfhzj', form.current, 'NhcDkzP71JyWoIIz3')
                .then((result) => {
                    form.current.reset()
                    window.confirm('Your email was sent correctly');
                })
                .catch((error) => {
                    window.confirm('Something went wrong, please try again.');
                });
        } else {
            alert('Please fill all the space correctly.');
        }
    };

    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={info ? "open" : "closed"}
            variants={variants}
            className="cardEmail"
        >
            <button onClick={click} className="cardEmail_buttonX">X</button>
            <div className="cardEmail_title">
                <h2>SEND ME AN EMAIL</h2>
            </div>
            <div className="cardEmail_content">
                    <form ref={form} onSubmit={sendEmail} className="cardEmail_content-field">
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" style={{ width: "80vh", height: "25vh" }} />
                        <input type="submit" value="Send" />
                    </form>
            </div>
        </motion.div>
    );
}