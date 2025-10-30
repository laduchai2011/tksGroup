export interface MedicationField {
    id: number;
    title: string;
    type: string;
    typeGroup: typeGroup_type;
    information: string;
    averageRating: number;
    rateCount: number;
    amount: number;
    discount: number;
    price: number;
    status: string;
    userId: number;
    updateTime: string;
    createTime: string;
}

export interface MedicationImageField {
    id: number;
    url: string;
    medicationId: number;
    updateTime: string;
    createTime: string;
}

export interface MedicationVideoField {
    id: number;
    url: string;
    medicationId: number;
    updateTime: string;
    createTime: string;
}

export interface CreateMedicationBodyField {
    medication: MedicationField;
    images: MedicationImageField[];
    videos: MedicationVideoField[];
}

export enum typeGroup_enum {
    NORMAL = 'NORMAL',
    FRAGILE = 'FRAGILE',
}

export type typeGroup_type = typeGroup_enum.NORMAL | typeGroup_enum.FRAGILE | string;

export interface MedicationBodyField {
    page: number;
    size: number;
    userId?: number;
}

export interface PagedMedicationField {
    items: MedicationField[];
    totalCount: number;
}
