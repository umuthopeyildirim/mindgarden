import { useState, useEffect } from "react";

import DashboardBar from "../components/dashboard/DashboardBar";
import DashboardFooter from "../components/dashboard/DashboardFooter";
import DashboardPasswordList from "../components/dashboard/dashboard/DashboardPasswordList";
import DashboardPassword from "../components/dashboard/dashboard/DashboardPassword";
import DashboardAddNewPasswordModal from "../components/dashboard/dashboard/DashboardAddNewPasswordModal";

function Landing(){
    const [url, setUrl] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [entries, setEntries] = useState([]);
    const [selectedPassword, setSelectedPassword] = useState(null);
    const [toogleAddNewEntry, setToogleAddNewEntry] = useState(false);

    useEffect(() => {
        fetch("http://localhost:9292/entries/user/"+localStorage.getItem("id"), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(res => res.json())
        .then(data => {
            setEntries(data);
            console.log(data);
        })
    }, []);

    const handleSelectedPassword = (key) => {
        setSelectedPassword(entries[key]);
    }

    const handleToogleAddNewEntry = () => {
        setToogleAddNewEntry(!toogleAddNewEntry);
    }

    const handleLogout = () => {
        localStorage.removeItem("id");
        window.location.href = "/";
    }
    
    return (
        <>
            <DashboardBar logout={handleLogout} page="Dashboard"/>
            <div className="flex col">
                <DashboardPasswordList entries={entries} handleSelectedPassword={handleSelectedPassword} handleToogleAddNewEntry={handleToogleAddNewEntry} />
                <DashboardPassword selectedPassword={selectedPassword} />
                {
                    toogleAddNewEntry ? 
                        <DashboardAddNewPasswordModal handleToogleAddNewEntry={handleToogleAddNewEntry} setName={setName} name={name} setEmail={setEmail} email={email} setPassword={setPassword} password={password} setUrl={setUrl} url={url} /> 
                    : 
                        null
                }
            </div>
            <DashboardFooter /> 
        </>
    );
}

export default Landing;