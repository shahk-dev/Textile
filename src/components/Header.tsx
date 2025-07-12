import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <Topbar />
      <div className="hidden sm:block">
        <Navbar />
      </div>
      <div className="sm:hidden">
        <Sidebar />
      </div>
    </header>
  );
}
