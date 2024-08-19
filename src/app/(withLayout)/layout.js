// components/Layout.js
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full">{children}</main>
    </div>
  );
};

export default Layout;
