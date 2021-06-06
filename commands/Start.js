module.exports = {
  name: "start",
  code: `
$addMessageReactions[$channelid;$get[id];🎉]
$setChannelVar[gaid;$get[id]]
$setMessagevar[gap;$message;$get[id]]
$let[id;$sendMessage[Giveaway start! {title:Giveaway🎉🎉} {description:
Prize: $message
End time: \`to end this giveaway host can type !end (message id) or !end\`} {color:RANDOM};yes]]
$deleteCommand`
}
