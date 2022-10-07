import { Hero } from "react-daisyui";

function DashboardPassword({ selectedEntry }){
    return (
        <div>
            {selectedEntry ?
                <>
                    <Hero>
                        <Hero.Content>
                            <div className="flex-row text-center">
                                <h1 className="text-2xl font-bold">{selectedEntry.title}</h1>
                            </div>
                            <div className="flex-row text-center space-y-5">
                                <div className="flex flex-row space-x-5">
                                    <span className="font-bold">Entry</span>
                                    <p>{selectedEntry.entry}</p>
                                    <button>Copy</button>
                                </div>
                                <div className="flex flex-row space-x-5">
                                    <span className="font-bold">Date</span>
                                    <p>{selectedEntry.date}</p>
                                    <button>Copy</button>
                                </div>
                            </div>
                        </Hero.Content>
                    </Hero>
                </>
            :
                <Hero>
                    <Hero.Content>
                        <h1 className="text-2xl font-bold">No Entry selected</h1>
                    </Hero.Content>
                </Hero>
            }
        </div>
    );
}

export default DashboardPassword;