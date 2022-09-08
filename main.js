const group = [
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
  "CrazyDrift",
  "CrazyHammer",
  "CrazyRace",
  "CutMaster",
  "DashCat",
  "DigEscape",
  "EasyCharger",
  "FierceCity",
  "FillTheGlass",
  "FruitMonster",
  "FuryEdge",
  "GlidingCharger",
  "GoldenBoot",
  "GoldenGlove",
  "Hurricane",
  "IronAttack",
  "JumpSmash",
  "LetMeIn",
  "LittleFarm",
  "LittleMiner",
  "LostInLust",
  "MagicDraw",
  "MagicPaint",
  "MergeGuns3D",
  "MergeKill",
  "MrRacer",
  "MyTerritory",
  "NastyBomb",
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
];

// 菜单逻辑
let menuButton = document.querySelectorAll(".menu-button");

let menu = document.querySelector(".menu");

function toggleMenu() {
  menu.classList.toggle(`hidden`);
}

menuButton.forEach((item) => item.addEventListener("click", toggleMenu));

// 游戏数据

const domain = `https://cdn.playbleads.com`;
const platform = `yole2`;
const fullData = data.games;
const categories = data.categories;
const ICON_FORMAT = `webp`;
const ICON_PATH = `https://cdn.iwantalipstick.com/gameicon2/${ICON_FORMAT}/`;
// const PLAY_TAG = `20220908`;

// let basepath = `/copy`;
// let basepath = ``;

// 菜单数据
let menuList = document.querySelector(`.menu-itemlist`);
let menuItems = categories
  .map(
    (cat) =>
      `
      <li>
        <a
          class="block p-3"
          href="./category.html?name=${cat}"
          title="${cat}"
        >
          ${cat}
        </a>
      </li>
      `
  )
  .join(``);

let homeLink = `
  <li>
    <a
      class="block p-3"
      href="./index.html"
      title="Home"
    >
      Home
    </a>
  </li>
`;

menuList.innerHTML = homeLink + menuItems;

// 首页数据
let pathname = window.location.pathname;
let query = window.location.search;

console.log(pathname);
console.log(query);

let pageTitle = document.querySelector(`.page-title`);
let gameList = document.querySelector(".game-list");

if (pathname.endsWith(`/index.html`) || pathname.endsWith(`/`)) {
  // 首页处理
  let top1 = document.querySelector(`.top1`);
  let top2 = document.querySelector(`.top2`);
  let top3 = document.querySelector(`.top3`);
  let others = document.querySelector(`.others`);

  function itemList(items) {
    return items
      .map(
        (game) => `
    <li class="text-center">
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
    </li>
    `
      )
      .join(``);
  }
  //
  let top1games = fullData.filter((item) =>
    [`SuperSoccer`, `DashCat`].includes(item.name)
  );
  //
  top1.innerHTML = `
    <header class="flex mx-4 justify-between py-2">
      <h2 class="hidden">Hot Games</h2>
    </header>
    <ul class="grid grid-cols-2 gap-2 m-4">
      ${top1games
        .reverse()
        .map(
          (item) => `
      <li class="rounded-lg bg-gradient-to-tr to-blue-500 from-cyan-500 px-2 py-3 text-white shadow-lg shadow-blue-500/30">
        <a href="./game.html?appid=${item.name}">
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
      </li>`
        )
        .join(``)}
    </ul>
  `;
  //
  let top2games = fullData
    .filter((item) => item.category.toLowerCase() == "casual")
    .filter((game) => group.includes(game.name))
    .slice(0, 6);
  top2.innerHTML = `
    <header class="flex mx-4 justify-between py-4">
      <h2>Casual Games</h2>
      <a class="text-gray-400" href="./category.html?name=casual">More</a>
    </header>
    <ul class="grid grid-cols-3 gap-4 mx-4">
      ${itemList(top2games)}
    </ul>
  `;
  //
  let top3games = fullData
    .filter((item) => item.category.toLowerCase() == "puzzle")
    // .filter((game) => group.includes(game.name))
    .slice(0, 6);
  top3.innerHTML = `
    <header class="flex mx-4 justify-between py-4">
      <h2>Puzzle Games</h2>
      <a class="text-gray-400" href="./category.html?name=puzzle">More</a>
    </header>
    <ul class="grid grid-cols-3 gap-4 mx-4">
      ${itemList(top3games)}
    </ul>
  `;
  //
  let otherGames = fullData
    .filter(
      (item) =>
        !["puzzle", "casual", "action"].includes(item.category.toLowerCase())
    )
    .filter((game) => group.includes(game.name))
    .slice();
  let otherRandomGames = otherGames.sort(() => 0.5 - Math.random()).slice(0, 6);
  others.innerHTML = `
    <header class="flex mx-4 justify-between py-4">
      <h2>Other Games</h2>
    </header>
    <ul class="grid grid-cols-3 gap-4 mx-4">
      ${itemList(otherRandomGames)}
    </ul>
  `;
}

