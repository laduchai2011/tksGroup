export interface LoaderContext {
    url: string;
    type: 'manifest' | 'level' | 'audioTrack' | 'subtitleTrack' | 'fragment';
    [key: string]: any;
}

export interface LoaderCallbacks {
    onSuccess: (response: any, context: LoaderContext, xhr: XMLHttpRequest) => void;
    onError: (error: any, context: LoaderContext, xhr: XMLHttpRequest) => void;
}
