import {Component} from 'react'
import apiHandle from '../Axios/ApiHandle'
import User from '../users/Users'
import SearchBox from '../SearchBox/SearchBox'
import './Home.style.css'

export default class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [],
        searchField: ''
      }
    }
  
    async componentDidMount() {
      const res = await apiHandle.getUser()
      this.setState({ users: res })
    }
  
    onsearchChange = (event) => {
      this.setState({ searchField: event.target.value })
    }
    render() {
      const { users, searchField } = this.state
      const filterUsers = users.filter(user => (
        user.name.toLowerCase().includes(searchField.toLowerCase())
      ))
      return (
        <div className="home">
          <SearchBox searchChange={this.onsearchChange} />
          <User users={filterUsers} />
  
        </div>
      )
    }
  }