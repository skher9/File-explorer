const Traverse = () => {
    const insert = function (tree, folderId, item, isFolder) {
      if (tree.id === folderId && tree.isFolder) {
        tree.items.unshift({
          id:new Date().getTime(),
          name: item,
          isFolder: isFolder,
          items: []
        });
  
        return tree;
      }
  
      let latestNode = [];
      latestNode = tree.items.map((ob) => {
        return insert(ob, folderId, item, isFolder);
      });
  
      return { ...tree, items: latestNode };
    };
  
    return { insert};
  };
  
  export default Traverse;