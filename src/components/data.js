import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Data() {
  const [renderdata, setrenderdata] = useState([]);
  useEffect(() => {
    data();
  }, []);
  const data = async () => {
    await axios.get("http://localhost:4001/data").then((res) => {
      setrenderdata(res.data);
      console.log(res);
    });
  };

  return (
    <div>
      {renderdata.map((x) => {
        return (
          <div style={{ borderBottom: "1px solid black" }}>
            <p>title : {x.title}</p>
            <p>body : {x.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Data;
