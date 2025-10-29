const getToken = (req) => {
  const authHeader = req.headers.authorization.split(" ")[1];

  return authHeader;
};
module.exports = getToken;
