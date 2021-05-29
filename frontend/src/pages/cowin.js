import Data from './beta.json'
import React, { Component } from 'react'
import { Form, Button } from '@themesberg/react-bootstrap'
import { Row, Col, Card, Text } from 'react-bootstrap'
import Svg from './telegram.svg'



class Cowin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      district_name: 'Select One',
      district_id: '',
      btn: false,
    }

    this.change = this.change.bind(this);
    this.test = this.test.bind(this);
  }

  change(event) {
    var district = event.target.value
    this.setState({
      district_name: district
    })
  }

  test() {
    const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=0,height=0,left=-1000,top=-1000`;
    window.open('https://t.me/cowinpunetest', 'Cowin Pune', params)
  }

  render() {
    return (
      <>
        <Card style={{ padding: '30px', borderRadius: '30px' }}>
          <Card.Title style={{ textAlign: 'center' }}>COWIN</Card.Title>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Select District</Form.Label>
                <Form.Select value={this.state.district_name} onChange={this.change}>
                  <option value="Select One">Select One</option>
                  {Data.map((data, index) => (
                    <option key={index} value={data.District}>{data.District}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Col>
                <Form.Group className="mb-3">
                  <Button className="container-fluid" variant="primary" type="submit" value="Submit" onClick={() => this.setState({ btn: true })}>Submit</Button>
                </Form.Group>
                {(this.state.btn && this.state.district_name !== "Open this select menu" && this.state.date !== "") ?
                  <Button variant="outline-secondary container-fluid" onClick={this.test}>
                    <Row>
                      <Col style={{ paddingLeft: 20 }} md={2}><img src={Svg} height={40} width={40} /></Col>
                      <Col className="text-center">{this.state.district_name}</Col>
                    </Row>
                  </Button>
                  : null}
              </Col>
            </Form>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Cowin;