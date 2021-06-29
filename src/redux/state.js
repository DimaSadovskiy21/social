// import dialogsReducer from "./dialogs-reducer";
// import profileReducer from "./profile-reducer";

// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 { id: 1, message: "I'm react developer", like: "777" },
//                 { id: 2, message: "Hi, how are you?", like: "1277" },
//                 { id: 3, message: "Hi, I'm Dima", like: "2121" },
//             ],
//             newPostText: 'add',
//         },
//         dialogsPage: {
//             dialogs: [
//                 { id: 1, name: "Dima" },
//                 { id: 2, name: "Gosha" },
//                 { id: 3, name: "Petr" },
//                 { id: 4, name: "Vanya" },
//                 { id: 5, name: "Olga" },
//                 { id: 6, name: "Dima" },
//             ],

//             messages: [
//                 { id: 1, message: "Hi" },
//                 { id: 2, message: "How are you?" },
//                 { id: 3, message: "Yo" },
//                 { id: 4, message: "Yo" },
//                 { id: 5, message: "Yo" },
//             ],
//             newTextMessage: '',
//         }
//     },
//     getState() {
//         return this._state;
//     },
//     _callSubscriber() {
//         console.log("state change");
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._callSubscriber(this._state);
//     }
// }

// window.store = store;

// export default store;





