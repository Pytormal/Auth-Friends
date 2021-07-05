import React from 'react'
import moment from 'moment'
import loader from 'react-loader-spinner'
import { axiosWithAuth } from '../utils/axiosWithAuth'



class FriendsList extends React.Component {
	state = {
		friends: [],
	};

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		axiosWithAuth()
			.get('/friends')
			.then((res) => {
				this.setState(res.data);
        console.log('friends.js list', res.data);
        		
        const friends = res.data.map(e => 
          <p>{e.name}</p>
        )
        this.setState({ friends})
			})
			.catch((error) => {
				console.error('Server Error', error);
			});
  };
  
 
  render() {
    return (
      <>
      <h1>hello friends</h1>
        <div>{this.state.friends}</div>
        </>
  )
}

  
}
export default FriendsList