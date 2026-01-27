type SidebarProps = {
  isOpen: boolean;
  onToggle: (open: boolean) => void;
};

function Sidebar({ isOpen, onToggle }: SidebarProps) {
  return (
    <div
      onMouseEnter={() => onToggle(true)}
      onMouseLeave={() => onToggle(false)}
      className={`
        h-full flex flex-col bg-purple-500/10 text-black
        transition-all duration-300 ease-in-out
        ${isOpen ? "w-64" : "w-16"}
      `}
    >
      <div className="p-4">sidebar</div>
    </div>
  );
}

export default Sidebar;
