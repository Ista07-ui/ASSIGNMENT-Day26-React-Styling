const MainNav = () => {
  // ];
  return (
    <nav className="bg-surface-light shadow-md px-6 py-4 lg:px-[2rem]">
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-20 w-20 items-center justify-center rounded-full ">
            <img src="/assets/logo.png" alt="Logo" />
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
