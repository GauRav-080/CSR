import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DatePickers = ({ label,value, onChange, renderInput}) => {
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker variant="filled"
                    label={label}
                    value={value}
                    onChange={onChange}
                    renderInput={renderInput}
                    sx={{
                        '.MuiPickersToolbar-root': {
                            color: '#1565c0',
                            borderRadius: '2px',
                            borderWidth: '1px',
                            borderColor: '#2196f3',
                            border: '1px solid',
                            backgroundColor: "red",
                            margin:'8px',
                        }
                    }}
                    //  className='date-input'
                    slotProps={{
                        textField: {
                            helperText: 'MM/DD/YYYY',
                            placeholder: "Choose Date"
                        },
                    }} />
            </LocalizationProvider>
        </>
    )
}

export default DatePickers