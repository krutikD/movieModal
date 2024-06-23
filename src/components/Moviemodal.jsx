import './Moviemodal.css'

export function MovieModal(props){
    return(
        
        <div className="modal">
        <img src={props.img} className="movie-img"alt="" />
        <h3 className="movie-title">{props.title}</h3>
        <p className="year">{props.year}   <span className="genre">({props.genre})</span></p>
        <p className='desc'>{props.description}</p>
        <button className='btn'><i class="ri-play-large-fill gap"></i>Play Trailer</button>
        </div>
     
    )
}