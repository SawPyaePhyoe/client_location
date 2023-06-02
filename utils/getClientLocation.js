import requestIp from "request-ip";

const getClientLocation = async (req) => {
  try {
    const clientIP = requestIp.getClientIp(req);
    const apiKey = "57d899da2683b524c62d168de44f1ded";

    // Fetch the location based on the client's IP address using an IP geolocation service
    // Replace 'YOUR_IPAPI_API_KEY' with your own API key
    const response = await fetch(
      `https://ipapi.com/${clientIP}?access_key=${apiKey}`
    );
    const data = await response.json();

    if (
      response.ok &&
      data.city &&
      data.country_name &&
      data.latitude &&
      data.longitude
    ) {
      const { city, country_name: country, latitude, longitude } = data;
      return { city, country, latitude, longitude };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching location:", error);
    return null;
  }
};

export default getClientLocation;
