import { NavLink } from "react-router-dom";
import { IoHome, IoSettingsSharp } from "react-icons/io5";
import { GiProgression } from "react-icons/gi";
import { FaChessKnight } from "react-icons/fa";

type SidebarProps = {
  isOpen: boolean;
  onToggle: (open: boolean) => void;
};

function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const links = [
    { name: "Home", to: "/", icon: <IoHome size={25} /> },
    {
      name: "Training Mode",
      to: "/training-mode",
      icon: <FaChessKnight size={25} />,
    },
    { name: "Progress", to: "/progress", icon: <GiProgression size={25} /> },
    { name: "Settings", to: "/settings", icon: <IoSettingsSharp size={25} /> },
  ];

  return (
    <div
      onMouseEnter={() => onToggle(true)}
      onMouseLeave={() => onToggle(false)}
      className={`
        h-full flex flex-col bg-purple-500/10 text-black
        transition-all duration-250 ease-in-out
        ${isOpen ? "w-44" : "w-20"}
      `}
    >
      <div className="p-4 mt-20">
        <nav>
          <ul className="flex flex-col gap-5 text-stone-700 tracking-tight">
            {links.map(({ name, to, icon }) => (
              <li key={name}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center justify-center py-2 rounded-xl backdrop-blur-sm bg-purple-200/30 hover:bg-purple-700/50 hover:shadow-lg transition-all
                    ${isActive ? "text-white shadow-sm border-purple-700/50 bg-purple-700/50" : "border-none"}`
                  }
                >
                  {isOpen ? <div className="flex items-center justify-between gap-2 text-sm w-full px-2"><div>{icon}</div> <div className="flex justify-start font-semibold w-full">{name}</div></div> : icon}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
