import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import  rocket from '../assets/images/rocket.gif';


export default function ForgetPassword() {
    const [email, setEmail] = useState("");
    const nav = useNavigate();
    const [isSent, setIsSent] = useState(false);
    const handleValueChange = (e) => {
        setEmail(e.target.value);
    };

    const handleFormSubmission = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/api/reset-password', { email });
            console.log(response.data);
            toast.success('A password reset link has been sent to your email!');

            setIsSent(true);
        } catch (err) {
            if (err.response && err.response.data) {
                setIsSent(false);

                toast.error(err.response.data.msg || 'Something went wrong!');
            } else {
                setIsSent(false);

                toast.error('Network error or unexpected error occurred!');
            }
            console.log(err);
        }
    };

    return (
        <>
            <Toaster />
            <div className="flex items-center justify-center w-full h-[100vh] ">
                <div className="w-[40rem] mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">


                    {isSent ?
                        (
                            <div className="my-10  text-center">
                                <img src={rocket} className='w-[6rem] m-auto'/>
                                <div className="flex flex-col space-y-5">
                                    <h1 className="text-4xl font-medium">Email has Been Sent</h1>
                                    <p className="text-slate-500">Please Click The link  in your Inbox  to  change  your password</p>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <h1 className="text-4xl font-medium">Reset Password</h1>
                                <p className="text-slate-500">Fill up the form to reset the password</p>
                                <form method="POST" onSubmit={handleFormSubmission} className="my-10">
                                    <div className="flex flex-col space-y-5">
                                        <label htmlFor="email">
                                            <p className="font-medium text-slate-700 pb-2">Email Address</p>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={email}
                                                onChange={handleValueChange}
                                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                                placeholder="Enter email address"
                                                required
                                            />
                                        </label>

                                        <button
                                            type="submit"
                                            className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth="1.5"
                                                 stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"/>
                                            </svg>
                                            <span>Reset Password</span>
                                        </button>
                                        <p className="text-center">
                                            Not registered yet?
                                            <a href="/auth/signup"
                                               className="text-indigo-600 font-medium inline-flex space-x-1 items-center">
                                                <span>Register now</span>
                                                <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
                                             viewBox="0 0 24 24"
                                             stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                        </svg>
                                    </span>
                                            </a>
                                        </p>
                                    </div>
                                </form>
                            </div>

                        )
                    }
                </div>
            </div>
        </>
    );
}
