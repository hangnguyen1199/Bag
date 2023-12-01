import React from "react";
import styles from "./RenderInput.module.scss";

function RenderInput(props) {
    const {
        input,
        placeholder,
        type,
        className,
        label,
        value,
        min,
        meta: { touched, error },
    } = props;
    const showError = touched && error;
    const preventMinus = (e) => {
        if (e.code === 'Minus') {
            e.preventDefault();
        }
    };
    return (
        <div className={` ${showError && "border-error"} form-group row`}>
            <label className="col-lg-2 d-flex" style={{ fontSize: 16 }}>
                {label}
                <span style={{ color: "red" }}>*</span>
            </label>
            <div className={`col-lg-10`}>
                <div
                    className={` ${styles.renderIpnut} render-input position-relative`}
                >
                    <div className="position-relative">
                        <input
                            type={type ?? "text"}
                            {...input}
                            className={`w-100 form-control ${className}`}
                            placeholder={placeholder}
                            min={min}
                            required
                            onKeyPress={preventMinus}
                        />
                    </div>
                    <div
                        className={`${styles.errorFloat} ${
                            showError ? "" : "d-none"
                        } `}
                    >
                        <div className="wrap _shadow1">
                            <span style={{ color: "red" }}>{error}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
RenderInput.defaultProps = {
    placeholder: "Nhập ...",
    type: "text",
};
export default RenderInput;
