import { getAllSongIds, getSongData } from "../../lib/songs";

export async function getStaticPaths() {
  const paths = getAllSongIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const songData = getSongData(params.id);
  return {
    props: {
      songData,
    },
  };
}

function Music({ songData }) {
  return (
    <div>
      <div>
        <img
          src={songData.artwork}
          alt="Album artwork"
        />
      </div>
      <h2>{songData.title}</h2>
      <h3>{songData.artist}</h3>
      <h4>{songData.date}</h4>
      <div>
        <p>{songData.description}</p>
      </div>
    </div>
  );
}

export default Music;
