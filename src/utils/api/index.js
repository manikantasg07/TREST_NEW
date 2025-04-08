import axios from "axios";
import qs from "qs";

export async function requestWithAuth(path,
    method = 'GET',
    token = null,
    query = null,
    body = null,){

     // Get the API URI from the build-time environment variables, removing any trailing slash
     const apiUri = `${process.env.REACT_APP_API_URI}`.replace(/\/+$/, '');
     // Append the path to the apiUri with a slash, removing any leading slashes on the path
     let fullURI = `${apiUri}/${path.replace(/^\/+/, '')}`;
     if (query !== null) {
        fullURI += '?' + qs.stringify(query);
    }
    const headers = {
        client: 'internal',
        Accept: 'application/json',
    };
    
    if (token !== null) {
        headers.Authorization = 'Bearer ' + token;
    }

    const options = { method, headers };
    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }
    return fetch(fullURI, options);

}