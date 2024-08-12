const { ApplicationCommandOptionType } = require('discord.js');

const promoteCustom = [
  {
    name: 'promote-custom',
    description: 'Check total mats needed to promote from a rank to another rank',
    options: [
      {
        name: 'Current Rank',
        description: 'Your current rank',
        type: ApplicationCommandOptionType.Integer,
      },
      {
        name: 'Next Rank',
        description: 'Your target rank',
        type: ApplicationCommandOptionType.Integer,
      },
    ]
  }
];

