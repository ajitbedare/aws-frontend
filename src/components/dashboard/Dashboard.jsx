
import React, { useState, useEffect } from "react";
import "./dashboard.css";
import Navbar from "../../Navbar";
import { Link,useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [repositories, setRepositories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

   const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");

    navigate("/login");
  };

  // Sidebar open / close
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    const fetchRepositories = async () => {
      try {
        const response = await fetch(
          `https://16.171.255.182:3002/repo/user/${userId}`
        );

        const data = await response.json();

        setRepositories(data.repositories);
      } catch (err) {
        console.error("Error while fetching repositories:", err);
      }
    };

    fetchRepositories();
  }, []);

  // Search repositories
  useEffect(() => {
    if (searchQuery === "") {
      setSearchResults(repositories);
    } else {
      const filterRepo = repositories.filter((repo) =>
        repo.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );

      setSearchResults(filterRepo);
    }
  }, [searchQuery, repositories]);

  return (
    <>
      <Navbar />

      {/* ================= SIDEBAR BUTTON ================= */}

      <button
        className="checkout-btn"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        ☰
      </button>


      {/* ================= SIDEBAR ================= */}

      {showSidebar && (
        <div className="dashboard-sidebar">

          <div className="sidebar-header">

            <h2>Menu</h2>

            <button
              className="close-btn"
              onClick={() => setShowSidebar(false)}
            >
              ✕
            </button>

          </div>


          <nav className="sidebar-links">

            {/* All Repository Page */}
            <Link
              to="/repositories"
              onClick={() => setShowSidebar(false)}
            >
              📁 All Repositories
            </Link>


            {/* Issues Page */}
            <Link
              to="/issues"
              onClick={() => setShowSidebar(false)}
            >
              🐛 Issues
            </Link>


            {/* Upcoming Events Page */}
            <Link
              to="/events"
              onClick={() => setShowSidebar(false)}
            >
              📅 Upcoming Events
            </Link>

              <button
    className="logout-btn"
    onClick={handleLogout}
  >
    🚪 Logout
  </button>


          </nav>

        </div>
      )}


      {/* ================= DASHBOARD ================= */}

      <section id="dashboard">

        <main>

          <h2>Your Repositories</h2>


          {/* Search */}

          <div id="search">

            <input
              type="text"
              value={searchQuery}
              placeholder="Search..."
              onChange={(e) =>
                setSearchQuery(e.target.value)
              }
            />

          </div>


          {/* Repository List */}

          {searchResults.map((repo) => {

            return (
              <div key={repo._id}>

                <h4>{repo.name}</h4>

                <p>{repo.description}</p>

              </div>
            );

          })}

        </main>

      </section>
    </>
  );
};

export default Dashboard;