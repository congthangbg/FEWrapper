
/*
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  // if (response.url && response.url.indexOf("/pages/login.jsp") > 0) {
  //   window.location=window.location.origin;
  //   window.location.origin.reload();
  //   return;
  // }
  // response.json().then(result => {
  //   // if(result.data.error_cod)
  // });
  // const data = {data :response.json(), status : response.status}
  // debugger
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    console.log(response);
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}


/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
//  TT - ĐỌC GIÁ TRỊ - LƯU TRONG COOKIES - THEO TÊN:
const getCookieByName = (name) => {
  let nameEQ = name + '=';
  let cookieArr = document.cookie.split(';');

  for (let i = 0; i < cookieArr.length; i++) {
    let elm = cookieArr[i];
    while(elm.charAt(0) === ' '){ elm = elm.substring(1); }   
    if (elm.indexOf(nameEQ) === 0) {
      return elm.substring(nameEQ.length, elm.length);
    }
  } 
  return null;
}

/* eslint no-param-reassign: ["error", { "props": false }] */

export default function request(url, options) {
  const csrfToken =  getCookieByName('XSRF-TOKEN');
  const newHeaders = Object.assign(
    {
      // Authorization: localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN),
      'Content-Type': 'application/json;charset=UTF-8',
      // 'X-XSRF-TOKEN': csrfToken,
      'Access-Control-Allow-Origin': '*'
    },
    options.headers,
  );
  // const newHeaders = Object.assign(
  //   {
  //     // Authorization: cookie,
  //     'Content-Type': 'application/json;charset=UTF-8',
  //   },
  //   options.headers,
  // );
  // options.credentials = 'include';
  options.headers = newHeaders;
  return fetch(url, options)
  // .then(checkStatus)
  .then(parseJSON)
}

export async function requestFile(url, options) {


  const newHeaders = Object.assign(
    {
      // Authorization: localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN),
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    },
    options.headers,
  );
  options.headers = newHeaders;
  // options.credentials = 'include';
  const response = await fetch(url, options);
  const response2= parseJSON(response);
  console.log(response2);
  debugger
  return checkStatus(response);
}
