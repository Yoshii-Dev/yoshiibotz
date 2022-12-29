
// disini atur aja kak menu bot nya
// jangan lupa hapus fitur yg ga penting

var monoSpace = '```'

exports.listmenu = (sender,prefix,ad,namenya,premnya,usernya,romnya,tanggal,jam,no) => {
return`
━━━[ 𝗪𝗘𝗟𝗟𝗖𝗢𝗠𝗘 ]━━━
 🇾 🇴 🇸 🇭 🇮  🇧 🇴 🇹 
  │
  ╰─> ID : @${sender.split('@')[0]}
    ╰─> Premium : ${premnya}

 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊 𝘾𝙐𝙔
 • Waktu : ${jam} WIB
 • Tanggal : ${tanggal}
 
𝙔𝘼𝙉𝙂 𝙈𝘼𝙐 𝙎𝙀𝙒𝘼 𝘽𝙊𝙏
 ${no++} ➳ ${prefix}sewabot
 
━━━[ 𝐌𝐄𝐍𝐔 𝐖𝐈𝐁𝐔 ]━━━

 𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐 
  • fitnah
  • delete
  • revoke
  • tagall
  • hidetag
  • setdesc
  • linkgrup
  • infogroup
  • setppgrup
  • setnamegrup
  • group open
  • group close
  • antilink on
  • antilink off
  • welcome on
  • welcome off
  • tiktokauto on
  • tiktokauto off
  • kick @tag
  • demote @tag
  • promote @tag
 
 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙈𝙀𝙉𝙐
  • tiktok
  • ytmp3
  • ytmp4
  • pinterest
  • playmp3
  • playmp4
  • gitclone
  • mediafire
  • wikimedia
  • soundcloud
  • infogempa

 𝘼𝙎𝙐𝙋𝘼𝙉 𝙂𝘼𝘾𝙃𝘼 
  • ${prefix}rika
  • ${prefix}bocil
  • ${prefix}ukhty
  • ${prefix}santuy
  • ${prefix}hijaber

 𝙒𝘼𝙇𝙇𝙋𝘼𝙋𝙀𝙍 𝙈𝙀𝙉𝙐 
  • milf
  • loli
  • wallml
  • waifu
  • husbu
  • cosplay
  • ppcouple
  • wallpaperislami
  • wallpaperinori
  • wallpaperanime
  • wallpapergamer
  • wallpapermeme
  • wallpaperprogamer
  • wallpaperteknologi
  • wallpapercyber

 𝘼𝙉𝙄𝙈𝙀 𝙈𝙀𝙉𝙐 
  • cry
  • hug
  • pat
  • bully
  • lick
  • kiss
  • awoo
  • waifu
  • shinobu
  • cuddle
  • megumin
  • slap
  • neko
  • wink
  • dance
  • poke
  • glomp
  • bite
  • nom
  • handhold
  • highfive
  • wave
  • smug
  • smile
  • bonk
 `
}

exports.rulesBot = () =>{
return`*──「 RULES-BOT 」──*
→ ini rules nya ya anjeng baca baik² ←

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
return`──「 *MENU DONATE* 」──

Hi *${cekName}* ${ucapanWaktu} 👋🏻

*Payment pulsa*
Number: 083125837776
A/N: __

*Payment Dana*
Number: 083125837776
A/N: rahmacc

${monoSpace}Terimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini ^_^${monoSpace}

_iam developer bot whatsapp._

 *Sosial Media*
 • *Whatsapp:* 083125837776
 • *Youtube:* God Hackid
 • *Github:* MrYoshiii
 `
}