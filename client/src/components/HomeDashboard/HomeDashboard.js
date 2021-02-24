import React, { useState, useCallback, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import API from "../../utils/API";
import "./style.css";
import TradeCard from "../TradeCard/TradeCard";

const HomeDashboard = () => {
  const { currentUser } = useAuth();
  const [claimed, setClaimed] = useState()
  // console.log(currentUser);
  const { loading, value, error } = useAsync(API.getTrade, currentUser.uid);
  if (loading) return "loading...";
  if (error) {
    console.log(error);
    return <div>error</div>;
  }
  if (value) {
    
    const dbData = value.data;
    console.log(dbData);
    // console.log(dbData);
  
    function handleSubmit() {
      console.log(claimed)
      //   // console.log("Trade Claimed");
      //   API.claimTrade({
      //   // email: data.email
      //   })
      // .then((result) => {
      //     console.log("Claims data", result);
      //   })
      //   .catch((err) => console.log(err));
      alert("You have claimed this trade!");
    }

    return (
      <div>
        {dbData.map((data, index) => (
          <TradeCard
            dbData={dbData}
            // image would go here once available
            id={data.id}
            key={index}
            
            email={data.email}
            need={data.need}
            trades={data.trades}
            description={data.description}
            value={data}
            onChange={(e) => {
              data.data = e.target.value;
              setClaimed([...claimed])}}
            onClick ={handleSubmit}
          />
        ))}
      </div>
    );
    // dbData only available here in this bracket
  }
  // Thi values is showing up null && as data
  // console.log(value);

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

const useAsync = (asyncFunction, ...args) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(() => {
    setLoading(true);
    setValue(null);
    setError(null);

    return asyncFunction(...args)
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
    execute();
  }, [execute]);

  return { execute, loading, value, error };
};
