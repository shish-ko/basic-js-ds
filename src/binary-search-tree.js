const { NotImplementedError, checkForNotThrowingErrors } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.head=null;
  }
  root() {
    return this.head
  }

  add(data) {
    this.head=addNode(this.head, data)

    function addNode(node, data){
      if(node===null){
        node=new Node(data)
      }else if(node.data===data){
        return
      }else if(node.data>data){
        node.left=addNode(node.left, data);
      }else if(node.data<data){
        node.right=addNode(node.right, data);        
      }
      return node;
    }
  }

  has(data) {
    return isExsist(this.head, data);
    function isExsist(node, data){
      if(!node){
        return false;
      }
      if(node.data===data){
        return true;
      }
      if(node.data>data){
        return isExsist(node.left, data);
      }
      if(node.data<data){
        return isExsist(node.right, data);
      }
    }
  }

  find(data) {
    return findNode(this.head, data)
    function findNode(node, data){
      if(!node){
        return null;
      }
      if(node.data===data){
        return node;
      }
      if(node.data>data){
        return findNode(node.left, data);
      }
      if(node.data<data){
        return findNode(node.right, data);
      }
    }
  }

  remove(data) {
    this.head=removeItem(this.head, data)

    function removeItem(node, data){
      console.log(node.data)
      if(!node){
        return;
      }
      if(node.data<data){
        node.right=removeItem(node.right, data);
        return node;
      }else if(node.data>data){
        node.left=removeItem(node.left, data);
        return node;
      }else{
        if(!node.left && !node.right){
          return null
        }else if(!node.left){
          return node.right;
        }else if(!node.right){
          return node.left
        }else{
          let current=node.right;
          while(current.left){
            current=current.left
          }
          node.data=current.data;
          node.right=removeItem(node.right, node.data)
          return node
        }
      }
      return node
    }
  }

  min() {
    return minimal(this.head)

    function minimal(node){
      if(!node){
        return null
      }
      if(!node.left){
        return node.data
      } else{
        return minimal(node.left)
      }      
    }
  }

  max() {
    return maximal(this.head)

    function maximal(node){
      if(!node){
        return null
      }
      if(!node.right){
        return node.data
      } else{
        return maximal(node.right)
      }      
    }
  }
}
// const test=new BinarySearchTree;
// test.add(6)
// test.add(5)
// test.add(10)
// test.add(9)
// test.add(14)
// test.add(13)
// test.add(15)
// test.remove(14)
// console.log(test.find(15))
module.exports = {
  BinarySearchTree
};