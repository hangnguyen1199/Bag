import React from 'react';
import UseWindowSize from '../../library/use-window-size';

import constants from './../../config/constants';

function Display(props) {
    const { mobile, children, show } = props;
    const windowSize = UseWindowSize();
    return show
        ? mobile
            ? windowSize?.width < constants.WINDOW_SIZE.MEDIUM && children
            : windowSize?.width >= constants.WINDOW_SIZE.MEDIUM && children
        : null;
}
Display.defaultProps = {
    mobile: false,
    show: true,
};
export default Display;
