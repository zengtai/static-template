"use strict";

var selectedGames = [
  "4096",
  "8BallKing",
  "AceMan",
  "AirBrawl",
  "AirHockey3D",
  "AmazingRoad",
  "AntRun",
  "ArcheryKing",
  "ArcheryMaster",
  "AttackHero",
  "BatterKing",
  "BattleBurger",
  "BestShooter",
  "BigEater",
  "BigSword",
  "BilliardKing",
  "BlockGun3D",
  "BlockMaster",
  "BlockMaze",
  "BoardTheTrain",
  "BombingTime",
  "BoomingPlant",
  "BounceShooter",
  "BrainMaster",
  "BraveArcher",
  "BubblePop",
  "BuilderRun",
  "BulletMan",
  "BulletMaster3D",
  "CandyHit",
  "CityExpress",
  "CleverJump",
  "CleverRescue",
  "ColorBall3D",
  "ColorBead",
  "ColorCrash",
  "ColorHammer",
  "ColorRing",
  "ColorSplash",
  "CopyLaser",
  "CountingMaster",
  "CrackShot",
  "CrashTower3D",
  "CrayonPop",
  "CrazyDrift",
  "CrazyHammer",
  "CrazyKart3D",
  "CrazyKnife",
  "CrazyMoto",
  "CrazyPortal",
  "CrazyRace",
  "DartsKing3D",
  "DashCat",
  "DeathRun",
  "DigEscape",
  "DressQueen",
  "EasyCharger",
  "FeedMaster",
  "FeverRacing",
  "FierceCity",
  "FillTheGlass",
  "FinalBattle",
  "FingerCannon",
  "FireTheGun",
  "FisherMan",
  "FruitMonster",
  "FuryEdge",
  "GlidingCharger",
  "GoldenBoot",
  "GoldenGlove",
  "GunShooter",
  "HamsterRun",
  "HappyTetris",
  "HelpTheSheep",
  "HiTaxi",
  "HumanTower",
  "HungryMonster",
  "Hurricane",
  "IdleRestaurantTycoon",
  "ImEmpire",
  "IronAttack",
  "JumpSmash",
  "KillAllZombies",
  "Knife",
  "LetMeIn",
  "LittleFarm",
  "LittleMiner",
  "LostInLust",
  "MagicCarpenter",
  "MagicDraw",
  "MagicJigsaw",
  "MagicNumber",
  "MagicPaint",
  "MagicPainter",
  "MagicParkour",
  "MagicWorm",
  "MahjongLink",
  "MahjongLink3D",
  "MatchingCook",
  "MelodyLink",
  "MergeAndDefense",
  "MergeCat",
  "MergeGuns3D",
  "MergeKill",
  "MergeMagicJewellery",
  "Mining",
  "MonsterCrash",
  "MrBullet",
  "MrRacer",
  "MyBowling3D",
  "MyCat",
  "MyTerritory",
  "NastyBomb",
  "OpenFire",
  "PandaRescue",
  "PowerShooter",
  "RollingAgent",
  "RollingBall",
  "RoofRunner",
  "RushAndFire",
  "SausageRun",
  "SharkisComing",
  "ShootingStar",
  "SnakeHit",
  "SoccerHero",
  "SpinTheMaze",
  "SuperArcher",
  "SuperCoaster",
  "SuperSoccer",
  "TinyWar",
  "TrafficRun",
  "TrainIsComing",
  "WoodIsland",
  "ZombieSurvival",
  "CrazyGunfight",
  "PenguinDash",
  "PuppyRun",
  "RainbowSplash",
  "RelivedLife",
  "ShootSmash",
  "SnakeGo",
  "Super2048",
  "SuperMiner",
  "SuperCells",
  "TheSameWorld",
  "UltraDrift",
  "VirusWar",
  "FlyPass",
  "FrozenMagic",
  "HappyBilliards",
  "HarvestStory",
  "IceEscape",
  "MagicBomb",
  "MyHome",
  "PetRun",
  "RocketJump",
  "SaveThePets",
  "ShootingCubes",
  "SkatingMaster",
  "SkyRunning3D",
  "SplittingCells",
  "SuperDefense",
  "SuperGolf",
  "SuperThrow",
  "TwistyRoad",
  "WildRoll",
  "DefenseTower",
  "DragonCrush",
  "HelpTheZombie",
  "StickmanVsZombies",
  "Transform",
  "Chess3D",
  "DeathJump",
  "FairyTalesPuzzle",
  "HillRacing",
  "JumpingMonkey",
  "PianoKeys",
  "PipePuzzle",
  "SolitaireClassic",
  "ZooBlast",
  "ZumaMarbles",
  "TrappedPirate",
  "CrazyJump",
  "RushingRover",
  "TableTennisChampionship",
  "PlantBeatZombies",
  "AnipopLink",
];

