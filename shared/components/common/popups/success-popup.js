import React from "react";

function SuccessPopup(props) {
    const { payload, showVisible } = props;
    const handleClick = () => {
        if (typeof payload.callback == "function") {
            payload.callback();
        }
        showVisible(false);
    };
    return (
        <div className="save-success-popup">
            <div
                style={{
                    textAlign: "center",
                    marginTop: 20,
                    fontSize: 14,
                    fontWeight: "normal",
                }}
            >
                {payload?.title}
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 20,
                }}
            >
                <div style={{ width: 140 }}></div>
            </div>
        </div>
    );
}
SuccessPopup.defaultProps = {
    payload: {
        title: "Đã lưu thành công",
    },
};
export default SuccessPopup;
