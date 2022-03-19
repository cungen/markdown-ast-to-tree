module.exports = {
    type: "root",
    children: [
        {
            type: "list",
            children: [
                {
                    type: "listItem",
                    children: [
                        {
                            type: "paragraph",
                            children: [
                                {
                                    type: "text",
                                    value: "l1 - 1",
                                },
                            ],
                        },
                        {
                            type: "list",
                            children: [
                                {
                                    type: "listItem",
                                    children: [
                                        {
                                            type: "paragraph",
                                            children: [
                                                {
                                                    type: "text",
                                                    value: "l1 child l1",
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: "listItem",
                                    children: [
                                        {
                                            type: "paragraph",
                                            children: [
                                                {
                                                    type: "text",
                                                    value: "l1 child l2",
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    type: "listItem",
                    spread: false,
                    checked: null,
                    children: [
                        {
                            type: "paragraph",
                            children: [
                                {
                                    type: "text",
                                    value: "l1 - 2",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: "heading",
            depth: 1,
            children: [
                {
                    type: "text",
                    value: "h1",
                },
            ],
        },
        {
            type: "list",
            children: [
                {
                    type: "listItem",
                    spread: false,
                    checked: null,
                    children: [
                        {
                            type: "paragraph",
                            children: [
                                {
                                    type: "text",
                                    value: "l2 - 0",
                                },
                            ],
                        },
                    ],
                },
                {
                    type: "listItem",
                    children: [
                        {
                            type: "paragraph",
                            children: [
                                {
                                    type: "text",
                                    value: "l2 - 1",
                                },
                            ],
                        },
                        {
                            type: "list",
                            children: [
                                {
                                    type: "listItem",
                                    children: [
                                        {
                                            type: "paragraph",
                                            children: [
                                                {
                                                    type: "text",
                                                    value: "l2 child l1",
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: "listItem",
                                    children: [
                                        {
                                            type: "paragraph",
                                            children: [
                                                {
                                                    type: "text",
                                                    value: "l2 child l2",
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    type: "listItem",
                    spread: false,
                    checked: null,
                    children: [
                        {
                            type: "paragraph",
                            children: [
                                {
                                    type: "text",
                                    value: "l2 - 2",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
