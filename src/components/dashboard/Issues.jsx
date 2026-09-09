import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";
import "./issues.css";

const Issues = () => {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        const fetchIssues = async () => {
            try {
                const response = await fetch(
                    "http://16.171.255.182:3002/issue/all"
                );

                const data = await response.json();

                setIssues(data);
            } catch (err) {
                console.error("Error while fetching issues:", err);
            }
        };

        fetchIssues();
    }, []);

  return (
    <>
        <Navbar />

        <section className="issues-page">
            <div className="issues-container">

                <div className="issues-header">
                    <h2>All Issues</h2>
                    <span>{issues.length} Issues</span>
                </div>

                {issues.map((issue) => {
                    return (
                        <div
                            className="issue-card"
                            key={issue._id}
                        >

                            <div className="issue-title">
                                <span className="issue-icon">
                                    ●
                                </span>

                                <h3>{issue.title}</h3>
                            </div>

                            <p className="issue-description">
                                {issue.description}
                            </p>

                            <div className="issue-info">

                                <span className="issue-status">
                                    ● {issue.status}
                                </span>

                                <span>
                                    Repository: {issue.repository}
                                </span>

                            </div>

                        </div>
                    );
                })}

            </div>
        </section>
    </>
);

};

export default Issues;