"use strict";

// 统计

var _upa = window._upa = window._upa || [];
var _upa_network = 1; //网络情况开关
var _upa_impression_target = '.upa-impression-target';
var u_tag = 'UPTAP10004' //
_upa.push(['pageview', document.URL || '', window.screen.width || 0, window.screen.height || 0]);
(function () {
  var u = "https://cdn2.supereasygame.com/web/analytics/";
  var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
  g.async = true; g.src = u + 'analytics_v1_1.js'; s.parentNode.insertBefore(g, s);
})();

// 游戏图标、链接参数

const CHANNEL = `googleads_main`;
const GAME_DOMAIN = `https://cdn2.supereasygame.com`;

const ICON_FORMAT = `jpg`;
const ICON_PATH = `https://cdn.iwantalipstick.com/gameicon2/${ICON_FORMAT}/`;

const DEV_MODE = false; // 广告测试模式，设置 adtest="on"
// let PLAY_TAG = `20220908`;

// 选定游戏

const SELECTED_GAMES = [
  "4096", "8BallKing", "AceMan", "AirBrawl", "AirHockey3D", "AmazingRoad", "AntRun", "ArcheryKing", "ArcheryMaster", "AttackHero", "BatterKing", "BattleBurger", "BestShooter", "BigEater", "BigSword", "BilliardKing", "BlockGun3D", "BlockMaster", "BlockMaze", "BoardTheTrain", "BombingTime", "BoomingPlant", "BounceShooter", "BrainMaster", "BraveArcher", "BubblePop", "BuilderRun", "BulletMan", "BulletMaster3D", "CandyHit", "CityExpress", "CleverJump", "CleverRescue", "ColorBall3D", "ColorBead", "ColorCrash", "ColorHammer", "ColorRing", "ColorSplash", "CopyLaser", "CountingMaster", "CrackShot", "CrashTower3D", "CrayonPop", "CrazyDrift", "CrazyHammer", "CrazyKart3D", "CrazyKnife", "CrazyMoto", "CrazyPortal", "CrazyRace", "DartsKing3D", "DashCat", "DeathRun", "DigEscape", "DressQueen", "EasyCharger", "FeedMaster", "FeverRacing", "FierceCity", "FillTheGlass", "FinalBattle", "FingerCannon", "FireTheGun", "FisherMan", "FruitMonster", "FuryEdge", "GlidingCharger", "GoldenBoot", "GoldenGlove", "GunShooter", "HamsterRun", "HappyTetris", "HelpTheSheep", "HiTaxi", "HumanTower", "HungryMonster", "Hurricane", "IdleRestaurantTycoon", "ImEmpire", "IronAttack", "JumpSmash", "KillAllZombies", "Knife", "LetMeIn", "LittleFarm", "LittleMiner", "LostInLust", "MagicCarpenter", "MagicDraw", "MagicJigsaw", "MagicNumber", "MagicPaint", "MagicPainter", "MagicParkour", "MagicWorm", "MahjongLink", "MahjongLink3D", "MatchingCook", "MelodyLink", "MergeAndDefense", "MergeCat", "MergeGuns3D", "MergeKill", "MergeMagicJewellery", "Mining", "MonsterCrash", "MrBullet", "MrRacer", "MyBowling3D", "MyCat", "MyTerritory", "NastyBomb", "OpenFire", "PandaRescue", "PowerShooter", "RollingAgent", "RollingBall", "RoofRunner", "RushAndFire", "SausageRun", "SharkisComing", "ShootingStar", "SnakeHit", "SoccerHero", "SpinTheMaze", "SuperArcher", "SuperCoaster", "SuperSoccer", "TinyWar", "TrafficRun", "TrainIsComing", "WoodIsland", "ZombieSurvival", "CrazyGunfight", "PenguinDash", "PuppyRun", "RainbowSplash", "RelivedLife", "ShootSmash", "SnakeGo", "Super2048", "SuperMiner", "SuperCells", "TheSameWorld", "UltraDrift", "VirusWar", "FlyPass", "FrozenMagic", "HappyBilliards", "HarvestStory", "IceEscape", "MagicBomb", "MyHome", "PetRun", "RocketJump", "SaveThePets", "ShootingCubes", "SkatingMaster", "SkyRunning3D", "SplittingCells", "SuperDefense", "SuperGolf", "SuperThrow", "TwistyRoad", "WildRoll", "DefenseTower", "DragonCrush", "HelpTheZombie", "StickmanVsZombies", "Transform", "Chess3D", "DeathJump", "FairyTalesPuzzle", "HillRacing", "JumpingMonkey", "PianoKeys", "PipePuzzle", "SolitaireClassic", "ZooBlast", "ZumaMarbles", "TrappedPirate", "CrazyJump", "RushingRover", "TableTennisChampionship", "PlantBeatZombies", "AnipopLink"
];

