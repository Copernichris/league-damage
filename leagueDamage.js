jQuery(document).ready(function($){

//item  ad  crit    lethality   ap  magpen  health  armor   mr
const items = [

    [0, 0, 0, 0, 0, 0, 0, 0, "None"], 

    //starter (reminder for passives marked by !)
    [7, 0, 0, 0, 0, 0, 0, 0, "Cull"],
    [0, 0, 0, 15, 0, 40, 0, 0, "Dark Seal"], // !
    [8, 0, 0, 0, 0, 80, 0, 0, "Dorans Blade"], 
    [0, 0, 0, 15, 0, 70, 0, 0, "Dorans Ring"], // !
    [0, 0, 0, 0, 0, 80, 0, 0, "Dorans Shield"], // !
    [30, 0, 0, 0, 0, 150, 0, 0, "Guardian's Blade"], // !
    [25, 0, 0, 0, 0, 150, 0, 0, "Guardian's Hammer"], // !
    [0, 0, 0, 0, 0, 150, 0, 0, "Guarian's Horn"], // !
    [0, 0, 0, 40, 0, 150, 0, 0, "Guardian's Orb"], // !
    [0, 0, 0, 5, 0, 30, 0, 0, "Relic Shield"],     
    [5, 0, 0, 0, 0, 10, 0, 0, "Spectral Sickle"], 
    [8, 0, 0, 0, 0, 10, 0, 0, "Spellthief's Edge"], 
    [3, 0, 0, 0, 0, 30, 0, 0, "Steel Shoulderguards"] 
    ];

//populates each drop box with the 8th index of each array(item name)
let selItem = document.getElementById("myItem1");
for(let i = 0; i < items.length; i++) {
    let opt = document.createElement("option");
    opt.innerHTML = items[i][8];
    opt.value = items[i];
    selItem.appendChild(opt);
}

let selItem2 = document.getElementById("myItem2");
for(let i = 0; i < items.length; i++) {
    let opt = document.createElement("option");
    opt.innerHTML = items[i][8];
    opt.value = items[i];
    selItem2.appendChild(opt);
}

let selItem3 = document.getElementById("myItem3");
for(let i = 0; i < items.length; i++) {
    let opt = document.createElement("option");
    opt.innerHTML = items[i][8];
    opt.value = items[i];
    selItem3.appendChild(opt);
}

let selItem4 = document.getElementById("myItem4");
for(let i = 0; i < items.length; i++) {
    let opt = document.createElement("option");
    opt.innerHTML = items[i][8];
    opt.value = items[i];
    selItem4.appendChild(opt);
}

let selItem5 = document.getElementById("myItem5");
for(let i = 0; i < items.length; i++) {
    let opt = document.createElement("option");
    opt.innerHTML = items[i][8];
    opt.value = items[i];
    selItem5.appendChild(opt);
}

let selItem6 = document.getElementById("myItem6");
for(let i = 0; i < items.length; i++) {
    let opt = document.createElement("option");
    opt.innerHTML = items[i][8];
    opt.value = items[i];
    selItem6.appendChild(opt);
}

let selItem7 = document.getElementById("enemyItem1");
for(let i = 0; i < items.length; i++) {
    let opt = document.createElement("option");
    opt.innerHTML = items[i][8];
    opt.value = items[i];
    selItem7.appendChild(opt);
}

let selItem8 = document.getElementById("enemyItem2");
for(let i = 0; i < items.length; i++) {
    let opt = document.createElement("option");
    opt.innerHTML = items[i][8];
    opt.value = items[i];
    selItem8.appendChild(opt);
}

let selItem9 = document.getElementById("enemyItem3");
for(let i = 0; i < items.length; i++) {
    let opt = document.createElement("option");
    opt.innerHTML = items[i][8];
    opt.value = items[i];
    selItem9.appendChild(opt);
}

let selItem10 = document.getElementById("enemyItem4");
for(let i = 0; i < items.length; i++) {
    let opt = document.createElement("option");
    opt.innerHTML = items[i][8];
    opt.value = items[i];
    selItem10.appendChild(opt);
}

let selItem11 = document.getElementById("enemyItem5");
for(let i = 0; i < items.length; i++) {
    let opt = document.createElement("option");
    opt.innerHTML = items[i][8];
    opt.value = items[i];
    selItem11.appendChild(opt);
}

let selItem12 = document.getElementById("enemyItem6");
for(let i = 0; i < items.length; i++) {
    let opt = document.createElement("option");
    opt.innerHTML = items[i][8];
    opt.value = items[i];
    selItem12.appendChild(opt);
}
//attackdamage(ad)  adgrowth    healthpoints(hp)  hpgrowth    armor   armorgrowth magicresist(mr)  mrgrow
const champion = [
    [60, 5, 580, 90, 38, 3.25, 32, 1.25, "Aatrox"],
    [50, 3, 526, 92, 21, 3.5, 30, 0.5, "Ahri"], 
    [62, 3.3, 500, 105, 23, 3.5, 37, 1.25, "Akali"],
    [62, 3.75, 600, 105, 44, 3.5, 32, 1.25, "Alistar"], 
    [53, 3.8, 615, 80, 30, 3.8, 32, 1.25, "Amumu"], 
    [51, 3.2, 480, 82, 21, 4, 30, 0.5, "Anivia"], 
    [50, 2.63, 524, 88, 19, 4, 30, 0.4, "Annie"], 
    [57, 2.4, 530, 88, 28, 3, 26, 0.5, "Aphelios"], 
    [60, 3.61, 605, 90, 29, 3.3, 30, 0.5, "Draven"] 
];

//populates each drop box with the 8th index (champ name)
let selChamp = document.getElementById("myChampSelect");
for(let i = 0; i < champion.length; i++) {
    let opt = document.createElement("option");
    opt.innerHTML = champion[i][8];
    opt.value = champion[i];
    selChamp.appendChild(opt);
}

let selchamp2 = document.getElementById("enemyChampSelect");
for(let i = 0; i < champion.length; i++) {
    let opt = document.createElement("option");
    opt.innerHTML = champion[i][8];
    opt.value = champion[i];
    selchamp2.appendChild(opt);
}

$('.updatebutton').on({
    'click': function(){
        
        let myLevel = document.getElementById("myLevelSelect").selectedIndex; //find index from html drop down
        let myChampIndex = document.getElementById("myChampSelect").selectedIndex; //find index from html drop down
        let myChampBaseStats = [champion[myChampIndex][0] + (champion[myChampIndex][1] * myLevel), 0, 0, 0, 0, champion[myChampIndex][2] + (champion[myChampIndex][3] * myLevel), champion[myChampIndex][4] + (champion[myChampIndex][5] * myLevel), champion[myChampIndex][6] + (champion[myChampIndex][7] * myLevel)];

        let myStatsCombo = [ //find indexes from html drop downs (8 in total)
            myChampBaseStats,
            items[document.getElementById("myItem1").selectedIndex],
            items[document.getElementById("myItem2").selectedIndex],
            items[document.getElementById("myItem3").selectedIndex],
            items[document.getElementById("myItem4").selectedIndex],
            items[document.getElementById("myItem5").selectedIndex],
            items[document.getElementById("myItem6").selectedIndex]   
        ];

        //same code but for enemy stats
        let myStats = myStatsCombo.reduce((r, a) => a.map((b, i) => (r[i] || 0) + b), []);

        
        let enemyLevel = document.getElementById("enemyLevelSelect").selectedIndex; 
        let enemyChampIndex = document.getElementById("enemyChampSelect").selectedIndex;
        let enemyChampBaseStats = [champion[enemyChampIndex][0] + (champion[enemyChampIndex][1] * enemyLevel), 0, 0, 0, 0, champion[enemyChampIndex][2] + (champion[enemyChampIndex][3] * enemyLevel), champion[enemyChampIndex][4] + (champion[enemyChampIndex][5] * enemyLevel), champion[enemyChampIndex][6] + (champion[enemyChampIndex][7] * enemyLevel)];

        let enemyStatsCombo = [ 
            enemyChampBaseStats,
            items[document.getElementById("enemyItem1").selectedIndex],
            items[document.getElementById("enemyItem2").selectedIndex],
            items[document.getElementById("enemyItem3").selectedIndex],
            items[document.getElementById("enemyItem4").selectedIndex],
            items[document.getElementById("enemyItem5").selectedIndex],
            items[document.getElementById("enemyItem6").selectedIndex]   
        ];

        //gives the final array by adding like indexes of item and champion arrays
        let enemyStats = enemyStatsCombo.reduce((r, a) => a.map((b, i) => (r[i] || 0) + b), []);

        //sepparates values of array into unique identifiers
        document.getElementById("myAd").innerHTML = myStats[0];
        document.getElementById("myCrit").innerHTML = myStats[1];
        document.getElementById("myLethality").innerHTML = myStats[2];
        document.getElementById("myAp").innerHTML = myStats[3];
        document.getElementById("myMagPen").innerHTML = myStats[4];
        document.getElementById("myHp").innerHTML = myStats[5];
        document.getElementById("myArmor").innerHTML = myStats[6];
        document.getElementById("myMr").innerHTML = myStats[7];

        document.getElementById("enemyAd").innerHTML = enemyStats[0];
        document.getElementById("enemyCrit").innerHTML = enemyStats[1];
        document.getElementById("enemyLethality").innerHTML = enemyStats[2];
        document.getElementById("enemyAp").innerHTML = enemyStats[3];
        document.getElementById("enemyMagPen").innerHTML = enemyStats[4];
        document.getElementById("enemyHp").innerHTML = enemyStats[5];
        document.getElementById("enemyArmor").innerHTML = enemyStats[6];
        document.getElementById("enemyMr").innerHTML = enemyStats[7];        }   
    });
});

