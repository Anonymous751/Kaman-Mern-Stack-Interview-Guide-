import axiosInstance from "../../../../axiosInstance";

// Fetch all frontend topics
export const getFrontendTopics = async () => {
  try {
    const response = await axiosInstance.get("/frontend/api/ftopicsList");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch frontend topics:", error);
    throw error;
  }
};

// Fetch frontend topic by slug/path
export const getFrontendTopicDetail = async (slug) => {
  try {
    const response = await axiosInstance.get(
      `/frontend/api/ftopicsdetail/${slug}`
    );
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch frontend topic ${slug}:`, error);
    throw error;
  }
};
