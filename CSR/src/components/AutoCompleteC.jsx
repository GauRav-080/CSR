import { Autocomplete, TextField } from '@mui/material'
import React from 'react'

const AutoCompleteC = ({ options = {} }) => {
    return (
        <div>
            <Autocomplete
                id="combo-box-demo"
                options={options}
                sx={{ m: 1, minWidth: 190 }}
                renderInput={(params) => <TextField {...params} />}
            />
        </div>
    )
}

export default AutoCompleteC