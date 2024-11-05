// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

/**
 * title {string} website title
 * favicon {string} website favicon url
 * description {string} website description
 * author {string} author
 * avatar {string} Avatar used in the profile
 * motto {string} used in the profile
 * url {string} Website link
 * recentBlogSize {number} Number of recent articles displayed in the sidebar
 * archivePageSize {number} Number of articles on archive pages
 * postPageSize {number} Number of articles on blog pages
 * feedPageSize {number} Number of articles on feed pages
 * beian {string} Chinese policy
 */
export const site = {
  title: 'The Ghastly Gamer 👻', // required
  favicon: '/favicon.svg', // required
  description: 'A blog all about gaming and other hobbies ',
  author: "Ghastlymirror", // required
  avatar: '/avatar.png', // required
  motto: 'A blog all about gaming and other hobbies.',
  url: 'https://astro-yi-nu.vercel.app',
  recentBlogSize: 5,
  archivePageSize: 25,
  postPageSize: 10,
  feedPageSize: 20,
  beian: '',
}

/**
 * busuanzi {boolean} link: https://busuanzi.ibruce.info/
 * lang {string} Default website language
 * codeFoldingStartLines {number}
 * ga {string|false}
 */
export const config = {
  busuanzi: false,
  lang: 'en', // en | zh-cn
  codeFoldingStartLines: 16, // Need to re-run the project to take effect
  ga: false // If you want to integrate with Google Analytics, just enter your GA-ID here.
}

/**
 * Navigator
 * name {string}
 * iconClass {string} icon style
 * href {string}  link url
 * target {string} optional "_self|_blank" open in current window / open in new window
 */
export const categories = [
  {
    name: "Blog",
    iconClass: "ri-draft-line",
    href: "/blog/1",
  },

 
 
  {
    name: "Archive",
    iconClass: "ri-archive-line",
    href: "/archive/1",
  },

  {
    name: "Backlog",
    iconClass: "ri-gamepad-line",
    href: "https://www.backloggd.com/u/GhastlyMirror/",
  },

  {
    name: "Achievements",
    iconClass: "ri-medal-line",
    href: "https://www.exophase.com/user/ghastlymirror/",
  },



  {
    name: 'Now',
    iconClass: 'ri-pushpin-line',
    
    href: '/now',
  },
 
  {
    name: "Search",
    iconClass: "ri-search-line",
    href: "/search",
  },
 
  

  {
    name: "More",
    iconClass: "ri-more-fill",
    href: "javascript:void(0);",
    children: [
      {
        name: 'About',
        iconClass: 'ri-information-line',
        href: '/about',
      },
      {
        name: 'Blogroll',
        iconClass: 'ri-user-5-line',
        href: '/blogroll',
        target: '_self',
      },

      {
        name: "Message",
        iconClass: "ri-chat-1-line",
        href: "/message",
      },
    ]
  }
]

/**
 * Personal link address
 */
export const infoLinks = [
  {
    icon: 'ri-mastodon-fill',
    name: 'mastodon',
    outlink: 'https://blorbo.social/@creaturefeature',
  },
  
  {
    icon: 'ri-steam-fill',
    name: 'steam',
    outlink: 'https://steamcommunity.com/id/ghastlymirror/',
  },
  {
    icon: 'ri-youtube-fill',
    name: 'youtube',
    outlink: 'https://www.youtube.com/channel/UCYkyDHJDh-KclwOFBH0M_Sg',
  },
  {
    icon: 'ri-rss-fill',
    name: 'rss',
    outlink: 'https://astro-yi-nu.vercel.app/rss.xml',
  }
]

/**
 * donate
 * enable {boolean}
 * tip {string}
 * wechatQRCode: Image addresses should be placed in the public directory.
 * alipayQRCode: Image addresses should be placed in the public directory.
 * paypalUrl {string}
 */
export const donate = {
  enable: true,
  tip: "Thanks for reading, feel free to send me a tip! ☕ ",

  kofiUrl: "https://ko-fi.com/ghastlymirror",
}


