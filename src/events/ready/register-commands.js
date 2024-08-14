const { testServer } = require('../../../config.json');
const getLocalCommands = require('../../utils/getLocalCommands');

module.exports = (client) => {
  const localCommands = getLocalCommands();
  console.log(localCommands);
};





/*
require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Registering slash commands...')

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID, 
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log('Success! Commands registered.')
  } catch (error) {
    console.log(`Encountered error: ${error}`)
  }
})();
*/