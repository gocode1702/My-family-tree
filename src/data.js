const king = "&#9818";
const queen = "&#9819";
const targaryenSigil =
  "https://awoiaf.westeros.org/images/thumb/1/1e/House_Targaryen.svg/218px-House_Targaryen.svg.png";
const baratheonSigil =
  "https://awoiaf.westeros.org/images/thumb/2/2d/House_Baratheon.svg/218px-House_Baratheon.svg.png";
const westerlingSigil =
  "https://awoiaf.westeros.org/images/thumb/f/f3/House_Westerling.svg/218px-House_Westerling.svg.png";
const costayneSigil =
  "https://awoiaf.westeros.org/images/thumb/6/69/House_Costayne.svg/218px-House_Costayne.svg.png";
const harrowaySigil =
  "https://awoiaf.westeros.org/images/thumb/a/ad/House_Harroway.svg/218px-House_Harroway.svg.png";
const hightowerSigil =
  "https://awoiaf.westeros.org/images/thumb/f/fe/House_Hightower.svg/218px-House_Hightower.svg.png";
const pentosSigil =
  "https://awoiaf.westeros.org/images/8/8a/Coin_of_Pentos.png";
const velaryonSigil =
  "https://awoiaf.westeros.org/images/thumb/5/5f/House_Velaryon.svg/218px-House_Velaryon.svg.png";
const arrynSigil =
  "https://awoiaf.westeros.org/images/thumb/b/b4/House_Arryn.svg/218px-House_Arryn.svg.png";

