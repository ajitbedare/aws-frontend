import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";

const Event=()=>{
    return(
     <>
     <Navbar/>
      <aside>
          <h3>Upcoming Events</h3>
          <ul>
            <li>
              <p>Tech Conference - Dec 15</p>
            </li>
            <li>
              <p>Developer Meetup - Dec 25</p>
            </li>
            <li>
              <p>React Summit - Jan 5</p>
            </li>
          </ul>
        </aside>
     </>
    )
}

export default Event;