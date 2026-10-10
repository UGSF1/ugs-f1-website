// ==========================================
// БАЗА ДАНИХ (НОВИНИ, КОМАНДИ, ПІЛОТИ, КАЛЕНДАР, HALL OF FAME, DRIVER MARKET)
// ==========================================

// ------------------------------------------
// НОВИНИ
// Нові новини додавайте НА ПОЧАТОК списку (перша = велика зліва).
// Фото кладіть у assets/images/news/
//
// Поля новини:
//   id       - унікальний, латиницею, без пробілів і лапок
//   tag      - мітка над заголовком (RACE RECAP, INSIGHT, ...)
//   title    - заголовок
//   summary  - короткий опис для картки
//   date     - дата (текстом)
//   author   - автор (необов'язково)
//   image    - головне фото (картка і верх статті)
//   content  - текст статті, масив блоків:
//       "Текст"                              -> абзац
//       { h: "Підзаголовок" }                -> підзаголовок
//       { img: "шлях", caption: "Підпис" }   -> фото з підписом
//       { gallery: ["a.jpg", "b.jpg"] }      -> сітка фото
//       { quote: "Цитата", by: "Автор" }     -> цитата
//       { youtube: "ID_відео" }              -> відео YouTube
// ------------------------------------------
const newsData = [
    {
        id: "azerbaijan-winners-losers",
        tag: "LATEST NEWS",
        title: "PRE-SEASON RACE: НОВИЙ СЕЗОН — НОВІ ВИКЛИКИ",
        summary: "Pre-Season Race Season 2: Spa-Francorchamps",
        date: "6 жовтня 2026",
        author: "UGS Media",
        image: "assets/images/news/preseasonrace.png",
        content: [
            "16 жовтня 2026 року на легендарній трасі Spa-Francorchamps у Бельгії відбудеться Pre-Season Race напередодні другого сезону чемпіонату UGS Formula Pro. На старт вийдуть оновлені склади команд, готові продемонструвати свою швидкість, амбіції та бойовий настрій перед початком нового сезону. Особливу увагу привернуть два нові колективи — Audi Revolut та Cadillac, які приєднаються до боротьби на стартовій решітці. Передсезонна гонка стане чудовою нагодою для пілотів випробувати свої сили, адаптуватися до нових болідів, складів і оцінити конкурентоспроможність суперників. Хоча головні очки сезону ще попереду, боротьба на Spa-Francorchamps обіцяє бути напруженою вже з перших кіл.Новий сезон наближається. Нові команди готові до боротьби. UGS Formula Pro виходить на новий рівень!.",
            
        ]
    },
    {
        id: "rating-statement",
        tag: "INNOVATION",
        title: "DRIVER RATING — НОВА СИСТЕМА РЕЙТИНГУ ПІЛОТІВ UGS FORMULA PRO",
        summary: "Оновлення",
        date: "6 жовтня 2026",
        image: "assets/images/news/rating.png",
        content: [
            "UGS Formula Pro продовжує розвиватися! У чемпіонаті запроваджено нововведення — єдиний загальний рейтинг пілотів Driver Rating, який дозволить оцінювати результати виступів учасників на основі їхніх досягнень протягом усіх сезонів. Рейтинг відображатиме не лише кількість набраних очок, а й перемоги, подіуми, поул-позиції, найшвидші кола, сходи з дистанції та штрафні бали. Таким чином, кожен результат матиме значення, а стабільність і успішні виступи допомагатимуть пілотам підніматися в загальному рейтингу.",
        { h: "Як формується рейтинг?" },
        "Система використовує спеціальну формулу, яка враховує досягнення пілота та кількість проведених стартів. За кожне очко в чемпіонаті нараховується +1, перемога приносить додаткові +6, подіум — +4, поул-позиція — +4, а найшвидше коло — +3. Водночас DNF приносить −5 балів, а кожен штрафний бал (PP) зменшує оцінку на 1. Початкове значення рейтингу становить 1000. Формула також враховує кількість стартів, щоб кілька вдалих гонок не дозволяли одразу випередити пілотів, які демонстрували стабільні результати протягом сезону.",
        { h: "Оновлення в режимі онлайн" },
        "Driver Rating оновлюватиметься автоматично після кожної сесії, відображаючи актуальне становище пілотів. У таблиці можна буде стежити за рейтингом, змінами позицій, кількістю стартів, перемог, подіумів, поулів, DNF та штрафних балів. Для пілотів, які провели менше трьох стартів, передбачено позначку PROV — їхній рейтинг вважається попереднім. Учасники без жодного старту розміщуються внизу таблиці з базовим рейтингом 1000. Показник тренду демонструватиме зміни позиції та рейтингу після останнього етапу. Нова система покликана зробити чемпіонат ще цікавішим, додати конкуренції та дати змогу оцінювати досягнення пілотів не лише в межах одного сезону, а й за всю історію їхніх виступів у UGS Formula Pro."
        ]
    },
    {
        id: "teams-present",
        tag: "ANNOUNCEMENT",
        title: "UGS Formula Pro Team Announcement Season 2",
        summary: "Відео-презентація команд UGS Formula Pro Season 2",
        date: "6 жовтня 2026",
        image: "assets/images/news/teams.png",
        content: [
            { h: "Новий сезон — нові склади, нові виклики та нова боротьба за чемпіонство!" },
            "UGS Formula Pro офіційно представила склади основних пілотів і команд другого сезону чемпіонату. На стартову решітку вийдуть 11 команд, кожна з яких розпочне новий сезон із власними амбіціями та прагненням до найвищих результатів. Особливу увагу привертають два нові колективи — Audi Revolut та Cadillac, які доповнять стартову решітку та приєднаються до боротьби з іншими командами чемпіонату. Оновлені склади пілотів обіцяють нові протистояння, непередбачувані результати та напружену боротьбу як в особистому заліку, так і в Кубку конструкторів. Кожна команда матиме можливість довести свою конкурентоспроможність, а кожен пілот — заявити про себе протягом сезону. Попереду — 16 етапів чемпіонату, включно зі спринтерськими вікендами, де на учасників чекатимуть нові випробування та важливі залікові очки",
            { youtube: "N0PGpFlM5_Y" }
        ]
    }
];

// ------------------------------------------
// ЛОГОТИПИ КОМАНД
// Основна папка: assets/images/team-icons/
// Запасна папка (якщо файлу немає в основній): assets/teams/
// ------------------------------------------
const TEAM_ICON_DIR = 'assets/images/team-icons/';
const TEAM_ICON_FALLBACK_DIR = 'assets/teams/';

// Підбирає файл логотипа за назвою команди (працює з усіма варіантами назв)
function teamLogoFile(name) {
    const n = String(name || '').toLowerCase();
    if (n.includes('racing bulls') || n.includes('visa cash') || n === 'rb') return 'rb.png';
    if (n.includes('red bull')) return 'redbull.png';
    if (n.includes('ferrari')) return 'ferrari.png';
    if (n.includes('mclaren')) return 'mclaren.png';
    if (n.includes('mercedes')) return 'mercedes.png';
    if (n.includes('aston')) return 'astonmartin.png';
    if (n.includes('alpine')) return 'alpine.png';
    if (n.includes('haas')) return 'haas.png';
    if (n.includes('williams')) return 'williams.png';
    if (n.includes('sauber')) return 'sauber.png';
    if (n.includes('audi')) return 'audi.png';
    if (n.includes('cadillac')) return 'cadillac.png';
    if (n.includes('reserve')) return 'reserve.png';
    return null;
}

// size: 'lg' для великого логотипа (у заголовках), інакше маленький
function teamWithLogo(name, size) {
    const f = teamLogoFile(name);
    const cls = size === 'lg' ? 'team-logo-lg' : 'team-logo-sm';
    const img = f
        ? `<img class="${cls}" src="${TEAM_ICON_DIR}${f}" alt="" onerror="if(!this.dataset.f){this.dataset.f=1;this.src='${TEAM_ICON_FALLBACK_DIR}${f}';}else{this.style.display='none';}">`
        : '';
    return `<span class="team-with-logo">${img}${name}</span>`;
}

// ------------------------------------------
// ПРАПОРИ ДЛЯ TRACK RECORDS
// Папка з прапорами: assets/images/flags/
// Назва Гран Прі (як у lapRecordsData) -> файл прапора.
// Якщо у вас файл називається інакше, просто виправте тут назву.
// ------------------------------------------
const FLAG_DIR = 'assets/images/flags/';

const TRACK_FLAGS = {
    "Bahrain GP": "bahrain.png",
    "Saudi Arabian GP": "sa.png",
    "Chinese GP": "china.png",
    "Australian GP": "australia.png",
    "Japanese GP": "japan.png",
    "Monaco GP": "monaco.png",
    "Miami GP": "usa.png",
    "Las Vegas GP": "usa.png",
    "Canadian GP": "canada.png",
    "Italian GP": "italy.png",
    "Austrian GP": "austria.png",
    "Belgian GP": "belgium.png",
    "Hungarian GP": "hungary.png",
    "Dutch GP": "netherland.png",
    "Spanish GP": "spain.png",
    "British GP": "gb.png",
    "Azerbaijan GP": "azerbaijan.png",
    "Brazilian GP": "brazil.png",
    "São Paulo GP": "brazil.png",
    "Qatar GP": "qatar.png",
    "Abu Dhabi GP": "uae.png"
};

// Повертає <img> прапора для Гран Прі (або порожній рядок, якщо немає)
function trackFlagHTML(gp) {
    const f = TRACK_FLAGS[gp];
    if (!f) return '';
    return `<img class="track-flag" src="${FLAG_DIR}${f}" alt="" onerror="this.style.display='none'">`;
}

const driverMarketData = {
    transfers: [
        { driverName: "Yulian Hulyk", fromTeam: "Aston Martin", toTeam: "Ferrari", status: "CONFIRMED", details: "Пілота підписано на 1 сезон в якості основного пілота." },
        { driverName: "Oleh Liashko", fromTeam: "McLaren", toTeam: "Ferrari", status: "CONFIRMED", details: "Пілота підписано на 1 сезон в якості основного пілота." },
        { driverName: "Yaroslav Pankratov", fromTeam: "Alpine", toTeam: "Red Bull Racing", status: "CONFIRMED", details: "Пілота підписано на 1 сезон в якості основного пілота." },
        { driverName: "Yaroslav Loboda", fromTeam: "Alpine", toTeam: "Red Bull Racing", status: "CONFIRMED", details: "Пілота підписано на 1 сезон в якості основного пілота." },
        { driverName: "Volodymyr Shakula", fromTeam: "Kick Sauber", toTeam: "McLaren", status: "CONFIRMED", details: "Пілота підписано на 1 сезон в якості основного пілота." },
        { driverName: "Yevhenii Panchenko", fromTeam: "Mercedes-AMG Petronas", toTeam: "McLaren", status: "CONFIRMED", details: "Пілота підписано на 1 сезон в якості основного пілота." },
        { driverName: "Bohdan Lychak", fromTeam: "Reserve", toTeam: "Mercedes-AMG Petronas", status: "CONFIRMED", details: "Пілота підписано на 1 сезон в якості основного пілота." },
        { driverName: "Rostyslav Pyliak", fromTeam: "Ferrari", toTeam: "Williams", status: "CONFIRMED", details: "Пілота підписано на 1 сезон в якості основного пілота." },
        { driverName: "Maksym Mykhlyk", fromTeam: "Ferrari", toTeam: "Williams", status: "CONFIRMED", details: "Пілота підписано на 1 сезон в якості основного пілота." },
        { driverName: "Yaroslav Murchik", fromTeam: "Red Bull Racing", toTeam: "Visa Cash App RB", status: "CONFIRMED", details: "Пілота підписано на 1 сезон в якості основного пілота." },
        { driverName: "Ivan Kobryn", fromTeam: "McLaren", toTeam: "Visa Cash App RB", status: "CONFIRMED", details: "Пілота підписано на 1 сезон в якості основного пілота." },
        { driverName: "Volodymyr Mykhalyuk", fromTeam: "Red Bull Racing", toTeam: "Cadillac", status: "CONFIRMED", details: "Пілота підписано на 1 сезон в якості основного пілота." },
        { driverName: "Dmytro Khomka", fromTeam: "Reserve", toTeam: "Cadillac", status: "CONFIRMED", details: "Пілота підписано на 1 сезон в якості основного пілота." },
        { driverName: "Stanislav Krichfalovskyi", fromTeam: "Kick Sauber", toTeam: "Audi Revolut", status: "CONFIRMED", details: "Пілота підписано на 1 сезон в якості основного пілота." },
        { driverName: "Dmytro Sholopko", fromTeam: "Visa Cash App RB", toTeam: "Audi Revolut", status: "CONFIRMED", details: "Пілота підписано на 1 сезон в якості основного пілота." },
        { driverName: "Nazarii Petriv", fromTeam: "Visa Cash App RB", toTeam: "Aston Martin Aramco", status: "CONFIRMED", details: "Пілота підписано на 1 сезон в якості основного пілота." },
        { driverName: "Fedir Davydov", fromTeam: "Reserve", toTeam: "Aston Martin Aramco", status: "CONFIRMED", details: "Пілота підписано на 1 сезон в якості основного пілота." },
        { driverName: "Artemii Dolhanov", fromTeam: "Reserve", toTeam: "Alpine", status: "CONFIRMED", details: "Пілота підписано на 1 сезон в якості основного пілота." },
        { driverName: "Olexandr Pantak", fromTeam: "Reserve", toTeam: "Alpine", status: "CONFIRMED", details: "Пілота підписано на 1 сезон в якості основного пілота." }
    ],
    freeAgents: [
        {
            driverName: "Vladyslav Tereshchenko",
            experience: "від 8 етапів",
            status: "AVAILABLE",
            details: "Вільний агент, відкритий до пропозицій від команд UGS Formula Pro."
        },
        {
            driverName: "Denys Ilchuk",
            experience: "від 8 етапів",
            status: "AVAILABLE",
            details: "Вільний агент, відкритий до пропозицій від команд UGS Formula Pro. Остання участь - спринт Китаю, 7 місце "
        },
        {
            driverName: "Denys Zabarnyi",
            experience: "від 8 етапів",
            status: "AVAILABLE",
            details: "Вільний агент, відкритий до пропозицій від команд UGS Formula Pro. Остання участь -Гран Прі Австралії, Pole Position, 4 місце загального заліку"
        }
    ],
    rumours: [
        
    ]
};

