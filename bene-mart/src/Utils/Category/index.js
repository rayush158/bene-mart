import axios from "axios";

export const getAllCategories = async () => {
  try {
    let { data } = await axios.get("/api/categories");
    if (data.categories) {
      return data.categories;
    }
    return [];
  } catch (error) {
    console.error("Failed to fetch Categories");
  }
};
