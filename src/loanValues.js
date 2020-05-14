import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const initialValues = [
    {label: 'Portafolio Market Value (PMV)', key: 'portafolioMarketValue', value: 1000000, type: 'number'},
    {label: 'Aggregate Exposure', key: 'aggregateExposure', value: 600000, type: 'number'},
    {label: 'Eligible Loanable Percentage', key: 'portafolioLoanableValue', value: 0.0, type: 'number'},
    {label: 'Top-up Percentage', key: 'topUpPercent', value: 75.0, type: 'number'},
    {label: 'Sell-out Percentage', key: 'sellOutPercent', value: 50.0, type: 'number'},
]

const style = {
    margin: '20px'
}

const arrayToDict = (arrayOfObjects) => {
    return arrayOfObjects.reduce((map, obj) => {map[obj.key] = obj; return map}, {})
}

const arrayToDictValues = (arrayOfObjects) => {
    return arrayOfObjects.reduce((map, obj) => {map[obj.key] = obj.value; return map}, {})
}

export const initialDict = arrayToDictValues(initialValues)

export class LoanValues extends Component {
    constructor(props){
        super(props);
        let {onValuesChange} = props
        this.state = {
            onValuesChange, formValues: {...arrayToDict(initialValues)}
        }
        // send initial values
        onValuesChange(arrayToDict(initialValues))
        this.changeNumber = this.changeNumber.bind(this)
    } 

    changeNumber(e){
        const {name, value} = e.target;
        this.setState((state) => {
            console.log('changed value')
            let newState = {
                ...state, formValues: {
                    ...state.formValues, [name]: { ...state.formValues[name], value }
                }
            }
            this.state.onValuesChange(newState.formValues)
            return newState
        })
    }

    render(){
        let {formValues} = this.state
        //console.log(formValues)
        return (
            <div style={style}>
                <Form>
                    {Object.entries(formValues).map(([key, { label, value: dflt, type }], idx) => (
                        <Form.Input key={idx} label={label} name={key} value={dflt} type={type} onChange={this.changeNumber}/>
                    ))}
                </Form>
            </div>
        )
    }
}