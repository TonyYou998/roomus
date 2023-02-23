const multer=require('multer');
const mkdirp=require('mkdirp');
 const path=require('path');
const storage=multer.diskStorage({

    destination: (req,file,callback)=>{
        console.log("run");
        const made=mkdirp.sync(`./public/images/property`);
            callback(
                null,`./public/images/property`)
            },
    filename: (req,file,cb)=>{
        cb(null,Date.now()+"_"+file.originalname);
    },
    }
);

const checckFileType=(file,callback)=>{
    const fileTypes=/jpeg|jpg|png|svg/;
    const extName=fileTypes.test(
        path.extname(file.originalname).toLocaleLowerCase(),
    );
    const mimetype = fileTypes.test(file.mimetype);

    if (mimetype && extName) {
        return callback(null, true);
    }

}
const fileFilter=(req,file,callback)=>{
    checckFileType(file,callback);

};

const uploadImage=multer({
    storage:storage,
    limits:{
        fileSize:1024*1024*10,
    },
    fileFilter:fileFilter,
});
module.exports={uploadImage}