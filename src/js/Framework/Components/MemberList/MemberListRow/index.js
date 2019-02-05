import React, { Component } from 'react';
import {Button} from  '../../../Plugins/BootstrapReact';
import {Link} from 'react-router-dom';

class MemberListRow extends Component {

    render() {
        let member = this.props.member;
        return (
            <tr>
                <td>{member.first_name}</td>
                <td>{member.first_name}</td>
                <td>{member.first_name}</td>
                <td>{member.first_name}</td>
                <td>{member.first_name}</td>
                <td>{member.first_name}</td>
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
