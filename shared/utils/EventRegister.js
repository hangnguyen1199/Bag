export const EVENT_SHOW_POPUP = 'SHOW_POPUP';
export const EVENT_SHOW_POPUP2 = 'SHOW_POPUP2';
export const POPUP_TEXT_TYPE = 'POPUP_TEXT_TYPE';
export const POPUP_SUCCESS_TYPE = 'POPUP_SUCCESS_TYPE';
// Key popup
export const FIRST_POPUP = 1;
export const SECOND_POPUP = 2;

export default class EventRegister {
    static listeners = {
        count: 0,
        refs: {},
    };

    static addEventListener(eventName, callback) {
        if (typeof eventName === 'string' && typeof callback === 'function') {
            EventRegister.listeners.count++;
            const eventId = 'l' + EventRegister.listeners.count;
            EventRegister.listeners.refs[eventId] = {
                name: eventName,
                callback,
            };
            return eventId;
        }
        return false;
    }

    static removeEventListener(id) {
        if (typeof id === 'string') {
            return delete EventRegister.listeners.refs[id];
        }
        return false;
    }

    static removeAllListeners() {
        let removeError = false;
        Object.keys(EventRegister.listeners.refs).forEach((id) => {
            const removed = delete EventRegister.listeners.refs[id];
            removeError = !removeError ? !removed : removeError;
        });
        return !removeError;
    }

    static emitEvent(eventName, data) {
        Object.keys(EventRegister.listeners.refs).forEach((id) => {
            if (
                EventRegister.listeners.refs[id] &&
                eventName === EventRegister.listeners.refs[id].name
            ) {
                EventRegister.listeners.refs[id].callback(data);
            }
        });
    }

    static on(eventName, callback) {
        return EventRegister.addEventListener(eventName, callback);
    }

    static off(eventName) {
        return EventRegister.removeEventListener(eventName);
    }

    static offAll() {
        return EventRegister.removeAllListeners();
    }

    static emit(eventName, data) {
        EventRegister.emitEvent(eventName, data);
    }
}