// 首页游戏

const TOP_GAMES = ["LostInLust", "MyHome"]; // 最顶部位置

const GAMES_FOR_HOME = ["FillTheGlass", "PianoKeys", "TrainIsComing", "SpinTheMaze", "MagicWorm", "HelpTheSheep", "IronAttack", "JumpSmash", "TrafficRun", "HiTaxi", "BoardTheTrain", "LostInLust", "TwistyRoad", "FlyPass", "DressQueen", "CrazyRace", "HungryMonster", "HumanTower", "8BallKing", "ArcheryMaster", "SuperSoccer", "ShootingStar", "BilliardKing", "PowerShooter", "BestShooter", "GunShooter", "ArcheryKing", "AirBrawl", "CrackShot", "KillAllZombies", "BulletMaster3D", "BulletMan", "FireTheGun", "MrBullet", "MergeGuns3D", "ShootingCubes", "MagicBomb", "BombingTime", "MergeAndDefense", "DefenseTower", "TrappedPirate", "FisherMan", "SkyRunning3D", "SkatingMaster", "FeverRacing", "ColorBall3D", "IceEscape", "RoofRunner", "AttackHero", "SausageRun", "BraveArcher", "WildRoll", "RollingAgent", "GlidingCharger", "MyCat", "LittleMiner", "LittleFarm", "WoodIsland", "BoomingPlant", "HarvestStory", "ColorCrash", "BounceShooter", "RainbowSplash", "MatchingCook", "MelodyLink", "MahjongLink", "MagicCarpenter", "NastyBomb", "DashCat", "CandyHit", "PetRun", "ShootSmash", "Hurricane", "FuryEdge", "CrazyGunfight", "CrazyHammer", "MergeKill", "Knife"]

// 游戏数据

let fullData = data.games.filter(i => SELECTED_GAMES.includes(i.name)); // 按筛选的游戏取数据

let tmpCategories = [...new Set(fullData.map(i => i.category))];
let categories = data.categories.filter(i => tmpCategories.includes(i.name)); // 分类数据

// console.log(`categories: `, categories);

// 导航菜单切换逻辑

let menuButton = document.querySelectorAll(".menu-button");

let menu = document.querySelector(".menu-panel");

function toggleMenu() {
  menu.classList.toggle(`hidden`);
}

menuButton.forEach((item) => item.addEventListener("click", toggleMenu));

// 导航菜单数据

let menuHomeItem = `<li><a class="item-link" href="./index.html?from=menu" title="Home">Home</a></li>`;

let menuList = document.querySelector(`.menu-list`);

let menuItems = categories.map((cat) => `<li><a class="item-link" href="./category.html?name=${cat.slug}?from=menu" title="${cat.name} Games">${cat.name}</a></li>`).join(``);

menuList.innerHTML = menuHomeItem + menuItems;

// URL处理

// URL地址请求参数处理生成对象
function resolveUrlParams(query, key) {
  let params = {};
  let str = query.split("?")[1].split("&");
  str.forEach((i) => {
    let a = i.split("=");
    params[a[0]] = a[1]
  })
  return params[key];
}

// URL路径、请求参数
let pathname = window.location.pathname;
let query = window.location.search;

console.log(pathname);
console.log(query);

// 通用区块

let pageTitle = document.querySelector(`.page-title`);  // 标题
let gameList = document.querySelector(".game-list");    // 列表

// 首页处理

