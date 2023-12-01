import React from "react";
import styles from "./RenderTextarea.module.scss";

function RenderTextarea(props) {
    const { input, placeholder, type, rows, label, className,
        meta: { touched, error },
    } = props;
    const showError = touched && error;
    return (
        <div className="form-group row">
            <label className="col-lg-2 d-flex" style={{ fontSize: 16 }}>
                {label}
                <span style={{ color: "red" }}>*</span>
            </label>
            <div className={`col-lg-10`}>
                <div
                    className={` ${styles.renderTextarea} ${showError && "border-error"} render-input position-relative`}
                >
                    <div className="position-relative">
                        <textarea
                            {...input}
                            type={type ?? "text"}
                            rows={rows}
                            className={`w-100 form-control ${className}`}
                            placeholder={placeholder}
                            required
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
RenderTextarea.defaultProps = {
    placeholder: "Nhập ...",
    type: "text",
    className: "",
    rows: 5,
};
export default RenderTextarea;
