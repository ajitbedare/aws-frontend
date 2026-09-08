import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";
import "./repo.css";

const Repo = () => {
  const [suggestedRepositories, setSuggestedRepositories] = useState([]);
    useEffect(() => {
    const userId = localStorage.getItem("userId");
     
    const fetchSuggestedRepositories = async () => {
      try {
        const response = await fetch(`http://localhost:3002/repo/all`);
        const data = await response.json();
        setSuggestedRepositories(data);
      } catch (err) {
        console.error("Error while fecthing repositories: ", err);
      }
    };
    fetchSuggestedRepositories();
  }, []);

   return (
    <>
    <Navbar/>
      <section id="repo">
        <aside>
          <h3>All Repositories</h3>
          {suggestedRepositories.map((repo) => {
            return (
              <div key={repo._id}>
                <h3 className="name"><b>{repo.name}</b></h3>
                <h3 className="des">{repo.description}</h3>
              </div>
            );
          })}
        </aside>
      </section>
    </>
  );
};

export default Repo;