export const postRequest = async <T>(
  endpoint: string,
  bodyData: T
): Promise<unknown> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${endpoint}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to POST to ${endpoint}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error POST ${endpoint}:`, error);
    throw error;
  }
};
