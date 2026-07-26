import axiosInstance from "../../../../axiosInstance";



// Fetch all web topics
export const getWebTopics = async () => {
  try {
    const response = await axiosInstance.get("/web/api/wtopics");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch web topics:", error);
    throw error;
  }
};

// Fetch a web topic by slug
export const getWebTopicDetail = async (slug) => {
  try {
    const response = await axiosInstance.get(`/web/api/wtopicsdetail/${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch topic ${slug}:`, error);
    throw error;
  }
};
