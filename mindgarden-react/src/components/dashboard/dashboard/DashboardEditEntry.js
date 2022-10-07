import { Modal, Input, Button, Textarea } from "react-daisyui";

function DashboardEditEntry({ handleToogleEditEntry, handleEditEntry, title, setTitle, entry, setEntry, feelingId, setFeelingId, feelings, selectedEntry }) {
    const handleChange = event => {
      console.log(event.target.value);
      setFeelingId(event.target.value);
    };
    console.log(selectedEntry);
    return (
        <Modal open={handleToogleEditEntry} onClickBackdrop={handleToogleEditEntry}>
            <Modal.Header className="font-bold">
                Edit Entry
            </Modal.Header>
        
            <Modal.Body className="items-center text-center">
                <div className="space-y-6">
                    <Input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full text-sm text-white px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400" type="text" placeholder="Title"></Input>
                    <Textarea value={entry} onChange={(e) => setEntry(e.target.value)} className="w-full text-sm text-white px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400" type="text" placeholder="Content"></Textarea>
                    <select value={feelingId[0]} onChange={handleChange} className="w-full text-sm text-white px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400">
                        {feelings.map(feeling => (
                            <option key={feeling.id} value={feeling.id}>
                                {feeling.name}
                            </option>
                        ))}
                    </select>
                    <Button onClick={handleEditEntry} type="submit" className="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500">
                        Edit Entry
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default DashboardEditEntry;