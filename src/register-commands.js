require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
  {
    name: 'add',
    description: 'adds num',
    options: [
      {
        name: 'num1',
        description: 'num1',
        type: ApplicationCommandOptionType.Number,
        choices: [
          {
            name: 'one',
            value: 1,
          },
          {
            name: 'two',
            value: 2,
          }
        ],
        required: true,
      },
      {
        name: 'num2',
        description: 'num2',
        type: ApplicationCommandOptionType.Number,
        required: true,
      }
    ]
  },
];

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
