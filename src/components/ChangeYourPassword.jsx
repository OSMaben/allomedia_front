import React, { useState, useEffect } from "react";
import {useParams,useNavigate } from 'react-router-dom';
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';



const PasswordChangePage = () => {
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [errors, setErrors] = useState({});
    const { token } = useParams();
    const [newPassword, setNewPassword] = useState("");
    const nav = useNavigate();


    const validatePassword = (password) => {


        const rules = [
            { regex: /.{8,}/, message: "At least 8 characters" },
            { regex: /[A-Z]/, message: "At least one uppercase letter" },
            { regex: /[a-z]/, message: "At least one lowercase letter" },
            { regex: /[0-9]/, message: "At least one number" },
            { regex: /[^A-Za-z0-9]/, message: "At least one special character" },
        ];

        const passedRules = rules.filter((rule) => rule.regex.test(password));
        setPasswordStrength((passedRules.length / rules.length) * 100);

        return passedRules.length === rules.length;
    };

    useEffect(() => {
        const newErrors = {};

        if (newPassword && !validatePassword(newPassword)) {
            newErrors.newPassword = "Password does not meet all requirements";
        }

        if (confirmPassword && newPassword !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);
    }, [newPassword, confirmPassword]);

    const handleSubmit =async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3001/api/changePassword/${token}`, { newPassword });
            console.log(response.data);
            toast.success('Password has been successfully changed!');
           setTimeout(() =>{
               nav('/signin');
           },1500)
        } catch (err) {
            toast.error('Failed to change the password. Please try again.');
            console.error(err);
        }
    };

    return (
        <>
            <Toaster position="top-right"
                     reverseOrder={false}/>
        <div className="min-h-screen flex items-center justify-center  from-blue-500 to-purple-600 p-4">
            <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Change Password</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                            New Password
                        </label>
                        <input
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            aria-label="New Password"
                        />
                        {errors.newPassword && (
                            <p className="mt-2 text-sm text-red-600">{errors.newPassword}</p>
                        )}
                        <div className="mt-2">
                            <div className="bg-gray-200 h-2 rounded-full">
                                <div
                                    className={`h-full rounded-full ${passwordStrength < 33 ? 'bg-red-500' : passwordStrength < 66 ? 'bg-yellow-500' : 'bg-green-500'}`}
                                    style={{ width: `${passwordStrength}%` }}
                                ></div>
                            </div>
                            <p className="text-xs text-gray-600 mt-1">
                                Password strength: {passwordStrength < 33 ? 'Weak' : passwordStrength < 66 ? 'Medium' : 'Strong'}
                            </p>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confirm New Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            aria-label="Confirm New Password"
                        />
                        {errors.confirmPassword && (
                            <p className="mt-2 text-sm text-red-600">{errors.confirmPassword}</p>
                        )}
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                        >
                            Update Password
                        </button>
                    </div>
                </form>

                <div className="mt-6">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Password Requirements:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                        <li>At least 8 characters</li>
                        <li>At least one uppercase letter</li>
                        <li>At least one lowercase letter</li>
                        <li>At least one number</li>
                        <li>At least one special character</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
};

export default PasswordChangePage;
