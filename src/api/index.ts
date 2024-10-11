import axios from "axios";

// Axios-based fetchData function
export async function fetchData(url: string, token?: string) {
  try {
    // Use Record<string, string> to allow dynamic keys like 'Authorization'
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    // Include the Authorization token if provided
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    // Make a GET request with axios
    const response = await axios.get(url, { headers });

    // Return the response data
    return response.data;
  } catch (error) {
    console.error("Fetch error:", error);
    // Throw the error for handling in the calling function
    throw error;
  }
}




// export async function fetchData(url: string, token?: string) {
//   try {
//     const headers: HeadersInit = {
//       "Content-Type": "application/json",
//     };

//     if (token) {
//       headers["Authorization"] = `Bearer ${token}`;
//     }

//     const res = await fetch(url, {
//       method: "GET",
//       headers,
//     });

//     if (!res.ok) {
//       throw new Error(`Failed to fetch data: ${res.statusText}`);
//     }

//     return res.json();
//   } catch (error) {
//     console.error("Fetch error:", error);
//     throw error;
//   }
// }

export const AddressData = () => {
  const token = process.env.NEXT_PUBLIC_API_TOKEN;
  if (!token) {
    throw new Error("API token is missing");
  }
  return fetchData(`${process.env.NEXT_PUBLIC_API_URL}/address`, token);
};

export const ApplyData = () => {
  const token = process.env.NEXT_PUBLIC_API_TOKEN;
  if (!token) {
    throw new Error("API token is missing");
  }
  return fetchData(`${process.env.NEXT_PUBLIC_API_URL}/apply`, token);
};

export const MailData = () => {
  const token = process.env.NEXT_PUBLIC_API_TOKEN;
  if (!token) {
    throw new Error("API token is missing");
  }
  return fetchData(`${process.env.NEXT_PUBLIC_API_URL}/mail`, token);
};

export const SeminarData = () => {
  return fetchData(`${process.env.NEXT_PUBLIC_API_URL}/seminar`);
};
export const UserData = () => {
  const token = process.env.NEXT_PUBLIC_API_TOKEN;
  if (!token) {
    throw new Error("API token is missing");
  }
  return fetchData(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, token);
};
