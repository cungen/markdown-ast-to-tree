module.exports = {
    type: "root",
    children: [
        {
            type: "heading",
            depth: 2,
            children: [
                {
                    type: "text",
                    value: "h2",
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
            type: "heading",
            depth: 2,
            children: [
                {
                    type: "text",
                    value: "h1 child 1",
                },
            ],
        },
        {
            type: "heading",
            depth: 3,
            children: [
                {
                    type: "text",
                    value: "h1 grandchild 1",
                },
            ],
        },
        {
            type: "heading",
            depth: 3,
            children: [
                {
                    type: "text",
                    value: "h1 grandchild 2",
                },
            ],
        },
        {
            type: "heading",
            depth: 2,
            children: [
                {
                    type: "text",
                    value: "h1 child 2",
                },
            ],
        },
    ],
};
