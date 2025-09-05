import React from 'react';
import './style.scss';
import Main_visual from '../../component/main/main_visual/Main_visual';
import Video_Artist from '../../component/main/video_artist/Video_Artist';
const Main = () => {
    // useEffect(() => {
    //     const tag = document.createElement("script");
    //     tag.src = "https://www.youtube.com/iframe_api";
    //     document.body.appendChild(tag);

    //     window.onYouTubeIframeAPIReady = () => {
    //       const newPlayers = {};
    //       tracks.forEach((track) => {
    //         newPlayers[track.id] = new window.YT.Player(`player-${track.id}`, {
    //           events: {
    //             onReady: (event) => {
    //               event.target.setVolume(100); // 기본 볼륨
    //             }
    //           }
    //         });
    //       });
    //       setPlayers(newPlayers);
    //     };
    //   }, []);
    return (
        <div id="main home">
            <Main_visual />
            <Video_Artist />
        </div>
    );
};

export default Main;
