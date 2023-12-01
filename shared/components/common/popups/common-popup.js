import React, { useEffect, useState } from 'react';
// import { handleScroll } from '../../../library/helper';
import EventRegister, {
    EVENT_SHOW_POPUP, EVENT_SHOW_POPUP2,
    FIRST_POPUP, POPUP_SUCCESS_TYPE, REFUND_REASON_POPUP
} from '../../../utils/EventRegister';
import SuccessPopup from './success-popup';


const CommonPopup = (props) => {
    let zIndex = props?._key == FIRST_POPUP ? 1050 : 1052
    const [visible, showVisible] = useState(false);
    const [type, setType] = useState(REFUND_REASON_POPUP);
    const [payload, setPayload] = useState(null);
    useEffect(() => {
        let eventName = props?._key == FIRST_POPUP ? EVENT_SHOW_POPUP : EVENT_SHOW_POPUP2
        const reloadEvent = EventRegister.on(eventName, (params) => {
            showVisible(false);
            setTimeout(() => {
                if (params) {
                    setType(params.type);
                    showVisible(params.open);
                    setPayload(params?.payload);
                }
            }, 100);
        });
        return () => {
            EventRegister.off(reloadEvent);
        };
    }, []);

    useEffect(() => {
        let _class = props?._key == FIRST_POPUP ? 'popup-open' : 'popup-open-layer2'
        // handleScroll(visible, _class)
        // if (visible) {
        //     // $('html').addClass('popup-open');
        //     if ($(document).height() > $(window).height()) {
        //         var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop(); // Works for Chrome, Firefox, IE...
        //         $('html').addClass('popup-open').css('top', -scrollTop);
        //     }
        // } else {
        //     // $('html').removeClass('popup-open');
        //     var scrollTop = parseInt($('html').css('top'));
        //     $('html').removeClass('popup-open');
        //     $('html,body').scrollTop(-scrollTop);
        // }
    }, [visible]);

    const hiddenPopup = () => {
        showVisible(false);
        payload?.backdropCallback &&  payload.backdropCallback()
    };

    const getType = () => {
        switch (type) {
            case POPUP_SUCCESS_TYPE:
                return <SuccessPopup payload={payload} showVisible={hiddenPopup} />
            default:
                return (
                    <SuccessPopup payload={payload} showVisible={hiddenPopup} />
                );
        }
    };
    const handleStopPropagation = (e) => {
        e.stopPropagation();
    };
    return (
        visible && (
            <>
                <div
                    className={`wrap_common_popup ${visible ? 'show' : ''} ${payload?.className ?? ""}`}
                    id="commonPopup"
                    onClick={hiddenPopup}
                    style={{ zIndex: zIndex + 1 }}
                >
                    <div className="popup-dialog">
                        <div
                            className="popup-content"
                            onClick={handleStopPropagation}>
                            {getType() ?? <></>}
                        </div>
                    </div>
                </div>
                <div
                    style={{ zIndex: zIndex }}
                    className={`popup-backdrop fade ${visible ? 'show' : ''
                    }`}></div>
            </>
        )
    );
};

export default CommonPopup;
