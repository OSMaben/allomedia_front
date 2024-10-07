import {Link} from "react-router-dom";

export default function EmailHasBeenVerified() {

    return (
        <div className="flex items-center justify-center h-screen ">
            <div className="Holder">
                <h1>Congratulations!</h1>
                <p>Your email has been successfully verified.</p>
                <p>You can now log in and access all features of our platform.</p>
                <Link to={'/auth/login'}>Go to Login</Link>
            </div>
        </div>
    )
}