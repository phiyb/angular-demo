import {NzTreeNodeOptions} from 'ng-zorro-antd/tree';
import {Department} from '../entity/department';

export const nodes: NzTreeNodeOptions[] = [
  {
    title: 'parent 1',
    key: '100',
    children: [
      {
        title: 'parent 1-0',
        key: '1001',
        disabled: true,
        children: [
          { title: 'leaf 1-0-0', key: '10010', disableCheckbox: true, isLeaf: true },
          { title: 'leaf 1-0-1', key: '10011', isLeaf: true }
        ]
      },
      {
        title: 'parent 1-1',
        key: '1002',
        children: [
          { title: 'leaf 1-1-0', key: '10020', isLeaf: true },
          { title: 'leaf 1-1-1', key: '10021', isLeaf: true }
        ]
      }
    ]
  }
];


export const DEPARTMENTS: Department[] = [
  { departmentId: 11, name: 'Telsoft', parentId: 0, status: '1'},
  { departmentId: 12, name: 'Hai phong', parentId: 11, status: '1'},
  { departmentId: 13, name: 'Thang long', parentId: 11, status: '1'},
  { departmentId: 14, name: 'Song hong', parentId: 11, status: '1'},
  { departmentId: 15, name: 'Truong Son', parentId: 11, status: '1'},
  { departmentId: 16, name: 'Dai la', parentId: 11, status: '1'},
  { departmentId: 17, name: 'Child-HP1', parentId: 12, status: '1'},
  { departmentId: 18, name: 'Child-HP2', parentId: 17, status: '1'},
  { departmentId: 19, name: 'Child-HP3', parentId: 18, status: '1'},
  { departmentId: 20, name: 'Child-TL1a', parentId: 13, status: '1'},
  { departmentId: 21, name: 'Child-TL1b', parentId: 13, status: '1'},
  { departmentId: 22, name: 'Child-TL3', parentId: 20, status: '1'},
  { departmentId: 23, name: 'Child-SH1', parentId: 14, status: '1'},
  { departmentId: 24, name: 'Child-SH2', parentId: 23, status: '1'},
];
