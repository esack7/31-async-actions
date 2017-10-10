export default store => next => action => {
  console.log('__ACTION__', action);
  try {
    let result = next(action);
    console.log('__REPORTER_STATE__', store.getState());
    return result;
  } catch (e) {
    e.action = action;
    console.error('__ERROR__', e);
    return e;
  }
};
