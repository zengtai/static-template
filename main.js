"use strict";

// 统计
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var _upa = window._upa = window._upa || [];
var _upa_network = 1; //网络情况开关
var _upa_impression_target = '.upa-impression-target';
var u_tag = 'UPTAP10004'; //
_upa.push(['pageview', document.URL || '', window.screen.width || 0, window.screen.height || 0]);
(function () {
  var u = "https://cdn2.supereasygame.com/web/analytics/";
  var d = document,
    g = d.createElement('script'),
    s = d.getElementsByTagName('script')[0];
  g.async = true;
  g.src = u + 'analytics_v1_1.js';
  s.parentNode.insertBefore(g, s);
})();

// 游戏图标、链接参数

var CHANNEL = "googleads_main";
var GAME_DOMAIN = "https://cdn2.supereasygame.com";
var ICON_FORMAT = "jpg";
var ICON_PATH = "https://cdn.iwantalipstick.com/gameicon2/".concat(ICON_FORMAT, "/");
var DEV_MODE = false; // 广告测试模式，设置 adtest="on"
// let PLAY_TAG = `20220908`;

// 选定游戏

var SELECTED_GAMES = ["4096", "8BallKing", "AceMan", "AirBrawl", "AirHockey3D", "AmazingRoad", "AntRun", "ArcheryKing", "ArcheryMaster", "AttackHero", "BatterKing", "BattleBurger", "BestShooter", "BigEater", "BigSword", "BilliardKing", "BlockGun3D", "BlockMaster", "BlockMaze", "BoardTheTrain", "BombingTime", "BoomingPlant", "BounceShooter", "BrainMaster", "BraveArcher", "BubblePop", "BuilderRun", "BulletMan", "BulletMaster3D", "CandyHit", "CityExpress", "CleverJump", "CleverRescue", "ColorBall3D", "ColorBead", "ColorCrash", "ColorHammer", "ColorRing", "ColorSplash", "CopyLaser", "CountingMaster", "CrackShot", "CrashTower3D", "CrayonPop", "CrazyDrift", "CrazyHammer", "CrazyKart3D", "CrazyKnife", "CrazyMoto", "CrazyPortal", "CrazyRace", "DartsKing3D", "DashCat", "DeathRun", "DigEscape", "DressQueen", "EasyCharger", "FeedMaster", "FeverRacing", "FierceCity", "FillTheGlass", "FinalBattle", "FingerCannon", "FireTheGun", "FisherMan", "FruitMonster", "FuryEdge", "GlidingCharger", "GoldenBoot", "GoldenGlove", "GunShooter", "HamsterRun", "HappyTetris", "HelpTheSheep", "HiTaxi", "HumanTower", "HungryMonster", "Hurricane", "IdleRestaurantTycoon", "ImEmpire", "IronAttack", "JumpSmash", "KillAllZombies", "Knife", "LetMeIn", "LittleFarm", "LittleMiner", "LostInLust", "MagicCarpenter", "MagicDraw", "MagicJigsaw", "MagicNumber", "MagicPaint", "MagicPainter", "MagicParkour", "MagicWorm", "MahjongLink", "MahjongLink3D", "MatchingCook", "MelodyLink", "MergeAndDefense", "MergeCat", "MergeGuns3D", "MergeKill", "MergeMagicJewellery", "Mining", "MonsterCrash", "MrBullet", "MrRacer", "MyBowling3D", "MyCat", "MyTerritory", "NastyBomb", "OpenFire", "PandaRescue", "PowerShooter", "RollingAgent", "RollingBall", "RoofRunner", "RushAndFire", "SausageRun", "SharkisComing", "ShootingStar", "SnakeHit", "SoccerHero", "SpinTheMaze", "SuperArcher", "SuperCoaster", "SuperSoccer", "TinyWar", "TrafficRun", "TrainIsComing", "WoodIsland", "ZombieSurvival", "CrazyGunfight", "PenguinDash", "PuppyRun", "RainbowSplash", "RelivedLife", "ShootSmash", "SnakeGo", "Super2048", "SuperMiner", "SuperCells", "TheSameWorld", "UltraDrift", "VirusWar", "FlyPass", "FrozenMagic", "HappyBilliards", "HarvestStory", "IceEscape", "MagicBomb", "MyHome", "PetRun", "RocketJump", "SaveThePets", "ShootingCubes", "SkatingMaster", "SkyRunning3D", "SplittingCells", "SuperDefense", "SuperGolf", "SuperThrow", "TwistyRoad", "WildRoll", "DefenseTower", "DragonCrush", "HelpTheZombie", "StickmanVsZombies", "Transform", "Chess3D", "DeathJump", "FairyTalesPuzzle", "HillRacing", "JumpingMonkey", "PianoKeys", "PipePuzzle", "SolitaireClassic", "ZooBlast", "ZumaMarbles", "TrappedPirate", "CrazyJump", "RushingRover", "TableTennisChampionship", "PlantBeatZombies", "AnipopLink"];

