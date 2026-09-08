import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./createRepo.css";
import Navbar from "../../Navbar";

const CreateRepository = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userId = localStorage.getItem("userId");

        const response = await fetch(
            "http://localhost:3002/repo/create",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    description,
                    owner: userId
                })
            }
        );

        const data = await response.json();

        if (response.ok) {
            navigate("/");
        } else {
            console.log(data);
        }
    };

    return (
         <>
            <Navbar />

            <div className="create-repo-container">
                <div className="create-repo-box">

                    <h1>Create a new repository</h1>

                    <p className="repo-subtitle">
                        A repository contains all project files, including the
                        revision history.
                    </p>

                    <form onSubmit={handleSubmit}>

                        <label>
                            Repository name
                        </label>

                        <input
                            type="text"
                            placeholder="e.g. my-first-project"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <label>
                            Description
                            <span> (optional)</span>
                        </label>

                        <textarea
                            placeholder="Describe your repository"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                        <button type="submit">
                            Create repository
                        </button>

                    </form>

                </div>
            </div>
        </>
    );
};

export default CreateRepository;