import React, { Component } from 'react';

class MemberListHeader extends Component {

    getMemberTableHeaders = () => {
        
        return [
            'First Name',
            'Last Name',
            'Birthday',
            'Date Hired',
            'Contact Number',
            'Status',
            'Actions',
        ].map((theader, key)=>  <th key={key}>{theader}</th>);
    }
    

    render() {
        return (
            <thead>
                <tr>
                    {this.getMemberTableHeaders()}
                </tr>
            </thead>
        );
      }

}
export default MemberListHeader;
