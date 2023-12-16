import React, { useEffect } from 'react'
import { auth } from "../../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import userIcon from "../../assets/userIcon.png";

function Header() {

    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/dashboard")
        }
    }, [user, loading]);

    function logoutFnc() {
        try {
            signOut(auth).then(() => {
                // Sign-out successful.
                toast.success("Logged out successfully");
                navigate("/");
            }).catch((error) => {
                // An error happened.
                toast.error(error.message);
            });
        } catch (e) {
            toast.error(e.message);
        }
    }
    return (
        <div className="navbar">
            <p className="logo">Financely.</p>
            {user && (
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <img className="user-icon"
                        src={user.photoURL ? user.photoURL : userIcon}
                        style={{ borderRadius: "50%", height: "2rem", width: "2rem" }}
                    />
                    <p className="logo link" onClick={logoutFnc}>Logout</p>
                </div>
            )}

        </div>
    )
}

export default Header