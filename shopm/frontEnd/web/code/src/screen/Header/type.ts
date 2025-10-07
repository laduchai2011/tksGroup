import { HOME, MEDICATIONS, DOCTORS, CONTACT, REPORT, PROFILE } from '@src/const/text';

const _HOME = HOME;
const _MEDICATIONS = MEDICATIONS;
const _DOCTORS = DOCTORS;
const _CONTACT = CONTACT;
const _REPORT = REPORT;
const _PROFILE = PROFILE;

export enum select_enum {
    HOME = _HOME,
    MEDICATIONS = _MEDICATIONS,
    DOCTORS = _DOCTORS,
    CONTACT = _CONTACT,
    REPORT = _REPORT,
    PROFILE = _PROFILE,
}
export type selected_type =
    | select_enum.HOME
    | select_enum.MEDICATIONS
    | select_enum.DOCTORS
    | select_enum.CONTACT
    | select_enum.REPORT
    | select_enum.PROFILE;

export enum route_enum {
    HOME = '/',
    MEDICATIONS = '/medications',
    DOCTORS = '/doctors',
    CONTACT = '/contact',
    REPORT = '/report',
    PROFILE = '/profile',
}
export type routed_type =
    | route_enum.HOME
    | route_enum.MEDICATIONS
    | route_enum.DOCTORS
    | route_enum.CONTACT
    | route_enum.REPORT
    | route_enum.PROFILE;
