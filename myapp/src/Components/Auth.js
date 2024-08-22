import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Auth() {
    const navigate = useNavigate();
    useEffect(() => {
        var path = window.location.pathname;
        if (path === '/myprofile' || path === "/course" || path == "/material" || path == "/module" || path == "/home" || path == "/user") {
            if (!localStorage.getItem("token") || localStorage.getItem("role") != "admin") {
                navigate("/");
            }
        }
        else if (path == '/userprofile' || path == "/course" || path == "/material" || path == "/module") {
            if (!localStorage.getItem("token") || localStorage.getItem("role") != "user") {
                navigate("/myprofile");
            }
        }
        else {
            if (localStorage.getItem("role") === "user") {
                navigate("/myprofile");
            }
            else if (localStorage.getItem("role") === "admin") {
                navigate("/myprofile");
            }
            else {
                navigate("/");
            }
        }
    }, [])
    return (
        <div></div>
    )
}

export default Auth;
