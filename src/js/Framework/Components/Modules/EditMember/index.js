import React, { Component } from 'react';
import MemberForm from '../../MemberForm';

import GetSpecificMemberRequest from '../../../../Application/Services/Member/Request/GetSpecificMemberRequest';
import GetSpecificMemberService from '../../../../Application/Services/Member/GetSpecificMember';

class EditMemberComponent extends Component {

    constructor() {
        super();
        this.state =  {
            memberDetails : {}
        }
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

    render() {
        return (
            <section>
            <MemberForm  title='Edit Member' member={this.state.memberDetails}/>
            </section>
        );
      }

}
export default EditMemberComponent;
