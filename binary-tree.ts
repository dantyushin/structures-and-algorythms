class BinaryTree {
  constructor(public root: TreeNode | null = null) {}

  add(value: number): void {
    if (!this.root) {
      this.root = new TreeNode(value);
    } else {
      let node = this.root;
      let newnode = new TreeNode(value);
      while (node) {
        if (value > node.value) {
          if (!node.right) break;
          node = node.right;
        } else {
          if (!node.left) break;
          node = node.left;
        }
      }
      if (value > node.value) {
        node.right = newnode;
      } else {
        node.left = newnode;
      }
    }
  }

  print(node: TreeNode | null = this.root): void {
    if (!node) return;
    console.log(node.value);
    this.print(node.left);
    this.print(node.right);
  }
}

class TreeNode {
  constructor(
    public value: number,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null
  ) {}
}

const tree = new BinaryTree();
tree.add(5);
tree.add(3);
tree.add(7);
tree.add(2);
tree.add(4);
tree.add(6);
tree.add(8);
tree.print();
