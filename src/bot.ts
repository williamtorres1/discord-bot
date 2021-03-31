import Discord from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();
const client = new Discord.Client();

const prefix = '-';

client.once('ready', () => {
  console.log(`uiu-bot running! Connected on ${client.user.tag}`);
});

client.on('message', message => {
  if (message.content === '!ping') {
    message.channel.send('Pong.');
  }
  if (message.author.bot) return;
  // futura feature
  // if (message.author.username === 'zSkrlipez') {
  // }

  // Toda vez que Bia falar com o bot, começar o comando com "Oi patroa, ..."
  if (
    message.content.startsWith(prefix) &&
    message.author.id === process.env.id
  ) {
    const startMessage = 'Oi, pessoa muito importante.';
    message.channel.send(`${startMessage} O que você deseja?`);
  }
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

client.login(process.env.BOT_TOKEN);
