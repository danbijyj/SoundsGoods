import { create } from 'zustand';
import main_Artist_data from '../assets/api/main_Artist_data';
import goodsData from '../assets/api/goods';
// 작업 수정

// YT 상수 정의를 함수 내부로 이동하거나 안전하게 처리
const getYT = () => {
    if (typeof window === 'undefined') return null;
    return window.YT || null;
};

export const usemainAlbumStore = create((set, get) => {
    return {
        mainAlAtData: main_Artist_data,
        musicOn: false,
        musicModal: null,
        players: {},
        ytReady: false,
        currentPlayerId: null,

        // YouTube API 초기화 함수
        onTrack: (id) =>
            set((state) => ({
                mainAlAtData: state.mainAlAtData.map((item) =>
                    item.id === id ? { ...item, actv: true } : { ...item, actv: false }
                ),
            })),

        initYouTube: () => {
            return new Promise((resolve) => {
                if (typeof window === 'undefined') {
                    resolve(false);
                    return;
                }

                // 이미 YouTube API가 로드된 경우
                if (window.YT && window.YT.Player) {
                    set({ ytReady: true });
                    resolve(true);
                    return;
                }

                // YouTube API가 아직 로드되지 않은 경우
                if (!window.onYouTubeIframeAPIReady) {
                    window.onYouTubeIframeAPIReady = () => {
                        set({ ytReady: true });
                        resolve(true);
                    };
                }

                // 10초 타임아웃 설정
                const timeout = setTimeout(() => {
                    console.error('YouTube API loading timeout');
                    resolve(false);
                }, 10000);

                // 주기적으로 확인
                const interval = setInterval(() => {
                    if (window.YT && window.YT.Player) {
                        clearInterval(interval);
                        clearTimeout(timeout);
                        set({ ytReady: true });
                        resolve(true);
                    }
                }, 100);
            });
        },

        // 플레이어 생성 함수 (수정된 버전)
        createPlayer: (track) => {
            return new Promise((resolve, reject) => {
                const { players, currentPlayerId } = get();
                const YT = getYT(); // 안전하게 YT 객체 가져오기

                if (!YT) {
                    reject(new Error('YouTube API not loaded'));
                    return;
                }

                console.log('Creating player for track:', track.id);

                // 기존 재생 중인 플레이어 정지
                if (currentPlayerId && players[currentPlayerId]) {
                    console.log('Stopping previous player:', currentPlayerId);
                    try {
                        players[currentPlayerId].pauseVideo();
                    } catch (error) {
                        console.log('Error pausing previous player:', error);
                    }
                }

                // 이미 플레이어가 있으면 재생 시작
                if (players[track.id]) {
                    console.log('Using existing player:', track.id);
                    try {
                        // playVideo()는 Promise를 반환하지 않으므로 then() 사용 불가
                        players[track.id].playVideo();
                        set({ currentPlayerId: track.id });
                        resolve(players[track.id]);
                    } catch (error) {
                        console.error('Error with existing player:', error);
                        delete players[track.id];
                    }
                    return;
                }

                // 새 플레이어 생성
                console.log('Creating new player for:', track.id);
                let playerElement = document.getElementById(`youtube-player-${track.id}`);
                if (!playerElement) {
                    playerElement = document.createElement('div');
                    playerElement.id = `youtube-player-${track.id}`;
                    playerElement.style.display = 'none';
                    document.body.appendChild(playerElement);
                }

                try {
                    const player = new YT.Player(`youtube-player-${track.id}`, {
                        videoId: track.yid,
                        width: '0',
                        height: '0',
                        playerVars: {
                            autoplay: 1,
                            modestbranding: 1,
                            rel: 0,
                            enablejsapi: 1,
                            origin: window.location.origin,
                        },
                        events: {
                            onReady: (event) => {
                                console.log('Player is ready for:', track.id);
                                try {
                                    event.target.playVideo();
                                    set({ currentPlayerId: track.id });
                                    resolve(event.target);
                                } catch (error) {
                                    console.error('Error in onReady:', error);
                                    reject(error);
                                }
                            },
                            onStateChange: (event) => {
                                console.log('Player state changed:', event.data, 'for:', track.id);
                                if (event.data === YT.PlayerState.PLAYING) {
                                    set({ currentPlayerId: track.id });
                                } else if (event.data === YT.PlayerState.ENDED) {
                                    set({ currentPlayerId: null });
                                }
                            },
                            onError: (event) => {
                                console.error(
                                    'YouTube Player Error:',
                                    event.data,
                                    'for:',
                                    track.id
                                );
                                reject(new Error(`YouTube error: ${event.data}`));
                            },
                        },
                    });

                    set({
                        players: {
                            ...players,
                            [track.id]: player,
                        },
                    });
                } catch (error) {
                    console.error('Error creating YouTube player:', error);
                    reject(error);
                }
            });
        },

        // 음악 재생 시작 (수정된 버전)
        MStart: async (id) => {
            try {
                const track = get().mainAlAtData.find((item) => item.id === id);
                if (!track) {
                    console.error('Track not found:', id);
                    return;
                }

                set({ musicOn: true, musicModal: track });

                // YouTube API 준비 확인
                if (!get().ytReady) {
                    const isReady = await get().initYouTube();
                    if (!isReady) {
                        console.error('YouTube API failed to load');
                        return;
                    }
                }

                const { currentPlayerId, players } = get();
                const YT = getYT();

                if (currentPlayerId === id && players[id]) {
                    // 같은 트랙이면 일시정지 토글
                    try {
                        const playerState = players[id].getPlayerState();
                        if (playerState === YT.PlayerState.PLAYING) {
                            players[id].pauseVideo();
                        } else {
                            players[id].playVideo();
                        }
                    } catch (error) {
                        console.error('Error toggling play/pause:', error);
                    }
                } else {
                    // 다른 트랙이면 새로 재생
                    await get().createPlayer(track);
                }
            } catch (error) {
                console.error('Error in MStart:', error);
            }
        },

        // 음악 정지
        MStop: (id) => {
            const { players } = get();
            if (players[id]) {
                try {
                    players[id].pauseVideo();
                    set({ currentPlayerId: null });
                } catch (error) {
                    console.error('Error stopping player:', error);
                }
            }
        },

        // 볼륨 설정
        setVolume: (id, volume) => {
            const { players } = get();
            if (players[id] && typeof players[id].setVolume === 'function') {
                try {
                    players[id].setVolume(volume);
                } catch (error) {
                    console.error('Error setting volume:', error);
                }
            }
        },

        // 모달 닫기
        closeModal: () => {
            const { players, musicModal } = get();

            if (musicModal && players[musicModal.id]) {
                try {
                    players[musicModal.id].stopVideo();
                } catch (error) {
                    console.error('Error stopping video:', error);
                }
            }

            set({
                musicOn: false,
                musicModal: null,
                currentPlayerId: null,
            });
        },
    };
});
export const useGoodsStore = create((set) => {
    return {
        goods: goodsData,
    };
});
