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

const recommended = ["SuperSoccer", "DashCat"];

// 菜单逻辑
let menuButton = document.querySelectorAll(".menu-button");

let menu = document.querySelector(".menu-panel");

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
let menuList = document.querySelector(`.menu-list`);
let menuItems = categories
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

let homeLink = `
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
let pathname = window.location.pathname;
let query = window.location.search;

console.log(pathname);
console.log(query);

let pageTitle = document.querySelector(`.page-title`);
let gameList = document.querySelector(".game-list");

if (pathname.endsWith(`/index.html`) || pathname.endsWith(`/`)) {
  // 首页处理

  let homeContent = document.getElementById(`home-content`);

  let showPlayed = false;
  let showRecommended = true;

  let topgames = fullData.filter((item) => recommended.includes(item.name));

  homeContent.innerHTML = ``;
  //
  function RecommendGames() {
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
        `rounded-lg bg-gradient-to-tr to-blue-500 from-cyan-500 px-2 py-3 text-white shadow-lg shadow-blue-500/30`
      );
      li.innerHTML = `
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
      `;
      ul.append(li);
    });

    header.append(h2);
    section.append(header, ul);
    return section;
  }

  function Banner() {
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
    ins.setAttribute(`data-ad-slot`, `5973598328`);
    ins.setAttribute(`data-ad-format`, `auto`);
    ins.setAttribute(`data-full-width-responsive`, `true`);
    ins.setAttribute(`data-adtest`, `on`);
    script.innerHTML = `(adsbygoogle = window.adsbygoogle || []).push({})`;
    banner.append(bannerTitle, ins, script);
    return banner;
  }

  if (showRecommended) {
    homeContent.append(Banner(), RecommendGames());
  }

  categories.forEach((category, index) => {
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

    h2.innerHTML = `${category.name} Games`;

    let games = fullData.filter((item) => item.category == category.name);

    // console.log(`games`, games);
    if (games.length > 6) {
      a.innerHTML = `More`;
      a.setAttribute(`href`, `./category.html?name=${category.slug}`);
    }

    games
      .slice()
      .sort(() => 0.5 - Math.random())
      .slice(0, 6)
      .forEach((game) => {
        let li = document.createElement(`li`);
        li.innerHTML = `
        <a href="./game.html?appid=${game.name}">
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
          ${
            showPlayed
              ? `<div>
                <span class="text-orange-400">${game.played}</span> Play
              </div>`
              : ``
          }
        </a>
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
}

if (pathname.endsWith(`/category.html`)) {
  // 分类页处理
  let queryName = `?name=`;
  let queryId = query.slice(query.indexOf(queryName) + queryName.length);
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
  href="${domain}/newgames/minigame.html?appid=${currentGame.name}&platform=${platform}"
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
