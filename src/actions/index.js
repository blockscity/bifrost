export function init() {
    return async function (dispatch, state) {
        dispatch({
            type: "INIT",
            root: state
        });
    };
}