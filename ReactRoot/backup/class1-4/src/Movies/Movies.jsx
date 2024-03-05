import React from 'react'
class Movies extends React.Component{
     movie_Name = "Kgf3"
     actor = "Yash"
     render(){
            return <div>
              <button className='btn btn-primary'>Test</button>
                   <h1>Movie Component</h1>
                   <h2>Movie Name: {this.movie_Name}</h2>
                   <h2>Actor Name: {this.actor}</h2>
            </div>
    }

}

export default Movies