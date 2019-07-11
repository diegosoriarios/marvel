import React, { Component } from "react";
import './Pagination.css'

class Pagination extends Component {
  renderPagination = () => {
    let total = [...Array(Math.ceil(this.props.total / 30))]
    const page = this.props.currentPage
    let show = []
    if(page > 2) {
        show.push(1, '...')
        if((page + 5) >= total.length) {
            console.log(page)
            for(let i = total.length - 6; i < total.length + 1; i++) {
                show.push(i)
            }    
        } else {
            for(let i = page - 1; i < page + 4; i++) {
                show.push(i)
            }
            show.push('...', total.length)
        }
    } else if(page === 1 || page === 2) { 
        for(let i = 1; i < 6; i++) {
            show.push(i)
        }
        show.push('...', total.length)
    }
    return show.map((_, i) => {
        const currentClass = page === (_) ?'selected' : ''
        return (
            <li className="pagination-item" key={i}>
                <p
                    className={`page-link custom-link ${currentClass}`} 
                    href="/" 
                    onClick={_ !== "..." ? () => this.props.changePage(_) : () => console.log('nop')} >{_}</p>
            </li>
        )
    })
  }


  render() {
    if(this.props.total === 0) return null
    return (
        <nav className="pagination-container">
            <ul className="pagination justify-content-center">
                {this.renderPagination()}
            </ul>
        </nav>
    );
  }
}

export default Pagination;