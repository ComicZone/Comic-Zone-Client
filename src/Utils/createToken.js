const createToken = () => {
  const token = localStorage.getItem("currentUser");
  if (!token) return null;
  else {
    const retrieveToken = JSON.parse(token);
   // console.log("RETRIEVED",retrieveToken)
    //const token = retrieveToken.token
    return retrieveToken.token;
    //return {retrieveToken, token}
  }
};

export default createToken;
