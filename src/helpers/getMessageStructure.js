

export const getMessageStrcuture = (message) => {

  let arrayMessages = message.split(/<n>|<b>|<br>|<lk>/gi)

  const regex = /<n>|<b>|<br>|<lk>/gi;

  const detectedPatterns = message.match(regex);

  let finalStructure = []
  
  arrayMessages.forEach((messaje, index) => {
    const pattern = detectedPatterns[index];
    
    if (pattern===undefined) {
      finalStructure.push({
        pattern: '<n>',
        messaje,
    })}

    else{
      finalStructure.push({
        pattern,
        messaje,
    })
    }
    
  
  });

  return finalStructure;

}