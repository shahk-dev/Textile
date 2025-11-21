import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Header() {
  return (
    <header className="sticky top-0 z-[1000] bg-white">
      <div className="hidden sm:block">
        <Navbar />
      </div>
      <div className="sm:hidden">
        <Sidebar />
      </div>
    </header>
  );
}
