const fs = require('fs');
const fsPromises = require('fs/promises');
// fs.mkdir('logs', error => {
//     if(error) throw error;
//     console.log('创建成功');
// })


// fs.rename('./logs', './log', () => {
//     console.log('文件夹名字修改');
// })

// fs.rmdir('./log', error => {
//     if(error) throw error;
//     console.log('文件夹删除成功');
// })

// fs.readdir('./logs', ( error, result ) => {
//   console.log(result);
// })

// fs.writeFile('./logs/log1.log', 'hellow\nworld', ( error ) => {
//     console.log(error);
// });

// fs.appendFile('./logs/log1.log', 'add content', error => {
//     console.log('修改完成');
// })

// fs.unlink('./logs/log1.log', error => console.log(error));

// fs.readFile('./logs/log1.log', 'utf-8' ,( error, content ) => {
//     if(error) throw error;
//     console.log(content.toString());
// })

// fs.readFile('./logs/log1.log', ( error, content ) => {
//     if(error) throw error;
//     console.log(content.toString());
// })

// const content = fs.readFileSync('./logs/log1.log')

// ;( async () => {
//    const content = await fsPromises.readFile('./logs/log1.log')
//    console.log(content);
// } )()
