import React, {Component, PropTypes} from 'react';
import './App.css';
import * as GiphyActions from './action/GiphyActions';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'


const apiKey = 'dc6zaTOxFJmzC';
const maxResults = 10;
class Giphy extends Component {

    constructor(props) {
        super(props);
        this.state = {searchString: ''};
    }

    _handleInput = (event) => {
        this.setState({searchString: event.target.value});
    };

    _handleEsc = (event) => {
        if (event.keyCode === 27) {
            this.setState({searchResult: []});
        }
    };

    _search = () => {
        if (this.state.searchString !== '') {
            this.props.actions.search(this.state.searchString, apiKey, maxResults);
        }
    };

    componentWillMount() {
        document.addEventListener('keydown', this._handleEsc);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this._handleEsc);
    }

    render() {

        let {gifs} = this.props.giphy;

        let result = '';
        if (gifs.length > 0) {
            result = gifs.map((gif, idx) => {
                return (
                    <div key={idx}>
                        <img src={gif.images.downsized.url} role='presentation'/>
                    </div>
                );
            })
        }

        return (
            <div className='giphy-search'>
                Giphy searcher
                <input type='text'
                       className='giphy-search-input'
                       value={this.state.searchString}
                       onChange={this._handleInput}
                />
                <button onClick={this._search}>Search on Giphy</button>

                <div className='giphy-search-result'>
                    <div>{gifs.length} Results found</div>
                    {result}
                </div>
            </div>
        );
    }
}

Giphy.propTypes = {}


const mapStateToProps = (state) => ({
    giphy: state.giphy
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(GiphyActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Giphy)
