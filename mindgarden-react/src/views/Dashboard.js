import { useState, useEffect } from "react";

import DashboardBar from "../components/dashboard/DashboardBar";
import DashboardFooter from "../components/dashboard/DashboardFooter";
import DashboardPasswordList from "../components/dashboard/dashboard/DashboardPasswordList";
import DashboardPassword from "../components/dashboard/dashboard/DashboardPassword";
import DashboardAddNewPasswordModal from "../components/dashboard/dashboard/DashboardAddNewPasswordModal";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function Landing(){
    const [title, setTitle] = useState("");
    const [entry, setEntry] = useState("");
    const [userId, setUserId] = useState("");
    const [feelingId, setFeelingId] = useState("");
    const [entries, setEntries] = useState([]);
    const [feelings, setFeelings] = useState([]);
    const [selectedEntry, setSelectedEntry] = useState(null);
    const [toogleAddNewEntry, setToogleAddNewEntry] = useState(false);
    const MySwal = withReactContent(Swal)

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
        })

        fetch("http://localhost:9292/feelings")
        .then((response) => response.json())
        .then((data) => {
            setFeelings(data);
        });

        // Set user id from local storage
        setUserId(localStorage.getItem("id"));
    }, []);

    const handleAddNewPassword = () => {
        fetch("http://localhost:9292/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                entry: entry,
                user_id: userId,
                feeling_id: feelingId
            })
        })
        .then(res => res.json())
        .then(data => {
            setEntries([...entries, data]);
            setToogleAddNewEntry(false);
            MySwal.fire({
                title: "Success",
                text: "Entry added successfully",
                icon: "success",
                confirmButtonText: "Ok"
            })
        })
    }

    const handleSelectedEntry = (key) => {
        setSelectedEntry(entries[key]);
        console.log(selectedEntry)

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
                <DashboardPasswordList entries={entries} handleSelectedEntry={handleSelectedEntry} handleToogleAddNewEntry={handleToogleAddNewEntry} />
                <DashboardPassword selectedEntry={selectedEntry} />
                {
                    toogleAddNewEntry ? 
                        <DashboardAddNewPasswordModal handleToogleAddNewEntry={handleToogleAddNewEntry} handleAddNewPassword={handleAddNewPassword} title={title} setTitle={setTitle} entry={entry} setEntry={setEntry} feelingId={feelingId} setFeelingId={setFeelingId} feelings={feelings}/> 
                    : 
                        null
                }
            </div>
            <DashboardFooter /> 
        </>
    );
}

export default Landing;