if (pathname.endsWith(`/category.html`)) {
  // 分类页处理
  let queryName = `?name=`;
  let queryId = query.slice(query.indexOf(queryName) + queryName.length);
  console.log(`queryId`, queryId);

  pageTitle.innerHTML = categories.filter(
    (item) => item.toLowerCase() == queryId.toLowerCase()
  );

  document.title = `${pageTitle.innerHTML} Games`;

  gameList.innerHTML = fullData
    .filter((item) => item.category.toLowerCase() == queryId.toLowerCase())
    .map(
      (item) => `
    <li class="flex justify-between items-center">
    <div>
      <a class="flex space-x-3" href="./game.html?appid=${item.name}">
      <img
        class="object-cover h-20 w-20 rounded-lg"
        src="${ICON_PATH}${item.name}.${ICON_FORMAT}"
        alt="${item.title}"
        width="100"
        height="100"
        loading="lazy"
      />
      <div>
        <h2
          class="pt-2"
        >
          ${item.title}
        </h2>
        <div class="space-x-1">
          <span class="text-orange-400">${
            (item.played && item.played) || 0
          }</span
          ><span class="text-gray-400 text-center">Play</span>
        </div>
      </div>
      </a>
    </div>
    <div class="text-center">
      <a
        class="inline-block rounded-full uppercase bg-indigo-500 text-white py-2 w-24"
        href="./game.html?appid=${item.name}"
        >Play</a>
    </div>
  </li>
  `
    )
    .join(``);
}

if (pathname.endsWith(`/game.html`)) {
  // 详情页处理
  let queryName = `?appid=`;
  let queryId = query.slice(query.indexOf(queryName) + queryName.length);
  console.log(`queryId`, queryId);

  let gameInfo = document.querySelector(`.game-information`);
  let gameDesc = document.querySelector(`.game-description`);
  let gamePlay = document.querySelector(`.game-play`);
  let gameRelated = document.querySelector(`.game-related`);

  const currentGame = fullData.find(
    (item) => item.name.toLowerCase() == queryId.toLowerCase()
  );
  // 设置标题
  pageTitle.innerHTML = currentGame.title;
  document.title = `Play ${currentGame.title} Now`;
  gameInfo.innerHTML = `
      <a title="Play ${currentGame.title} Now"
      class="link-play p-4 flex gap-3"
      href="${domain}/newgames/minigame.html?appid=${
    currentGame.name
  }&platform=${platform}">
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
          <span class="text-orange-400">${
            currentGame.played ? currentGame.played : `120.3K`
          }</span
          ><span class="text-gray-400">Play</span>
        </div>
      </div>
      </a>
  `;
  gamePlay.innerHTML = `
  <a title="Play ${currentGame.title} Now"
  class="inline-block rounded-full uppercase bg-indigo-500 text-white py-3 w-56"
  href="${domain}/newgames/minigame.html?appid=${currentGame.name}&platform=${platform}&t=20220906"
  >Play</a
>
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
      <a class="flex space-x-3" href="./game.html?appid=${item.name}">
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
          href="./game.html?appid=${item.name}"
          >Play</a
        >
      </div>
    </li>
    `
    )
    .join(``);
}
