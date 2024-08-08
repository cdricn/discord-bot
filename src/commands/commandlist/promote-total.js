const { ApplicationCommandOptionType } = require('discord.js');

const promoteTotal = [
  {
    name: 'promote-total',
    description: 'Check total mats needed to max promote from a rank',
    options: [
      {
        name: 'Rank',
        description: '1-5',
        type: ApplicationCommandOptionType.Integer
      }
    ]
  }
];

function test() {
  promoteTotal
}