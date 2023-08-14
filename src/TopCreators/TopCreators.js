export const getTopCreators = (creators) => {
  const finalCreator = [];
  const finalResults = creators.reduce((index, currentValue) => {
    (index[currentValue.seller] = index[currentValue.seller] || []).push(currentValue);
    return index;
  }, {});
  console.log("finalResults",finalResults);
  Object.entries(finalResults).forEach((item) => {
    const seller = item[0];
    const total = item[1]
      .map((newItem) => Number(newItem.price))
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0 );

    finalCreator.push({seller,total})
  });

  return finalCreator;
};
