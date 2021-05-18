if (process.env.NODE_ENV) {
  window.iceCreamFlavors = [];
  console.log(window.iceCreamFlavors);

  const delay = Math.round(Math.random() * 3000) + 400;

  setTimeout(() => {
    window.iceCreamFlavors = [
      'vanilla',
      'chocolate',
      'Cherry Garcia',
      'Neopolitan',
      'French vanilla',
      'bubble gum',
      'butter pecan',
    ];

    console.log(window.iceCreamFlavors);
    console.log(`${delay}ms delay`);
  }, delay);
}
