import React, { useState, useCallback, useEffect } from "react";
import API from “../../utils/API”;
import “./style.css”;
import TradeCard from “../TradeCard/TradeCard”;
const HomeDashboard = () => {
  const { loading, value, error } = useAsync(API.getTrade);
  if (loading) return “loading...“;
  if (error) {
    console.log(error)
    return <div>error</div>;
  }
  console.log(value);
  return (
    <div className=“container”>
      <div>
        <p>Dashboard</p>
      </div>
      <div className=“row”>
        <div className=“col-md-2”>
          <p>thrumup with icon</p>
        </div>
        <div className=“col-md-10">
          <TradeCard />
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
  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
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
  // Call execute if we want to fire it right away.
  // Otherwise execute can be called later, such as
  // in an onClick handler.
  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);
  return { execute, loading, value, error };
};