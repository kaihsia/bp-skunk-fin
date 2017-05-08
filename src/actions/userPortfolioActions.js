export const userPortfolio = (userObj) => {
	return {
		type: "USER_PORTFOLIO",
    stocks: userObj.stocks,
    bonds: userObj.bonds,
    funds: userObj.funds,
    annuities: userObj.annuities,
    commodities: userObj.commodities,
    submitted: userObj.submitted
	}
}