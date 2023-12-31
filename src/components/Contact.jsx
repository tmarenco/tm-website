import { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { Loading } from './Loading';

const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta.env;

export const Contact = () => {

    const form = useRef();
    const [isLoading, setIsLoading] = useState(false)

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const sendEmail = () => {
        setIsLoading(true)
        console.log(errors)
        emailjs.sendForm(VITE_SERVICE_ID, VITE_TEMPLATE_ID, form.current, VITE_PUBLIC_KEY)
            .then((result) => {
                console.log(result);
                setIsLoading(false)
                toast.success("Email sent!");
                reset();
            }, (error) => {
                setIsLoading(false)
                console.log(error);
                toast.error("An error ocurred while sending your email, please try again");
            });
    };


    return (
        <>
            <section id='contact' className="d-flex align-items-center justify-content-center min-vh-100 sect">
                <div className="w-75">
                    <div className='text-center my-5'>
                        <h1 className="title">CONTACT</h1>
                        <p>Feel free to contact me!</p>
                    </div>
                    <div className="row">
                        <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                            <div className="row">
                                <div className="col-6 col-12">
                                    <label>Name</label>
                                    <input placeholder="Enter your name" type="text" className="" name="userName" {...register("userName", { required: true })}/>
                                    {errors.userName && <span className='text-danger fw-bold'>Name is required</span>}
                                </div>
                                <div className="col-12 mt-5">
                                    <label>Email</label>
                                    <input 
                                        type="email" 
                                        className="" 
                                        name="email" {...register("email", { required: true })}
                                        placeholder="Enter your email"
                                    />
                                    {errors.email && <span className='text-danger fw-bold'>Email is required</span>}
                                </div>
                                <div className="col-12 mt-3 mt-5">
                                    <label>Message</label>
                                    <textarea placeholder="Enter your awesome message" type="text" className="" name="message" {...register("message", { required: true })}/>
                                    {errors.message && <span className='text-danger fw-bold'>Message is required</span>}
                                </div>
                                {
                                    isLoading ? 
                                    <Loading /> : 
                                    <div className="col-12 text-center mt-5">
                                        <button 
                                            type="submit" 
                                            className='btn-send'
                                        >
                                            SEND
                                        </button>
                                    </div>
                                }
                                <ToastContainer
                                    position="bottom-right"
                                    autoClose={3000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    theme="light"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
