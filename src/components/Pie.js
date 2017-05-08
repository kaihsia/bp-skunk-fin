import React, { Component } from 'react'
import { PieChart } from 'react-d3-basic'
import sample from '../apis/sample'
import '../styles/App.css'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { getHeight } from '../actions/heightAction'
import { getWidth } from '../actions/widthAction'

class Pie extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    let { getHeight, getWidth } = this.props;
    const el = ReactDOM.findDOMNode(this);
    getHeight(el.offsetHeight);
    getWidth(el.offsetWidth);
  }

  componentWillMount() {
    window.addEventListener("resize", this.componentDidMount);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.componentDidMount);
  }


  render() {
    let { risk } = this.props;
    let sampleXR = sample[risk];

    let onMouseOver = (e) => {
      console.log('hello!');
    }

    let onMouseOut = (e) => {
      console.log('Out of here!')
    }

    let total = sampleXR.reduce((total, item) => total+=item.percentage, 0),

      width = this.props.width,
      height = this.props.height,
      value = function(d) {
        return +d.percentage;
      },
      name = function(d) {
        return d.investment;
      },

      chartSeries = sampleXR.map((item) => {
        return {
          "field": item.investment,
          "name": `${item.investment}: ${Math.ceil((item.percentage / total) * 100)}%` 
        }
      }),
      innerRadius = 40;
    return (
      <div className="center-align">
        <PieChart
          data={sampleXR}
          width={width}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          height={height}
          chartSeries={chartSeries}
          value={value}
          name={name}
          showLegend={false}
          innerRadius={innerRadius}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return {
		height: state.resp.height,
		width: state.resp.width
	}
}

const mapDispatchToProps = (dispatch) => {
	  return {
			getHeight: (height) => {
				dispatch(getHeight(height))
			},
			getWidth: (width) => {
				dispatch(getWidth(width))
			}
		}
}

Pie = connect(mapStateToProps, mapDispatchToProps)(Pie)

export default Pie;