let featuredGames = [
  // puzzle
  "MyHome",
  "PianoKeys", // 2
  "TrainIsComing", //3
  "SpinTheMaze", // 4
  // arcade
  "IronAttack", // 1
  "JumpSmash", // 2
  "TrafficRun", // 3
  "HiTaxi", // 4
  "BoardTheTrain", // 5
  "LostInLust", // 6
  // "JumpingMonkey", // 6
  "TwistyRoad", // 7
  "FlyPass", // 8
  "DressQueen",
  // "CrayonPop",
  "CrazyRace", // 10
  "HungryMonster", // 11
  // sports
  "", // 1
  "8BallKing", // 2
  "ArcheryMaster", // 3
  // shooting
  "BestShooter",
  "GunShooter", // 2
  "ArcheryKing",
  "AirBrawl",
  "CrackShot",
  "KillAllZombies", // 6
  "BulletMaster3D", // 7
  "BulletMan",
  "FireTheGun", // 9
  "MrBullet",
  "MergeGuns3D",
  "ShootingCubes", // 12
  // strategy
  "MagicBomb",
  "BombingTime", // 2
  "MergeAndDefense", // 3
  "DefenseTower", // 4
  "TrappedPirate", // 5
  "FisherMan", // 6
  // racing
  "SkyRunning3D", // 1
  "SkatingMaster",
  "FeverRacing", // 3
  "ColorBall3D", // 4
  // adventure
  // simulation
  // match 3
  // casual
  // io
  // girl
];

var recommended = ["LostInLust", "MyHome"];

var AD_MODE = `dev`;

// 菜单逻辑
var menuButton = document.querySelectorAll(".menu-button");

var menu = document.querySelector(".menu-panel");

function toggleMenu() {
  menu.classList.toggle(`hidden`);
}

menuButton.forEach((item) => item.addEventListener("click", toggleMenu));

// URL地址参数生成对象
function resolveUrlParams(query, key) {
  let params = {};
  let str = query.split("?")[1].split("&");
  str.forEach((i) => {
    let a = i.split("=");
    params[a[0]] = a[1]
  })
  return params[key];
}

// 游戏数据

var domain = `https://cdn2.supereasygame.com`;
var platform = `gpbox`;
var fullData = data.games.filter(i => selectedGames.includes(i.name));
var categories = data.categories;
var ICON_FORMAT = `jpg`;
var ICON_PATH = `https://cdn.iwantalipstick.com/gameicon2/${ICON_FORMAT}/`;
// var PLAY_TAG = `20220908`;

// var basepath = `/copy`;
// var basepath = ``;

// 菜单数据
var menuList = document.querySelector(`.menu-list`);
var menuItems = categories
  .map(
    (cat) =>
      `
      <li>
        <a
          class="item-link"
          href="./category.html?name=${cat.slug}"
          title="${cat.name}"
        >
          ${cat.name}
        </a>
      </li>
      `
  )
  .join(``);

var homeLink = `
  <li>
    <a
      class="item-link"
      href="./index.html"
      title="Home"
    >
      Home
    </a>
  </li>
`;

menuList.innerHTML = homeLink + menuItems;

// 首页数据
var pathname = window.location.pathname;
var query = window.location.search;

console.log(pathname);
console.log(query);

var pageTitle = document.querySelector(`.page-title`);
var gameList = document.querySelector(".game-list");

