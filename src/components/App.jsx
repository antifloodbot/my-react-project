import { Alert } from "./Alert";

export default function App() {
  return (
    <>
      <Alert variant="info" outlined>
        Would you like to browse our recommended products?
      </Alert>

      <Alert variant="error" elevated>
        There was an error during your last transaction
      </Alert>

      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>

      <Alert variant="warning" outlined elevated>
        Please update your profile contact information
      </Alert>
    </>
  );
}