import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert'
//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
const options = [
    {
        label: 'Africans',
        value:'af'
    },
    {
        label: 'Arabic',
        value:'ar'
    },
    {
        label: 'Hindi',
        value:'hi'
    },
    {
        label:'Urdu',
        value: 'ur'
    }
    ,
    {
        label:'English',
        value: 'en'
    },
    {
        label:'French',
        value:'fr'
    }
    ,
    {
        label:'German',
        value:'de'
    }
    ,
    {
        label:'Gujarati',
        value:'gu'
    }
    ,
    {
        label:'Japanese',
        value:'ja'
    }
    ,
    {
        label:'Punjabi',
        value:'pa'
    }
]

const Translate = () => {

    const [language, setLanguage] = useState(options[0]);
    const [text,setText] = useState('');
    return (
        <div>
            <div className="ui form container">
                <div className="field">
                    <label>Enter Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                </div>

            <Dropdown label="Select a Language" options={options} selected={language} onSelectedChange={setLanguage}/>
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
            </div>
        </div>
    )
}


export default Translate;

