export const AUTH_STATUS_REQUESTED = 'validating';
export const AUTH_STATUS_SUCCEEDED = 'success';
export const AUTH_STATUS_FAILED = 'failed';

export const AUTH_STATUS_REQUESTED_ACTION = "auth/authenticationRequested"
export const AUTH_STATUS_SUCCEEDED_ACTION = "auth/authenticationSucceeded"
export const AUTH_STATUS_FAILED_ACTION    = "auth/authenticationFailed"

export const AUTH_STATUSES = [
    AUTH_STATUS_REQUESTED,
    AUTH_STATUS_SUCCEEDED,
    AUTH_STATUS_FAILED,
];