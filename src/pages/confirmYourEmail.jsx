import {Link} from "react-router-dom";

function   ConfirmYourEmail() {

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="confirm-email-container flex items-center justify-center  flex-col">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1057/1057241.png"
                    alt="Email Sent"
                    className="confirm-email-icon "
                />

                <h1 className="confirm-email-title">Check Your Inbox</h1>

                <p className="confirm-email-message">
                    A confirmation email has been sent to your inbox. Please check your email and follow the
                    instructions to activate your account.
                </p>
                <Link to={'/'} className="btn">Back to Home</Link>
            </div>
        </div>
    )


}


export default ConfirmYourEmail;