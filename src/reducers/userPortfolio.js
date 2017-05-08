const userPort = (state = {submitted: false}, action) => {
	switch (action.type) {
		case 'USER_PORTFOLIO':
			return {
        stocks: action.stocks,
        bonds: action.bonds,
        funds: action.funds,
        annuities: action.annuities,
        commodities: action.commodities,
        submitted: action.submitted
      };
		default:
			return state
	}
}

export default userPort;