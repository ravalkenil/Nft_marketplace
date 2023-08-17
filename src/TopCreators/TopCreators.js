export const getTopCreators = (creators) => {
  console.log("creators",creators);
  if (creators.length === 0) {
    return 0;
  }else{
    const finalCreator = [];
    const finalResults = creators.reduce((Index, currentValue) => {
      (Index[currentValue.seller] = Index[currentValue.seller] || []).push(currentValue);
      return Index;
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
  }
};
