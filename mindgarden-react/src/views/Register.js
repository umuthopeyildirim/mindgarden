import { useState } from "react";
import AuthBar from "../components/dashboard/auth/AuthBar";
import AuthRegisterForm from "../components/dashboard/auth/AuthRegisterForm";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Register(){
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const MySwal = withReactContent(Swal)

    function handleRegister(){
        if(name === "" || username === "" || email === "" || password === ""){
            MySwal.fire({
                title: <p>Empty Fields</p>,
                text: "Please fill in all the fields",
                icon: "error",
                confirmButtonText: "Ok"
            })
        }
        else{
            fetch(process.env.REACT_APP_API_URL+"/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    username: username,
                    email: email,
                    password: password
                })
            })
            .then(res => res.json())
            .then(data => {
                if(data.id !== undefined){
                    localStorage.setItem("id", data.id);
                    window.location.href = "/dashboard";
                }else{
                    MySwal.fire({
                        title: "Error",
                        text: "There was a problem on our end, please try again later",
                        icon: "error",
                        confirmButtonText: "Ok"
                    })
                }
            })
        }
    }

    return (
        <>
            <AuthBar />
            <AuthRegisterForm name={name} setName={setName} username={username} setUsername={setUsername} email={email} setEmail={setEmail} password={password} setPassword={setPassword} register={handleRegister} />
        </>
    );
}

export default Register;