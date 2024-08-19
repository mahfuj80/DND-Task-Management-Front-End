// components/Layout.js
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="">{children}</main>
    </div>
  );
};

export default Layout;
