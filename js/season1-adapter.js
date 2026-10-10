// Підключати ПІСЛЯ main.js
(function () {
    const SEASON = "Season 1";

    const nameAlias = {
        "volodymyr mykhailyuk": "volodymyr mykhalyuk",
        "dmytro homka": "dmytro khomka",
        "bogdan voskobiinyk": "bohdan voskobiinyk",
        "illya khudavskyi": "illia khudavskyi",
        "roman rovsh": "roman kovsh"
    };
    const normName = n => {
        const k = String(n).trim().toLowerCase();
        return nameAlias[k] || k;
    };

    const teamAlias = {
        "Red Bull Racing": "redbull", "Ferrari": "ferrari", "McLaren": "mclaren",
        "Mercedes": "mercedes", "Aston Martin": "astonmartin", "Alpine": "alpine",
        "Haas F1 Team": "haas", "Racing Bulls": "rb", "Williams": "williams",
        "Kick Sauber": "sauber", "Cadillac": "cadillac"
    };

    const driverIds = {};
    Object.keys(teamsData).forEach(tid => {
        (teamsData[tid].drivers || []).forEach(d => { driverIds[normName(d.name)] = d.id; });
    });

    const titleCase = s => String(s).toLowerCase().replace(/(^|[\s-])([a-zа-яіїєґ])/g, (m, p, c) => p + c.toUpperCase());

    const sessionMap = { sprintqualifying: "sprintQuali", sprintrace: "sprint", qualifying: "quali", race: "mainRace" };

    // ---------- РЕЗУЛЬТАТИ ЕТАПІВ ----------
    const results = {};
    raceResults.forEach(round => {
        const gpKey = `R${String(round.round).padStart(2, '0')} ${round.country}`;
        const gp = { sprintQuali: [], sprint: [], quali: [], mainRace: [] };
        Object.keys(round.sessions).forEach(rawKey => {
            const key = sessionMap[rawKey.toLowerCase()];
            if (!key) return;
            gp[key] = round.sessions[rawKey].map(r => ({
                pos: r.pos,
                number: r.number,
                driverId: driverIds[normName(r.name)] || null,
                driverName: titleCase(r.name),
                teamId: teamAlias[r.team] || null,
                teamName: r.team,
                time: r.time,
                pts: r.points ?? 0
            }));
        });
        results[gpKey] = gp;
    });

    // ---------- КУБОК КОНСТРУКТОРІВ (ваші бали) ----------
    // [назва, очки, перемоги, подіуми]
    const constructorsRaw = [
        ["Alpine", 320, 3, 18], ["Aston Martin", 206, 9, 10], ["Kick Sauber", 146, 0, 7],
        ["Mercedes", 139, 1, 4], ["Haas F1 Team", 133, 0, 1], ["Red Bull Racing", 112, 0, 1],
        ["Williams", 80, 1, 1], ["Ferrari", 58, 0, 0], ["McLaren", 34, 0, 0], ["Racing Bulls", 31, 0, 0]
    ];
    const constructorsStandings = constructorsRaw.map((c, i) => ({
        pos: i + 1, teamId: teamAlias[c[0]] || null, name: c[0], pts: c[1], wins: c[2], podiums: c[3]
    }));

    // ---------- ОСОБИСТИЙ ЗАЛІК (ваші бали) ----------
    // [номер, імʼя, команда, очки, перемоги, поули, гонки, DNF, подіуми, PP]
    const driversRaw = [
        ["85","Yulian HULYK","Aston Martin",200,9,12,12,1,10,0],
        ["15","Yaroslav PANKRATOV","Alpine",171,2,1,15,3,11,0],
        ["10","Yaroslav LOBODA","Alpine",167,1,0,15,3,8,0],
        ["40","Volodymyr SHAKULA","Kick Sauber",142,0,0,15,1,7,6],
        ["22","Yevhenii PANCHENKO","Mercedes",130,1,2,13,2,4,1],
        ["09","Volodymyr MYKHALYUK","Red Bull Racing",70,0,0,15,0,0,1],
        ["82","Hlib BRATUS","Haas F1 Team",69,0,0,8,0,1,0],
        ["59","Rostyslav PYLIAK","Ferrari",55,0,0,12,2,0,2],
        ["76","Yaroslav MURCHIK","Red Bull Racing",52,0,0,6,1,1,0],
        ["87","Stanislav MARCHENKO","Haas F1 Team",45,0,0,10,2,0,0],
        ["29","Nazar SHTEFANIUK","Reserve",35,1,0,3,0,1,0],
        ["65","Vladyslav POROSHENKO","Reserve",25,1,0,3,2,0,0],
        ["18","Mykhailo ILLIUK","Williams",23,0,0,11,4,0,1],
        ["06","Olexandr KORZHOVSKYI","Reserve",18,0,0,1,0,1,0],
        ["64","Denys ZABARNYI","Reserve",13,0,1,0,0,0,0],
        ["46","Artem VODOPIANOV","Reserve",13,0,0,3,0,0,0],
        ["39","Nazarii PETRIV","Racing Bulls",12,0,0,7,2,0,10],
        ["23","Ivan KOBRYN","McLaren",10,0,0,6,2,0,0],
        ["68","Dmytro SHOLOPKO","Racing Bulls",7,0,0,9,4,0,2],
        ["52","Maksym FILIPOV","Mercedes",6,0,0,9,3,0,3],
        ["55","Illia KHUDAVSKYI","Reserve",5,0,0,2,0,0,0],
        ["27","Maksym MYKHLYK","Ferrari",3,0,0,11,1,0,10],
        ["11","Viktor BEREZHNYI","Reserve",3,0,0,1,0,0,1],
        ["88","Maksym KHODAKIVSKYI","Williams",2,0,0,5,2,0,0],
        ["24","Stanislav KRICHFALOVSKYI","Kick Sauber",2,0,0,11,3,0,1],
        ["05","Denys ILCHUK","Reserve",2,0,0,2,0,0,0],
        ["20","Fedir DAVYDOV","Reserve",2,0,0,2,0,0,0],
        ["28","Olexandr SOPOTYAK","Aston Martin",0,0,0,3,1,0,2],
        ["91","Oleh LIASHKO","McLaren",0,0,0,5,5,0,30],
        ["188","Olexandr SAVIN","Reserve",0,0,0,1,0,0,0],
        ["99","Maksym KYRYLCHUK","Reserve",0,0,0,1,0,0,0],
        ["35","Roman KOVSH","Reserve",0,0,0,1,1,0,0],
        ["42","Yevhen BARANOV","Reserve",0,0,0,0,0,0,0],
        ["19","Serhii SOKHAN","Reserve",0,0,0,0,0,0,0],
        ["95","Hlib HOLOVKOV","Reserve",0,0,0,0,0,0,0],
        ["09","Klym YELISIEIEV","Reserve",0,0,0,1,1,0,0],
        ["32","Dmytro POLIANSKYI","Reserve",0,0,0,1,0,0,0],
        ["16","Olexandr LARIONOV","Reserve",0,0,0,3,2,0,0],
        ["07","Igor DOVHAN","Reserve",0,0,0,1,1,0,0],
        ["14","Bohdan VOSKOBIINYK","Reserve",0,0,0,3,2,0,0],
        ["03","Maks ZHUK","Reserve",0,0,0,1,0,0,0],
        ["45","Oleksiy FEDOTOV","Reserve",0,0,0,3,2,0,0],
        ["95","Dmytro HOMKA","Reserve",0,0,0,1,1,0,0]
    ];
    const driversStandings = driversRaw.map((d, i) => ({
        pos: i + 1,
        number: d[0],
        driverId: driverIds[normName(titleCase(d[1]))] || null,
        name: titleCase(d[1]),
        team: d[2],
        pts: d[3], wins: d[4], poles: d[5], races: d[6], dnf: d[7], podiums: d[8], pp: d[9]
    }));

    seasonsData[SEASON].results = results;
    seasonsData[SEASON].driversStandings = driversStandings;
    seasonsData[SEASON].constructorsStandings = constructorsStandings;
})();