// 首页游戏

var TOP_GAMES = ["LostInLust", "MyHome"]; // 最顶部位置

var GAMES_FOR_HOME = ["FillTheGlass", "PianoKeys", "TrainIsComing", "SpinTheMaze", "MagicWorm", "HelpTheSheep", "IronAttack", "JumpSmash", "TrafficRun", "HiTaxi", "BoardTheTrain", "LostInLust", "TwistyRoad", "FlyPass", "DressQueen", "CrazyRace", "HungryMonster", "HumanTower", "8BallKing", "ArcheryMaster", "SuperSoccer", "ShootingStar", "BilliardKing", "PowerShooter", "BestShooter", "GunShooter", "ArcheryKing", "AirBrawl", "CrackShot", "KillAllZombies", "BulletMaster3D", "BulletMan", "FireTheGun", "MrBullet", "MergeGuns3D", "ShootingCubes", "MagicBomb", "BombingTime", "MergeAndDefense", "DefenseTower", "TrappedPirate", "FisherMan", "SkyRunning3D", "SkatingMaster", "FeverRacing", "ColorBall3D", "IceEscape", "RoofRunner", "AttackHero", "SausageRun", "BraveArcher", "WildRoll", "RollingAgent", "GlidingCharger", "MyCat", "LittleMiner", "LittleFarm", "WoodIsland", "BoomingPlant", "HarvestStory", "ColorCrash", "BounceShooter", "RainbowSplash", "MatchingCook", "MelodyLink", "MahjongLink", "MagicCarpenter", "NastyBomb", "DashCat", "CandyHit", "PetRun", "ShootSmash", "Hurricane", "FuryEdge", "CrazyGunfight", "CrazyHammer", "MergeKill", "Knife"];

// 游戏数据

var fullData = data.games.filter(function (i) {
  return SELECTED_GAMES.includes(i.name);
}); // 按筛选的游戏取数据

var tmpCategories = _toConsumableArray(new Set(fullData.map(function (i) {
  return i.category;
})));
var categories = data.categories.filter(function (i) {
  return tmpCategories.includes(i.name);
}); // 分类数据

// console.log(`categories: `, categories);

// 导航菜单切换逻辑

var menuButton = document.querySelectorAll(".menu-button");
var menu = document.querySelector(".menu-panel");
function toggleMenu() {
  menu.classList.toggle("hidden");
}
menuButton.forEach(function (item) {
  return item.addEventListener("click", toggleMenu);
});

// 导航菜单数据

var menuHomeItem = "<li><a class=\"item-link\" href=\"./index.html?from=menu\" title=\"Home\">Home</a></li>";
var menuList = document.querySelector(".menu-list");
var menuItems = categories.map(function (cat) {
  return "<li><a class=\"item-link\" href=\"./category.html?name=".concat(cat.slug, "?from=menu\" title=\"").concat(cat.name, " Games\">").concat(cat.name, "</a></li>");
}).join("");
menuList.innerHTML = menuHomeItem + menuItems;

// URL处理

// URL地址请求参数处理生成对象
function resolveUrlParams(query, key) {
  var params = {};
  var str = query.split("?")[1].split("&");
  str.forEach(function (i) {
    var a = i.split("=");
    params[a[0]] = a[1];
  });
  return params[key];
}

// URL路径、请求参数
var pathname = window.location.pathname;
var query = window.location.search;
console.log(pathname);
console.log(query);

// 通用区块

var pageTitle = document.querySelector(".page-title"); // 标题
var gameList = document.querySelector(".game-list"); // 列表

// 首页处理

