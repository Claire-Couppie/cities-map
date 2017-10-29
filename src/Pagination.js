import React, { Component } from 'react';
import './Pagination.css';

export default class Pagination extends Component {
    constructor() {
        super();
        this.state = {
            current: 0,
        }
    }
    setPage(n) {
        this.setState({ current: n });
        this.props.onPageChange(n);
    }
    render() {
        var nbPages = Math.ceil(this.props.citiesLength / this.props.citiesByPage);

        return <div className='Pagination'>
            <button onClick={() => { this.setPage(0) } }
                className='pageButton'
                > {'<<'} </button>
            <button onClick={() => { this.setPage(this.state.current - 1) } }
                disabled = {this.state.current === 0 ? 'disabled' : ''}
                className='pageButton'
                >
                {'<'}
            </button>
            <button onClick={() => { this.setPage(this.state.current + 1) } }
                disabled = {this.state.current === nbPages - 1 ? 'disabled' : ''}
                className='pageButton'>
                {'>'}
            </button>
            <button onClick={() => { this.setPage(nbPages - 1) } }
                className='pageButton'
                > {'>>'} </button>
        </div>;
    }
}