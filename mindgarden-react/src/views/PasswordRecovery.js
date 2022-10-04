import React, { useState } from "react";

import AuthBar from "../components/dashboard/auth/AuthBar";
import AuthPasswordRecoveryForm from "../components/dashboard/auth/AuthPasswordRecoveryForm";

function PasswordRecovery(){
    const [email, setEmail] = useState("");

    return (
        <>
            <AuthBar />
            <AuthPasswordRecoveryForm email={email} setEmail={setEmail}/>
        </>
    );
}

export default PasswordRecovery;
