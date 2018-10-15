export default function(state = null, action) {
  switch (action.type) {
    case "FETCH_AGIF":

      return action.payload || false;
    default:
      return state;
  }
}
