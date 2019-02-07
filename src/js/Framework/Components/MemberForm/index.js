import React, { Component } from 'react';

import {Form, Button, Row, Col} from  '../../Plugins/BootstrapReact';

import FormField from '../Widgets/FormField';
import AlertDismissable from '../Widgets/AlertDismissable';
import Config from '../../../Application/Config';

import AddMemberRequest from  '../../../Application/Services/Member/Request/AddMemberRequest';
import AddMemberService from  '../../../Application/Services/Member/AddMember';

import EditMemberRequest from  '../../../Application/Services/Member/Request/EditMemberRequest';
import EditMemberService from  '../../../Application/Services/Member/EditMember';

class MemberForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            value: '', 
            validated:false,
            showMessage : {show:false},
            dataLoaded: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAlertUnmount = this.handleAlertUnmount.bind(this);

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if(this.state.dataLoaded) {
            return ;
        }

        let refField = null, 
            fieldName = null,
            fieldMap = {status: 'statusNumber'};

        if (prevProps.member !== this.state.member) {
            Config.memberFields.forEach(field => {
                refField = this.refs[field.name].refs;
                if(refField) {
                    fieldName = fieldMap[field.name] ? fieldMap[field.name] : field.name;
                    refField.fieldData.value = this.props.member[fieldName];
                }
            })

            this.setState(Object.assign({}, this.state, {dataLoaded:true}));
          }
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

        request = this.props.member ? new EditMemberRequest(formData, this.props.member.id ): new AddMemberRequest(formData);
        this.validationSuccess(request);
    }

    validationSuccess(request) {

        let successMessage = {
            show:true, 
            variant:'success', 
            message: this.props.member ? 'Member Updated!' : 'Member Added!'
        },
        errorMessage = {
            show:true, 
            variant:'danger', 
            message: this.props.member ? 'Member Not Updated!' : 'Member Not Added!'
        },
        service = this.props.member ? EditMemberService : AddMemberService;

        service.handle(request)
            .then(() => {
                if(!this.props.member) {
                    this.resetForm();
                }
                this.setState({
                    showMessage:successMessage
                })
            })
            .catch(() => {
                this.setState({
                    showMessage:errorMessage
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