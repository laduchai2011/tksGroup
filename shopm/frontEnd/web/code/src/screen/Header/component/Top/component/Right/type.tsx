import { NOTIFY, MESSAGE, PROFILE, INDEX_NOTYFY, INDEX_MESSAGE, INDEX_PROFILE } from './const';

export type selections_type = typeof NOTIFY | typeof MESSAGE | typeof PROFILE;
export type selections_index_type = typeof INDEX_NOTYFY | typeof INDEX_MESSAGE | typeof INDEX_PROFILE;

const _NOTIFY = NOTIFY;
const _MESSAGE = MESSAGE;
const _PROFILE = PROFILE;
export enum selections_enum {
    NOTIFY = _NOTIFY,
    MESSAGE = _MESSAGE,
    PROFILE = _PROFILE,
}
const _INDEX_NOTIFY = INDEX_NOTYFY;
const _INDEX_MESSAGE = INDEX_MESSAGE;
const _INDEX_PROFILE = INDEX_PROFILE;
export enum selections_index_enum {
    NOTIFY = _INDEX_NOTIFY,
    MESSAGE = _INDEX_MESSAGE,
    PROFILE = _INDEX_PROFILE,
}

export type context_type = {
    selected: selections_type;
    set_selected: React.Dispatch<React.SetStateAction<selections_type>>;
    isShow: boolean;
    set_isShow: React.Dispatch<React.SetStateAction<boolean>>;
    isLoading: boolean;
};
