const messages = require('./messages.js');

const generateMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
};

module.exports = generateMessage;
