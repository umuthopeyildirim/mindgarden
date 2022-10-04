import { Hero, Avatar } from "react-daisyui";

function DashboardPassword({ selectedPassword }){
    // Get only domain from selectedPassword.url
    return (
        <Hero className="w-2/4">
            <Hero.Content className="text-center">
                <div className="max-w-md space-y-5">
                    {selectedPassword ?
                        <>
                            <div className="flex-row text-center">
                                <Avatar shape="square" referrerPolicy="no-referrer" src={"https://logo.clearbit.com/"+selectedPassword.url.replace(/(^\w+:|^)\/\//, '').split('/')[0]} alt="logo" className="mx-auto" />
                                <h1 className="text-2xl font-bold">{selectedPassword.url.replace(/(^\w+:|^)\/\//, '').split('/')[0]}</h1>
                            </div>
                            <div className="flex-row text-center space-y-5">
                                <div className="flex flex-row space-x-5">
                                    <span className="font-bold">Email Adress</span>
                                    <p>{selectedPassword.email}</p>
                                    <button>Copy</button>
                                </div>
                                <div className="flex flex-row space-x-5">
                                    <span className="font-bold">Password</span>
                                    <p>{selectedPassword.password}</p>
                                    <button>Copy</button>
                                </div>
                                <div className="flex flex-row space-x-5">
                                    <span className="font-bold">Website</span>
                                    <a href={selectedPassword.url} rel="noreferrer" target="_blank">{selectedPassword.url}</a>
                                    <button>Copy</button>
                                </div>
                            </div>
                        </>
                    :
                        <h1 className="text-2xl font-bold">No password selected</h1>
                    }
                </div>
            </Hero.Content>
        </Hero>
    );
}

export default DashboardPassword;