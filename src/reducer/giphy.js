const initialState = {
    gifs: [],
    favs: []
};

export default function giphy(state = initialState, action) {
    switch (action.type) {

    case 'GIFS_FETCHED':
        return Object.assign({}, state, {
                    gifs: action.gifs
                });
    default:
        return state
  }
}
