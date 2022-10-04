import { useState } from "react";
import AuthBar from "../components/dashboard/auth/AuthBar";
import AuthLoginForm from "../components/dashboard/auth/AuthLoginForm";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <AuthBar />
            <AuthLoginForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
        </>
    );
}

export default Login;