import React, { Component } from 'react'
import css from '../Radio/Radio.module.css'
const Radio = (props) => {
    return (
        <div onChange={(event) => props.radioChange(event)} className={css.radio}>
            <input type="radio" value="left" name="radioBtn"  defaultChecked/> Left
            <input type="radio" value="right" name="radioBtn" /> Right
            <input type="radio" value="alternate" name="radioBtn"/> Alternate
            {/* <input type="radio" value="reverse" name="radioBtn" /> Reverse */}
        </div>
    );
}
export default Radio;