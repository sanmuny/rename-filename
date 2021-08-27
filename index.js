import fs from 'fs';
import path from 'path';
import config from './config.js';

const getFileList = (dirPath) => fs.readdirSync(dirPath);

const renameFiles = (fileList) => {
  fileList.forEach((fileName) => {
    let newFileName = fileName;
    config.strip_patterns.forEach((pattern) => {
      newFileName = newFileName.replace(pattern, '');
    });
    config.replace_patterns.forEach((pattern) => {
      newFileName = newFileName.replace(pattern, '-');
    });
    fs.renameSync(path.join(config.dir_path, fileName),
      path.join(config.dir_path, newFileName));
    console.log(`Renamed file from ${fileName} to ${newFileName}`);
  });
};

const main = () => {
  if (!config.dir_path) {
    console.error('dir_path config is required.');
    return -1;
  }
  const fileList = getFileList(config.dir_path);
  console.log(fileList);
  renameFiles(fileList);
  return 0;
};

main();
