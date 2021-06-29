const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

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
        newTextMessage: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 6,
                message: state.newTextMessage,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newTextMessage: "",
            };
        }
        case UPDATE_MESSAGE: {
            return {
                ...state,
                newTextMessage: action.textMessage
            };
        }
        default:
            return state;
    }
}

export const addMessage = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateMessage = (text) => {
    return {
        type: UPDATE_MESSAGE,
        textMessage: text
    }
}

export default dialogsReducer;