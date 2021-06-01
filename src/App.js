import React, {useState} from 'react'

import Accordian from './components/Accordian'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Route from './components/Route'

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

const options = [
  {
    label: 'The color Red',
    value: 'red'
  },
  {
    label: 'The color Blue',
    value: 'blue'
  },
  {
    label: 'The color Green',
    value: 'green'
  },
  {
    label: 'The color Yellow',
    value: 'yellow'
  }
]

function App() {

  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="App">
      
      <Route path="/">
        <Accordian items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown label="Select a color" options={options} selected={selected} onSelectedChange={setSelected}/>
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App;
