import { Modal, Input, Button } from "react-daisyui";

function DashboardAddNewPasswordModal({ handleToogleAddNewPassword, handleAddNewPassword, setName, name, setEmail, email, setPassword, password, setUrl, url }) {
    return (
        <Modal open={handleToogleAddNewPassword} onClickBackdrop={handleToogleAddNewPassword}>
            <Modal.Header className="font-bold">
                Add New Password
            </Modal.Header>
        
            <Modal.Body className="items-center text-center">
                <div className="space-y-6">
                    <Input value={name} onChange={(e) => setName(e.target.value)} className=" w-full text-sm text-white px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400" type="text" placeholder="Name"></Input>
                    <Input value={url} onChange={(e) => setUrl(e.target.value)} className=" w-full text-sm text-white px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400" type="text" placeholder="URL"></Input>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} className=" w-full text-sm text-white px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400" type="email" placeholder="Email"></Input>
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} className=" w-full text-sm text-white px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400" type="text" placeholder="Password"></Input>
                    <Button onClick={handleAddNewPassword} type="submit" className="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500">
                        Add New Password
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default DashboardAddNewPasswordModal;