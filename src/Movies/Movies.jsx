import React from "react";
import Movie from "../Movie/Movie.jsx";
import './style.css';
class Movies extends React.Component{
    getMovie = (name, language, image) => {
        {
          return <Movie name={name} language={language} image={image}/>  
        }
    }
    render() {
        return (
        <div className='movies-section'>
            {
                this.getMovie(
                    'Godzilla vs Kong',
                    'English',
                    'https://themoviespoiler.com/wp-content/uploads/2021/03/godzilla_vs_kong_ver14.jpg'
                )
                
            }
            {
                this.getMovie(
                    'TAILGATE',
                    'English',
                    'https://resizing.flixster.com/a2_Qz4wyYM8k7gRYI_9fmvFlul4=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzg0ZmQ5ZDIxLWUxY2MtNDIxMi05MjFmLTlhYWQ4YTI1YzFjYS5qcGc='
                )
                
            }
            {
                this.getMovie(
                    'The Tunnel',
                    'English',
                    'https://m.media-amazon.com/images/M/MV5BM2E2Y2U2YWUtMDM5MC00ZTg5LTg0MGMtNTU2OTVmNjg4Mjk2XkEyXkFqcGdeQXVyMjE4NzUxNDA@._V1_.jpg'
                )
            }
        </div>
    );
    }
}
export default Movies;