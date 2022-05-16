import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Row, Button, Container } from 'react-bootstrap'
import axios from 'axios'
import { Modal } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

const PackagesPage = () => {
  const [show, setShow] = useState(false);
  const navigator = useNavigate()
  const [packages, setPackages] = useState([])
  const [error, setError] = useState(null)

  // using get request to get all the available data in package collection
  const getPackets = async () => {
    try {
      const config = {
        headers: { 'Access-Control-Allow-Origin': '*' }
      }
      const response = await axios.get(
        'http://localhost:5000/transaction/',
      )
      setPackages(response.data.packages)
    } catch (e) {
      setError(e.message)
    }
  }

  // using use effect to get the packages data when the component first load.
  useEffect(() => {
    getPackets()
  }, [])

  const handleClose = () => {
    setShow(false)
    navigator('/', { replace: true })
  }

  const handleClaim = async() => {
    const currentToken = localStorage.getItem('token')
    console.log(currentToken)
    try {
      const config = {
          headers: { 'Access-Control-Allow-Origin': '*' }
      }
      const response = await axios.get(
          `http://localhost:5000/transaction/${currentToken}`,config
      )
      console.log(response.data)
      if(response.data.message === "The voucher is claimed or not exist"){
        setError(response.data.response)
      }else{
        setShow(true)
        localStorage.removeItem('token')
      }
  } catch (e) {
          setError(e.message)
    }
  }

  const packageList = (
    <Row className=''>
      {packages.map((product) =>
        <Card key={product._id} className='m-2 p-3 rounded shadow'>
          <Card.Body sm={2} variant='bottom'>
            <Card.Title as='div'>
              <strong>{product.name}</strong>
            </Card.Title>

            <Card.Text as='h5'>Including :</Card.Text>
            <Card.Text as='p'>- 2 x eggs<br/>- 3 cucumbers</Card.Text>
            <Card.Link>
              <Button className="mr-2" onClick={()=>handleClaim(product._id)}>
                Claim this package
              </Button>
            </Card.Link>

          </Card.Body>

        </Card>
      )}
    </Row>
  );

  const modalConfirm = (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Awesome. The package is your and will be delivery within 10 days
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>Confirm</Button>
      </Modal.Footer>
    </Modal>
  )

  return (
    <Container id="packages" className='mb-5'>
      <h1 className='center py-5'>Packages list</h1>
      {packageList}
      {modalConfirm}
    </Container>
  )
}

export default PackagesPage
