class card {
    constructor(picHint, arrOrder,) {

        this.picHint = picHint;
        this.arrOrder = arrOrder;
        this.isPlayed = true;
    }
}

var index = 0, indexCard = 0, columns, characters, noneMessage = false,closeW = false, d1, btn1, ntn2;
var eh1 = "pictures/cards/card1.jpg";
var eh2 = "pictures/cards/card2.jpg";
var eh3 = "pictures/cards/card3.jpg";
var mh1 = "pictures/cards/card5.jpg";
var mh2 = "pictures/cards/card6.jpg";
var mh3 = "pictures/cards/card7.jpg";
var hh1 = "pictures/cards/card8.jpg";
var hh2 = "pictures/cards/card9.jpg";
var hh3 = "pictures/cards/card10.jpg";
var arrEh1 = [4, 6, 2, 1, 5, 3];
var arrEh2 = [2, 4, 6, 3, 1, 5];
var arrEh3 = [6, 4, 2, 1, 3, 5];
var arrMh1 = [2, 6, 4, 8, 1, 5, 3, 7];
var arrMh2 = [6, 8, 4, 2, 5, 7, 3, 1];
var arrMh3 = [8, 2, 6, 4, 7, 1, 5, 3];
var arrHh1 = [10, 6, 8, 4, 2, 5, 7, 9, 3, 1];
var arrHh2 = [6, 10, 4, 8, 2, 5, 3, 1, 9, 7];
var arrHh3 = [2, 4, 10, 8, 6, 9, 7, 1, 3, 5];
var c1 = new card(eh1, arrEh1);
var c2 = new card(eh2, arrEh2);
var c3 = new card(eh3, arrEh3);
var c4 = new card(mh1, arrMh1);
var c5 = new card(mh2, arrMh2);
var c6 = new card(mh3, arrMh3);
var c7 = new card(hh1, arrHh1);
var c8 = new card(hh2, arrHh2);
var c9 = new card(hh3, arrHh3);
var arrEasyCards = [c1, c2, c3];
var arrMidlleCards = [c4, c5, c6];
var arrHardCards = [c7, c8, c9];
var currentCard,currentArr;
var arrPics = ["pictures/pic/dog.png", "pictures/pic/bone1.png", "pictures/pic/kitten2.png", "pictures/pic/wool.png", "pictures/pic/hamster1.png", "pictures/pic/wheel.png", "pictures/pic/rabbit1.png", "pictures/pic/carrot1.png", "pictures/pic/horse.png", "pictures/pic/saddle1.png"];

//פתיחת תפריט צף
function openNav() {
    document.getElementById("Menu").style.marginTop = "0%";
    document.getElementById("Menu").style.marginRight = "10%";
    document.getElementById("Menu").setAttribute("z-index", "5");
    document.getElementById("openMenu").setAttribute("z-index", "5");
}
//סגירת תפריט צף
function closeNav() {
    document.getElementById("Menu").style.marginTop = "-60%";
    document.getElementById("openMenu").setAttribute("z-index", "1");
    document.getElementById("Menu").setAttribute("z-index", "1");
    document.getElementById("openMenu").style.marginTop = "0%";
}

//החלפת דפים בהתאם לבחירה
function options() {
    location.replace("options.html");
}
function selectLevel() {
    localStorage.setItem("isGame", false);
}
function selectL() {
    location.replace("selectLevel.html");

}
function instructions() {
    location.replace("instructions.html");
}

//פונקציה המציגה אפשרות יציאה
function exit() {
    var divC = document.createElement("div");
    var but1C = document.createElement("button");
    var but2C = document.createElement("button");
    divC.classList.add("cardMess");
    divC.classList.add("exit");
    but1C.classList.add("yes");
    but2C.classList.add("no");
    but1C.onclick = function () {
        window.close();
    }
    but2C.onclick = function () {
        document.getElementsByClassName("optionsContainer")[0].removeChild(divC);
    }
    divC.appendChild(but1C);
    divC.appendChild(but2C);
    document.getElementsByClassName("optionsContainer")[0].appendChild(divC);
}
//פונקציה המציגה הודעה להמשך המשחק הקודם
function levels() {
    if (localStorage.getItem("isGame") == "true") {
        var div1 = document.createElement("div");
        var but1 = document.createElement("button");
        var but2 = document.createElement("button");
        div1.innerHTML = "<p>האם ברצונך להמשיך את המשחק?</p>";
        div1.classList.add("cardMess");
        div1.classList.add("continueMess");
        but1.classList.add("yes");
        but2.classList.add("no");
        but1.onclick = function () {
            location.replace("game.html");
        }
        but2.onclick = function () {
            localStorage.setItem("isGame", false);
            location.replace("selectLevel.html");
        } 
        div1.appendChild(but1);
        div1.appendChild(but2);
        document.getElementsByClassName("optionsContainer")[0].appendChild(div1);
    }

    else {
    location.replace("selectLevel.html");
    }
}

