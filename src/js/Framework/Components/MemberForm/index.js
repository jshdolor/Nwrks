import React, { Component } from 'react';

import {Form, Button, Row, Col} from  '../../Plugins/BootstrapReact';

import FormField from '../Widgets/FormField';
import Config from '../../../Application/Config';

import AddMemberRequest from  '../../../Application/Services/Member/Request/AddMemberRequest';

class MemberForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', validated:false};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let formData = {}, ref=null, request=null;
        for(ref in this.refs) {
            if(this.refs[ref]) {
                formData[ref] = this.refs[ref].refs.fieldData.value;
            }
        }
        
        request = new AddMemberRequest(formData);

        console.log(request);
    }


    getFields = () => {
        let fields = [],
            groupedFields = [];

        Config.memberFields.forEach((field, key) => {

            fields.push(field);

            if(((key + 1) % 2) === 0 || key === (Config.memberFields.length - 1)) {
                groupedFields.push(fields);
                fields = [];
            }
            
        });

        return groupedFields.map((group, key) => {
            return <Row key={key}>
                        {group.map((field, fkey) => <Col key={fkey}><FormField ref={field.name}  field={field}></FormField></Col>)}
                </Row>;
        });
    };

    render() {
        const { validated } = this.state;
        return (
            <>
            <h1>{this.props.title}</h1>
            <Form 
                noValidate
                validated={validated}
                onSubmit={this.handleSubmit}>
              {this.getFields()}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            </>
            );
    }

    
}

export default MemberForm;