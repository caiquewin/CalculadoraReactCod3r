import React,{Component} from "react";
import './Calculator.css'

import Button from "../components/Button";
import Display from "../components/Display";

export default class Calculator extends Component {

    render(){
        return(
            <div className="calculator">
                <Display value={10000000000000}/>
                <Button  label={"AC"} />  
                <Button  label={"/"} color={"#ea9749"}/>    
                <Button  label={"7"}/>
                <Button  label={"8"}/>
                <Button  label={"9"}/>
                <Button  label={"*"} color={"#ea9749"}/>
                <Button  label={"4"}/>
                <Button  label={"5"}/>
                <Button  label={"6"}/>
                <Button  label={"-"} color={"#ea9749"}/>
                <Button  label={"1"}/>
                <Button  label={"2"}/>
                <Button  label={"3"}/>
                <Button  label={"+"} color={"#ea9749"}/>
                <Button  label={"0"}/>
                <Button  label={"."}/>
                <Button  label={"="}/>

            </div>
        )
    }

}