import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Header() {
    return (
        <header>
            <div className="hidden sm:block">
                <Navbar />
            </div>
            <div className="sm:hidden">
                <Sidebar />
            </div>
        </header>
    )
}