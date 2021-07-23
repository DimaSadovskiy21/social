import profileReducer,  { deletePost } from "./profile-reducer";
import { addPost } from "./profile-reducer";

let state = {
    posts: [
        { id: 1, message: "I'm react developer", like: "777" },
        { id: 2, message: "Hi, how are you?", like: "1277" },
        { id: 3, message: "Hi, I'm Dima", like: "2121" },
    ],
}; 

test('the 4th post should be added', () => {
    
    let action = addPost("addPost");
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
  });

test('the message should be addPost', () => {

let action = addPost("addPost");
let newState = profileReducer(state, action);

expect(newState.posts[3].message).toBe("addPost");
});

test('the message with id1 should be deleted', () => {

    let action = deletePost(1);
    let newState = profileReducer(state, action);
    
    expect(newState.posts.length).toBe(2);
    });

  
