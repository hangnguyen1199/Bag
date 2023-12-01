import React, { useEffect, useRef, useState } from "react";
import styles from "./RenderInput.module.scss";
import { CloseOutlined } from "@ant-design/icons";
import { debounce } from 'lodash';

function RenderInput(props) {
    const { input, placeholder, type, className, label, id, name } = props;
    return (
        <form className={`${styles.inputSearch} form-group d-flex align-items-center`}>
            <label>{label}</label>
            <input
                type="search"
                id={id}
                name={name}
                {...input}
                className={`${className}`}
                placeholder={placeholder}
            />
        </form>
    );
}
RenderInput.defaultProps = {
    placeholder: "",
    type: "text",
};
export default RenderInput;
