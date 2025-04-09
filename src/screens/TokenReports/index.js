import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TokenReportsTable from "./Table";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import Layout from "../Layout/MainLayout";
import Layout from "../../Layout/MainLayout"
import { isTokenReportLoading,selectPageIndex,selectItemsPerPage,selectPageCount,selectTableData,selectSearch,
    selectStartDate,selectEndDate,selectTotalItems
 } from "./selectors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchTokensRequested , resetPaginationContext} from "./reducer";
import ReactLoading from 'react-loading';
import { columns } from "./constants";
// import {
//     KeyboardDatePicker,
// } from '@material-ui/pickers';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';


function Reports(){

    const dispatch = useDispatch();
    const [filterOptions,setFilterOptions] = useState({
        taauthority:null,
        startdate:null,
        enddate:null
    });

    const handleChange = (event)=>{

    }
    const loading = useSelector(isTokenReportLoading);
    const pageIndex = useSelector(selectPageIndex);
    const itemsPerPage = useSelector(selectItemsPerPage);
    const pageCount = useSelector(selectPageCount);
    const data = useSelector(selectTableData);
    const search = useSelector(selectSearch);
    const startDate = useSelector(selectStartDate);
    const endDate = useSelector(selectEndDate);
    const totalItems = useSelector(selectTotalItems);
    useEffect(()=>{
        dispatch(fetchTokensRequested({
            pageIndex
        }))
    },[dispatch,pageIndex])
    useEffect(()=>{
        return ()=>dispatch(resetPaginationContext())
    },[])
    return(
        <Container fluid >
            <Row style={{padding:"10px 0px"}} className="justify-content-between">
                <Col xs={4}>
                    <h4 style={{color:"#0a76a8"}}>Reports</h4>
                </Col>
                <Col xs={3}>
                    <button style={{borderRadius:18,padding:"5px 20px",backgroundColor:"#0a76a8",color:"white",boxSizing:"border-box"}}>EXPORT CSV</button>
                </Col>

            </Row>
            <Row className="justify-content-between">
                <Col xs={4}>
                    <h4 style={{color:"#0a76a8"}}>25519 Tokens</h4>
                </Col>
                <Col xs={8}>
                    <div>
                        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-filled-label">Testing Authorities</InputLabel>
                            <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={filterOptions.taauthority}
                            onChange={handleChange}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            <DatePicker label="Start Date" value={filterOptions.startdate} onChange={handleChange} />
                        </FormControl>
                    </div>
                </Col>

            </Row>
            <Row>
                <Col>
                    {loading? <ReactLoading type={"spin"} color={"#ffffff"} height={'10px'} width={'10px'} />
                    :<TokenReportsTable 
                        pageIndex={pageIndex}
                        itemsPerPage={itemsPerPage}
                        pageCount={pageCount}
                        data={data}
                        totalItems={totalItems}
                        columns={columns}
                    />}
                </Col>
            </Row>
        </Container>
    );

}


export default function(){
    return(
        <Layout>
            <Reports />
        </Layout>
    )
}