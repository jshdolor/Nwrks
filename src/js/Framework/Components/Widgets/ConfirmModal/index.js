import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {Modal, Button} from '../../../Plugins/BootstrapReact';
import ConfirmModalActions from '../../../Store/confirmModalReducer/actions';

import DeleteMemberRequest from '../../../../Application/Services/Member/Request/DeleteMemberRequest';
import DeleteMemberService from '../../../../Application/Services/Member/DeleteMember';


class ConfirmModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.deleteMember = this.deleteMember.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    deleteMember() {
      let request = new DeleteMemberRequest({id:this.props.id});

      DeleteMemberService.handle(request).then(() => {
      }).finally(() => {
        this.props.hideConfirmModal();
      });
      
    }
    render() {
        return (
            <Modal show={this.props.show} onHide={this.handleClose}>
          <Modal.Header >
            <Modal.Title>Are you sure to delete this member?</Modal.Title>
          </Modal.Header>
          <Modal.Body>He/She will be deleted permanently.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.hideConfirmModal}>
              Close
            </Button>
            <Button variant="primary" onClick={this.deleteMember}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
          );
    }
}

const mapStateToProps = function(state){
  return state.confirmModal;
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    showConfirmModal: ConfirmModalActions.showConfirmModal,
    hideConfirmModal: ConfirmModalActions.hideConfirmModal,
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ConfirmModal)