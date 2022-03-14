export default function extractObjKeys(obj) {
  let keysOfObj = [];
  Object.keys(obj).forEach((objKey) => {
    if (typeof obj[objKey] !== 'object') keysOfObj.push(objKey);
    if (typeof obj[objKey] === 'object')
      keysOfObj = [...keysOfObj, ...extractObjKeys(obj[objKey])];
  });
  return keysOfObj;
}
