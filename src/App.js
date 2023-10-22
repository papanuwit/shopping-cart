import './App.css';
import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  const [products, setProducts] = useState([
    { id: 1, name: "iPone", price: 150, qt: 0 },
    { id: 2, name: "iPad", price: 200, qt: 0 },
    { id: 3, name: "iMac", price: 300, qt: 0 },
    { id: 4, name: "iBook", price: 500, qt: 0 }
  ])

  const [total, setTotal] = useState(0);
  const [counter, setCounter] = useState(1);

  const sumPrice = () => {
    let sum = 0;
    products.map((item) => {
      sum += (item.price * item.qt)
    })
    setTotal(sum)
  }

  const addCart = (id, n) => {

    n++;
    let newData = products.map((item) => {

      if (item.id === id) {

        return { ...item, qt: n }
      }
      return item;
    })

    setProducts(newData)
   
    let current = counter
    setCounter(current + 1)
  }


  const removeCart = (id, n) => {
    n--;
    let newData = products.map((item) => {

      if (item.id === id) {

        return { ...item, qt: n }
      }
      return item;
    })

    setProducts(newData)
    setCounter(counter+1)
  }


  useEffect(() => {
    sumPrice()
  }, [])


  useEffect(() => {
      console.log(counter) 
      sumPrice()
  }, [counter])


  useEffect(() => {
      console.log(products) 
  }, [products])

  return (
    <div className="App">
      <Container>

        <Row className='mt-4'>
          <Col sm={12}>
            <Card>
              <Card.Title className='mt-4'>This is React Lab</Card.Title>
              <Card.Body>
                <Row className='mb-4'> 
                <Col> <b>ราคารวม {total}</b> </Col>
                <Col><Button variant='warning'>Reset</Button></Col>    
                </Row>
                {
                  products.map((pro) => {
                    return (
                      <>

                        <Row className='mb-2'>
                          <Col>

                            <h5>{pro.name} {pro.price}</h5>
                          </Col>
                          <Col>
                            <Button
                              onClick={() => addCart(pro.id, pro.qt)}
                            >

                              +
                            </Button> {' '}
                            <Button
                              onClick={() => removeCart(pro.id, pro.qt)}
                            >
                              -
                            </Button>
                          </Col>

                        </Row>
                      </>)
                  })
                }
              </Card.Body>
            </Card>

          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;