const hallOfFameData = {
    drivers: [
        { season: "Season 1", name: "Yulian HULYK", team: "Aston Martin" }
    ],
    constructors: [
        { season: "Season 1", team: "Alpine", drivers: ["Yaroslav PANKRATOV", "Yaroslav LOBODA"] }
    ]
};

// ------------------------------------------
// КАЛЕНДАР
//   img         - фото етапу, наприклад "assets/images/tracks/bahrain.png"
//   status      - "Completed" робить етап пройденим (потрапляє в блок Previous)
//   meteoblue   - код місця з meteoblue (частина адреси після /week/),
//                 наприклад "manama_bahrain_290340". Показує погоду на
//                 картках Next і Upcoming.
//   meteoblueUrl- (необов'язково) повне посилання з налаштованого віджета,
//                 має пріоритет над meteoblue
//   weatherCity - (необов'язково) назва міста для пошуку на meteoblue,
//                 якщо код ще не вказано
//   year        - (необов'язково) рік етапу для Countdown, наприклад 2027.
//                 Якщо не вказано, рік рахується автоматично.
//   time        - (необов'язково) час старту кваліфікації, наприклад "19:30".
//                 За замовчуванням "20:00" (за київським часом).
//
// РЕЗУЛЬТАТИ (для Season 2 і далі, з них автоматично рахується Rating):
//   results: { "Bahrain GP": { quali: [...], sprint: [...], mainRace: [...] } }
//   Рядок гонки: { pos: 1, driverName: "Yulian Hulyk", teamName: "Ferrari",
//                  time: "1:31:44.742", pts: 25, fl: true, pp: 0 }
//   fl: true  - найшвидше коло, pp: 2 - штрафні бали (необов'язково)
//   Поул береться з quali (pos: 1).
// ------------------------------------------
const seasonsData = {
    "Season 1": {
        calendar: [
            { round: 1, gp: "Bahrain GP", circuit: "Bahrain International Circuit", date: "05-06 NOV", status: "upcoming", isSprint: false, flagImg: "assets/images/flags/bahrain.png", img: "assets/images/tracks/bahrain.png", meteoblue: "aş-şakhīr_бахрейн_290303", weatherCity: "Sakhir" },
            { round: 2, gp: "Saudi Arabian GP", circuit: "Jeddah Corniche Circuit", date: "12-13 NOV", status: "upcoming", isSprint: false, flagImg: "assets/images/flags/sa.png", img: "assets/images/tracks/sa.png", meteoblue: "джидда_саудівська-аравія_105343", weatherCity: "Jeddah" },
            { round: 3, gp: "Chinese GP", circuit: "Shanghai International Circuit", date: "19-20 NOV", status: "upcoming", isSprint: true, flagImg: "assets/images/flags/china.png", img: "assets/images/tracks/china.png", meteoblue: "шанхай_китай_1796236", weatherCity: "Shanghai" },
            { round: 4, gp: "Australian GP", circuit: "Albert Park Circuit", date: "26-27 NOV", status: "upcoming", isSprint: false, flagImg: "assets/images/flags/australia.png", img: "assets/images/tracks/australia.png", meteoblue: "мельбурн_австралія_2158177", weatherCity: "Melbourne" },
            { round: 5, gp: "Miami GP", circuit: "Miami International Autodrome", date: "03-04 DEC", status: "upcoming", isSprint: true, flagImg: "assets/images/flags/usa.png", img: "assets/images/tracks/miami.png", meteoblue: "маямі-ґарденс_сша_4164167", weatherCity: "Miami Gardens" },
            { round: 6, gp: "Canadian GP", circuit: "Circuit Gilles Villeneuve", date: "10-11 DEC", status: "upcoming", isSprint: true, flagImg: "assets/images/flags/canada.png", img: "assets/images/tracks/canada.png", meteoblue: "монреаль_канада_6077243", weatherCity: "Montreal" },
            { round: 7, gp: "Italian GP", circuit: "Autodromo Nazionale Monza", date: "17-18 DEC", status: "upcoming", isSprint: false, flagImg: "assets/images/flags/italy.png", img: "assets/images/tracks/italy.png", meteoblue: "monza_італія_3172629", weatherCity: "Monza" },
            { round: 8, gp: "Austrian GP", circuit: "Red Bull Ring", date: "24-25 DEC", status: "upcoming", isSprint: false, flagImg: "assets/images/flags/austria.png", img: "assets/images/tracks/austria.png", meteoblue: "spielberg_австрія_2764815", weatherCity: "Spielberg" },
            { round: 9, gp: "Belgian GP", circuit: "Circuit de Spa-Francorchamps", date: "14-15 JAN", status: "upcoming", isSprint: false, flagImg: "assets/images/flags/belgium.png", img: "assets/images/tracks/belgium.png", meteoblue: "льєж_бельгія_2792413", weatherCity: "Spa" },
            { round: 10, gp: "Hungarian GP", circuit: "Hungaroring", date: "21-22 JAN", status: "upcoming", isSprint: false, flagImg: "assets/images/flags/hungary.png", img: "assets/images/tracks/hungary.png", meteoblue: "mogyoród_угорщина_3047986", weatherCity: "Mogyorod" },
            { round: 11, gp: "Dutch GP", circuit: "Circuit Zandvoort", date: "28-29 JAN", status: "upcoming", isSprint: true, flagImg: "assets/images/flags/netherland.png", img: "assets/images/tracks/netherlands.png", meteoblue: "zandvoort_нідерланди_2744042", weatherCity: "Zandvoort" },
            { round: 12, gp: "Spanish GP", circuit: "Madring", date: "04-05 FEB", status: "upcoming", isSprint: false, flagImg: "assets/images/flags/spain.png", img: "assets/images/tracks/spain.png", meteoblue: "мадрид_іспанія_3117735", weatherCity: "Madrid" },
            { round: 13, gp: "British GP", circuit: "Silverstone Circuit", date: "11-12 FEB", status: "upcoming", isSprint: true, flagImg: "assets/images/flags/gb.png", img: "assets/images/tracks/uk.png", meteoblue: "сільверстоун_велика-британія_2637827", weatherCity: "Silverstone" },
            { round: 14, gp: "São Paulo GP", circuit: "Interlagos", date: "18-19 FEB", status: "upcoming", isSprint: false, flagImg: "assets/images/flags/brazil.png", img: "assets/images/tracks/brasil.png", meteoblue: "сан-паулу_бразилія_3448439", weatherCity: "Sao Paulo" },
            { round: 15, gp: "Las Vegas GP", circuit: "Las Vegas Strip Circuit", date: "25-26 FEB", status: "upcoming", isSprint: false, flagImg: "assets/images/flags/usa.png", img: "assets/images/tracks/las vegas.png", meteoblue: "лас-вегас_сша_5506956", weatherCity: "Las Vegas" },
            { round: 16, gp: "Abu Dhabi GP", circuit: "Yas Marina Circuit", date: "04-05 MAR", status: "upcoming", isSprint: false, flagImg: "assets/images/flags/uae.png", img: "assets/images/tracks/uae.png", meteoblue: "абу-дабі_обʼєднані-арабські-емірати_292968", weatherCity: "Abu Dhabi" }
        ],
        // Заповнюється автоматично файлом js/season1-adapter.js
        results: {},
        driversStandings: [],
        constructorsStandings: []
    },
    "Season 2": {
        calendar: [
            { round: 1, gp: "Bahrain GP", circuit: "Bahrain International Circuit", date: "15 MAR", status: "Upcoming", isSprint: false, flagImg: "assets/images/flags/bahrain.png" },
            { round: 2, gp: "Saudi Arabian GP", circuit: "Jeddah Corniche Circuit", date: "29 MAR", status: "Upcoming", isSprint: true, flagImg: "assets/images/flags/saudi_arabia.png" }
        ],
        results: {
            "Bahrain GP": { sprintQuali: [], sprint: [], quali: [], mainRace: [] }
        },
        driversStandings: [],
        constructorsStandings: []
    }
};

// ------------------------------------------
// ПІЛОТИ: структура статистики
// seasonStats: pos, pts, gpRaces, gpPts, gpWins, gpPodiums, gpPoles, gpTop10s,
//              fastestLaps, dnfs, pp, sprintRaces, sprintPts, sprintWins, sprintPodiums,
//              sprintPoles, sprintTop10s
// allTimeStats: gpEntered, pts, highestFinish, podiums, highestGrid, poles, titles, dnfs
//               (pp - необов'язково; якщо не вказано, рахується автоматично)
// Якщо якогось поля немає, на сайті буде 0 або "-".
// УВАГА: id кожного пілота має бути унікальним на весь файл.
// ------------------------------------------
const emptySeasonStats = () => ({ pos: 0, pts: 0, gpRaces: 0, gpPts: 0, gpWins: 0, gpPodiums: 0, gpPoles: 0, gpTop10s: 0, fastestLaps: 0, dnfs: 0, pp: 0, sprintRaces: 0, sprintPts: 0, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 0 });
const emptyTeamSeasonStats = () => ({ seasonLabel: "Season 2", ...emptySeasonStats(), pos: "0" });

