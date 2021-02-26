import React from "react";
import css from "../Note/Note.module.css";
const Note = (props) => {
    return (
        <div className={css.notecard} data-testid="note_test">
            <div className={css.description}>
                <h2>Note</h2>
                <p> The Colors for Timeline Nodes (normal, pending, loading) are provided via the TimeLine property.
                    For those not provided can be adjusted using color picker.</p>
            </div>
        </div>
    );
};
export default Note;
