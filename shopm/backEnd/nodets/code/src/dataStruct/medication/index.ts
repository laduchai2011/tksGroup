export interface MedicationField {
    id: number;
    title: string;
    type: string;
    typeGroup: string;
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

export interface CreateMedicationField {
    medication: MedicationField;
    medicationImages: MedicationImageField[];
    medicationVideos: MedicationVideoField[];
}
