import { useMemo } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
} from 'material-react-table';

//nested data is ok, see accessorKeys in ColumnDef below
const data = [
    { id: 1, dateAdded: '4/25/2023', order: '1156836', publisher: 'UAT-TNQ Jmis', customerPO: '981295', method: 'POD', status: 'In Process' },
    { id: 2, dateAdded: '3/07/2023', order: '1156837', publisher: 'PROD TEST A1', customerPO: '678773', method: 'POD', status: 'In Process' },
    { id: 3, dateAdded: '7/17/2023', order: '1156838', publisher: 'UAT-TNQ Jmis', customerPO: '981295', method: 'POD', status: 'In Process' },
    { id: 4, dateAdded: '8/29/2023', order: '1156839', publisher: 'UAT-TNQ Books', customerPO: '233456', method: 'POD', status: 'In Process' },
    { id: 5, dateAdded: '1/13/2023', order: '1156840', publisher: 'UAT-TNQ Jmis', customerPO: '289932', method: 'POD', status: 'In Process' },
    { id: 6, dateAdded: '3/20/2023', order: '1156820', publisher: 'UAT-TNQ Jmis', customerPO: '981295', method: 'POD', status: 'In Process' },
    { id: 7, dateAdded: '12/02/2023', order: '1156867', publisher: 'UAT-TNQ Jmis', customerPO: '478844', method: 'POD', status: 'In Process' },



];

const DataTable = () => {
    //should be memoized or stable
    const columns = useMemo(
        () => [
            {
                accessorKey: 'dateAdded', //access nested data with dot notation
                header: 'Date Added',
                size: 150,
            },
            {
                accessorKey: 'order',
                header: 'Orders',
                size: 150,
            },
            {
                accessorKey: 'publisher', //normal accessorKey
                header: 'Publisher',
                size: 200,
            },
            {
                accessorKey: 'customerPO',
                header: 'Customer PO',
                size: 150,
            },
            {
                accessorKey: 'method',
                header: 'Method',
                size: 150,
            },
            {
                accessorKey: 'status',
                header: 'Status',
                size: 150,
            },
        ],
        [],
    );

    const table = useMaterialReactTable({
        columns,
        data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    });

    return <MaterialReactTable table={table} />;
};

export default DataTable;
