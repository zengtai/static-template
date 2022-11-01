"use strict";

var selectedGames = ["4096", "8BallKing", "AceMan", "AirBrawl", "AirHockey3D", "AmazingRoad", "AntRun", "ArcheryKing", "ArcheryMaster", "AttackHero", "BatterKing", "BattleBurger", "BestShooter", "BigEater", "BigSword", "BilliardKing", "BlockGun3D", "BlockMaster", "BlockMaze", "BoardTheTrain", "BombingTime", "BoomingPlant", "BounceShooter", "BrainMaster", "BraveArcher", "BubblePop", "BuilderRun", "BulletMan", "BulletMaster3D", "CandyHit", "CityExpress", "CleverJump", "CleverRescue", "ColorBall3D", "ColorBead", "ColorCrash", "ColorHammer", "ColorRing", "ColorSplash", "CopyLaser", "CountingMaster", "CrackShot", "CrashTower3D", "CrayonPop", "CrazyDrift", "CrazyHammer", "CrazyKart3D", "CrazyKnife", "CrazyMoto", "CrazyPortal", "CrazyRace", "DartsKing3D", "DashCat", "DeathRun", "DigEscape", "DressQueen", "EasyCharger", "FeedMaster", "FeverRacing", "FierceCity", "FillTheGlass", "FinalBattle", "FingerCannon", "FireTheGun", "FisherMan", "FruitMonster", "FuryEdge", "GlidingCharger", "GoldenBoot", "GoldenGlove", "GunShooter", "HamsterRun", "HappyTetris", "HelpTheSheep", "HiTaxi", "HumanTower", "HungryMonster", "Hurricane", "IdleRestaurantTycoon", "ImEmpire", "IronAttack", "JumpSmash", "KillAllZombies", "Knife", "LetMeIn", "LittleFarm", "LittleMiner", "LostInLust", "MagicCarpenter", "MagicDraw", "MagicJigsaw", "MagicNumber", "MagicPaint", "MagicPainter", "MagicParkour", "MagicWorm", "MahjongLink", "MahjongLink3D", "MatchingCook", "MelodyLink", "MergeAndDefense", "MergeCat", "MergeGuns3D", "MergeKill", "MergeMagicJewellery", "Mining", "MonsterCrash", "MrBullet", "MrRacer", "MyBowling3D", "MyCat", "MyTerritory", "NastyBomb", "OpenFire", "PandaRescue", "PowerShooter", "RollingAgent", "RollingBall", "RoofRunner", "RushAndFire", "SausageRun", "SharkisComing", "ShootingStar", "SnakeHit", "SoccerHero", "SpinTheMaze", "SuperArcher", "SuperCoaster", "SuperSoccer", "TinyWar", "TrafficRun", "TrainIsComing", "WoodIsland", "ZombieSurvival", "CrazyGunfight", "PenguinDash", "PuppyRun", "RainbowSplash", "RelivedLife", "ShootSmash", "SnakeGo", "Super2048", "SuperMiner", "SuperCells", "TheSameWorld", "UltraDrift", "VirusWar", "FlyPass", "FrozenMagic", "HappyBilliards", "HarvestStory", "IceEscape", "MagicBomb", "MyHome", "PetRun", "RocketJump", "SaveThePets", "ShootingCubes", "SkatingMaster", "SkyRunning3D", "SplittingCells", "SuperDefense", "SuperGolf", "SuperThrow", "TwistyRoad", "WildRoll", "DefenseTower", "DragonCrush", "HelpTheZombie", "StickmanVsZombies", "Transform", "Chess3D", "DeathJump", "FairyTalesPuzzle", "HillRacing", "JumpingMonkey", "PianoKeys", "PipePuzzle", "SolitaireClassic", "ZooBlast", "ZumaMarbles", "TrappedPirate", "CrazyJump", "RushingRover", "TableTennisChampionship", "PlantBeatZombies", "AnipopLink"];
var featuredGames = [
// puzzle
"MyHome", "PianoKeys",
// 2
"TrainIsComing",
//3
"SpinTheMaze",
// 4
// arcade
"IronAttack",
// 1
"JumpSmash",
// 2
"TrafficRun",
// 3
"HiTaxi",
// 4
"BoardTheTrain",
// 5
"LostInLust",
// 6
// "JumpingMonkey", // 6
"TwistyRoad",
// 7
"FlyPass",
// 8
"DressQueen",
// "CrayonPop",
"CrazyRace",
// 10
"HungryMonster",
// 11
// sports
"",
// 1
"8BallKing",
// 2
"ArcheryMaster",
// 3
// shooting
"BestShooter", "GunShooter",
// 2
"ArcheryKing", "AirBrawl", "CrackShot", "KillAllZombies",
// 6
"BulletMaster3D",
// 7
"BulletMan", "FireTheGun",
// 9
"MrBullet", "MergeGuns3D", "ShootingCubes",
// 12
// strategy
"MagicBomb", "BombingTime",
// 2
"MergeAndDefense",
// 3
"DefenseTower",
// 4
"TrappedPirate",
// 5
"FisherMan",
// 6
// racing
"SkyRunning3D",
// 1
"SkatingMaster", "FeverRacing",
// 3
"ColorBall3D" // 4
// adventure
// simulation
// match 3
// casual
// io
// girl
];

