const { ApplicationCommandOptionType } = require('discord.js');

const promoteBase = [
  {
    name: 'promote-base',
    description: 'Check total mats needed to promote from a rank',
    options: [
      {
        name: 'Base',
        description: '1-5',
        type: ApplicationCommandOptionType.Integer
      }
    ]
  }
];

