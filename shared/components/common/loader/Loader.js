import React from "react";
import styles from "./Loader.module.scss";
export default function Loader(props) {
    return (
        // <div className={`${styles.loaderPage} wrap-loader`}>
        //     <div className={`${styles.loader}`}>
        //         <img src='http://media.giphy.com/media/s4KqhlPU9Ypnq/giphy.gif'></img>
        //     </div>
        // </div>
        <div className={`${styles.wrapLoader} d-center`}>
            <div className={`${styles.loader}`}>
                <img
                    src="/images/loading.gif"
                    alt="Loading..."
                />
            </div>
        </div>
    );
}
