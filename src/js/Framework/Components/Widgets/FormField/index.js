import React, { Component } from 'react';

import {Form} from  '../../../Plugins/BootstrapReact';

class FormField extends Component {
    
    render() {
        let field = this.props.field;
        return (
            <Form.Group controlId={'form_'+field.name}>
                <Form.Label>{field.label}</Form.Label>
                <Form.Control as={field.as || 'input'} placeholder={field.placeholder} ref='fieldData'>
                {field.as==='select' ? field.data.map(datum => {return <option key={datum.value} value={datum.value}>{datum.label}</option>}) : null}
                </Form.Control>
            </Form.Group>
            );
    }
}

export default FormField;