import React, { useState, useEffect } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../css/OrderPage.css';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, TextField, TablePagination } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Autocomplete from '@mui/material/Autocomplete';
import DataTable from './DataTable';
import DatePickers from '../components/DatePickers';
import AutoCompleteC from '../components/AutoCompleteC';
const rows = [
    { id: 1, dateAdded: '4/25/2023', order: '1156836', publisher: 'UAT-TNQ Jmis', customerPO: '981295', method: 'POD', status: 'In Process' },
    { id: 2, dateAdded: '3/07/2023', order: '1156837', publisher: 'PROD TEST A1', customerPO: '678773', method: 'POD', status: 'In Process' },
    { id: 3, dateAdded: '7/17/2023', order: '1156838', publisher: 'UAT-TNQ Jmis', customerPO: '981295', method: 'POD', status: 'In Process' },
    { id: 4, dateAdded: '8/29/2023', order: '1156839', publisher: 'UAT-TNQ Books', customerPO: '233456', method: 'POD', status: 'In Process' },
    { id: 5, dateAdded: '1/13/2023', order: '1156840', publisher: 'UAT-TNQ Jmis', customerPO: '289932', method: 'POD', status: 'In Process' },
    { id: 6, dateAdded: '3/20/2023', order: '1156820', publisher: 'UAT-TNQ Jmis', customerPO: '981295', method: 'POD', status: 'In Process' },
    { id: 7, dateAdded: '12/02/2023', order: '1156867', publisher: 'UAT-TNQ Jmis', customerPO: '478844', method: 'POD', status: 'In Process' },

];

const top100Films = [
    { label: 'Jaico Publishing House', year: 1994 },
    { label: ' Westland Publications', year: 1972 },
    { label: 'Roli Books', year: 1974 },
    { label: 'Hachette India', year: 1994 },
    { label: 'Aleph Book Company', year: 1972 },
    { label: 'Scholastic India', year: 1974 },
    { label: 'Tata MacgrawHill', year: 1994 },
    { label: 'Peerson India', year: 1972 },
]


const OrderPage = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://dummyjson.com/products/')
            .then(res => res.json())
            .then(json => setData(json))


    }
    console.log(data)
    const formSchema = {
        selectType: "",
        selectGate: "",
        selectPublisher: "",
        selectSubmissionType: "",
        selectProductionPlant: "",
        date: null,
    };
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState('');
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const filteredRows = rows.filter(row =>
        Object.values(row).some(value => String(value).toLowerCase().includes(searchTerm.toLowerCase()))
    );

    // Initialize the formData state using the form schema
    const [formData, setFormData] = useState(formSchema);

    //console.log(formData);

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
                        <DatePickers />

                    </div>
                    <div className='date-picker'>
                        <DatePickers />

                    </div><div className='date-picker'>
                        <DatePickers />

                    </div>

                </div>

                <div className='lower-input'>
                    <div className='select-container'>
                        <label>Select Type:</label>
                        <AutoCompleteC
                            options={top100Films}
                        />
                    </div>
                    <div className='select-container'>
                        <label>Select Gate:</label>
                        <AutoCompleteC
                            options={top100Films}
                        />

                    </div>
                    <div className='select-container'>
                        <label>Select Publisher:</label>

                        <AutoCompleteC
                            options={top100Films}
                        />
                    </div>
                    <div className='select-container'>
                        <label>Select Submission Type:</label>

                        <AutoCompleteC
                            options={top100Films}
                        />
                    </div>
                    <div className='select-container'>
                        <label>Select Production Type:</label>

                        <AutoCompleteC
                            options={top100Films}
                        />
                    </div>
                </div>

            </div>
            <hr className='horizontal-line'></hr>
            <div>

            </div>
            <DataTable />
        </div>
    )
}

export default OrderPage