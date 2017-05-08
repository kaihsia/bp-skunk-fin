const initialState = {
	width:800,
	height: 500
}

const resp = (state = initialState, action) => {
	switch (action.type) {
		case 'WIDTH':
			return {
					width: action.width
			};
		case 'HEIGHT':
			return {
				height: action.height
			};
		default:
			return state
	}
}

export default resp;

