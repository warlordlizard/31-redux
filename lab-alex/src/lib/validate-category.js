'use strict';

const validateCategory = store => next => action => {
  const isCategory = action.type && action.type.startsWith('CATEGORY');

  if(isCategory) {
    try {
      const category = action.payload;
      const notValidated = !category.id || !category.title || !category.timestamp;

      if(notValidated) {
        throw new Error('VALIDATION ERROR: category must include id, title, and timestamp');
      } else {
        return next(action);
      }
    } catch (err) {
      console.error(err);
    }
  } else {
    return next(action);
  }
};

export default validateCategory;