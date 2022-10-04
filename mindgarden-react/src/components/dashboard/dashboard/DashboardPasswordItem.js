import { Button } from "react-daisyui";
import { FaKey } from "react-icons/fa";

function DashboardPasswordItem({ setSelectedPassword, element, key }) {
    const CapitalizeFirstLetter = (str) => {
        return str.length ? str.charAt(0).toUpperCase() + str.slice(1) : str
    }
    return(
        <li  key={key} onClick={() => setSelectedPassword(key)}>
            <Button color="accent" className="menu-link w-full">
                <div className="flex justify-between">
                    <div className="flex text-white">
                        <FaKey className="text-2xl mr-2" />
                        <h1 className="text-lg font-semibold">{CapitalizeFirstLetter(element.name)}</h1>
                    </div>
                </div>
            </Button>
        </li>
    );
}

export default DashboardPasswordItem;