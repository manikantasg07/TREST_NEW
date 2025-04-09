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
import { Col, Container, Row } from 'react-bootstrap';
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { storePaginationContext } from './reducer';
// import { useDispatch } from 'react-redux';


const TokenReportsTable = ({pageIndex,itemsPerPage,pageCount,data,totalItems,columns}) => {

    const dispatch = useDispatch();
    
    const table = useReactTable({
        columns,
        data,
        debugTable:true,
        getCoreRowModel:getCoreRowModel(),
        getSortedRowModel:getSortedRowModel(),
        // getFilteredRowModel:getFilteredRowModel(),
        
        // getPaginationRowModel:getPaginationRowModel(),
        // manualPagination: true,
        // autoResetPageIndex:true,
        // onPaginationChange:setPagination,
        // state:{
        //     pagination,
        // }

    })
    const handleChange=(event,value)=>{
        console.log("page count: ",table.getPageCount());
        console.log("Page: ",table.getState().pagination.pageIndex);
        dispatch(storePaginationContext({pageIndex:value-1}));
       
        // table.setPageIndex(value-1)
    }
    if(data.length==0){
        return <div>No data to show</div>
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
                <Pagination count={pageCount} page={pageIndex+1} color='primary' onChange={handleChange} sx={{
                    '& .MuiPaginationItem-previousNext': {
                    color: '#0a76a8',
                    },
                }}/>
            </Col>
        </Row>
    </Container>
  )
}

export default TokenReportsTable;