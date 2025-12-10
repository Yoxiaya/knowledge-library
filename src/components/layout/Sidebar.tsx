import { NavLink } from "react-router-dom";

const menu = [
  {
    category: "JavaScript",
    items: [
      { name: "防抖", path: "/js/debounce" },
      { name: "节流", path: "/js/throttle" },
      { name: "深拷贝", path: "/js/deepclone" },
    ],
  },
  {
    category: "Browser",
    items: [
      { name: "Event Loop", path: "/browser/event-loop" },
    ],
  },
  {
    category: "React",
    items: [
      { name: "useEffect Demo", path: "/react/use-effect" },
    ],
  },
];

export default function Sidebar() {
  return (
    <div className="w-64 border-r p-4 overflow-auto">
      {menu.map((block) => (
        <div key={block.category} className="mb-6">
          <h2 className="text-lg font-bold mb-2">{block.category}</h2>
          <ul className="space-y-2">
            {block.items.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    "block px-2 py-1 rounded " +
                    (isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200")
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
