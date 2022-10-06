import { Hero } from "react-daisyui";

function DashboardPassword({ selectedPassword }){
    console.log(selectedPassword);
    return (
        <Hero className="w-2/4">
            <Hero.Content className="text-center">
                <div className="max-w-md space-y-5">
                    {selectedPassword ?
                        <>
                            <div className="flex-row text-center">
                                <h1 className="text-2xl font-bold">{selectedPassword.title}</h1>
                            </div>
                            <div className="flex-row text-center space-y-5">
                                <div className="flex flex-row space-x-5">
                                    <span className="font-bold">Entry</span>
                                    <p>{selectedPassword.entry}</p>
                                    <button>Copy</button>
                                </div>
                                <div className="flex flex-row space-x-5">
                                    <span className="font-bold">Date</span>
                                    <p>{selectedPassword.date}</p>
                                    <button>Copy</button>
                                </div>
                            </div>
                        </>
                    :
                        <h1 className="text-2xl font-bold">No Entry selected</h1>
                    }
                </div>
            </Hero.Content>
        </Hero>
    );
}

export default DashboardPassword;