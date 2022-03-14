export function sortInAscending(array, key = null) {
  const tempArray = [...array];
  tempArray.sort((a, b) => {
    if (!key) {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    }

    if (key) {
      const valueType = typeof a.key;
      const keyA = a.key;
      const keyB = b.key;

      if (valueType === 'number') {
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      }

      if (valueType === 'string') {
        keyA.toUpperCase();
        keyB.toUpperCase();
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      }
    }
  });

  return tempArray;
}

export function sortInDescending(array, key = null) {
  const tempArray = [...array];
  tempArray.sort((a, b) => {
    if (!key) {
      if (a < b) return 1;
      if (a > b) return -1;
      return 0;
    }

    if (key) {
      const valueType = typeof a.key;
      const keyA = a.key;
      const keyB = b.key;

      if (valueType === 'number') {
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
      }

      if (valueType === 'string') {
        keyA.toUpperCase();
        keyB.toUpperCase();
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
      }
    }
  });

  return tempArray;
}
