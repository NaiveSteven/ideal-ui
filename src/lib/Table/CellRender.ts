export default {
    name: 'CellRender',
    functional: true,
    props: {
        render: Function,
        column: Object,
        index: Number
    },
    render: (h) => {
        const params = {
            column: props.column,
            index: props.index
        };
        // return props.render(h, params);
    }
};