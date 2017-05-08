import React, { Component } from 'react'
import RiskLevel from '../containers/UserRiskLevel'
import UserPortfolio from '../containers/UserPortfolio'
import Pie from './Pie'
import Table from './Table'
import { connect } from 'react-redux'
import { userRiskLevel } from '../actions/financeActions'
import { getHeight } from '../actions/heightAction'
import { getWidth } from '../actions/widthAction'


class App extends Component {
	render() {
		console.log(this.props);
		let { risklevel, submitted } = this.props;
		return (
			<div className="container">
				<h2>Finance Portfolio</h2>
				<RiskLevel />
				<br />
				{risklevel ? <Pie risk={risklevel}/> : null}
				<br />
				{risklevel ? <UserPortfolio /> : null}
				<br />
				{submitted && <Table {...this.props} />}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		risklevel: state.risklevel.risklevel,
		height: state.resp.height,
		width: state.resp.width,
		stocks: state.userPort.stocks,
    bonds: state.userPort.bonds,
    funds: state.userPort.funds,
    annuities: state.userPort.annuities,
    commodities: state.userPort.commodities,
		submitted: state.userPort.submitted
	}
}

const mapDispatchToProps = (dispatch) => {
	  return { 
			getRiskLevel: risklevel => {
				dispatch(userRiskLevel(risklevel))
			},
			getHeight: (height) => {
				dispatch(getHeight(height))
			},
			getWidth: (width) => {
				dispatch(getWidth(width))
			}
		}
}

App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App
