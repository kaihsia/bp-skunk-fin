import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userPortfolio } from '../actions/userPortfolioActions'

class UserPortfolio extends Component {
  constructor(props) {
    super(props)
  }

	render() {
		let input = {
      stocks: '',
      bonds: '',
      funds: '',
      annuities: '',
      commodities: ''
    };
    let { getUserPortfolio } = this.props;
		return (
			<div>
        <h2>Your Portfolio</h2>
				<form onSubmit={e => {
					e.preventDefault()
          let obj = {
            stocks: +input.stocks.value || 0,
            bonds: +input.bonds.value || 0,
            funds: +input.funds.value || 0,
            annuities: +input.annuities.value || 0,
            commodities: +input.commodities.value || 0,
            submitted: true
          }
					getUserPortfolio(obj);          
					input = {
            stocks: '',
            bonds: '',
            funds: '',
            annuities: '',
            commodities: ''
          };
				}}>
					<div>
						<label htmlFor="stocks">Stocks</label><input placeholder="Enter amount in $USD" label="stocks" type="text" ref={node => { input.stocks = node }}/>
						<label htmlFor="bonds">Bonds</label><input placeholder="Enter amount in $USD" label="bonds" type="text" ref={node => { input.bonds = node }}/>
						<label htmlFor="funds">Mutual Funds</label><input placeholder="Enter amount in $USD" label="funds" type="text" ref={node => { input.funds = node }}/>
						<label htmlFor="annuities">Annuities</label><input placeholder="Enter amount in $USD" label="annuities" type="text" ref={node => { input.annuities = node }}/>
						<label htmlFor="commodities">Commodities</label><input placeholder="Enter amount in $USD" label="commodities" type="text" ref={node => { input.commodities = node }}/> 
					</div>
					<button className="btn waves-effect waves-light" type="submit">
						Submit
					</button>
				</form>
        <br />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
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
			getUserPortfolio: userObj => {
				dispatch(userPortfolio(userObj))
			} 
		}
}

UserPortfolio = connect(mapStateToProps, mapDispatchToProps)(UserPortfolio)

export default UserPortfolio