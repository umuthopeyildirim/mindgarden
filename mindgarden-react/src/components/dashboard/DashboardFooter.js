import { Footer } from "react-daisyui";

function DashboardFooter(){
    return (
        <Footer className="p-10 bg-zinc-100">
            <div>
                <img src="/img/logo-blue.svg" alt="MindGarden" className="w-10 h-10 text-white"/>
                <p>
                    MindGarden
                    <br />
                    Providing reliable tech since 2002
                </p>
            </div>
    
            <div>
                <Footer.Title>Dashboard</Footer.Title>
                <a href="/dashboard" className="link link-hover">Dashboard</a>
                <a href="/profile" className="link link-hover">Profile</a>
                <a href="/Logout" className="link link-hover">Logout</a>
            </div>
            <div>
                <Footer.Title>Company</Footer.Title>
                <a href="/#about" className="link link-hover">About</a>
                <a href="/#contact" className="link link-hover">Contact</a>
            </div>
        </Footer>
    );
}

export default DashboardFooter;