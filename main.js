// 菜单逻辑
var menuButton = document.querySelectorAll(".menu-button");

var menu = document.querySelector(".menu");

function toggleMenu() {
  menu.classList.toggle(`hidden`);
}

menuButton.forEach((item) => item.addEventListener("click", toggleMenu));

// 游戏数据
var platform = `tpal`;
var domain = `https://cdn.playgames.mobi`;
var fullData = data.games;
var categories = data.categories;

// let basepath = `/copy`;
// let basepath = ``;

// 菜单数据
var menuList = document.querySelector(`.menu-itemlist`);
var menuItems = categories
  .map(
    function (cat) {
      return (`
        <li>
          <a
            class="block p-3"
            href="./category.html?name=${cat.toLowerCase()}&from=menu"
            title="${cat}"
          >
            ${cat}
          </a>
        </li>
      `)
    }
  )
  .join(``);

var homeLink = `
  <li>
    <a
      class="block p-3"
      href="./index.html?from=menu"
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
  var top1 = document.querySelector(`.top1`);
  var top2 = document.querySelector(`.top2`);
  var top3 = document.querySelector(`.top3`);
  var others = document.querySelector(`.others`);

  function itemList(items, source) {
    return items
      .map(
        function (game) { return (`
          <li class="text-center">
            <a href="./game.html?appid=${game.name}${
                source ? `&from=${source}` : ``
              }">
              <img
                class="inline-block rounded-lg"
                src="${game.icon}"
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
       `)}
      )
      .join(``);
  }
  //
  var top1games = fullData.filter(function (item) { return ([`BoardTheTrain`, `FireTheGun`].includes(item.name))}
  );
  //
  top1.innerHTML = `
    <header class="flex mx-4 justify-between py-4">
      <h2>Hot Games</h2>
    </header>
    <ul class="grid grid-cols-2 gap-2 m-4">
      ${top1games
        .reverse()
        .map(
          function (item) { return (`
          <li class="rounded-lg bg-gradient-to-tr to-blue-500 from-cyan-500 px-2 py-3 text-white shadow-lg shadow-blue-500/30" style="color: white">
            <a href="./game.html?appid=${item.name}&from=home">
              <div class="flex space-x-1">
                <img
                  class="rounded-lg border-2 border-[#ffffff] w-16 h-16 -mt-8 bg-white"
                  style="border-color: white; background-color: white;"
                  src="${item.icon}"
                  alt="${item.title}"
                  width="100"
                  height="100"
                />
                <div class="text-xs drop-shadow"><span class="text-yellow-200 text-sm" style="color: yellow">${item.played}</span> Play</div>
              </div>
              <div class="flex justify-between items-center pt-2 drop-shadow">
                <h2 class="font-bold">${item.title}</h2>
                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" class="w-8 h-8">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clip-rule="evenodd" />
              </svg>                         
              </span>
              </div>
              
            </a>
          </li>`)}
        ).join(``)}
    </ul>
  `;
  //
  var top2games = fullData
    .filter(function (item) {return (item.category.toLocaleLowerCase() === "casual")})
    .slice(0, 6);
  top2.innerHTML = `
    <header class="flex mx-4 justify-between py-4">
      <h2>Casual Games</h2>
      <a class="text-gray-400" href="./category.html?name=casual&from=home&t=more">More</a>
    </header>
    <ul class="grid grid-cols-3 gap-4 mx-4">
      ${itemList(top2games, `home`)}
    </ul>
  `;
  //
  var top3games = fullData
    .filter(function (item) {return (item.category.toLocaleLowerCase() === "puzzle")})
    .slice(0, 6);
  top3.innerHTML = `
    <header class="flex mx-4 justify-between py-4">
      <h2>Puzzle Games</h2>
      <a class="text-gray-400" href="./category.html?name=puzzle&from=home&t=more">More</a>
    </header>
    <ul class="grid grid-cols-3 gap-4 mx-4">
      ${itemList(top3games, `home`)}
    </ul>
  `;
  //
  var otherGames = fullData
    .filter(
      function (item) { return (
        !["puzzle", "casual", "action"].includes(
          item.category.toLocaleLowerCase()
        ))}
    )
    .slice();
  var otherRandomGames = otherGames.sort(function () {return (0.5 - Math.random())}).slice(0, 6);
  others.innerHTML = `
    <header class="flex mx-4 justify-between py-4">
      <h2>Other Games</h2>
    </header>
    <ul class="grid grid-cols-3 gap-4 mx-4">
      ${itemList(otherRandomGames, `home`)}
    </ul>
  `;
}

if (pathname.endsWith(`/category.html`)) {
  // 分类页处理
  var queryName = `?name=`;
  var queryId = query.slice(query.indexOf(queryName) + queryName.length);
  console.log(`queryId`, queryId);
  queryId =
    queryId.indexOf(`&from`) !== -1
      ? queryId.slice(0, queryId.indexOf(`&from`))
      : queryId;
  pageTitle.innerHTML = categories.filter(
    function (item) { return (item.toLocaleLowerCase() === queryId.toLocaleLowerCase())}
  );

  document.title = `${pageTitle.innerHTML} Games`;

  gameList.innerHTML = fullData
    .filter(function (item) { return (item.category.toLowerCase() == queryId.toLowerCase())})
    .map(
      function (item) {return (`
    <li class="flex justify-between items-center">
    <div>
      <a class="flex space-x-3" href="./game.html?appid=${
        item.name
      }&from=category&t=icon">
      <img
        class="object-cover h-20 w-20 rounded-lg"
        src="${item.icon}"
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
        href="./game.html?appid=${item.name}&from=category&t=btn"
        style="background-color: #6366f1; color: white;"
        >Play</a>
    </div>
  </li>
  `)}
    )
    .join(``);
}

if (pathname.endsWith(`/game.html`)) {
  // 详情页处理
  var queryName = `?appid=`;
  var queryId = query.slice(query.indexOf(queryName) + queryName.length);
  console.log(`queryId`, queryId);
  queryId =
    queryId.indexOf(`&from`) !== -1
      ? queryId.slice(0, queryId.indexOf(`&from`))
      : queryId;

  var gameInfo = document.querySelector(`.game-information`);
  var gameDesc = document.querySelector(`.game-description`);
  var gamePlay = document.querySelector(`.game-play`);
  var gameRelated = document.querySelector(`.game-related`);

  var currentGame = fullData.find(
    (item) => item.name.toLocaleLowerCase() == queryId.toLocaleLowerCase()
  );
  // 设置标题
  pageTitle.innerHTML = currentGame.title;
  document.title = `Play ${currentGame.title} Now`;
  gameInfo.innerHTML = `
      <img
        class="rounded-2xl w-32 h-32"
        src="${currentGame.icon}"
        alt="${currentGame.title}"
        width="200"
        height="200"
      />
      <div>
        <h1 class="text-lg">${currentGame.title}</h1>
        <div class="flex space-x-2 star my-2">
          <div class="flex items-center">
            <span class="clip-star bg-yellow-400" style="background-color: #FFBF1C"></span>
            <span class="clip-star bg-yellow-400" style="background-color: #FFBF1C"></span>
            <span class="clip-star bg-yellow-400" style="background-color: #FFBF1C"></span>
            <span class="clip-star bg-yellow-400" style="background-color: #FFBF1C"></span>
            <span class="clip-star bg-gray-300" style="background-color: #EEE"></span>
          </div>
          <span class="text-gray-400">${currentGame.stars}</span>
        </div>
        <div class="space-x-1">
          <span class="text-orange-400" style="color: #fb923c">${
            currentGame.played ? currentGame.played : `120.3K`
          }</span
          ><span class="text-gray-400">Play</span>
        </div>
      </div>
  `;
  gamePlay.innerHTML = `
  <a
  class="inline-block rounded-full uppercase bg-indigo-500 text-white py-3 w-56"
  style="background-color: #6366f1; color: white;"
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
      function (item) { return (`
    <li class="flex justify-between items-center">
      <a class="flex space-x-3" href="./game.html?appid=${item.name}&from=game&t=icon">
        <img
          class="object-cover h-16 w-16 rounded-lg"
          src="${item.icon}"
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
          class="inline-block rounded-full uppercase py-2 w-24"
          style="background-color: #6366f1; color: white;"
          href="./game.html?appid=${item.name}&from=game&t=btn"
          >Play</a
        >
      </div>
    </li>
    `)}
    )
    .join(``);
}
