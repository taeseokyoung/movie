import React from 'react'
import { genreList } from './data/data';
import Header from './Header';
import './common.scss'

const App = () => {
    return (
        <div className="Wrap">
            <Header genreList={genreList} />
            <div className='sec'>
                <h2>wavve</h2>
            </div>
        </div>

    )
}

export default App;