import { connect } from 'react-redux';
import { addMessage, updateMessage } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs'


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newTextMessage: state.dialogsPage.newTextMessage
    }
}
 
let DialogsContainer = connect(mapStateToProps, {addMessage, updateMessage})(Dialogs)

export default DialogsContainer;