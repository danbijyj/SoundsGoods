import React, { useCallback, useEffect, useState } from 'react';
import { usemainAlbumStore } from '../../store';
import './style.scss';
const MusicModal = () => {
    const { musicOn, musicModal, players, MStop, closeModal, setVolume } = usemainAlbumStore();

    const [currentVolume, setCurrentVolume] = useState(40);
    const [isPlay, setIsPlay] = useState(true);
    const [playerElements, setPlayerElements] = useState({});
    const [lastPlayedId, setLastPlayedId] = useState(null);

    // musicModal이 변경될 때 YouTube 플레이어 DOM 요소 생성
    useEffect(() => {
        if (musicModal) {
            // ✅ 다른 li를 클릭했을 때만 초기화
            const isDifferentTrack = lastPlayedId !== musicModal.id;

            // 플레이어 요소 생성 또는 확인
            if (!playerElements[musicModal.id]) {
                let element = document.getElementById(`youtube-player-${musicModal.id}`);
                if (!element) {
                    element = document.createElement('div');
                    element.id = `youtube-player-${musicModal.id}`;
                    element.style.display = 'none';
                    document.body.appendChild(element);
                }
                setPlayerElements((prev) => ({
                    ...prev,
                    [musicModal.id]: true,
                }));
            }

            // 플레이어 상태 동기화
            if (players[musicModal.id]) {
                try {
                    // ✅ 다른 트랙을 클릭했을 때만 처음부터 재생
                    if (isDifferentTrack) {
                        players[musicModal.id].seekTo(0, true);
                        setLastPlayedId(musicModal.id);
                    }

                    players[musicModal.id]
                        .playVideo()
                        .then(() => {
                            setIsPlay(true);
                        })
                        .catch((error) => {
                            console.error('Error playing video:', error);
                            setIsPlay(false);
                        });

                    // 볼륨 설정
                    players[musicModal.id].setVolume(currentVolume);
                } catch (error) {
                    console.error('Error syncing player state:', error);
                    setIsPlay(false);
                }
            } else {
                setIsPlay(false);
            }
        }
    }, [musicModal, players, playerElements, currentVolume, lastPlayedId]);

    const handlePlayPause = useCallback(() => {
        if (!musicModal || !players[musicModal.id]) return;

        try {
            const player = players[musicModal.id];
            const playerState = player.getPlayerState();

            if (playerState === 1) {
                // PLAYING
                player.pauseVideo();
                setIsPlay(false);
            } else {
                player
                    .playVideo()
                    .then(() => {
                        setIsPlay(true);
                    })
                    .catch((error) => {
                        console.error('Error playing video:', error);
                        setIsPlay(false);
                    });
            }
        } catch (error) {
            console.error('Error in play/pause:', error);
        }
    }, [musicModal, players]);

    const handleVolumeChange = useCallback(
        (e) => {
            const volume = parseInt(e.target.value);
            setCurrentVolume(volume);

            if (musicModal) {
                setVolume(musicModal.id, volume);
            }
        },
        [musicModal, setVolume]
    );

    useEffect(() => {
        if (musicModal && players[musicModal.id]) {
            setIsPlay(true);
            setVolume(musicModal.id, currentVolume);
        }
    }, [musicModal, players, currentVolume, setVolume]);

    // 모달이 닫혀있으면 아무것도 렌더링하지 않음
    if (!musicOn || !musicModal) return null;

    // musicModal에서 필요한 속성만 안전하게 추출
    const { artist, album, album_img, id } = musicModal;
    return (
        <div className="music_modal">
            <div className="album_pic">
                <img src={album_img} alt="" />
                <p>
                    <strong>{artist}</strong>
                    <span>{album}</span>
                </p>
            </div>
            <div className="player_controll">
                <button className="btn shurple">
                    <img src="/images/icons/shurple.png" alt="" />
                </button>
                <button className="btn prev">
                    <img src="/images/icons/prev.png" alt="" />
                </button>
                <button className="btn play" onClick={handlePlayPause}>
                    <img src="/images/icons/play.png" alt="" />
                </button>
                <button className="btn next">
                    <img src="/images/icons/next.png" alt="" />
                </button>
                <button className="btn loop">
                    <img src="/images/icons/loop.png" alt="" />
                </button>
            </div>
            <div id={`youtube-player-${id}`} style={{ display: 'none' }}></div>
        </div>
    );
};

export default MusicModal;
