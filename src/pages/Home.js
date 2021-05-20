import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'
import { apiGet } from '../misc/config';

const Home = () => {

    const [input, setInput] = useState("");
    const [results, setResults] = useState(null);
    const [searchOption, setSearchOption] = useState("shows")

    const isShowSearch = searchOption === "shows";

    const onInputChange = (e) => {
        setInput(e.target.value)
    }

    const onRadioClick = (e) => {
        setSearchOption(e.target.value)
    }

    const onSearch = () => {
        apiGet(`/search/${searchOption}?q=${input}`).then(result => {
            setResults(result)
        });
    }

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSearch()
        }
    }

    const renderResult = () => {
        if (results && results.length === 0) {
            return (
                <div>
                    No Results
                </div>
            )
        }

        if (results && results.length > 0) {
            return (
                results[0].show ?
                    results.map((item) => {
                        return (
                            <div key={item.show.id}>{item.show.name}</div>
                        )
                    })
                    :
                    results.map((item) => {
                        return (
                            <div key={item.person.id}>{item.person.name}</div>
                        )
                    })
            );
        }
    }


    return (
        <MainPageLayout>
            <input type="text" onChange={onInputChange} value={input} onKeyDown={onKeyDown} />
            <div>
                <label htmlFor="shows-search">
                    Shows
                    <input type="radio" id="shows-search" value="shows" checked={isShowSearch} onChange={onRadioClick} />
                </label>

                <label htmlFor="actors-search">
                    Actors
                    <input type="radio" id="actors-search" value="people" checked={!isShowSearch} onChange={onRadioClick} />
                </label>
            </div>
            <button type="button" onClick={onSearch} >Search</button>
            {renderResult()}
        </MainPageLayout>
    )
}

export default Home
