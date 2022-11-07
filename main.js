"use strict";var _upa=window._upa=window._upa||[],_upa_network=1,_upa_impression_target=".upa-impression-target",u_tag="UPTAP10004";_upa.push(["pageview",document.URL||"",window.screen.width||0,window.screen.height||0]),function(){var e=document,t=e.createElement("script"),a=e.getElementsByTagName("script")[0];t.async=!0,t.src="https://cdn2.supereasygame.com/web/analytics/analytics_v1_2.js",a.parentNode.insertBefore(t,a)}();const CHANNEL="gpbox2",GAME_DOMAIN="https://cdn2.supereasygame.com",ICON_FORMAT="jpg",ICON_PATH="https://cdn.iwantalipstick.com/gameicon2/jpg/",DEV_MODE=!0,SELECTED_GAMES=[],TOP_GAMES=["LostInLust","MyHome"],GAMES_FOR_HOME=["FillTheGlass","PianoKeys","TrainIsComing","SpinTheMaze","MagicWorm","HelpTheSheep","IronAttack","JumpSmash","TrafficRun","HiTaxi","BoardTheTrain","LostInLust","TwistyRoad","FlyPass","DressQueen","CrazyRace","HungryMonster","HumanTower","8BallKing","ArcheryMaster","SuperSoccer","ShootingStar","BilliardKing","PowerShooter","BestShooter","GunShooter","ArcheryKing","AirBrawl","CrackShot","KillAllZombies","BulletMaster3D","BulletMan","FireTheGun","MrBullet","MergeGuns3D","ShootingCubes","MagicBomb","BombingTime","MergeAndDefense","DefenseTower","TrappedPirate","FisherMan","SkyRunning3D","SkatingMaster","FeverRacing","ColorBall3D","IceEscape","RoofRunner","AttackHero","SausageRun","BraveArcher","WildRoll","RollingAgent","GlidingCharger","MyCat","LittleMiner","LittleFarm","WoodIsland","BoomingPlant","HarvestStory","ColorCrash","BounceShooter","RainbowSplash","MatchingCook","MelodyLink","MahjongLink","MagicCarpenter","NastyBomb","DashCat","CandyHit","PetRun","ShootSmash","Hurricane","FuryEdge","CrazyGunfight","CrazyHammer","MergeKill","Knife"];let fullData=data.games.filter((e=>SELECTED_GAMES.length?SELECTED_GAMES.includes(e.name):e)),homeData=data.games.filter((e=>GAMES_FOR_HOME.includes(e.name))),tmpCategories=[...new Set(fullData.map((e=>e.category)))],categories=data.categories.filter((e=>tmpCategories.includes(e.name))),menuButton=document.querySelectorAll(".menu-button"),menu=document.querySelector(".menu-panel");function toggleMenu(){menu.classList.toggle("hidden")}menuButton.forEach((e=>e.addEventListener("click",toggleMenu)));let menuHomeItem='<li><a class="item-link" href="./index.html?from=menu" title="Home">Home</a></li>',menuList=document.querySelector(".menu-list"),menuItems=categories.map((e=>`<li><a class="item-link" href="./category.html?name=${e.slug}?from=menu" title="${e.name} Games">${e.name}</a></li>`)).join("");function resolveUrlParams(e,t){let a={};return e.split("?")[1].split("&").forEach((e=>{let t=e.split("=");a[t[0]]=t[1]})),a[t]}menuList.innerHTML=menuHomeItem+menuItems;let pathname=window.location.pathname,query=window.location.search,pageTitle=document.querySelector(".page-title"),gameList=document.querySelector(".game-list");if(pathname.endsWith("/index.html")||pathname.endsWith("/")){let e=document.getElementById("home-content"),t=!1,a=!0,n=fullData.filter((e=>TOP_GAMES.includes(e.name)));function l(){let e=document.createElement("section"),t=document.createElement("ul");return e.setAttribute("class","top-games"),t.setAttribute("class","card-list"),n.forEach((e=>{let a=document.createElement("li");a.setAttribute("class","top-list-item upa-impression-target"),a.setAttribute("upa-tag",`${e.name}`),a.innerHTML=`\n        <a target="_blank" href="./game.html?appid=${e.name}&from=home" onclick="_upa.push(['click', '${e.name}', '']); gtag('event', 'game_detail_click', { game : '${e.name}' })">\n          <div class="flex space-x-1">\n            <img\n              class="rounded-lg border-2 border-white w-16 h-16 -mt-8 bg-white"\n              src="${ICON_PATH}${e.name}.jpg"\n              alt="${e.title}"\n              width="100"\n              height="100"\n              loading="eager"\n            />\n            <div class="text-xs drop-shadow"><span class="text-yellow-200 text-sm">${e.played}</span> Play</div>\n          </div>\n          <div class="flex justify-between items-center pt-2 drop-shadow">\n            <h2 class="font-bold">${e.title}</h2>\n            <span>\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">\n            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clip-rule="evenodd" /></svg>                         \n            </span>\n          </div>\n        </a>`,t.append(a)})),e.append(t),e}function s(e){let t=document.createElement("div"),a=document.createElement("div"),n=document.createElement("ins"),l=document.createElement("script");return t.setAttribute("class","banner"),a.innerHTML="ADVERTISEMENT",a.setAttribute("class","text-center text-xs text-gray-400"),n.setAttribute("class","adsbygoogle"),n.setAttribute("style","display: flex; justify-content: center; background-color: #00000008"),n.setAttribute("data-ad-client","ca-pub-9209477879340784"),n.setAttribute("data-ad-slot",e),n.setAttribute("data-ad-format","auto"),n.setAttribute("data-full-width-responsive","true"),n.setAttribute("data-adtest","on"),l.innerHTML="(adsbygoogle = window.adsbygoogle || []).push({})",t.append(a,n,l),t}e.innerHTML="",a&&e.append(l(),s("6475533224")),categories.sort(((e,t)=>e.total<t.total?1:-1)).forEach(((a,n)=>{let l=document.createElement("section"),i=document.createElement("header"),r=document.createElement("h2"),o=document.createElement("a"),c=document.createElement("ul"),m=document.createDocumentFragment();i.append(r,o),l.append(i,c),l.setAttribute("class","game-section"),i.setAttribute("class","section-header"),c.setAttribute("class","section-list"),o.setAttribute("class","text-gray-400");let p=homeData.filter((e=>e.category===a.name));r.innerHTML=`${a.name} Games`,a.total>6&&(o.innerHTML="More",o.setAttribute("href",`./category.html?name=${a.slug}&from=home`)),p.slice().sort(((e,t)=>GAMES_FOR_HOME.indexOf(e.name)>GAMES_FOR_HOME.indexOf(t.name)?1:-1)).forEach((e=>{let a=document.createElement("li");a.setAttribute("class","upa-impression-target"),a.setAttribute("upa-tag",`${e.name}`),a.innerHTML=`\n          <a target="_blank" href="./game.html?appid=${e.name}&from=home" onclick="_upa.push(['click', '${e.name}', '']); gtag('event', 'game_detail_click', { game : '${e.name}' })">\n            <img\n              class="rounded-lg mx-auto"\n              src="${ICON_PATH}${e.name}.jpg"\n              alt="${e.title}"\n              height="100"\n              width="100"\n              loading=${n>0?"lazy":"eager"}\n            />\n            <h2 class="pt-2 whitespace-nowrap overflow-hidden text-ellipsis">\n              ${e.title}\n            </h2>\n            ${t?`<div><span class="text-orange-400">${e.played}</span> Play</div>`:""}\n          </a>`,m.appendChild(a)})),c.appendChild(m),n%2==0?e.append(l,s(5107946741)):e.append(l)}))}if(pathname.endsWith("/category.html")){let e=resolveUrlParams(query,"name");pageTitle.innerHTML=categories.filter((t=>t.slug.toLowerCase()===e.toLowerCase()))[0].name,document.title=`${pageTitle.innerHTML} Games`,gameList.innerHTML=fullData.filter((t=>t.category.toLowerCase()==e.toLowerCase().replace(/-/g," "))).map(((e,t)=>`\n        <li class="game-list-item upa-impression-target" upa-tag="${e.name}">\n          <div>\n            <a target="_blank" class="flex space-x-3" href="./game.html?appid=${e.name}&from=category" onclick="_upa.push(['click', '${e.name}', '']); gtag('event', 'game_detail_click', { game : '${e.name}' })">\n            <img\n              class="item-image"\n              src="${ICON_PATH}${e.name}.jpg"\n              alt="${e.title}"\n              width="100"\n              height="100"\n              loading=${t<6?"eager":"lazy"}\n            />\n            <div>\n              <h2 class="pt-2">${e.title}</h2>\n              <div class="space-x-1">\n                <span class="text-orange-400">${e.played&&e.played||0}</span><span class="text-gray-400 text-center"> Play</span>\n              </div>\n            </div>\n            </a>\n          </div>\n          <div class="text-center">\n            <a\n              target="_blank"\n              class="item-button"\n              href="./game.html?appid=${e.name}&from=category"\n              onclick="_upa.push(['click', '${e.name}', '']); gtag('event', 'game_detail_click', { game : '${e.name}' })"\n              >Play</a>\n          </div>\n        </li>\n      `)).join("")}if(pathname.endsWith("/game.html")){let e=resolveUrlParams(query,"appid"),t=document.querySelector(".game-information"),a=document.querySelector(".game-description"),n=document.querySelector(".game-play"),l=document.querySelector(".game-related"),s=fullData.find((t=>t.name.toLowerCase()===e.toLowerCase()));pageTitle.innerHTML="",document.title=`Play ${s.title} Now`,t.innerHTML=`\n    <a target="_blank" onclick="_upa.push(['click', '${s.name}', '']); return gtag_report_conversion('${GAME_DOMAIN}/newgames/minigame.html?appid=${s.name}&platform=gpbox2')" title="Play ${s.title} Now" class="link-play p-4 flex space-x-3" href="${GAME_DOMAIN}/newgames/minigame.html?appid=${s.name}&platform=gpbox2">\n      <img\n        class="rounded-2xl w-24 h-24"\n        src="${ICON_PATH}${s.name}.jpg"\n        alt="${s.title}"\n        width="200"\n        height="200"\n      />\n      <div>\n        <h1 class="text-lg">${s.title}</h1>\n        <div class="flex space-x-2 star my-2">\n          <div class="flex items-center">\n            <span class="clip-star bg-yellow-400"></span>\n            <span class="clip-star bg-yellow-400"></span>\n            <span class="clip-star bg-yellow-400"></span>\n            <span class="clip-star bg-yellow-400"></span>\n            <span class="clip-star bg-gray-300"></span>\n          </div>\n          <span class="text-gray-400">${s.stars}</span>\n        </div>\n        <div class="space-x-1">\n          <span class="text-orange-400">${s.played?s.played:"120.3K"}</span><span class="text-gray-400">Play</span>\n        </div>\n      </div>\n    </a >\n  `,n.innerHTML=`\n    <a\n      title="Play ${s.title} Now"\n      class="detail-play"\n      target="_blank"\n      onclick="_upa.push(['click', '${s.name}', '']); return gtag_report_conversion('${GAME_DOMAIN}/newgames/minigame.html?appid=${s.name}&platform=gpbox2');"\n      href="${GAME_DOMAIN}/newgames/minigame.html?appid=${s.name}&platform=gpbox2">\n      Play\n    </a>\n  `,a.innerHTML=s.description,l.innerHTML=fullData.filter((e=>e.name!==s.name)).slice().sort((()=>.5-Math.random())).slice(0,3).map((e=>`\n      <li class="flex justify-between items-center">\n        <a target="_blank" class="flex space-x-3" href="./game.html?appid=${e.name}&from=detail" onclick="_upa.push(['click', '${e.name}', '']);">\n          <img\n            class="w-16 rounded-lg"\n            src="${ICON_PATH}${e.name}.jpg"\n            alt="${e.title}"\n            width="100"\n            height="100"\n            loading="lazy"\n          />\n          <div>\n            <h2\n              class="pt-2 whitespace-nowrap overflow-hidden text-ellipsis"\n            >\n            ${e.title}\n            </h2>\n            <div class="space-x-1">\n              <span class="text-orange-400">${e.played}</span\n              ><span class="text-gray-400 text-center">Play</span>\n            </div>\n          </div>\n        </a>\n        <div class="text-center">\n          <a\n            target="_blank"\n            class="inline-block rounded-full uppercase bg-indigo-500 text-white py-2 w-24"\n            href="./game.html?appid=${e.name}&from=detail"\n            onclick="_upa.push(['click', '${e.name}', '']);"\n            >Play</a>\n        </div>\n      </li>`)).join("")}