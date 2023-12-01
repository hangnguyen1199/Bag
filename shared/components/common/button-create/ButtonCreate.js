
import React from 'react';
import styles from './ButtonCreate.module.scss'

function ButtonCreate(props) {
    const { tabIndex, className, fontSize, title, disabled, height, type } = props;
    const onClick = () => {
        if (typeof props.onClick === 'function') {props.onClick();}
    };
    return (
        <div
            className={`${styles.buttonCreate} d-flex align-items-center justify-content-center`}
        >
            <button
                type={type ?? "button"}
                onClick={onClick}
                className={`${className} btn btn-primary`}
            >
                <span
                >
                    {props.title}
                </span>
            </button>
        </div>
    );
}
export default ButtonCreate;
