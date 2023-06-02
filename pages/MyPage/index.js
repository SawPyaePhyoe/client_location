// import getClientIP from "../../utils/getClientIP";
import getLocation from "@/utils/getLocation";
const MyPage = ({ clientLocation, clientIP }) => {
  // Use the clientLocation in your component logic
  console.log("Client Location:", clientLocation);
  console.log("Client IP:", clientIP);

  // Rest of your component code
};

export async function getServerSideProps({ req }) {
  const clientIP =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const clientLocation = await getLocation(clientIP);

  return {
    props: {
      clientLocation,
      clientIP,
    },
  };
}
export default MyPage;
