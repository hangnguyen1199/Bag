import React from "react";
import styles from "./Home.module.scss";
import ImageCommon from "../common/img/Image";
import IconWater from "../common/icons/ic-water";
import IconSafe from "../common/icons/ic-safe";

function FeatureComponent(props) {
    return (
        <div className={styles.featureBox}>
            <div className={styles.titleFeature}>
                <h1>TÍNH NĂNG</h1>
                <div className={styles.title}>
                    Khám phá chi tiết tính năng đặc trưng của túi bao tử đeo
                    chéo Owbag
                </div>
            </div>
            <div className={styles.contentFeature}>
                <div className={styles.children}>
                    <div
                        className={styles.image}
                        style={{ flex: 1}}
                    >
                        <ImageCommon
                            defaultImage="/images/Rectangle1.png"
                            className="w-100 h-100"
                            src={"/images/Rectangle1.png"}
                        />
                    </div>
                    <div className={styles.childrenTitle} style={{ flex: 1 }}>
                        <div className={styles.icon}>
                            <IconWater />
                        </div>
                        <div className={styles.title}>
                            <h1>Phù hợp với mọi thời tiết</h1>
                            <h6>
                                Được làm từ chất liệu Melan, kết hợp với khóa
                                kéo kháng nước tốt, dù nắng hay mưa, những vật
                                dụng bên trong vẫn sẽ được bảo quản.
                            </h6>
                        </div>
                    </div>
                </div>
                <div
                    className={styles.childrenTwo}
                >
                    <div className={styles.image} style={{ flex: 1 }}>
                        <ImageCommon
                            defaultImage="/images/Rectangle1.png"
                            className="w-100 h-100"
                            src={"/images/Rectangle1.png"}
                        />
                    </div>
                    <div className={styles.childrenTitle} style={{ flex: 1 }}>
                        <div className={styles.icon}>
                            <IconSafe />
                        </div>
                        <div className={styles.title}>
                            <h1>Đa tính năng và an toàn</h1>
                            <h6>
                                Dễ dàng thay đổi nhiều kiểu đeo khác nhau, cùng
                                với dây đai mềm mại, chắc chắn, có thể điều
                                chỉnh linh hoạt, phù hợp với nhiều vóc dáng.
                            </h6>
                        </div>
                    </div>
                </div>
                <div className={styles.children}>
                    <div
                        className={styles.image}
                        style={{ flex: 1}}
                    >
                        <ImageCommon
                            defaultImage="/images/Rectangle1.png"
                            className="w-100 h-100"
                            src={"/images/Rectangle1.png"}
                        />
                    </div>
                    <div className={styles.childrenTitle} style={{ flex: 1 }}>
                        <div className={styles.icon}>
                            <IconWater />
                        </div>
                        <div className={styles.title}>
                            <h1>Phù hợp với mọi thời tiết</h1>
                            <h6>
                                Được làm từ chất liệu Melan, kết hợp với khóa
                                kéo kháng nước tốt, dù nắng hay mưa, những vật
                                dụng bên trong vẫn sẽ được bảo quản.
                            </h6>
                        </div>
                    </div>
                </div>
                <div
                    className={styles.childrenTwo}
                >
                    <div className={styles.image} style={{ flex: 1 }}>
                        <ImageCommon
                            defaultImage="/images/Rectangle1.png"
                            className="w-100 h-100"
                            src={"/images/Rectangle1.png"}
                        />
                    </div>
                    <div className={styles.childrenTitle} style={{ flex: 1 }}>
                        <div className={styles.icon}>
                            <IconSafe />
                        </div>
                        <div className={styles.title}>
                            <h1>Đa tính năng và an toàn</h1>
                            <h6>
                                Dễ dàng thay đổi nhiều kiểu đeo khác nhau, cùng
                                với dây đai mềm mại, chắc chắn, có thể điều
                                chỉnh linh hoạt, phù hợp với nhiều vóc dáng.
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatureComponent;
