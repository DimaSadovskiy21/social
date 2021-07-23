import dialogsReducer, {addMessage} from "./dialogs-reducer";

let state = {
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

test('the 6th message should be added', () => {
    
    let action = addMessage("addMessage");
    let newState = dialogsReducer(state, action);

    expect(newState.messages.length).toBe(6);
  });

 test('the message with id6 should be addMessage', () => {
    
    let action = addMessage("addMessage");
    let newState = dialogsReducer(state, action);

    expect(newState.messages[5].message).toBe("addMessage");
  });

