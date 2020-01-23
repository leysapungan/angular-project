
// export class Task {
//     id : number;
//     level : number;
//     name : string;
//     status : boolean;
//     subTask : Task[];
//     desc : string;

// }



export class Task {
    id: number;
    level: number;
    name: string;
    status: boolean;
    hidden: boolean;
    importance: number;
    attributes: Attr[];
    subTask: Task[];
}

export class Attr {
    startDate: string;
    endDate: string;
    assignee: string[];
    minDate: string;
    maxDate: string;
}


// var CheckList: Task[] = [
//     {
//         id:1,
//         level:0,
//         name:'1',
//         status:false,
//         hidden:false,
//         attributes:[
//         {
//             startDate:'2019/11/01',
//             endDate:'2019/11/05',
//             assignee:['AA','BB']
//         }
//         ],
//         subTask:[
//         {
//             id:1,
//             level:1,
//             name:'1-1',
//             status:false,
//             hidden:false,
//             attributes:[
//             {
//                 startDate:'2019/11/01',
//                 endDate:'2019/11/05',
//                 assignee:['AA','BB']
//             }
//             ],
//             subTask:[
//             {
//                 id:1,
//                 level:2,
//                 name:'1-1-1',
//                 status:true,
//                 hidden:false,
//                 attributes:[
//                 {
//                     startDate:'2019/11/01',
//                     endDate:'2019/11/05',
//                     assignee:['AA','BB']
//                 }
//                 ],
//                 subTask:null
//             },
//             {
//                 id:2,
//                 level:2,
//                 name:'1-1-2',
//                 status:false,
//                 hidden:false,
//                 attributes:[
//                 {
//                     startDate:'2019/11/01',
//                     endDate:'2019/11/05',
//                     assignee:['AA','BB']
//                 }
//                 ],
//                 subTask:null
//             },
//             {
//                 id:3,
//                 level:2,
//                 name:'1-1-3',
//                 status:false,
//                 hidden:false,
//                 attributes:[
//                 {
//                     startDate:'2019/11/01',
//                     endDate:'2019/11/05',
//                     assignee:['AA','BB']
//                 }
//                 ],
//                 subTask:[
//                 {
//                     id:1,
//                     level:3,
//                     name:'1-1-3-1',
//                     status:false,
//                     hidden:false,
//                     attributes:[
//                     {
//                         startDate:'2019/11/01',
//                         endDate:'2019/11/05',
//                         assignee:['AA','BB']
//                     }
//                     ],
//                     subTask:null
//                 }
//               ]
//             }
//           ]
//         },
//         {
//             id:2,
//             level:1,
//             name:'1-2',
//             status:false,
//             hidden:false,
//             attributes:[
//             {
//                 startDate:'2019/11/01',
//                 endDate:'2019/11/05',
//                 assignee:['AA','BB']
//             }
//             ],
//             subTask:null
//         },
//         {
//             id:3,
//             level:1,
//             name:'1-3',
//             status:false,
//             hidden:false,
//             attributes:[
//             {
//                 startDate:'2019/11/01',
//                 endDate:'2019/11/05',
//                 assignee:['AA','BB']
//             }
//             ],
//             subTask:null
//         }
//       ]
//     },
//         {
//         id:2,
//         level:0,
//         name:'2',
//         status:false,
//         hidden:false,
//         attributes:[
//         {
//             startDate:'2019/11/01',
//             endDate:'2019/11/05',
//             assignee:['AA','BB']
//         }
//         ],
//         subTask:[
//         {
//             id:1,
//             level:1,
//             name:'2-1',
//             status:false,
//             hidden:false,
//             attributes:[
//             {
//                 startDate:'2019/11/01',
//                 endDate:'2019/11/05',
//                 assignee:['AA','BB']
//             }
//             ],
//             subTask:null
//         }
//       ]
//     }
//   ];