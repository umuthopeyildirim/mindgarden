import { MdOutlineApps, MdFavorite, MdPermIdentity, MdPassword } from "react-icons/md";

function DashboardCategories(){
    return (
        <div className="bg-slate-50 text-gray-800 max-w-screen-md w-1/5 h-screen border-t border-r">
            <label className="drawer-overlay"></label> 
            <ul className="bg-slate-50 text-gray-800 menu p-4 overflow-y-auto" >
                <li>
                    <a><MdOutlineApps /> All Items</a>
                </li>
                <li>
                    <a><MdFavorite /> Favorites</a>
                </li>
                {/* <li>
                    <a><GiWhiteTower /> Watchtower</a>
                </li> */}
                <span className="font-semibold text-slate-500">Categories</span>
                <li>
                    <a><MdOutlineApps /> Logins</a>
                </li>
                <li>
                    <a><MdFavorite /> Credit Cards</a>
                </li>
                <li>
                    <a><MdPermIdentity /> Identities</a>
                </li>
                <li>
                    <a><MdPassword /> Passwords</a>
                </li>
            </ul>
        </div>
    );
}

export default DashboardCategories;