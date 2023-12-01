
import Swal from 'sweetalert2'

// import EventRegister, {
//     EVENT_SHOW_POPUP,
//     POPUP_TEXT_TYPE,
//     EVENT_SHOW_POPUP2,
//     FIRST_POPUP,
//     POPUP_SUCCESS_TYPE,
// } from './EventRegister';

export default class Utils {
    // static alertPopup (
    //     title = 'Title',
    //     type = POPUP_TEXT_TYPE,
    //     callback = null,
    //     layer = FIRST_POPUP,
    //     backdropCallback = null
    // ) {
    //     let eventName = layer == FIRST_POPUP ? EVENT_SHOW_POPUP : EVENT_SHOW_POPUP2
    //     let typePopup = POPUP_TEXT_TYPE;
    //     switch (type) {
    //         case POPUP_SUCCESS_TYPE:
    //             typePopup=POPUP_SUCCESS_TYPE;
    //             break;
    //         default:
    //             typePopup = POPUP_TEXT_TYPE;
    //             break;
    //     }
    //     EventRegister.emit(eventName, {
    //         type   : typePopup,
    //         open   : true,
    //         payload: {
    //             title: title,
    //             callback,
    //             backdropCallback
    //         },
    //     });
    // }
    static alertPopup(
        title = 'Title',
        icon = '',
        showConfirmButton = 'false',
        timer = '',
    ){
        Swal.fire({
            confirmButtonColor: "#0B2A97",
            timer:timer,
            icon: icon,
            title: title,
            showConfirmButton: showConfirmButton,
            confirmButtonText: "Đóng",
        })
    }
    static specialTrim (str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
        str = str.replace(/đ/g, 'd');
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'a');
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'e');
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'i');
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'o');
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'u');
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'y');
        str = str.replace(/Đ/g, 'd');
        // clear special character
        str = str.replace(/,|\./g, '');
        //
        str = str.toUpperCase();
        return str;
    }
}
