export enum format_enum {
    BOLD = 'BOLD',
    ITALIC = 'ITALIC',
    UNDER_LINE = 'UNDER_LINE',
}

export type format_type = typeof format_enum.BOLD | format_enum.ITALIC | format_enum.UNDER_LINE;

export interface HandleFormat_Options {
    editor_element: HTMLDivElement | null;
    wrapperTag: string;
}
