import { ConentsPostRequest } from "@/types/dto";

export const postContents = async (bodyData: ConentsPostRequest) => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/contents",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to create contents");
    }
    return await response.json();
  } catch (error) {
    console.error("Error creating contents:", error);
    throw error;
  }
};
