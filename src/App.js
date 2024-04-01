import logo from './donut.webp';
import './App.css';

const magazines = [
  {id: 1, title: 'React Today', theme: 'React', isAvailable: true},
  {id: 2, title: 'JS News', theme: 'JavaScript', isAvailable: true},
  {id: 3, title: 'Python Weekly', theme: 'Python', isAvailable: false}
]

const book= {
  title:'The Road to React',
  author:'Robin Wieruch',
  url: 'https://www.roadtoreact.com/',
  image:'https://books.google.com/books/publisher/content?id=RRLmDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0tbUp0dJvOwW0oqYnceyHW89VXlA&w=1280',
  width:'128',
  height:'193'
};

function ZineRack(){
  const listZines = magazines.map(zine =>
    <li key={zine.id} style={{color: zine.isAvailable ? 'limegreen':'pink'}}>
      {zine.title}
    </li>
  );
  return(
    <ul>{listZines}</ul>
  );
}

function BookShelf(){
  return(
    <div>
      <h2>{book.title}({book.published})</h2>
      <p>by {book.author}</p>
      <img className='bookCover' src={book.image} alt={book.title + ' cover'} style={{width: book.width, height: book.height}}/>
    </div>
  );

}

function MagicButton(){
  return(
    <>
      <h3>Click me to see magic!</h3>
      <button>Magic</button>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Kiana's first React app!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Kiana and MSU small change  !
        </a>
        <ZineRack />
        <MagicButton />
        <BookShelf />
        
      </header>
    </div>
  );
}

export default App;
