let gridarr_skeleton = [
    [4, 4, 3, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [4, 4, 3, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3],
    [3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3],
    [3, 3, 4, 5, 4, 4, 4, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 3, 2, 2, 2, 2, 3, 4, 4, 4, 4, 3, 2, 2, 2, 2, 3, 4, 4],
    [5, 4, 3, 2, 2, 2, 2, 3, 4, 4, 4, 4, 3, 2, 2, 2, 2, 4, 4, 4],
    [4, 4, 3, 3, 3, 3, 3, 3, 4, 4, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3],
    [4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 4, 4, 4, 3, 3, 3, 3, 3],
    [4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 4, 5, 4, 4, 4, 3, 3, 3],
    [3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
    [3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
    [3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
];
// Modified version of image 1
let gridarr_fox= [
    [2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
    [2, 2, 8, 8, 8, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 8, 8, 8, 2, 2],
    [2, 2, 8, 8, 8, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 8, 8, 2, 2],
    [2, 2, 8, 8, 8, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 8, 8, 2, 2],
    [8, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7],
    [7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7],
    [7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7],
    [7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7],
    [7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7],
    [7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7],
    [7, 7, 7, 8, 8, 7, 7, 7, 6, 6, 6, 6, 7, 7, 7, 8, 8, 7, 7, 7],
    [1, 1, 2, 2, 2, 8, 7, 7, 6, 6, 6, 6, 7, 7, 7, 2, 2, 2, 1, 1],
    [1, 1, 2, 2, 3, 8, 7, 7, 6, 6, 6, 6, 7, 7, 7, 2, 3, 2, 1, 1],
    [7, 7, 7, 7, 7, 2, 2, 8, 1, 1, 1, 1, 7, 2, 2, 8, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 2, 3, 8, 1, 1, 1, 1, 7, 2, 3, 8, 7, 7, 7, 7],
    [8, 7, 8, 8, 8, 2, 3, 2, 8, 8, 7, 8, 8, 2, 3, 8, 8, 8, 8, 7],
    [2, 8, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 8],
    [2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2]
];

let gridarr2 = [
    [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
    [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
    [6,6,6,6,6,6,6,6,4,4,4,4,6,6,6,6,6,6,6,6],
    [6,6,6,6,6,6,6,4,4,4,4,4,4,6,6,6,6,6,6,6],
    [6,6,6,6,6,6,6,4,4,4,4,4,4,6,6,6,6,6,6,6],
    [6,6,6,4,4,4,6,4,4,4,4,4,4,6,4,4,4,6,6,6],
    [6,6,4,4,4,4,4,4,7,7,7,7,4,4,4,4,4,4,6,6],
    [6,6,4,4,4,4,4,7,9,9,9,9,7,4,4,4,4,4,6,6],
    [6,6,5,4,4,4,4,7,9,9,9,9,7,4,4,4,4,5,6,6],
    [6,6,6,5,5,5,5,5,7,7,7,7,5,5,5,5,5,6,6,6],
    [6,6,6,6,6,6,4,4,4,5,5,4,4,4,6,6,6,6,6,6],
    [6,6,6,6,6,4,4,4,4,5,5,4,4,4,4,6,6,6,6,6],
    [6,6,6,6,6,4,4,4,5,2,2,5,4,4,4,6,6,6,6,6],
    [6,3,3,6,6,5,5,5,6,2,6,6,5,5,5,6,6,6,6,6],
    [6,6,8,3,6,6,6,6,6,2,6,6,6,6,6,6,6,6,6,6],
    [6,6,6,8,3,3,6,6,2,6,6,6,6,6,6,6,6,6,6,6],
    [6,6,6,6,8,3,3,3,2,6,6,6,6,6,6,6,6,6,6,6],
    [6,6,6,6,6,8,8,8,2,6,6,6,6,6,6,6,6,6,6,6],
    [6,6,6,6,6,6,6,6,2,6,6,6,6,6,6,6,6,6,6,6],
    [6,6,6,6,6,6,6,6,6,2,6,6,6,6,6,6,6,6,6,6]
];
// Alisha Minecraft DUCK Characters
let gridarr_alisha = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
    [0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0], //4
    [0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0], //5
    [0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0], //6
    [0, 0, 3, 3, 3, 4, 4, 4, 0, 0, 0, 0, 4, 4, 4, 3, 3, 3, 0, 0], //7
    [0, 0, 3, 3, 3, 4, 4, 4, 0, 0, 0, 0, 4, 4, 4, 3, 3, 3, 0, 0], //8
    [0, 0, 3, 3, 3, 4, 4, 4, 0, 0, 0, 0, 4, 4, 4, 3, 3, 3, 0, 0], //9
    [0, 0, 3, 3, 3, 4, 4, 4, 0, 0, 0, 0, 4, 4, 4, 3, 3, 3, 0, 0], //10
    [0, 0, 3, 3, 3, 4, 4, 4, 0, 0, 0, 0, 4, 4, 4, 3, 3, 3, 0, 0], //11
    [0, 0, 3, 3, 3, 4, 4, 4, 0, 0, 0, 0, 4, 4, 4, 3, 3, 3, 0, 0], //12
    [0, 0, 3, 3, 3, 4, 4, 4, 0, 0, 0, 0, 4, 4, 4, 3, 3, 3, 0, 0], //13
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],//14
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2,0, 0, 0, 0, 0, 0, 0, 0],//15
    [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0],//16
    [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0],//17
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],//18
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//19
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] //20
    ]; 
// Kyra J's array numerical image
let gridarr_kyra = [
    [2, 2, 2, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 3, 3], 
    [2, 2, 2, 0, 0, 0, 4, 4, 0, 0, 0, 0, 2, 2, 0, 5, 5, 0, 3, 3], 
    [2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 3, 3, 1, 1, 1, 1, 1, 0, 0, 0], 
    [4, 4, 0, 1, 6, 6, 6, 1, 0, 0, 3, 3, 1, 6, 6, 6, 1, 0, 0, 0], 
    [4, 4, 0, 1, 6, 7, 6, 1, 0, 0, 0, 0, 1, 6, 7, 6, 1, 0, 2, 2], 
    [0, 0, 0, 1, 6, 6, 6, 1, 2, 2, 0, 0, 1, 6, 6, 6, 1, 0, 2, 2],
    [0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 3, 3, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 2, 0, 0, 5, 0, 3, 3, 1, 1, 1, 1, 0, 0, 2, 2, 0, 4, 4, 0],
    [2, 2, 0, 0, 5, 0, 0, 0, 1, 1, 1, 1, 0, 0, 2, 2, 0, 4, 4, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3],
    [0, 0, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3],
    [0, 0, 3, 3, 1, 1, 1, 1, 0, 0, 2, 2, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 2, 2, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 2, 2, 2],
    [5, 5, 0, 2, 2, 0, 0, 0, 3, 3, 0, 0, 5, 5, 0, 0, 0, 2, 2, 2],
    [5, 5, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2],
];
//daria o's array numerical image
let gridarr_daria = [
    [0,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1],
    [0,0,1,1,1, 1,1,1,2,0, 2,1,1,1,1, 1,1,1,1,1],
    [1,1,1,1,1, 1,1,1,0,0, 0,1,1,1,1, 1,1,0,0,0],
    [1,1,1,1,1, 1,1,1,2,0, 2,1,1,1,1, 1,0,0,0,0],
    [1,1,1,1,3, 3,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1],
    [1,1,1,3,3, 3,3,3,1,1, 1,1,1,1,1, 1,1,1,1,1],
    [1,1,3,3,3, 3,3,1,1,1, 1,1,1,1,3, 3,1,1,1,1],
    [1,1,1,3,3, 3,3,3,1,1, 1,1,3,3,3, 3,3,1,1,1],
    [4,4,4,3,5, 5,1,1,1,1, 1,3,3,6,6, 3,3,4,4,4],
    [4,4,4,4,6, 4,4,1,1,1, 1,3,3,3,3, 3,4,4,4,4],
    [4,4,4,6,5, 4,4,4,1,1, 4,4,3,5,5, 4,4,4,4,4],
    [4,4,4,4,5, 5,4,4,4,4, 4,4,4,4,5, 4,4,4,4,4],
    [7,7,7,7,7, 5,6,4,4,4, 4,4,4,4,5, 4,4,4,4,4],
    [7,7,7,7,6, 5,7,7,7,7, 7,7,4,4,5, 4,4,4,4,4],
    [7,7,7,7,7, 5,7,7,7,7, 7,7,7,7,5, 7,7,7,7,7],
    [7,7,7,7,7, 7,7,7,7,7, 7,5,5,7,5, 7,5,5,7,7],
    [7,7,5,7,7, 7,7,7,7,7, 7,7,5,7,5, 5,7,7,7,7],
    [7,5,7,7,7, 7,7,5,7,5, 7,7,7,5,5, 5,7,7,7,7],
    [7,7,7,7,7, 7,7,7,5,7, 7,7,7,7,7, 7,7,7,7,7],
    [7,7,7,7,7, 7,7,7,7,7, 7,7,7,7,7, 7,7,7,7,7]
  ];
let gridarr4 = [
    [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
    [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
    [6,6,6,6,6,5,5,5,6,6,6,6,5,5,5,5,6,6,6,6],
    [6,6,6,6,5,4,4,4,5,6,6,6,5,4,4,4,5,6,6,6],
    [6,6,6,6,5,4,4,4,4,5,6,5,4,4,4,4,5,6,6,6],
    [6,6,6,5,4,4,4,4,4,5,5,4,4,4,4,4,4,5,6,6],
    [6,6,5,4,4,4,4,4,7,7,7,7,4,4,4,4,4,4,5,6],
    [6,6,5,4,4,4,4,7,9,9,9,9,7,4,4,4,4,4,5,6],
    [6,6,5,4,4,4,4,7,9,9,9,9,7,4,4,4,4,5,6,6],
    [6,6,6,5,5,5,5,5,7,7,7,7,5,5,5,5,5,6,6,6],
    [6,6,6,8,5,4,4,4,4,5,5,4,4,4,4,5,8,6,6,6],
    [6,6,8,3,5,4,4,4,4,5,5,4,4,4,4,5,3,8,6,6],
    [6,8,3,3,5,4,4,4,4,5,5,4,4,4,4,5,3,3,8,6],
    [6,8,3,3,3,5,5,5,5,5,5,5,5,5,5,3,3,3,8,6],
    [6,8,3,3,3,3,3,8,6,6,6,6,6,8,3,3,3,3,8,6],
    [6,8,3,3,3,3,8,6,6,6,6,6,6,6,8,3,3,3,8,6],
    [6,8,8,8,8,8,6,6,6,6,6,6,6,6,6,8,8,8,8,6],
    [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
    [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
    [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]
];
    // 5 x 5
let textarr = [
    ["bug", "bug", "bug", "bug", "bug"],
    ["bug", "flower", "flower", "bug", "bug"],
    ["bug", "flower", "flower", "honey", "bug"],
    ["bug", "flower", "flower", "honey", "bug"],
    ["bug", "bug", "bug", "bug", "deadly"]
];

let textarr2 = [
    ["", "", "leaves", "", ""],
    ["", "leaves", "leaves", "tree", ""],
    ["leaves", "leaves", "tree", "tree", "tree"],
    ["leaves", "leaves", "tree", "tree", "leaves"],
    ["", "tree", "tree", "tree", ""],
    ["", "", "trunk", "", ""],
    ["", "", "trunk", "", ""],
    ["", "", "trunk", "", ""],
    ["", "", "", "", ""]
];



let textarr3 = [
    ["ocean", "beach", "shell", "ocean", "island"],
    ["ocean", "ocean", "ocean", "beach", "beach"],
    ["ocean", "beach", "ocean", "ocean", "shell"],
    ["ocean", "beach", "beach", "shell", "ocean"],
    ["ocean", "island", "ocean", "beach", "ocean"]
];

let textarr4 = [
    ["bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug"],
    ["bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug"],
    ["bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug"],
    ["bug", "bug", "bug", "bug", "bug", "bug", "honey", "honey", "bug", "bug", "bug", "bug", "honey", "honey", "bug", "bug", "bug", "bug", "bug", "bug"],
    ["bug", "bug", "bug", "bug", "bug", "honey", "bug", "bug", "honey", "bug", "bug", "honey", "bug", "bug", "honey", "bug", "bug", "bug", "bug", "bug"],
    ["bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "honey", "honey", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug"],
    ["bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bee", "bee", "bee", "bee", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug"],
    ["bug", "bug", "bug", "bug", "bug", "bug", "bug", "bee", "bee", "bee", "bee", "bee", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug"],
    ["bug", "bug", "bug", "bug", "bug", "bug", "bee", "bee", "bee", "bee", "bee", "bee", "bee", "bug", "bug", "bug", "bug", "bug", "bug", "bug"],
    ["bug", "bug", "flower", "flower", "flower", "bug", "bee", "honey", "honey", "honey", "honey", "honey", "honey", "bee", "bug", "flower", "flower", "flower", "bug", "bug"],
    ["bug", "flower", "flower", "flower", "flower", "flower", "bee", "honey", "honey", "honey", "honey", "honey", "honey", "bee", "flower", "flower", "flower", "flower", "flower", "bug"],
    ["bug", "flower", "flower", "flower", "flower", "flower", "bee", "bee", "bee", "bee", "bee", "bee", "bee", "bee", "flower", "flower", "flower", "flower", "flower", "bug"],
    ["bug", "flower", "flower", "flower", "flower", "flower", "bee", "bee", "bee", "bee", "bee", "bee", "bee", "bee", "flower", "flower", "flower", "flower", "flower", "bug"],
    ["bug", "bug", "flower", "flower", "flower", "bug", "bee", "honey", "honey", "honey", "honey", "honey", "honey", "bee", "bee", "flower", "flower", "flower", "bug", "bug"],
    ["bug", "bug", "bug", "bug", "bug", "bug", "bee", "honey", "honey", "honey", "honey", "honey", "honey", "bee", "bug", "bug", "bug", "bug", "bug", "bug"],
    ["bug", "bug", "bug", "bug", "bug", "bug", "bug", "bee", "bee", "bee", "bee", "bee", "bee", "bug", "bug", "bug", "bug", "bug", "bug", "bug"],
    ["bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bee", "bee", "bee", "bee", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug"],
    ["bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug"],
    ["bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug"],
    ["bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug", "bug"],
];



let font1;
let images =[];

let currentPage = 0;

function preload()  {
       font1 = loadFont('assets/oswald.ttf');
       font2 = loadFont('assets/Omletta.otf');

       //misc images
       img1 = loadImage('assets/bg.jpg');
       img2 = loadImage('assets/border1.png');

       //For arrays
       images[0] = loadImage('assets/white1.jpg');
       images[1] = loadImage('assets/green1.jpg');
       images[2] = loadImage('assets/green2.jpg');
       images[3] = loadImage('assets/pink2.jpg');
       images[4] = loadImage('assets/pink1.jpg');
       images[5] = loadImage('assets/blue2.jpg');
       images[6] = loadImage('assets/yellow1.jpg');
       images[7] = loadImage('assets/green3.jpg');
       images[8] = loadImage('assets/orange4.jpg');
       images[9] = loadImage('assets/transparent.png');
}

function setup() {
     createCanvas(800, 700);
     background(0, 60, 150);
     fill(100);
     textAlign(LEFT);
     textFont(font1);
    
      
}

function draw() {
    background(0,15);

    
    if (currentPage == 1) {
      //2darr, x,y,rot,scale, alpha
      
      drawFox(gridarr_fox, 550, 50, 0, .5, 40); //bg
      mapToColorText(textarr2, -40, 500, -15, 1.5, 175); //1st word
      drawSkeleton(gridarr_skeleton, 100, 60, 0, 0.5, 255); //1st image

      push();
      translate(100,30);
      fill(200);
      textSize(20);
      let t = "This is two copies of one of my numerical gridArray and text gridArray"
      text(t,0,0,550);  // the 4th argument is the textWidth per line.
      pop();
 

    } else if (currentPage == 2) {

     mapToColorShapes(gridarr4, -30, 0, 0, 9, 8); //bg
     drawSkeleton(gridarr_skeleton, 520, 260, 45, 1, 255); //1st image
     drawFox(gridarr2, 200, 180, -25, 0.5, 120); //2nd image
     mapToColorText(textarr, 500, 90, -15, 0.8, 175); //1st word
     mapToColorText(textarr3, 10, 350, 4, 1.55, 255); //2nd word

     push();
     translate(40,50);
     fill(200);
     textSize(20);
     let t = "2 Text Arrays & 2 Numerical Arrays";
     t += "\n";
     t += "They look different"
     text(t,0,0,300);
     pop();


    } else if (currentPage == 3) {
        mapToTintedBitMaps(gridarr2,images, -400, 0, -20, 10.85,7); //bg
        mapToCreeperPalette(gridarr_kyra,100, 50, 0.5, 45, 'c', 150); //kyra
        //mapToBitMaps(gridarr2,images, 50, 200, -3, 1.55);
        mapToAxoPalette(gridarr_alisha, 450, 120, 0.5, 1, 's', 190);// alisha
        mapToFlowerPalette(gridarr_daria, 190, 550, 1, 1, 'c', 190);//daria
        push();
        translate(40,50);
        fill(255);
        textSize(25);
        let t = "Creepers";
        t += "\n";   // this is a command you can put in text to create a line break.
        t += "Aww man";
        t += "\n";   // this is a command you can put in text to create a line break.
        t += "This is for the partners of my group =p";
        text(t,150,0,400);
       
        let a = "Kyra";
        text(a,0,300,100);
       
        let n = "Alisha";
        text(n,500,330,100);

        let l= "Daria";
        text(l,200,600,100);
        pop();

    } else if (currentPage == 4) {

        mapToTintedBitMaps(textarr3,images, 50, 350, -40, 50,7); //bg
        mapToTintedBitMaps(gridarr_skeleton,images, -10, 350, 0, 50,7); //bg 2
        
        drawGrid(gridarr_daria,images,10,50,-8,1,19);//1st image
        mapToColorShapes(gridarr_kyra, 700, 150, 100,1,180);//2nd image
        
        //2 Text Arrays
        mapToColorText(textarr2, -10, 500, -20, 0.9, 150);//1nd text
        mapToColorText(textarr4, 300, 500, -20, 0.5, 255);//2nd text
  
        push();
        translate(200,70);
        fill(0,255,193);
        textSize(20);
        let t = "Text from Array"
        t += "\n";
        t += "It's the flower and the bee B-) ";
        text(t,0,0,550);  // the 4th argument is the textWidth per line.
        pop();

    } else if (currentPage == 5) {
        mapToTintedBitMaps(gridarr_kyra,images, 50, 350, -40, 50,7); //bg
        mapToTintedBitMaps(gridarr4,images, -10, 350, 0, 50,7); //bg 2
        mapToColorShapes(gridarr_fox, -30, 0, -62, 5, 5); //bg3
        mapToColorShapes(gridarr_kyra, 30, -30, -40, 5, 2); //bg4

        //The 2 JPG Image Array
        drawGrid(gridarr_fox,images,10,80,-8,1,20);//1st image
        drawGrid(gridarr2,images,400,300,0,1,10);//2nd image
        
  
        push();
        translate(-200,300);
        fill(200);
        textSize(25);
        let t = "Welcome to the House of The Flowers"
        t += "\n";
        t += "We only 1 flowers, buy it or don't";
        text(t,0,0,550);  // the 4th argument is the textWidth per line.
        pop();

    } else if (currentPage == 6) {
        mapToColorText(textarr, 250, 100, -15, 1.25, 175); //1st word
        mapToColorText(textarr3, 10, 350, 4, 1.55, 255); //2nd word
  
        push();
        translate(-200,300);

        pop();
    } else {
        background(img1); //bg
        textFont(font2);
        // image(img2,250,50,350,350); //border
        textAlign(CENTER);
        push();
        translate(0,150);
        fill(206, 288, 248);
        textSize(27);
        text ("My groups memebers were Kyra J, \nAlisha, K, and Daria O ",0 ,0, 800 );
        translate(0,120);
        translate(250,120);
        drawSkeleton(gridarr_skeleton,50, 0, 0, 0.5, 255);
        pop();

    }


}


function keyPressed() { 

  
    //console.log(key);
     // or 
    if ( key == '1' ) { 
      console.log("Page 1");
      currentPage = 1;

     } else if ( key == '2' ) { 
        console.log("Page 2");
        currentPage = 2;
        
     } else if ( key == '3' ) { 
        console.log("Page 3");
        currentPage = 3;   

    } else if ( key == '4' ) { 
        console.log("Page 4");
        currentPage = 4;

    } else if ( key == '5' ) { 
        console.log("Page 5");
        currentPage = 5;   

    } else if ( key == '6' ) { 
        console.log("Page 6");
        currentPage = 6;   
     } else {
        currentPage = 0;

     }
  
    }



// the map functions.



          //2darr, x,y,rot,scale, alpha
function mapToMonoPixels(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            fill(arr[i][j] * 128, fade);
            rect(j * 12, i * 12, 10, 10);
        }
    }
   pop();

}

 //x,y,rot,scale, alpha
function mapToColorPixels(arr, lx, ly, rot, sc, fade) {
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            let value = arr[i][j];
            switch (value) {
                case 0:
                    fill(200, 70, 0, fade);
                    break;
                case 1:
                    fill(0, 0, 0, fade);
                    break;
                case 2:
                    fill(90, 30, 90, fade);
                    break;
                case 3:
                    fill(20, 220, 250, fade);
                    break;
                case 4:
                    fill(255, 0, 0, fade);
                    break;
                case 5:
                    fill(0, 255, 0, fade);
                    break;
                case 6:
                    fill(0, 0, 255, fade);
                    break;
                case 7:
                    fill(255, 255, 0, fade);
                    break;
                case 8:
                    fill(255, 0, 255, fade);
                    break;
                case 9:
                    fill(0, 255, 255, fade);
                    break;
                default:
                    fill(255, fade);
            }
            rect(j * 12, i * 12, 10, 10);
        }
    }
    pop();
}


function mapToColorShapes(arr, lx, ly, rot, sc, fade) {
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            let value = arr[i][j];
            switch (value) {
                case 0:
                    fill(200, 70, 0, fade);
                    break;
                case 1:
                    fill(50, 0, 30, fade);
                    break;
                case 2:
                    fill(0, 150, 0, fade);
                    break;
                case 3:
                    fill(120, 0, 240, fade);
                    break;
                //... add more cases for additional colors
                case 4:
                    fill(255, 0, 0, fade);
                    break;
                case 5:
                    fill(0, 255, 0, fade);
                    break;
                case 6:
                    fill(0, 0, 255, fade);
                    break;
                case 7:
                    fill(255, 255, 0, fade);
                    break;
                case 8:
                    fill(255, 0, 255, fade);
                    break;
                case 9:
                    fill(0, 255, 255, fade);
                    break;
                default:
                    fill(255, fade);
            }
            rect(j * 12, i * 12, 10, 10);
        }
    }
    pop();
}


function mapToColorText(arr, lx, ly, rot, sc, fade) {
    textSize(15);
    textAlign(CENTER);
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            let value = arr[i][j];
            if (value == "flower") {
                fill(180, 170, 255, fade);
            } else if (value == "bug") {
                fill(255, 255, 255, fade);
            } else if (value == "honey") {
                fill(255, 255, 30, fade);
            } else if (value == "leaves") {
                fill(0, 100, 0, fade);
            } else if (value == "bee") {
                fill(0, 0, 0, fade);
            } else if (value == "mountain") {
                fill(150, 75, 0, fade);
            } else if (value == "ocean") {
                fill(0, 0, 150, fade);
            } else if (value == "beach") {
                fill(255, 222, 173, fade);
            } else if (value == "shell") {
                fill(255, 245, 238, fade);
            } else if (value == "island") {
                fill(34, 139, 34, fade);
            } else if (value == "trunk"){
                fill(150, 75, 0, fade);
            } else {
                fill(255, fade);
            }
            text(value, j * 40, i * 25, 100);
        }
    }
    pop();
}


//2darray,images in array ,x,y,rot,scale, alpha
function mapToTintedBitMaps(arr, imgarr, lx, ly, rot, sc, fade) {
  push();
  translate(lx, ly);
  rotate(radians(rot));
  scale(sc);
  let nuimg;
  let c;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[0].length; j++) {
      let value = arr[i][j];
      switch (value) {
        case 0:
          nuimg = imgarr[0];
          c = color(255, 100, 0, fade);
          break;
        case 1:
          nuimg = imgarr[1];
          c = color(255, 0, 255, fade);
          break;
        case 2:
          nuimg = imgarr[2];
          c = color(20, 200, 120, fade);
          break;
        case 3:
          nuimg = imgarr[3];
          c = color(120, 0, 240, fade);
          break;
        case 4:
          nuimg = imgarr[4];
          c = color(100, 150, 200, fade);
          break;
        case 5:
          nuimg = imgarr[5];
          c = color(0, 255, 0, fade);
          break;
        case 6:
          nuimg = imgarr[6];
          c = color(0, 0, 255, fade);
          break;
        case 7:
          nuimg = imgarr[7];
          c = color(255, 255, 0, fade);
          break;
        case 8:
          nuimg = imgarr[8];
          c = color(255, 0, 0, fade);
          break;
        case 9:
          nuimg = imgarr[9];
          c = color(0, 255, 255, fade);
          break;
        default:
          nuimg = imgarr[0];
          c = color(255, fade);
      }
      tint(c);
      image(nuimg, j * 9, i * 9, 15, 15);
    }
  }
  pop();
}

