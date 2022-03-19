const { expect } = require("chai");
const { describe, it } = require("mocha");
const { transform } = require("../src/");

function isCorrectText(node) {
    expect(node).not.to.be.NaN;
    expect(node.type).to.be.equals("text");
    expect(node.value).to.be.a("string");
}

function isCorrectRoot({ type, depth }) {
    expect(type).to.equals("root");
    expect(depth).to.equals(0);
}

function isCorrectHeading(heading, prev, parent) {
    const { type, depth, node, children = [] } = heading;
    expect(type).to.be.equals("heading");
    if (prev) {
        expect(prev.depth).to.greaterThanOrEqual(depth);
    }
    if (parent) {
        expect(parent.depth).to.lessThan(depth);
    }
    isCorrectText(node);

    let last = null;
    children.forEach((child) => {
        if (child.type === "heading") {
            isCorrectHeading(child, last, heading);
            last = child;
        }
    });
}

function isCorrectList(node) {
    const { type, children = [] } = node;
    expect(type).to.be.equals("list");
    children.forEach((child) => {
        expect(child.type).to.be.equals("listItem");
        isCorrectText(child.node);
        if (
            child.children.length === 1 &&
            child.children[0].type === "paragraph"
        ) {
            expect(grantChild.children).not.to.empty;
        }

        child.children.forEach((grantChild) => {
            expect(grantChild.type).not.to.equal("paragraph");
            if (grantChild.type === "list") {
                isCorrectList(grantChild);
            }
        });
    });
}

function isCorrectBlockquote(node) {
    const { type, children = [] } = node;
    expect(type).to.be.equals("blockquote");
    expect(children.length).to.equal(1);
    expect(children[0].type).to.be.equals("paragraph");
    isCorrectText(children[0].children[0]);
}

describe("# Test Blockquote", function () {
    let root = transform(require("./mock-data/blockquote"));
    it("should has correct root node", () => {
        isCorrectRoot(root);
    });

    const { children = [] } = root;
    it("should has correct heading node", () => {
        isCorrectHeading(children[0].children[0]);
    });
    it("should has correct blockquote node", () => {
        isCorrectBlockquote(children[0].children[0].children[0]);
    });
});

describe("# Test List", function () {
    let root = transform(require("./mock-data/heading-with-list"));

    it("should has correct root node", () => {
        isCorrectRoot(root);
    });

    const { children = [] } = root;
    it("should has correct list node", () => {
        isCorrectList(children[0]);
    });
    it("should has correct heading node", () => {
        isCorrectHeading(children[1]);
    });
    it("should heading has correct list child", () => {
        isCorrectList(children[1].children[0]);
    });
});

describe("# Test Heading", function () {
    let root = transform(require("./mock-data/heading"));

    it("should has correct root node", () => {
        isCorrectRoot(root);
    });

    it("should root has correct heading children", function () {
        let last = null;
        root.children.forEach((child) => {
            isCorrectHeading(child, last);
            last = child;
        });
    });
});
