// export const COLUMNS = [
//     {
//         Header:"TA Identifier",
//         accessor:"TA Identifier"
//     },
//     {
//         Header:"TA Name",
//         accessor:"TA Name"
//     },
//     {
//         Header:"Email Address",
//         accessor:"Email Address"
//     },
//     {
//         Header:"Status",
//         accessor:"Status"
//     },
//     {
//         Header:"Tokens Submitted",
//         accessor:"Tokens Submitted"
//     }

// ]

const columns = [
    {
      accessorKey: 'TA Identifier',
      cell: info => info.getValue(),
      footer: props => props.column.id,
    },
    {
        accessorKey: 'TA Name',
        cell: info => info.getValue(),
        footer: props => props.column.id,
    },
    {
        accessorKey: 'Email Address',
        cell: info => info.getValue(),
        footer: props => props.column.id,
    },
    {
        accessorKey: 'Status',
        cell: info => info.getValue(),
        footer: props => props.column.id,
    },
    {
        accessorKey: 'Tokens Submitted',
        cell: info => info.getValue(),
        footer: props => props.column.id,
    },

    // {
    //   accessorFn: row => row.lastName,
    //   id: 'lastName',
    //   cell: info => info.getValue(),
    //   header: () => <span>Last Name</span>,
    //   footer: props => props.column.id,
    // },
    // {
    //   accessorKey: 'age',
    //   header: () => 'Age',
    //   footer: props => props.column.id,
    // },
    // {
    //   accessorKey: 'visits',
    //   header: () => <span>Visits</span>,
    //   footer: props => props.column.id,
    // },
    // {
    //   accessorKey: 'status',
    //   header: 'Status',
    //   footer: props => props.column.id,
    // },
    // {
    //   accessorKey: 'progress',
    //   header: 'Profile Progress',
    //   footer: props => props.column.id,
    // },
  ]
export default columns;