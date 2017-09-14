const Eris = require("eris");

var bot = new Eris("MzU3ODY0MTU0MzE4NTAzOTM2.DJwSEw.lPp_OPNokbdmCeOqKD_fnFpanRs");
// Replace BOT_TOKEN with your bot account's token

bot.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
});

bot.on("messageCreate", (msg) => { // When a message is created
    if(msg.content.includes(":nani:") || msg.content.includes("<:cry:352414256202776576>")) { // If the message content is "!ping"
        //bot.createMessage(msg.channel.id, "<:hachikuji:352414255749922819>");
        // Send a message in the same channel with "Pong!"
	bot.createMessage(msg.channel.id, {embed:{thumbnail:{url:"https://stickershop.line-scdn.net/stickershop/v1/sticker/220443/ANDROID/sticker.png", height:'30', width: '30'}}});
    }
    if(msg.content.includes("arararagikun")) {
	bot.createMessage(msg.channel.id, {embed:{image:{url:"http://i.imgur.com/VNlmZtq.png"}}});
    }
});

bot.connect(); // Get the bot to connect to Discord
