import { useState, useEffect } from "react";
import axios from "axios";

function useAxiosFetch(url) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryHeading, setCategoryHeading] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        console.log(data);
        setCategoryHeading(data.category);
        setNews(data.data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { news, loading, error, categoryHeading };
}

export default useAxiosFetch;
