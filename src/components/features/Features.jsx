import "./features.scss";

export default function Features({type}) {
  return (
    <div className="features">
      {type && (
        <div className="category">
          <span>{ type === "movie" ? "Movie" : "TV Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="horror">Horror</option>
            <option value="comdey">Comedy</option>
            <option value="adult">Adult</option>
          </select>
        </div>
      )}
        <img src="https://4kwallpapers.com/images/walls/thumbs_3t/11990.jpeg" alt="featurepic"/>

        <div className="information">

          <img src='https://logos-world.net/wp-content/uploads/2020/11/Spider-Man-Logo.png' alt=''></img>
          <span className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolore recusandae sunt, debitis eaque quam? Explicabo asperiores, vel odit excepturi alias adipisci, nesciunt doloremque voluptatum ipsa numquam animi quis sapiente.
          </span>
          <div className="buttons">
            <button className="play">
              <span class="material-symbols-outlined">search</span>
              <span>Play</span>
            </button>

            <button className="info">
              <span class="material-symbols-outlined">info</span>
              <span>Info</span>
            </button>   
          </div>

        </div>
    </div>
  )
}
