const risklevel = (state = {}, action) => {
	switch (action.type) {
		case 'RISK_LEVEL':
			return {
          id: action.id,
          risklevel: action.risk_level
			  };
		default:
			return state
	}
}

export default risklevel;