//בחירת רמת משחק
function level1(){
    localStorage.setItem("level", 1)
    location.replace("game.html");

}
function level2() {
    localStorage.setItem("level", 2)
    location.replace("game.html");

}
function level3() {
    localStorage.setItem("level", 3)
    location.replace("game.html");

}
//בניית המשחק בהתאם לרמה שנבחרה
function buildGame() {

    if (noneMessage) {
        document.getElementsByClassName("contain")[0].removeChild(d1);
        var lst2 = document.getElementsByTagName("tr");
        for (var i = 0; i < 2; i++)
            document.getElementsByTagName("table")[0].removeChild(lst2[0]);
        document.getElementsByClassName("hint")[0].removeChild(document.getElementsByClassName("hint")[0].lastChild);
        localStorage.setItem("level", Number(localStorage.getItem("level")) + 1);
    }
    if (localStorage.getItem("level") == 1) {
        currentArr = arrEasyCards;
        columns = 3
        characters = 6
    }
    if (localStorage.getItem("level") == 2) {
        currentArr = arrMidlleCards;
        columns = 4;
        characters = 8;

    }
    if (localStorage.getItem("level") == 3) {
        currentArr = arrHardCards;
        columns = 5;
        characters = 10;
    }
    if (characters == 6) {
        document.getElementById("objectsContainer").style.display = "grid";
        document.getElementById("objectsContainer").style.gridTemplateRows = "1fr 1fr";
        document.getElementById("objectsContainer").style.gridTemplateColumns = "1fr 1fr 1fr";
        document.getElementById("objectsContainer").style.justifyItems = "center";
        document.getElementById("objectsContainer").style.alignItems = "center";

    }
    if (characters == 8) {
        document.getElementById("objectsContainer").style.display = "grid";
        document.getElementById("objectsContainer").style.gridTemplateRows = "1fr 1fr";
        document.getElementById("objectsContainer").style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
        document.getElementById("objectsContainer").style.justifyItems = "center";
        document.getElementById("objectsContainer").style.alignItems = "center";

    }
    if (characters == 10) {
        document.getElementById("objectsContainer").style.display = "grid";
        document.getElementById("objectsContainer").style.gridTemplateRows = "1fr 1fr";
        document.getElementById("objectsContainer").style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr";
        document.getElementById("objectsContainer").style.justifyItems = "center";
        document.getElementById("objectsContainer").style.alignItems = "center";

    }
    randomCard();
    createTable();
    createCharacters();
    localStorage.setItem("isGame", false);
}

