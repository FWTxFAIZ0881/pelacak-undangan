module.exports = {
name: "commandlist",
code: `
$author[$jsonRequest[https://dbdjs.leref.ga/functions/$noMentionMessage;description;{author:Failed rendering.}]$jsonRequest[https://dbdjs.leref.ga/functions/$noMentionMessage;message]]
$title[$jsonRequest[https://dbdjs.leref.ga/functions/$noMentionMessage;usage;{title:Failed rendering.}]]
$color[RANDOM]
$addTimestamp
$argsCheck[>1;Functions?]
$onlyIf[$checkContains[$botOwnerID;$authorID]!=false;]`}
