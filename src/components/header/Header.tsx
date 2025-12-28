import TopNav from "@/components/TopNav";
import MainNav from "@/components/MainNav";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-surface-light shadow">
      <TopNav />
      <MainNav />
    </header>
  );
};
export default Header;
