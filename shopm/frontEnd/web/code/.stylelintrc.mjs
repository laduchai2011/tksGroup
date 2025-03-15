// {
//     "extends": "stylelint-config-standard",
//     "reportNeedlessDisables": false,
//     "defaultSeverity": "warning",
//     "ignoreFiles": [],
//     "overrides": [
//         {
//             "files": ["**/*.css", "**/*.pcss"],
//             "customSyntax": "postcss-syntax"
//         }
//     ],
//     "rules": {
//         "indentation": 2,
//         "string-quotes": "double",
//         "color-hex-length": "short"
//     }
// }
export default {
    extends: ['stylelint-config-standard'],
    defaultSeverity: 'warning', // Cảnh báo khi không có file CSS
    reportNeedlessDisables: false, // Ngăn Stylelint báo lỗi không cần thiết
    allowEmptyInput: true, // Không lỗi khi không có file CSS
    ignoreFiles: [],
    overrides: [
        {
            files: ['**/*.css', '**/*.pcss'],
            customSyntax: 'postcss-syntax',
        },
    ],
    rules: {
        indentation: 2,
        'string-quotes': 'double',
        'color-hex-length': 'short',
    },
};
