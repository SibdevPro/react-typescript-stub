const loadTypes = (name: string) => {
  return {
    FAILURE: `${name}_FAILURE`,
    REQUEST: `${name}_REQUEST`,
    SUCCESS: `${name}_SUCCESS`,
  };
};

export default loadTypes;
