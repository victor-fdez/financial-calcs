import React from 'react'
import {Paper,Set,Rect,Text,Line} from 'react-raphael'

export class LoanDisplay extends React.Component {

    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
        this.state = { ...props, height: 0, width: 0 }
        this.getBounds = this.getBounds.bind(this)
    }

    getBounds(el){
        let paper = el.getPaper()
        if(!paper) return
        let {width, height} = paper.getSize()
        this.setState((state, props) => ({...state, width, height: height-30}))
    }

    static getDerivedStateFromProps(props, state){
        return {...state, ...props}
    }

    render() {
        let {
            portafolioMarketValue,
            aggregateExposure,
            portafolioLoanableValue,
            topUpPercent,
            sellOutPercent,
            width,
            height
        } = this.state
        //console.log('state', this.state)
        //console.log(`sellout ${topUpPercent} ${sellOutPercent}`)
        // amounts to graph
        let drawRect = (value, attr, text) => {
            let x = (width/2)-(.15*width)
            let w = (.30*width)
            let h = (height*(value/portafolioMarketValue))
            let y = height - h + 10
            let x_text = x + w + 10
            let y_text = height - h + 10
            //console.log(`size ${x} ${y} ${w} ${h} ${text}`)
            //console.log(`text ${x_text} ${y_text}`)
            return (
                <Set>
                    <Text x={x_text} y={y_text} text={text} attr={{'text-anchor': 'start'}}></Text>
                    <Rect x={x} y={y} width={w} height={h} attr={attr}/>
                </Set>
            )
        }
        let percent = (value) => (value / 100)
        let amountCalc = (percentValue) => {
            let loanableValue = percent(portafolioLoanableValue) * portafolioMarketValue
            let changeAmount = loanableValue + (percent(percentValue) * (portafolioMarketValue - loanableValue))
            let aggAmount = ((aggregateExposure * (changeAmount / loanableValue)))
            console.log(`loanable value ${portafolioLoanableValue} ${loanableValue} ${changeAmount} ${portafolioMarketValue}`)
            console.log(`${aggAmount} ${aggregateExposure}`)
            return aggAmount
        }
        let topUpValue = amountCalc(topUpPercent)
        let sellOutValue = amountCalc(sellOutPercent)
        let loanValue = percent(portafolioLoanableValue) * portafolioMarketValue
        console.log(`size ${width} ${height}`)
        return (
            <Paper ref={this.getBounds} width={"100%"} height={600}>
                {(width !== 0 && height !== 0) ? 
                    (
                        <Set>
                            {drawRect(portafolioMarketValue, {"fill":"#15d653","stroke":"#000","stroke-width":2}, `Portafolio Market Value: $${portafolioMarketValue}`)}
                            {drawRect(topUpValue, {"fill":"#ffec33","stroke":"#000","stroke-width":2}, `Top-up Amount: $${topUpValue}`)}
                            {drawRect(sellOutValue, {"fill":"#ff4633","stroke":"#000","stroke-width":2}, `Sell Out Amount: $${sellOutValue}`)}
                            {drawRect(loanValue, {"fill":"#f0f0f0","stroke":"#000","stroke-width":2}, `Loan Amount: $${loanValue}`)}
                        </Set>
                    ) :
                    (null)
                }
            </Paper>
        )
    }
}