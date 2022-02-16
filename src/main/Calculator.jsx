import React, { Component } from "react";
import './Calculator.css'

import Button from "../components/Button";
import Display from "../components/Display";

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}
export default class Calculator extends Component {

    
    constructor(props) {
        super(props)
        this.state = { ...initialState };
        
    }
    
    clearMemory=()=> {
        this.setState({ ...initialState })
    }
    setOperation=(operation) =>{
        console.log('teste');
        if(this.state.current ===0){
            this.setState({
                operation,
                current:1,
                clearDisplay:true
            })
        } else{
            const equals  = operation === '='
            const currentOperation = this.state.operation
            const value = [...this.state.values]
            try {
                value[0]=eval(`${value[0]} ${currentOperation} ${value[1]}`) // refatorar
                
            } catch (error) {
            value[0]= this.state.values[0]    
            }
            
            value[1]=0
            this.setState({
                displayValue:value[0],
                operation:equals?null:operation, // vai verificar se o cliente colocou alguma operação
                current: equals?0:1, //verificar se o usuario colocou  alguma operação
                clearDisplay:!equals ,
                values:value
            })
        }
    }
    addDigit=(n)=> {

        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay  // evita de ficar adicionando 0 na frente de 0

        const currentValue = clearDisplay ? '' : this.state.displayValue

        const displayValue = currentValue + n

        this.setState({
            displayValue,
            clearDisplay: false
        })

        if(n!=='.'){
           const i = this.state.current 
           const newValue = parseFloat(displayValue)
            const values =[...this.state.values] //clonamos o nosso array 
            values[i]= newValue //vamos passar para o valor para cada posição doa array
            this.setState({values})
        }


    }
    render() { 
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label={"AC"} click={this.clearMemory} triple />
                <Button label={"/"} click={this.setOperation} operation />
                <Button label={"7"} click={this.addDigit} />
                <Button label={"8"} click={this.addDigit} />
                <Button label={"9"} click={this.addDigit} />
                <Button label={"*"} click={this.setOperation} operation />
                <Button label={"4"} click={this.addDigit} />
                <Button label={"5"} click={this.addDigit} />
                <Button label={"6"} click={this.addDigit} />
                <Button label={"-"} click={this.setOperation} operation />
                <Button label={"1"} click={this.addDigit} />
                <Button label={"2"} click={this.addDigit} />
                <Button label={"3"} click={this.addDigit} />
                <Button label={"+"} click={this.setOperation} operation />
                <Button label={"0"} click={this.addDigit} double />
                <Button label={"."} click={this.setOperation} />
                <Button label={"="} click={this.setOperation} operation />

            </div>
        )
    }

}