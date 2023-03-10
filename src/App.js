import React from 'react';
import Element from "./Element"
function App() {
	return (
        table.map(name => {
			if (name !== "") {
				var obj = {
					abreviation:name,
					atomicNumber:elements[name][0],
					name:elements[name][1],
					weight:elements[name][2],
					class:elements[name][3]
				}
				return <Element key={obj.atomicNumber} json={obj}/>;
			} else {
				return ( <div></div> )
			}
        })
	);
}
export default App
const elements = {
    "H":  [1  ,"Hydrogen"     ,  "1.008","Rnm"],
    "He": [2  ,"Helium"       ,  "4.003","Ng" ],
    "Li": [3  ,"Lithium"      ,  "6.941","Am" ],
    "Be": [4  ,"Beryllium"    ,  "9.012","Aem"],
    "B":  [5  ,"Boron"        , "10.811","Ml" ],
    "C":  [6  ,"Carbon"       , "12.011","Rnm"],
    "N":  [7  ,"Nitrogen"     , "14.007","Rnm"],
    "O":  [8  ,"Oxygen"       , "15.999","Rnm"],
    "F":  [9  ,"Florine"      , "18.998","Rnm"],
    "Ne": [10 ,"Neon"         , "20.18" ,"Ng" ],
    "Na": [11 ,"Sodium"       , "22.99" ,"Am" ],
    "Mg": [12 ,"Magnesium"    , "24.305","Aem"],
    "Al": [13 ,"Aluminum"     , "26.982","Ptm"],
    "Si": [14 ,"Silicon"      , "28.086","Ml" ],
    "P":  [15 ,"Phosphorus"   , "30.974","Rnm"],
    "S":  [16 ,"Sulfur"       , "32.066","Rnm"],
    "Cl": [17 ,"Clorine"      , "35.453","Rnm"],
    "Ar": [18 ,"Argon"        , "39.948","Ng" ],
    "K":  [19 ,"Potassium"    , "39.098","Am" ],
    "Ca": [20 ,"Calcium"      , "40.078","Aem"],
    "Sc": [21 ,"Scandium"     , "44.956","Tm" ],
    "Ti": [22 ,"Titanium"     , "47.867","Tm" ],
    "V":  [23 ,"Vanadium"     , "50.942","Tm" ],
    "Cr": [24 ,"Chromium"     , "51.996","Tm" ],
    "Mn": [25 ,"Manganese"    , "54.938","Tm" ],
    "Fe": [26 ,"Iron"         , "55.845","Tm" ],
    "Co": [27 ,"Cobalt"       , "58.933","Tm" ],
    "Ni": [28 ,"Nickel"       , "58.693","Tm" ],
    "Cu": [29 ,"Copper"       , "63.546","Tm" ],
    "Zn": [30 ,"Zinc"         , "65.38" ,"Tm" ],
    "Ga": [31 ,"Gallium"      , "69.723","Ptm"],
    "Ge": [32 ,"Germanium"    , "72.631","Ml" ],
    "As": [33 ,"Arsenic"      , "74.922","Ml" ],
    "Se": [34 ,"Selenium"     , "78.972","Rnm"],
    "Br": [35 ,"Bromine"      , "79.904","Rnm"],
    "Kr": [36 ,"Krypton"      , "84.798","Ng" ],
    "Rb": [37 ,"Rubidium"     , "85.468","Am" ],
    "Sr": [38 ,"Strontium"    , "87.62" ,"Aem"],
    "Y":  [39 ,"Yttrium"      , "88.906","Tm" ],
    "Zr": [40 ,"Zirconium"    , "91.224","Tm" ],
    "Nb": [41 ,"Niobium"      , "92.906","Tm" ],
    "Mo": [42 ,"Molydbenum"   , "95.95" ,"Tm" ],
    "Tc": [43 ,"Technetium"   , "98.907","Tm" ],
    "Ru": [44 ,"Ruthenium"    ,"101.07" ,"Tm" ],
    "Rh": [45 ,"Rhodium"      ,"102.906","Tm" ],
    "Pd": [46 ,"Palladium"    ,"106.43" ,"Tm" ],
    "Ag": [47 ,"Silver"       ,"107.868","Tm" ],
    "Cd": [48 ,"Cadmium"      ,"112.411","Tm" ],
    "In": [49 ,"Indium"       ,"114.818","Ptm"],
    "Sn": [50 ,"Tin"          ,"118.711","Ptm"],
    "Sb": [51 ,"Antimony"     ,"121.76" ,"Ml" ],
    "Te": [52 ,"Tellurium"    ,"127.7"  ,"Ml" ],
    "I":  [53 ,"Iodine"       ,"126.904","Rnm"],
    "Xe": [54 ,"Xenon"        ,"131.294","Ng" ],
    "Cs": [55 ,"Cesium"       ,"132.905","Am" ],
    "Ba": [56 ,"Barium"       ,"137.328","Aem"],
    "La": [57 ,"Lanthanum"    ,"138.905","Ln" ],
    "Ce": [58 ,"Cerium"       ,"140.116","Ln" ],
    "Pr": [59 ,"Praseodymium" ,"140.908","Ln" ],
    "Nd": [60 ,"Neodymium"    ,"144.242","Ln" ],
    "Pm": [61 ,"Promethium"   ,"144.913","Ln" ],
    "Sm": [62 ,"Samarium"     ,"150.36" ,"Ln" ],
    "Eu": [63 ,"Europium"     ,"151.964","Ln" ],
    "Gd": [64 ,"Gadolinium"   ,"157.25" ,"Ln" ],
    "Tb": [65 ,"Terbium"      ,"158.925","Ln" ],
    "Dy": [66 ,"Dysprosium"   ,"162.5"  ,"Ln" ],
    "Ho": [67 ,"Holomium"     ,"164.93" ,"Ln" ],
    "Er": [68 ,"Erbium"       ,"167.267","Ln" ],
    "Tm": [69 ,"Thulium"      ,"168.934","Ln" ],
    "Yb": [70 ,"Ytterbium"    ,"173.055","Ln" ],
    "Lu": [71 ,"Lutetium"     ,"174.967","Ln" ],
    "Hf": [72 ,"Hafnium"      ,"178.49" ,"Tm" ],
    "Ta": [73 ,"Tantalum"     ,"180.948","Tm" ],
    "W":  [74 ,"Tungsten"     ,"183.84" ,"Tm" ],
    "Re": [75 ,"Rhenium"      ,"186.207","Tm" ],
    "Os": [76 ,"Osmium"       ,"190.23" ,"Tm" ],
    "Ir": [77 ,"Iridium"      ,"192.217","Tm" ],
    "Pt": [78 ,"Platinum"     ,"195.085","Tm" ],
    "Au": [79 ,"Gold"         ,"196.967","Tm" ],
    "Hg": [80 ,"Mercury"      ,"200.592","Tm" ],
    "Tl": [81 ,"Thallium"     ,"204.383","Ptm"],
    "Pb": [82 ,"Lead"         ,"207.2"  ,"Ptm"],
    "Bi": [83 ,"Bismuth"      ,"208.98" ,"Ptm"],
    "Po": [84 ,"Polonium"     ,"208.982","Ptm"],
    "At": [85 ,"Astatine"     ,"209.987","Ml" ],
    "Rn": [86 ,"Radon"        ,"222.018","Ng" ],
    "Fr": [87 ,"Francium"     ,"223.02" ,"Am" ],
    "Ra": [88 ,"Radium"       ,"226.025","Aem"],
    "Ac": [89 ,"Actinium"     ,"227.028","An" ],
    "Th": [90 ,"Thorium"      ,"232.038","An" ],
    "Pa": [91 ,"Protactinium" ,"231.036","An" ],
    "U":  [92 ,"Uranium"      ,"238.029","An" ],
    "Np": [93 ,"Neptunium"    ,"237.048","An" ],
    "Pu": [94 ,"Plutonium"    ,"244.064","An" ],
    "Am": [95 ,"Americium"    ,"243.061","An" ],
    "Cm": [96 ,"Curium"       ,"247.07" ,"An" ],
    "Bk": [97 ,"Berkelium"    ,"247.07" ,"An" ],
    "Cf": [98 ,"Californium"  ,"251.08" ,"An" ],
    "Es": [99 ,"Einsteinium"  ,"254"    ,"An" ],
    "Fm": [100,"Fermium"      ,"257.095","An" ],
    "Md": [101,"Mendelevium"  ,"258.1"  ,"An" ],
    "No": [102,"Nobelium"     ,"259.101","An" ],
    "Lr": [103,"Lawrencium"   ,"262"    ,"An" ],
    "Rf": [104,"Rutherfordium","261"    ,"Tm" ],
    "Db": [105,"Dubnium"      ,"262"    ,"Tm" ],
    "Sg": [106,"Seabotgium"   ,"266"    ,"Tm" ],
    "Bh": [107,"Bohrium"      ,"264"    ,"Tm" ],
    "Hs": [108,"Hassium"      ,"269"    ,"Tm" ],
    "Mt": [109,"Meitnerium"   ,"268"    ,"Ukn"],
    "Ds": [110,"Darmstadtium" ,"269"    ,"Ukn"],
    "Rg": [111,"Roentgenium"  ,"272"    ,"Ukn"],
    "Cn": [112,"Copernicium"  ,"277"    ,"Ukn"],
    "Nh": [113,"Nihonium"     ,"286"    ,"Ukn"],
    "Fl": [114,"Flerovium"    ,"289"    ,"Ukn"],
    "Mc": [115,"Moscovium"    ,"290"    ,"Ukn"],
    "Lv": [116,"Livermonium"  ,"298"    ,"Ukn"],
    "Ts": [117,"Tennessine"   ,"294"    ,"Ukn"],
    "Og": [118,"Oganesson"    ,"294"    ,"Ukn"],
};
var table = [
    "H",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "He",
    "Li",
    "Be",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "B",
    "C",
    "N",
    "O",
    "F",
    "Ne",
    "Na",
    "Mg",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Al",
    "Si",
    "P",
    "S",
    "Cl",
    "Ar",
    "K",
    "Ca",
    "Sc",
    "Ti",
    "V",
    "Cr",
    "Mn",
    "Fe",
    "Co",
    "Ni",
    "Cu",
    "Zn",
    "Ga",
    "Ge",
    "As",
    "Se",
    "Br",
    "Kr",
    "Rb",
    "Sr",
    "Y",
    "Zr",
    "Nb",
    "Mo",
    "Tc",
    "Ru",
    "Rh",
    "Pd",
    "Ag",
    "Cd",
    "In",
    "Sn",
    "Sb",
    "Te",
    "I",
    "Xe",
    "Cs",
    "Ba",
    "",
    "Hf",
    "Ta",
    "W",
    "Re",
    "Os",
    "Ir",
    "Pt",
    "Au",
    "Hg",
    "Tl",
    "Pb",
    "Bi",
    "Po",
    "At",
    "Rn",
    "Fr",
    "Ra",
    "",
    "Rf",
    "Db",
    "Sg",
    "Bh",
    "Hs",
    "Mt",
    "Ds",
    "Rg",
    "Cn",
    "Nh",
    "Fl",
    "Mc",
    "Lv",
    "Ts",
    "Og",
	"",
	"",
	"",
    "La",
    "Ce",
    "Pr",
    "Nd",
    "Pm",
    "Sm",
    "Eu",
    "Gd",
    "Tb",
    "Dy",
    "Ho",
    "Er",
    "Tm",
    "Yb",
    "Lu",
	"",
	"",
	"",
	"Ac",
	"Th",
	"Pa",
	"U",
	"Np",
	"Pu",
	"Am",
	"Cm",
	"Bk",
	"Cf",
	"Es",
	"Fm",
	"Md",
	"No",
	"Lr"
];