/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState, type JSX } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = (): JSX.Element => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) setSidebarOpen(false);
  }, []);

  return (
    <div className="h-screen grid grid-cols-[auto_1fr] overflow-hidden">
      <aside
        className={`
          h-screen transition-all duration-200
          ${sidebarOpen ? "w-44" : "w-20 md:w-20"}
        `}
      >
        <Sidebar isOpen={sidebarOpen} onToggle={setSidebarOpen} />
      </aside>

      {/* Main content area */}
      <div className="grid grid-rows-[auto_1fr] overflow-hidden">
        <Header />
        <main className="max-h-full overflow-auto ">
          <div className="max-w-8xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
