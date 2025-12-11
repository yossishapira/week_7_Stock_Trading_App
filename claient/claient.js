import { question } from "readline-sync";
import { searchStock,filterStocksByPrice,OperateOnStock } from "../utils/utils.js";

export function Menu() {
    const menu = question(`
Search for a stock by name or id 1 
Show all stocks above or below a given price 2 
Buy or sell a stock 3 
Exit 4
`)
    return menu
}

export function searchIdOrName(){
    const idOrName = question("Write a stock name or identifier ")
    console.log(searchStock(idOrName))
}

export function ShowStocksAboveorBelow(){
    const price = Number(question("Write a price "))
    const AboveorBelow = question("Write true/false ")
    if(AboveorBelow !== "true" && AboveorBelow !== "false"){
        console.log(`
            
You didn't write well
`)
    }
    else{
         console.log(filterStocksByPrice(price,AboveorBelow))
    }
    
   
}
export function StockActivity(){
    const idOrName = question("Write a stock name or identifier ")
    const BuyOrSell = question("Write to buy/sell ")
    OperateOnStock(BuyOrSell,idOrName)
}