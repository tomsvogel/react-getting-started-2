import fetch from 'isomorphic-fetch'

export function search(searchString, apiKey, maxResults) {

    return (dispatch) => {
        try {
            fetch('http://api.giphy.com/v1/gifs/search?api_key=' + apiKey +
                '&q=' + encodeURIComponent(searchString) + '&limit=' + maxResults)
                .then(function(response) {
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                    }
                    return response.json();
                })
                .then(function(response) {
                    console.log(response);
                    dispatch({type: 'GIFS_FETCHED', gifs: response.data});
                }.bind(this));

        } catch (e) {
            console.log(e);
        }
    }
}
