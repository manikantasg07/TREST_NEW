import { createSelector } from "reselect";
import { transformTokens } from "./transform";
 
const tokenReports = (state)=>state.tokenReports;

export const isTokenReportLoading = createSelector(
    tokenReports,
    (tokenReportsState)=> tokenReportsState.loading
)

export const selectPaginationContext =  createSelector(
    tokenReports,
    (tokenReportsState)=> tokenReportsState.paginationContext || {}
)

export const getRequestFields = createSelector(
    selectPaginationContext,
    (paginationContext = {}) => {
        const { search, startDate, endDate, sortBy } = paginationContext;
        const query = { groupCount: true }; 
        // if (search) {
        //     if (
        //         search === TEST_AUTHORITY_STATUS_INACTIVE ||
        //         search === TEST_AUTHORITY_STATUS_ACTIVE
        //     ) {
        //         query.search = '';
        //         query.status = search;
        //     } else {
        //         query.search = search;
        //     }
        // }
        // if (startDate instanceof Date) {
        //     query.startDate = DateTime.fromJSDate(startDate)
        //         .startOf('day')
        //         .toJSDate();
        // }
        // if (endDate instanceof Date) {
        //     query.endDate = DateTime.fromJSDate(endDate)
        //         .endOf('day')
        //         .toJSDate();
        // }
        // if (sortBy && sortBy.length) {
        //     query.orderBy = [sortBy[0].id, sortBy[0].desc ? 'DESC' : 'ASC'];
        // }
        return query;
    },
);

export const selectPageIndex = createSelector(
    selectPaginationContext,
    (paginationContext)=> paginationContext.pageIndex
)
export const selectItemsPerPage = createSelector(
    selectPaginationContext,
    (paginationContext)=> paginationContext.itemsPerPage
)

export const selectPageCount =- createSelector(
    selectPaginationContext,
    (paginationContext)=> paginationContext.totalItems/paginationContext.itemsPerPage
)

export const selectTableData = createSelector(
    tokenReports,
    (tokenReports)=>transformTokens(tokenReports.tokens)
)

export const selectSearch = createSelector(
    selectPaginationContext,
    (paginationContext)=>{
        const { search } = paginationContext;
        return search && search.length >= 3 ? search : null;
    }
)

export const selectStartDate = createSelector(
    selectPaginationContext,
    (paginationContext)=>  paginationContext.startDate
);

export const selectEndDate = createSelector(
    selectPaginationContext,
    (paginationContext)=>  paginationContext.endDate
)

export const selectTotalItems = createSelector(
    selectPaginationContext,
    (paginationContext)=>  paginationContext.totalItems
)
// const tokensState = 