// Map function 1:
// This will be used to draw the PNG and JPG images into the numerical arrays
// gridarr,images,x,y,rotation,scale,size
function drawGrid(gridarr,images,lx,ly,rot,sc,squareSize) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < gridarr.length; i++) {
        for (var j = 0; j < gridarr[i].length; j++) {
            let a = gridarr[i][j];

            switch (a) {
                case 0:
                    fill(255); // White color for empty squares
                    break;
                case 1:
                    image(images[0], j * squareSize, i * squareSize, squareSize, squareSize);
                    continue;
                case 2:
                    image(images[1], j * squareSize, i * squareSize, squareSize, squareSize);
                    continue;
                case 3:
                    image(images[2], j * squareSize, i * squareSize, squareSize, squareSize);
                    continue;
                case 4:
                    image(images[3], j * squareSize, i * squareSize, squareSize, squareSize);
                    continue;
                case 5:
                    image(images[4], j * squareSize, i * squareSize, squareSize, squareSize);
                    continue;
                case 6:
                    image(images[5], j * squareSize, i * squareSize, squareSize, squareSize);
                    continue;
                case 7:
                    image(images[6], j * squareSize, i * squareSize, squareSize, squareSize);
                    continue;
                case 8:
                    image(images[7], j * squareSize, i * squareSize, squareSize, squareSize);
                    continue;
                case 9:
                    image(images[8], j * squareSize, i * squareSize, squareSize, squareSize);
                    continue;
                case 10:
                    image(images[9], j * squareSize, i * squareSize, squareSize, squareSize);
                    continue;
                case 11:
                    image(images[10], j * squareSize, i * squareSize, squareSize, squareSize);
                    continue;
                //... add more cases for additional images
                default:
                    fill(255);
            }
            rect(j * squareSize, i * squareSize, squareSize, squareSize);
        }
    }
}

