import { Outlet, Link, useLocation } from "react-router-dom";
const Layout = () => {
    const location = useLocation();
    return (
        <div className="md:flex md:min-h-screen">
            <aside className="md:w-1/4 bg-blue-600 px-5 py-10">
                <h2 className="text-white text-4xl text-center font-black">Menu</h2>

                <nav className="mt-10">
                    <Link to="/" className={`${location.pathname == '/' ? " text-blue-400": "text-white"}  text-xl block hover:text-blue-200 w-fit transition-all`}>Home</Link>
                    <Link to="/clients/new" className={`${location.pathname == '/clients/new' ? " text-blue-400": "text-white"}  text-xl block hover:text-blue-200 w-fit transition-all`}>New Client</Link>
                </nav>
            </aside>

            <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
                <Outlet />
            </main>
        </div>
  );
};

export default Layout;
