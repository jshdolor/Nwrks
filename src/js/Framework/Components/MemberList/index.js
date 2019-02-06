import React, { Component } from 'react';

import MemberListRow from './MemberListRow';
import MemberListHeader from './MemberListHeader';

import {Table} from  '../../Plugins/BootstrapReact';

import GetMembers from  '../../../Application/Services/Member/GetMembers';
class MemberList extends Component {

    constructor() {
        super();
        this.state = {
            members: []
        };
    }

    componentDidMount() {

        GetMembers.snapShot((members) => {
            this.setState({
                members: members,
            });
        });

    }


    memberRows = () => {
        // let rows = [];
        return this.state.members.map((member) => {
            return <MemberListRow 
                    member={member} 
                    key={member.id}></MemberListRow>;
        });
    }

    render() {
        return (
          <Table striped bordered hover>
            <MemberListHeader></MemberListHeader>
            <tbody>
                {
                    this.state.members.length > 0 ? 
                    this.memberRows() 
                    : <tr><td colSpan='7'>No Members Yet..</td></tr>
                }
            </tbody>
          </Table>
        );
      }

}
export default MemberList;