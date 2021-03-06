const Discord = require("discord.js");

const mapping = {
  " ": "   ",
      '0': `<a:sayi0:795219038736744458>   `,
      '1': `<a:sayi1:795218775363944459> `,
      '2': `<a:sayi2:795218798042546187> `,
      '3': `<a:sayi3:795218815654952971> `,
      '4': `<a:sayi4:795218839264297041> `,                  
      '5': `<a:sayi5:795218887661977600> `,
      '6': `<a:sayi6:795218910441898004> `,
      '7': `<a:sayi7:795218941449863220> `,
      '8': `<a:sayi8:795218976849788978> `,
      '9': `<a:sayi9:795218999876386826>`,
  "!": ":grey_exclamation:",
  "?": ":grey_question:",
  "#": ":hash:",
  "*": ":asterisk:"
};

"abcdefghijklmnopqrstuvwxyz".split("").forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});
module.exports.run = function(client, message, args) {
    let voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
  let count = 0
  for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size
  let ses = 'Sesli üye : ' +
      `${count}` 
      .split("")
      .map(c => mapping[c] || c)
      .join("")
  let toplam = message.guild.memberCount;
  let sunucu = 'Toplam üye : ' +
      `${toplam}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
let taglıs = message.guild.roles.cache.filter(x => x.id === '795948546758541313'); 
  let counts = 0
   for (const [id, taglı] of taglıs) counts += taglı.members.size
  let online = 'Taglı üye : ' +
      `${counts}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
  let booster = message.guild.roles.cache.filter(x => x.id === '796711026400690260')
  let countss = 0
   for (const [id, boostere] of booster) countss += boostere.members.size
  let boosters = 'Booster : ' +
      `${countss}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
 let onlinesayi = message.guild.members.cache.filter(
    only => only.presence.status != "offline"
  ).size;
  let aktif = 'Online üye : ' +
      `${onlinesayi}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
const embed = new Discord.MessageEmbed()
.setColor('BLACK')
.setDescription('' + sunucu + '\n' + online +  '\n' + ses + ' \n' + boosters + ' \n' + aktif + '')
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['say'],
  permLevel: 0
}
exports.help = {
  name: 'say',
  description: "Sunucu istatistiklerini sayar",
  usage: 'say'
}