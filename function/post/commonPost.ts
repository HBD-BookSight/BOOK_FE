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
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `Request failed with status ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error(`Error POST ${endpoint}:`, error);
    throw error;
  }
};

export const adminPostRequest = async <T>(
  endpoint: string,
  bodyData: T
): Promise<unknown> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_ADMIN_URL}${endpoint}`,
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