// !!! 判定不太严谨 !!!
if (pathname.endsWith("/index.html") || pathname.endsWith("/")) {
  //
  var TopGames = function TopGames() {
    var section = document.createElement("section");
    var header = document.createElement("header");
    var h2 = document.createElement("h2");
    var ul = document.createElement("ul");
    section.setAttribute("class", "top-games");
    header.setAttribute("class", "py-2");
    ul.setAttribute("class", "card-list");
    topgames.forEach(function (item) {
      var li = document.createElement("li");
      li.setAttribute("class", "top-list-item upa-impression-target");
      li.setAttribute("upa-tag", "".concat(item.name));
      li.innerHTML = "\n        <a href=\"./game.html?appid=".concat(item.name, "&from=home\" onclick=\"_upa.push(['click', '").concat(item.name, "', '']); gtag('event', 'game_detail_click', { game : '").concat(item.name, "' })\">\n          <div class=\"flex space-x-1\">\n            <img\n              class=\"rounded-lg border-2 border-white w-16 h-16 -mt-8 bg-white\"\n              src=\"").concat(ICON_PATH).concat(item.name, ".").concat(ICON_FORMAT, "\"\n              alt=\"").concat(item.title, "\"\n              width=\"100\"\n              height=\"100\"\n            />\n            <div class=\"text-xs drop-shadow\"><span class=\"text-yellow-200 text-sm\">").concat(item.played, "</span> Play</div>\n          </div>\n          <div class=\"flex justify-between items-center pt-2 drop-shadow\">\n            <h2 class=\"font-bold\">").concat(item.title, "</h2>\n            <span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"w-8 h-8\">\n            <path fill-rule=\"evenodd\" d=\"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z\" clip-rule=\"evenodd\" /></svg>                         \n            </span>\n          </div>\n        </a>");
      ul.append(li);
    });
    header.append(h2);
    section.append(header, ul);
    return section;
  };
  var Banner = function Banner(slot) {
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
    ins.setAttribute("data-ad-slot", slot);
    ins.setAttribute("data-ad-format", "auto");
    ins.setAttribute("data-full-width-responsive", "true");
    DEV_MODE === true ? ins.setAttribute("data-adtest", "on") : null;
    script.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({})";
    banner.append(bannerTitle, ins, script);
    return banner;
  };
  var homeContent = document.getElementById("home-content");
  var showPlayed = false;
  var showRecommended = true;
  var topgames = fullData.filter(function (item) {
    return TOP_GAMES.includes(item.name);
  });
  homeContent.innerHTML = "";
  if (showRecommended) {
    homeContent.append(Banner("5107946741"), TopGames()); // 广告
  }

  categories.sort(function (a, b) {
    return a.total < b.total ? 1 : -1;
  }).forEach(function (category, index) {
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
      return item.category === category.name;
    }).filter(function (i) {
      return GAMES_FOR_HOME.includes(i.name);
    }); // 获取分类游戏
    // console.log(`games: `, games);
    var total = games.length; // 获取该分类游戏数量

    h2.innerHTML = "".concat(category.name, " Games");

    // console.log(`games`, games);
    if (category.total > 6) {
      a.innerHTML = "More";
      a.setAttribute("href", "./category.html?name=".concat(category.slug, "&from=home"));
    }
    games.slice()
    // .filter((i) => featuredGames.includes(i.name))
    // .sort(() => 0.5 - Math.random()) // 随机
    // .sort((a, b) => new Date(a.time) < new Date(b.time) ? 1 : -1)
    .sort(function (a, b) {
      return GAMES_FOR_HOME.indexOf(a.name) > GAMES_FOR_HOME.indexOf(b.name) ? 1 : -1;
    })
    // .slice(0, index === 1 || index === 3 ? 12 : 6)
    .forEach(function (game) {
      var li = document.createElement("li");
      li.setAttribute("class", "upa-impression-target");
      li.setAttribute("upa-tag", "".concat(game.name));
      li.innerHTML = "\n          <a href=\"./game.html?appid=".concat(game.name, "&from=home\" onclick=\"_upa.push(['click', '").concat(game.name, "', '']); gtag('event', 'game_detail_click', { game : '").concat(game.name, "' })\">\n            <img\n              class=\"rounded-lg mx-auto\"\n              src=\"").concat(ICON_PATH).concat(game.name, ".").concat(ICON_FORMAT, "\"\n              alt=\"").concat(game.title, "\" width=\"100\"\n              height=\"100\"\n              width=\"100\"\n              ").concat(index > 0 ? "loading=\"lazy\"" : "", "\n            />\n            <h2 class=\"pt-2 whitespace-nowrap overflow-hidden text-ellipsis\">\n              ").concat(game.title, "\n            </h2>\n            ").concat(showPlayed ? "<div><span class=\"text-orange-400\">".concat(game.played, "</span> Play</div>") : "", "\n          </a>");
      fragment.appendChild(li);
    });
    ul.appendChild(fragment);
    if (index % 2 == 0) {
      homeContent.append(section, Banner(5107946741));
    } else {
      homeContent.append(section);
    }
  });

  // function itemList(items) {
  //   return items
  //     .map(
  //       (game) => `
  //     <li class="text-center" >
  //       <a href="./game.html?appid=${game.name}">
  //         <img
  //           class="inline-block rounded-lg"
  //           src="${ICON_PATH}${game.name}.${ICON_FORMAT}"
  //           alt="${game.title}"
  //           width="100"
  //           height="100"
  //           loading="lazy"
  //         />
  //         <h2 class="pt-2 whitespace-nowrap overflow-hidden text-ellipsis">
  //           ${game.title}
  //         </h2>
  //       </a>
  //     </li >
  //     `
  //     )
  //     .join(``);
  // }
  //
}

