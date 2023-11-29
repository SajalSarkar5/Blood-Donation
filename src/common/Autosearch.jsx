
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { Tooltip } from 'react-tooltip'
import useAxios from '../hook/useAxios'

function Autosearch() {
    const [items, setItems] = useState([])
    const axiosData = useAxios()
    useEffect(() => {
        axiosData.get('/donardata')
            .then(res => {
                setItems(res.data)
                console.log(res.data)
            })

    }, [])


    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
    }

    const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
    }

    const handleOnSelect = (item) => {
        // the item selected
        alert(item)

        // all secelct data here


        console.log(item)
    }

    const handleOnFocus = () => {
        console.log('Focused')
    }

    const formatResult = (item) => {
        return (
            <div className='cursor-pointer'>


                <div >
                    <a data-tooltip-id={item?._id}>{item?.name}</a>
                    <Tooltip id={item?._id}>
                        <div>
                            <h1>{item?.blood}</h1>
                            <span className='' style={{ display: 'block', textAlign: 'left' }}>id: {item?.location}</span>
                            <span className='' style={{ display: 'block', textAlign: 'left' }}>name: {item?.name}</span>
                        </div>
                    </Tooltip>
                </div>

            </div>
        )
    }

    console.log(items)
    return (
        <div className="App">
            <header className="App-header">
                <div style={{ width: 400 }}>
                    <ReactSearchAutocomplete
                        items={items}
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        autoFocus
                        formatResult={formatResult}
                        fuseOptions={{ keys: ["name", "location"] }}
                        resultStringKeyName="blood"
                    />
                </div>
            </header>
        </div>
    )
}

export default Autosearch