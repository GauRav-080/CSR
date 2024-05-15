import { useMemo } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
} from 'material-react-table';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { red } from '@mui/material/colors';
import {  data } from "../constants/Constants";
//nested data is ok, see accessorKeys in ColumnDef below


const DataTable = () => {
    //should be memoized or stable
    const columns = useMemo(
        () => [
            {
                accessorKey: 'DATE_ADDED', //access nested data with dot notation
                header: 'Date Added',
                size: 150,
            },
            {
                accessorKey: 'ORDER_NUMBER',
                header: 'Order #',
                size: 150,
            },
            {
                accessorKey: 'SGGS_PUBLISHER_ACRONYM', //normal accessorKey
                header: 'Publisher',
                size: 200,
            },
            {
                accessorKey: 'PURCHASE_ORDER_NUMBER',
                header: 'Customer PO #',
                size: 150,
            },
            {
                accessorKey: 'ORDER_STATUS',
                header: 'CSR Status',
                size: 150,
            },
            {
                accessorKey: 'DNP_ORDER_STATUS',
                header: 'DNP Order Status',
                size: 150,
            },
            {
                accessorKey: 'DNP_PRODUCTION_PLANT_NAME',
                header: 'Production Plant',
                size: 150,
            },
            {
                accessorKey: 'POA',
                header: 'POA',
                size: 150,
                enableSorting: false,
                Cell: ({ renderedCellValue, row }) =>(
                     (renderedCellValue? <TaskAltIcon color="success"  sx={{ width: 120 }} />:<CancelOutlinedIcon sx={{color: red[700], width: 120, fontSize:25  }} />)
                ),
            },
            {
                accessorKey: 'ASN',
                header: 'ASN',
                size: 150,
                enableSorting: false,
                Cell: ({ renderedCellValue, row }) =>(
                    (renderedCellValue? <TaskAltIcon color="success"  sx={{ width: 120 }} />:<CancelOutlinedIcon sx={{color: red[700], width: 120, fontSize:25  }} />)
               ),
            },
           
        ],
        [],
    );

    const table = useMaterialReactTable({
        columns,
        data //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    });

    return <MaterialReactTable table={table} />;
};

export default DataTable;
