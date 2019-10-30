
let returnRequestData = (data, msg) => {
  return {
    error_id: 0,
    data: data || {},
    msg: msg || ''
  }
}
let returnServerErrorData = msg => {
  return {
    error_id: -2,
    data: {},
    msg: msg || '未知错误',
  }
}

let returnOperationErrorData = msg => {
  return {
    error_id: -1,
    data: {},
    msg: msg || '未知错误',
  }
}

module.exports = {
  returnData: (data, msg) => new Promise((resolve, reject)=>{
    let requestData = returnRequestData(data, msg);
    resolve(requestData);
  }),
  errorThrow: msg => new Promise((resolve, reject)=>{
    let error = returnOperationErrorData(msg);
    resolve(error);
  }),
}