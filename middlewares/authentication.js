const { validateToken } = require("../services/auth");

function checkAuthCookie(cookieName) {
  return (req, res, next) => {
    const tokenCookieValue = req.cookies[cookieName];
    if (!tokenCookieValue) {
      return next();
    }

    try {
      const userPayload = validateToken(tokenCookieValue);
      req.user = userPayload;
      next();
    } catch (error) {
      next();
    }
  };
}

module.exports = { checkAuthCookie };
