import Accordian from './components/Accordian'
import Search from './components/Search'

const items = [
  {
      title: 'What is React',
      content: 'React is a frontend  javascript framework'
  },
  {
      title: 'Why use React?',
      content: 'It is the most favorite library used by developers'
  },
   {
       title: 'How to use React?',
       content: 'We use react by creating components.'
   }
]


function App() {
  return (
    <div className="App">
      {/* <Accordian items = {items} /> */}
      <Search />
    </div>
  );
}

export default App;