if (pathname.endsWith(`/index.html`) || pathname.endsWith(`/`)) {
  // 首页处理

  var homeContent = document.getElementById(`home-content`);

  var showPlayed = false;
  var showRecommended = true;

  var topgames = fullData.filter((item) => recommended.includes(item.name));

  homeContent.innerHTML = ``;
  //
  function RecommendGames() {
    var section = document.createElement(`section`);
    var header = document.createElement(`header`);
    var h2 = document.createElement(`h2`);
    var ul = document.createElement(`ul`);
    section.setAttribute(`class`, `top-games`);
    header.setAttribute(`class`, `py-2`);
    ul.setAttribute(`class`, `card-list`);

    topgames.forEach((item) => {
      var li = document.createElement(`li`);
      li.setAttribute(
        `class`,
        `rounded-lg bg-gradient-to-tr to-blue-500 from-cyan-500 px-2 py-3 text-white shadow-lg shadow-blue-500/30`
      );
      li.innerHTML = `
        <a href="./game.html?appid=${item.name}&from=home">
          <div class="flex space-x-1">
            <img
              class="rounded-lg border-2 border-white w-16 h-16 -mt-8 bg-white"
              src="${ICON_PATH}${item.name}.${ICON_FORMAT}"
              alt="${item.title}"
              width="100"
              height="100"
            />
            <div class="text-xs drop-shadow"><span class="text-yellow-200 text-sm">${item.played}</span> Play</div>
          </div>
          <div class="flex justify-between items-center pt-2 drop-shadow">
            <h2 class="font-bold">${item.title}</h2>
            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clip-rule="evenodd" />
          </svg>                         
          </span>
          </div>
        </a>
      `;
      ul.append(li);
    });

    header.append(h2);
    section.append(header, ul);
    return section;
  }

  function Banner() {
    var banner = document.createElement(`div`);
    var bannerTitle = document.createElement(`div`);
    var ins = document.createElement(`ins`);
    var script = document.createElement(`script`);
    banner.setAttribute(`class`, `banner`);
    bannerTitle.innerHTML = `ADVERTISEMENT`;
    bannerTitle.setAttribute(`class`, `text-center text-xs text-gray-400`);
    ins.setAttribute(`class`, `adsbygoogle`);
    ins.setAttribute(
      `style`,
      `display: flex; justify-content: center; background-color: #00000008`
    );
    ins.setAttribute(`data-ad-client`, `ca-pub-9209477879340784`);
    ins.setAttribute(`data-ad-slot`, `5973598328`);
    ins.setAttribute(`data-ad-format`, `auto`);
    ins.setAttribute(`data-full-width-responsive`, `true`);
    AD_MODE === "dev" ? ins.setAttribute(`data-adtest`, `on`) : null;
    script.innerHTML = `(adsbygoogle = window.adsbygoogle || []).push({})`;
    banner.append(bannerTitle, ins, script);
    return banner;
  }

  if (showRecommended) {
    homeContent.append(Banner(), RecommendGames());
  }

  categories.forEach((category, index) => {
    var section = document.createElement(`section`);
    var header = document.createElement(`header`);
    var h2 = document.createElement(`h2`);
    var a = document.createElement(`a`);
    var ul = document.createElement(`ul`);
    var fragment = document.createDocumentFragment();

    header.append(h2, a);
    section.append(header, ul);

    section.setAttribute(`class`, `game-section`);
    header.setAttribute(`class`, `section-header`);
    ul.setAttribute(`class`, `section-list`);
    a.setAttribute(`class`, `text-gray-400`);

    var games = fullData.filter((item) => item.category == category.name); // 获取分类游戏
    let total = games.length // 获取该分类游戏数量

    h2.innerHTML = `${category.name} Games`;

    // console.log(`games`, games);
    if (total > 6) {
      a.innerHTML = `More`;
      a.setAttribute(`href`, `./category.html?name=${category.slug}&from=home`);
    }

    games
      .slice()
      // .filter((i) => featuredGames.includes(i.name))
      // .sort(() => 0.5 - Math.random()) // 随机
      .sort((a, b) => new Date(a.time) > new Date(b.time) ? 1 : -1)
      .sort((a, b) => featuredGames.indexOf(a.name) < featuredGames.indexOf(b.name) ? 1 : -1)
      .slice(0, index === 1 || index === 3 ? 12 : 6)
      .forEach((game) => {
        var li = document.createElement(`li`);
        li.innerHTML = `
        <a href="./game.html?appid=${game.name}&from=home">
          <img
            class="rounded-lg mx-auto"
            src="${ICON_PATH}${game.name}.${ICON_FORMAT}"
            alt="${game.title}" width="100"
            height="100"
            width="100"
            ${index > 0 ? `loading="lazy"` : ``}
          />
          <h2 class="pt-2 whitespace-nowrap overflow-hidden text-ellipsis">
            ${game.title}
          </h2>
          ${showPlayed
            ? `<div>
                <span class="text-orange-400">${game.played}</span> Play
              </div>`
            : ``
          }
        </a >
  `;
        fragment.appendChild(li);
      });

    ul.appendChild(fragment);

    if (index % 2 == 0) {
      homeContent.append(section, Banner());
    } else {
      homeContent.append(section);
    }
  });

  function itemList(items) {
    return items
      .map(
        (game) => `
      <li class="text-center" >
        <a href="./game.html?appid=${game.name}">
          <img
            class="inline-block rounded-lg"
            src="${ICON_PATH}${game.name}.${ICON_FORMAT}"
            alt="${game.title}"
            width="100"
            height="100"
            loading="lazy"
          />
          <h2 class="pt-2 whitespace-nowrap overflow-hidden text-ellipsis">
            ${game.title}
          </h2>
        </a>
      </li >
      `
      )
      .join(``);
  }
  //
}

