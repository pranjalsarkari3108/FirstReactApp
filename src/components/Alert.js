import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }

    return (
        props.alert && <div class={`alert alert-${props.alert.Type} alert-dismissible fade show`}role="alert">
            <strong>{capitalize(props.alert.Type)}</strong>: {props.alert.msg}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export default Alert
