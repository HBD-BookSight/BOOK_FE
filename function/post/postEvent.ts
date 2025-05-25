import { EventPostRequest } from "@/types/dto";

export const postEvent = async (bodyData: EventPostRequest) => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/publishers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to create publisher");
    }
    return await response.json();
  } catch (error) {
    console.error("Error creating publisher:", error);
    throw error;
  }
};
