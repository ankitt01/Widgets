import React, {useState} from 'react'

import Accordian from './components/Accordian'
import Dropdown from './components/Dropdown'
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
      {/* <Accordian items = {items} /> */}
      {/* <Search /> */}
      <Dropdown options={options} selected={selected} onSelectedChange = {setSelected} />
    </div>
  );
}

export default App;
