const path = require('path');
const getFiles = require('./getFiles');
const { get } = require('http');

module.exports = (exceptions) => {
  let localCommands = [];

  const commandCategories = getFiles(path.join(__dirname, '..', 'commands'), true);

  for (const commandCategory of commandCategories) {
    const commandFiles = getFiles(commandCategory);
    
    for (const commandFile of CommandFiles) {
      const commandObject = require(CommandFile);
      localCommands.push(commandObject);
    }
  }

  return localCommands;
}