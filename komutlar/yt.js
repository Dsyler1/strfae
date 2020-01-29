const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00ffff)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Komutlari Gonderdim. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00ffff)
    .setTimestamp()
    .addField("**Eğlence ve Kullanıcı Komutları:**", `s!banned = Dene ve Gör! \ns!youtube = Youtube kanalımın linkini bulabilir siniz. \ns!website = Web Sitemizin linki bulabilirsiniz. \ns!avatarım = Avatarınınızı Gösterir. \ns!herkesebendençay = Herkese Çay Alırsınız. \ns!koş = Koşarsınız.\ns!çayiç = Çay İçersiniz. \ns!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \ns!çayaşekerat = Çaya Şeker Atarsınız. \ns!yumruh-at = Yumruk Atarsınız. \ns!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \ns!sunucuresmi = BOT Sunucunun Resmini Atar. \ns!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \ns!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. `)
    .addField("**Yetkilisi Komutlar**", `s!ban = İstediğiniz Kişiyi Sunucudan Banlar. \ns!kick  = İstediğiniz Kişiyi Sunucudan Atar. \ns!unban = İstediğiniz Kişinin Yasağını Açar. \ns!sustur = İstediğiniz Kişiyi Susturur. \ns!oylama = Oylama Açar. \ns!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
    .addField("**Ana Komutlar**", "s!yardım = BOT Komutlarını Atar. \ns!bilgi = BOT Kendisi Hakkında Bilgi Verir. \ns!ping = BOT Gecikme Süresini Söyler. \ns!davet = BOT Davet Linkini Atar. \ns!istatistik = BOT İstatistiklerini Atar.")
    .addField("**Yapımcı**", " **Komutan Logar *Killer#3571** ")
    .setFooter('**--------------------------**')
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botu ekle', 'botu davet et', 'botuekle', 'invite'],
  permLevel: 0
};

exports.help = {
  name: 'sq',
  description: 'Botun davet linkini gönderir.',
  usage: 'sq'
};
