import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../css/OrderPage.css';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// import { makeStyles } from '@mui/styles';
//import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';

const OrderPage = () => {
    const formSchema = {
        selectType: "",
        selectGate: "",
        selectPublisher: "",
        selectSubmissionType: "",
        selectProductionPlant: "",
        date: null,
    };

    // Initialize the formData state using the form schema
    const [formData, setFormData] = useState(formSchema);

    console.log(formData);

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);


    };
    return (
        <div className='conatiner'>
            <div className='page-detail'>
                <h3>
                    Recent Orders
                </h3>
            </div>
            <div className='input-section'>
                <div className='date-section'>
                    <div className='date-picker'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker variant="filled"

                                sx={{
                                    '.MuiPickersToolbar-root': {
                                        color: '#1565c0',
                                        borderRadius: '2px',
                                        borderWidth: '1px',
                                        borderColor: '#2196f3',
                                        border: '1px solid',
                                        backgroundColor: "red",
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
                    </div>
                    <div className='date-picker'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker variant="filled" slotProps={{
                                textField: {
                                    helperText: 'MM/DD/YYYY',
                                    placeholder: "Choose Date"
                                },
                            }} />
                        </LocalizationProvider>
                    </div>
                    <div className='date-picker'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker variant="filled" slotProps={{
                                textField: {
                                    helperText: 'MM/DD/YYYY',
                                    placeholder: "Choose Date"
                                },
                            }} />
                        </LocalizationProvider>
                    </div>

                </div>

                <div className='lower-input'>
                    <div className='seelct'>
                        <label>Select Type:</label>
                        <FormControl variant="filled" sx={{ m: 1, minWidth: 190 }}>
                            <InputLabel id="demo-simple-select-filled-label">Select</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={formData.selectType}
                                onChange={(e) => setFormData({ ...formData, selectType: e.target.value })}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div> <div className='seelct'>
                        <label>Select Gate:</label>
                        <FormControl variant="filled" sx={{ m: 1, minWidth: 190 }}>
                            <InputLabel id="demo-simple-select-filled-label">Select</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={formData.selectGate}
                                onChange={(e) => setFormData({ ...formData, selectGate: e.target.value })}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className='seelct'>
                        <label>Select Publisher:</label>
                        <FormControl variant="filled" sx={{ m: 1, minWidth: 190 }}>
                            <InputLabel id="demo-simple-select-filled-label">Select</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={formData.selectPublisher}
                                onChange={(e) => setFormData({ ...formData, selectPublisher: e.target.value })}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div> <div className='seelct'>
                        <label>Select Submission Type:</label>
                        <FormControl variant="filled" sx={{ m: 1, minWidth: 190 }}>
                            <InputLabel id="demo-simple-select-filled-label">Select</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={formData.selectSubmissionType}
                                onChange={(e) => setFormData({ ...formData, selectSubmissionType: e.target.value })}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div> <div className='seelct'>
                        <label>Select Production Type:</label>
                        <FormControl variant="filled" sx={{ m: 1, minWidth: 190 }}>
                            <InputLabel id="demo-simple-select-filled-label">Select</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={formData.selectProductionPlant}
                                onChange={(e) => setFormData({ ...formData, selectProductionPlant: e.target.value })}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>


                </div>

            </div>
            <hr className='horizontal-line'></hr>
            <div>
                <div className='search-panel'>
                    <span className='input-icon'>
                        <input type='text' className="search" />
                    </span>

                    <Button variant="contained">Search</Button>

                </div>
                <div></div>
            </div>
        </div>
    )
}

export default OrderPage