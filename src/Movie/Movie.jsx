import * as React from 'react';
import './style.css';
class Movie extends React.Component {
    render() {
        return(
            <div className='movie-card'>
                <img src={this.props.image}/>
                 <label>{this.props.name}</label>
                 <br></br>
                 <label>{this.props.language}</label>
            </div>        
        );
    }
}
export default Movie;