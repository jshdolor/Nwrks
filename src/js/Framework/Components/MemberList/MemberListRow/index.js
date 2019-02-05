import React, { Component } from 'react';
import {Button} from  '../../../Plugins/BootstrapReact';
import {Link} from 'react-router-dom';

class MemberListRow extends Component {

    click = () => {

    }
    render() {
        return (
            <tr>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>
                    <Link to={'/members/:id'}><Button variant='info'>View</Button></Link>
                    <Link to={'/members/:id'}><Button variant='danger'>Delete</Button></Link>
                    <Link to={'/members/:id'}><Button variant='warning'>Edit</Button></Link>
                </td>
            </tr>
        );
      }

}
export default MemberListRow;
