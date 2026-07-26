import axiosInstance from "../../../../axiosInstance";

/**
 * ==============================
 * BACKEND TOPICS APIs
 * ==============================
 */

// Fetch all backend topics
export const getAllBackendTopics = async () => {
  try {
    const response = await axiosInstance.get(
      "/backend/api/backend/topics"
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch backend topics:", error);
    throw error;
  }
};

// Fetch backend topic detail by slug
export const getBackendTopicDetail = async (slug) => {
  try {
    const response = await axiosInstance.get(
      `/backend/api/backend/${slug}`
    );
    return response.data;
  } catch (error) {
    console.error(
      `Failed to fetch backend topic detail (${slug}):`,
      error
    );
    throw error;
  }
};
