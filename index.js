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

  const commandName = interaction.commandName;
  switchCommand(interaction, commandName);
})

function switchCommand(interaction, commandName) {
  switch(commandName) {
    case 'z-promote':
      console.log(commandName);
      const optionName = interaction.options.get('base').value;
      basePromote(interaction, optionName);
      break;
    
  }
}

function basePromote(interaction, optionName) {
  let botreply = '';
  switch(optionName) {
    case 1:
      botreply = '```ansi\n[2;31mRank 1[0m - [2;32mBase[0m [2;32mSeal[0m: 4, [2;37mDennies[0m: 24,000```';
      interaction.reply(botreply);
      break;
    case 2:
      botreply = '```ansi\n[2;31mRank 2[0m - [2;34mAdvanced Seal[0m[2;32m[0m: 12, [2;37mDennies[0m: 56,000```';
      interaction.reply(botreply);
      break;
    case 3:
      botreply = '```ansi\n[2;31mRank 3[0m - [2;34mAdvanced Seal[0m[2;32m[0m: 20, [2;37mDennies[0m: 120,000```';
      interaction.reply(botreply);
      break;
    case 4:
      botreply = '```ansi\n[2;31mRank 4[0m - [2;34m[2;35mPurple Seal[0m[2;34m[0m[2;32m[0m: 10, \[2;37mDennies[0m: 200,000```';
      interaction.reply(botreply);
      break;
    case 5:
      botreply = '```ansi\n[2;31mRank 5[0m - [2;34m[2;35mPurple Seal[0m[2;34m[0m[2;32m[0m: 20, [2;37mDennies[0m: 400,000```';
      interaction.reply(botreply);
      break;
  }
}

client.login(process.env.TOKEN);

// Set-ExecutionPolicy RemoteSigned
// Set-ExecutionPolicy Restricted