/**
 * Friendship Links Page
 * name {string}
 * url {string}
 * avatar {string}
 * description {string}
 */
export const friendshipLinks =
  [
    // {
    //   name: "Cirry's Blog",
    //   url: 'https://cirry.cn',
    //   avatar: "https://cirry.cn/avatar.png",
    //   description: '前端开发的日常'
    // },

    {
      name: "Aywren´s Nook",
      url: "https://aywren.com/",
      avatar: "/images/blogroll/aywrenbutton.gif",
      description: "Gaming and Geek Blog"
    
    },

    {
      name: "The Collection Chamber",
      url: "https://collectionchamber.blogspot.com/",
      avatar: "/images/blogroll/collectionchamber.png",
      description: "A Vault Making Old Games Playable"
    },

    {
      name: "Elephant´s Eye on False Bay",
      url: "https://eefalsebay.blogspot.com/",
      avatar: "/images/blogroll/elephantbay.jpg",
      description: "Gardening for biodiversity on False Bay "
    },

    {
      name: "Tales of the Aggronaut",
      url: "https://aggronaut.com/",
      avatar: "/images/blogroll/aggronaut.jpeg",
      description: "Home of The Blaugust Challenge "
    },

    {
      name: "Nature Journeys",
      url: "https://petehillmansnaturephotography.wordpress.com/",
      avatar: "/images/blogroll/naturejourney.png",
      description: "A Wildlife Journal In Pictures"
    },

    {
      name: "Lost Letters",
      url: "https://lostletters.neocities.org/",
      avatar: "/images/blogroll/lostletters.png",
      description: "A cute 2000s Inspired Site"
    },

    {
      name: "Weird Biology",
      url: "https://www.weirdbiology.com/",
      avatar: "/images/blogroll/weirdbiology.gif",
      description: "Life is Weird on This Planet"
    },

    {
      name: "Bio Break",
      url: "https://biobreak.wordpress.com/",
      avatar: "/images/blogroll/biobreak.jpeg",
      description: "MMOs, retro gaming, music, and more"
    },

    {
      name: "Squaknet",
      url: "https://www.squakenet.com/",
      avatar: "/images/blogroll/squaknet.jpg",
      description: "Remembering good old PC games"
    },

    {
      name: "A Geek Girl´s Guide",
      url: "https://ageekgirlsguide.com/",
      avatar: "/images/blogroll/geekgirlguide.jpg",
      description: "A Girl´s Love for all things Geeky"
    },

    {
      name: "MMO Casual",
      url: "https://wowaltaddiction.blogspot.com/",
      avatar: "/images/blogroll/mmocasual.png",
      description: "A self confessed altoholic and sometimes casual raider"
    },

    {
      name: "Many Whelps",
      url: "https://manywelps.com/",
      avatar: "/images/blogroll/manywhelps.png",
      description: "Player of Games and Writer of Blogs"
    },

    {
      name: "A Nerdy Fujo Cries",
      url: "https://anerdyfujocries.wordpress.com/",
      avatar: "/images/blogroll/nerdyfujo.png",
      description: "Boys, Anime, Manga, and more Boys"
    },

    {
      name: "Monsterlady´s Diary",
      url: "https://monsterladysdiary.com/",
      avatar: "/images/blogroll/monsterlady.png",
      description: "A Blogger with vivid Imagination"
    },

    {
      name: "A Spot of Mummery",
      url: "https://spotofmummery.com/",
      avatar: "/images/blogroll/spotofmummery.jpg",
      description: "Fansite Dedicated to FFXIV"
    },

    {
      name: "OldGames Download",
      url: "https://oldgamesdownload.com/",
      avatar: "/images/blogroll/oldgames.png",
      description: "Museum of Abandonware Video Games"
    },

    {
      name: "Time to Loot",
      url: "https://www.timetoloot.com/",
      avatar: "/images/blogroll/timetoloot.jpg",
      description: "Finding Fun in Loot and Adventure"
    },

    {
      name: "Ally´s Site of the Day",
      url: "https://allyssotd.tumblr.com/",
      avatar: "/images/blogroll/allysite.jpg",
      description: "Recommending a New Site Everyday"
    },
{
    name: "FLAMED FURRY",
    url: "https://flamedfury.com/",
    avatar: "/images/blogroll/flamedfury.png",
    description: "A Love Letter to the Web"
  },

  {
  name: "Damage Control Blog",
  url: "https://www.dcgameblog.com/",
  avatar: "/images/blogroll/damagecontrol.png",
  description: "Video Game, Anime and Geek Culture News"
},

{
  name: "The Ancient Gaming Noob",
  url: "https://tagn.wordpress.com/",
  avatar: "/images/blogroll/ancientgamingnoob.png",
  description: "MMO Commentary"
},

{
  name: "Crystal Dreams",
  url: "https://www.crystal-dreams.us/",
  avatar: "/images/blogroll/crystaldream.jpg",
  description: "Cute Game Guides and Reviews"
},

{
  name: "Massively Overpowered",
  url: "https://massivelyop.com/",
  avatar: "/images/blogroll/massoverpowered.png",
  description: " Independent MMORPG news and opinions"
},

{
  name: "Imaginary Karin",
  url: "https://imaginarykarin.com/",
  avatar: "/images/blogroll/imaginarykarin.jpg",
  description: " Blog and Artwork by Karin Ogren"
},

{
  name: "Binary Digit",
  url: "https://binarydigit.cafe/",
  avatar: "/images/blogroll/binarydigit.png",
  description: " A little Digital Cafe on The Internet"
},

{
  name: "The New Leaf Journal",
  url: "https://thenewleafjournal.com/",
  avatar: "/images/blogroll/newleafjournal.jpg",
  description: " Where the leaves are perennially virid"
},

{
  name: "Micro Maique",
  url: "https://maique.eu/",
  avatar: "/images/blogroll/maique.jpg",
  description: "A Geeky Photographer from Portugal"
},


{
  name: "Pretendo Network",
  url: "https://pretendo.network/",
  avatar: "/images/blogroll/pretendo.gif",
  description: "Keeping Wii U and 3DS Servers Alive"
},


]

