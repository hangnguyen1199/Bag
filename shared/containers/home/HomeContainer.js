import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./HomeContainer.module.scss";
import ButtonCreate from "../../components/common/button-create/ButtonCreate";
import ImageCommon from "../../components/common/img/Image";
import Box from "../../components/common/box/Box";
import VideoComponent from "../../components/home/VideoComponent";
import FeatureComponent from "../../components/home/FeatureComponent";

function HomeContainer(props) {
    const dispatch = useDispatch();

    const software = [];

    return (
        <div>
            <div
                className={styles.pageHome}
                style={{ backgroundImage: `url("/images/banner1.png")` }}
            >
                <div className={styles.contentBannerBox}>
                    <Box>
                        <div className={styles.contentBanner}>
                            <div className={styles.contentLeft}>
                                <div className={styles.titleBanner}>
                                    CHALLENGING <br /> ALL ROAD
                                </div>
                                <div className={styles.buttonShow}>
                                    <ButtonCreate title="Xem ngay" />
                                </div>
                            </div>
                            <div className={styles.image}>
                                <ImageCommon
                                    defaultImage="/images/shadow.png"
                                    className="w-100 h-100"
                                    src={"/images/shadow.png"}
                                />
                            </div>
                        </div>
                    </Box>
                </div>
            </div>
            <Box>
                <div className={styles.contentBox}>
                    <VideoComponent />
                    <FeatureComponent/>
                </div>
            </Box>
        </div>
    );
}
export default HomeContainer;
