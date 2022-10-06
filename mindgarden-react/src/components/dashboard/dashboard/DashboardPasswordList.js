import { Button } from "react-daisyui";
import { GiNotebook } from "react-icons/gi";

function DashboardPasswordLi({ entries, handleSelectedEntry} ) {
    const CapitalizeFirstLetter = (str) => {
        return str.length ? str.charAt(0).toUpperCase() + str.slice(1) : str;
    };

    return (
        <>
            {entries.map((element, key) => {
                return (
                <li key={key} onClick={() => handleSelectedEntry(key)}>
                    <Button color="accent" className="menu-link w-full">
                    <div className="flex justify-between">
                        <div className="flex text-white">
                        <GiNotebook className="text-2xl mr-2" />
                        <h1 className="text-lg font-semibold">
                            {CapitalizeFirstLetter(element.title)}
                        </h1>
                        </div>
                    </div>
                    </Button>
                </li>
                );
            })}
        </>
    );
}

function DashboardPasswordList({ entries, handleSelectedEntry, handleToogleAddNewEntry }) {
  return (
    <>
      <div className="bg-slate-50 text-gray-800 max-w-screen-md w-2/6 h-screen px-6 py-6 border-t border-r space-y-2.5">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Entries</h1>
          <button
            onClick={handleToogleAddNewEntry}
            className="bg-slate-500 text-white rounded-md px-4 py-2"
          >
            Add Entry
          </button>
        </div>
        <div className="flex justify-between">
        </div>
        <article className="h-[90%] overflow-scroll">
          <ul className="bg-slate-50 flex flex-col space-y-3">
            {   entries?
                DashboardPasswordLi({ entries, handleSelectedEntry})
                :
                <div className="flex col">
                    <h1 className="text-2xl text-center">No entry found</h1>
                </div>
            }
          </ul>
        </article>
      </div>
    </>
  );
}

export default DashboardPasswordList;