const teamsData = {
    "redbull": {
        name: "Red Bull Racing",
        logoImg: "assets/images/teams/redbull_logo.png",
        carImg: "assets/images/teams/redbull_car.png",
        statsSeason: emptyTeamSeasonStats(),
        statsAllTime: { gpEntered: 15, pts: 112, highestFinish: "3 (x1)", podiums: 1, highestGrid: "1 (x1)", poles: 0, championships: 0 },
        drivers: [
            {
                id: "PAN", name: "Yaroslav Pankratov", num: 15, country: "UA", img: "assets/images/drivers/pankratov.png",
                seasonStats: emptySeasonStats(),
                allTimeStats: { gpEntered: 15, pts: 171, highestFinish: "1 (x2)", podiums: 11, highestGrid: "1 (x1)", poles: 1, titles: 0, dnfs: 3 }
            },
            {
                id: "LOB", name: "Yaroslav Loboda", num: 10, country: "UA", img: "assets/images/drivers/loboda.png",
                seasonStats: emptySeasonStats(),
                allTimeStats: { gpEntered: 15, pts: 167, highestFinish: "1", podiums: 8, highestGrid: "2 (x6)", poles: 0, titles: 0, dnfs: 3 }
            }
        ]
    },
    "ferrari": {
        name: "Scuderia Ferrari",
        logoImg: "assets/images/teams/ferrari_logo.png",
        carImg: "assets/images/teams/ferrari_car.png",
        statsSeason: emptyTeamSeasonStats(),
        statsAllTime: { gpEntered: 15, pts: 58, highestFinish: "5 (x3)", podiums: 0, highestGrid: "10 (x2)", poles: 0, championships: 0 },
        drivers: [
            {
                id: "HUL", name: "Yulian Hulyk", num: 85, country: "UA", img: "assets/images/drivers/hulyk.png",
                seasonStats: emptySeasonStats(),
                allTimeStats: { gpEntered: 12, pts: 200, highestFinish: "1 (x9)", podiums: 10, highestGrid: "1 (x12)", poles: 12, titles: 1, dnfs: 1 }
            },
            {
                id: "LIA", name: "Oleh Liashko", num: 99, country: "UA", img: "assets/images/drivers/liashko.png",
                seasonStats: emptySeasonStats(),
                allTimeStats: { gpEntered: 5, pts: 0, highestFinish: "-", podiums: 0, highestGrid: "-", poles: 0, titles: 0, dnfs: 5 }
            }
        ]
    },
    "mclaren": {
        name: "McLaren",
        logoImg: "assets/images/teams/mclaren_logo.png",
        carImg: "assets/images/teams/mclaren_car.png",
        statsSeason: emptyTeamSeasonStats(),
        statsAllTime: { gpEntered: 15, pts: 34, highestFinish: "1 (x1)", podiums: 1, highestGrid: "3 (x1)", poles: 0, championships: 0 },
        drivers: [
            {
                id: "SHA", name: "Volodymyr Shakula", num: 40, country: "UA", img: "assets/images/drivers/shakula.png",
                seasonStats: emptySeasonStats(),
                allTimeStats: { gpEntered: 15, pts: 142, highestFinish: "2 (x3)", podiums: 7, highestGrid: "4 (x2)", poles: 0, titles: 0, dnfs: 1 }
            },
            {
                id: "PCH", name: "Yevhenii Panchenko", num: 22, country: "UA", img: "assets/images/drivers/panchenko.png",
                seasonStats: emptySeasonStats(),
                allTimeStats: { gpEntered: 13, pts: 130, highestFinish: "1 (x1)", podiums: 4, highestGrid: "1 (x1)", poles: 1, titles: 0, dnfs: 2 }
            }
        ]
    },
    "mercedes": {
        name: "Mercedes-AMG Petronas",
        logoImg: "assets/images/teams/mercedes_logo.png",
        carImg: "assets/images/teams/mercedes_car.png",
        statsSeason: emptyTeamSeasonStats(),
        statsAllTime: { gpEntered: 15, pts: 139, highestFinish: "1 (x1)", podiums: 4, highestGrid: "1 (x1)", poles: 1, championships: 0 },
        drivers: [
            {
                id: "FIL", name: "Maksym Filipov", num: 17, country: "UA", img: "assets/images/drivers/filipov.png",
                seasonStats: emptySeasonStats(),
                allTimeStats: { gpEntered: 9, pts: 6, highestFinish: "8 (x1)", podiums: 0, highestGrid: "5 (x1)", poles: 0, titles: 0, dnfs: 3 }
            },
            {
                id: "LYC", name: "Bohdan Lychak", num: 2, country: "UA", img: "assets/images/drivers/lychak.png",
                seasonStats: emptySeasonStats(),
                allTimeStats: { gpEntered: 0, pts: 0, highestFinish: "-", podiums: 0, highestGrid: "-", poles: 0, titles: 0, dnfs: 0 }
            }
        ]
    },
    "astonmartin": {
        name: "Aston Martin Aramco",
        logoImg: "assets/images/teams/astonmartin_logo.png",
        carImg: "assets/images/teams/astonmartin_car.png",
        statsSeason: emptyTeamSeasonStats(),
        statsAllTime: { gpEntered: 15, pts: 206, highestFinish: "1 (x9)", podiums: 10, highestGrid: "1 (x12)", poles: 12, championships: 0 },
        drivers: [
            {
                id: "PET", name: "Nazarii Petriv", num: 39, country: "UA", img: "assets/images/drivers/petriv.png",
                seasonStats: emptySeasonStats(),
                allTimeStats: { gpEntered: 7, pts: 12, highestFinish: "7 (x1)", podiums: 0, highestGrid: "3 (x1)", poles: 0, titles: 0, dnfs: 2 }
            },
            {
                id: "FED", name: "Fedir Davydov", num: 20, country: "UA", img: "assets/images/drivers/davydov.png",
                seasonStats: emptySeasonStats(),
                allTimeStats: { gpEntered: 2, pts: 2, highestFinish: "9 (x1)", podiums: 0, highestGrid: "10 (x1)", poles: 0, titles: 0, dnfs: 0 }
            }
        ]
    },
    "alpine": {
        name: "Alpine",
        logoImg: "assets/images/teams/alpine_logo.png",
        carImg: "assets/images/teams/alpine_car.png",
        statsSeason: emptyTeamSeasonStats(),
        statsAllTime: { gpEntered: 15, pts: 320, highestFinish: "1 (x3)", podiums: 18, highestGrid: "1 (x1)", poles: 1, championships: 1 },
        drivers: [
            {
                id: "DOL", name: "Artemii Dolhanov", num: 23, country: "UA", img: "assets/images/drivers/dolhanov.png",
                seasonStats: emptySeasonStats(),
                allTimeStats: { gpEntered: 0, pts: 0, highestFinish: "-", podiums: 0, highestGrid: "-", poles: 0, titles: 0, dnfs: 0 }
            },
            {
                id: "PNT", name: "Olexandr Pantak", num: 71, country: "UA", img: "assets/images/drivers/pantak.png",
                seasonStats: emptySeasonStats(),
                allTimeStats: { gpEntered: 0, pts: 0, highestFinish: "-", podiums: 0, highestGrid: "-", poles: 0, titles: 0, dnfs: 0 }
            }
        ]
    },
    "haas": {
        name: "MoneyGram Haas",
        logoImg: "assets/images/teams/haas_logo.png",
        carImg: "assets/images/teams/haas_car.png",
        statsSeason: emptyTeamSeasonStats(),
        statsAllTime: { gpEntered: 15, pts: 133, highestFinish: "3 (x1)", podiums: 1, highestGrid: "4 (x2)", poles: 0, championships: 0 },
        drivers: [
            {
                id: "BRA", name: "Hlib Bratus", num: 3, country: "UA", img: "assets/images/drivers/bratus.png",
                seasonStats: emptySeasonStats(),
                allTimeStats: { gpEntered: 8, pts: 69, highestFinish: "3 (x1)", podiums: 1, highestGrid: "4 (x1)", poles: 0, titles: 0, dnfs: 0 }
            },
            {
                id: "MAR", name: "Stanislav Marchenko", num: 16, country: "UA", img: "assets/images/drivers/marchenko.png",
                seasonStats: emptySeasonStats(),
                allTimeStats: { gpEntered: 10, pts: 45, highestFinish: "6 (x3)", podiums: 0, highestGrid: "4 (x1)", poles: 0, titles: 0, dnfs: 2 }
            }
        ]
    },
    "rb": {
        name: "Visa Cash App RB",
        logoImg: "assets/images/teams/rb_logo.png",
        carImg: "assets/images/teams/rb_car.png",
        statsSeason: emptyTeamSeasonStats(),
        statsAllTime: { gpEntered: 15, pts: 31, highestFinish: "7 (x1)", podiums: 0, highestGrid: "1 (x1)", poles: 0, championships: 0 },
        drivers: [
            {
                id: "MUR", name: "Yaroslav Murchik", num: 76, country: "UA", img: "assets/images/drivers/murchik.png",
                seasonStats: emptySeasonStats(),
                allTimeStats: { gpEntered: 6, pts: 52, highestFinish: "3 (x1)", podiums: 1, highestGrid: "4 (x1)", poles: 0, titles: 0, dnfs: 1 }
            },
            {
                id: "KOB", name: "Ivan Kobryn", num: 23, country: "UA", img: "assets/images/drivers/kobryn.png",
                seasonStats: emptySeasonStats(),
                allTimeStats: { gpEntered: 5, pts: 10, highestFinish: "8 (x1)", podiums: 0, highestGrid: "5 (x1)", poles: 0, titles: 0, dnfs: 2 }
            }
        ]
    },
    "williams": {
        name: "Williams Racing",
        logoImg: "assets/images/teams/williams_logo.png",
        carImg: "assets/images/teams/williams_car.png",
        statsSeason: emptyTeamSeasonStats(),
        statsAllTime: { gpEntered: 15, pts: 80, highestFinish: "1 (x1)", podiums: 1, highestGrid: "3 (x1)", poles: 0, championships: 0 },
        drivers: [
            {
                id: "PYL", name: "Rostyslav Pyliak", num: 59, country: "UA", img: "assets/images/drivers/pyliak.png",
                seasonStats: emptySeasonStats(),
                allTimeStats: { gpEntered: 12, pts: 55, highestFinish: "5 (x3)", podiums: 0, highestGrid: "10 (x2)", poles: 0, titles: 0, dnfs: 2 }
            },
            {
                id: "MYK", name: "Maksym Mykhlyk", num: 37, country: "UA", img: "assets/images/drivers/mykhlyk.png",
                seasonStats: emptySeasonStats(),
                allTimeStats: { gpEntered: 11, pts: 3, highestFinish: "9 (x1)", podiums: 0, highestGrid: "12 (x3)", poles: 0, titles: 0, dnfs: 1 }
            }
        ]
    },
    "sauber": {
        name: "Audi Revolut",
        logoImg: "assets/images/teams/audi.png",
        carImg: "assets/images/teams/sauber_car.png",
        statsSeason: emptyTeamSeasonStats(),
        statsAllTime: { gpEntered: 0, pts: 0, highestFinish: "-", podiums: 0, highestGrid: "-", poles: 0, championships: 0 },
        drivers: [
            {
                id: "KRI", name: "Stanislav Krichfalovskyi", num: 24, country: "UA", img: "assets/images/drivers/krichfalovskyi.png",
                seasonStats: emptySeasonStats(),
                allTimeStats: { gpEntered: 11, pts: 2, highestFinish: "10 (x2)", podiums: 0, highestGrid: "10 (x1)", poles: 0, titles: 0, dnfs: 3 }
            },
            {
                id: "SHO", name: "Dmytro Sholopko", num: 68, country: "UA", img: "assets/images/drivers/sholopko.png",
                seasonStats: emptySeasonStats(),
                allTimeStats: { gpEntered: 9, pts: 7, highestFinish: "9 (x3)", podiums: 0, highestGrid: "11 (x1)", poles: 0, titles: 0, dnfs: 4 }
            }
        ]
    },
    "cadillac": {
        name: "Cadillac",
        logoImg: "assets/images/teams/cadillac.png",
        carImg: "assets/images/teams/cadillac_car.png",
        statsSeason: emptyTeamSeasonStats(),
        statsAllTime: { gpEntered: 0, pts: 0, highestFinish: "-", podiums: 0, highestGrid: "-", poles: 0, championships: 0 },
        drivers: [
            {
                id: "MYH", name: "Volodymyr Mykhalyuk", num: 69, country: "UA", img: "assets/images/drivers/mykhaulyk.png",
                seasonStats: emptySeasonStats(),
                allTimeStats: { gpEntered: 15, pts: 70, highestFinish: "4 (x1)", podiums: 0, highestGrid: "7 (x4)", poles: 0, titles: 0, dnfs: 0 }
            },
            {
                id: "KHO", name: "Dmytro Khomka", num: 96, country: "UA", img: "assets/images/drivers/khomka.png",
                seasonStats: emptySeasonStats(),
                allTimeStats: { gpEntered: 1, pts: 0, highestFinish: "-", podiums: 0, highestGrid: "-", poles: 0, titles: 0, dnfs: 1 }
            }
        ]
    }
};

// ------------------------------------------
// РЕКОРДИ КОЛА ПО ТРАСАХ (заповнюються вручну)
// Приклад: { gp: "Bahrain GP", circuit: "Bahrain International Circuit", time: "1:31.447", driver: "Yulian Hulyk", team: "Ferrari", season: "Season 1" },
// Прапор підтягується автоматично за назвою gp (див. TRACK_FLAGS вище).
// ------------------------------------------
const lapRecordsData = [
    { gp: "Australian GP", circuit: "Albert Park Circuit", time: "1:15.718", driver: "Denus ZABARNYI", team: "Racing Bulls", season: "Season 1" },
    { gp: "Chinese GP", circuit: "Shanghai International Circuit", time: "1:31.718", driver: "Yulian Hulyk", team: "Aston Martin", season: "Season 1" },
    { gp: "Japanese GP", circuit: "Suzuka International Circuit", time: "1:26.878", driver: "Yulian Hulyk", team: "Aston Martin", season: "Season 1" },
    { gp: "Monaco GP", circuit: "Monte Carlo Circuit", time: "1:09.740", driver: "Yulian Hulyk", team: "Aston Martin", season: "Season 1" },
    { gp: "British GP", circuit: "Silverstone Circuit", time: "1:25.746", driver: "Yulian Hulyk", team: "Aston Martin", season: "Season 1" },
    { gp: "Austrian GP", circuit: "Red Bull Ring", time: "1:03.727", driver: "Yulian Hulyk", team: "Aston Martin", season: "Season 1" },
    { gp: "Italian GP", circuit: "Monza Circuit", time: "1:18.170", driver: "Yulian Hulyk", team: "Aston Martin", season: "Season 1" },
    { gp: "Azerbaijan GP", circuit: "Baku City Circuit", time: "1:37.943", driver: "Yulian Hulyk", team: "Aston Martin", season: "Season 1" },
    { gp: "Brazilian GP", circuit: "Interlagos Circuit", time: "1:07.320", driver: "Yulian Hulyk", team: "Aston Martin", season: "Season 1" },
    { gp: "Miami GP", circuit: "Miami International Autodrome", time: "1:25.533", driver: "Yulian Hulyk", team: "Aston Martin", season: "Season 1" },
    { gp: "Qatar GP", circuit: "Lusail International Circuit", time: "1:20.936", driver: "Yaroslav Pankratov", team: "Alpine", season: "Season 1" },
    { gp: "Abu Dhabi GP", circuit: "Yas Marina Circuit", time: "1:22.541", driver: "Yevhenii Panchenko", team: "Mercedes", season: "Season 1" },
];

let currentStandingsSubTab = 'drivers';
let currentHofSubTab = 'drivers';
let currentMarketSubTab = 'transfers';
let currentRecordsSubTab = 'drivers';
let currentSelectedRace = null;
let currentSelectedSession = 'mainRace';

// ІНІЦІАЛІЗАЦІЯ
document.addEventListener('DOMContentLoaded', () => {
    initSeasonSelectors();
    renderNews();
    renderCalendar();
    renderResults();
    renderStandings();
    renderTeams();
    renderDriverMarket();
    renderHallOfFame();
    renderRecords();
    renderRating();
    initCountdown();
});

// ПЕРЕМИКАННЯ ОСНОВНИХ ВКЛАДОК
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active-section'));
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.side-item').forEach(el => el.classList.remove('active'));

    const activeTabSection = document.getElementById(`section-${tabName}`);
    const activeNavItem = document.getElementById(`nav-${tabName}`);
    const activeSideItem = document.getElementById(`side-${tabName}`);

    if (activeTabSection) activeTabSection.classList.add('active-section');
    if (activeNavItem) activeNavItem.classList.add('active');
    if (activeSideItem) activeSideItem.classList.add('active');

    if (tabName === 'halloffame') {
        renderHallOfFame();
    } else if (tabName === 'drivermarket') {
        renderDriverMarket();
    } else if (tabName === 'records') {
        renderRecords();
    } else if (tabName === 'rating') {
        renderRating();
    }

    // Twitch: вмикаємо плеєр лише на сторінці UGS TV
    if (tabName === 'tv') {
        loadTwitch();
    } else {
        unloadTwitch();
    }

    // Погода: віджети meteoblue вантажимо лише коли відкрито Schedule
    if (tabName === 'calendar') {
        renderCalendar();
    }

    closeSideMenu();
    window.scrollTo(0, 0);
}

