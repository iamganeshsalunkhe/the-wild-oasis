import GlobalStyles from './styles/GlobalStyles';
import Heading from './ui/Heading';
import Input from './ui/Input';
function App() {

  return (
    <>
      <GlobalStyles />
      <Heading as='h1'>The wild oasis</Heading>
      <Heading as='h2'>The check in and check out</Heading>

      <Input type="number" placeholder="Number of guests" />
      <Heading as='h3'>Form</Heading>
    </>
  );
}

export default App
