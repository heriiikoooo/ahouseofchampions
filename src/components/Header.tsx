import React, { useState } from 'react'

const Header = () => {
    const [open, setOpen] = useState(null);

    const navItems = [
        {
            name: "About",
            submenu: ["Our Mission", "Our Vision", "Core Values", "Locations"],
        },
        {
            name: "Next Steps",
            submenu: ["Salvation", "Water Baptism", "Small Groups", "Outreache"],
        },
        {
            name: "Events",
            submenu: null,
        },
        {
            name: "Care",
            submenu: ["Care", "Prayer Request", "Counseling"],
        },
        {
            name: "Give",
            submenu: null,
        },
        {
            name: "Sermons",
            submenu: ["Sermons", "Podcast", "Watch Live"],
            align: "right",
        },
    ];


    return (
        <div className='absolute top-0 px-30 w-full'>

        
        <nav className="flex items-baseline justify-between py-10 pb-4 border-white border-b-1 z-10 relative">
            <h3 className='font-bold text-3xl text-white'>A House of Champions</h3>
            <ul className="flex gap-10 group  ">
                {navItems.map((item, index) => (
                    <li
                        key={item.name}
                        className="relative"
                        onMouseEnter={() => setOpen(index)}
                        onMouseLeave={() => setOpen(null)}
                    >
            {/* Main Link */}
            <a
              href="#"
              className="
                relative font-medium text-white transition-all duration-500

                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-full after:bg-white
                after:scale-x-0 after:origin-center
                after:transition-transform after:duration-500
                hover:after:scale-x-100
              "
            >
              {item.name}
            </a>

            {/* Dropdown */}
            {item.submenu && (
              <div
                className={`
                  absolute top-full mt-6 w-48 bg-white shadow-lg rounded-md
                  transition-all duration-500 border border-gray-200
                  ${item.align === "right" ? "right-0" : "left-0"}
                  ${
                    open === index
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 translate-y-2 invisible"
                  }
                `}
              >
                <ul className="py-2">
                  {item.submenu.map((sub) => (
                    <li key={sub}>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm hover:bg-gray-100 transition"
                      >
                        {sub}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
    </div>
    )
}

export default Header
