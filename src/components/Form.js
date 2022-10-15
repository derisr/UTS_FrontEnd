import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function form() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nama</Form.Label>
        <Form.Control type="text" placeholder="John Doe" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Kritik dan Saran</Form.Label>
        <Form.Control type="text" placeholder="Masukkan Kritik dan Saran Anda" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default form;