const explorer = {
    id: 1,
    name: "root",
    isFolder: true,
    items: [
      {
        id: 2,
        name: "public",
        isFolder: true,
        items: [
          {
            id: 3,
            name: "public nested 1",
            isFolder: true,
            items: [
              {
                id: 4,
                name: "index.html",
                isFolder: false,
              },
              {
                id: 5,
                name: "hello.html",
                isFolder: false,
              },
            ],
          },
          {
            id: 6,
            name: "public nested file.js",
            isFolder: false,
          },
        ],
      },
      {
        id: 7,
        name: "src",
        isFolder: true,
        items: [
          {
            id: 8,
            name: "App.js",
            isFolder: false,
          },
          {
            id: 9,
            name: "Index.js",
            isFolder: false,
          },
          {
            id: 10,
            name: "Style.js",
            isFolder: false,
          },
        ],
      },
      {
        id: 11,
        name: "package.json",
        isFolder: false,
      },
    ],
  };
  
  export default explorer;
  