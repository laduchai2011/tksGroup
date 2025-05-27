import { HandleFormat_Options } from '../../type';

class HandleFormat {
    private _options: HandleFormat_Options;

    constructor(options: HandleFormat_Options) {
        this._options = options;
    }

    get_wrapperTag = (): string => {
        return this._options.wrapperTag;
    };

    set_wrapperTag = (wrapperTag: string) => {
        this._options.wrapperTag = wrapperTag;
    };

    toggle = () => {
        const editor_element = this._options.editor_element;
        const wrapperTag = this._options.wrapperTag;

        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0 || selection.isCollapsed) return;

        const range = selection.getRangeAt(0);
        const selectedText = range.toString();

        const anchorNode = selection.anchorNode;
        if (!anchorNode) return;

        if (!editor_element) return;

        const parentElement = anchorNode.parentElement;

        if (parentElement && parentElement.tagName.toLowerCase() === wrapperTag) {
            const fragment = document.createDocumentFragment();
            while (parentElement.firstChild) {
                fragment.appendChild(parentElement.firstChild);
            }
            parentElement.replaceWith(fragment);

            const childrens = Array.from(editor_element.childNodes);
            const index = childrens.indexOf(anchorNode as Element);

            selection.removeAllRanges();
            const newRange = document.createRange();

            if (editor_element.childNodes[index]) {
                newRange.setStart(editor_element.childNodes[index], 0);
                newRange.setEnd(
                    editor_element.childNodes[index],
                    editor_element.childNodes[index].textContent?.length || 0
                );

                selection.addRange(newRange);
            }
        } else {
            const wrapper = document.createElement(wrapperTag);
            wrapper.textContent = selectedText;

            range.deleteContents();
            range.insertNode(wrapper);

            // Reset selection to the new node
            selection.removeAllRanges();
            const newRange = document.createRange();
            if (wrapper.firstChild) {
                newRange.setStart(wrapper.firstChild, 0);
                newRange.setEnd(wrapper.firstChild, wrapper.firstChild.textContent?.length || 0);
                selection.addRange(newRange);
            }
        }

        const nodes = editor_element.childNodes;
        for (let i = nodes.length - 1; i >= 0; i--) {
            const node = nodes[i];
            if (node.nodeType === Node.TEXT_NODE && !node.nodeValue?.trim()) {
                editor_element.removeChild(node);
            }
        }
    };
}

export { HandleFormat };