if (pathname.endsWith(`/category.html`)) {
  // 分类页处理
  // var queryName = `?name=`;
  // var queryId = query.slice(query.indexOf(queryName) + queryName.length);

  // console.log(`query: `, query.split("?")[1].split("&"));

  let queryId = resolveUrlParams(query, `name`);

  // console.log(`params :`, params);
  console.log(`queryId`, queryId);

  pageTitle.innerHTML = categories.filter(
    (item) => item.slug.toLowerCase() == queryId.toLowerCase()
  )[0].name;

  document.title = `${pageTitle.innerHTML} Games`;

  gameList.innerHTML = fullData
    .filter(
      (item) =>
        item.category.toLowerCase() == queryId.toLowerCase().replace(/-/g, ` `)
    )
    .map(
      (item, index) => `
        <li class="flex justify-between items-center">
          <div>
            <a class="flex space-x-3" href="./game.html?appid=${item.name}&from=category">
            <img
              class="object-cover h-20 w-20 rounded-lg"
              src="${ICON_PATH}${item.name}.${ICON_FORMAT}"
              alt="${item.title}"
              width="100"
              height="100"
              loading=${index < 6 ? "eager" : "lazy"}
            />
            <div>
              <h2 class="pt-2">${item.title}</h2>
              <div class="space-x-1">
                <span class="text-orange-400">${(item.played && item.played) || 0
        }</span><span class="text-gray-400 text-center">Play</span>
              </div>
            </div>
            </a>
          </div>
          <div class="text-center">
            <a
              class="inline-block rounded-full uppercase bg-indigo-500 text-white py-2 w-24"
              href="./game.html?appid=${item.name}&from=category"
              >Play</a>
          </div>
        </li>
      `
    )
    .join(``);
}

if (pathname.endsWith(`/game.html`)) {
  // 详情页处理
  let queryId = resolveUrlParams(query, `appid`);

  var gameInfo = document.querySelector(`.game-information`);
  var gameDesc = document.querySelector(`.game-description`);
  var gamePlay = document.querySelector(`.game-play`);
  var gameRelated = document.querySelector(`.game-related`);

  var currentGame = fullData.find(
    (item) => item.name.toLowerCase() == queryId.toLowerCase()
  );
  // 设置标题
  pageTitle.innerHTML = ``;
  document.title = `Play ${currentGame.title} Now`;
  gameInfo.innerHTML = `
    <a title="Play ${currentGame.title} Now" class="link-play p-4 flex gap-3" href="${domain}/newgames/minigame.html?appid=${currentGame.name}&platform=${platform}">
      <img
        class="rounded-2xl w-24 h-24"
        src="${ICON_PATH}${currentGame.name}.${ICON_FORMAT}"
        alt="${currentGame.title}"
        width="200"
        height="200"
      />
      <div>
        <h1 class="text-lg">${currentGame.title}</h1>
        <div class="flex space-x-2 star my-2">
          <div class="flex items-center">
            <span class="clip-star bg-yellow-400"></span>
            <span class="clip-star bg-yellow-400"></span>
            <span class="clip-star bg-yellow-400"></span>
            <span class="clip-star bg-yellow-400"></span>
            <span class="clip-star bg-gray-300"></span>
          </div>
          <span class="text-gray-400">${currentGame.stars}</span>
        </div>
        <div class="space-x-1">
          <span class="text-orange-400">${currentGame.played ? currentGame.played : `120.3K`}</span><span class="text-gray-400">Play</span>
        </div>
      </div>
    </a >
  `;
  gamePlay.innerHTML = `
    <a
      title="Play ${currentGame.title} Now"
      class="inline-block rounded-full uppercase bg-indigo-500 text-white py-3 w-56"
      href="${domain}/newgames/minigame.html?appid=${currentGame.name}&platform=${platform}">
      Play
    </a>
  `;
  gameDesc.innerHTML = currentGame.description;

  gameRelated.innerHTML = fullData
    .filter((game) => game.name !== currentGame.name)
    .slice()
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .map(
      (item) => `
      <li class="flex justify-between items-center">
        <a class="flex space-x-3" href="./game.html?appid=${item.name}&from=detail">
          <img
            class="w-16 rounded-lg"
            src="${ICON_PATH}${item.name}.${ICON_FORMAT}"
            alt="${item.title}"
            width="100"
            height="100"
            loading="lazy"
          />
          <div>
            <h2
              class="pt-2 whitespace-nowrap overflow-hidden text-ellipsis"
            >
            ${item.title}
            </h2>
            <div class="space-x-1">
              <span class="text-orange-400">${item.played}</span
              ><span class="text-gray-400 text-center">Play</span>
            </div>
          </div>
        </a>
        <div class="text-center">
          <a
            class="inline-block rounded-full uppercase bg-indigo-500 text-white py-2 w-24"
            href="./game.html?appid=${item.name}&from=detail"
            >Play</a>
        </div>
      </li>
    `
    )
    .join(``);
}
