import { CUSTOMER_SEND, DOCTOR_SEND, FINISH } from '@src/const/text';

const _CUSTOMER_SEND = CUSTOMER_SEND;
const _DOCTOR_SEND = DOCTOR_SEND;
const _FINISH = FINISH;

export enum progress_enum {
    CUSTOMER_SEND = _CUSTOMER_SEND,
    DOCTOR_SEND = _DOCTOR_SEND,
    FINISH = _FINISH,
}

export type progress_type =
    | typeof progress_enum.CUSTOMER_SEND
    | typeof progress_enum.DOCTOR_SEND
    | typeof progress_enum.FINISH;
