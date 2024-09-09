import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "./Redux/DataSlice"; // Import the action from your slice

// Custom hook for fetching data
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);  
        dispatch(setProducts(response.data.products)); 
        setData(response.data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, dispatch]);

  return { data, loading, error };
};

export default useFetch;
