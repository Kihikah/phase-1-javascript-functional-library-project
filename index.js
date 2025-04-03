const myEach = (collection, callback) => {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let value of values) {
      callback(value);
    }
    return collection;
  };
  
  const myMap = (collection, callback) => {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    return values.map(callback);
  };
  
  const myReduce = (collection, callback, acc) => {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    if (acc === undefined) {
      acc = values[0];
      values.slice(1).forEach(val => acc = callback(acc, val, collection));
    } else {
      values.forEach(val => acc = callback(acc, val, collection));
    }
    return acc;
  };
  
  const myFind = (collection, predicate) => {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    return values.find(predicate);
  };
  
  const myFilter = (collection, predicate) => {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    return values.filter(predicate);
  };
  
  const mySize = (collection) => {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
  };
  
  const myFirst = (array, n = 1) => {
    return n === 1 ? array[0] : array.slice(0, n);
  };
  
  const myLast = (array, n = 1) => {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
  };
  
  const myKeys = (object) => {
    return Object.keys(object);
  };
  
  const myValues = (object) => {
    return Object.values(object);
  };
  
  const mySortBy = (array, callback) => {
    return [...array].sort((a, b) => {
      const aVal = callback(a);
      const bVal = callback(b);
      return aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
    });
  };
  
  const myFlatten = (array, shallow = false, newArr = []) => {
    for (let value of array) {
      if (Array.isArray(value)) {
        if (shallow) {
          newArr.push(...value);
        } else {
          myFlatten(value, false, newArr);
        }
      } else {
        newArr.push(value);
      }
    }
    return newArr;
  };
  