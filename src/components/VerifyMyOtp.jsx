import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export default function VerifyMyOtp() {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        if (element.nextSibling && element.value) {
            element.nextSibling.focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userOtp = otp.join("");

        try {
            const token = localStorage.getItem('token');

            const response = await axios.post(
                'http://localhost:3001/api/verify-otp',
                { otp: userOtp },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                toast.success("Otp Has Been Verified! You Will Be redirected to Dashboard Soon");
                setTimeout(() =>{
                    navigate('/dashboard');
                }, 1500)
            } else {
                setError(response.data.msg);
            }
        } catch (err) {
            toast.error(`Error: ${err}`);
            setError("Failed to verify OTP. Please try again.");
            console.error("OTP Verification Error:", err);
        }
    };

    return (
        <>
            <Toaster position="top-right"
                     reverseOrder={false}/>
            <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-12">
                <div className="relative px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl bg-white">
                    <div className="mx-auto flex w-full max-w-md flex-col space-y-16 ">
                        <div className="flex flex-col items-center justify-center text-center space-y-2">
                            <div className="font-semibold text-3xl">
                                <p>Email Verification</p>
                            </div>
                            <div className="flex flex-row text-sm font-medium text-gray-400">
                                <p>Please Provide the OTP Sent To Your Email</p>
                            </div>
                        </div>

                        {error && <div className="text-red-500 text-center">{error}</div>}

                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col space-y-16">
                                    <div className="flex flex-row items-center justify-between mx-auto w-full">
                                        {otp.map((data, index) => (
                                            <div className="w-16 h-16" key={index}>
                                                <input
                                                    className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                                    type="text"
                                                    name="otp"
                                                    maxLength="1"
                                                    value={data}
                                                    onChange={(e) => handleChange(e.target, index)}
                                                    onFocus={(e) => e.target.select()}
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-col space-y-5">
                                        <div>
                                            <button
                                                type="submit"
                                                className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                                                Verify OTP
                                            </button>
                                        </div>

                                        <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                            <p>Didn't receive code?</p>
                                            <a className="flex flex-row items-center text-blue-600" href="#" onClick={() => alert("Resend OTP functionality")}>
                                                Resend
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
