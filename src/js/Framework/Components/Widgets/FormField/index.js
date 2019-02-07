import React, { Component } from 'react';
import Validation from '../../../Helpers/Validation';
import {Form} from  '../../../Plugins/BootstrapReact';

class FormField extends Component {
    constructor() {
        super();
        this.handleKeyup = this.handleKeyup.bind(this);
        this.validatorRun = this.validatorRun.bind(this);
        this.resetField = this.resetField.bind(this);

        this.state = this.initialState;
        this.errorMessage = '';

    }

    get initialState() {
      return {
            isValid: false
        }
    }

    resetField() {
        this.setState(this.initialState);
    }

    handleKeyup(e) {
        this.validatorRun();
    }

    validatorRun() {
        this.setState({isValid:true});
        this.errorMessage = '';

        let element = this.refs.fieldData,
            rules = this.props.field.rules, 
            isValid = true, 
            i=null;

        for(i=0; i < rules.length; i++) {
            if(!Validation[rules[i]](element.value)) {
                this.errorMessage = Validation.getErrorMessage(rules[i]);
                this.setState({isValid:false});
                break;
            }
        }
    }

    componentDidMount() {
        this.validatorRun();
    }

    render() {
        let field = this.props.field;
        return (
            <Form.Group controlId={'form_'+field.name}>
                <Form.Label>{field.label}</Form.Label>
                <Form.Control isInvalid={!this.state.isValid} as={field.as || 'input'} onChange={this.handleKeyup} placeholder={field.placeholder} ref='fieldData'>
                {field.as==='select' ? field.data.map(datum => {return <option key={datum.value} value={datum.value}>{datum.label}</option>}) : null}
                </Form.Control>
                <p className='error-message'><small className=' text-danger'>{this.errorMessage}</small></p>
            </Form.Group>
            );
    }
}

export default FormField;