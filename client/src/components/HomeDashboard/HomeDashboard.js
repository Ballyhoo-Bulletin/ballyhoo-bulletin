import React, { useState, useCallback, useEffect, Component } from "react";
import API from "../../utils/API";
import "./style.css";
import TradeCard from "../TradeCard/TradeCard";

const HomeDashboard = () => {
  const { loading, value, error } = useAsync(API.getTrade);
  if (loading) return "loading...";
  if (error) {
    console.log(error);
    return <div>error</div>;
  }
  if (value) {
    const dbData = value.data;
    console.log(dbData);

    function handleSubmit(e) {
      e.preventDefault();
      console.log("Trade Claimed");
      alert("You have claimed this trade!");
      // API.claimTrade({
      //  
      // })
      //   .then((res) => )
      //   .catch((err) => console.log(err));
    }

    return (
      <div>
        {dbData.map((data) => (
          <TradeCard
            dbData={dbData}
            // image would go here once available
            id={data.id}
            key={data.id}
            // email={dbData.email}
            need={data.need}
            trades={data.trades}
            description={data.description}
            onClick={handleSubmit}
            
          />
          
        ))}
      </div>
    );
    // dbData only available here in this bracket
  }
  // Thi values is showing up null && as data
  console.log(value);

  // console.log("database DATA maybe?", dbData);
  return (
    <div className="container">
      <div>
        <p>Dashboard</p>
      </div>
      <div className="row">
        <div className="col-md-2">
          <p>thrumup with icon</p>
        </div>
        <div className="col-md-10">
          {/* {dbData.map((item) => ( */}
          {/* <TradeCard /> */}
          {/* // item={value}
              // // image would go here
              email={dbData.email}
              // id={value.data.id}
              // key={value.data.id}
              // need={value.data.need}
              // trades={value.data.trades}
              // description={value.data.description}
            /> */}
          {/* ))} */}
          {/* pass down data props to tradeCard Where is data coming from in this console log?*/}
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;

const useAsync = (asyncFunction, immediate = true) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(() => {
    setLoading(true);
    setValue(null);
    setError(null);

    return asyncFunction()
      .then((response) => {
        setValue(response);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, loading, value, error };
};
