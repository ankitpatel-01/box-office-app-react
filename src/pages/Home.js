import React, { useState } from 'react'
import ActorsGrid from '../components/actors/ActorsGrid';
import MainPageLayout from '../components/MainPageLayout'
import ShowsGrid from '../components/shows/ShowsGrid';
import { apiGet } from '../misc/config';
import { useLastQuery } from '../misc/custom-hooks';
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './Home.styled';
import CustomRadio from '../components/CustomRadio'

const Home = () => {

    const [input, setInput] = useLastQuery();
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
                    <ShowsGrid data={results} />
                    :
                    <ActorsGrid data={results} />
            );
        }
    }


    return (
        <MainPageLayout>
            <SearchInput type="text" onChange={onInputChange} value={input} onKeyDown={onKeyDown} />
            <RadioInputsWrapper>
                <div>
                    <CustomRadio
                        label="Shows"
                        id="shows-search"
                        value="shows"
                        checked={isShowSearch}
                        onChange={onRadioClick}
                    />
                </div>

                <div>
                    <CustomRadio
                        label="Actors"
                        id="actors-search"
                        value="people"
                        checked={!isShowSearch}
                        onChange={onRadioClick}
                    />
                </div>
            </RadioInputsWrapper>
            <SearchButtonWrapper>
                <button type="button" onClick={onSearch} >Search</button>
            </SearchButtonWrapper>

            {renderResult()}
        </MainPageLayout>
    )
}

export default Home
