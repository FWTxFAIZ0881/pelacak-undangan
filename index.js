const dbd = require("aoi.js")
const fs = require('fs')

const bot = new dbd.Bot({
token: "ODM1NzUyNjI3MDY0OTMwMzQ0.YIUBSQ.nDI8LQxfTqeTZfsEfEGF3PibSOE", // your bot token
prefix: "!",
fetchInvites: true
})
bot.variables({
    gaid: "",
    gap: ""})
bot.loadCommands("commands/")
bot.onJoined({})
bot.onLeave({})
bot.onInviteCreate({})
bot.onInviteDelete({})
bot.onBanAdd({})
bot.onGuildJoin({})
bot.onGuildLeave({})
bot.onMessage({
})

bot.timeoutCommand({
  code: `
$channelSendMessage[$timeoutData[ci];congrats to $randomText[$joinsplittext[;]]]
  $Textsplit[$get[c];,]
  $let[c;$getReactions[$channelId;$timeoutData[id];🎉;mention]]
  `
});

bot.joinCommand({
    channel: "795929898803658782",
    code: `
$if[$userinfo[code]!=]
Welcome **$username**
invited by: **$userTag[$userinfo[inviter]]**
$else
**$username** join but i dont know who invite **$username**
$endif`})

bot.command({
    name: "update",
    code: `all member has been cached $cachemembers`})

bot.command({
name: "invite",
code: `
$title[$username[$mentioned[1;yes]]'s invite info]
$thumbnail[$userAvatar[$mentioned[1;yes]]
$description[
Total: $sum[$userInfo[real;$mentioned[1;yes]];$userInfo[fake;$mentioned[1;yes]]]
Real: $userInfo[real;$mentioned[1;yes]]
Fake: $userInfo[fake;$mentioned[1;yes]]]


`
})

bot.command({
    name: "inviter",
    code: `
$if[$userinfo[inviter;$mentioned[1;yes]]==]
**$username[$mentioned[1;yes]]** i dont know how **$username** join
$else
$description[<@$mentioned[1;yes]> Invited By: <@$userInfo[inviter;$mentioned[1;yes]]> (\`using $userInfo[code;$mentioned[1;yes]] code\`)]
$endif`})
