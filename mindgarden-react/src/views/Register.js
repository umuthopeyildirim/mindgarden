import { useState } from "react";
import AuthBar from "../components/dashboard/auth/AuthBar";
import AuthRegisterForm from "../components/dashboard/auth/AuthRegisterForm";

function Register(){
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <AuthBar />
            <AuthRegisterForm name={name} setName={setName} username={username} setUsername={setUsername} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
        </>
    );
}

export default Register;