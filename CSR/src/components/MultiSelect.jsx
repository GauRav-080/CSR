import React from 'react'
import { FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select } from '@mui/material'
import { CheckBox } from '@mui/icons-material';



const names = [
  "Inprocess",
  " Complete",
  "Cancelled",
  "Failed",
];

const MultiSelect = ({ value, onChange,label}) => {
    return (
        <>
         <FormControl  sx={{ width: 320 }}>
           
        <Select
          labelId="demo-multiple-checkbox-label"
          multiple
          value={value}
          onChange={onChange}
          label={label}
          renderValue={(selected) => selected.join(', ')}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {/* <CheckBox checked={value.indexOf(name) >-1} /> */}
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
        </FormControl>

        </>
    )
}

export default MultiSelect