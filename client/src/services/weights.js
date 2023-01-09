import fetchProtectedResources from "./axios";

export const createWeight = async (newWeight) => {
  try {
    const response = await fetchProtectedResources.post("/weight", newWeight);
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};

export const getAllWeights = async () => {
  try {
    const response = await fetchProtectedResources.get("/weight");
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};
