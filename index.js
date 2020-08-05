function sayHello(firstName, lastName) {
  console.log(`Hello ${firstName} ${lastName}`);
}

function sayGoodbye(firstName, lastName) {
  console.log(`Good bye ${firstName} ${lastName}`);
}

module.exports = {
  sayHello,
  sayGoodbye,
};
