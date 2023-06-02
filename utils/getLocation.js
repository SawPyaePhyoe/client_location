const fetch = require("node-fetch");
const getLocation = async (ipAddress) => {
  try {
    const apiKey = "57d899da2683b524c62d168de44f1ded"; // Replace with your own API key
    const url = `https://ipapi.com/${ipAddress}?access_key=${apiKey}`;

    const response = await fetch(url);
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

export default getLocation;
