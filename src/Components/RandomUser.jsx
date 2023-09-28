import React, { useState, useEffect } from "react";

function RandomUser() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);

  const fetchInfo = async() => {
    const res = await fetch(url);
    const data = await res.json();
    return setData(data);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="RandomUser">
      <h1>Random User Data Using useEffect</h1>
      <center>
        {data.map((data) => {
          return (
            <div
              style={{
                width: "15em",
                backgroundColor: "#35D841",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 20 }}>{data.name}</p>
            </div>
          );
        })}
      </center>
      <hr />
    </div>
  );
}

export default RandomUser;
