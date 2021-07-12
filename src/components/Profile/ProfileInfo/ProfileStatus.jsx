import React from 'react';
import { updateUserStatus } from '../../../redux/profile-reducer';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activeteEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActiveteEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activeteEditMode}>{this.props.status || "No status"}</span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActiveteEditMode} value={this.state.status} />
                </div>}
            </div>
        )
    }
}

export default ProfileStatus;