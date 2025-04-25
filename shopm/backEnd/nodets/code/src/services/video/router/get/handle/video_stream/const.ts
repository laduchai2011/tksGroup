import path from 'path';

const root_path = process.cwd();

// const video_input = `${root_path}\\data\\video\\video.mp4`;
//const video_output = `${root_path}\\src\\data\\video\\output`;
const video_input = path.join(root_path, 'data', 'video');
const video_output = path.join(root_path, 'data', 'video', 'output');

// export const COMMAND_Encode_Video_To_HLS = `${ffmpegPath} -i ${video_input} -filter_complex "[0:v]split=3[v1][v2][v3]; [v1]scale=w=1920:h=1080[v1080]; [v2]scale=w=1280:h=720[v720]; [v3]scale=w=854:h=480[v480]" -map "[v1080]" -map a -c:v:0 h264 -b:v:0 5000k -maxrate:v:0 5350k -bufsize:v:0 7500k -profile:v:0 main -map "[v720]"  -map a -c:v:1 h264 -b:v:1 2800k -maxrate:v:1 2996k -bufsize:v:1 4200k -profile:v:1 main -map "[v480]"  -map a -c:v:2 h264 -b:v:2 1400k -maxrate:v:2 1498k -bufsize:v:2 2100k -profile:v:2 main -c:a aac -ar 48000 -b:a:0 192k -b:a:1 128k -b:a:2 96k -f hls -hls_time 6 -hls_playlist_type vod -sc_threshold 0 -g 48 -keyint_min 48 -hls_segment_filename "v%v_%03d.ts" -master_pl_name "master.m3u8" -var_stream_map "v:0,a:0 v:1,a:1 v:2,a:2" "v%v.m3u8"`;

// template:
// ffmpeg -i input.mp4 \
//   -filter_complex "[0:v]split=3[v1][v2][v3]; \
//                    [v1]scale=w=1920:h=1080[v1080]; \
//                    [v2]scale=w=1280:h=720[v720]; \
//                    [v3]scale=w=854:h=480[v480]" \
//   -map "[v1080]" -map a -c:v:0 h264 -b:v:0 5000k -maxrate:v:0 5350k -bufsize:v:0 7500k -profile:v:0 main \
//   -map "[v720]"  -map a -c:v:1 h264 -b:v:1 2800k -maxrate:v:1 2996k -bufsize:v:1 4200k -profile:v:1 main \
//   -map "[v480]"  -map a -c:v:2 h264 -b:v:2 1400k -maxrate:v:2 1498k -bufsize:v:2 2100k -profile:v:2 main \
//   -c:a aac -ar 48000 -b:a:0 192k -b:a:1 128k -b:a:2 96k \
//   -f hls \
//   -hls_time 6 -hls_playlist_type vod -sc_threshold 0 \
//   -g 48 -keyint_min 48 \
//   -hls_segment_filename "v%v_%03d.ts" \
//   -master_pl_name master.m3u8 \
//   -var_stream_map "v:0,a:0 v:1,a:1 v:2,a:2" \
//   v%v.m3u8

// prettier-ignore
export const COMMAND_Encode_Video_To_HLS = [
    '-i', path.join(video_input, 'video.mp4'),
    '-filter_complex', '[0:v]split=3[v1][v2][v3];' +
        '[v1]scale=w=1920:h=1080[v1080];' +
        '[v2]scale=w=1280:h=720[v720];' +
        '[v3]scale=w=854:h=480[v480];',
    // stream 1080p
    '-map', '[v1080]',
    '-map', 'a:0',
    '-c:v:0', 'h264',
    '-b:v:0', '5000k',
    '-maxrate:v:0', '5350k',
    '-bufsize:v:0', '7500k',
    '-profile:v:0', 'main',
    // stream 720p
    '-map', '[v720]',
    '-map', 'a:1',
    '-c:v:1', 'h264',
    '-b:v:1', '2800k',
    '-maxrate:v:1', '2996k',
    '-bufsize:v:1', '4200k',
    '-profile:v:1', 'main',
    // stream 480p
    '-map', '[v480]',
    '-map', 'a:2',
    '-c:v:2', 'h264',
    '-b:v:2', '1400k',
    '-maxrate:v:2', '1498k',
    '-bufsize:v:2', '2100k',
    '-profile:v:2', 'main',
    // audio
    '-c:a', 'aac',
    '-ar', '48000',
    '-b:a:0', '192k',
    '-b:a:1', '128k',
    '-b:a:2', '96k',
    // HLS
    '-f', 'hls',
    '-hls_time', '6',
    '-hls_playlist_type', 'vod',
    '-sc_threshold', '0',
    '-g', '48',
    '-keyint_min', '48',
    '-hls_segment_filename', path.join(video_output, 'v%v_%03d.ts'),
    '-master_pl_name', path.join(video_output, 'master.m3u8'),
    '-var_stream_map', 'v:0,a:0 v:1,a:1 v:2,a:2',
    path.join(video_output, 'v%v.m3u8'),
];
