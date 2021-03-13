const { 
    fsPromises, 
    existsSync, 
    readFile,
    lstatSync 
} = require('fs');
const path = require('path');
const mime = require('mime');
const myReadFile = (filePath) => {
    return new Promise(( resolve, reject ) => {
        const isDir = lstatSync(filePath).isDirectory();
        const curFilePath = isDir 
            ?  `${ filePath }index.html` 
            : filePath;
            
        readFile(curFilePath, (err, data) => {
            if(err) {
                console.log(err);
                reject('文件读取错误');
            }
            else {
                resolve(data);
            }
        })
    })
}
module.exports = (urlString) => {
    return new Promise(( resolve, reject ) => {
        const filePath = path.join(__dirname, './public', urlString);
        const ext = path.parse(filePath).ext;
        const mimiType = mime.getType(ext);
        // console.log(mimiType, ext);
        // 判断文件是否成存在

        if( existsSync(filePath) ) {
            myReadFile(filePath)
                .then(res => {
                    resolve( {
                        data: res,
                        mimiType
                    } )
                } )
                .catch( err => reject(err) )
            
            // 麻瓜方法 在 15.x 的版本会有问题
            // fsPromises
            // .readFile(filePath, {encoding: 'utf-8'})
            // .then(result => {
            //     console.log(result);
            //     // resolve(result)
            // })
            // .catch(error => { 
            //     reject(error)
            // })
        }
        else {
            reject('no find file');
        }

        
    })
}
