const DataReducer = (state , action) => {
  switch (action.type) {
    case "email":
      
      return action.payload.email;;
    default:
      return 0;
  }
};

export default DataReducer;
