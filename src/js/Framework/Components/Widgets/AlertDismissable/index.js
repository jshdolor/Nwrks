import React, { Component } from 'react';
import {Row, Col, Alert, Button} from  '../../../Plugins/BootstrapReact';


class AlertDismissable extends Component {
  constructor(props) {
    super(props);

    this.state = { show: true };
  }

  dismiss() {
    this.props.unmountAlert();
  }

  render() {
    return (
      <Row>
      <Col xs={4}>
        <Alert variant={this.props.variant}>
          <Alert.Heading>{this.props.message}</Alert.Heading>
          <div className="d-flex justify-content-end">
            <Button onClick={() => this.dismiss()} variant={'outline-' + this.props.variant}>
              Close
            </Button>
          </div>
        </Alert>
      </Col>
      </Row>
    );
  }
}

export default AlertDismissable;