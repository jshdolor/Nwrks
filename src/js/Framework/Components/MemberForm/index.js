import React, { Component } from 'react';

import {Form, Button, Row, Col} from  '../../Plugins/BootstrapReact';

import FormField from '../Widgets/FormField';
import AlertDismissable from '../Widgets/AlertDismissable';
import Config from '../../../Application/Config';

import AddMemberRequest from  '../../../Application/Services/Member/Request/AddMemberRequest';
import AddMemberService from  '../../../Application/Services/Member/AddMember';

class MemberForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            value: '', 
            validated:false,
            showMessage : {show:false}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAlertUnmount = this.handleAlertUnmount.bind(this);
    }

    resetForm() {
        this.refs.form.reset();
    }

    handleSubmit(event) {
        event.preventDefault();
        let formData = {}, ref=null, request=null;
        for(ref in this.refs) {
            if(this.refs[ref].refs) {
                formData[ref] = this.refs[ref].refs.fieldData.value;
            }
        }
        
        request = new AddMemberRequest(formData);

        this.validationSuccess(request.getObject());
    }

    validationSuccess(request) {

        AddMemberService.handle(request)
            .then(() => {
                this.resetForm();
                this.setState({
                    showMessage: {
                        show:true, 
                        variant:'success', 
                        message: 'Member Added!'
                    }
                })
            })
            .catch(() => {
                this.setState({
                    showMessage: {
                        show:true, 
                        variant:'danger', 
                        message: 'Member Not Added!'
                    }
                })
            });
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

    handleAlertUnmount(){
        this.setState({showMessage: {show:false}});
    }

    render() {
        const { validated } = this.state;
        return (
            <>
            <h1>{this.props.title}</h1>
            {this.state.showMessage.show ?
                <AlertDismissable 
                unmountAlert={this.handleAlertUnmount}
                variant={this.state.showMessage.variant} 
                message={this.state.showMessage.message} ></AlertDismissable>
                :
                null}
            <Form 
                noValidate
                validated={validated}
                ref='form'
                onSubmit={this.handleSubmit}>
              {this.getFields()}
                <Row>
                    <Col>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Col>
                </Row>
            </Form>
            </>
            );
    }

    
}

export default MemberForm;