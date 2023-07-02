
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contact from '../assets/contact.json'
import Lottie from "lottie-react";
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_eeunz0b', 'template_80ckk3o', form.current, 'rrY-07FCTyqhQ6aFW')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    const handleSubmit = () => {

        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Mail Sent',
            showConfirmButton: false,
            timer: 1500
        })

    }
    return (
        <div className='h-screen text-black'  data-aos="zoom-in-up">
            <Helmet><title>Portfolio | Contact</title></Helmet>
            <p className='text-center text-purple-600 text-3xl py-8'>
                Get in Touch
            </p>
            <div className='md:flex md:flex-row  gap-2'>

                <div className='w-full'>
                    <Lottie className='md:w-[80%] w-full ' animationData={contact} loop={true} />
                </div>
                <div className='md:w-3/4 w-full md:px-15 text-black'>
                    <form ref={form} onSubmit={sendEmail} className='space-y-4'>
                        <label className='flex flex-col'><span className='pb-2 font-semibold'>Name </span>
                            <span ><input type="text" placeholder='name' required name="user_name" className='py-2  px-4 rounded-lg  border-2 hover:border-orange-600 border-orange-300  bg-transparent' /></span>
                        </label>
                        <label className='flex flex-col'><span className='pb-2 font-semibold'>Email </span>
                            <span><input type="email" placeholder='email' required name="user_email" className='py-2 px-4 rounded-lg  border-2 hover:border-orange-600 border-orange-300  bg-transparent' /></span>
                        </label>
                        <label className='flex flex-col'><span className='pb-2 font-semibold'>Message</span>
                            <span><textarea name="message" required className='py-2 px-4 rounded-lg border-2 hover:border-orange-600 border-orange-300  bg-transparent' /></span>

                        </label>
                        <input onClick={handleSubmit} className='py-2 px-4 rounded-lg border-2 hover:bg-orange-600 hover:border-orange-600 border-orange-300  bg-transparent' type="submit" value="Send" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;