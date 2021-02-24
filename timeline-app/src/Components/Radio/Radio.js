import React, { Component } from 'react'
import css from './Radio.module.css'
import Auxillary from '../../HOC/Auxillary/Auxillary'

// Css Modules are used in this component for the purpose of Local Scope
// A Radio Change Event is Bind here for updating User Selected Mode

const Radio = (props) => {
    return (
        <Auxillary>
            <span><h2 className={css.radioHeadline}>Change the Mode of the Timeline :</h2></span>
            <div className={css.grid} onChange={(event) => props.radioChange(event)} data-testid="radio_test">
                <label className={css.card}>
                    <input name="plan" className={css.radio} type="radio" value="left" defaultChecked />
                    <span className={css.plandetails}>
                        <span className={css.plantype}>Left</span>
                        <span><br /></span>
                        <span>Left Align the Label</span>
                    </span>
                </label>
                <label className={css.card}>
                    <input name="plan" className={css.radio} type="radio" value="right" />
                    <span className={css.hiddenvisually}></span>
                    <span className={css.plandetails} aria-hidden="true">
                        <span className={css.plantype}>Right</span>
                        <span><br /></span>
                        <span>Right Align the Label</span>
                    </span>
                </label>
                <label className={css.card}>
                    <input name="plan" className={css.radio} type="radio" value="alternate" />
                    <span className={css.hiddenvisually}></span>
                    <span className={css.plandetails} aria-hidden="true">
                        <span className={css.plantype}>Alternate</span>
                        <span><br /></span>
                        <span>Alternate the Label and contents</span>
                    </span>
                </label>
            </div>
        </Auxillary>

    );
}
export default Radio;