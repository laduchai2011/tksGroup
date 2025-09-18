import { MAJOR, EXPERIENCE, NOTE } from '@src/const/text';

const _MAJOR = MAJOR;
const _EXPERIENCE = EXPERIENCE;
const _NOTE = NOTE;

export type infor_type = typeof _MAJOR | typeof _EXPERIENCE | typeof _NOTE;
export enum infor_enum {
    MAJOR = _MAJOR,
    EXPERIENCE = _EXPERIENCE,
    NOTE = _NOTE,
}
