import {
    HOME,
    MEDICATIONS,
    MEDICATION,
    CREATE_MEDICATION,
    DOCTORS,
    CONTACT,
    REPORT,
    PROFILE,
    EXAMINE,
    SIGNUP,
    PATIENT_RECORD,
} from '@src/const/text';

const _HOME = HOME;
const _MEDICATIONS = MEDICATIONS;
const _MEDICATION = MEDICATION;
const _CREATE_MEDICATION = CREATE_MEDICATION;
const _DOCTORS = DOCTORS;
const _CONTACT = CONTACT;
const _REPORT = REPORT;
const _PROFILE = PROFILE;
const _EXAMINE = EXAMINE;
const _SIGNUP = SIGNUP;
const _PATIENT_RECORD = PATIENT_RECORD;

export enum select_enum {
    HOME = _HOME,
    MEDICATIONS = _MEDICATIONS,
    MEDICATION = _MEDICATION,
    CREATE_MEDICATION = _CREATE_MEDICATION,
    DOCTORS = _DOCTORS,
    CONTACT = _CONTACT,
    REPORT = _REPORT,
    PROFILE = _PROFILE,
    EXAMINE = _EXAMINE,
    SIGNUP = _SIGNUP,
    PATIENT_RECORD = _PATIENT_RECORD,
}
export type selected_type =
    | select_enum.HOME
    | select_enum.MEDICATIONS
    | select_enum.MEDICATION
    | select_enum.CREATE_MEDICATION
    | select_enum.DOCTORS
    | select_enum.CONTACT
    | select_enum.REPORT
    | select_enum.PROFILE
    | select_enum.EXAMINE
    | select_enum.SIGNUP
    | select_enum.PATIENT_RECORD;

export enum route_enum {
    HOME = '/',
    MEDICATIONS = '/medications',
    MEDICATION = '/medication',
    CREATE_MEDICATION = '/create_medication',
    DOCTORS = '/doctors',
    CONTACT = '/contact',
    REPORT = '/report',
    PROFILE = '/profile',
    EXAMINE = '/examine',
    SIGNUP = '/signup',
    PATIENT_RECORD = '/patient_record',
}
export type routed_type =
    | route_enum.HOME
    | route_enum.MEDICATIONS
    | route_enum.MEDICATION
    | route_enum.CREATE_MEDICATION
    | route_enum.DOCTORS
    | route_enum.CONTACT
    | route_enum.REPORT
    | route_enum.PROFILE
    | route_enum.EXAMINE
    | route_enum.SIGNUP
    | route_enum.PATIENT_RECORD;
