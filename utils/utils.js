import { stockMarket } from "../data/data.js";
import { question } from "readline-sync";

export function searchStock(identifier) {
    let idOrName = stockMarket.stocks.filter((obj) => obj.name === identifier || obj.id === identifier)
    if (idOrName.length > 0) {
        return idOrName
    }
    else {
        console.log("Not found")
        return idOrName
    }
}


export function filterStocksByPrice(givenPrice, above) {
    if (above === "true") {
        let abovePrices = stockMarket.stocks.filter((Price) => Price.currentPrice > givenPrice)
        if (abovePrices.length > 0) {
            return abovePrices
        }
        else {
            console.log("Not found")
            return abovePrices
        }

    }
    else if (above === "false") {
        let abovePrices = stockMarket.stocks.filter((Price) => Price.currentPrice < givenPrice)
        if (abovePrices.length > 0) {
            return abovePrices
        }
        else {
            console.log("Not found")
            return abovePrices
        }

    }
}

export function OperateOnStock(operation, identifier) {
    const Stock = searchStock(identifier)
    console.log(Stock)
    if (operation === "buy") {
        const amount = Number(question("How many shares do you want to buy? "))
        stockMarket.stocks.forEach((obj, i) => {
            if (obj.name === Stock[0].name) {
                stockMarket.stocks[i].availableStocks -= amount
                stockMarket.stocks[i].previousPrices.push(stockMarket.stocks[i].currentPrice)
                stockMarket.stocks[i].currentPrice = stockMarket.stocks[i].currentPrice * 1.05
                stockMarket.stocks.forEach((stocks, i) => {
                    if (stockMarket.stocks[i].category === stocks.category) {
                        if (Stock[0].name !== stocks.name) {
                            stockMarket.stocks[i].category = stockMarket.stocks[i].category * 1.01
                        }

                       
                    }
                     stockMarket.lastUpdated = new Date()

                }
                )
            }

        }

        )
    }
    else if (operation === "sell") {
        const amount = Number(question("How many shares do you want to sell? "))
        stockMarket.stocks.forEach((obj, i) => {
            if (obj.name === Stock[0].name) {
                stockMarket.stocks[i].availableStocks -= amount
                stockMarket.stocks[i].previousPrices.push(stockMarket.stocks[i].currentPrice)
                const PercentageCalculation_5 = stockMarket.stocks[i].currentPrice * 0.05
                const PercentageCalculation_1 = stockMarket.stocks[i].currentPrice * 0.01
                stockMarket.stocks[i].currentPrice -= PercentageCalculation_5
                stockMarket.stocks.forEach((stocks, i) => {
                    if (stockMarket.stocks[i].category === stocks.category) {
                        if (Stock[0].name !== stocks.name) {
                            stockMarket.stocks[i].category -= PercentageCalculation_1
                        }

                       
                    }
                     stockMarket.lastUpdated = new Date()

                }
                )
            }

        }

        )
    }
}
