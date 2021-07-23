const ADD_MESSAGE = "my-app/dialogsReducer/ADD-MESSAGE";


let initialState = {
        dialogs: [
            { id: 1, name: "Dima" },
            { id: 2, name: "Gosha" },
            { id: 3, name: "Petr" },
            { id: 4, name: "Vanya" },
            { id: 5, name: "Olga" },
            { id: 6, name: "Dima" },
        ],
        messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "How are you?" },
            { id: 3, message: "Yo" },
            { id: 4, message: "Yo" },
            { id: 5, message: "Yo" },
        ],
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 6,
                message: action.addMessageText,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newTextMessage: "",
            };
        }
        default:
            return state;
    }
}

export const addMessage = (addMessageText) => {
    return {
        type: ADD_MESSAGE, addMessageText
    }
}


export default dialogsReducer;