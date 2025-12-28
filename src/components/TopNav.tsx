const navLinks = [
  "Home",
  "About Us",
  "Location Us",
  "Best Seller",
  "Health Benefits",
];

const socialIcons = [
  { name: "Facebook", icon: "public/icons/bxl-facebook-square.png" },
  { name: "Instagram", icon: "public/icons/bxl-instagram-alt.png" },
  { name: "LinkedIn", icon: "public/icons/bxl-linkedin-square.png" },
  { name: "Tiktok", icon: "public/icons/bxl-tiktok.png" },
  { name: "Twitter", icon: "public/icons/bxl-twitter.png" },
];

const TopNav = () => {
  return (
    <nav className="bg-[#1EEA0F] flex justify-between items-center px-6 py-3 lg:px-20">
      {/* MENU */}
      <ul className="hidden lg:flex gap-6 text-[12px] font-semibold">
        {navLinks.map((item) => (
          <li
            key={item}
            className="
              px-3 py-2
              cursor-pointer
              text-[#111111]
              select-none
              transition-colors duration-200
              hover:text-[#5a3522]
              active:text-white
            "
          >
            {item}
          </li>
        ))}
      </ul>

      {/* MOBILE TITLE */}
      <span className="lg:hidden text-sm font-semibold text-[#111111]">
        Home
      </span>

      {/* SOCIAL ICONS */}
      <ul className="flex items-end gap-4">
        {socialIcons.map((item) => (
          <li
            key={item.name}
            className="
              group
              w-[18px] h-[18px]
              cursor-pointer
              transition-transform duration-150
              active:scale-95
            "
          >
            <img
              src={item.icon}
              alt={item.name}
              className="
                w-full h-full
                object-contain
                brightness-0
                transition duration-150
                group-active:brightness-100
              "
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopNav;
