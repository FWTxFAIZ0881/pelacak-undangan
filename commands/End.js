module.exports = {
name: "end",
code: `
$If[$message==;]
Congrats $randomText[$joinsplittext[;]] you won **$getMessageVar[gap;$getChannelvar[gaid]]**
$Textsplit[$get[m];,]
$let[m;$filterMessage[$get[c];<@835752627064930344>,]]

$let[c;$getReactions[$channelId;$getChannelVar[gaid];🎉;mention]
$else

Congrats $randomText[$joinsplittext[;]] you won **$getMessageVar[gap;$message]**
$Textsplit[$get[m];,]
$let[m;$filterMessage[$get[c];<@835752627064930344>,]]

$let[c;$getReactions[$channelId;$message;🎉;mention]
$suppressErrors[Giveaway with that message id not found]
$endif
`}
