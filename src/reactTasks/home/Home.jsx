import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
export default function Home() {
  return (
    <div className="home">
      <h2>AdMAVIN Tasks</h2>
      <div className="homewrapper">
        <Link className="link" to="/task1">
          <span>Link to Task 1</span>
        </Link>
        <Link to="/task2" className="link">
          <span> Link to Task 2</span>
        </Link>
        <Link to="/task3" className="link">
          <span>Link to Task 3</span>
        </Link>
        <Link to="/task4" className="link">
          <span> Link to Task 4</span>
        </Link>
        <Link to="/task5" className="link">
          <span>Link to Task 5</span>
        </Link>
      </div>
    </div>
  );
}
