import { useState } from "react";
import AuthBar from "../components/dashboard/auth/AuthBar";
import AuthLoginForm from "../components/dashboard/auth/AuthLoginForm";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const MySwal = withReactContent(Swal)

    function handleSignin(){
        if(email === "" || password === ""){
            MySwal.fire({
                title: <p>Empty Fields</p>,
                text: "Please fill in all the fields",
                icon: "error",
                confirmButtonText: "Ok"
            })
        }else{
            MySwal.fire({
                title: <p>Success</p>,
                text: "You have successfully logged in",
                icon: "success",
                confirmButtonText: "Ok"
            })
        }
    }

    return (
        <>
            <AuthBar />
            <AuthLoginForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} signin={handleSignin} />
        </>
    );
}

export default Login;