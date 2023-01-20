import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./task3.css";

export default function Task3() {
  const [info, setInfo] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getdata();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getdata = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=apple&apiKey=8c5480257aa14bd3938243bc7455b9b7&pageSize=5&page=${page}`
      );
      console.log(res.data);
      setInfo((prev) => [...prev, ...res.data.articles]);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  const handleScroll = () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 2 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="task3">
      <h1>INFINITE SCROLLING</h1>
      {info.map((item, i) => {
        return (
          <div className="item" key={i}>
            <h3>{item.title}</h3>
            <p>
              <span>Desc:</span>
              {item.content}
            </p>
          </div>
        );
      })}
      {loading &&( <h1>Loading...</h1>
      <h1>The api i choose works only on localhost Sorry..(code is perfectly fine)</h1>})
    </div>
  );
}