/**
 * Comment Feature
 * enable {boolean}
 * type {string} required waline | giscus
 * serverUrl {string} server link
 * lang {string} link: https://waline.js.org/guide/features/i18n.html
 * pageSize {number} number of comments per page. default 10
 * wordLimit {number} Comment word s limit. When a single number is filled in, it 's the maximum number of comment words. No limit when set to 0
 * count {number} recent comment numbers
 * pageview {boolean} display the number of page views and comments of the article
 * reaction {string | string[]} Add emoji interaction function to the article
 * requiredMeta {string[]}  Set required fields, default anonymous
 * whiteList {string[]} set some pages not to display reaction
 */
export const comment = {
  enable: true,
  type: 'giscus', // waline | giscus,
  //waline config
  serverUrl: "https://xxxxx.xxxxx.app",
  // waline config
  lang: 'en',
  pageSize: 20,
  wordLimit: '',
  count: 5,
  pageview: true,
  reaction: true,
  requiredMeta: ["nick", "mail"],
  whiteList: ['/message/'],

  // giscus config
  giscusConfig: {
    'data-repo': "cirry/astro-yi",
    'data-repo-id': "R_kgDOJNr3Jw",
    'data-category': "Announcements",
    'data-category-id': "DIC_kwDOJNr3J84CftB-",
    'data-mapping': "pathname",
    'data-strict': "0",
    'data-reactions-enabled': "1",
    'data-emit-metadata': "0",
    'data-input-position': "bottom",
    'data-theme': "light",
    'data-lang': "zh-CN",
    'crossorigin': "anonymous",
  }

}
