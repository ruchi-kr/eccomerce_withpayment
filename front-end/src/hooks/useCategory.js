import axios from "axios";
import { useState, useEffect } from "react";

export default function useCategory() {
  const [category, setCategory] = useState([]);

  const getCategoris = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-categoris");
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategoris();
  }, []);

  return category;
}
