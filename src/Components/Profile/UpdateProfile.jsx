import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Image, Button, Form, Message } from 'semantic-ui-react';

import UpdateForm from './UpdateForm';

export default class UpdateProfile extends Component {

    static propTypes = {
        updateProfile: PropTypes.func,
        errorMessage: PropTypes.string,
        isLoading: PropTypes.bool,
        open: PropTypes.bool,
        dimmer: PropTypes.bool,
        close: PropTypes.func,
        clearFormStatus: PropTypes.func,
        refreshProfile: PropTypes.func,
        profile: PropTypes.object,
        uploadImage: PropTypes.func,
    };

    render() {

        const {
            updateProfile,
            errorMessage,
            isLoading,
            clearFormStatus,
            open,
            dimmer,
            close,
            refreshProfile,
            profile,
            uploadImage,
        } = this.props;

        return (

            <Modal dimmer={dimmer} open={open} onClose={close} >
                <Modal.Header>Update Profile</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='medium' src={profile.avatarUrl} />
                    <Modal.Description>
                        <UpdateForm
                            updateProfile={updateProfile}
                            close={close}
                            formError={errorMessage}
                            isLoading={isLoading}
                            clearFormStatus={clearFormStatus}
                            refreshProfile={refreshProfile}
                            profile={profile}
                            uploadImage={uploadImage}
                        />
                    </Modal.Description>
                </Modal.Content>
            </Modal>

        );
    }
}