//בנייית לוח המשחק בהתאם לרמה שנבחרה
function createTable() {
    for (var i = 0; i < 2; i++) {
        var tr = document.createElement("tr");
        for (var j = 0; j < columns; j++) {
            var td = document.createElement("td");
            if (columns == 4) {
                td.style.width = "20%";
            }
            if (columns == 5) {
                td.style.width = "20%";
            }
            tr.ondrop = function (event) {
                //להחפת תמונה
                if (event.target.getAttribute('id') != null) {
                    var data = event.dataTransfer.getData("text");
                    var im = document.getElementById(data);
                    var parent = im.parentElement;
                    event.target.parentElement.appendChild(im);
                    parent.appendChild(event.target);
                    return;
                }
                //להוספת תמונה
                if (event.target.children[0] == undefined) {
                    event.preventDefault();
                    var data = event.dataTransfer.getData("text");
                    var im = document.getElementById(data);
                    event.target.appendChild(im);
                }
            }
            tr.ondragover = function (event) {
                event.preventDefault();
            }
            tr.appendChild(td);

        }
        document.getElementsByTagName("table")[0].appendChild(tr);
    }
    //שליפת נתונים ממשחק קודם
    if (localStorage.getItem("isGame") == "true") {
        var lstTd = document.getElementsByTagName("td");
        var stImageTd = localStorage.getItem("arrTdImage");
        var arrTdImages = stImageTd.split(",");
        var stIndexTd = localStorage.getItem("arrTdIndex");
        var arrTdIndex = stIndexTd.split(",");
        for (var i = 0; i < lstTd.length; i++) {
            if (arrTdImages[i] != 0) {
                var img = document.createElement("img");
                img.src = arrTdImages[i];
                img.setAttribute('data-objectIndex', arrTdIndex[i]);
                img.setAttribute('id', "im" + arrTdIndex[i]);
                img.setAttribute("dragable", true);
                img.ondragstart = function (event) {
                    event.dataTransfer.setData("text", event.target.id)
                };
                lstTd[i].appendChild(img);
            }
        }
    }
}
//הגרלת כרטיס 
function randomCard() {
    //שליפת נתונים ממשחק קודם
    if (localStorage.getItem("isGame") == "true") {
        indexCard = localStorage.getItem("indexCard");
        var savedCard = JSON.parse(localStorage.getItem("cardSt"));
        var thisCard = new card(savedCard.picHint, savedCard.arrOrder, false);
        currentCard = thisCard;

    }//משחק חדש
    else {
        index = Math.round(Math.random() * (currentArr.length - 1));
        while (!currentArr[index].isPlayed)
            index = Math.round(Math.random() * (currentArr.length - 1));
        currentArr[index].isPlayed = false;
        currentCard = currentArr[index];
        indexCard++;
    }
    var img1 = document.createElement("img");
    img1.src = currentCard.picHint;
    document.getElementsByClassName("hint")[0].appendChild(img1);
    if (localStorage.getItem("level") == 1)
        document.getElementsByClassName("hint")[0].children[0].classList.add("cardEasyLevel");
    else
        document.getElementsByClassName("hint")[0].children[0].classList.add("cardHint");
}
//יצירת דמויות המשחק
function createCharacters() {
    //שליפת נתונים ממשחק קודם
    if (localStorage.getItem("isGame") == "true") {
        var stCharacters = localStorage.getItem("arrCharacters");
        if (stCharacters == "")
            return;
        var stIndexC = localStorage.getItem("arrCindex");
        var arrC = stCharacters.split(",");
        var arrCindex = stIndexC.split(",");
        for (var i = 0; i < arrC.length; i++) {
            var img = document.createElement("img");
            img.src = arrC[i];
            img.setAttribute('data-objectIndex', arrCindex[i]);
            img.setAttribute('id', "im" + arrCindex[i]);
            img.setAttribute("dragable", true);
            img.ondragstart = function (event) {
                event.dataTransfer.setData("text", event.target.id)
            };
            document.getElementById("objectsContainer").appendChild(img);
        }
    }
    //משחק חדש
    else {
        for (var i = 0; i < characters; i++) {
            var img = document.createElement("img");
            img.src = arrPics[i];
            img.setAttribute('data-objectIndex', i + 1);
            img.setAttribute('id', "im" + (i + 1));
            img.setAttribute("dragable", true);
            img.ondragstart = function (event) {
                event.dataTransfer.setData("text", event.target.id)
            };
            if (columns == 4) {
                img.style.height = "10vh";
            }
            document.getElementById("objectsContainer").appendChild(img);
        }
    }
}
//בדיקת הנחת השחקן
function checkTruth() {
    //בדיקה שכל התאים מלאים
    var lst = document.getElementsByTagName("td");
    for (var i = 0; i < lst.length; i++) {
        if (lst[i].children[0] == undefined)
            return;
    }
    //בדיקת נכונות
    for (var i = 0; i < lst.length; i++) {
        if (lst[i].children[0].getAttribute('data-objectIndex') != currentCard.arrOrder[i]) {
            var dd = document.createElement("div");
            var bt = document.createElement("button");
            bt.classList.add("try");
            bt.onclick = function () {
                document.getElementsByClassName("contain")[0].removeChild(dd);
            }
            dd.classList.add("cardMess");
            dd.innerHTML = "<p>אופסס</br>הנחה לא נכונה...</p>";
            dd.appendChild(bt);
            document.getElementsByClassName("contain")[0].appendChild(dd);
            document.getElementById("fail").play();
            return;
        }
    }
    // הצגת הודעות בהתאם לתוצאה 
     d1 = document.createElement("div");
     d1.classList.add("cardMess");
     btn1 = document.createElement("button");
     btn2 = document.createElement("button");
    //במקרה וגמר את כל שלבי המשחק
    if ((indexCard == 3 && localStorage.getItem("level") == 3)) {
        d1.innerHTML = "<p>כל הכבוד!</br>נצחת במשחק!!</p>";
        localStorage.setItem("isGame", false);
        d1.classList.add("finishLevel");
        btn1.onclick = function () {
            location.replace("selectLevel.html");
        }
        btn1.classList.add("finishGame");
        btn2.onclick = function () {
            document.getElementsByClassName("contain")[0].removeChild(d1);
            var div2 = document.createElement("div");
            var but1C = document.createElement("button");
            var but2C = document.createElement("button");
            but2C.style.width = "21.5vh";
            but2C.style.height="12.1vh";
        }
            div2.classList.add("cardMess");
            div2.classList.add("exit");
            but1C.classList.add("yes");
            but2C.classList.add("no");
            but1C.onclick = function () {
                window.close();
            }
            but2C.onclick = function () {
                document.getElementsByClassName("contain")[0].removeChild(div2);
                location.replace("options.html");
            }
            div2.appendChild(but1C);
            div2.appendChild(but2C);
            div2.style.marginRight = "30%";
            document.getElementsByClassName("contain")[0].appendChild(div2);
        }
        btn2.classList.add("exitGame");
    
    //במקרה וגמר את כרטיסי השלב
    if (indexCard == 3 && localStorage.getItem("level") != 3) {
        d1.innerHTML = "<p>כל הכבוד!</br>סיימת את השלב</br>האם ברצונך לעבור לשלב הבא?</p>";
        noneMessage = true;
        d1.classList.add("finishLevel");
        btn1.classList.add("yes");
        btn1.onclick = buildGame;
        btn2.classList.add("no");
        btn2.style.width = "20vh";
        btn2.style.height = "10vh";
        btn2.onclick = function () {
            location.replace("options.html");
            document.getElementsByClassName("contain")[0].removeChild(d1);
        }
    }
    //מעבר לקלף הבא בשלב הנוכחי
    if (indexCard != 3) {
        d1.innerHTML = "<p>כל הכבוד!</br>לכרטיס הבא לחץ:</p>";
        btn1.onclick = function () {
            document.getElementsByClassName("contain")[0].removeChild(d1);
            for (var i = 0; i < lst.length; i++) {
                lst[i].removeChild(lst[i].lastChild)
            }
            createCharacters();
            document.getElementsByClassName("hint")[0].removeChild(document.getElementsByClassName("hint")[0].lastChild);
            randomCard();
        }
        btn2.classList.add("exitGame");
        btn2.onclick = function () {
            location.replace("options.html");
            document.getElementsByClassName("contain")[0].removeChild(d1);
        }
    }
    d1.appendChild(btn1);
    d1.appendChild(btn2);
    document.getElementsByClassName("contain")[0].appendChild(d1);
    document.getElementById("succeed").play();
}

