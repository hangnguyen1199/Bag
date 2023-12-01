import React from 'react';
import style from "./CustomFrame.module.scss"

function CustomFrame(props) {
    const { ratio } = props;
    return (
        <div
            className={style.containerRatio}
            style={{ paddingTop: `${ratio * 100}%` }}
        >
            <div className={`${style.ratio} ${props?.className ?? ""}`}>{props.children}</div>
        </div>
    );
}
export default CustomFrame;
