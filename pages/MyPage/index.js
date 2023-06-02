import getClientIP from "../../utils/getClientIP";
import getLocation from "@/utils/getLocation";

const MyPage = ({ clientIP, clientLocation }) => {
  // Use the clientIP and clientLocation in your component logic
  console.log("Client IP:", clientIP);
  console.log("Client Location:", clientLocation);

  // Rest of your page logic
};

export async function getServerSideProps({ req }) {
  const clientIP = getClientIP(req);
  const clientLocation = await getLocation(clientIP);

  return {
    props: {
      clientIP,
      clientLocation,
    },
  };
}

export default MyPage;
