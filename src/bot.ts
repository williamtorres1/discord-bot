import Discord from 'discord.js';
import config from './config/credentials.json';

const client = new Discord.Client();

const prefix = '-';

client.login(config.bot_token);

client.on('message', message => {
  if (message.author.bot) return;
  // futura feature
  // if (message.author.username === 'zSkrlipez') {
  // }

  // Toda vez que Bia falar com o bot, começar o comando com "Oi patroa, ..."
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);

  const args = commandBody.split(' ');

  const command = args.shift().toLowerCase();

  if (command === 'slap') {
    message.reply(
      `POR QUE VOCÊ QUER BATER NAS PESSOAS??? VOU TER QUE CHAMAR O XANDAO`,
    );
  }
  if (command === 'patroa') {
    message.reply(`A PATROA É BMelows`);
  }
  if (command === 'kiss') {
    message.reply(`TCHAU GENTE`);
  }
});