export const data = [
  {
    id: 1,
    name: `Aegon I`,
    throne: king,
    gender: "male",
    dragon: "Balerion",
    culture: "Valyrian",
    Aliases: "Aegon the Conqueror",
    Born: "27 BC, at Dragonstone",
    Died: "37 AC, at Dragonstone",
    pids: [2, 3],
    img: "https://awoiaf.westeros.org/images/b/bc/Aegon_the_Conqueror.jpg",
    sigil: targaryenSigil,
  },
  {
    id: 2,
    name: `Visenya Targaryen`,
    throne: queen,
    gender: "female",
    dragon: "Vhagar",
    culture: "Valyrian",
    Aliases: [],
    Born: "In 28 BC or 29 BC, at Dragonstone",
    Died: "In 44 AC",
    pids: [1],
    img: "https://awoiaf.westeros.org/images/d/de/Visenya.jpg",
    sigil: targaryenSigil,
  },
  {
    id: 3,
    name: `Rhaenys Targaryen`,
    throne: queen,
    gender: "female",
    dragon: "Meraxes",
    culture: "Valyrian",
    Aliases: [],
    Born: "In 25 BC or 26 BC, at Dragonstone",
    Died: "In 10 AC, at Hellholt",
    pids: [1],
    img: "https://awoiaf.westeros.org/images/8/82/Rhaenys.jpg",
    sigil: targaryenSigil,
  },

  {
    id: 4,
    name: "Maegor I",
    throne: king,
    gender: "male",
    dragon: "",
    culture: "",
    Aliases: ["Maegor the Cruel"],
    Born: "12 AC",
    Died: "48 AC, at King's Landing",
    fid: 1,
    mid: 2,
    pids: [6, 7, 8, 9, 10],
    sigil: targaryenSigil,
  },
  {
    id: 5,
    name: "Aenys I",
    throne: king,
    gender: "male",
    dragon: "",
    culture: "Valyrian",
    Aliases: ["King Abomination"],
    Born: "7 AC, at Dragonstone",
    Died: "42 AC, at Dragonstone",
    fid: 1,
    mid: 3,
    pids: [11],
    sigil: targaryenSigil,
  },

  {
    id: 6,
    name: "Ceryse Hightower",
    throne: queen,
    gender: "female",
    dragon: "",
    culture: "",
    Aliases: [],
    Born: "In 2 AC",
    Died: "In 45 AC, at King's Landing",
    pids: [4],
    sigil: hightowerSigil,
  },
  {
    id: 7,
    name: "Tyanna of the Tower",
    throne: queen,
    gender: "female",
    dragon: "",
    culture: "",
    Aliases: [],
    Born: "Pentos",
    Died: "In 48 AC, at King's Landing",
    pids: [4],
    sigil: pentosSigil,
  },
  {
    id: 8,
    name: "Alys Harroway",
    throne: queen,
    gender: "female",
    dragon: "",
    culture: "Rivermen",
    Aliases: [],
    Born: "",
    Died: "In 44 AC, at King's Landing",
    fid: null,
    mid: null,
    pids: [4],
    sigil: harrowaySigil,
  },
  {
    id: 9,
    name: "Jeyne Westerling",
    throne: queen,
    gender: "female",
    dragon: "",
    culture: "Westerman",
    Aliases: [],
    Born: "In 27 AC or before",
    Died: "In 47 AC or 48 AC",
    pids: [4],
    sigil: westerlingSigil,
  },
  {
    id: 10,
    name: "Elinor Costayne",
    throne: queen,
    gender: "female",
    dragon: "",
    culture: "Reach",
    Aliases: ["Mother Elinor"],
    Born: "In 28 AC",
    Died: "",
    pids: [4],
    sigil: costayneSigil,
  },

  {
    id: 11,
    name: "Alyssa Velaryon",
    throne: queen,
    gender: "female",
    dragon: "",
    culture: "Valyrian",
    Aliases: [],
    Born: "In 7 AC",
    Died: "54 AC, at Storm's End",
    pids: [5, 12],
    sigil: velaryonSigil,
  },
  {
    id: 12,
    name: "Rogar Baratheon",
    gender: "male",
    dragon: "",
    culture: "Stormlander",
    Aliases: ["Hand"],
    Born: "In 17 AC",
    Died: "62 AC, at Storm's End",
    pids: [11],
    sigil: baratheonSigil,
  },

  {
    id: 13,
    name: "Rhaena Targaryen",
    gender: "female",
    dragon: "",
    culture: "Valyrian",
    Aliases: [],
    Born: "In 23 AC",
    Died: "",
    fid: 5,
    mid: 11,
    pids: [],
    sigil: targaryenSigil,
  },
  {
    id: 14,
    name: "Rhaena Targaryen",
    gender: "female",
    dragon: "",
    culture: "Valyrian",
    Aliases: [],
    Born: "In 23 AC",
    Died: "",
    // fid: 5,
    // mid: 11,
    pids: [15],
    sigil: targaryenSigil,
  },
  {
    id: 15,
    name: "Aegon Targaryen",
    gender: "male",
    dragon: "",
    culture: "Valyrian",
    Aliases: ["Aegon the Uncrowned"],
    Born: "In 26 AC",
    Died: "In 15 AC, at Gods Eye",
    fid: 5,
    mid: 11,
    pids: [14],
    sigil: targaryenSigil,
  },
  {
    id: 16,
    name: "Viserys Targaryen",
    gender: "male",
    dragon: "",
    culture: "Valyrian",
    Aliases: [],
    Born: "In 29 AC",
    Died: "In 44 AC",
    fid: 5,
    mid: 11,
    pids: [],
    sigil: targaryenSigil,
  },
  {
    id: 17,
    name: "Jaehaerys I",
    throne: king,
    gender: "male",
    culture: "Valyrian",
    Aliases: ["The Conciliator"],
    Born: "In 34 AC, at King's Landing",
    Died: "In 103 AC, at King's Landing",
    fid: 5,
    mid: 11,
    pids: [18],
    sigil: targaryenSigil,
  },
  {
    id: 18,
    name: "Alysanne Targaryen",
    throne: queen,
    gender: "female",
    culture: "Valyrian",
    Aliases: ["Good Queen Alysanne"],
    Born: "In 36 AC, at King's Landing",
    Died: "In 100 AC, at Dragonstone",
    fid: null,
    mid: null,
    pids: [17],
    sigil: targaryenSigil,
  },
  {
    id: 19,
    name: "Alysanne Targaryen",
    throne: queen,
    gender: "female",
    culture: "Valyrian",
    Aliases: ["Good Queen Alysanne"],
    Born: "In 36 AC, at King's Landing",
    Died: "In 100 AC, at Dragonstone",
    fid: 5,
    mid: 11,
    pids: [],
    sigil: targaryenSigil,
  },
  {
    id: 20,
    name: "Vaella Targaryen",
    gender: "female",
    culture: "Valyrian",
    Aliases: [""],
    Born: "In 39 AC",
    Died: "In 39 AC",
    fid: 5,
    mid: 11,
    pids: [],
    sigil: targaryenSigil,
  },

  {
    id: 21,
    name: "Aerea Targaryen",
    gender: "female",
    dragon: "Balerion",
    culture: "Valyrian",
    Aliases: [""],
    Born: "In 42 AC, at Casterly Rock",
    Died: "In 56 AC, at King's Landing",
    fid: 15,
    mid: 14,
    pids: [],
    sigil: targaryenSigil,
  },
  {
    id: 22,
    name: "Rhaella Targaryen",
    gender: "female",
    dragon: "",
    culture: "Valyrian",
    Aliases: [""],
    Born: "In 42 AC, at Casterly Rock",
    Died: "In or after 73 AC",
    fid: 15,
    mid: 14,
    pids: [],
    sigil: targaryenSigil,
  },
  {
    id: 23,
    name: "Aegon Targaryen",
    gender: "male",
    dragon: "",
    culture: "Valyrian",
    Aliases: [""],
    Born: "In 52 AC, at King's Landing",
    Died: "In 52 AC,at King's Landing",
    fid: 17,
    mid: 18,
    pids: [],
    sigil: targaryenSigil,
  },
  {
    id: 24,
    name: "Daenarys Targaryen",
    gender: "female",
    dragon: "",
    culture: "Valyrian",
    Aliases: [""],
    Born: "In 53 AC, at King's Landing",
    Died: "In 60 AC,at King's Landing",
    fid: 17,
    mid: 18,
    pids: [],
    sigil: targaryenSigil,
  },
  {
    id: 25,
    name: "Aemon Targaryen",
    gender: "male",
    dragon: "Caraxes",
    culture: "Valyrian",
    Aliases: [""],
    Born: "In 55 AC, at Dragonstone",
    Died: "In 92 AC, at Tarth",
    fid: 17,
    mid: 18,
    pids: [37],
    sigil: targaryenSigil,
  },
  {
    id: 26,
    name: "Baelon Targaryen",
    gender: "male",
    dragon: "Vhagar",
    culture: "Valyrian",
    Aliases: ["Baelon the Brave"],
    Born: "In 57 AC, at Dragonstone",
    Died: "In 101 AC, at King's Landing",
    fid: 17,
    mid: 18,
    pids: [27],
    sigil: targaryenSigil,
  },
  {
    id: 27,
    name: "Alyssa Targaryen",
    gender: "female",
    dragon: "Meleys",
    culture: "Valyrian",
    Aliases: [],
    Born: "In 60 AC",
    Died: "In 84 AC",
    fid: null,
    mid: null,
    pids: [26],
    sigil: targaryenSigil,
  },
  {
    id: 35,
    name: "Alyssa Targaryen",
    gender: "female",
    dragon: "Meleys",
    culture: "Valyrian",
    Aliases: [],
    Born: "In 60 AC",
    Died: "In 84 AC",
    fid: 17,
    mid: 18,
    pids: [],
    sigil: targaryenSigil,
  },
  {
    id: 28,
    name: "Maegelle Targaryen",
    gender: "female",
    dragon: "",
    culture: "Valyrian",
    Aliases: [],
    Born: "62 AC",
    Died: "90 AC",
    fid: 17,
    mid: 18,
    pids: [],
    sigil: targaryenSigil,
  },
  {
    id: 29,
    name: "Vaegon Targaryen",
    gender: "male",
    dragon: "",
    culture: "Valyrian",
    Aliases: ["Vaegon the Dragonless"],
    Born: "63 AC",
    Died: "101 AC",
    fid: 17,
    mid: 18,
    pids: [],
    sigil: targaryenSigil,
  },
  {
    id: 30,
    name: "Daella Targaryen",
    gender: "female",
    dragon: "",
    culture: "Valyrian",
    Aliases: [],
    Born: "64 AC",
    Died: "82 AC",
    fid: 17,
    mid: 18,
    pids: [36],
    sigil: targaryenSigil,
  },
  {
    id: 31,
    name: "Saera Targaryen",
    gender: "female",
    dragon: "",
    culture: "Valyrian",
    Aliases: [],
    Born: "67 AC",
    Died: "101 AC",
    fid: 17,
    mid: 18,
    pids: [],
    sigil: targaryenSigil,
  },
  {
    id: 32,
    name: "Viserra Targaryen",
    gender: "female",
    dragon: "",
    culture: "Valyrian",
    Aliases: [],
    Born: "71 AC",
    Died: "87 AC",
    fid: 17,
    mid: 18,
    pids: [],
    sigil: targaryenSigil,
  },
  {
    id: 33,
    name: "Gaemon Targaryen",
    gender: "male",
    dragon: "",
    culture: "Valyrian",
    Aliases: [],
    Born: "73 AC",
    Died: "74 AC",
    fid: 17,
    mid: 18,
    pids: [],
    sigil: targaryenSigil,
  },
  {
    id: 33,
    name: "Valerion Targaryen",
    gender: "male",
    dragon: "",
    culture: "Valyrian",
    Aliases: [],
    Born: "77 AC",
    Died: "78 AC",
    fid: 17,
    mid: 18,
    pids: [],
    sigil: targaryenSigil,
  },
  {
    id: 34,
    name: "Gael Targaryen",
    gender: "female",
    dragon: "",
    culture: "Valyrian",
    Aliases: ["The Winter Child"],
    Born: "90 AC",
    Died: "99 AC",
    fid: 17,
    mid: 18,
    pids: [],
    sigil: targaryenSigil,
  },
  {
    id: 36,
    name: "Rodrik Arryn",
    gender: "male",
    dragon: "",
    culture: "Valemen",
    Aliases: [],
    Born: "44 AC",
    Died: "82-97 AC",
    fid: null,
    mid: null,
    pids: [30],
    sigil: arrynSigil,
  },
  {
    id: 37,
    name: "Jocelyn Baratheon",
    gender: "female",
    dragon: "",
    culture: "Stormlander",
    Aliases: [],
    Born: "54 AC",
    Died: "92-129 AC",
    fid: null,
    mid: null,
    pids: [25],
    sigil: baratheonSigil,
  },
  {
    id: 38,
    name: "Jocelyn Baratheon",
    gender: "female",
    dragon: "",
    culture: "Stormlander",
    Aliases: [],
    Born: "54 AC",
    Died: "92-129 AC",
    fid: 12,
    mid: 11,
    pids: [],
    sigil: baratheonSigil,
  },
  {
    id: 39,
    name: "Boremund Baratheon",
    gender: "male",
    dragon: "",
    culture: "Stormlander",
    Aliases: [],
    Born: "52 AC",
    Died: "101-129 AC",
    fid: 12,
    mid: 11,
    pids: [],
    sigil: baratheonSigil,
  },
];
