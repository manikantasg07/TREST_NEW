import React, { useEffect, useState } from 'react'
import {
    Column,
    ColumnDef,
    PaginationState,
    Table,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    // getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
  } from '@tanstack/react-table'
  import columns from './columns';
import { Col, Container, Row } from 'react-bootstrap';
import Pagination from '@mui/material/Pagination';
import data from './data';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTokensRequested } from '../reducer';


const BasicTable = () => {
    // const [pagination,setPagination] = useState({
    //     pageIndex:0,
    //     pageSize:10
    // });

    const [tokens,setTokens] = useState([]);
    const tokenState = useSelector((state)=>state.tokens)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchTokensRequested())
    },[dispatch])
    if(tokenState.loading){
        return <div>Loading...</div>
    }
    else if ( !tokenState.loading && tokenState.tokens){
        console.log("tokens: ",tokenState.tokens);
        return <div>Success {tokenState.tokens}</div>
    }
    else{
        return <div>{tokenState.errors}</div>
    }
    
    const table = useReactTable({
        columns,
        data,
        debugTable:true,
        getCoreRowModel:getCoreRowModel(),
        getSortedRowModel:getSortedRowModel(),
        getFilteredRowModel:getFilteredRowModel(),
        getPaginationRowModel:getPaginationRowModel(),
        // onPaginationChange:setPagination,
        // state:{
        //     pagination,
        // }

    })
    const handleChange=(event,value)=>{
        console.log("page count: ",table.getPageCount());
        
        console.log("Page: ",table.getState().pagination.pageIndex);
        table.setPageIndex(value-1)
    }
  return (
    <Container fluid>
        <Row >
            <table class="table">
                <thead>
                    {table.getHeaderGroups().map(headerGroup=>(
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => {
                        return (
                        <th key={header.id} colSpan={header.colSpan}>
                            <div style={{color:"#0a76a8",fontWeight:"normal",cursor:"pointer"}} className="user-select-none"
                            {...{
                                // className: header.column.getCanSort()
                                //   ? 'cursor-pointer select-none'
                                //   : '',
                                onClick: header.column.getToggleSortingHandler(),
                            }}
                            >
                            {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                            )}
                            {{
                                asc: ' 🔼',
                                desc: ' 🔽',
                            }[header.column.getIsSorted()] ?? null}
                            {/* {header.column.getCanFilter() ? (
                                <div>
                                <Filter column={header.column} table={table} />
                                </div>
                            ) : null} */}
                            </div>
                        </th>
                        )
                    })}
                        </tr>
                    ))}
                </thead>
                <tbody>
                {table.getRowModel().rows.map(row => {
                    return (
                    <tr key={row.id}>
                        {row.getVisibleCells().map(cell => {
                        return (
                            <td key={cell.id}>
                            {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                            )}
                            </td>
                        )
                        })}
                    </tr>
                    )
                })}
                </tbody>
            </table>
        </Row>
        <Row>
            <Col style={{padding:"5px 0px"}} className='d-flex justify-content-end'>
                <Pagination count={table.getPageCount()} page={table.getState().pagination.pageIndex+1} color='primary' onChange={handleChange} sx={{
                    '& .MuiPaginationItem-previousNext': {
                    color: '#0a76a8',
                    },
                }}/>
            </Col>
        </Row>
    </Container>
  )
}

export default BasicTable