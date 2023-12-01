import React, { useEffect } from "react";

function RenderHiddenText(props) {
    const { input, placeholder, type, className, label, value, min } = props;
    useEffect(() => {
        input?.onChange(placeholder);
    }, [placeholder]);

    return <input type="hidden" {...input} />;
}
RenderHiddenText.defaultProps = {
    type: "text",
};
export default RenderHiddenText;
