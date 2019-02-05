import React, { Component } from 'react';

import MemberListRow from './MemberListRow';
import MemberListHeader from './MemberListHeader';

import {Table} from  '../../Plugins/BootstrapReact';
class MemberList extends Component {


    memberRows = () => {
        let rows = [];
        for (var i = 0; i <10; i++) {
            rows.push(
                <MemberListRow 
                    member={{id:i}} 
                    key={i}></MemberListRow>
            );
        }
        return rows;
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