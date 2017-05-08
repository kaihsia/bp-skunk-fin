import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userRiskLevel } from '../actions/financeActions'

class RiskLevel extends Component {
	render() {
		let input,
				{ getRiskLevel } = this.props;
		return (
			<div>
				<form onSubmit={e => {
					e.preventDefault()
					getRiskLevel(input.value);
					if (!input.value.trim()) {
						return
					}
					input.value = ''
				}}>
					<div>
						<input placeholder="Enter your Risk Level (1 - 10)" label="risk level" type="text" ref={node => { input = node }}/>
					</div>
					<button className="btn waves-effect waves-light" type="submit">
						Submit
					</button>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		risklevel: state.risklevel
	}
}

const mapDispatchToProps = (dispatch) => {
	  return { 
			getRiskLevel: risklevel => {
				dispatch(userRiskLevel(risklevel))
			} 
		}
}

RiskLevel = connect(mapStateToProps, mapDispatchToProps)(RiskLevel)

export default RiskLevel