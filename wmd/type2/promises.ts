function delay(milliseconds: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, milliseconds);
    });
  }
delay(1000)
  .then(() => {
    console.log('The delay is over');
  })
  .catch((error) => {
    console.error('Something went wrong:', error);
  })
  .finally(() => {
    console.log('This is always executed');
  });