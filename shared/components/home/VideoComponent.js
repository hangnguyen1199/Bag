import React from "react";
import styles from "./Home.module.scss";

export default function VideoComponent(props) {
    return (
        <div className={styles.videoBox}>
            <div className={styles.content}>
                <div className={styles.titleName}>
                    CHALLENGING ALL ROAD<br/> THÁCH THỨC MỌI CUNG ĐƯỜNG
                </div>
                <div className={styles.titleContent}>
                    Thấu hiểu được những nhu cầu, mong muốn của phái nam về một
                    phụ kiện - túi bao tử nam chất lượng, chống chịu được ở mọi
                    điều kiện thời tiết, khí hậu, phù hợp với mọi địa điểm, cung
                    đường
                </div>
            </div>
            <div className={styles.video}>
                <video width="100%" height="100%" controls>
                    <source src="https://www.youtube.com/watch?v=IdneKLhsWOQ&list=RDo_1aF54DO60&index=27" type="video/mp4"/>
                </video>
            </div>
        </div>
    );
}
