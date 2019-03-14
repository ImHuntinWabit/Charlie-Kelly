var Discord = require('discord.js');
var bot = new Discord.Client();
var token = ('NTI0NjE0Mjk0NTYyOTMwNjk4.Dvv9Fw.ePsM9Jmbglzz8P09tSHzxfBbV3w')
;
var randomMessage;
var randOn = false;
var responseArray = [ //add more messages here
  "All right, later dudes. S you in your A’s, don’t wear a C, and J all over your B’s.",
  "What are you gonna do, hit him? No, that’s a terrible idea, I’ll tell you why: It doesn’t unbang your mom.",
  "Taked baby. Meet at later bar, night or day sometime.",
  "Look, the girl, she wears a Lance Armstrong bracelet, okay? So I tell you I have cancer, right? Then you’re gonna tell her, she’s going to feel sorry for me, we’re going to start dating, and that’s the way the lie works!",
  "Cannibalism? Racism? Dude, that’s not for us ... those decisions are better left to the suits in Washington. We’re just here to eat some dude!",
  "Let me tell you a little lesson, buddy. The cream always rises to the top. And I’m about to show you the white, hot cream of an eighth-grade boy.",
  "Yes, my good man, I’ll have the milk steak, boiled over hard, and your finest jelly beans ... raw.",
  "I'll just regress, because I feel I've made myself perfectly redundant.",
  "If I was looking for safe I wouldn't be sticking my dick through a wall.",
  "Uhh…magnets.",
  "Do wasps make honey?",
  "Alright well I'm gonna check it out anyway, there could be something delicious in here that wasps do make and I want that",
  "I eat stickers all the time dude!",
  "Hello fellow American. This you should vote me. I leave power. Good. Thank you. Thank you. If you vote me, I'm hot.' What? 'Taxes, they'll be lower. Son. The Democratic vote for me is right thing to do Philadelphia. So do.",
  "Dude, it's amazing. Look at this. Bro, you could chop a camel right in the hump and drink all of its milk right off the tip of this thing.",
  "Here's a confession: I'm in love with a man. What? I'm in love with a man... a man named God. Does that make me gay? Am I gay for God? You betcha.",
  "Dude, I don't want to shove anything in my ass!",
  "Hey guys if I’m peeing, wake me up.",
  "Oh shit. Look at that door dude. See that door right there? That door marked ‘Pirate’? You think a pirate lives in there?",
  "You know there was a time where I’d help you raise this little dumpster baby brother of mine like a son. But that’s gone now ’cause you ruined it. You threw your babies away. And you threw your swords away. You threw your golf clubs and your tasty treats! And ya know what? I found ’em. And I’m gonna raise all of them!",
  " It’s just two men sharing the night. It might seem wrong, but it’s just right. It’s just two men sharing each other. It’s just two men like lovin’ brothers. One on top, and one on bottom. One inside, and one is out. One is screaming he’s so happy and the other’s screaming a passionate shout. It’s the Night Man. The feeling so wrong and right man, the feeling so wrong and right man. I can’t fight you man when you come inside me and pin me down with your strong hands and I become the Night… the passionate, passionate Night Man.",
  "He's gonna put all the brains in my head. Sweet.",
  "No I don't eat dragon, cause, uh, it's not a meal for peasants, it's a meal for kings, and I'm sort of a common man. But they don't eat us, it's a common misconception. They actually eat gold and treasure -- that's why they're always sitting on a pile of it.",
  "You’re doing a chicken and airline miles scam!? Today!?",
  "Dude I can't stop drinking now, I'd probably die!",
  "Wade Boggs had chicken right before every game, that's why they called him chicken-man.",
  "I'm getting sick of this shit. I really am. You keep treating me like a dumb-dumb and a grunt. I have potential, ya know. I could go places. I could do things. Who knows? I might even rule the world someday.",
  "Let's say you and I go toe-to-toe on bird law and see who comes out the victor.",
  "What is your spaghetti policy here?",
  "So you saw me eat that Hot Pocket I found in the garbage?",
  "Stupid science bitch, couldn't even make I more smarter!",
  "I'm not an executioner. I'm the best goddamn bird lawyer in the world",
  "Cat in the wall, eh? Now you're talking my language. I know this game.",
  "Bird law in this country is not governed by reason",
  "Hello, Charlie Kelly here, local business owner and cat enthusiast.",
  "I've got boxes full of Pepe",
  "Look, are we gonna talk about pirates all day or are we gonna find out what lives in here?",
  "When was the last time we played night crawlers together Frank?",
  "Little green ghouls, buddy.",
  "Cover your knees up if you're gonna be walking around everywhere.",
  "I'm a full-on-rapist",
  "There's some sort of weird chemical reaction that happens when you combine cat food, beer and glue. It makes you feel like extemely sick and tired and you're able to fall asleep.",
  "Cats do not abide by the laws of nature...you don't know shit about cats.",
  "It's about the night man, like you know like filling me up and I become him, I become the spirit of the night man.",
  "I could put the trash into a landfill where it’s going to stay for millions of years or I could burn it up and get a nice smokey smell in here and let that smoke go into the sky where it turns into stars.",
  "What is this, some sort of socialist country where the government doesn't pay for our healthcare?",
  "He would rape your butt until the room stinks, and then he would eat your butt and his son's butt until his stomach was... full of butt.",
  "What the hell's Day Bow Bow?"






];
var prefix = "!";
var timer = [3600,7200]; //set min and max in seconds for random messages

bot.on("ready", () => {
	console.log("Bot online and ready on " + bot.guilds.size + " server(s).");
});

bot.on('message', (msg) => {
  if (msg.content.startsWith(prefix + "on")) {
		if (randOn) {
			msg.channel.sendMessage("Already running.");
		}
		else {
			msg.channel.sendMessage("Random message started.")
    	randomMessage = setTimeout(function() {
				randMsg(msg.channel);
			}, 1000*timer[0]);
		}
  }
  else if (msg.content.startsWith(prefix + "off")) {
		if (randOn) {
			clearTimeout(randomMessage);
			msg.channel.sendMessage("Random message disabled.");
		}
		else {
			msg.channel.sendMessage("Not running.");
		}
  }
});

bot.login('NTI0NjE0Mjk0NTYyOTMwNjk4.Dvv9Fw.ePsM9Jmbglzz8P09tSHzxfBbV3w'
);

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

function randMsg(msgChan) {
	console.log("callback");
	var interval = 1000*randomIntFromInterval(timer[0],timer[1]);
  var rand = randomIntFromInterval(0,responseArray.length-1);
  if(responseArray[rand]) {
    msgChan.sendMessage(responseArray[rand]);
  }
	randomMessage = setTimeout(function() {
		randMsg(msgChan);
	}, interval);
}
