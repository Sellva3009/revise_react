import React, { useState } from 'react';

const Fetchdata = () => {
    const title = "React";
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Selvaa");
    const [data, setData] = useState(null);

    const dataOut = data[0];
    // console.log(dataOut);
    const getRandomName = async () => {
      try {
        const res = await fetch("https://randomuser.me/api/");
        const result = await res.json();
        setData(result);
        // console.log(data.results[0].gender);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    const handleIncrement = () => {
      setCount(count + 1);
    };

    const handleDecrement = () => {
      setCount(count - 1);
    };

    setTimeout(() => {
      setName("Selvakumar");
    }, 2500);

    return (
      <>
        <h1>
          Revising {title} Concepts by {name}
        </h1>
        <p>{count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>

        <button onClick={getRandomName}>Get Random Name</button>

        <div className="profile">
          <img src={dataOut.picture.medium} alt={dataOut.name.first} />
          <p>Profile name: {dataOut.name.first}</p>
          <p>User name: {dataOut.login.username}</p>
          <p>Gender: {dataOut.gender}</p>
          <p>Email: {dataOut.email}</p>
          <p>City: {dataOut.location.city}</p>
          <p>Country: {dataOut.location.country}</p>
        </div>
      </>
    );
}

export default Fetchdata;
