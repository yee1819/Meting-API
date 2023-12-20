import { get_playlist } from "./playlist.js"
import { get_song_url, get_song_info } from "./song.js"
import { get_lyric } from "./lyric.js"
import { get_artist_songs } from "./artist_songs.js"

const support_type = ['url', 'lrc', 'song', 'playlist', 'artist']

const handle = async (type, id, cookie = '') => {
    let result;
    switch (type) {
        case 'lrc':
            result = await get_lyric(id)
            break
        case 'url':
            result = await get_song_url(id)
            break
        case 'song':
            result = await get_song_info(id)
            break
        case 'playlist':
            result = await get_playlist(id)
            break
        case 'artist':
            result = await get_artist_songs(id)
            break
        default:
            return -1;
    }
    return result
}

export default {
    register: (ctx) => {
        ctx.register('netease', { handle, support_type })
    }
}
