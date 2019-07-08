import React, { Component }  from 'react'
import axios from 'axios'
import md5 from 'js-md5'
import Pagination from '../Pagination/';
import './HeroesList.css'

const PUBLIC_KEY = 'dadef783906b16bb2e28933380b8ee11'
const PRIVATE_KEY = '7c8e608afcf4a271d08585b1882ab9f809f8b7c8'

class HeroesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            heroes: [],
            page: 1,
            total: 0
        }
    }    
    
    componentDidMount = () => {
        this.fetchApi()
    }
    
    fetchApi = async () => {
        const timestamp = Number(new Date())
        const hash = md5.create()
        hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)
        var url = `https://gateway.marvel.com:443/v1/public/characters?orderBy=-modified&limit=30&offset=${(this.state.page - 1) *30}&apikey=dadef783906b16bb2e28933380b8ee11&hash=${hash.hex()}&ts=${timestamp}`
        //var url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=1000&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
        const request = await axios.get(url)
        this.setState({
            heroes: request.data.data.results,
            total: request.data.data.total
        })
    }

    changePage = n => {
        this.setState({
            page: n
        }, () => {
            this.fetchApi()
        })
    }

    listHeroes = () => {
        if(this.state.heroes !== undefined) {
            return this.state.heroes.map((hero, i) => {
                return <li key={i} className="heroItem">
                    <div>
                        <img src={`${hero.thumbnail.path}/portrait_xlarge.${hero.thumbnail.extension}`} alt={hero.name} />
                        <p>{hero.name}</p>
                    </div>
                </li>
            })
        } else {
            return <li>Loading...</li>
        }
    }

    render() {
        console.log(this.state)
        return(
            <div className="heroesContainer">
                <ul className="text-light, gridHeroes">
                    {this.listHeroes()}
                </ul>
                <Pagination currentPage={this.state.page} total={this.state.total} changePage={this.changePage} />
            </div>
        );
    }
}

export default HeroesList