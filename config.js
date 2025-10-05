const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY09zY1J0RkFJajNoQ1I5TElwb2tIMlJtNHNQWlMxSG1aOHNYaWtlVEEwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXcrL3NucEZhM3JFZGQwR0JKdi93cndZNWF5VE9adDI5SXo0YXd6d0RoQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtUHBtZmlJSEpWZ1FnSnMrb0pLVU5ybTF0QXVyMzkvbnVEUHpSMXJVK21BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5K3krNmttYlpWTkt5VTQ5TXp4bVZZRzc4emV4MDhYWHU5YWR0V3kvb1dBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndQaFptcUtWbnBmSVJNWHdMOGJacDRUYUIrVzQwbWFQcllZUnBDNlZybmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNCd3g1WmdGYTlVVGUydXRnN3J0bEY1VGpnU0N2TFVqRmlxMVFDQms3Q009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1BORTVDMHJFbEVjcmdHYXIrYjlDSkkzTWpHTU9lUUFWSTJuM0VWRG8zWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicjBYTDlyQmtBb1gwQ2d2WkVUUVNDZ25HQndnYncxZUgvQitvVUx1TGluND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkE0SGcwWXZyV3ZuMnZLdVZTVm5OVXhZTmtxanVRaWNuWUlQcWRFYUhBeUw0NGM3c3VkaWo3d29lL2dFL0cycS8rS0xkVS9KeVZBYVBva3V2YUpSRUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjgsImFkdlNlY3JldEtleSI6ImJkNmpub3RuM2ZpbEVyYU0ydVcza0tyejVlaE9XSkdxcVFBOE96U2tlVm89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDczNjYwNDc5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNTQ5NUQ0QUUxOEU2RThCRTc2ODVGMDM3NUE4RDZDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTgzMTI4Njd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ijc3RUpFMkRKIiwibWUiOnsiaWQiOiI5MjMwNzM2NjA0Nzk6MTVAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMTA1MzU3OTg0Njg2MzM6MTVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMeWszdkVIRUp2enRzWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJPYlRKUGNmRFFGZzBxOHJhbzNKYURvczZQU2dtd1VuRVBpdm5YQjhubGtRPSIsImFjY291bnRTaWduYXR1cmUiOiJzWlNHY0w1VVJQdGZTVXJLemNoZXlNYm5xSXEvUWFLQXZQaE8ydnNXRWVHYVJaNlJaUTdlQWhhaVg2bG1VeXVKdXNXdlhTc01TZjdQdXdFZU16RlhDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVGFWaXU5VEl3U0hZTDQ1Z3VaYWN6TFpGWTY5b3QvZHFBWkMxNkNRaC84RndZSFdqR1JXZUF2VjFMblRVRWkzaFBON0dJcWRaWEhza1BCTC9EdlBPQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwNzM2NjA0Nzk6MTVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVG0weVQzSHcwQllOS3ZLMnFOeVdnNkxPajBvSnNGSnhENHI1MXdmSjVaRSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU4MzEyODYyLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Zoraibxhassan *",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/5t7iav.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "HASSU-XD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "HASSU-XD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "03247947238",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*HASSU-XD*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ HASSU-XD❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/5t7iav.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923247947238",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
