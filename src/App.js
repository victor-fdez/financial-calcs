import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react'
import { LoanValues, initialDict } from './loanValues.js'
import { LoanDisplay } from './loanDisplay.js'
import './App.css';


function App() {
  let [width, setWidth] = useState(0)
  let [height, setHeight] = useState(0)
  let [values, setValues] = useState(initialDict)
  const onValuesChange = (formValues) => {
    let extractedValues = Object.entries(formValues).reduce((map, [key, obj]) => {map[obj.key] = obj.value; return map}, {})
    //console.log(extractedValues)
    setValues(extractedValues)
    //console.log(dict)
  }
  let updateSize = (el) => {
    if(!el) return
    console.log(el)
  }
  //console.log('values')
  //console.log(values)
  return (
    <div className="App">
      <Grid stackable>
        <Grid.Column width={16}>
          <h1 style={{margin: '30px'}}>Margin Loan Calculator</h1>
        </Grid.Column>
        <Grid.Column width={4}>
          <LoanValues onValuesChange={onValuesChange}/>
        </Grid.Column>
        <Grid.Column ref={updateSize} width={12}>
          <LoanDisplay {...values}/>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
