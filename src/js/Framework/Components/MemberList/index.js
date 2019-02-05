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
        GetMembers.handle()
            .then(data => {
                this.setState({
                    members: data,
                });
            });
    }


    memberRows = () => {
        // let rows = [];
        return this.state.members.map((member, key) => {
            return <MemberListRow 
                    member={{id:2}} 
                    key={key}></MemberListRow>;
        });
    }

    render() {
        return (
          <Table striped bordered hover>
            <MemberListHeader></MemberListHeader>
            <tbody>
                {this.memberRows()}
            </tbody>
          </Table>
        );
      }

}
export default MemberList;