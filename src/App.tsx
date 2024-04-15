import Navigation from './components/Navigation';
import Container from 'react-bootstrap/Container';


export default function App() {
  const firstName: string = 'Adonai';
  const lastName: string = 'Romero';
  const isLoggedIn: boolean = true;

  const posts: {id: number, title: string}[] = [
    {id: 1, title: 'Grounding Techniques'},
    {id: 2, title: 'Smudging 101'},
    {id: 3, title: 'Meditation for Beginners'},
  ]
  
  return (
    <>
      <Navigation isLoggedIn={isLoggedIn}/>
      <Container>
        <h1>Greetings Earthlings</h1>
        <h2>{isLoggedIn ? `Welcome Back ${firstName} ${lastName}` : 'Please Log In or Sign Up'}</h2>
        {posts.map( p => <h4 key={p.id}>{p.title}</h4> )}
        </Container>
    </>
  )
}