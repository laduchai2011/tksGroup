// export interface data_control_struct {
//     data: {
//         id: number;
//     };
//     base_address: number;
//     offset_address: number;
// }

// export interface view_control_struct {
//     rect_bottom: number;
//     fix: boolean;
// }

export type context_type = {
    parent_element: React.RefObject<HTMLDivElement | null>;
    rect_bottom_container: number;
};
