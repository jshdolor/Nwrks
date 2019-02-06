import React, { Component } from 'react';
import {Button} from  '../../../Plugins/BootstrapReact';
import {Link} from 'react-router-dom';

class MemberListRow extends Component {

    render() {
        let member = this.props.member;
        return (
            <tr>
                <td>{member.firstName}</td>
                <td>{member.lastName}</td>
                <td>{member.birthdate}</td>
                <td>{member.dateHired}</td>
                <td>{member.contactNumber}</td>
                <td>{member.status}</td>
                <td>
                    <Link to={'/members/'+member.id}><Button variant='info'>View</Button></Link>
                    <Link to={'/members/:id'}><Button variant='danger'>Delete</Button></Link>
                    <Link to={'/members/edit/'+member.id}><Button variant='warning'>Edit</Button></Link>
                </td>
            </tr>
        );
      }

}
export default MemberListRow;
