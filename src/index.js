require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) => {
  console.log('Bot running.');
}); 

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand) return;
  console.log(interaction.commandName);

  if(interaction.commandName === 'add') {
    const num1 = interaction.options.get('num1').value;
    const num2 = interaction.options.get('num2').value;

    interaction.reply(`${num1+num2}`);
  }
})

client.login(process.env.TOKEN);

// Set-ExecutionPolicy RemoteSigned
// Set-ExecutionPolicy Restricted