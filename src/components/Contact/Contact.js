
import './Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form} from 'react-bootstrap';


function App() {
  return (
    <div className="container1">
    <Form className="form1" action="https://formspree.io/f/mvolaorz" method="post">
      <h2 className="form-h2">Get In Touch</h2>
      <label>First Name:</label>
      <input className="input1"type="text" placeholder="John" Name="firstname" required></input>
      <label>Last Name:</label>
      <input className="input1"type="text" placeholder="Doe" Name = "lastname" required></input>
      <label>E-mail:</label>
      <input className="input1" type="email" placeholder="someone@example.com" Name="email" required></input>
      <label>Your question:</label>
      <textarea className="textarea1" type="text" cols="50" rows = "10" placeholder="Your message goes here ..." Name="question" required></textarea>
      <Button className="button" type="submit">Submit</Button>
</Form>
</div>
  );
}

export default App;
