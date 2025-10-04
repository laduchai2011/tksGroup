import { ALL, PLAY, LIST } from '@src/const/text';

const _ALL = ALL;
const _PLAY = PLAY;
const _LIST = LIST;

export enum options_enum {
    ALL = _ALL,
    PLAY = _PLAY,
    LIST = _LIST,
}

export type selectedOptions_type = typeof options_enum.ALL | typeof options_enum.PLAY | typeof options_enum.LIST;
