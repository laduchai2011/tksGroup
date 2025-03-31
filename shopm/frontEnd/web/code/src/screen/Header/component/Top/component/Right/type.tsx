import { NOTIFY, MESSAGE, PROFILE, INDEX_NOTYFY, INDEX_MESSAGE, INDEX_PROFILE } from './const';

export type selections_type = typeof NOTIFY | typeof MESSAGE | typeof PROFILE;
export type selections_index_type = typeof INDEX_NOTYFY | typeof INDEX_MESSAGE | typeof INDEX_PROFILE;

export enum selections_enum {
    NOTIFY = 'NOTIFY',
    MESSAGE = 'MESSAGE',
    PROFILE = 'PROFILE',
}
export enum selections_index_enum {
    NOTIFY = INDEX_NOTYFY,
    MESSAGE = INDEX_MESSAGE,
    PROFILE = INDEX_PROFILE,
}

export type context_type = {
    selected: selections_type;
    set_selected: React.Dispatch<React.SetStateAction<selections_type>>;
    isShow: boolean;
    set_isShow: React.Dispatch<React.SetStateAction<boolean>>;
    isLoading: boolean;
};
