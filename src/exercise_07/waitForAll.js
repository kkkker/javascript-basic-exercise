export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.
  promises.forEach((e) => {
    if (!(e instanceof Promise)) {
      throw new Error('Not all elements are promises.');
    }
  });

  const allSettled = (list) => {
    if (list instanceof Array) {
      const ret = [];
      list.forEach((i) => {
        ret.push(
          new Promise((resolve) => {
            i.then((v) => {
              resolve({ status: 'fulfilled', data: v });
            }).catch((e) => {
              resolve({ status: 'rejected', data: e });
            });
          }),
        );
      });
      return Promise.all(ret);
    }
    return Promise.reject();
  };

  return allSettled(promises)
    .then((res) => {
      res.map((r) => {
        if (r.status === 'rejected') {
          throw new Error();
        }
        return null;
      });
    })
    .then(() => new Promise((resolve) => {
      resolve('all Done success');
    }))
    .catch(() => new Promise((resolve, reject) => {
      reject();
    }));
}
