const winString = `
  ,ggg, ,ggggggg,                                    gg
  dP""Y8,8P"""""Y8b                                  dP8,                  ,dPYb,
  Yb, \`8dP\'     \`88                                 dP Yb                  IP\'\`Yb
   \`"  88\'       88   gg                           ,8  \`8,                 I8  8I
       88        88   ""                           I8   Yb                 I8  8\'
       88        88   gg     ,gggg,   ,ggg,        \`8b, \`8,     ,ggggg,    I8 dP
       88        88   88    dP"  "Yb i8" "8i        \`"Y88888   dP"  "Y8ggg I8dP   88gg
       88        88   88   i8\'       I8, ,8I            "Y8   i8\'    ,8I   I8P    8I
       88        Y8,_,88,_,d8,_    _ \`YbadP\'             ,88,,d8,   ,d8\'  ,d8b,  ,8I
       88        \`Y88P""Y8P""Y8888PP888P"Y888        ,ad88888P"Y8888P"    8P\'"Y88P"\'
                                                   ,dP"\'   Yb
                                                  ,8\'      I8
                                                 ,8\'       I8
                                                 I8,      ,8\'
                                                 \`Y8,___,d8\'
                                                   "Y888P"

  ---
    Please email me at evinism@gmail.com and tell me how you got through!
  ---
`;

const win = ({ os }) => {
  os.filesystem.writeToFile(winString, "/dev/screen", () => {});
};

export default win;
