const createAction = ({ type, payload = {}, ...meta }) => {
  if (!type) {
    throw new TypeError('Action type is mandatory', type);
  }
  return { type, payload, meta };
};

export default createAction;
