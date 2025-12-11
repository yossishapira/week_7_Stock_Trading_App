import { Menu,searchIdOrName,ShowStocksAboveorBelow,StockActivity } from "./claient/claient.js";


console.log(`

Welcome
`)
let menu;
while(menu!=="4"){
    menu = Menu()
    switch (menu) {
        case "1":
            searchIdOrName()
            continue
        case "2":
            ShowStocksAboveorBelow()
            continue
        case "3":
            StockActivity()
            continue
    }
}