var recommended = ["LostInLust", "MyHome"];
var AD_MODE = "dev";

// 菜单逻辑
var menuButton = document.querySelectorAll(".menu-button");
var menu = document.querySelector(".menu-panel");
function toggleMenu() {
  menu.classList.toggle("hidden");
}
menuButton.forEach(function (item) {
  return item.addEventListener("click", toggleMenu);
});

// URL地址参数生成对象
function resolveUrlParams(query, key) {
  var params = {};
  var str = query.split("?")[1].split("&");
  str.forEach(function (i) {
    var a = i.split("=");
    params[a[0]] = a[1];
  });
  return params[key];
}

// 游戏数据

var domain = "https://cdn2.supereasygame.com";
var platform = "gpbox";
var fullData = data.games.filter(function (i) {
  return selectedGames.includes(i.name);
});
var categories = data.categories;
var ICON_FORMAT = "jpg";
var ICON_PATH = "https://cdn.iwantalipstick.com/gameicon2/".concat(ICON_FORMAT, "/");
// var PLAY_TAG = `20220908`;

// var basepath = `/copy`;
// var basepath = ``;

// 菜单数据
var menuList = document.querySelector(".menu-list");
var menuItems = categories.map(function (cat) {
  return "\n      <li>\n        <a\n          class=\"item-link\"\n          href=\"./category.html?name=".concat(cat.slug, "\"\n          title=\"").concat(cat.name, "\"\n        >\n          ").concat(cat.name, "\n        </a>\n      </li>\n      ");
}).join("");
var homeLink = "\n  <li>\n    <a\n      class=\"item-link\"\n      href=\"./index.html\"\n      title=\"Home\"\n    >\n      Home\n    </a>\n  </li>\n";
menuList.innerHTML = homeLink + menuItems;

