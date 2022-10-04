import { useState } from "react";
import {Hero} from "react-daisyui";

// import DashboardCategories from "./DashboardCategories";
import DashboardPasswordList from "./DashboardPasswordList";
import DashboardPassword from "./DashboardPassword";
import DashboardAddNewPasswordModal from "./DashboardAddNewPasswordModal";

function DashboardHero({ passwords, handleAddNewPassword, setName, name, setEmail, email, setPassword, password, setUrl, url }) {
    const [selectedPassword, setSelectedPassword] = useState(null);
    const [toogleAddNewPassword, setToogleAddNewPassword] = useState(false);

    const handleSelectedPassword = (key) => {
        setSelectedPassword(passwords.data().passwords[key]);
    }

    const handleToogleAddNewPassword = () => {
        setToogleAddNewPassword(!toogleAddNewPassword);
    }

    return (
        <div className="flex col">
            {/* <DashboardCategories /> */}
            {
                error ?
                handleToogleAddNewPassword()
                :
                <DashboardPasswordList passwords={passwords} setSelectedPassword={handleSelectedPassword} handleToogleAddNewPassword={handleToogleAddNewPassword}/>
            }
            {selectedPassword ? <DashboardPassword selectedPassword={selectedPassword}/> 
            : 
                <>
                    <Hero className="w-2/4">
                        <Hero.Content className="text-center">
                            <div className="max-w-md space-y-5">
                                <div className="flex-row text-center">
                                    <h1 className="text-2xl font-bold">No password is selected.</h1>
                                </div>
                            </div>
                        </Hero.Content>
                    </Hero>
                </>
            }
            {toogleAddNewPassword ? <DashboardAddNewPasswordModal handleToogleAddNewPassword={handleToogleAddNewPassword} handleAddNewPassword={handleAddNewPassword} setName={setName} name={name} setEmail={setEmail} email={email} setPassword={setPassword} password={password} setUrl={setUrl} url={url} /> : null}
        </div>
    );
}

export default DashboardHero;