// 分类页处理

if (pathname.endsWith("/category.html")) {
  // let queryName = `?name=`;
  // let queryId = query.slice(query.indexOf(queryName) + queryName.length);

  // console.log(`query: `, query.split("?")[1].split("&"));

  var queryId = resolveUrlParams(query, "name");

  // console.log(`params :`, params);
  console.log("queryId", queryId);
  pageTitle.innerHTML = categories.filter(function (item) {
    return item.slug.toLowerCase() === queryId.toLowerCase();
  })[0].name;
  document.title = "".concat(pageTitle.innerHTML, " Games");
  gameList.innerHTML = fullData.filter(function (item) {
    return item.category.toLowerCase() == queryId.toLowerCase().replace(/-/g, " ");
  }).map(function (item, index) {
    return "\n        <li class=\"game-list-item upa-impression-target\" upa-tag=\"".concat(item.name, "\">\n          <div>\n            <a class=\"flex space-x-3\" href=\"./game.html?appid=").concat(item.name, "&from=category\" onclick=\"_upa.push(['click', '").concat(item.name, "', '']); gtag('event', 'game_detail_click', { game : '").concat(item.name, "' })\">\n            <img\n              class=\"item-image\"\n              src=\"").concat(ICON_PATH).concat(item.name, ".").concat(ICON_FORMAT, "\"\n              alt=\"").concat(item.title, "\"\n              width=\"100\"\n              height=\"100\"\n              loading=").concat(index < 6 ? "eager" : "lazy", "\n            />\n            <div>\n              <h2 class=\"pt-2\">").concat(item.title, "</h2>\n              <div class=\"space-x-1\">\n                <span class=\"text-orange-400\">").concat(item.played && item.played || 0, "</span><span class=\"text-gray-400 text-center\"> Play</span>\n              </div>\n            </div>\n            </a>\n          </div>\n          <div class=\"text-center\">\n            <a\n              class=\"item-button\"\n              href=\"./game.html?appid=").concat(item.name, "&from=category\"\n              onclick=\"_upa.push(['click', '").concat(item.name, "', '']); gtag('event', 'game_detail_click', { game : '").concat(item.name, "' })\"\n              >Play</a>\n          </div>\n        </li>\n      ");
  }).join("");
}

// 详情页处理

