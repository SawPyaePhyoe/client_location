const maxmind = require("maxmind");
const path = require("path");

const getLocation = async (ipAddress) => {
  try {
    // console.log(__dirname); // Replace with the correct path to your GeoLite2 database file
    // const databasePath = path.join(__dirname, "GeoLite2-City.mmdb");
    const databasePath = path.join(process.cwd(), "GeoLite2-City.mmdb");
    console.log("hello" + ipAddress);

    const lookup = await maxmind.open(databasePath);
    const location = lookup.get(ipAddress);

    if (location && location.city && location.country) {
      const {
        city,
        country,
        location: { latitude, longitude },
      } = location;
      return { city, country, latitude, longitude };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching location:", error);
    return null;
  }
};

module.exports = getLocation;
