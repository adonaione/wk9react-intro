import { useState } from 'react';
import Navigation from './components/Navigation';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'; 
import Form from 'react-bootstrap/Form';

type Post = {
  id: number,
  title: string
}

type Sorting = {
  idAsc: (a: Post, b:Post) => number,
  idDesc: (a: Post, b:Post) => number,
  titleAsc: (a: Post, b:Post) => number,
  titleDesc: (a: Post, b:Post) => number,
}


export default function App() {
  const firstName: string = 'Adonai';
  const lastName: string = 'Romero';
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const posts: {id: number, title: string}[] = [
  //   {id: 1, title: 'Grounding Techniques'},
  //   {id: 2, title: 'Smudging 101'},
  //   {id: 3, title: 'Meditation for Beginners'},
  //]

  const [posts, setPosts] = useState([
    {id: 1, title: 'Grounding Techniques'},
    {id: 2, title: 'Smudging 101'},
    {id: 3, title: 'Meditation for Beginners'},
    {id: 4, title: 'The Power of Crystals'}
  ]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        
    const sortFunctions = {
      idAsc: (a:Post, b:Post) => a.id - b.id,
      idDesc: (a:Post, b:Post) => b.id - a.id,
      titleAsc: (a:Post, b:Post) => a.title > b.title ? 1 : -1,
      titleDesc: (a:Post, b:Post) => b.title > a.title ? 1 : -1
    }
    const func = sortFunctions[e.target.value as keyof Sorting];
    const newSortedArr = [...posts].sort(func);
    setPosts(newSortedArr);
}

  
  const handleClick = () => {
    // console.log('The button has been clicked');
    setIsLoggedIn(!isLoggedIn);
  }
 
  return (
    <>
      <Navigation isLoggedIn={isLoggedIn}/>
      <Container>
        <h1>Greetings Earthlings</h1>
        <Button variant='primary' onClick={handleClick}>Click Me!</Button>
        <h2>{isLoggedIn ? `Welcome Back ${firstName} ${lastName}` : 'Please Log In or Sign Up'}</h2>
        <Form.Select onChange={handleSelectChange}>
          <option>Choose Sorting Option</option>
          <option value="idAsc">Sort By ID ASC</option>
          <option value="isDesc">Sort By ID DESC</option>
          <option value="titleAsc">Sort By Title ASC</option>
          <option value="titleDesc">Sort By Title DESC</option>
        </Form.Select>
        {posts.map( p => <h4 key={p.id}>{p.title}</h4> )}
        </Container>
    </>
  )
}
