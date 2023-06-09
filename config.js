const TELEGRAM_CHAT_BOT_TOKEN = 'telegramChatBotToken';
const NATIONALITY_ID = 'nationalityId';
const NUMBER_OF_PERSONS = 'numberOfPersons';
const DO_YOU_LIVE_WITH_YOUR_FAMILY = 'doYouLiveWithYourFamily';
const SPOUSE_NATIONALITY_ID = 'spouseNationalityId';
// in seconds
const DEFAULT_WAITING_TIME = 'defaultWaitingTime';

exports.configs = {
    TELEGRAM_CHAT_BOT_TOKEN,
    NATIONALITY_ID,
    NUMBER_OF_PERSONS,
    DO_YOU_LIVE_WITH_YOUR_FAMILY,
    SPOUSE_NATIONALITY_ID,
    DEFAULT_WAITING_TIME,
}

const configValues = {
    [TELEGRAM_CHAT_BOT_TOKEN]: null,
    [NATIONALITY_ID]: null,
    [NUMBER_OF_PERSONS]: null,
    [DO_YOU_LIVE_WITH_YOUR_FAMILY]: null,
    [SPOUSE_NATIONALITY_ID]: null,
    [DEFAULT_WAITING_TIME]: 2
}

exports.getConfig = (key) => configValues[key]

exports.setConfig = (key, value) => configValues[key] = value

exports.countries = {
    "*stateless": "997",
    "*unresolved nationality (Palestinians and Kurds from Lebanon)": "998",
    "*unresolved nationality / Palestinians from Syria (Family name  A – E)": "999",
    "*unresolved nationality / Palestinians from Syria (Family name  F – Z)": "996",
    "Afghanistan": "423",
    "African States, Other": "299",
    "Albania": "121",
    "Algeria": "221",
    "American States, other": "399",
    "Andorra": "123",
    "Angola": "223",
    "Antigua and Barbuda": "320",
    "Argentina": "323",
    "Armenia": "422",
    "Asian States, other": "499",
    "Australia": "523",
    "Australian States, other": "599",
    "Azerbaijan": "425",
    "Bahamas": "324",
    "Bahrain": "424",
    "Bangladesh": "460",
    "Barbados": "322",
    "Belarus": "169",
    "Belize": "330",
    "Benin": "229",
    "Bhutan": "426",
    "Bolivia": "326",
    "Bosnia and Herzegovina": "122",
    "Botswana": "227",
    "Brazil": "327",
    "British Overseas Territory in Africa": "295",
    "British Overseas Territory in America": "395",
    "British Overseas Territory in Asia": "495",
    "British Overseas Territory in Australia": "595",
    "British Overseas Territory in Europe": "195",
    "Brunei Darussalam": "429",
    "Burkina Faso": "258",
    "Burundi": "291",
    "Cambodia": "446",
    "Cameroons": "262",
    "Canada": "348",
    "Cape Verde": "242",
    "Central African Republic": "289",
    "Chad": "284",
    "Chile": "332",
    "China": "479",
    "Colombia": "349",
    "Comoros": "244",
    "Congo, Democratic Republic of": "246",
    "Congo, Republic": "245",
    "Cook Islands": "527",
    "Costa Rica": "334",
    "Côte d´Ivoire": "231",
    "Cuba": "351",
    "Djibouti": "230",
    "Dominica": "333",
    "Dominican Republic": "335",
    "Ecuador": "336",
    "Egypt": "287",
    "El Salvador": "337",
    "Equatorial Guinea": "274",
    "Eritrea": "224",
    "Eswatini": "281",
    "Ethiopia": "225",
    "European States, other": "199",
    "Fiji": "526",
    "Gabon": "236",
    "Gambia": "237",
    "Georgia": "430",
    "Ghana": "238",
    "Great Britain and Northern Ireland": "168",
    "Grenada": "340",
    "Guatemala": "345",
    "Guinea": "261",
    "Guinea-Bissau": "259",
    "Guyana": "328",
    "Haiti": "346",
    "Honduras": "347",
    "India": "436",
    "Indonesia": "437",
    "Iran, Islamic Republic": "439",
    "Iraq": "438",
    "Israel": "441",
    "Jamaica": "355",
    "Japan": "442",
    "Jordan": "445",
    "Kazakhstan": "444",
    "Kenya": "243",
    "Kiribati": "530",
    "Korea, Democratic People`s Republic ": "434",
    "Korean Republic ": "467",
    "Kosovo": "150",
    "Krygyzstan": "450",
    "Kuwait": "448",
    "Laos, Democratic People`s Republic": "449",
    "Lebanon": "451",
    "Lesotho": "226",
    "Liberia": "247",
    "Libya": "248",
    "Madagascar": "249",
    "Malawi": "256",
    "Malaysia": "482",
    "Maldives": "454",
    "Mali": "251",
    "Marshall Islands": "544",
    "Mauritania": "239",
    "Mauritius": "253",
    "Mexico": "353",
    "Micronesia, Federal States": "545",
    "Moldavia, Republic of": "146",
    "Monaco": "147",
    "Mongolia": "457",
    "Montenegro": "140",
    "Morocco": "252",
    "Mozambique": "254",
    "Myanmar": "427",
    "Namibia": "267",
    "Nauru": "531",
    "Nepal": "458",
    "New Zealand": "536",
    "Nicaragua": "354",
    "Niger": "255",
    "Nigeria": "232",
    "Niue": "533",
    "Nortern Mariana Islands": "525",
    "North Macedonia": "144",
    "Oman": "456",
    "Pakistan": "461",
    "Palau": "537",
    "Panama": "357",
    "Papua New Guinea": "538",
    "Paraguay": "359",
    "Peru": "361",
    "Philippines": "462",
    "Qatar": "447",
    "Russian Federation": "160",
    "Rwanda": "265",
    "Samoa": "543",
    "San Marino": "156",
    "Sao Tome and Principe": "268",
    "Saudi Arabia": "472",
    "Senegal": "269",
    "Serbia": "170",
    "Seychelles": "271",
    "Sierra Leone": "272",
    "Singapore": "474",
    "Solomon Islands": "524",
    "Somalia": "273",
    "South Africa": "263",
    "Southern Sudan": "278",
    "Sri Lanka": "431",
    "St. Kitts and Nevis": "370",
    "St. Lucia": "366",
    "St. Vincent and the Grenadines": "369",
    "Sudan": "276",
    "Suriname": "364",
    "Switzerland": "158",
    "Syria (family name A - E)": "475",
    "Syria (family name F - Z)": "473",
    "Taiwan": "465",
    "Tajikistan": "470",
    "Tanzania, United Republic of": "282",
    "Thailand": "476",
    "Timor-Leste": "483",
    "Togo": "283",
    "Tonga": "541",
    "Trinidad and Tobago": "371",
    "Tunisia": "285",
    "Turkey": "163",
    "Turkmenistan": "471",
    "Tuvalu": "540",
    "Uganda": "286",
    "Ukraine": "166",
    "United Arab Emirates": "469",
    "United States of America": "368",
    "Uruguay": "365",
    "Uzbekistan": "477",
    "Vanuatu": "532",
    "Vatican City": "167",
    "Venezuela": "367",
    "Vietnam": "432",
    "Yemen": "421",
    "Zambia": "257",
    "Zimbabwe": "233"
}
