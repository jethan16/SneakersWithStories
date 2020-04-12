let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/ProjectThree", {
    useNewUrlParser: true,
    useFindAndModify: false
});


let infoSeed = [
    {
        title: "Alvarez Hornets",
        name: "Steven Alvarez",
        silhouette: "Air Force 1 Mid",
        highlights: ["Team Honeycomb pattern", "Buzz City heel logo", "Large Hornets logo", "City skyline on inside panel"],
        pullQuote: "It’s always great when your kids take an interest in one of your hobbies",
        storySummary: `When your kids love and enjoy something, it’s fun to watch. When that thing is something you love as well, 
        it reaches a whole new level.
        
        "It started with the blue and white Penny Hardaway high tops, accelerated through the original neon green Air Max 95s and 
        quickly turned into a full blown obsession. After buying my first pair of Jordan 4s, the obsession turned into a collection. 
        
        I’m a long-standing fan of the Charlotte Hornets and an absolute lover of basketball so I knew I had to have a pair of 
        shoes added to the collection representing that piece of me. 
        
        To my surprise, as I began the shoe creation process, my boys began to take an interest in having their own pair. 
        Elated, I quickly agreed and had additional pairs created representing pieces of them - Fortnite and the Texas Rangers. 
        While I know they may grow out of those loves eventually, my hope is that they remember these shoes as the ones that sparked 
        their love for sneakers.⠀
        
        It’s always a great (and welcomed) joy when your kids take an interest in one of your hobbies and you can partake in it 
        together. It’s a moment I won’t soon forget."  -Steven Alvarez`,
        shoeImages: [],
        galImages: [],
    },
    {
        title: "Alvarez Rangers",
        name: "Benji Alvarez",
        silhouette: "Air Force 1 Mid",
        highlights: ["Benji’s baseball number", "Benji’s baseball number", "Benji’s baseball number"],
        pullQuote: "It’s always great when your kids take an interest in one of your hobbies",
        storySummary: `When your kids love and enjoy something, it’s fun to watch. When that thing is something you love as well, 
        it reaches a whole new level.
        
        "It started with the blue and white Penny Hardaway high tops, accelerated through the original neon green Air Max 95s and 
        quickly turned into a full blown obsession. After buying my first pair of Jordan 4s, the obsession turned into a collection. 
        
        I’m a long-standing fan of the Charlotte Hornets and an absolute lover of basketball so I knew I had to have a pair of 
        shoes added to the collection representing that piece of me. 
        
        To my surprise, as I began the shoe creation process, my boys began to take an interest in having their own pair. 
        Elated, I quickly agreed and had additional pairs created representing pieces of them - Fortnite and the Texas Rangers. 
        While I know they may grow out of those loves eventually, my hope is that they remember these shoes as the ones that sparked 
        their love for sneakers.⠀
        
        It’s always a great (and welcomed) joy when your kids take an interest in one of your hobbies and you can partake in it 
        together. It’s a moment I won’t soon forget."  -Steven Alvarez`,
        shoeImages: [],
        galImages: [],
    },
    {
        title: "Alvarez Fortnight",
        name: "Brooks Alvarez",
        silhouette: "Air Force 1 Mid",
        highlights: ["Logo on ankle strap", "Hand painted characters", "Hand painted weapons", "Element transitions on toe box"],
        pullQuote: "It’s always great when your kids take an interest in one of your hobbies",
        storySummary: `When your kids love and enjoy something, it’s fun to watch. When that thing is something you love as well, 
        it reaches a whole new level.
        
        "It started with the blue and white Penny Hardaway high tops, accelerated through the original neon green Air Max 95s and 
        quickly turned into a full blown obsession. After buying my first pair of Jordan 4s, the obsession turned into a collection. 
        
        I’m a long-standing fan of the Charlotte Hornets and an absolute lover of basketball so I knew I had to have a pair of 
        shoes added to the collection representing that piece of me. 
        
        To my surprise, as I began the shoe creation process, my boys began to take an interest in having their own pair. 
        Elated, I quickly agreed and had additional pairs created representing pieces of them - Fortnite and the Texas Rangers. 
        While I know they may grow out of those loves eventually, my hope is that they remember these shoes as the ones that sparked 
        their love for sneakers.⠀
        
        It’s always a great (and welcomed) joy when your kids take an interest in one of your hobbies and you can partake in it 
        together. It’s a moment I won’t soon forget."  -Steven Alvarez`,
        shoeImages: [],
        galImages: [],
    },
    {
        title: "Bones into Armies",
        name: "SwS Personal Project",
        silhouette: "Off-White Terra Kiger",
        highlights: ["Hand painted bone structure", "Hand painted digital camo", "Custom Off-White style type", "Custom shoe laces"],
        pullQuote: "It has spoken to the heart of my household already",
        storySummary: `On 3/13/20,  Elevation Worship dropped “Graves Into Gardens” - a song that will be an anthem to millions 
        for many years to come. It has spoken to the heart of my household already this year on a number of levels. 
        
        In the midst of one of the strongest bridges known to worship music resides the line “you turn bones into armies”. As 
        we sang this song at church while ringing in the new year, I was struck by how much this year was going to be a bones 
        into armies year - that God was going to take lost hopes, dreams, and promises and bring them to fruition before our 
        very eyes. Thus the idea for these shoes was born. 
        
        The word my family is rallying around this year is “restoration” - a true bones into armies term. Steven Furtick, 
        Chris Brown, Tiffany Hammer, and Brandon Lake delivered a poignant and timely reminder for what this year will hold 
        and now these shoes will carry the visual representation of the melody playing over and over in my head.`,
        shoeImages: [],
        galImages: [],
    },
    {
        title: "Breast Cancer Awareness",
        name: "Brandon Bullis",
        silhouette: "Nike Ebernon Mid",
        highlights: ["Grandmother nicknames on heels", "Vibrant triangular heel pattern", "Large Little Pink Houses of Hope logo", "Breast cancer ribbons on toe box"],
        pullQuote: "Things change when A cause becomes YOUR cause",
        storySummary: `Things change when A cause becomes YOUR cause. Brandon knows first hand what that’s like as that’s been 
        his story over the last several years. 
        
        His mother (“Ganny” to the grand-children) and his mother-in-law (“Booya” to the grand-children) are both cancer breast 
        cancer survivors and through that, he began to support “Little Pink Houses of Hope” - a charity founded by one of his 
        former high school teachers that provides week long retreats for breast cancer patients and families. 
        
        When given the chance to attend a local “Dancing with the Stars” event put on by Little Pink Houses of Hope, he saw an 
        opportunity to support a long time friend and participant in the competition as well as pay tribute to Ganny and Booya 
        through custom shoes. 
        
        They were a hit and all those honored felt loved and appreciated. Shoes are great, but the ability to leave a lasting 
        mark on the lives of those we love counts far greater than anything we put on our feet.`,
        shoeImages: [],
        galImages: [],
    },
    {
        title: "Ellys",
        name: "SwS Personal Project",
        silhouette: "Air Jordan 1 Mid",
        highlights: ["Candy cane swoosh", "Ellys logo on heel tab", "Santa jumpman logo on tongue"],
        pullQuote: "it was appropriate to offset the formal with some fun",
        storySummary: `These are an homage to a time when weather is cooler, lights are brighter, and Christmas spirit permeates 
        the air like the cinnamon scent in a Christmas specialty shop. The specific event is the annual Elevation Church staff 
        party, The Ellys. 
        
        While, like every year, the 2019 Ellys were a unique mix of ridiculousness, a Comedy Central roast, and an end of year 
        celebration, this particular year ushered us into the real life world of Candyland. The Ellys dictates the most formal of 
        attire be donned, but I felt that it was appropriate to offset the formal with some fun - as the night itself would do. 
        It is always the most anticipated event of the year within Elevation Church staff culture and it only felt appropriate 
        that I celebrate it in my own unique way - with a story of candy, Christmas, and culture on my feet.`,
        shoeImages: [],
        galImages: [],
    },
    {
        title: "Panthers",
        name: "Jonathan Adcock",
        silhouette: "Nike Air Monarch",
        highlights: ["Dean’s signature across heel tab", "Design mimics Panthers helmets", 'Historical Panthers logos/numbers painted behind “Keep Pounding”'],
        pullQuote: "that would be the last football game that Dean and I would attend together",
        storySummary: `Dean was the life of the party. In fact, we as a family agreed that when Dean was born, he took all the swag out of the gene pool.
         His swag was so strong that the Carolina Panthers sent the two of us to Super Bowl 52. Little did I realize, that would be the 
         last football game that Dean and I would attend together. 
         
         Dean was born with Downs Syndrome and was one of best guys I’ve ever known. When the Panthers became an NFL team, he and 
         I immediately latched on, creating one of the strongest bonds we would share throughout his life. In addition to our 
         extreme fandom, Dean was heavily involved in helping build the Special Olympics flag football league sponsored by the Panthers. 
         For his contributions with that and for being a super fan, the Panthers sent Dean to Super Bowl 52 (and I got to ride his coattails). 
         It was a trip of a lifetime. We cheered, danced, and mercilessly heckled fans from rival teams. 
         
         In preparation for the 2018 season, Dean began hinting (or outright saying) that he wanted me to take him to a game. 
         Shortly after the daily calls and voicemails on that subject began, Dean got sick, ended up in the ICU and would go on to 
         pass in late August. In his honor, we still attended a game, got rowdier than ever, and watched the Panthers obliterate the 
         Ravens. It had Dean’s hand all over it. These shoes will always help me remember my brother in one of the only ways he’d want 
         to be remembered - with his own shoe containing the story of the Carolina Panthers. -Jonathan Adcock`,
        shoeImages: [],
        galImages: [],
    },
    {
        title: "Penrose Triangle",
        name: "SwS Personal Project",
        silhouette: "Air Jordan 1 low",
        highlights: ["Nike swoosh Penrose triangle", "Pink stitching on white elements", "Penrose logo on heel"],
        pullQuote: "I realized there existed a unique opportunity",
        storySummary: `I’ve always been fascinated by illusionary art. Brain teasers, optical illusions, and even those crazy 3D picture 
        books could keep me entertained for hours as a kid. Growing up, MC Escher was my favorite artist because he would create art 
        that defied the laws of physics and make you have to really pay attention to understand what was going on.
        
        One random afternoon, I found my way to the local Salvation Army and picked up a beat pair of black Air Force 1 lows. 
        When making the all important decision of what art should grace the forces, I immediately went back to my childhood and 
        the illusionary art I so loved. While staring at the Nike swoosh, I realized there existed a unique opportunity. 
        If I could figure out how to do it, the Penrose triangle (or impossible triangle) could be made up of Nike swooshes. 
        I went back and forth for hours, but finally landed on a final possibility and decided it was the one. I proceeded to 
        choose bright colors to stand out from the black and created my own piece of illusionary art.
        
        Every time I see these shoes, I’m reminded of just how fun it was (and is) to lose yourself in a piece of art that 
        defies physics and makes your mind fill with wonder.`,
        shoeImages: [],
        galImages: [],
    },

];
db.Secret.deleteMany({})
    .then(() => db.Secret.collection.insertMany(infoSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

