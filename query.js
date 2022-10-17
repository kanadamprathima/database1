const User = require("./models").user;
const getAllUsers = async () => {
  try {
    const response = await User.findAll({ raw: true });
    console.log(response);
  } catch (e) {
    console.log(e.message);
  }
};
// getAllUsers();
const getOneUser = async () => {
  try {
    const oneUser = await User.findByPk(3);
    console.log(oneUser);
  } catch (e) {
    console.log(e.message);
  }
};
// getOneUser();
const createUSer = async () => {
  const jane = await User.create({
    name: "Jane",
    email: "j@j.com",
    password: "jhdgj",
    phone: "3786",
  });
  console.log(jane.toJSON());
};
createUSer();
