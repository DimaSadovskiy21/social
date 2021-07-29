import React, { useEffect, useState } from 'react';


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)
    
     useEffect(() => {
        setStatus(props.status); 
    }, [props.status] )

    const activeteEditMode = () => {
            setEditMode(true);  
    }

    const deActiveteEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }


        return (
            <div>
                {!editMode &&
                <div>
                    <span onDoubleClick={props.isOwner && activeteEditMode}><b>Status: </b>{props.status || "No status"}</span>
                </div>}
                {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deActiveteEditMode} value={status} />
                </div>}
            </div>
        )
}

export default ProfileStatusWithHooks;