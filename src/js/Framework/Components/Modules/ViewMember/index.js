import React, { Component } from 'react';

import Config from '../../../../Application/Config';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ConfirmModalActions from '../../../Store/confirmModalReducer/actions';

import GetSpecificMemberRequest from '../../../../Application/Services/Member/Request/GetSpecificMemberRequest';
import GetSpecificMemberService from '../../../../Application/Services/Member/GetSpecificMember';
import {Col,Row, Button} from  '../../../Plugins/BootstrapReact';
import {Link} from 'react-router-dom';



class ViewMemberModule extends Component {

    constructor() {
        super();

        this.state = {
            memberDetails : {}
        }

        this.showDeleteDialog = this.showDeleteDialog.bind(this);

    }

    componentDidMount() {
        let request = new GetSpecificMemberRequest({id: this.props.match.params.id});
        GetSpecificMemberService.handle(request)
            .then(data => {
                this.setState({memberDetails:data});
            })
            .catch(() => {
                //no member with the given id
                this.props.history.push("/");
            });
    }

    showDeleteDialog() {
        this.props.showConfirmModal(this.props.match.params.id);
    }

    getFields = () => {
        let rows = [], field;
        for(field of Config.memberFields) {
            rows.push(<Row key={field.name}><Col xs={3}>{field.label} : </Col><Col>{this.state.memberDetails[field.name]}</Col></Row>);
        }
        return rows;
    }

    render() {
        return (
            <section>
            <h1>{this.state.memberDetails.displayName}</h1>
            <Button variant={'danger'} onClick={this.showDeleteDialog} >Delete</Button>
            <Link to={'/member/' + this.state.memberDetails.id + '/edit'}><Button variant={'warning'}>Edit</Button></Link>
            {this.getFields()}
            </section>

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
export default connect(mapStateToProps, mapDispatchToProps)(ViewMemberModule)

