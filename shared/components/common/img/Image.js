import React from 'react';

function ImageCommon(props) {
    const {
        width,
        height,
        className,
        src,
        defaultImage,
        style,
        seo = "seeding",
        srcset,
        sizes,
    } = props;
    const onError = (e) => {
        e.target.onerror = null;
        e.target.src = defaultImage;
    };
    const onClick = () => {
        if (typeof props.onClick === 'function') {
            props.onClick();
        }
    };
    return  (
        <img
            width={width}
            height={height}
            style={style}
            className={`object_fit_cover ${className ?? ''}`}
            src={src?? defaultImage}
            onError={onError}
            onClick={onClick}
            alt={seo}
            title={seo}
            srcSet={srcset?.toString()}
            size={sizes}
        />
    );
}
ImageCommon.defaultProps = {
    defaultImage: '',
};
export default ImageCommon;
