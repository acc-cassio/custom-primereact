import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ props }) =>
        classNames('p-icon-field', {
            'p-icon-field-right': props.iconposition === 'right',
            'p-icon-field-left': props.iconposition === 'left'
        })
};

export const IconFieldBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'IconField',
        __parentMetadata: null,
        children: undefined,
        className: null,
        iconposition: 'right'
    },

    css: {
        classes
    }
});