if (pathname.endsWith("/game.html")) {
  var _queryId = resolveUrlParams(query, "appid");
  var gameInfo = document.querySelector(".game-information");
  var gameDesc = document.querySelector(".game-description");
  var gamePlay = document.querySelector(".game-play");
  var gameRelated = document.querySelector(".game-related");
  var currentGame = fullData.find(function (item) {
    return item.name.toLowerCase() === _queryId.toLowerCase();
  });
  // 设置标题
  pageTitle.innerHTML = "";
  document.title = "Play ".concat(currentGame.title, " Now");
  gameInfo.setAttribute("upa-tag", "".concat(currentGame.name));
  gameInfo.innerHTML = "\n    <a target=\"_blank\" onclick=\"_upa.push(['click', '".concat(currentGame.name, "', '']); gtag('event', 'game_detail_click', { game : '").concat(currentGame.name, "' }); return gtag_report_conversion('").concat(GAME_DOMAIN, "/newgames/minigame.html?appid=").concat(currentGame.name, "&platform=").concat(CHANNEL, "')\" title=\"Play ").concat(currentGame.title, " Now\" class=\"link-play p-4 flex space-x-3\" href=\"").concat(GAME_DOMAIN, "/newgames/minigame.html?appid=").concat(currentGame.name, "&platform=").concat(CHANNEL, "\">\n      <img\n        class=\"rounded-2xl w-24 h-24\"\n        src=\"").concat(ICON_PATH).concat(currentGame.name, ".").concat(ICON_FORMAT, "\"\n        alt=\"").concat(currentGame.title, "\"\n        width=\"200\"\n        height=\"200\"\n      />\n      <div>\n        <h1 class=\"text-lg\">").concat(currentGame.title, "</h1>\n        <div class=\"flex space-x-2 star my-2\">\n          <div class=\"flex items-center\">\n            <span class=\"clip-star bg-yellow-400\"></span>\n            <span class=\"clip-star bg-yellow-400\"></span>\n            <span class=\"clip-star bg-yellow-400\"></span>\n            <span class=\"clip-star bg-yellow-400\"></span>\n            <span class=\"clip-star bg-gray-300\"></span>\n          </div>\n          <span class=\"text-gray-400\">").concat(currentGame.stars, "</span>\n        </div>\n        <div class=\"space-x-1\">\n          <span class=\"text-orange-400\">").concat(currentGame.played ? currentGame.played : "120.3K", "</span><span class=\"text-gray-400\">Play</span>\n        </div>\n      </div>\n    </a >\n  ");
  gamePlay.innerHTML = "\n    <a\n      title=\"Play ".concat(currentGame.title, " Now\"\n      class=\"detail-play\"\n      target=\"_blank\"\n      onclick=\"_upa.push(['click', '").concat(currentGame.name, "', '']); gtag('event', 'game_detail_click', { game : '").concat(currentGame.name, "' }); return gtag_report_conversion('").concat(GAME_DOMAIN, "/newgames/minigame.html?appid=").concat(currentGame.name, "&platform=").concat(CHANNEL, "');\"\n      href=\"").concat(GAME_DOMAIN, "/newgames/minigame.html?appid=").concat(currentGame.name, "&platform=").concat(CHANNEL, "\">\n      Play\n    </a>\n  ");
  gameDesc.innerHTML = currentGame.description;
  gameRelated.innerHTML = fullData.filter(function (game) {
    return game.name !== currentGame.name;
  }).slice().sort(function () {
    return 0.5 - Math.random();
  }).slice(0, 3).map(function (item) {
    return "\n      <li class=\"flex justify-between items-center upa-impression-target\" upa-tag=\"".concat(item.name, "\">\n        <a class=\"flex space-x-3\" href=\"./game.html?appid=").concat(item.name, "&from=detail\" onclick=\"_upa.push(['click', '").concat(item.name, "', '']); gtag('event', 'game_detail_click', { game : '").concat(item.name, "' });\">\n          <img\n            class=\"w-16 rounded-lg\"\n            src=\"").concat(ICON_PATH).concat(item.name, ".").concat(ICON_FORMAT, "\"\n            alt=\"").concat(item.title, "\"\n            width=\"100\"\n            height=\"100\"\n            loading=\"lazy\"\n          />\n          <div>\n            <h2\n              class=\"pt-2 whitespace-nowrap overflow-hidden text-ellipsis\"\n            >\n            ").concat(item.title, "\n            </h2>\n            <div class=\"space-x-1\">\n              <span class=\"text-orange-400\">").concat(item.played, "</span\n              ><span class=\"text-gray-400 text-center\">Play</span>\n            </div>\n          </div>\n        </a>\n        <div class=\"text-center\">\n          <a\n            class=\"inline-block rounded-full uppercase bg-indigo-500 text-white py-2 w-24\"\n            href=\"./game.html?appid=").concat(item.name, "&from=detail\"\n            onclick=\"_upa.push(['click', '").concat(item.name, "', '']); gtag('event', 'game_detail_click', { game : '").concat(item.name, "' });\"\n            >Play</a>\n        </div>\n      </li>");
  }).join("");
}
