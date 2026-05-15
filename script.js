// Liste der Vatertag-Daten (Vatertag ist in Deutschland immer Christi Himmelfahrt)
// Das ist 39 Tage nach Ostersonntag (immer ein Donnerstag)
const vatertagDates = [
    new Date('2026-05-14'),  // Vatertag 2026
    new Date('2027-05-06'),  // Vatertag 2027
    new Date('2028-05-25'),  // Vatertag 2028
    new Date('2029-05-10'),  // Vatertag 2029
    new Date('2030-05-30'),  // Vatertag 2030
    new Date('2031-05-22'),  // Vatertag 2031
    new Date('2032-05-06'),  // Vatertag 2032
    new Date('2033-05-26'),  // Vatertag 2033
    new Date('2034-05-18'),  // Vatertag 2034
    new Date('2035-05-03'),  // Vatertag 2035
    new Date('2036-05-22'),  // Vatertag 2036
    new Date('2037-05-14'),  // Vatertag 2037
    new Date('2038-05-27'),  // Vatertag 2038
    new Date('2039-05-19'),  // Vatertag 2039
    new Date('2040-05-10'),  // Vatertag 2040
    new Date('2041-05-30'),  // Vatertag 2041
    new Date('2042-05-15'),  // Vatertag 2042
    new Date('2043-05-07'),  // Vatertag 2043
    new Date('2044-05-26'),  // Vatertag 2044
    new Date('2045-05-11'),  // Vatertag 2045
    new Date('2046-05-31'),  // Vatertag 2046
    new Date('2047-05-23'),  // Vatertag 2047
    new Date('2048-05-07'),  // Vatertag 2048
    new Date('2049-05-27'),  // Vatertag 2049
    new Date('2050-05-19'),  // Vatertag 2050
    new Date('2051-05-04'),  // Vatertag 2051
    new Date('2052-05-23'),  // Vatertag 2052
    new Date('2053-05-15'),  // Vatertag 2053
    new Date('2054-05-28'),  // Vatertag 2054
    new Date('2055-05-20'),  // Vatertag 2055
    new Date('2056-05-11'),  // Vatertag 2056
    new Date('2057-05-31'),  // Vatertag 2057
    new Date('2058-05-16'),  // Vatertag 2058
    new Date('2059-05-08'),  // Vatertag 2059
    new Date('2060-05-27'),  // Vatertag 2060
    new Date('2061-05-12'),  // Vatertag 2061
    new Date('2062-06-01'),  // Vatertag 2062
    new Date('2063-05-24'),  // Vatertag 2063
    new Date('2064-05-08'),  // Vatertag 2064
    new Date('2065-05-28'),  // Vatertag 2065
    new Date('2066-05-20'),  // Vatertag 2066
    new Date('2067-05-05'),  // Vatertag 2067
    new Date('2068-05-24'),  // Vatertag 2068
    new Date('2069-05-16'),  // Vatertag 2069
    new Date('2070-05-29'),  // Vatertag 2070
    new Date('2071-05-21'),  // Vatertag 2071
    new Date('2072-05-12'),  // Vatertag 2072
    new Date('2073-06-01'),  // Vatertag 2073
    new Date('2074-05-17'),  // Vatertag 2074
    new Date('2075-05-09'),  // Vatertag 2075
    new Date('2076-05-28'),  // Vatertag 2076
    new Date('2077-05-13'),  // Vatertag 2077
    new Date('2078-06-02'),  // Vatertag 2078
    new Date('2079-05-25'),  // Vatertag 2079
    new Date('2080-05-09'),  // Vatertag 2080
    new Date('2081-05-29'),  // Vatertag 2081
    new Date('2082-05-21'),  // Vatertag 2082
    new Date('2083-05-06'),  // Vatertag 2083
    new Date('2084-05-25'),  // Vatertag 2084
    new Date('2085-05-17'),  // Vatertag 2085
    new Date('2086-05-30'),  // Vatertag 2086
    new Date('2087-05-22'),  // Vatertag 2087
    new Date('2088-05-13'),  // Vatertag 2088
    new Date('2089-06-02'),  // Vatertag 2089
];

// Funktion zum Finden des nächsten Vatertags
function getNextVatertag() {
    const now = new Date();
    now.setHours(0, 0, 0, 0); // Auf Mitternacht setzen für Vergleich
    
    for (let date of vatertagDates) {
        const vatertagDate = new Date(date);
        vatertagDate.setHours(0, 0, 0, 0);
        
        if (vatertagDate >= now) {
            return vatertagDate;
        }
    }
    
    return null; // Falls keine zukünftigen Daten vorhanden
}

// Funktion zum Finden der nächsten 5 Vatertage nach dem aktuellen
function getNextFiveVatertage() {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    
    const upcomingDates = [];
    let foundCurrent = false;
    
    for (let date of vatertagDates) {
        const vatertagDate = new Date(date);
        vatertagDate.setHours(0, 0, 0, 0);
        
        if (vatertagDate >= now && !foundCurrent) {
            foundCurrent = true;
            continue; // Überspringe den aktuellen (für den der Countdown läuft)
        }
        
        if (foundCurrent && upcomingDates.length < 5) {
            upcomingDates.push(vatertagDate);
        }
        
        if (upcomingDates.length >= 5) {
            break;
        }
    }
    
    return upcomingDates;
}

// Funktion zum Anzeigen der kommenden Vatertage
function displayUpcomingDates() {
    const upcomingDates = getNextFiveVatertage();
    const datesList = document.getElementById('dates-list');
    datesList.innerHTML = '';
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    upcomingDates.forEach(date => {
        const li = document.createElement('li');
        li.textContent = date.toLocaleDateString('de-DE', options);
        datesList.appendChild(li);
    });
}


// Funktion zur Überprüfung, ob heute Vatertag ist
function isToday(date) {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
}

// Countdown aktualisieren
function updateCountdown() {
    const nextVatertag = getNextVatertag();
    
    if (!nextVatertag) {
        document.getElementById('countdown').innerHTML = '<p>Keine weiteren Vatertag-Daten verfügbar.</p>';
        return;
    }
    
    const now = new Date();
    
    // Prüfen, ob heute Vatertag ist
    if (isToday(nextVatertag)) {
        document.getElementById('celebration').classList.remove('hidden');
        document.getElementById('countdown').classList.add('hidden');
        document.getElementById('date-info').textContent = '';
        return;
    } else {
        document.getElementById('celebration').classList.add('hidden');
        document.getElementById('countdown').classList.remove('hidden');
    }
    
    // Zeitdifferenz berechnen
    const difference = nextVatertag - now;
    
    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        // Werte anzeigen
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        
        // Datum anzeigen
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = nextVatertag.toLocaleDateString('de-DE', options);
        document.getElementById('date-info').textContent = `Nächster Vatertag: ${dateString}`;
    }
}

// Countdown starten
displayUpcomingDates();
updateCountdown();
setInterval(updateCountdown, 1000);
