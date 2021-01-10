const Discord = require('discord.js');
const rdb = require('quick.db');
const moment = require('moment');
exports.run = async (client, message, args) => {
let kayıtYetkili = '795945983242010645' 
let kayıtsızRole = '795957086843568209' 
let erkekRole = '795954765137313802'
let erkekRole2 = '795955007115362314'
let kızRole = '795954150235439115'
let kızRole2 = '795954270985912320'

if(!["795945983242010645"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
  return message.channel.send(`Bu komutu kullanabilmek için ayarlanan kayıt yetkisine sahip olmalısınız!`).then(x => x.delete({timeout: 5000}));
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(message.member.roles.highest.position <= member.roles.highest.position) {
    let yüksekte = new Discord.MessageEmbed()
    .setDescription(`Bu kişiye kayıtsız veremiyorum çünkü yetkisi benden üstte.`)
    .setTimestamp()
    .setColor('RANDOM');
    message.react(client.emojiler.ret).catch();
    return message.channel.send(yüksekte).then(x => x.delete({timeout: 5000}));
  }
  if (!member) return message.channel.send('Bir üye etiketlemelisin.').then(x => x.delete({timeout: 5000}));
  await member.setNickname(`❆ İsim | Yaş`)
  await member.roles.set([kayıtsızRole])
  let embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription(`${member} kişisi kayıtsıza atıldı.`)
  .setTimestamp()
message.react(client.emojiler.onay).catch();
message.channel.send(embed).then(x => x.delete({timeout: 15000}));
} 

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kayıtsız'],
  permLevel: 0
}
exports.help = {
  name: 'kayıtsız',
  description: "Belirtilen üyeye kayıtsız rolü verir",
  usage: 'kayıtsız @kişi isim yaş'
}