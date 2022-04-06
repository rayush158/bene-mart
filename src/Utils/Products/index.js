import axios from "axios";

export const getAllProducts = async () => {
  try {
    const { data } = await axios.get("/api/products");
    if (data.products) {
      return data.products;
    }
    return [];
  } catch (error) {
    console.error("Failed to fetch Products");
  }
};
