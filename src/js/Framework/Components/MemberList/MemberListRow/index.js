import React, { Component } from 'react';
import {Button} from  '../../../Plugins/BootstrapReact';
import {Link} from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ConfirmModalActions from '../../../Store/confirmModalReducer/actions';


class MemberListRow extends Component {

    constructor() {
        super();
        this.showDeleteDialog = this.showDeleteDialog.bind(this);
    }

    showDeleteDialog() {
        this.props.showConfirmModal(this.props.member.id);
    }

    render() {
        let member = this.props.member, 
            typeMemberClass = ['','text-danger', 'text-muted'];
        return (
            <tr>
                <td className={typeMemberClass[member.statusNumber]}>{member.firstName}</td>
                <td className={typeMemberClass[member.statusNumber]}>{member.lastName}</td>
                <td>{member.birthdate}</td>
                <td>{member.dateHired}</td>
                <td>{member.contactNumber}</td>
                <td>{member.status}</td>
                <td>
                    <Link to={'/members/'+member.id}><Button variant='info'>View</Button></Link>
                    <Button variant='danger' onClick={this.showDeleteDialog}>Delete</Button>
                    <Link to={'/members/edit/'+member.id}><Button variant='warning'>Edit</Button></Link>
                </td>
            </tr>
        );
      }

}

const mapStateToProps = function(state){
  return state.confirmModal;
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    showConfirmModal: ConfirmModalActions.showConfirmModal,
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(MemberListRow)
