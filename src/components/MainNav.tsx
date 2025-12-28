const MainNav = () => {
  // ];
  return (
    <nav className="bg-surface-light shadow-md px-6 py-4 lg:px-[2rem]">
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
            <img
              src="/src/public/assets/logo.png"
              alt="Logo"
              className="w-7 h-7 object-contain"
            />
          </div>
        </div>

        <div className="flex-1 max-w-xl mx-auto">
          <input
            className="w-full h-11 px-4 rounded-full bg-input-light"
            placeholder="🔍 Search smoothies & pastries..."
          />
        </div>

        <button className="lg:hidden text-2xl text-primary">☰</button>
      </div>
    </nav>
  );
};

export default MainNav;
