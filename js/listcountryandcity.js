let countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba",
    "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda",
    "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central Arfrican Republic", "Chad", "Chile", "China", "Colombia", "Congo",
    "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica",
    "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands",
    "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
    "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras",
    "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan",
    "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia",
    "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
    "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco",
    "Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua",
    "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru",
    "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre & Miquelon", "Samoa",
    "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia",
    "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Kitts & Nevis",
    "St Lucia", "St Vincent", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania",
    "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu",
    "Vatican City", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

let cities = ["Alupka", "Alushta", "Armyansk", "Bakhchisaray", "Belogorsk", "Dzhankoy", "Kerch", "Krasnoperekopsk", "Sevastopol", "Simferopol",
    "Sudak", "Feodosiya", "Shchelkino", "Yalta", "Bar", "Bershad", "Vinnytsia", "Gaysin", "Zhmerynka", "Kazatin", "Kalinovka", "Ladyzhin", "Nemirov",
    "Cellar", "Tulchin", "Khmelnik", "Shargorod", "Yampol", "Berestechko", "Gorokhov", "Kivertsy", "Kovel", "Lutsk", "Novovolynsk", "Rozhische",
    "Ustilug", "Apostolove", "Verkhnodniprovsk", "Volnogorsk", "Dneprodzerzhinsk", "Dnipro", "Manganese", "Nikopol", "Novomoskovsk",
    "Ordzhonikidze", "Pavlograd", "Pereshchepino", "Pershotravensk", "Podgorodnoe", "Pyatikhatki", "Synelnykove",
    "Ternovka", "Avdeevka", "Artemivsk", "Volnovakha", "Horlivka", "Dzerzhinsk", "Debaltseve", "Dobropillya",
    "Donetsk", "Druzhkivka", "Yenakiieve", "Zhdanivka", "Kirovske", "Kramatorsk", "Krasny Liman",
    "Konstantinivka", "Mariupol", "Makiivka", "Novogrodovka", "Selydove", "Snezhnoe", "Khartsyzsk", "Shakhtyorsk",
    "Yasinovataya", "Andrushivka", "Baranivka", "Berdichev", "Zhytomyr", "Korostyshev", "Malin", "Ovruch", "Radomyshl",
    "Berehove", "Vynohradiv", "Irshava", "Mukacheve", "Perechin", "Rakhov", "Svalyava", "Tyachiv", "Uzhgorod", "Khust", "Chop", "Berdyansk",
    "Vasilyevka", "Gulyaypole", "Dneprorudnoe", "Zaporizhia", "Melitopol", "Molochansk", "Orekhov", "Canopies",
    "Prymorsk", "Tokmak", "Energodar", "Bolekhov", "Burshtyn", "Halych", "Gorodenka", "Valley", "Ivano-Frankivsk", "Kalush", "Kolomyia", "Kosov",
    "Nadvirna", "Rogatin", "Tysmenytsya", "Tlumach", "Yaremche", "Bila Tserkva", "Boryspil", "Boyarka", "Brovary", "Vyshhorod", "Irpin", "Kiev",
    "Myronivka", "Butts", "Pereyaslav", "Pripyat", "Slavutich", "Ukrainka", "Fastov", "Chernobyl", "Yagotin", "Alexandria", "Znamenka",
    "Svitlovodsk", "Alchevsk", "Bryanka", "Vakhrusheve", "Zolotoye", "Sorokyne", "Krasnyi Luch", "Lugansk", "Miusynsk",
    "Molodohvardiysk", "Novopskov", "Pervomaisk", "Petrovsky", "Popasnaya", "Freedom", "Rovenki", "Rubezhnoe", "Svatovo",
    "Sverdlovsk", "Severodonetsk", "Starobilsk", "Stakhanov", "Sukhodilsk", "Teplogorsk", "Chervonopartizansk", "Belz", "Beaver", "Borislav",
    "Brody", "Drogobych", "Dublyany", "Zhydachiv", "Terebovlya", "Lviv", "Mostiska", "Przemyshlyany", "Pustomyty", "Sambir", "Sokal",
    "Stryi", "Truskavets", "Uhniv", "Hyrov", "Chervonograd", "Bashtanka", "Voznesensk", "Mykolaiv", "Ochakiv",
    "Pervomaisk", "Yuzhnoukrainsk", "Balta", "Belgorod-Dniester", "Bolgrad", "Izmail", "Kiliya", "Kodyma", "Podilsk", "Odessa",
    "Tatarbunary", "Teplodar", "Southern", "Gadyach", "Globino", "Comb", "Karlivka", "Kremenchug", "Kobelyaki", "Horishni Plavni", "Lokhvytsya",
    "Lubny", "Mirgorod", "Piryatin", "Poltava", "Khorol", "Zavodske", "Berezne", "Dubno", "Dubrovytsya", "Zdolbunov", "Korets", "Kostopol",
    "Kuznetsovsk", "Sarny", "Buryn", "Hlukhiv", "Krolevets", "Konotop", "Romny", "Sumy", "Trostyanets",
    "Shostka", "Berezhany", "Borshchev", "Buchach", "Zbarazh", "Kremenets", "Pochaiv", "Skalat", "Ternopil", "Terebovlya", "Chortkiv",
    "Lozova", "Kharkiv", "Chuhuiv", "Berislav", "Henichesk", "Kakhovka", "Nova Kakhovka", "Skadovsk", "Kherson", "Tsyurupinsk", "Volochysk",
    "Derazhnya", "Izyaslav", "Krasilov", "Netishin", "Polonnoe", "Slavuta", "Starokonstantinov", "Khmelnitsky", "Shepetivka", "Vatutine",
    "Zhashkiv", "Zvenyhorodka", "Zolotonosha", "Kamenka", "Kanev", "Korsun-Shevchenkivskyy", "Monastery", "Uman", "Khrystynivka", "Cherkasy",
    "Chyhyryn", "Shpola", "Bakhmach", "Bobrovytsya", "Borzna", "Desna", "Ichnya", "Koryukivka", "Mena", "Nizhyn", "Novhorod-Siverskyi",
    "Nosivka", "Priluki", "Semenivka", "Chernihiv", "Shchors", "Vyzhnytsya", "Zastavna", "Novoselitsa", "Sokyryany", "Khotin", "Chernivtsi"]

autocomplete(document.querySelector('#inputcountry'), countries);
autocomplete(document.querySelector('#inputcity'), cities);


function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                b = document.createElement("DIV");
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function (e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });

    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) {
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}