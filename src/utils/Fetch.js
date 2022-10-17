export const Fetch = (products, detaiId) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      try {
        if (detaiId) {
          const fit = products.find((product) => product.id === detaiId);
          res(fit);
        } else {
          res(products);
        }
      } catch (err) {
        rej(err);
      }
    }, 2000);
  });
};