function drawFox(gridarr, lx, ly, rot, sc, fade) {
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < gridarr.length; i++) {
        for (var j = 0; j < gridarr[i].length; j++) {
            let a = gridarr[i][j];
            if (a === 1) {
                fill(6, 4, 14, fade); // #06040E
            } else if (a === 2) {
                fill(231, 217, 211, fade); // #E7D9D3
            } else if (a === 3) {
                fill(249, 244, 244, fade); // #F9F4F4
            } else if (a === 4) {
                fill(231, 143, 65, fade); // #E78F41
            } else if (a === 5) {
                fill(226, 124, 33, fade); // #E27C21
            } else if (a === 6) {
                fill(204, 105, 32, fade); // #CC6920
            } else if (a === 7) {
                fill(176, 81, 34, fade); // #B05122
            } else if (a === 8) {
                fill(180, 143, 131, fade); // #B48F83
            } else {
                noFill(); // If the value doesn't match, don't fill
            }

            // Draw the rectangle at the calculated position
            rect(j * 20, i * 20, 20, 20);
        }
    }
    pop();
}

function drawSkeleton(gridarr, lx, ly, rot, sc, fade) {
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < gridarr.length; i++) {
        for (var j = 0; j < gridarr[0].length; j++) {
            let value = gridarr[i][j];
            switch (value) {
                case 1:
                    fill(80, 80, 80, fade); // Dark pattern - #505050
                    break;
                case 2:
                    fill(134, 134, 134, fade); // Medium-dark pattern - #868686
                    break;
                case 3:
                    fill(169, 169, 169, fade); // Medium pattern - #a9a9a9
                    break;
                case 4:
                    fill(221, 221, 221, fade); // Medium-light pattern - #dddddd
                    break;
                case 5:
                    fill(238, 238, 238, fade); // Light pattern - #eeeeee
                    break;
                default:
                    noFill(); // If the value doesn't match, don't fill
            }
            rect(j * 20, i * 20, 20, 20);
        }
    }
    pop();
}

