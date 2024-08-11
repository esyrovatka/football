interface ISumByKey {
  array: any[];
  key: string;
}

const sumByKey = ({ array, key }: ISumByKey): number => {
  return array.reduce((sum, obj) => {
    return sum + (obj[key] || 0);
  }, 0);
};

export default sumByKey;