//שמירה אוטומטית של המשחק
function saveGame() {
    var isEmpty=true;
    if (indexCard==1) {
        var lst = document.getElementsByTagName("td");
        for (var i = 0; i < lst.length; i++)
            if (lst[i].children[0] != undefined) {
                isEmpty = "false";
                break;
            }
        if (isEmpty == true)
            return;
    }
        var varLevel = localStorage.getItem("level");
        localStorage.clear();
        localStorage.setItem("level", varLevel)
        localStorage.setItem("isGame", true);
        localStorage.setItem("currentLevel", localStorage.getItem("level"));//שמירת רמה
        var cardSt = JSON.stringify(currentCard);
        localStorage.setItem("cardSt", cardSt);//שמירת כרטיס
        localStorage.setItem("indexCard", indexCard);//שמירת מס' כרטיסים
        var allImage = document.getElementById("objectsContainer").children;
        var arrCharacters = [];
        var arrCindex = [];
        for (var i = 0; i < allImage.length; i++) {
            var st = allImage[i].src;
            var ind = allImage[i].getAttribute("data-objectIndex");
            st = st.substring(st.lastIndexOf("pictures"));
            arrCharacters[i] = st;
            arrCindex[i] = ind;
        }
        localStorage.setItem("arrCharacters", arrCharacters);//שמירת מערך דמויות
        localStorage.setItem("arrCindex", arrCindex);//שמירת אינדקס דמויות
        var allTd = document.getElementsByTagName("td");
        var arrTdImage = [];
        var arrTdIndex=[];
        for (var i = 0; i < allTd.length; i++) {
            if (allTd[i].children[0] != undefined) {
                var st2 = allTd[i].children[0].src;
                var ind2 = allTd[i].children[0].getAttribute("data-objectIndex");
                st2 = st2.substring(st2.lastIndexOf("pictures"));
                arrTdImage[i] = st2;
                arrTdIndex[i] = ind2;
            }
            else {
                arrTdImage[i] = 0;
                arrTdIndex[i] = 0;
            }
        }
    localStorage.setItem("arrTdImage", arrTdImage);//שמירת מערך תמונות מהטבלה
    localStorage.setItem("arrTdIndex", arrTdIndex);//שמירת אינדקס תמונות מהטבלה
}

 

