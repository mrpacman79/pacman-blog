const initialStateGlobal = {
    name: "Agus"
}

const globalReducer = (state = initialStateGlobal, action) => {
    if(action.type === "UPDATE_NAME") {
        return {
            ...state,
            name: "Gusryl"
        }
    }
    return state
}

export default globalReducer;