// !!! 判定不太严谨 !!!
if (pathname.endsWith(`/index.html`) || pathname.endsWith(`/`)) {

  let homeContent = document.getElementById(`home-content`);

  let showPlayed = false;
  let showRecommended = true;

  let topgames = fullData.filter((item) => TOP_GAMES.includes(item.name));

  homeContent.innerHTML = ``;

  //
  function TopGames() {
    let section = document.createElement(`section`);
    let header = document.createElement(`header`);
    let h2 = document.createElement(`h2`);
    let ul = document.createElement(`ul`);
    section.setAttribute(`class`, `top-games`);
    header.setAttribute(`class`, `py-2`);
    ul.setAttribute(`class`, `card-list`);

    topgames.forEach((item) => {
      let li = document.createElement(`li`);
      li.setAttribute(
        `class`,
        `top-list-item upa-impression-target`
      );
      li.setAttribute(
        `upa-tag`,
        `${item.name}`,
      );
      li.innerHTML = `
        <a href="./game.html?appid=${item.name}&from=home" onclick="_upa.push(['click', '${item.name}', '']); gtag('event', 'game_detail_click', { game : '${item.name}' })">
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
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clip-rule="evenodd" /></svg>                         
            </span>
          </div>
        </a>`;
      ul.append(li);
    });

    header.append(h2);
    section.append(header, ul);
    return section;
  }

  function Banner(slot) {
    let banner = document.createElement(`div`);
    let bannerTitle = document.createElement(`div`);
    let ins = document.createElement(`ins`);
    let script = document.createElement(`script`);
    banner.setAttribute(`class`, `banner`);
    bannerTitle.innerHTML = `ADVERTISEMENT`;
    bannerTitle.setAttribute(`class`, `text-center text-xs text-gray-400`);
    ins.setAttribute(`class`, `adsbygoogle`);
    ins.setAttribute(
      `style`,
      `display: flex; justify-content: center; background-color: #00000008`
    );
    ins.setAttribute(`data-ad-client`, `ca-pub-9209477879340784`);
    ins.setAttribute(`data-ad-slot`, slot);
    ins.setAttribute(`data-ad-format`, `auto`);
    ins.setAttribute(`data-full-width-responsive`, `true`);
    DEV_MODE === true ? ins.setAttribute(`data-adtest`, `on`) : null;
    script.innerHTML = `(adsbygoogle = window.adsbygoogle || []).push({})`;
    banner.append(bannerTitle, ins, script);
    return banner;
  }

  if (showRecommended) {
    homeContent.append(Banner(`5107946741`), TopGames()); // 广告
  }

  categories.sort((a, b) => a.total < b.total ? 1 : -1).forEach((category, index) => {
    let section = document.createElement(`section`);
    let header = document.createElement(`header`);
    let h2 = document.createElement(`h2`);
    let a = document.createElement(`a`);
    let ul = document.createElement(`ul`);
    let fragment = document.createDocumentFragment();

    header.append(h2, a);
    section.append(header, ul);

    section.setAttribute(`class`, `game-section`);
    header.setAttribute(`class`, `section-header`);
    ul.setAttribute(`class`, `section-list`);
    a.setAttribute(`class`, `text-gray-400`);

    let games = fullData.filter((item) => item.category === category.name).filter(i => GAMES_FOR_HOME.includes(i.name)); // 获取分类游戏
    // console.log(`games: `, games);
    let total = games.length // 获取该分类游戏数量

    h2.innerHTML = `${category.name} Games`;

    // console.log(`games`, games);
    if (category.total > 6) {
      a.innerHTML = `More`;
      a.setAttribute(`href`, `./category.html?name=${category.slug}&from=home`);
    }

    games
      .slice()
      // .filter((i) => featuredGames.includes(i.name))
      // .sort(() => 0.5 - Math.random()) // 随机
      // .sort((a, b) => new Date(a.time) < new Date(b.time) ? 1 : -1)
      .sort((a, b) => GAMES_FOR_HOME.indexOf(a.name) > GAMES_FOR_HOME.indexOf(b.name) ? 1 : -1)
      // .slice(0, index === 1 || index === 3 ? 12 : 6)
      .forEach((game) => {
        let li = document.createElement(`li`);
        li.setAttribute(`class`, `upa-impression-target`);
        li.setAttribute(`upa-tag`, `${game.name}`);
        li.innerHTML = `
          <a href="./game.html?appid=${game.name}&from=home" onclick="_upa.push(['click', '${game.name}', '']); gtag('event', 'game_detail_click', { game : '${game.name}' })">
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
            ${showPlayed ? `<div><span class="text-orange-400">${game.played}</span> Play</div>` : ``}
          </a>`;
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

if (pathname.endsWith(`/category.html`)) {

  // let queryName = `?name=`;
  // let queryId = query.slice(query.indexOf(queryName) + queryName.length);

  // console.log(`query: `, query.split("?")[1].split("&"));

  let queryId = resolveUrlParams(query, `name`);

  // console.log(`params :`, params);
  console.log(`queryId`, queryId);

  pageTitle.innerHTML = categories.filter(
    (item) => item.slug.toLowerCase() === queryId.toLowerCase()
  )[0].name;

  document.title = `${pageTitle.innerHTML} Games`;

  gameList.innerHTML = fullData.filter((item) => item.category.toLowerCase() == queryId.toLowerCase().replace(/-/g, ` `))
    .map((item, index) => `
        <li class="game-list-item upa-impression-target" upa-tag="${item.name}">
          <div>
            <a class="flex space-x-3" href="./game.html?appid=${item.name}&from=category" onclick="_upa.push(['click', '${item.name}', '']); gtag('event', 'game_detail_click', { game : '${item.name}' })">
            <img
              class="item-image"
              src="${ICON_PATH}${item.name}.${ICON_FORMAT}"
              alt="${item.title}"
              width="100"
              height="100"
              loading=${index < 6 ? "eager" : "lazy"}
            />
            <div>
              <h2 class="pt-2">${item.title}</h2>
              <div class="space-x-1">
                <span class="text-orange-400">${(item.played && item.played) || 0}</span><span class="text-gray-400 text-center"> Play</span>
              </div>
            </div>
            </a>
          </div>
          <div class="text-center">
            <a
              class="item-button"
              href="./game.html?appid=${item.name}&from=category"
              onclick="_upa.push(['click', '${item.name}', '']); gtag('event', 'game_detail_click', { game : '${item.name}' })"
              >Play</a>
          </div>
        </li>
      `
    )
    .join(``);
}

// 详情页处理

if (pathname.endsWith(`/game.html`)) {

  let queryId = resolveUrlParams(query, `appid`);

  let gameInfo = document.querySelector(`.game-information`);
  let gameDesc = document.querySelector(`.game-description`);
  let gamePlay = document.querySelector(`.game-play`);
  let gameRelated = document.querySelector(`.game-related`);

  let currentGame = fullData.find(
    (item) => item.name.toLowerCase() === queryId.toLowerCase()
  );
  // 设置标题
  pageTitle.innerHTML = ``;
  document.title = `Play ${currentGame.title} Now`;
  gameInfo.setAttribute(`upa-tag`, `${currentGame.name}`)
  gameInfo.innerHTML = `
    <a target="_blank" onclick="_upa.push(['click', '${currentGame.name}', '']); gtag('event', 'game_detail_click', { game : '${currentGame.name}' }); return gtag_report_conversion('${GAME_DOMAIN}/newgames/minigame.html?appid=${currentGame.name}&platform=${CHANNEL}')" title="Play ${currentGame.title} Now" class="link-play p-4 flex space-x-3" href="${GAME_DOMAIN}/newgames/minigame.html?appid=${currentGame.name}&platform=${CHANNEL}">
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
      class="detail-play"
      target="_blank"
      onclick="_upa.push(['click', '${currentGame.name}', '']); gtag('event', 'game_detail_click', { game : '${currentGame.name}' }); return gtag_report_conversion('${GAME_DOMAIN}/newgames/minigame.html?appid=${currentGame.name}&platform=${CHANNEL}');"
      href="${GAME_DOMAIN}/newgames/minigame.html?appid=${currentGame.name}&platform=${CHANNEL}">
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
      <li class="flex justify-between items-center upa-impression-target" upa-tag="${item.name}">
        <a class="flex space-x-3" href="./game.html?appid=${item.name}&from=detail" onclick="_upa.push(['click', '${item.name}', '']); gtag('event', 'game_detail_click', { game : '${item.name}' });">
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
            onclick="_upa.push(['click', '${item.name}', '']); gtag('event', 'game_detail_click', { game : '${item.name}' });"
            >Play</a>
        </div>
      </li>`).join(``);
}
