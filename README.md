# markdown-ast-to-tree

Transform markdown ast to a tree structure.

> The structure of the markdown ast can be seen in https://astexplorer.net/

## Usage

```javascript
const { transform } = require("../src/");
const tree = transform(ast);

// this tree structure is sth like:
const result = {
    type: "root",
    children: [
        {
            type: "list",
            children: [
                {
                    type: "listItem",
                    children: [
                        {
                            type: "list",
                            children: [
                                {
                                    type: "listItem",
                                    children: [],
                                    node: {
                                        type: "text",
                                        value: "l1 child l1",
                                    },
                                },
                                {
                                    type: "listItem",
                                    children: [],
                                    node: {
                                        type: "text",
                                        value: "l1 child l2",
                                    },
                                },
                            ],
                        },
                    ],
                    node: {
                        type: "text",
                        value: "l1 - 1",
                    },
                },
                {
                    type: "listItem",
                    spread: false,
                    checked: null,
                    children: [],
                    node: {
                        type: "text",
                        value: "l1 - 2",
                    },
                },
            ],
        },
        {
            type: "heading",
            depth: 1,
            children: [
                {
                    type: "list",
                    children: [
                        {
                            type: "listItem",
                            spread: false,
                            checked: null,
                            children: [],
                            node: {
                                type: "text",
                                value: "l2 - 0",
                            },
                        },
                        {
                            type: "listItem",
                            children: [
                                {
                                    type: "list",
                                    children: [
                                        {
                                            type: "listItem",
                                            children: [],
                                            node: {
                                                type: "text",
                                                value: "l2 child l1",
                                            },
                                        },
                                        {
                                            type: "listItem",
                                            children: [],
                                            node: {
                                                type: "text",
                                                value: "l2 child l2",
                                            },
                                        },
                                    ],
                                },
                            ],
                            node: {
                                type: "text",
                                value: "l2 - 1",
                            },
                        },
                        {
                            type: "listItem",
                            spread: false,
                            checked: null,
                            children: [],
                            node: {
                                type: "text",
                                value: "l2 - 2",
                            },
                        },
                    ],
                },
            ],
            node: {
                type: "text",
                value: "h1",
            },
        },
    ],
    depth: 0,
};
```
