"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16515],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(a),b=o,y=d["".concat(c,".").concat(b)]||d[b]||p[b]||s;return a?r.createElement(y,n(n({ref:t},u),{},{components:a})):r.createElement(y,n({ref:t},u))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,n=new Array(s);n[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,n[1]=i;for(var l=2;l<s;l++)n[l]=a[l];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},71835:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=a(87462),o=(a(67294),a(3905));const s={title:"fp",description:"OpenBB Terminal Function"},n="fp",i={unversionedId:"reference/cryptocurrency/nfts/fp",id:"reference/cryptocurrency/nfts/fp",title:"fp",description:"OpenBB Terminal Function",source:"@site/content/terminal/reference/cryptocurrency/nfts/fp.md",sourceDirName:"reference/cryptocurrency/nfts",slug:"/reference/cryptocurrency/nfts/fp",permalink:"/terminal/reference/cryptocurrency/nfts/fp",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/cryptocurrency/nfts/fp.md",tags:[],version:"current",frontMatter:{title:"fp",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"collections",permalink:"/terminal/reference/cryptocurrency/nfts/collections"},next:{title:"stats",permalink:"/terminal/reference/cryptocurrency/nfts/stats"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:l};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fp"},"fp"),(0,o.kt)("p",null,"Display floor price of a certain NFT collection. ","[Source: https://nftpricefloor.com/]"),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"usage: fp -s SLUG\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"),(0,o.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"slug"),(0,o.kt)("td",{parentName:"tr",align:null},"NFT floor price collection slug (e.g., bored-ape-yacht-club)"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"False"),(0,o.kt)("td",{parentName:"tr",align:null},"forgotten-runes-wizards-cult, the-vogu-collective, joyworld-joys, renga, metasaurs, avastars, wicked-craniums, hyperhash-art-blocks-curated, official-moar-by-joan-cornella, ecumenopolis-art-blocks-playground, foustlings, supducks, neo-tokyo-identities, ether-orcs, cryptopunks, mooncats, mfers, bored-ape-kennel-club, meebits, tom-sachs-rockets, akuma-origins, plasma-bears, rtfkt-mnlth, akutars, eightbitme, shinsei-galverse, gh0stly-gh0sts, ragnarok-meta, mcgoblinwtf, foxfam, the-potatoz, autoglyphs, milady, the-blocks-of-art-art-blocks-curated, scribbled-boundaries-art-blocks-curated, dooplicator, 27-bit-digital-art-blocks-curated, 720-minutes-art-blocks-curated, grifters-by-xcopy, aerial-view-art-blocks-curated, algorhythms-art-blocks-curated, algobots-art-blocks-curated, apparitions-art-blocks-curated, bubble-blobby-art-blocks-curated, geometry-runners-art-blocks-curated, squiggly, singularity-art-blocks-curated, unigrids-art-blocks-curated, metahero-universe-generative, archetype-art-blocks-curated, trossets-art-blocks-curated, cool-cats, collectvox, veefriends, peaceful-groupies, gambling-apes, 0xMons, desperate-ape-wives, framergence, the-cryptodads, gener8tive-k-compositions, the-shiboshis, gen-art-membership, deadfellaz, gevols, neo-tokyo-part-3-item-caches, blitmap, bears-deluxe, jungle-freaks-by-trosley, 888-inner-circle, wolf-game, voxies, neo-tokyo-part-4-land-deeds, nimbuds-art-blocks-curated, subscapes-art-blocks-curated, chill-frogs, creepz-genesis, poap, sappy-seals, pulsquares, chimera-art-blocks-curated, genesis-braindrops, Decentraland, pudgy-penguins, asm-aifa-genesis, jrny-nft-club, party-ape-billionaire-club, incognito, cyberbrokers, chain-runners, dotdotdots, wicked-ape-bone-club, etheria, proof-collective, bapetaverse-official, dynamic-slices-art-blocks-curated, shinsekaicorp, murakami-flowers, the-yakuza-cats-society, space-punks-club, veefriends-series-2, v1-cryptopunks-wrapped, supernormalbyzipcy, frammenti-art-blocks-curated, lostsamurise, adidas-for-prada, adidas-virtual-gear-genesis, 10ktf, asm-brains, galaxy-fight-club, fluf-world, the-littles-nft, kleee02, renga-black-box, purrnelopes-country-club, haki-nft, tiny-dinos, quantum-key, arcade-land, impostors-genesis-aliens, los-muertos-world, everai-heroes-duo, factura-by-mathias-isaksen, dreams-art-blocks-curated, construction-token-art-blocks-curated, byopills, crypto-bull-society, cupcats-official, galaxy-eggs, gutter-dogs, spooky-boys-country-club, the-art-of-seasons, beeple-everydays, elevated-deconstructions-art-blocks-curated, sorare, we-are-all-going-to-die, loot, uninterested-unicorns, mekaverse, premint-collector-pass, cryptoblots-art-blocks-curated, the-association-nft, chimpers-nft, cosmic-reef-art-blocks-curated, meridian-art-blocks-playground, phototaxis-art-blocks-playground, paper-armada-art-blocks-playground, treeverse, time-pieces-build-a-better-future, doodles, genesis-art-blocks-curated, beeple-genesis-collection, jadu-jetpack, galacticapes, digidaigaku, winter-bears, cryptoskulls, decentraland_names, ens-domains, raidparty-fighters, adidas-originals-capsule-collection, curio-cards, punks-comic, dodgers-mlb-crypto, vaynersports-pass-vsp, elementals-art-blocks-curated, screens-art-blocks-curated, memories-of-qilin-art-blocks-curated, colorspace-art-blocks-curated, flux-art-blocks-curated, anticyclone-art-blocks-curated, the-humanoids, ignition-art-blocks-curated, inspirals-art-blocks-curated, lonely-alien-space-club, spectron-art-blocks-curated, synapses-art-blocks-curated, watercolor-dreams-art-blocks-curated, glitch-crystal-monsters-art-blocks-curated, pigments-art-blocks-curated, endless-nameless-art-blocks-curated, sneaky-vampire-syndicate, bastard-gan-punks-v2, damien-hirst-the-currency, coolmans-universe, creepz-reptile-armoury, rhythm-art-blocks-playground, smilesssvrs, the-alien-secret-society, space-doodles, wavelength, furballs, killergf, nina-s-super-cool-world, monaco-planet-yacht, crypto-cannabis-club, thorguards, 1111-by-kevin-abosch, cryptobatz-by-ozzy-osbourne, dourdarcels, invisible-friends, karafuru, cryptocoven, wizards-dragons-game, the-doge-pound, creature-world, phase-art-blocks-curated, cryptoadz, monkey-bet-dao, divine-anarchy, fang-gang, moonbirds-oddities, onchainmonkey, superlative-secret-society, alien-insects-art-blocks-playground, cryptoon-goonz, isekai-meta, rektguy, io-imaginary-ones, animetas, ape-gang, habbo-avatars, al-cabones, fidenza-art-blocks-curated, cryptodickbutts, playboy-rabbitars-official, first-first-nfts, ether-cards-founder, goop-troop, fvck-crystal, headdao, 8liens, gutter-rats, stoner-cats, bubblegum-kids, the-official-surreals, fusion-by-hideki-tsukamoto, where-my-vans-go, kiwami-genesis, the-alien-boy, tubby-cats, lives-of-asuna, defy-genesis-masks, polygonpunks, peculiar-gang, the-n-project, fluf-world-thingies, gutter-pigeons, neo-tokyo-outer-identities, wonderpals, otherdeed, world-of-women, realms-for-adventurers, generativemasks, crypto-pills-by-micha-klein, heaven-computer, cryptomories, the-wanderers, aww-friends, the-blitnauts, capsule-house, timeless-characters, apostles-genesis, waifusion, swampverse, bored-mummy-waking-up, fragments-of-an-infinite-field-art-blocks-curated, ancient-courses-of-fictional-rivers-art-blocks-curated, shitbeast, mutant-garden-seeder, cyberkongz-genesis, collectvoxmirandus, azuki, salt-v4, satoshibles, uwucrew, 3landers, goblintownwtf, mutant-ape-yacht-club, lightspeed-lads, genuine-ardvark, goatz, ack-unique-editions, hapeprime, alienfrensnft, color-study-art-blocks-playground, dino-pals-art-blocks-factory, 0n1-force, cyberkongz-vx, adidas-originals-into-the-metaverse-phase-1-and-2, portal-art-blocks-playground, podgans-braindrops, the-saudis-nft, animonkeys, anonymice-breeding, song-a-day, corruption-s, boki-nft, solos, deafbeef, anonymice, gazers, sipherian-surge, phantabear, prime-ape-planet-pap, creepz-shapeshifterz, muri-haus, derace-horses, mr-crypto-by-racksmafia, the-senses, rojom, drip-squad, cryptocubes, fast-food-punks, fomoverse, avatar-rock-out, the-minds-eye, cool-pets-nft, adidas-wagmi-united, mlb-champions, the-sevens, proof-moonbirds, ape-kids-club, world-of-women-galaxy, og-crystals, nouns, angry-ape-army, cryptotrunks, solvency, bored-ape-yacht-club, crypto-unicorns, spooky-season-poieeeyee, lazy-lions, rumble-kong-league, apes-in-space, yolo-holiday, the_sandbox, eulerbeats-genesis-original, wearing-your-emotion, natsukashii, treasure-of-ophiel, imaginatation-station, cute-snacks, conall-in-space, bald-tuesdays, party-degenerates, alien-clock-art-blocks-playground, rug-radio-genesis-nft, loomlocknft, skulptuur-art-blocks-curated, letswalk, entretiempos-art-blocks-curated, obits, koin-games-dev-squad, metahero-universe-core-identities, para-bellum-art-blocks-curated, ainightbirds, decentraland_wearables, revenants-by-alethea-ai, dapper-dinos-nft, chumbi-valley, tfoust10, celestial-assembly, 5-boro-bodega, gettin-groovy, meme-team, creatures-of-the-nighties, enlightenment, earth-to-planet, zombieclub-token, koala-intelligence-agency, royal-society-of-players, ikb-cachet-de-garantie, edifice, avidlines, mutant-cats, vortex, bored_ape_chemistry_club, adam-bomb-squad, fomo-dog-club, rareapepeyachtclub, bulls-on-the-block, ghostsproject, cute-cool-and-creepy, the-singularity, smallbros, robotos, ringers-art-blocks-curated, hausphases, deadheads, gutter-cat-gang, beeple-spring-summer-collection, nftrees, merge, slotie-nft, crypto-stamp, deez-nuts, stepn-shoeboxes, beanz-official, i-quit-my-job-to-be-an-artist, doodle-collection, the-fatty-bagz, autology, bent, rituals, old-school-cool, magic-of-the-woods, stutter-void, tandizojere, bodegacatceo, boss-beauties, the-eternal-pump, impact-theory-founders-key, nifty-league-degens, clonex, the-butterfly-garden, sys32template, pegz, fewocious-x-rtfkt, meta-legends, lil-heroes-by-edgar-plans, worldwide-webb-land, aylia, chainfaces, lobsterdao, neo-tokyo-part-2-vault-cards, chromie-squiggle-art-blocks-curated, nft-worlds, backed-goods-&-evils, growl-gang, creatures-without-pants, cryptoarte, qql-mint-pass, exosama-expect-chaos, parallel-alpha, cryptovoxels, oana193, substantial-law-910, genuine-undead-nft, baby-doge-army, protectors-of-the-forest, drag-queens-of-big-gay-baby, hoppy-doodle, alicia-freeman-designs, boonji-project, automatism-art-blocks-factory, dystopunks, laura-dumitriu, puzzled-panther, looki, century-art-blocks-curated, mind-the-gap-by-mountvitruvius, hedz-by-matt-furie, worst-twitch-ever, canetoonist, joy-girls-club, beeple-5000-days-collection, max-pain-and-frens-by-xcopy, plasticity-by-p4stoboy, avire-nft, tirli, bites-of-brazil, sidus-nft-heroes, rtfkt-x-rimowa, fewoworld-paint-nft, raunchy-rancor, fmarxy, inft-personality-pod-by-alethea-ai, mask-world-nft, doge-pound-puppies, dubbl3bee, eando9745, catharsis-by-dario-lanza, rinascita, art-gobblers, koripo-by-rich-poole, colorglyphs, metroverse-genesis, psychedelics-anonymous-genesis, ledger-market-pass-genesis-edition, crypto-chicks, kaiju-kingz, jiometory-no-compute-art-blocks-curated, metabillionaire, akumu-dragonz, sail-o-bots-art-blocks-factory, hashmasks, asemica, kpr")))),(0,o.kt)("hr",null))}p.isMDXComponent=!0}}]);