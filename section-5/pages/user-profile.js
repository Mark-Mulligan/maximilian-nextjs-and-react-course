const UserProflilePage = (props) => {
  return <h1>{props.username}</h1>;
};

export default UserProflilePage;

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  return {
    props: {
      username: 'Max',
    },
  };
}
