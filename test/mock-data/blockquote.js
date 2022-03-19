module.exports = {
    type: "root",
    children: [
        {
            type: "heading",
            depth: 1,
            children: [
                {
                    type: "text",
                    value: "h1",
                    position: {
                        start: {
                            line: 1,
                            column: 3,
                            offset: 2,
                        },
                        end: {
                            line: 1,
                            column: 5,
                            offset: 4,
                        },
                    },
                },
            ],
            position: {
                start: {
                    line: 1,
                    column: 1,
                    offset: 0,
                },
                end: {
                    line: 1,
                    column: 5,
                    offset: 4,
                },
            },
        },
        {
            type: "heading",
            depth: 2,
            children: [
                {
                    type: "text",
                    value: "h2",
                    position: {
                        start: {
                            line: 3,
                            column: 4,
                            offset: 9,
                        },
                        end: {
                            line: 3,
                            column: 6,
                            offset: 11,
                        },
                    },
                },
            ],
            position: {
                start: {
                    line: 3,
                    column: 1,
                    offset: 6,
                },
                end: {
                    line: 3,
                    column: 6,
                    offset: 11,
                },
            },
        },
        {
            type: "blockquote",
            children: [
                {
                    type: "paragraph",
                    children: [
                        {
                            type: "text",
                            value: "TODO",
                            position: {
                                start: {
                                    line: 5,
                                    column: 3,
                                    offset: 15,
                                },
                                end: {
                                    line: 5,
                                    column: 7,
                                    offset: 19,
                                },
                            },
                        },
                    ],
                    position: {
                        start: {
                            line: 5,
                            column: 3,
                            offset: 15,
                        },
                        end: {
                            line: 5,
                            column: 7,
                            offset: 19,
                        },
                    },
                },
            ],
            position: {
                start: {
                    line: 5,
                    column: 1,
                    offset: 13,
                },
                end: {
                    line: 5,
                    column: 7,
                    offset: 19,
                },
            },
        },
    ],
    position: {
        start: {
            line: 1,
            column: 1,
            offset: 0,
        },
        end: {
            line: 5,
            column: 7,
            offset: 19,
        },
    },
};
