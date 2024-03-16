const CustomError = require('../errors');
const checkPermissions = (requesUser, resourceUserId) => {
  console.log(requestUser);
  console.log(resourceUserId);
  console.log(typeof resourceUserId);
};

module.exports = checkPermissions;
