import React, { Component } from 'react';
import MemberForm from '../../MemberForm';
import MemberList from '../../MemberList';

class HomeModule extends Component {

    render() {
        return (
            <>
            <section>
                <MemberForm title='Add a Member'></MemberForm>
            </section>
            <section>
                <MemberList></MemberList>
            </section>

            </>
        );
      }

}
export default HomeModule;
