export const ITEMS_PER_PAGE=10;
// export const NAME_FOR_TEST_AUTHORITY_ID_FIELD='taId';
// export const NAME_FOR_TEST_AUTHORITY_EMAIL_FIELD="";
// export const NAME_FOR_TEST_AUTHORITY_STATUS_FIELD="";
// export const NAME_FOR_TEST_AUTHORITY_NAME_FIELD="";
// export const NAME_FOR_TOKEN_REPORT_SUBMITTED_FIELD="";
// export const NAME_FOR_TOKEN_REPORT_COUNT_FIELD="";

export const LABEL_FOR_TEST_AUTHORITY_ID = 'Test Administrator Identifier';
export const SHORT_LABEL_FOR_TEST_AUTHORITY_ID = 'TA Identifier';
export const LABEL_FOR_TEST_AUTHORITY_EMAIL_ADDRESS = 'Email Address';
export const LABEL_FOR_TEST_AUTHORITY_NAME = 'Test Administrator Name';
export const SHORT_LABEL_FOR_TEST_AUTHORITY_NAME = 'TA Name';
export const LABEL_FOR_TEST_AUTHORITY_UPDATED_FIELD = 'Date Updated';
export const LABEL_FOR_TEST_AUTHORITY_REGISTRATION_CODE = 'Registration Code';
export const LABEL_FOR_TEST_AUTHORITY_STATUS = 'Status';

// export const NAME_FOR_TEST_AUTHORITY_NAME_FIELD = 'name';
export const NAME_FOR_TEST_AUTHORITY_ID_FIELD = 'taId';
export const NAME_FOR_TEST_AUTHORITY_EMAIL_FIELD = 'email';
export const NAME_FOR_TEST_AUTHORITY_UPDATED_FIELD = 'updatedAt';
export const NAME_FOR_TEST_AUTHORITY_REGISTRATION_CODE_FIELD =
    'registrationCode';
export const NAME_FOR_TEST_AUTHORITY_STATUS_FIELD = 'status';

export const NAME_FOR_TEST_AUTHORITY_NAME_FIELD = 'name';
export const LABEL_FOR_TOKEN_REPORT_SUBMITTED_FIELD = 'Tokens Submitted';
export const NAME_FOR_TOKEN_REPORT_SUBMITTED_FIELD = 'tokensSubmitted';
export const NAME_FOR_TOKEN_REPORT_COUNT_FIELD = 'tokensCount';

export const columns=[
    {
        Header: SHORT_LABEL_FOR_TEST_AUTHORITY_ID,
        accessor: NAME_FOR_TEST_AUTHORITY_ID_FIELD,
    },
    {
        Header: SHORT_LABEL_FOR_TEST_AUTHORITY_NAME,
        accessor: NAME_FOR_TEST_AUTHORITY_NAME_FIELD,
    },
    {
        Header: LABEL_FOR_TEST_AUTHORITY_EMAIL_ADDRESS,
        accessor: NAME_FOR_TEST_AUTHORITY_EMAIL_FIELD,
    },
    {
        Header: LABEL_FOR_TEST_AUTHORITY_STATUS,
        accessor: NAME_FOR_TEST_AUTHORITY_STATUS_FIELD,
    },
    {
        Header: LABEL_FOR_TOKEN_REPORT_SUBMITTED_FIELD,
        accessor: NAME_FOR_TOKEN_REPORT_SUBMITTED_FIELD,
    },
];