//daria's flower
function mapToFlowerPalette(arr, lx, ly, sc, rot, shape, fade){
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr[i].length; j++){
        n = arr[i][j];
  
        if(n == 0){
          fill(255,255,255,fade);
        } else if(n == 1){
          fill(201, 244, 255,fade);
        } else if(n == 2){
          fill(255, 247, 186,fade);
        } else if(n == 3){
          fill(219, 56, 20,fade);
        } else if(n == 4){
          fill(115, 191, 147,fade);
        } else if(n == 5){
          fill(91, 143, 73,fade);
        } else if(n == 6){
          fill(33, 25, 8,fade);
        } else if(n == 7){
          fill(39, 69, 14,fade);
        } else {
          fill(0, 0, 0, fade);
        }
  
        if(shape == 'c'){
          ellipse((j * 10)-100, (i * 10)-100, 10, 10);
        } else if (shape == 'r'){
          rect((j * 10)-100, (i * 10)-100, 10, 10);
        } else if (shape == 's'){
          star((j * 10)-100, (i * 10)-100, 7, 3, 5)
        }
      }
    }
    pop();
  }

  function mapToAxoPalette(arr, lx, ly, sc, rot, shape, fade) {
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let a = arr[i][j]; 

            // Set colors based on array values
            if (a === 1) { 
                fill(255, 195, 210, fade);  // LIGHT PINK (blush)
            } else if (a === 2) {
                fill(200, 83, 112, fade);   // DARK PINK (nose whole)
            } else if (a === 3) {
                fill(255, 255, 255, fade); // WHITE (sclera)
            } else if (a === 4) {
                fill(0, 0, 0, fade);        // BLACK (pupils)
            } else if (a === 5) {
                fill(237, 159, 178, fade); // NOSE/BLUSH
            } else {
                noStroke();
                fill(255, 179, 198, fade);  // Default color
            }

            // Draw shapes based on the `shape` argument
            if (shape === 'c') {
                ellipse((j * 20) + 5, (i * 20) + 5, 20, 20);
            } else if (shape === 'r') {
                rect((j * 20) + 5, (i * 20) + 5, 20, 20);
            } else if (shape === 's') {
                star((j * 20) + 5, (i * 20) + 5, 10, 5, 5); // Use the star function for custom shapes
            }
        }
    }
    pop();
}
function mapToCreeperPalette(arr, lx, ly, sc, rot, shape, fade) {
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let value = arr[i][j]; 

            // Set colors based on array values
            if (value == 0) { // Base color
                fill(50, 201, 44, fade);
            } else if (value == 1) { // Black
                fill(0, 0, 0, fade);
            } else if (value == 2) { // Light green
                fill(126, 235, 122, fade);
            } else if (value == 3) { // Dark green
                fill(51, 135, 49, fade);
            } else if (value == 4) { // Lighter green
                fill(179, 255, 186, fade);
            } else if (value == 5) { // Darker green
                fill(22, 54, 25, fade);
            } else if (value == 6) { // Red eyes
                fill(255, 0, 0, fade);
            } else if (value == 7) { // White
                fill(255, 255, 255, fade);
            } else { // Default color
                fill(20, 220, 250, fade);
            }

            // Draw shapes based on the `shape` argument
            if (shape === 'c') {
                ellipse((j * 20), (i * 20), 20, 20); // Circle
            } else if (shape === 'r') {
                rect((j * 20), (i * 20), 20, 20); // Rectangle
            } else if (shape === 's') {
                star((j * 20), (i * 20), 10, 5, 5); // Star
            }
        }
    }
    pop();
}

// Helper function to draw stars (if using 's' for shape)
function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius1;
        let sy = y + sin(a) * radius1;
        vertex(sx, sy);
        sx = x + cos(a + halfAngle) * radius2;
        sy = y + sin(a + halfAngle) * radius2;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}