// 首页数据
var pathname = window.location.pathname;
var query = window.location.search;
console.log(pathname);
console.log(query);
var pageTitle = document.querySelector(".page-title");
var gameList = document.querySelector(".game-list");
if (pathname.endsWith("/index.html") || pathname.endsWith("/")) {
  //
  var RecommendGames = function RecommendGames() {
    var section = document.createElement("section");
    var header = document.createElement("header");
    var h2 = document.createElement("h2");
    var ul = document.createElement("ul");
    section.setAttribute("class", "top-games");
    header.setAttribute("class", "py-2");
    ul.setAttribute("class", "card-list");
    topgames.forEach(function (item) {
      var li = document.createElement("li");
      li.setAttribute("class", "rounded-lg bg-gradient-to-tr to-blue-500 from-cyan-500 px-2 py-3 text-white shadow-lg shadow-blue-500/30");
      li.innerHTML = "\n        <a href=\"./game.html?appid=".concat(item.name, "&from=home\">\n          <div class=\"flex space-x-1\">\n            <img\n              class=\"rounded-lg border-2 border-white w-16 h-16 -mt-8 bg-white\"\n              src=\"").concat(ICON_PATH).concat(item.name, ".").concat(ICON_FORMAT, "\"\n              alt=\"").concat(item.title, "\"\n              width=\"100\"\n              height=\"100\"\n            />\n            <div class=\"text-xs drop-shadow\"><span class=\"text-yellow-200 text-sm\">").concat(item.played, "</span> Play</div>\n          </div>\n          <div class=\"flex justify-between items-center pt-2 drop-shadow\">\n            <h2 class=\"font-bold\">").concat(item.title, "</h2>\n            <span><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"w-8 h-8\">\n            <path fill-rule=\"evenodd\" d=\"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z\" clip-rule=\"evenodd\" />\n          </svg>                         \n          </span>\n          </div>\n        </a>\n      ");
      ul.append(li);
    });
    header.append(h2);
    section.append(header, ul);
    return section;
  };
  var Banner = function Banner() {
    var banner = document.createElement("div");
    var bannerTitle = document.createElement("div");
    var ins = document.createElement("ins");
    var script = document.createElement("script");
    banner.setAttribute("class", "banner");
    bannerTitle.innerHTML = "ADVERTISEMENT";
    bannerTitle.setAttribute("class", "text-center text-xs text-gray-400");
    ins.setAttribute("class", "adsbygoogle");
    ins.setAttribute("style", "display: flex; justify-content: center; background-color: #00000008");
    ins.setAttribute("data-ad-client", "ca-pub-9209477879340784");
    ins.setAttribute("data-ad-slot", "5973598328");
    ins.setAttribute("data-ad-format", "auto");
    ins.setAttribute("data-full-width-responsive", "true");
    AD_MODE === "dev" ? ins.setAttribute("data-adtest", "on") : null;
    script.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({})";
    banner.append(bannerTitle, ins, script);
    return banner;
  };
  var itemList = function itemList(items) {
    return items.map(function (game) {
      return "\n      <li class=\"text-center\" >\n        <a href=\"./game.html?appid=".concat(game.name, "\">\n          <img\n            class=\"inline-block rounded-lg\"\n            src=\"").concat(ICON_PATH).concat(game.name, ".").concat(ICON_FORMAT, "\"\n            alt=\"").concat(game.title, "\"\n            width=\"100\"\n            height=\"100\"\n            loading=\"lazy\"\n          />\n          <h2 class=\"pt-2 whitespace-nowrap overflow-hidden text-ellipsis\">\n            ").concat(game.title, "\n          </h2>\n        </a>\n      </li >\n      ");
    }).join("");
  }; //
  // 首页处理

  var homeContent = document.getElementById("home-content");
  var showPlayed = false;
  var showRecommended = true;
  var topgames = fullData.filter(function (item) {
    return recommended.includes(item.name);
  });
  homeContent.innerHTML = "";
  if (showRecommended) {
    homeContent.append(Banner(), RecommendGames());
  }
  categories.forEach(function (category, index) {
    var section = document.createElement("section");
    var header = document.createElement("header");
    var h2 = document.createElement("h2");
    var a = document.createElement("a");
    var ul = document.createElement("ul");
    var fragment = document.createDocumentFragment();
    header.append(h2, a);
    section.append(header, ul);
    section.setAttribute("class", "game-section");
    header.setAttribute("class", "section-header");
    ul.setAttribute("class", "section-list");
    a.setAttribute("class", "text-gray-400");
    var games = fullData.filter(function (item) {
      return item.category == category.name;
    }); // 获取分类游戏
    var total = games.length; // 获取该分类游戏数量

    h2.innerHTML = "".concat(category.name, " Games");

    // console.log(`games`, games);
    if (total > 6) {
      a.innerHTML = "More";
      a.setAttribute("href", "./category.html?name=".concat(category.slug, "&from=home"));
    }
    games.slice()
    // .filter((i) => featuredGames.includes(i.name))
    // .sort(() => 0.5 - Math.random()) // 随机
    .sort(function (a, b) {
      return new Date(a.time) > new Date(b.time) ? 1 : -1;
    }).sort(function (a, b) {
      return featuredGames.indexOf(a.name) < featuredGames.indexOf(b.name) ? 1 : -1;
    }).slice(0, index === 1 || index === 3 ? 12 : 6).forEach(function (game) {
      var li = document.createElement("li");
      li.innerHTML = "\n        <a href=\"./game.html?appid=".concat(game.name, "&from=home\">\n          <img\n            class=\"rounded-lg mx-auto\"\n            src=\"").concat(ICON_PATH).concat(game.name, ".").concat(ICON_FORMAT, "\"\n            alt=\"").concat(game.title, "\" width=\"100\"\n            height=\"100\"\n            width=\"100\"\n            ").concat(index > 0 ? "loading=\"lazy\"" : "", "\n          />\n          <h2 class=\"pt-2 whitespace-nowrap overflow-hidden text-ellipsis\">\n            ").concat(game.title, "\n          </h2>\n          ").concat(showPlayed ? "<div>\n                <span class=\"text-orange-400\">".concat(game.played, "</span> Play\n              </div>") : "", "\n        </a >\n  ");
      fragment.appendChild(li);
    });
    ul.appendChild(fragment);
    if (index % 2 == 0) {
      homeContent.append(section, Banner());
    } else {
      homeContent.append(section);
    }
  });
}
if (pathname.endsWith("/category.html")) {
  // 分类页处理
  // var queryName = `?name=`;
  // var queryId = query.slice(query.indexOf(queryName) + queryName.length);

  // console.log(`query: `, query.split("?")[1].split("&"));

  var queryId = resolveUrlParams(query, "name");

  // console.log(`params :`, params);
  console.log("queryId", queryId);
  pageTitle.innerHTML = categories.filter(function (item) {
    return item.slug.toLowerCase() == queryId.toLowerCase();
  })[0].name;
  document.title = "".concat(pageTitle.innerHTML, " Games");
  gameList.innerHTML = fullData.filter(function (item) {
    return item.category.toLowerCase() == queryId.toLowerCase().replace(/-/g, " ");
  }).map(function (item, index) {
    return "\n        <li class=\"flex justify-between items-center\">\n          <div>\n            <a class=\"flex space-x-3\" href=\"./game.html?appid=".concat(item.name, "&from=category\">\n            <img\n              class=\"object-cover h-20 w-20 rounded-lg\"\n              src=\"").concat(ICON_PATH).concat(item.name, ".").concat(ICON_FORMAT, "\"\n              alt=\"").concat(item.title, "\"\n              width=\"100\"\n              height=\"100\"\n              loading=").concat(index < 6 ? "eager" : "lazy", "\n            />\n            <div>\n              <h2 class=\"pt-2\">").concat(item.title, "</h2>\n              <div class=\"space-x-1\">\n                <span class=\"text-orange-400\">").concat(item.played && item.played || 0, "</span><span class=\"text-gray-400 text-center\">Play</span>\n              </div>\n            </div>\n            </a>\n          </div>\n          <div class=\"text-center\">\n            <a\n              class=\"inline-block rounded-full uppercase bg-indigo-500 text-white py-2 w-24\"\n              href=\"./game.html?appid=").concat(item.name, "&from=category\"\n              >Play</a>\n          </div>\n        </li>\n      ");
  }).join("");
}
if (pathname.endsWith("/game.html")) {
  // 详情页处理
  var _queryId = resolveUrlParams(query, "appid");
  var gameInfo = document.querySelector(".game-information");
  var gameDesc = document.querySelector(".game-description");
  var gamePlay = document.querySelector(".game-play");
  var gameRelated = document.querySelector(".game-related");
  var currentGame = fullData.find(function (item) {
    return item.name.toLowerCase() == _queryId.toLowerCase();
  });
  // 设置标题
  pageTitle.innerHTML = "";
  document.title = "Play ".concat(currentGame.title, " Now");
  gameInfo.innerHTML = "\n    <a title=\"Play ".concat(currentGame.title, " Now\" class=\"link-play p-4 flex gap-3\" href=\"").concat(domain, "/newgames/minigame.html?appid=").concat(currentGame.name, "&platform=").concat(platform, "\">\n      <img\n        class=\"rounded-2xl w-24 h-24\"\n        src=\"").concat(ICON_PATH).concat(currentGame.name, ".").concat(ICON_FORMAT, "\"\n        alt=\"").concat(currentGame.title, "\"\n        width=\"200\"\n        height=\"200\"\n      />\n      <div>\n        <h1 class=\"text-lg\">").concat(currentGame.title, "</h1>\n        <div class=\"flex space-x-2 star my-2\">\n          <div class=\"flex items-center\">\n            <span class=\"clip-star bg-yellow-400\"></span>\n            <span class=\"clip-star bg-yellow-400\"></span>\n            <span class=\"clip-star bg-yellow-400\"></span>\n            <span class=\"clip-star bg-yellow-400\"></span>\n            <span class=\"clip-star bg-gray-300\"></span>\n          </div>\n          <span class=\"text-gray-400\">").concat(currentGame.stars, "</span>\n        </div>\n        <div class=\"space-x-1\">\n          <span class=\"text-orange-400\">").concat(currentGame.played ? currentGame.played : "120.3K", "</span><span class=\"text-gray-400\">Play</span>\n        </div>\n      </div>\n    </a >\n  ");
  gamePlay.innerHTML = "\n    <a\n      title=\"Play ".concat(currentGame.title, " Now\"\n      class=\"inline-block rounded-full uppercase bg-indigo-500 text-white py-3 w-56\"\n      href=\"").concat(domain, "/newgames/minigame.html?appid=").concat(currentGame.name, "&platform=").concat(platform, "\">\n      Play\n    </a>\n  ");
  gameDesc.innerHTML = currentGame.description;
  gameRelated.innerHTML = fullData.filter(function (game) {
    return game.name !== currentGame.name;
  }).slice().sort(function () {
    return 0.5 - Math.random();
  }).slice(0, 3).map(function (item) {
    return "\n      <li class=\"flex justify-between items-center\">\n        <a class=\"flex space-x-3\" href=\"./game.html?appid=".concat(item.name, "&from=detail\">\n          <img\n            class=\"w-16 rounded-lg\"\n            src=\"").concat(ICON_PATH).concat(item.name, ".").concat(ICON_FORMAT, "\"\n            alt=\"").concat(item.title, "\"\n            width=\"100\"\n            height=\"100\"\n            loading=\"lazy\"\n          />\n          <div>\n            <h2\n              class=\"pt-2 whitespace-nowrap overflow-hidden text-ellipsis\"\n            >\n            ").concat(item.title, "\n            </h2>\n            <div class=\"space-x-1\">\n              <span class=\"text-orange-400\">").concat(item.played, "</span\n              ><span class=\"text-gray-400 text-center\">Play</span>\n            </div>\n          </div>\n        </a>\n        <div class=\"text-center\">\n          <a\n            class=\"inline-block rounded-full uppercase bg-indigo-500 text-white py-2 w-24\"\n            href=\"./game.html?appid=").concat(item.name, "&from=detail\"\n            >Play</a>\n        </div>\n      </li>\n    ");
  }).join("");
}
