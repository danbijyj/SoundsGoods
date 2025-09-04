import React from 'react';

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
        <div>
            <iframe
                width="1250"
                height="703"
                src="https://www.youtube.com/embed/9_bTl2vvYQg"
                title="Golden"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
        </div>
    );
};

export default Main;
