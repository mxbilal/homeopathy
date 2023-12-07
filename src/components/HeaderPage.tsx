import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Update isMobile state on window resize
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  // Attach resize event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sticky top-0 z-10 bg-white px-4 md:px-20 py-2 border-b-2 border-lime-700 flex justify-between items-center">
      {isMobile ? (
        <>
          <div className="flex gap-1">
            <p className="text-lg font-semibold cursor-pointer">
              Homeo Clinic +
            </p>
          </div>
          <div className="md:hidden">
            <button
              className="text-lime-700 hover:text-lime-600 focus:outline-none"
              onClick={handleDrawerToggle}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          {drawerOpen && (
            <>
              <div
                className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
                onClick={handleDrawerToggle}
              >
                {" "}
              </div>
              <div className="md:hidden fixed inset-y-0 right-0 bg-white w-64 p-4 z-30">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                <Link
                  to=""
                  className="block py-2 hover:text-lime-600"
                  onClick={handleDrawerToggle}
                >
                  Help Desk
                </Link>
                <Link
                  to=""
                  className="block py-2 hover:text-lime-600"
                  onClick={handleDrawerToggle}
                >
                  Emergency Services
                </Link>
                <Link
                  to=""
                  className="block py-2 hover:text-lime-600"
                  onClick={handleDrawerToggle}
                >
                  Appointment
                </Link>
              </div>
            </>
          )}
        </>
      ) : (
        <div className="flex gap-1">
          <p className="text-lg font-semibold cursor-pointer">Homeo Clinic +</p>
        </div>
      )}

      {!isMobile && (
        <div className="hidden md:block">
          <Link className="hover:text-lime-600" to="">
            Help Desk
          </Link>
          <Link className="hover:text-lime-600" to="">
            | Emergency Services
          </Link>
          <Link className="hover:text-lime-600" to="">
            | Appointment
          </Link>
        </div>
      )}
    </div>
  );
};

export default HeaderPage;
