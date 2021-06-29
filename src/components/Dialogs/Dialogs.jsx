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


    let onAddMessage = () => {
       props.addMessage();
    }

    let omUpdateMessage = (e) => {
        let text = e.target.value;
        props.updateMessage(text);
    }



    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <div>
                    <textarea placeholder={"send your message"} onChange={omUpdateMessage}  value={props.newTextMessage}></textarea>
                </div>
                <div>
                    <button onClick={onAddMessage}>send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;