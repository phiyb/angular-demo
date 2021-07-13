// import {Department} from '../entity/department';
//
// export interface TreeNode {
//   [key: string]: any; // type for unknown keys.
//   children?: TreeNode[]; // type for a known property.
// }
//
// // function dig(name: string, parentId: number = 0): TreeNode[] {
// //   // const listdeparment: Department[] = [];
// //   // for (let i = 0; i < listdeparment.length; i++) {
// //   //   const a = name;
// //   //   const tree: Department = {
// //   //     name;
// //   //   }
// //   // }
// //
// //
// //
// //
// //   const list: TreeNode[] = [];
// //   for (let i = 0; i < 10; i += 1) {
// //     const name1 = `${name}-${i}`;
// //     const treeNode: TreeNode = {
// //       name
// //     };
// //
// //     // if (level > 0) {
// //     //   treeNode.children = dig(name, level - 1);
// //     //   // treeNode.departmentId = treeNode.parentId;
// //     // }
// //
// //     list.push(treeNode);
// //   }
// //   return list;
// // }
//
//
// function listToTree({data, options}: { data: any, options: any }): any {
//   options = options || {};
//   const ID_KEY = options.idKey || 'id';
//   const PARENT_KEY = options.parentKey || 'parent';
//   const CHILDREN_KEY = options.childrenKey || 'children';
//
//   // tslint:disable-next-line:one-variable-per-declaration
//   const tree = [],
//     childrenOf = {};
//   // tslint:disable-next-line:one-variable-per-declaration
//   let item, id, parentId;
//
//   for (let i = 0, length = data.length; i < length; i++) {
//     item = data[i];
//     id = item[ID_KEY];
//     parentId = item[PARENT_KEY] || 0;
//     // every item may have children
//     // @ts-ignore
//     childrenOf[id] = childrenOf[id] || [];
//     // init its children
//     // @ts-ignore
//     item[CHILDREN_KEY] = childrenOf[id];
//     if (parentId !== 0) {
//       // init its parent's children object
//       // @ts-ignore
//       childrenOf[parentId] = childrenOf[parentId] || [];
//       // push it into its parent's children object
//       // @ts-ignore
//       childrenOf[parentId].push(item);
//     } else {
//       tree.push(item);
//     }
//   }
//   return tree;
// }
//
//
// export function totree({branches, node}: { branches: any, node: any }): Department[] {
//   // if we don't have the parent yet
//   if (!branches[node.parentId]) {
//     // create a dummy placeholder for now
//     branches[node.parentId] = {};
//   }
//   // store our node in its parent
//   branches[node.parentId][node.departmentId] = node;
//   // store our node in the full list
//   // copy all added branches on possible placeholder
//   branches[node.departmentId] = Object.assign(node, branches[node.departmentId]);
//
//   return branches;
// }
//
// // var tree = arry.reduce(totree, {})['1']; // get only the root node ('1')
//
//
//
//
