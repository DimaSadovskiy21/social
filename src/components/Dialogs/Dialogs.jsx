import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormControls/FormControls';
import { maxLengthCreator, required } from '../../helpers/validate/validate';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import MessageItem from './MessageItem/MessageItem';



const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map((d) => {
        return <DialogsItem key={d.id} id={d.id} name={d.name} />
    });

    let messagesElements = props.messages.map((m) => {
        return < MessageItem key={m.id} id={m.id} message={m.message} />
    })


    let onAddMessage = (values) => {
        props.addMessage(values.addMessageText)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
           <AddMessageFormRedux onSubmit={onAddMessage}/>
        </div>
    )
}

let maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name={"addMessageText"} placeholder={"send your message"} validate={[required, maxLength50]}/>
        </div>
        <div>
            <button>send</button>
        </div>
    </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: 'message'
  })(AddMessageForm)

export default Dialogs;