function initSeasonSelectors() {
    const seasons = Object.keys(seasonsData);
    const selResults = document.getElementById('season-select-results');
    const selStandings = document.getElementById('season-select-standings');

    if (selResults) selResults.innerHTML = '';
    if (selStandings) selStandings.innerHTML = '';

    seasons.forEach(s => {
        if (selResults) selResults.innerHTML += `<option value="${s}">${s}</option>`;
        if (selStandings) selStandings.innerHTML += `<option value="${s}">${s}</option>`;
    });
}

// ==========================================
// 0. NEWS (головна сторінка + сторінка статті)
// ==========================================

// Картинка: якщо файлу немає, лишається темний градієнтний фон
function newsImg(src, cls, alt) {
    if (!src) return '';
    return `<img src="${src}" alt="${alt || ''}" class="${cls}" onerror="this.style.visibility='hidden'">`;
}

function renderNews() {
    const container = document.getElementById('news-container');
    if (!container) return;

    if (!newsData.length) {
        container.innerHTML = '<p style="color:#8a94a6;">Новин поки немає.</p>';
        return;
    }

    const main = newsData[0];
    const side = newsData.slice(1, 3);
    const list = newsData.slice(3);

    const sideHTML = side.map(n => `
        <div class="news-side-card clickable-news" onclick="openNews('${n.id}')">
            <div class="side-news-thumb">${newsImg(n.image, 'side-news-img', n.title)}</div>
            <div class="side-news-content">
                <span class="news-tag">${n.tag || ''}</span>
                <h4>${n.title}</h4>
            </div>
        </div>`).join('');

    const listHTML = list.length ? `
        <div class="news-side-list">
            ${list.map(n => `
                <div class="list-news-item clickable-news" onclick="openNews('${n.id}')">
                    <span class="news-tag">${n.tag || ''}</span>
                    <h5>${n.title}</h5>
                </div>`).join('')}
        </div>` : '';

    container.innerHTML = `
        <div class="news-hero-container">
            <div class="news-main-card clickable-news" onclick="openNews('${main.id}')">
                <div class="news-img-wrapper">
                    ${newsImg(main.image, 'news-main-img', main.title)}
                    <div class="news-badge">${main.tag || 'LATEST NEWS'}</div>
                </div>
                <div class="news-main-info">
                    <h2 class="news-main-title">${main.title}</h2>
                    <p class="news-main-desc">${main.summary || ''}</p>
                </div>
            </div>

            <div class="news-sidebar-grid">
                ${sideHTML}
                ${listHTML}
            </div>
        </div>`;
}

// Один блок статті -> HTML
function renderArticleBlock(b) {
    if (typeof b === 'string') return `<p>${b}</p>`;
    if (b.h) return `<h2 class="article-h">${b.h}</h2>`;
    if (b.img) {
        return `
            <figure class="article-figure">
                <img src="${b.img}" alt="${b.caption || ''}" onerror="this.parentElement.style.display='none'">
                ${b.caption ? `<figcaption>${b.caption}</figcaption>` : ''}
            </figure>`;
    }
    if (b.gallery) {
        return `
            <div class="article-gallery">
                ${b.gallery.map(src => `<img src="${src}" alt="" onerror="this.style.display='none'">`).join('')}
            </div>`;
    }
    if (b.quote) {
        return `
            <blockquote class="article-quote">
                ${b.quote}
                ${b.by ? `— ${b.by}` : ''}
            </blockquote>`;
    }
    if (b.youtube) {
        return `
            <div class="article-video">
                <iframe src="https://www.youtube.com/embed/${b.youtube}" allowfullscreen frameborder="0"></iframe>
            </div>`;
    }
    return '';
}

function openNews(newsId) {
    const n = newsData.find(x => x.id === newsId);
    if (!n) return;

    switchTab('detail');
    const container = document.getElementById('detail-content');
    if (!container) return;

    const meta = [n.date, n.author].filter(Boolean).join(' · ');

    container.innerHTML = `
        <article class="article-wrap">
            <button class="back-btn" onclick="switchTab('home')">← Back to News</button>

            <div class="article-tag">${n.tag || ''}</div>
            <h1 class="article-title">${n.title}</h1>
            ${meta ? `<div class="article-meta">${meta}</div>` : ''}

            ${n.image ? `
            <div class="article-hero">
                <img src="${n.image}" alt="${n.title}" onerror="this.parentElement.style.display='none'">
            </div>` : ''}

            <div class="article-body">
                ${(n.content || []).map(renderArticleBlock).join('')}
            </div>

            <button class="back-btn" style="margin-top:30px;" onclick="switchTab('home')">← Back to News</button>
        </article>`;
}

// ==========================================
// 1. CALENDAR (у стилі F1: Previous / Next / Upcoming + повний список)
//    На картках Next і Upcoming показується погода з meteoblue
// ==========================================

// Блок погоди (meteoblue) для картки етапу
function weatherBlock(i) {
    const ATTR = `
        <div class="sch-weather-attr">
            <a href="https://www.meteoblue.com/en/weather/week/index?utm_source=weather_widget&utm_medium=linkus&utm_content=three&utm_campaign=Weather%2BWidget" target="_blank" rel="noopener">meteoblue</a>
        </div>`;

    let src = '';
    if (i.meteoblueUrl) {
        src = i.meteoblueUrl;
    } else if (i.meteoblue) {
        src = `https://www.meteoblue.com/en/weather/widget/three/${i.meteoblue}`
            + `?geoloc=fixed&nocurrent=0&noforecast=0&days=4`
            + `&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&precipunit=MILLIMETER`
            + `&coloured=coloured&pictoicon=0&pictoicon=1`
            + `&maxtemperature=0&maxtemperature=1&mintemperature=0&mintemperature=1`
            + `&windspeed=0&windspeed=1&windgust=0&winddirection=0&uv=0&humidity=0`
            + `&precipitation=0&precipitation=1&precipitationprobability=0&spot=0&pressure=0`
            + `&layout=dark`;
    }

    if (!src) {
        const q = encodeURIComponent(i.weatherCity || i.circuit || i.gp);
        return `
            <div class="sch-weather sch-weather-empty">
                <div class="sch-weather-title">WEATHER</div>
                <p>Погоду ще не підключено. Вкажіть код місця meteoblue для цього етапу в календарі.</p>
                <a href="https://www.meteoblue.com/en/search?query=${q}" target="_blank" rel="noopener">Знайти місце на meteoblue →</a>
            </div>`;
    }

    return `
        <div class="sch-weather">
            <div class="sch-weather-title">WEATHER FORECAST</div>
            <iframe src="${src}" loading="lazy" frameborder="0" scrolling="NO"
                    allowtransparency="true"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"></iframe>
            ${ATTR}
        </div>`;
}

function renderCalendar() {
    const container = document.getElementById('calendar-grid');
    if (!container) return;
    container.className = 'schedule-wrap';

    const cal = seasonsData["Season 1"].calendar;
    const isDone = i => String(i.status).toLowerCase() === 'completed';
    const prev = cal.filter(isDone).slice(-1)[0];
    const rest = cal.filter(i => !isDone(i));

    // withWeather = true для карток Next і Upcoming
    const card = (i, withWeather) => {
        const bg = i.img ? `background-image:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,.8)),url('${i.img}');` : '';
        const flag = i.flagImg ? `<img src="${i.flagImg}" alt="" class="sch-flag" onerror="this.style.display='none'">` : '';
        const sprint = i.isSprint ? '<span class="sch-sprint">SPRINT</span>' : '';
        return `
            <div class="sch-card ${i.isSprint ? 'is-sprint' : ''} ${withWeather ? 'has-weather' : ''}" style="${bg}">
                <div class="sch-round">ROUND ${i.round} ${sprint}</div>
                <div class="sch-name">${i.gp}</div>
                <div class="sch-date">${i.date}</div>
                <div class="sch-circuit">${i.circuit}</div>
                ${flag}
                ${withWeather ? weatherBlock(i) : ''}
            </div>`;
    };

    const featured = [['Previous', prev, false], ['Next', rest[0], true], ['Upcoming', rest[1], true]].filter(x => x[1]);
    const featuredHTML = featured.map(([label, i, w]) => `
        <div><h2 class="sch-heading">${label}</h2>${card(i, w)}</div>`).join('');

    container.innerHTML = `
        <div class="sch-featured">${featuredHTML}</div>
        <h2 class="sch-heading" style="margin-top:40px;">Full Schedule</h2>
        <div class="sch-all">${cal.map(i => card(i, false)).join('')}</div>`;
}

// ==========================================
// 1.1. COUNTDOWN + СМУГА "НАСТУПНИЙ ЕТАП"
//
// Правило відліку:
//   старт етапу   = 20:00 першого дня (початок кваліфікації)
//   кінець етапу  = 20:00 другого дня
//   до старту     -> іде відлік (дні, години, хвилини, секунди)
//   між ними      -> нулі і напис "RACE IN PROGRESS"
//   після кінця   -> відлік до наступного етапу
// Час рахується за київським часом (COUNTDOWN_TZ).
// ==========================================
const COUNTDOWN_SEASON = "Season 1";
const COUNTDOWN_START_YEAR = 2026;   // рік першого етапу в календарі
const COUNTDOWN_DEFAULT_TIME = "20:00";
const COUNTDOWN_TZ = "Europe/Kyiv";

const CD_MONTHS = { JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5, JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11 };

let cdEvents = [];
let cdTimer = null;
let cdShownIndex = -2;

// Зсув часового поясу (мс) для моменту utcMs
function cdTzOffset(utcMs, tz) {
    const parts = {};
    new Intl.DateTimeFormat('en-US', {
        timeZone: tz, hourCycle: 'h23',
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric'
    }).formatToParts(new Date(utcMs)).forEach(p => { parts[p.type] = p.value; });
    const asUtc = Date.UTC(+parts.year, +parts.month - 1, +parts.day, +parts.hour, +parts.minute, +parts.second);
    return asUtc - utcMs;
}

// Дата й час у часовому поясі tz -> мітка UTC (мс)
function cdZonedToUtc(y, m, d, hh, mm, tz) {
    const guess = Date.UTC(y, m, d, hh, mm);
    let ts = guess - cdTzOffset(guess, tz);
    ts = guess - cdTzOffset(ts, tz);
    return ts;
}

// "05-06 NOV" -> { d1:5, d2:6, month:10, endMonth:10 }; "15 MAR" -> наступний день
function cdParseDate(str) {
    const m = String(str || '').match(/(\d{1,2})(?:\s*[-–]\s*(\d{1,2}))?\s+([A-Za-z]{3})/);
    if (!m) return null;
    const month = CD_MONTHS[m[3].toUpperCase()];
    if (month === undefined) return null;
    const d1 = parseInt(m[1], 10);
    let d2 = m[2] ? parseInt(m[2], 10) : d1 + 1;
    let endMonth = month;
    if (m[2] && d2 < d1) endMonth = month + 1; // наприклад "30-01"
    return { d1: d1, d2: d2, month: month, endMonth: endMonth };
}

// Календар -> список подій з мітками початку й кінця
function cdBuildEvents() {
    const cal = (seasonsData[COUNTDOWN_SEASON] || {}).calendar || [];
    const events = [];
    let year = COUNTDOWN_START_YEAR;
    let prevMonth = -1;

    cal.forEach(item => {
        const p = cdParseDate(item.date);
        if (!p) return;

        if (item.year) {
            year = item.year;
        } else if (prevMonth !== -1 && p.month < prevMonth) {
            year += 1; // перейшли через Новий рік
        }
        prevMonth = p.month;

        const [hh, mm] = String(item.time || COUNTDOWN_DEFAULT_TIME).split(':').map(n => parseInt(n, 10) || 0);
        events.push({
            item: item,
            start: cdZonedToUtc(year, p.month, p.d1, hh, mm, COUNTDOWN_TZ),
            end: cdZonedToUtc(year, p.endMonth, p.d2, hh, mm, COUNTDOWN_TZ),
            startLabel: `${String(p.d1).padStart(2, '0')} ${Object.keys(CD_MONTHS)[p.month]}, ${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`
        });
    });

    events.sort((a, b) => a.start - b.start);
    return events;
}

// Перший етап, який ще не закінчився
function cdCurrentIndex(now) {
    for (let i = 0; i < cdEvents.length; i++) {
        if (now < cdEvents[i].end) return i;
    }
    return -1;
}

// "03 – 04 DEC" з "03-04 DEC"
function cdPrettyDate(str) {
    return String(str || '').replace(/\s*[-–]\s*/, ' – ');
}

// Смуга завжди видима (в ній соцмережі справа).
// Ліва частина з інформацією про етап порожня, якщо етапів більше немає.
function renderNextStrip(idx) {
    const strip = document.getElementById('next-strip');
    const inner = document.getElementById('next-strip-inner');
    if (!strip || !inner) return;

    strip.style.display = 'block';

    if (idx < 0) { inner.innerHTML = ''; return; }

    const ev = cdEvents[idx];
    const i = ev.item;
    const live = Date.now() >= ev.start;
    const flag = i.flagImg ? `<img src="${i.flagImg}" alt="" class="ns-flag" onerror="this.style.display='none'">` : '';

    inner.innerHTML = `
        <div class="ns-meta">
            <span>R${i.round}</span>
            <span class="ns-sep"></span>
            <span>${cdPrettyDate(i.date)}</span>
            ${live ? '<span class="ns-live">LIVE</span>' : ''}
        </div>
        <div class="ns-name">${flag}<span>${i.gp.replace(/\s*GP$/i, '')}</span><span class="ns-arrow">›</span></div>`;
}

