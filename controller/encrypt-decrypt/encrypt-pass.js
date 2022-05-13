const bcrypt = require("bcrypt");
const SALT = 10;

async function encryptPass(password) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, SALT, (err, encryptedPassword) => {
      if (err) {
        reject(err);
      } else {
        resolve(encryptedPassword);
      }
    });
  });
}

module.exports = encryptPass;
