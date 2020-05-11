const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name : "ff",
    category: "info",
    description : "Details of free fire weapon",
    usage: "<Gun Name>",

    run : async(client, message, args) => {
        const response = args.join();

      switch (response) {
      case "famas":
      const famas = new MessageEmbed().setImage(
        "https://i.pinimg.com/originals/10/ee/e2/10eee2986d2a5a8ad0ed709b2b76d486.jpg"
      );
      message.channel.send(famas);
      break;
      case "ak":
      const ak = new MessageEmbed().setImage(
        "https://i.pinimg.com/originals/44/3f/2e/443f2ecd898eb95aa1de4db95eed9ed1.jpg"
      );
      message.channel.send(ak);
      break;
      case "scar":
      const scar = new MessageEmbed().setImage(
        "https://i.pinimg.com/originals/94/b2/12/94b21263321fd81cb91e3e46e387ffee.jpg"
      );
      message.channel.send(scar);
      break;
      case "mp40":
      const mp40 = new MessageEmbed().setImage(
        "https://i.pinimg.com/originals/90/6b/e1/906be1849f3101598f4ed525baf16071.jpg"
      );
      message.channel.send(mp40);
      break;
      case "m1014":
      const m1014 = new MessageEmbed().setImage(
        "https://i.pinimg.com/originals/a5/d3/d7/a5d3d745d2e68f9f5957d1d949a3b962.jpg"
      );
      message.channel.send(m1014);
      break;
      case "spas":
      const spas = new MessageEmbed().setImage(
        "https://i.pinimg.com/originals/d7/7d/aa/d77daac646517d042f8c2c90cf274d6b.jpg"
      );
      message.channel.send(spas);
      break;
      case "m79":
      const m79 = new MessageEmbed().setImage(
        "https://i.pinimg.com/originals/56/16/03/56160351664dc59303c594d6e9ce6501.jpg"
      );
      message.channel.send(m79);
      break;
      case "pan":
      const pan = new MessageEmbed().setImage(
        "https://i.pinimg.com/originals/90/8d/89/908d894e17b755d095220c53039a8110.jpg"
      );
      message.channel.send(pan);
      break;
      case "an94":
      const an94 = new MessageEmbed().setImage(
        "https://i.pinimg.com/originals/b7/ec/3a/b7ec3a892342d63228abf61b408e0dc9.jpg"
      );
      message.channel.send(an94);
      break;
      case "xm8":
      const xm8 = new MessageEmbed().setImage(
        "https://i.pinimg.com/originals/f4/d9/cb/f4d9cb67c9e77a1af4e010b73e205c74.jpg"
      );
      message.channel.send(xm8);
      break;
      case "m60":
      const m60 = new MessageEmbed().setImage(
        "https://i.pinimg.com/originals/c0/b7/88/c0b7885cd0a78207cc166643b04fb44e.jpg"
      );
      message.channel.send(m60);
      break;
      case "dragunov":
      const drg = new MessageEmbed().setImage(
        "https://i.pinimg.com/originals/69/6a/ab/696aabc70fdb2d622ecec1e20b8fa06b.jpg"
      );
      message.channel.send(drg);
      break;
      case "m4a1":
      const m4a1 = new MessageEmbed().setImage(
        "https://i.pinimg.com/originals/98/f3/16/98f3162a35c7139e4325733a0300f1fd.jpg"
      );
      message.channel.send(m4a1);
      break;
      case "sks":
      const sks = new MessageEmbed().setImage(
        "https://i.pinimg.com/originals/b0/56/51/b05651dd0599c5124691d149d244e294.jpg"
      );
      message.channel.send(sks);
      break;
      case "groza":
      const groza = new MessageEmbed().setImage(
        "https://i.pinimg.com/originals/59/9e/40/599e40914d5dfbabc81e71641638ad78.jpg"
      );
      message.channel.send(groza);
      break;
      case "katana":
      const katana = new MessageEmbed().setImage(
        "https://i.pinimg.com/originals/97/c1/ea/97c1ea5abb25ff836fe1bfea251389bb.jpg"
      );
      message.channel.send(katana);
      break;
      case "bat":
      const bat = new MessageEmbed().setImage(
        "https://i.pinimg.com/originals/78/86/78/78867831a9cb5a72e4a411517f889a6f.jpg"
      );
      message.channel.send(bat);
      break;
      case "grenade":
      const grenade = new MessageEmbed().setImage(
        "https://i.pinimg.com/originals/6e/6d/5b/6e6d5b4a6ac69ef6122f09b743f243bb.jpg"
      );
      message.channel.send(grenade);
      break;
      case "parang":
      const parang = new MessageEmbed().setImage(
        "https://i.pinimg.com/originals/63/10/0d/63100dc02cc07a88abba64e43201991f.jpg"
      );
      message.channel.send(parang);
      break;
      case "cg15":
      const cg15 = new MessageEmbed().setImage(
        "https://i.pinimg.com/originals/67/ca/f9/67caf9b6504a460b1e6a8f9243104086.jpg"
      );
      message.channel.send(cg15);
      break;
      case "p90":
      const p90 = new MessageEmbed().setImage(
        "https://i.pinimg.com/originals/2d/75/2f/2d752f409184a514e906271cc1f6983c.jpg"
      );
      message.channel.send(p90);
      break;
      case "ump":
      const ump = new MessageEmbed().setImage(
        "https://i.pinimg.com/originals/f0/b0/58/f0b05828aa2ee5b05e3e6b60f1e59679.jpg"
      );
      message.channel.send(ump);
      break;
      case "mp5":
      const mp5 = new MessageEmbed().setImage(
        "https://i.pinimg.com/originals/1f/b8/7d/1fb87d62f97c83c2dd300555edf1056e.jpg"
      );
      message.channel.send(mp5);
      break;
      case "vss":
      const vss = new MessageEmbed().setImage(
        "https://i.pinimg.com/originals/68/d4/f2/68d4f2b93ae6b02dece4162a015dbaba.jpg"
      );
      message.channel.send(vss);
      break;
      case "m249":
      const m249 = new MessageEmbed().setImage(
        "https://i.pinimg.com/originals/75/33/46/753346a99fc98d3e08768e4b4c83e1ef.jpg"
      );
      message.channel.send(m249);
      break;
      case "mgl140":
      const mgl140 = new MessageEmbed().setImage(
        "https://i.pinimg.com/originals/0f/30/46/0f30463a80d42af109c7b4e3c80f25a9.jpg"
      );
      message.channel.send(mgl140);
      break;
      case "rgs50":
      const rgs50 = new MessageEmbed().setImage(
        "https://i.pinimg.com/originals/a7/2d/c8/a72dc8256227360b09ab3288781956fe.jpg"
      );
      message.channel.send(rgs50);
      break;
      case "awm":
      const awm = new MessageEmbed().setImage(
        "https://i.pinimg.com/originals/7b/b3/c1/7bb3c1b3c6acc5b80de6c3dc9d62cf19.jpg"
      );
      message.channel.send(awm);
      break;
      case "kar98k":
      const kar98k = new MessageEmbed().setImage(
        "https://i.pinimg.com/originals/60/57/de/6057deb0499399e45fd88d3adfd279c3.jpg"
      );
      message.channel.send(kar98k);
      break;
      case "itachi":
      const itachi = new MessageEmbed().setImage(
        "https://i.pinimg.com/originals/19/e0/82/19e082ac5754c0861bf7c6f1d410f511.jpg"
      );    
      message.channel.send(itachi);
      break;
      // Charecter
      case "andrew":
        const andrew = new MessageEmbed()
        .setAuthor('Andrew (Male-42)')
        .setDescription('Andrew was a police officer. With his strong sense of justice, he spent most of his time chasing criminals. His singlet was his lucky charm, he had already lost count of the number of fights he survived wearing it. Searching for the truth behind everything was his call of duty.')
        .addField("SPECIAL SURVIVAL ABILITY","Decrease vest durability loss.",true)
        .addField('Armor Specialist', stripIndents`**> LEVEL 1:** Vest durability loss decreased by 2%
          **> LEVEL 2:** Vest durability loss decreased by 4%
          **> LEVEL 3:** Vest durability loss decreased by 6%
          **> LEVEL 4:** Vest durability loss decreased by 8%
          **> LEVEL 5:** Unlocks Alternative Police Set.
          **> LEVEL 6:** Vest durability loss decreased by 10%
          **> LEVEL 7:** Andrew's Achievement
          **> LEVEL 8:** Vest durability loss decreased by 12%`,true)
        .setImage("https://i.pinimg.com/originals/18/a1/e9/18a1e91d4b2290121709cab68c09dc7a.png");    
        message.channel.send(andrew);
        break;
        case "kelly":
        const Kelly = new MessageEmbed()
        .setAuthor('Kelly (Female-17)')
        .setDescription('Kelly is a high-school sprinter.She is also known as Shimada Kiriko.She loves to run, and can always be seen on the track.Running forward is built into her mind and body. No matter the obstacle, she will always push forward.Keep Running! KIRIKO!')
        .addField("SPECIAL SURVIVAL ABILITY","Increase sprinting speed.",true)
        .addField('Dash', stripIndents`**> LEVEL 1:** Sprinting speed increased by 1%
          **> LEVEL 2:** Sprinting speed increased by 2%
          **> LEVEL 3:** Sprinting speed increased by 3%
          **> LEVEL 4:** Sprinting speed increased by 4%
          **> LEVEL 5:** Unlocks Training Set.
          **> LEVEL 6:** Sprinting speed increased by 5%
          **> LEVEL 7:** Kelly's Achievement
          **> LEVEL 8:** Sprinting speed increased by 6%`,true)
        .setImage("https://i.pinimg.com/originals/4c/ac/c8/4cacc84ff5a294556138d1eca0d00b9c.png");    
        message.channel.send(Kelly);
        break;
        case "maxim":
        const Maxim = new MessageEmbed()
        .setAuthor('Maxim (Male-17)')
        .setDescription('Maxim loves to livestream while he eats.With a humongous appetite, he never says no to food.He has won several speed eating competitions, even if he goes against people who are much bigger than him.Born with a very cheerful disposition, Maxim is very well-liked by the people around him.')
        .addField("SPECIAL SURVIVAL ABILITY","Reduce time for eating mushrooms and using med kits.",true)
        .addField('Gluttony', stripIndents`**> LEVEL 1:** Reduces the time for eating mushrooms and using med kits by 2%
          **> LEVEL 2:** Reduces the time for eating mushrooms and using med kits by 4%
          **> LEVEL 3:** Reduces the time for eating mushrooms and using med kits by 6%
          **> LEVEL 4:** Reduces the time for eating mushrooms and using med kits by 8%
          **> LEVEL 5:** Maxim's Foodie Jacket.
          **> LEVEL 6:** Reduces the time for eating mushrooms and using med kits by 10%
          **> LEVEL 7:** Maxim's Achievement
          **> LEVEL 8:** Reduces the time for eating mushrooms and using med kits by 12%`,true)
        .setImage("https://i.pinimg.com/originals/d9/9d/52/d99d5212a1efea58b7be20004c8ea349.png");    
        message.channel.send(Maxim);
        break;
        case "ford":
        const Ford = new MessageEmbed()
        .setAuthor('Ford (Male-31)')
        .setDescription('Ford was an ordinary man from the navy.Even an ordinary man has his own secrets. Ford was no exception.A man’s name is not important. What’s important is his motives and actions.Ford was a very resilient man.The only person who can make his determination waver, was probably her…')
        .addField("SPECIAL SURVIVAL ABILITY","Reduce damage taken outside safe zone.",true)
        .addField('Iron Will', stripIndents`**> LEVEL 1:** Reduce damage when outside safe zone by 4%
          **> LEVEL 2:** Reduce damage when outside safe zone by 8%
          **> LEVEL 3:** Reduce damage when outside safe zone by 12%
          **> LEVEL 4:** Reduce damage when outside safe zone by 16%
          **> LEVEL 5:** Ford's uniform as a cadet in training.
          **> LEVEL 6:** Reduce damage when outside safe zone by 20%
          **> LEVEL 7:** Ford's Achievement
          **> LEVEL 8:** Reduce damage when outside safe zone by 24%`,true)
        .setImage("https://i.pinimg.com/originals/53/e1/4e/53e14e71f8f34d02d36d153c5d7f3570.png");    
        message.channel.send(Ford);
        break;
        case "olivia":
        const Olivia = new MessageEmbed()
        .setTitle('Olivia (Female-29)')
        .setDescription('Olivia was a nurse. Nursing and caring for those around her brings her happiness.No matter who, friend or foe, she always gives her all in taking care of her patients.It is said that patients saved by her healing touch, gain an inexplicable strength and confidence in life.Olivia is a very reliable companion in all situations.')
        .addField("SPECIAL SURVIVAL ABILITY","Players revived by Olivia will get extra HP.",true)
        .addField('Healing Touch', stripIndents`**> LEVEL 1:** Players revived by Olivia will get up with extra 6 HP.
          **> LEVEL 2:** Players revived by Olivia will get up with extra 12 HP.
          **> LEVEL 3:** Players revived by Olivia will get up with extra 18 HP.
          **> LEVEL 4:** Players revived by Olivia will get up with extra 24 HP.
          **> LEVEL 5:** Unlocks Intern Set.
          **> LEVEL 6:** Players revived by Olivia will get up with extra 30 HP.
          **> LEVEL 7:** Olivia's Achievement
          **> LEVEL 8:** Players revived by Olivia will get up with extra 40 HP.`,true)
        .setImage("https://i.pinimg.com/originals/ee/55/f3/ee55f32983d96d366052838c08baae29.png");    
        message.channel.send(Olivia);
        break; 
        case "nikita":
        const Nikita = new MessageEmbed()
        .setTitle('Nikita (Female-22)')
        .setDescription(`Nikita is a professional bodyguard.Her most important assignment is to protect and escort Carolyn, the daughter of the chairman of the Free Fire's organization.Growing up, Nikita was a air rifle marksman in school, which helped hone her agility and keen senses.To achieve her objectives, she infiltrated the organization and become Carolyn's bodyguard.`)
        .addField("SPECIAL SURVIVAL ABILITY","Reload Submachine gun faster.",true)
        .addField('Firearms Expert', stripIndents`**> LEVEL 1:** Submachine gun reload faster by 4%
          **> LEVEL 2:** Submachine gun reload faster by 8%
          **> LEVEL 3:** Submachine gun reload faster by 12%
          **> LEVEL 4:** Submachine gun reload faster by 16%
          **> LEVEL 5:** Nikita's Bodyguard Set.
          **> LEVEL 6:** Submachine gun reload faster by 20%
          **> LEVEL 7:** Nikita's Achievement
          **> LEVEL 8:** Submachine gun reload faster by 24%`,true)
        .setImage("https://i.pinimg.com/originals/a4/c7/3d/a4c73d0be86d77c4a40a86c5e7c0dd0d.png");    
        message.channel.send(Nikita);
        break;
        case "misha":
        const Misha = new MessageEmbed()
        .setTitle('Misha (Female-19)')
        .setDescription('Misha is an extremely talented racer.Her never-say-die attitude and insane driving skills earned her the title of Racequeen from the racing community.Always the one to tackle challenges head on, she rose rapidly to fame as she competed in more tournaments.To Misha, there are no curve roads, the road forward is always straight.')
        .addField("SPECIAL SURVIVAL ABILITY","Increase driving speed and reduce damage taken while inside vehicles.",true)
        .addField('Afterburner', stripIndents`**> LEVEL 1:** Driving speed increased by 2%, damage taken while in a vehicle decreased by 5%.
          **> LEVEL 2:** Driving speed increased by 4%, damage taken while in a vehicle decreased by 10%.
          **> LEVEL 3:** Driving speed increased by 6%, damage taken while in a vehicle decreased by 15%
          **> LEVEL 4:** Driving speed increased by 8%, damage taken while in a vehicle decreased by 20%
          **> LEVEL 5:** Misha's Racequeen Set.
          **> LEVEL 6:** Driving speed increased by 10%, damage taken while in a vehicle decreased by 25%
          **> LEVEL 7:** Misha's Achievement
          **> LEVEL 8:** Driving speed increased by 12%, damage taken while in a vehicle decreased by 30%`,true)
        .setImage("https://i.pinimg.com/originals/97/6e/48/976e486517be4defa30493dadb14b5b6.png");    
        message.channel.send(Misha);
        break; 
        case "kla":
        const Kla = new MessageEmbed()
        .setTitle('Kla (Male-27)')
        .setDescription('Kla was an esteemed martial artist, specializing in Muay Thai.A few years ago, he mysteriously disappeared and no one could find him.The Kla that reappeared before everyone is not the same one as the famous Kla that everyone in the industry was familiar with.He is now an avenger, and leaves no mercy to anyone.Be careful of his fists, they will break anything and everything.')
        .addField("SPECIAL SURVIVAL ABILITY","Increased fist damage.",true)
        .addField('Muay Thai', stripIndents`**> LEVEL 1:** Fist damage increased 100%
          **> LEVEL 2:** Fist damage increased 150%
          **> LEVEL 3:** Fist damage increased 200%
          **> LEVEL 4:** Fist damage increased 250%
          **> LEVEL 5:** Avenger's Fists (Jacket)
          **> LEVEL 6:** Fist damage increased 300%
          **> LEVEL 7:** Art of Eight
          **> LEVEL 8:** Fist damage increased 400%`,true)
        .setImage("https://i.pinimg.com/originals/50/73/5c/50735c516687de89b1207b0b03f39b67.png");    
        message.channel.send(Kla);
        break;                       
      default:
            message.channel.send("Not defined yet");
      }
      
    }
};