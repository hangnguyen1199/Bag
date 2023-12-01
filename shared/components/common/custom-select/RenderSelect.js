import React, { useEffect } from "react";
import styles from "./RenderSelect.module.scss";

function RenderSelect(props) {
    const { input, placeholder, type, className, label } = props;
    useEffect(() => {
        if (props?.data) {
            input.onChange(props?.data[0]?.option?.id);
        }
    }, [props?.data]);

    return (
        <div className="form-group row">
            <label className="col-lg-2 d-flex" style={{ fontSize: 16 }}>
                {label}
                <span style={{ color: "red" }}>*</span>
            </label>
            <div className={`col-lg-10`}>
                <div
                    className={` ${styles.renderSelect} render-input position-relative`}
                >
                    <div className="position-relative">
                        <select
                            tabIndex={0}
                            {...input}
                            className={`w-100 form-control ${className}`}
                            placeholder={placeholder}
                        >
                            {props?.data?.map((item, index) => {
                                return (
                                    <option
                                        value={item?.option?.id}
                                        key={index}
                                    >
                                        {item?.option?.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <span
                    style={{
                        color: "red",
                        fontStyle: "italic",
                        fontSize: 12,
                    }}
                >
                    {/* Lưu ý: để seeding được nhanh nhất hãy chọn giới tính tất cả */}
                </span>
            </div>
        </div>
    );
}
RenderSelect.defaultProps = {
    placeholder: "Nhập ...",
    className: "",
};
export default RenderSelect;
