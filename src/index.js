function last(arr) {
    return arr[arr.length - 1];
}

function transform(node = {}, parents = []) {
    const { type, depth } = node;
    const children = [...(node.children || [])];
    const current = {
        ...node,
        type,
        children: [],
    };

    let lastParent = last(parents);

    switch (type) {
        case "root":
            current.depth = 0;
            parents.push(current);
            break;
        case "heading":
            current.node = children.shift();
            while (
                lastParent &&
                (!["heading", "root"].includes(lastParent.type) ||
                    lastParent.depth >= depth)
            ) {
                parents.pop();
                lastParent = last(parents);
            }
            if (lastParent) {
                lastParent.children.push(current);
            }
            parents.push(current);
            break;
        case "paragraph":
            if (["heading", "listItem"].includes(lastParent.type)) {
                lastParent.node = children.shift();
            } else {
                lastParent.children.push(current);
            }
            parents.push(current);
            break;
        case "list":
        case "listItem":
            if (lastParent) {
                lastParent.children.push(current);
            }
            parents.push(current);
            break;
        case "code":
        case "text":
        case "image":
        case "blockquote":
        default:
            if (lastParent) {
                lastParent.children.push(current);
            }
            parents.push(current);
            break;
    }
    children.forEach((child) => transform(child, parents, current));
    if (!["root", "heading"].includes(type)) {
        parents.pop();
    }
    return current;
}

exports.transform = transform;
