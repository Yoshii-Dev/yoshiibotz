
// disini atur aja kak menu bot nya
// jangan lupa hapus fitur yg ga penting

var monoSpace = '```'

exports.listmenu = (sender,prefix,ad,namenya,premnya,usernya,romnya,tanggal,jam,no) => {
return`
โโโ[ ๐ช๐๐๐๐๐ข๐ ๐ ]โโโ
 ๐พย ๐ดย ๐ธย ๐ญย ๐ฎย  ๐งย ๐ดย ๐นย 
  โ
  โฐโ> ID : @${sender.split('@')[0]}
    โฐโ> Premium : ${premnya}

 ๐ฝ๐๐ ๐๐๐๐ ๐พ๐๐
 โข Waktu : ${jam} WIB
 โข Tanggal : ${tanggal}
 
๐๐ผ๐๐ ๐๐ผ๐ ๐๐๐๐ผ ๐ฝ๐๐
 ${no++} โณ ${prefix}sewabot
 
โโโ[ ๐๐๐๐ ๐๐๐๐ ]โโโ

 ๐๐๐๐๐ ๐๐๐๐ 
  โข fitnah
  โข delete
  โข revoke
  โข tagall
  โข hidetag
  โข setdesc
  โข linkgrup
  โข infogroup
  โข setppgrup
  โข setnamegrup
  โข group open
  โข group close
  โข antilink on
  โข antilink off
  โข welcome on
  โข welcome off
  โข tiktokauto on
  โข tiktokauto off
  โข kick @tag
  โข demote @tag
  โข promote @tag
 
 ๐ฟ๐๐๐๐๐๐ผ๐ฟ ๐๐๐๐
  โข tiktok
  โข ytmp3
  โข ytmp4
  โข pinterest
  โข playmp3
  โข playmp4
  โข gitclone
  โข mediafire
  โข wikimedia
  โข soundcloud
  โข infogempa

 ๐ผ๐๐๐๐ผ๐ ๐๐ผ๐พ๐๐ผ 
  โข ${prefix}rika
  โข ${prefix}bocil
  โข ${prefix}ukhty
  โข ${prefix}santuy
  โข ${prefix}hijaber

 ๐๐ผ๐๐๐๐ผ๐๐๐ ๐๐๐๐ 
  โข milf
  โข loli
  โข wallml
  โข waifu
  โข husbu
  โข cosplay
  โข ppcouple
  โข wallpaperislami
  โข wallpaperinori
  โข wallpaperanime
  โข wallpapergamer
  โข wallpapermeme
  โข wallpaperprogamer
  โข wallpaperteknologi
  โข wallpapercyber

 ๐ผ๐๐๐๐ ๐๐๐๐ 
  โข cry
  โข hug
  โข pat
  โข bully
  โข lick
  โข kiss
  โข awoo
  โข waifu
  โข shinobu
  โข cuddle
  โข megumin
  โข slap
  โข neko
  โข wink
  โข dance
  โข poke
  โข glomp
  โข bite
  โข nom
  โข handhold
  โข highfive
  โข wave
  โข smug
  โข smile
  โข bonk
 `
}

exports.rulesBot = () =>{
return`*โโใ RULES-BOT ใโโ*
โ ini rules nya ya anjeng baca baikยฒ โ

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

Oke sudah paham rulesnya ya anjeng
Ketik *#menu* untuk memulai bot`
}

exports.donasiBot = (cekName,ucapanWaktu) =>{
return`โโใ *MENU DONATE* ใโโ

Hi *${cekName}* ${ucapanWaktu} ๐๐ป

*Payment pulsa*
Number: 083125837776
A/N: __

*Payment Dana*
Number: 083125837776
A/N: rahmacc

${monoSpace}Terimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini ^_^${monoSpace}

_iam developer bot whatsapp._

 *Sosial Media*
 โข *Whatsapp:* 083125837776
 โข *Youtube:* God Hackid
 โข *Github:* MrYoshiii
 `
}