function cdSet(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

function cdTick() {
    const box = document.getElementById('countdown');
    const now = Date.now();
    const idx = cdCurrentIndex(now);

    // Перемальовуємо смугу тільки коли змінився етап або стан (LIVE)
    const live = idx >= 0 && now >= cdEvents[idx].start;
    const stateKey = idx * 10 + (live ? 1 : 0);
    if (stateKey !== cdShownIndex) {
        cdShownIndex = stateKey;
        renderNextStrip(idx);
    }

    if (!box) return;
    if (idx < 0) { box.style.display = 'none'; return; }
    box.style.display = '';

    const ev = cdEvents[idx];
    const i = ev.item;
    const statusEl = document.getElementById('cd-status');

    cdSet('cd-title', `Round ${i.round} · ${i.gp}`);

    if (!live) {
        // Відлік до старту кваліфікації
        let diff = Math.max(0, Math.floor((ev.start - now) / 1000));
        const days = Math.floor(diff / 86400); diff -= days * 86400;
        const hours = Math.floor(diff / 3600); diff -= hours * 3600;
        const mins = Math.floor(diff / 60);
        const secs = diff - mins * 60;

        cdSet('cd-label', 'NEXT RACE STARTS IN');
        cdSet('cd-days', String(days).padStart(2, '0'));
        cdSet('cd-hours', String(hours).padStart(2, '0'));
        cdSet('cd-mins', String(mins).padStart(2, '0'));
        cdSet('cd-secs', String(secs).padStart(2, '0'));
        cdSet('cd-note', `Qualifying starts ${ev.startLabel} (Kyiv time)`);
        if (statusEl) statusEl.style.display = 'none';
        box.classList.remove('is-live');
    } else {
        // Етап триває: всі нулі + напис
        cdSet('cd-label', 'RACE WEEKEND');
        cdSet('cd-days', '00');
        cdSet('cd-hours', '00');
        cdSet('cd-mins', '00');
        cdSet('cd-secs', '00');
        cdSet('cd-note', '');
        if (statusEl) statusEl.style.display = '';
        box.classList.add('is-live');
    }
}

function initCountdown() {
    cdEvents = cdBuildEvents();
    cdShownIndex = -2;
    cdTick();
    if (cdTimer) clearInterval(cdTimer);
    cdTimer = setInterval(cdTick, 1000);
}

// ==========================================
// 2. RESULTS (етапи списком, вкладки лише для сесій з результатами)
// ==========================================
function renderResults() {
    const selResults = document.getElementById('season-select-results');
    if (!selResults) return;

    const season = seasonsData[selResults.value];
    const raceTabsContainer = document.getElementById('race-selector');
    const tableContainer = document.getElementById('results-table-container');
    if (!season || !raceTabsContainer || !tableContainer) return;

    const raceNames = Object.keys(season.results);
    if (raceNames.length === 0) {
        raceTabsContainer.innerHTML = '';
        tableContainer.innerHTML = '<p style="color:#8a94a6; margin-top:20px;">Немає результатів для цього сезону.</p>';
        return;
    }

    if (!currentSelectedRace || !season.results[currentSelectedRace]) currentSelectedRace = raceNames[0];

    raceTabsContainer.innerHTML = `
        <div class="filter-group" style="margin-bottom:10px;">
            <label for="race-select" class="filter-label">Race:</label>
            <select id="race-select" class="f1-select" onchange="selectRace(this.value)">
                ${raceNames.map(gp => `<option value="${gp}" ${gp === currentSelectedRace ? 'selected' : ''}>${gp}</option>`).join('')}
            </select>
        </div>`;

    const gpData = season.results[currentSelectedRace] || {};

    // Тільки сесії, де є результати
    const allSessions = [['sprintQuali', 'Sprint Qualifying'], ['sprint', 'Sprint'], ['quali', 'Qualifying'], ['mainRace', 'Main Race']];
    const available = allSessions.filter(([k]) => (gpData[k] || []).length > 0);

    if (available.length === 0) {
        tableContainer.innerHTML = '<p style="color:#8a94a6; padding:20px 0;">Результати для цього етапу ще не додані.</p>';
        return;
    }
    if (!available.some(([k]) => k === currentSelectedSession)) {
        currentSelectedSession = available.some(([k]) => k === 'mainRace') ? 'mainRace' : available[0][0];
    }

    const sessionTabsHTML = `
        <div class="session-tabs" style="display:flex; gap:10px; margin:20px 0; border-bottom:1px solid #232a3a; padding-bottom:10px; overflow-x:auto;">
            ${available.map(([k, label]) => `<button class="sub-tab-btn ${currentSelectedSession === k ? 'active' : ''}" onclick="selectSession('${k}')">${label}</button>`).join('')}
        </div>`;

    const sessionResults = gpData[currentSelectedSession];
    const isQuali = currentSelectedSession === 'quali' || currentSelectedSession === 'sprintQuali';

    const driverCell = r => r.driverId
        ? `<td class="clickable-link" onclick="openDriverDetail('${r.driverId}')">${r.driverName}</td>`
        : `<td>${r.driverName}</td>`;
    const teamCell = r => r.teamId
        ? `<td class="clickable-link" onclick="openTeamDetail('${r.teamId}')">${teamWithLogo(r.teamName)}</td>`
        : `<td>${teamWithLogo(r.teamName)}</td>`;

    const rows = sessionResults.map(r => `
        <tr>
            <td>P${r.pos}</td>
            ${driverCell(r)}
            ${teamCell(r)}
            <td>${r.time}</td>
            <td><strong>${isQuali ? '-' : (r.pts ?? 0)}</strong></td>
        </tr>`).join('');

    tableContainer.innerHTML = sessionTabsHTML + `
        <div class="table-responsive">
            <table class="f1-table">
                <thead><tr><th>Pos</th><th>Driver</th><th>Team</th><th>Time/Gap</th><th>Pts</th></tr></thead>
                <tbody>${rows}</tbody>
            </table>
        </div>`;
}

function selectRace(gp) {
    currentSelectedRace = gp;
    renderResults();
}

function selectSession(sessionKey) {
    currentSelectedSession = sessionKey;
    renderResults();
}

// ==========================================
// 3. STANDINGS (ваші бали)
// ==========================================
function switchStandingsSubTab(subTab) {
    currentStandingsSubTab = subTab;
    const btnDrivers = document.getElementById('btn-drivers-standings');
    const btnConstructors = document.getElementById('btn-constructors-standings');

    if (btnDrivers) btnDrivers.classList.toggle('active', subTab === 'drivers');
    if (btnConstructors) btnConstructors.classList.toggle('active', subTab === 'constructors');

    renderStandings();
}

function renderStandings() {
    const selStandings = document.getElementById('season-select-standings');
    if (!selStandings) return;

    const season = seasonsData[selStandings.value];
    const container = document.getElementById('standings-table-container');
    if (!season || !container) return;

    if (currentStandingsSubTab === 'drivers') {
        const list = season.driversStandings || [];
        if (list.length === 0) {
            container.innerHTML = '<p style="color:#8a94a6; margin-top:20px;">Немає даних для цього сезону.</p>';
            return;
        }
        const rows = list.map(d => `
            <tr>
                <td>${d.pos}</td>
                <td style="color:#ff1801; font-style:italic;">#${d.number ?? ''}</td>
                ${d.driverId
                    ? `<td class="clickable-link" onclick="openDriverDetail('${d.driverId}')">${d.name}</td>`
                    : `<td>${d.name}</td>`}
                <td>${teamWithLogo(d.team)}</td>
                <td><strong style="color:#00e676;">${d.pts}</strong></td>
                <td>${d.wins}</td>
                <td>${d.poles ?? 0}</td>
                <td>${d.races ?? 0}</td>
                <td>${d.dnf ?? 0}</td>
                <td>${d.podiums}</td>
                <td style="color:#ff9800;">${d.pp ?? 0}</td>
            </tr>`).join('');

        container.innerHTML = `
            <div class="table-responsive">
                <table class="f1-table">
                    <thead><tr><th>Pos</th><th>No</th><th>Driver</th><th>Team</th><th>Pts</th><th>Wins</th><th>Poles</th><th>Races</th><th>DNF</th><th>Podiums</th><th>PP</th></tr></thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>`;
    } else {
        const list = season.constructorsStandings || [];
        if (list.length === 0) {
            container.innerHTML = '<p style="color:#8a94a6; margin-top:20px;">Немає даних для цього сезону.</p>';
            return;
        }
        const rows = list.map(c => `
            <tr>
                <td>${c.pos}</td>
                ${c.teamId
                    ? `<td class="clickable-link" onclick="openTeamDetail('${c.teamId}')">${teamWithLogo(c.name)}</td>`
                    : `<td>${teamWithLogo(c.name)}</td>`}
                <td><strong style="color:#00e676;">${c.pts}</strong></td>
                <td>${c.wins}</td>
                <td>${c.podiums ?? 0}</td>
            </tr>`).join('');

        container.innerHTML = `
            <div class="table-responsive">
                <table class="f1-table">
                    <thead><tr><th>Pos</th><th>Team</th><th>Pts</th><th>Wins</th><th>Podiums</th></tr></thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>`;
    }
}

// ==========================================
// 4. TEAMS GRID
// ==========================================
function renderTeams() {
    const container = document.getElementById('teams-grid');
    if (!container) return;

    container.innerHTML = '';

    Object.keys(teamsData).forEach(teamId => {
        const team = teamsData[teamId];
        container.innerHTML += `
            <div class="team-card" onclick="openTeamDetail('${teamId}')" style="cursor:pointer;">
                <div style="height:120px; background:#121620; border-radius:6px; overflow:hidden; margin-bottom:12px;">
                    <img src="${team.logoImg || ''}" alt="${team.name}" style="width:100%; height:100%; object-fit:cover; object-position:center; display:block;" onerror="this.style.display='none'">
                </div>
                <h3>${teamWithLogo(team.name)}</h3>
                <p style="font-size:12px; color:#8a94a6; margin-top:5px;">Season Pos: ${team.statsSeason ? team.statsSeason.pos : '-'} | Pts: ${team.statsSeason ? team.statsSeason.pts : 0}</p>
            </div>
        `;
    });
}

// ==========================================
// 5. DRIVER MARKET
// ==========================================
function switchMarketSubTab(subTab) {
    currentMarketSubTab = subTab;
    const btnTransfers = document.getElementById('btn-market-transfers');
    const btnFree = document.getElementById('btn-market-free');
    const btnRumours = document.getElementById('btn-market-rumours');

    if (btnTransfers) btnTransfers.classList.toggle('active', subTab === 'transfers');
    if (btnFree) btnFree.classList.toggle('active', subTab === 'free');
    if (btnRumours) btnRumours.classList.toggle('active', subTab === 'rumours');

    renderDriverMarket();
}

function renderDriverMarket() {
    const container = document.getElementById('driver-market-container');
    if (!container) return;

    const emptyMsg = text => `<p style="color:#8a94a6; grid-column:1 / -1;">${text}</p>`;
    let html = '';

    if (currentMarketSubTab === 'transfers') {
        html = driverMarketData.transfers.map(t => `
            <div class="market-card" style="background:#151922; padding:20px; border-radius:8px; border-left:4px solid #00e676;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <span style="font-family:'Formula1-Bold', sans-serif; font-size:12px; color:#00e676;">${t.status}</span>
                </div>
                <h3 style="font-size:18px; margin-bottom:8px; color:#fff;">${t.driverName}</h3>
                <p class="transfer-line" style="color:#a0a8b8; font-size:14px; margin-bottom:8px;">
                    <strong>${teamWithLogo(t.fromTeam)}</strong>
                    <span class="transfer-arrow">➔</span>
                    <strong style="color:#F6FF00;">${teamWithLogo(t.toTeam)}</strong>
                </p>
                <p style="color:#8a94a6; font-size:13px;">${t.details}</p>
            </div>
        `).join('') || emptyMsg('Трансферів поки немає.');

    } else if (currentMarketSubTab === 'free') {
        html = driverMarketData.freeAgents.map(f => `
            <div class="market-card" style="background:#151922; padding:20px; border-radius:8px; border-left:4px solid #F6FF00;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <span style="font-family:'Formula1-Bold', sans-serif; font-size:12px; color:#F6FF00;">${f.status}</span>
                    <span style="font-size:12px; color:#8a94a6;">${f.experience}</span>
                </div>
                <h3 style="font-size:18px; margin-bottom:8px; color:#fff;">${f.driverName}</h3>
                <p style="color:#8a94a6; font-size:13px;">${f.details}</p>
            </div>
        `).join('') || emptyMsg('Вільних агентів немає.');

    } else if (currentMarketSubTab === 'rumours') {
        html = driverMarketData.rumours.map(r => `
            <div class="market-card" style="background:#151922; padding:20px; border-radius:8px; border-left:4px solid #ff9800;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <span style="font-family:'Formula1-Bold', sans-serif; font-size:12px; color:#ff9800;">${r.status}</span>
                </div>
                <h3 style="font-size:18px; margin-bottom:4px; color:#fff;">${r.driverName}</h3>
                <h4 style="font-size:14px; color:#F6FF00; margin-bottom:8px;">${r.headline}</h4>
                <p style="color:#8a94a6; font-size:13px;">${r.details}</p>
            </div>
        `).join('') || emptyMsg('Чуток немає.');
    }

    container.innerHTML = html;
}

// ==========================================
// 6. HALL OF FAME
// ==========================================
function switchHofSubTab(subTab) {
    currentHofSubTab = subTab;
    const btnDrivers = document.getElementById('btn-hof-drivers');
    const btnConstructors = document.getElementById('btn-hof-constructors');

    if (btnDrivers) btnDrivers.classList.toggle('active', subTab === 'drivers');
    if (btnConstructors) btnConstructors.classList.toggle('active', subTab === 'constructors');

    renderHallOfFame();
}

function renderHallOfFame() {
    const container = document.getElementById('hof-container');
    if (!container) return;

    if (currentHofSubTab === 'drivers') {
        container.innerHTML = hallOfFameData.drivers.map(champ => `
            <div class="hof-card">
                <div class="hof-season-badge">${champ.season}</div>
                <h3 style="font-size: 18px; margin-bottom: 6px; color: #ffffff;">${champ.name}</h3>
                <p style="color: #a0a8b8; font-size: 14px;">${teamWithLogo(champ.team)}</p>
            </div>
        `).join('');
    } else {
        container.innerHTML = hallOfFameData.constructors.map(champ => {
            const driversListHTML = champ.drivers && champ.drivers.length > 0
                ? champ.drivers.map(driver => `<li style="color: #d0d4dc; font-size: 13px; margin-top: 4px;">• ${driver}</li>`).join('')
                : '<li style="color: #6b7280; font-size: 13px;">Пілоти не вказані</li>';

            return `
                <div class="hof-card">
                    <div class="hof-season-badge">${champ.season}</div>
                    <h3 style="font-size: 18px; margin-bottom: 10px; color: #ffffff;">${teamWithLogo(champ.team)}</h3>
                    <div style="border-top: 1px solid #232a3a; padding-top: 10px; margin-top: 8px;">
                        <span style="font-family: 'Formula1-Bold', sans-serif; font-size: 11px; color: #F6FF00; text-transform: uppercase;">Championship Drivers:</span>
                        <ul style="list-style: none; padding: 0; margin-top: 4px;">
                            ${driversListHTML}
                        </ul>
                    </div>
                </div>
            `;
        }).join('');
    }
}

// ==========================================
// 7. RECORDS (РЕКОРДИ ЛІГИ)
// ==========================================
function switchRecordsSubTab(subTab) {
    currentRecordsSubTab = subTab;
    const btnDrivers = document.getElementById('btn-records-drivers');
    const btnConstructors = document.getElementById('btn-records-constructors');
    const btnTracks = document.getElementById('btn-records-tracks');

    if (btnDrivers) btnDrivers.classList.toggle('active', subTab === 'drivers');
    if (btnConstructors) btnConstructors.classList.toggle('active', subTab === 'constructors');
    if (btnTracks) btnTracks.classList.toggle('active', subTab === 'tracks');

    renderRecords();
}

// "1 (x9)" -> 9 перемог; "1" -> 1; "3 (x1)" або "-" -> 0
function winsFromFinish(str) {
    const m = String(str || '').match(/^\s*(\d+)\s*(?:\(x(\d+)\))?\s*$/i);
    if (!m || parseInt(m[1], 10) !== 1) return 0;
    return m[2] ? parseInt(m[2], 10) : 1;
}

function getAllDrivers() {
    const list = [];
    Object.keys(teamsData).forEach(teamId => {
        const team = teamsData[teamId];
        (team.drivers || []).forEach(d => list.push({ driver: d, team: team, teamId: teamId }));
    });
    return list;
}

function topHolders(items, valueFn) {
    let max = 0;
    items.forEach(i => { max = Math.max(max, valueFn(i) || 0); });
    if (max <= 0) return { max: 0, holders: [] };
    return { max: max, holders: items.filter(i => (valueFn(i) || 0) === max) };
}

// Показує ВСІХ рекордсменів (якщо їх багато, список прокручується)
function holdersHTML(rows) {
    if (rows.length === 0) {
        return '<span style="color:#6b7280; font-size:13px;">Поки немає рекордсмена</span>';
    }
    const items = rows.map(r => `
        <div class="holder-row">
            ${r.onclick
                ? `<div class="clickable-link holder-name" onclick="${r.onclick}">${r.name}</div>`
                : `<div class="holder-name">${r.name}</div>`}
            ${r.sub ? `<div class="holder-sub">${r.sub}</div>` : ''}
        </div>`).join('');
    return `<div class="holders-list">${items}</div>`;
}

function recordCard(label, max, bodyHTML) {
    return `
        <div class="hof-card">
            <div style="font-family:'Formula1-Bold', sans-serif; font-size:11px; color:#F6FF00; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:10px;">${label}</div>
            <div style="font-family:'Formula1-Bold', sans-serif; font-size:40px; color:#fff; line-height:1; margin-bottom:14px;">${max > 0 ? max : '-'}</div>
            <div style="border-top:1px solid #232a3a; padding-top:10px;">${bodyHTML}</div>
        </div>`;
}

// Рекорди, які рахуються автоматично з результатів 1 сезону (raceResults)
function computeResultRecords() {
    const stats = {};
    if (typeof raceResults === 'undefined') return [];

    const alias = {
        "volodymyr mykhailyuk": "volodymyr mykhalyuk",
        "dmytro homka": "dmytro khomka",
        "bogdan voskobiinyk": "bohdan voskobiinyk",
        "illya khudavskyi": "illia khudavskyi",
        "roman rovsh": "roman kovsh"
    };
    const norm = n => { const k = String(n).trim().toLowerCase(); return alias[k] || k; };
    const titleCase = s => String(s).toLowerCase().replace(/(^|[\s-])([a-zа-яіїєґ])/g, (m, p, c) => p + c.toUpperCase());

    const idMap = {};
    getAllDrivers().forEach(x => { idMap[norm(x.driver.name)] = x.driver.id; });

    const entry = (r) => {
        const key = norm(r.name);
        if (!stats[key]) {
            stats[key] = { name: titleCase(r.name), team: r.team, id: idMap[key] || null,
                sprintWins: 0, sprintPodiums: 0, frontRows: 0, pointsFinishes: 0 };
        }
        stats[key].team = r.team;
        return stats[key];
    };

    raceResults.forEach(round => {
        Object.keys(round.sessions).forEach(rawKey => {
            const key = rawKey.toLowerCase();
            round.sessions[rawKey].forEach(r => {
                const e = entry(r);
                if (key === 'sprintrace') {
                    if (r.pos === 1) e.sprintWins++;
                    if (r.pos <= 3) e.sprintPodiums++;
                } else if (key === 'qualifying') {
                    if (r.pos <= 2) e.frontRows++;
                } else if (key === 'race') {
                    if ((r.points || 0) > 0) e.pointsFinishes++;
                }
            });
        });
    });

    return Object.values(stats);
}

function renderRecords() {
    const container = document.getElementById('records-container');
    if (!container) return;

    if (currentRecordsSubTab === 'drivers') {
        // --- рекорди з allTimeStats ---
        const all = getAllDrivers();
        const st = x => x.driver.allTimeStats || {};
        const defs = [
            { label: 'Most Race Wins',            fn: x => winsFromFinish(st(x).highestFinish) },
            { label: 'Most Pole Positions',       fn: x => st(x).poles },
            { label: 'Most Podiums',              fn: x => st(x).podiums },
            { label: 'Most Career Points',        fn: x => st(x).pts },
            { label: 'Most World Championships',  fn: x => st(x).titles },
            { label: 'Most Grands Prix Entered',  fn: x => st(x).gpEntered ?? st(x).races },
            { label: 'Most DNFs',                 fn: x => st(x).dnfs }
        ];

        let html = defs.map(def => {
            const top = topHolders(all, def.fn);
            const rows = top.holders.map(h => ({
                onclick: `openDriverDetail('${h.driver.id}')`,
                name: h.driver.name,
                sub: teamWithLogo(h.team.name)
            }));
            return recordCard(def.label, top.max, holdersHTML(rows));
        }).join('');

        // --- рекорди 1 сезону (з таблиці заліку) ---
        const s1 = seasonsData["Season 1"].driversStandings || [];
        if (s1.length > 0) {
            const top = topHolders(s1, d => d.pts);
            const rows = top.holders.map(d => ({
                onclick: d.driverId ? `openDriverDetail('${d.driverId}')` : '',
                name: d.name,
                sub: `Season 1 · ${teamWithLogo(d.team)}`
            }));
            html += recordCard('Most Points in a Season', top.max, holdersHTML(rows));
        }

        // --- рекорди, які рахуються з результатів гонок ---
        const res = computeResultRecords();
        const resDefs = [
            { label: 'Most Sprint Wins',        fn: x => x.sprintWins },
            { label: 'Most Sprint Podiums',     fn: x => x.sprintPodiums },
            { label: 'Most Front Row Starts',   fn: x => x.frontRows },
            { label: 'Most Points Finishes',    fn: x => x.pointsFinishes }
        ];
        html += resDefs.map(def => {
            const top = topHolders(res, def.fn);
            const rows = top.holders.map(h => ({
                onclick: h.id ? `openDriverDetail('${h.id}')` : '',
                name: h.name,
                sub: teamWithLogo(h.team)
            }));
            return recordCard(def.label, top.max, holdersHTML(rows));
        }).join('');

        container.innerHTML = html;

    } else if (currentRecordsSubTab === 'constructors') {
        const all = Object.keys(teamsData).map(id => ({ id: id, team: teamsData[id] }));
        const st = x => x.team.statsAllTime || {};
        const defs = [
            { label: 'Most Race Wins',            fn: x => winsFromFinish(st(x).highestFinish) },
            { label: 'Most Pole Positions',       fn: x => st(x).poles },
            { label: 'Most Podiums',              fn: x => st(x).podiums },
            { label: 'Most Team Points',          fn: x => st(x).pts },
            { label: 'Most World Championships',  fn: x => st(x).championships },
            { label: 'Most Grands Prix Entered',  fn: x => st(x).gpEntered }
        ];

        let html = defs.map(def => {
            const top = topHolders(all, def.fn);
            const rows = top.holders.map(h => ({
                onclick: `openTeamDetail('${h.id}')`,
                name: teamWithLogo(h.team.name),
                sub: ''
            }));
            return recordCard(def.label, top.max, holdersHTML(rows));
        }).join('');

        // --- рекорди 1 сезону (з Кубка конструкторів) ---
        const c1 = seasonsData["Season 1"].constructorsStandings || [];
        if (c1.length > 0) {
            const seasonDefs = [
                { label: 'Most Points in a Season', fn: c => c.pts },
                { label: 'Most Wins in a Season',   fn: c => c.wins }
            ];
            html += seasonDefs.map(def => {
                const top = topHolders(c1, def.fn);
                const rows = top.holders.map(c => ({
                    onclick: c.teamId ? `openTeamDetail('${c.teamId}')` : '',
                    name: teamWithLogo(c.name),
                    sub: 'Season 1'
                }));
                return recordCard(def.label, top.max, holdersHTML(rows));
            }).join('');
        }

        container.innerHTML = html;

    } else {
        if (lapRecordsData.length === 0) {
            container.innerHTML = '<p style="color:#8a94a6; grid-column:1 / -1;">Рекорди кола по трасах поки не додані.</p>';
            return;
        }

        // Перша колонка: прапор країни + назва Гран Прі + траса
        const rows = lapRecordsData.map(r => `
            <tr>
                <td>
                    <div class="track-gp">
                        ${trackFlagHTML(r.gp)}
                        <div>
                            ${r.gp}
                            <div style="font-size:11px; color:#8a94a6;">${r.circuit || ''}</div>
                        </div>
                    </div>
                </td>
                <td style="font-family:'Formula1-Bold', sans-serif; color:#F6FF00;">${r.time}</td>
                <td>${r.driver}</td>
                <td>${r.team ? teamWithLogo(r.team) : '-'}</td>
                <td>${r.season || '-'}</td>
            </tr>
        `).join('');

        container.innerHTML = `
            <div class="table-responsive" style="grid-column:1 / -1;">
                <table class="f1-table">
                    <thead>
                        <tr><th>Grand Prix</th><th>Lap Time</th><th>Driver</th><th>Team</th><th>Season</th></tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        `;
    }
}

// ==========================================
// 8. RATING (РЕЙТИНГ ПІЛОТІВ)
//
// Загальний рейтинг пілотів без прив'язки до команд.
// Рахується автоматично з даних сайту:
//  - сезони з driversStandings (Season 1) беруться з таблиці заліку;
//  - сезони без заліку (Season 2 і далі) рахуються з seasonsData[..].results,
//    тож рейтинг оновлюється після кожного доданого етапу;
//  - у рейтингу показуються ВСІ пілоти (також ті, що ще не мають стартів).
//
// Формула:
//   оцінка = очки*1 + перемоги*6 + подіуми*4 + поули*4 + FL*3 - DNF*5 - PP*1
//   Rating = 1000 + 10 * оцінка / (старти + 3)
// Ділення на (старти + 3) не дає пілоту з 2-3 гонок обігнати тих, хто
// стабільно їздить весь сезон.
// ==========================================
const RATING_BASE = 1000;               // базовий рейтинг
const RATING_SCALE = 10;                // масштаб
const RATING_PRIOR_STARTS = 3;          // "згладжування" для малої кількості стартів
const RATING_PROVISIONAL_STARTS = 3;    // менше стартів = позначка PROV
const RATING_WEIGHTS = { pts: 1, win: 6, podium: 4, pole: 4, fl: 3, dnf: -5, pp: -1 };

// Найшвидші кола для сезонів, де їх немає в таблиці заліку.
// Приклад: "Season 1": { "Yulian Hulyk": 3, "Yaroslav Pankratov": 1 }
const fastestLapsData = {
    "Season 1": {
    }
};

const RATING_ALIAS = {
    "volodymyr mykhailyuk": "volodymyr mykhalyuk",
    "dmytro homka": "dmytro khomka",
    "bogdan voskobiinyk": "bohdan voskobiinyk",
    "illya khudavskyi": "illia khudavskyi",
    "roman rovsh": "roman kovsh"
};

function ratingNorm(n) {
    const k = String(n || '').trim().toLowerCase();
    return RATING_ALIAS[k] || k;
}

function ratingTitle(s) {
    return String(s || '').toLowerCase().replace(/(^|[\s-])([a-zа-яіїєґ])/g, (m, p, c) => p + c.toUpperCase());
}

const RATING_SESSIONS = ['sprintQuali', 'sprint', 'quali', 'mainRace'];

function ratingEmptyStats(key, name, team) {
    return { key: key, name: name, team: team || '', starts: 0, pts: 0, wins: 0, podiums: 0, poles: 0, fl: 0, dnf: 0, pp: 0 };
}

// Чи є в сезоні хоч якісь результати етапів
function ratingSeasonHasResults(season) {
    return Object.keys(season.results || {}).some(gp => {
        const g = season.results[gp] || {};
        return RATING_SESSIONS.some(s => (g[s] || []).length > 0);
    });
}

// Назви етапів сезону, де є результати (у порядку додавання)
function ratingRaceKeys(season) {
    return Object.keys(season.results || {}).filter(gp => {
        const g = season.results[gp] || {};
        return RATING_SESSIONS.some(s => (g[s] || []).length > 0);
    });
}

// Сезон, який рахується з результатів етапів (без таблиці заліку)
function ratingIsResultsSeason(season) {
    return !((season.driversStandings || []).length > 0) && ratingSeasonHasResults(season);
}

// Останній сезон, що рахується з результатів (для тренду)
function ratingLastResultsSeasonKey() {
    const keys = Object.keys(seasonsData).filter(sk => ratingIsResultsSeason(seasonsData[sk]));
    return keys.length ? keys[keys.length - 1] : null;
}

// Статистика з таблиці заліку (Season 1). Включає всіх пілотів, також без стартів.
function ratingFromStandings(sk, season) {
    const flMap = {};
    const flSrc = fastestLapsData[sk] || {};
    Object.keys(flSrc).forEach(n => { flMap[ratingNorm(n)] = flSrc[n]; });

    const out = [];
    (season.driversStandings || []).forEach(d => {
        const key = ratingNorm(d.name);
        const active = (d.pts || 0) > 0 || (d.poles || 0) > 0 || (d.podiums || 0) > 0 || (d.wins || 0) > 0;
        const e = ratingEmptyStats(key, d.name, d.team);
        e.driverId = d.driverId || null;
        e.starts = Math.max(d.races || 0, active ? 1 : 0);
        e.pts = d.pts || 0;
        e.wins = d.wins || 0;
        e.podiums = d.podiums || 0;
        e.poles = d.poles || 0;
        e.dnf = d.dnf || 0;
        e.pp = d.pp || 0;
        e.fl = flMap[key] || 0;
        out.push(e);
    });
    return out;
}

// Статистика з результатів етапів (Season 2 і далі)
function ratingFromResults(season, skipLast) {
    const map = {};
    let keys = ratingRaceKeys(season);
    if (skipLast) keys = keys.slice(0, -1);

    const nameOf = r => r.driverName || r.name || '';
    const teamOf = r => r.teamName || r.team || '';
    const get = r => {
        const key = ratingNorm(nameOf(r));
        if (!map[key]) map[key] = ratingEmptyStats(key, ratingTitle(nameOf(r)), teamOf(r));
        if (teamOf(r)) map[key].team = teamOf(r);
        if (r.driverId) map[key].driverId = r.driverId;
        return map[key];
    };

    keys.forEach(gp => {
        const g = season.results[gp] || {};

        (g.quali || []).forEach(r => {
            const e = get(r);
            if (r.pos === 1) e.poles++;
        });

        (g.sprint || []).forEach(r => {
            const t = String(r.time || '').toUpperCase();
            if (t === 'DNS') return;
            const e = get(r);
            e.pts += r.pts || 0;
            e.pp += r.pp || 0;
        });

        (g.mainRace || []).forEach(r => {
            const t = String(r.time || '').toUpperCase();
            if (t === 'DNS') return;
            const e = get(r);
            e.starts++;
            e.pts += r.pts || 0;
            e.pp += r.pp || 0;
            if (r.fl === true) e.fl++;
            if (t === 'DNF') { e.dnf++; return; }
            if (t === 'DSQ') return;
            if (r.pos === 1) e.wins++;
            if (r.pos <= 3) e.podiums++;
        });
    });

    return Object.values(map);
}

// Рейтинг одного пілота
function ratingValue(e) {
    const W = RATING_WEIGHTS;
    const score = e.pts * W.pts + e.wins * W.win + e.podiums * W.podium + e.poles * W.pole
                + e.fl * W.fl + e.dnf * W.dnf + e.pp * W.pp;
    return RATING_BASE + RATING_SCALE * score / (e.starts + RATING_PRIOR_STARTS);
}

// Список пілотів з рейтингом. skipLast = не враховувати останній етап
// останнього сезону, який рахується з результатів (потрібно для тренду).
function ratingCompute(skipLast) {
    const acc = {};
    const lastRes = ratingLastResultsSeasonKey();

    Object.keys(seasonsData).forEach(sk => {
        const season = seasonsData[sk];
        const hasStandings = (season.driversStandings || []).length > 0;
        let entries = [];
        if (hasStandings) {
            entries = ratingFromStandings(sk, season);
        } else if (ratingSeasonHasResults(season)) {
            entries = ratingFromResults(season, !!skipLast && sk === lastRes);
        }

        entries.forEach(e => {
            if (!acc[e.key]) acc[e.key] = ratingEmptyStats(e.key, e.name, e.team);
            const a = acc[e.key];
            a.starts += e.starts;
            a.pts += e.pts;
            a.wins += e.wins;
            a.podiums += e.podiums;
            a.poles += e.poles;
            a.fl += e.fl;
            a.dnf += e.dnf;
            a.pp += e.pp;
            if (e.team) a.team = e.team;
            if (e.driverId) a.driverId = e.driverId;
        });
    });

    // Додаємо всіх пілотів з teamsData, яких ще немає в рейтингу (0 стартів)
    const idMap = {};
    getAllDrivers().forEach(x => {
        const key = ratingNorm(x.driver.name);
        idMap[key] = x.driver.id;
        if (!acc[key]) acc[key] = ratingEmptyStats(key, x.driver.name, '');
    });

    const list = Object.values(acc).map(a => {
        a.id = a.driverId || idMap[a.key] || null;
        a.rating = ratingValue(a);
        return a;
    });

    // Спочатку ті, хто стартував, потім пілоти без стартів
    list.sort((x, y) => {
        const xs = x.starts > 0 ? 1 : 0;
        const ys = y.starts > 0 ? 1 : 0;
        if (xs !== ys) return ys - xs;
        return (y.rating - x.rating) || (y.pts - x.pts) || (y.wins - x.wins) || x.name.localeCompare(y.name);
    });
    list.forEach((a, i) => { a.rank = i + 1; });
    return list;
}

// Сума штрафних балів (PP) пілота за всі сезони
function driverPP(driver) {
    const key = ratingNorm(driver.name);
    let total = 0;
    Object.keys(seasonsData).forEach(sk => {
        const season = seasonsData[sk];
        if ((season.driversStandings || []).length > 0) {
            season.driversStandings.forEach(d => {
                if (ratingNorm(d.name) === key) total += d.pp || 0;
            });
        } else if (ratingSeasonHasResults(season)) {
            ratingFromResults(season, false).forEach(e => {
                if (e.key === key) total += e.pp || 0;
            });
        }
    });
    return total;
}

function ratingTier(r) {
    if (r >= 1200) return { cls: 'tier-elite', label: 'ELITE' };
    if (r >= 1100) return { cls: 'tier-top', label: 'TOP' };
    if (r >= 1000) return { cls: 'tier-solid', label: 'SOLID' };
    return { cls: 'tier-dev', label: 'DEVELOPING' };
}

function ratingDriverLink(d) {
    return d.id
        ? `<span class="clickable-link" onclick="openDriverDetail('${d.id}')">${d.name}</span>`
        : d.name;
}

function renderRating() {
    const container = document.getElementById('rating-container');
    if (!container) return;

    const list = ratingCompute(false);
    if (!list.length) {
        container.innerHTML = '<p style="color:#8a94a6;">Даних для рейтингу поки немає.</p>';
        return;
    }

    // Тренд: порівнюємо з рейтингом до останнього етапу
    const lastRes = ratingLastResultsSeasonKey();
    let prev = null;
    let lastGp = '';
    if (lastRes) {
        prev = {};
        ratingCompute(true).forEach(x => { prev[x.key] = x; });
        const keys = ratingRaceKeys(seasonsData[lastRes]);
        lastGp = keys[keys.length - 1] || '';
    }

    const trendCell = d => {
        if (!prev) return '<span class="rt-flat">–</span>';
        const p = prev[d.key];
        if (!p) return '<span class="rt-new">NEW</span>';
        const move = p.rank - d.rank;
        const diff = Math.round(d.rating - p.rating);
        const diffTxt = `<span class="rt-diff">${diff > 0 ? '+' : ''}${diff}</span>`;
        if (move > 0) return `<span class="rt-up">▲ ${move}</span>${diffTxt}`;
        if (move < 0) return `<span class="rt-down">▼ ${Math.abs(move)}</span>${diffTxt}`;
        return `<span class="rt-flat">–</span>${diffTxt}`;
    };

    const maxR = Math.max.apply(null, list.map(d => d.rating));
    const minR = Math.min(900, Math.min.apply(null, list.map(d => d.rating)));
    const barW = r => Math.max(4, Math.round((r - minR) / Math.max(1, maxR - minR) * 100));

    // Топ-3 картки (без команд)
    const top3 = list.slice(0, 3).map(d => {
        const t = ratingTier(d.rating);
        return `
            <div class="rating-top-card rank-${d.rank}">
                <div class="rtc-rank">#${d.rank}</div>
                <div class="rtc-name">${ratingDriverLink(d)}</div>
                <div class="rtc-rating">${Math.round(d.rating)}</div>
                <div class="rtc-tier ${t.cls}">${t.label}</div>
                <div class="rtc-stats">
                    <span><b>${d.wins}</b> W</span>
                    <span><b>${d.podiums}</b> POD</span>
                    <span><b>${d.poles}</b> POLE</span>
                    <span><b>${d.fl}</b> FL</span>
                </div>
            </div>`;
    }).join('');

    // Таблиця (без колонки Team)
    const rows = list.map(d => {
        const t = ratingTier(d.rating);
        const prov = d.starts < RATING_PROVISIONAL_STARTS ? ' <span class="rt-prov" title="Мало стартів: рейтинг попередній">PROV</span>' : '';
        return `
            <tr>
                <td>${d.rank}</td>
                <td class="rt-trend">${trendCell(d)}</td>
                <td>${ratingDriverLink(d)}${prov}</td>
                <td>
                    <div class="rt-score-wrap">
                        <strong class="rt-score ${t.cls}">${Math.round(d.rating)}</strong>
                        <div class="rt-bar"><div class="rt-bar-fill ${t.cls}" style="width:${barW(d.rating)}%"></div></div>
                    </div>
                </td>
                <td>${d.starts}</td>
                <td>${d.pts}</td>
                <td>${d.wins}</td>
                <td>${d.podiums}</td>
                <td>${d.poles}</td>
                <td>${d.fl}</td>
                <td>${d.dnf}</td>
                <td style="color:#ff9800;">${d.pp}</td>
            </tr>`;
    }).join('');

    const W = RATING_WEIGHTS;
    const sign = n => (n > 0 ? '+' : '') + n;
    const updated = lastRes
        ? `Оновлено після: <b>${lastRes}${lastGp ? ' · ' + lastGp : ''}</b> · Пілотів у рейтингу: <b>${list.length}</b>`
        : `Розраховано за підсумками <b>Season 1</b>. Пілотів у рейтингу: <b>${list.length}</b>. Після додавання результатів нових етапів рейтинг оновиться автоматично.`;

    container.innerHTML = `
        <p class="rating-updated">${updated}</p>

        <div class="rating-top">${top3}</div>

        <div class="table-responsive">
            <table class="f1-table rating-table">
                <thead>
                    <tr>
                        <th>#</th><th>Trend</th><th>Driver</th><th>Rating</th>
                        <th>Starts</th><th>Pts</th><th>Wins</th><th>Podiums</th><th>Poles</th><th>FL</th><th>DNF</th><th>PP</th>
                    </tr>
                </thead>
                <tbody>${rows}</tbody>
            </table>
        </div>

        <details class="rating-how">
            <summary>Як рахується рейтинг</summary>
            <p>Для кожного пілота береться сума по всіх сезонах. Оцінка складається з:</p>
            <ul>
                <li>очко в заліку: <b>${sign(W.pts)}</b></li>
                <li>перемога (додатково до подіуму): <b>${sign(W.win)}</b></li>
                <li>подіум: <b>${sign(W.podium)}</b></li>
                <li>поул: <b>${sign(W.pole)}</b></li>
                <li>fastest lap: <b>${sign(W.fl)}</b></li>
                <li>DNF: <b>${sign(W.dnf)}</b></li>
                <li>PP (штрафні бали): <b>${sign(W.pp)}</b></li>
            </ul>
            <p>Далі: <b>Rating = ${RATING_BASE} + ${RATING_SCALE} × оцінка / (старти + ${RATING_PRIOR_STARTS})</b>.
            Тому пілот із 1–2 вдалими гонками не обганяє тих, хто стабільно їздить цілий сезон.
            Позначка <b>PROV</b> означає, що в пілота менше ${RATING_PROVISIONAL_STARTS} стартів і рейтинг ще попередній.
            Пілоти без жодного старту стоять унизу з базовим рейтингом ${RATING_BASE}.
            Тренд показує зміну місця й рейтингу після останнього етапу.</p>
        </details>
    `;
}

// ==========================================
// ДЕТАЛЬНА СТОРІНКА ПІЛОТА
// ==========================================
function ordinal(n) {
    if (typeof n === 'string') return n || '-';
    if (typeof n !== 'number' || !n) return '-';
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

// Два показники в один рядок (другий можна не вказувати)
function statPair(l1, v1, l2, v2) {
    const cell = (label, value) => `
        <div>
            <div style="font-size:11px; color:#8a94a6;">${label}</div>
            <div style="font-family:'Formula1-Bold', sans-serif; font-size:22px; color:#fff; margin-top:2px;">${value}</div>
        </div>`;
    const second = l2 === undefined ? '<div></div>' : cell(l2, v2);
    return `<div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:15px;">${cell(l1, v1)}${second}</div>`;
}

function careerRow(label, value, isLast) {
    return `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:12px 0; ${isLast ? '' : 'border-bottom:1px solid #1a202c;'}">
            <span style="font-size:13px; color:#8a94a6;">${label}</span>
            <span style="font-family:'Formula1-Bold', sans-serif; font-size:16px; color:#fff;">${value}</span>
        </div>`;
}

function openDriverDetail(driverId) {
    let foundDriver = null;
    let foundTeam = null;

    Object.keys(teamsData).forEach(tId => {
        const team = teamsData[tId];
        if (team.drivers) {
            const d = team.drivers.find(drv => drv.id === driverId);
            if (d) {
                foundDriver = d;
                foundTeam = team;
            }
        }
    });

    if (!foundDriver) return;

    switchTab('detail');
    const container = document.getElementById('detail-content');
    if (!container) return;

    const s = foundDriver.seasonStats || {};
    const a = foundDriver.allTimeStats || {};

    // Штрафні бали: за всю кар'єру (з заліку й результатів) і за поточний сезон
    const careerPP = a.pp ?? driverPP(foundDriver);

    container.innerHTML = `
        <section class="driver-header-block">
            <img class="driver-header-bg" src="${foundDriver.img}" alt="${foundDriver.name}" onerror="this.style.display='none'">
            <div class="driver-header-overlay"></div>
            <div class="driver-header-info">
                <span class="driver-header-number">#${foundDriver.num}</span>
                <h1 class="driver-header-name">${foundDriver.name.toUpperCase()}</h1>
                <p class="driver-header-meta">${foundTeam ? teamWithLogo(foundTeam.name, 'lg') : ''} <span style="margin:0 8px;">|</span> ${foundDriver.country || ''}</p>
            </div>
        </section>

        <section class="driver-full-stats" style="margin-top:40px;">
            <h2 style="font-family:'Formula1-Bold', sans-serif; font-size:26px; color:#fff; margin-bottom:20px; letter-spacing:1px;">STATISTICS</h2>

            <div class="driver-stats-layout">
                <div>
                    <h3 style="font-family:'Formula1-Bold', sans-serif; font-size:20px; color:#fff; margin-bottom:20px;">${s.seasonLabel || 'SEASON'}</h3>

                    <div style="margin-bottom:25px;">
                        ${statPair('SEASON POSITION', ordinal(s.pos), 'SEASON POINTS', s.pts ?? 0)}
                    </div>

                    <div style="border-top:1px solid #232a3a; padding-top:20px; margin-bottom:25px;">
                        ${statPair('Grand Prix Races', s.gpRaces ?? 0, 'Grand Prix Points', s.gpPts ?? 0)}
                        ${statPair('Grand Prix Wins', s.gpWins ?? 0, 'Grand Prix Podiums', s.gpPodiums ?? 0)}
                        ${statPair('Grand Prix Poles', s.gpPoles ?? 0, 'Grand Prix Top 10s', s.gpTop10s ?? 0)}
                        ${statPair('Fastest Laps', s.fastestLaps ?? 0, 'DNFs', s.dnfs ?? 0)}
                        ${statPair('Penalty Points (PP)', s.pp ?? 0)}
                    </div>

                    <div style="border-top:1px solid #232a3a; padding-top:20px;">
                        ${statPair('Sprint Races', s.sprintRaces ?? 0, 'Sprint Points', s.sprintPts ?? 0)}
                        ${statPair('Sprint Wins', s.sprintWins ?? 0, 'Sprint Podiums', s.sprintPodiums ?? 0)}
                        ${statPair('Sprint Poles', s.sprintPoles ?? 0, 'Sprint Top 10s', s.sprintTop10s ?? 0)}
                    </div>
                </div>

                <div style="background:#0d1017; border-radius:8px; padding:25px; border:1px solid #1f2636; height:fit-content;">
                    <h3 style="font-family:'Formula1-Bold', sans-serif; font-size:18px; color:#fff; margin-bottom:20px; letter-spacing:1px;">CAREER STATS</h3>
                    ${careerRow('Grands Prix Entered', a.gpEntered ?? a.races ?? 0)}
                    ${careerRow('Career Points', a.pts ?? 0)}
                    ${careerRow('Highest Race Finish', a.highestFinish || '-')}
                    ${careerRow('Podiums', a.podiums ?? 0)}
                    ${careerRow('Highest Grid Position', a.highestGrid || '-')}
                    ${careerRow('Pole Positions', a.poles ?? 0)}
                    ${careerRow('World Championships', a.titles ?? 0)}
                    ${careerRow('DNFs', a.dnfs ?? 0)}
                    ${careerRow('Penalty Points (PP)', careerPP, true)}
                </div>
            </div>
        </section>
    `;
}

// ==========================================
// ДЕТАЛЬНА СТОРІНКА КОМАНДИ
// ==========================================
function openTeamDetail(teamId) {
    const team = teamsData[teamId];
    if (!team) return;

    switchTab('detail');
    const container = document.getElementById('detail-content');
    if (!container) return;

    let driversHTML = '';
    if (team.drivers && team.drivers.length > 0) {
        driversHTML = team.drivers.map(d => `
            <div class="driver-card" onclick="openDriverDetail('${d.id}')">
                <img class="driver-card-bg" src="${d.img}" alt="${d.name}" onerror="this.style.display='none'">
                <div class="driver-card-overlay"></div>
                <div class="driver-info">
                    <span class="driver-number">#${d.num}</span>
                    <h3 class="driver-name">${d.name.toUpperCase()}</h3>
                    <span class="driver-country">${d.country}</span>
                </div>
            </div>
        `).join('');
    } else {
        driversHTML = '<p style="color:#8a94a6;">Немає зареєстрованих пілотів.</p>';
    }

    const s = team.statsSeason || {};
    const a = team.statsAllTime || {};

    container.innerHTML = `
        <section class="team-header-block" style="position:relative; height:220px; border-radius:8px; overflow:hidden; margin-bottom:30px; background:#151922; border:1px solid #232a3a; display:flex; align-items:center;">
            <img src="${team.logoImg || ''}" alt="${team.name} Logo" style="position:absolute; top:0; left:0; width:100%; height:100%; object-fit:cover; object-position:center; z-index:1;" onerror="this.style.display='none'">
            <div style="position:absolute; top:0; left:0; width:100%; height:100%; background:linear-gradient(90deg, rgba(21,25,34,0.9) 0%, rgba(21,25,34,0.5) 45%, rgba(21,25,34,0) 80%); z-index:2;"></div>
            <h1 style="position:relative; z-index:3; padding:28px; margin:0; font-family:'Formula1-Bold', sans-serif; font-size:36px; letter-spacing:1px;">${teamWithLogo(team.name.toUpperCase(), 'lg')}</h1>
        </section>

        ${team.carImg ? `
        <div class="team-car-preview" style="width:100%; max-width:700px; margin:0 auto 30px auto; display:flex; justify-content:center; align-items:center; overflow:hidden;">
            <img src="${team.carImg}" alt="${team.name} Car" style="width:100%; height:auto; object-fit:contain;" onerror="this.style.display='none'">
        </div>
        ` : ''}

        <section class="team-drivers-block" style="margin-bottom:40px;">
            <h2 style="font-family:'Formula1-Bold', sans-serif; font-size:18px; border-bottom:2px solid #F6FF00; padding-bottom:8px; margin-bottom:20px; letter-spacing:1px;">DRIVERS</h2>
            <div class="drivers-grid">
                ${driversHTML}
            </div>
        </section>

        <section class="team-full-statistics-section" style="margin-top: 40px;">
            <h2 style="font-family:'Formula1-Bold', sans-serif; font-size:26px; color:#fff; margin-bottom:20px; letter-spacing:1px;">STATISTICS</h2>

            <div class="driver-stats-layout">
                <div class="season-stats-container">
                    <h3 style="font-family:'Formula1-Bold', sans-serif; font-size:20px; color:#fff; margin-bottom:20px; letter-spacing:0.5px;">${s.seasonLabel || 'SEASON'}</h3>

                    <div style="margin-bottom:25px;">
                        ${statPair('SEASON POSITION', s.pos || '-', 'SEASON POINTS', s.pts ?? 0)}
                    </div>

                    <div style="border-top: 1px solid #232a3a; padding-top: 20px; margin-bottom: 25px;">
                        ${statPair('Grand Prix Races', s.gpRaces ?? 0, 'Grand Prix Points', s.gpPts ?? 0)}
                        ${statPair('Grand Prix Wins', s.gpWins ?? 0, 'Grand Prix Podiums', s.gpPodiums ?? 0)}
                        ${statPair('Grand Prix Poles', s.gpPoles ?? 0, 'Grand Prix Top 10s', s.gpTop10s ?? 0)}
                        ${statPair('Fastest Laps', s.fastestLaps ?? 0, 'DNFs', s.dnfs ?? 0)}
                    </div>

                    <div style="border-top: 1px solid #232a3a; padding-top: 20px;">
                        ${statPair('Sprint Races', s.sprintRaces ?? 0, 'Sprint Points', s.sprintPts ?? 0)}
                        ${statPair('Sprint Wins', s.sprintWins ?? 0, 'Sprint Podiums', s.sprintPodiums ?? 0)}
                        ${statPair('Sprint Poles', s.sprintPoles ?? 0, 'Sprint Top 10s', s.sprintTop10s ?? 0)}
                    </div>
                </div>

                <div class="team-summary-box" style="background: #0d1017; border-radius: 8px; padding: 25px; border: 1px solid #1f2636; height: fit-content;">
                    <h3 style="font-family:'Formula1-Bold', sans-serif; font-size:18px; color:#fff; margin-bottom:20px; letter-spacing:1px;">TEAM SUMMARY</h3>
                    ${careerRow('Grands Prix Entered', a.gpEntered ?? 0)}
                    ${careerRow('Team Points', a.pts ?? 0)}
                    ${careerRow('Highest Race Finish', a.highestFinish || '-')}
                    ${careerRow('Podiums', a.podiums ?? 0)}
                    ${careerRow('Highest Grid Position', a.highestGrid || '-')}
                    ${careerRow('Pole Positions', a.poles ?? 0)}
                    ${careerRow('World Championships', a.championships ?? 0, true)}
                </div>
            </div>
        </section>
    `;
}

// ==========================================
// БІЧНЕ МЕНЮ ТА UGS TV (TWITCH)
// ==========================================
const TWITCH_CHANNEL = 'UGS_TV';

function toggleSideMenu() {
    const open = document.getElementById('side-menu').classList.toggle('open');
    document.getElementById('side-overlay').classList.toggle('open', open);
}

function closeSideMenu() {
    const menu = document.getElementById('side-menu');
    const overlay = document.getElementById('side-overlay');
    if (menu) menu.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
}

function loadTwitch() {
    const player = document.getElementById('tv-player');
    const chat = document.getElementById('tv-chat');
    if (!player || !chat || player.firstChild) return;

    // Twitch вимагає домен сайту в параметрі parent
    const parent = window.location.hostname || 'localhost';

    player.innerHTML = `
        <iframe
            src="https://player.twitch.tv/?channel=${TWITCH_CHANNEL}&parent=${parent}&autoplay=true&muted=false"
            allowfullscreen
            allow="autoplay; fullscreen"
            frameborder="0"></iframe>`;

    chat.innerHTML = `
        <iframe
            src="https://www.twitch.tv/embed/${TWITCH_CHANNEL}/chat?parent=${parent}&darkpopout"
            frameborder="0"></iframe>`;
}

function unloadTwitch() {
    const player = document.getElementById('tv-player');
    const chat = document.getElementById('tv-chat');
    if (player) player.innerHTML = '';
    if (chat) chat.innerHTML = '';
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSideMenu();
});