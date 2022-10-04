import { Navbar, Button, Menu, Link } from 'react-daisyui';

function LandingBar(){
    return (
        <div className="flex w-full component-preview items-center justify-center font-sans">
            <Navbar className='bg-gray-900 text-neutral-content'>
                <Navbar.Start>
                    <Link href="/">
                    <Button className="text-xl normal-case" color="ghost">
                        <img src="/img/logo.svg" alt="MindGarden" className="w-10 h-10 text-white p-2"/>
                        MindGarden
                    </Button>
                    </Link>
                </Navbar.Start>
                <Navbar.Center>
                    <Menu horizontal className="p-0">
                        <Menu.Item>
                            <Link href="#about">About</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href="#our-mission">Our Mission</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href="#contact">Contact</Link>
                        </Menu.Item>
                    </Menu>
                </Navbar.Center>
                <Navbar.End>
                    <Button color="info" href="login">Go to Dashboard</Button>
                </Navbar.End>
            </Navbar>
        </div>
    );
}

export default LandingBar;