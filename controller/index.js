module.exports = {
  // Login
  login: require("./login/login"),
  // Admin
  adminAuthenticator: require("./admin/admin-authenticator"),
  adminPost: require("./admin/admin-post"),
  adminGet: require("./admin/admin-get"),
  adminGetById: require("./admin/admin-getbyid"),
  adminDelete: require("./admin/admin-delete"),
  adminPut: require("./admin/admin-put"),
  //   Car
  carAuthenticator: require("./car/car-authenticator"),
  carPost: require("./car/car-post"),
  carGet: require("./car/car-get"),
  carGetById: require("./car/car-getbyid"),
  carPut: require("./car/car-put"),
  carDelete: require("./car/car-delete"),
  // Member
  memberRegister: require("./member/member-register"),
  // User
  userCurrent: require("./user/user-current"),
  // Encrypt for seeders data
  encryptPass: require("./encrypt-decrypt/encrypt-pass"),
};
