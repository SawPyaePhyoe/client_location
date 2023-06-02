import getClientLocation from "../../utils/getClientLocation";

const MyPage = ({ clientLocation }) => {
  // Use the clientLocation in your component logic
  console.log("Client Location:", clientLocation);

  // Rest of your component code
};

export async function getServerSideProps({ req }) {
  const clientLocation = await getClientLocation(req);

  return {
    props: {
      clientLocation,
    },
  };
}

export default MyPage;
