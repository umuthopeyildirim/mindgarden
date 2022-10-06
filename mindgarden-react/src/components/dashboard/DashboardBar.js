import { Navbar, Button, Link, Dropdown } from 'react-daisyui';

function DashboardBar({ logout, page }){
    return (
        <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
            <Navbar>
                <Navbar.Start>
                    <Link href="/dashboard">
                    <Button className="text-xl normal-case" color="ghost">
                        <img src="/img/logo-blue.svg" alt="MindGarden" className="w-10 h-10 text-white p-2"/>
                        MindGarden
                    </Button>
                    </Link>
                </Navbar.Start>
                    <h1 className="text-2xl font-semibold select-none">{page}</h1>
                <Navbar.End>
                    <Dropdown vertical="end">
                        <Button color="ghost" className="avatar" shape="circle">
                            <div className="w-10 rounded-full">
                                <img referrerPolicy="no-referrer" alt="Profile" src="https://firebasestorage.googleapis.com/v0/b/mypassmanager-web.appspot.com/o/blank-profile-picture.webp?alt=media&token=033e7a31-e442-4619-a16c-6d09f6cbd6e9"/>
                            </div>
                        </Button>
                        <Dropdown.Menu className="w-52 menu-compact">
                            <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.End>
            </Navbar>
        </div>
    );
}

export default DashboardBar;