import fs from 'fs';
import path from 'path';
import config from './config.js';

const getFileList = (dirPath) => fs.readdirSync(dirPath);

const renameFiles = (fileList, subPath) => {
  fileList.forEach((fileName) => {
    let newFileName = fileName;
    config.strip_patterns.forEach((pattern) => {
      newFileName = newFileName.replace(pattern, '');
    });
    config.replace_patterns.forEach((pattern) => {
      newFileName = newFileName.replace(pattern, '-');
    });
    fs.renameSync(path.join(config.dir_path, subPath, fileName),
      path.join(config.dir_path, subPath, newFileName));
    console.log(`Renamed file from ${fileName} to ${newFileName}`);
  });
};

const main = () => {
  if (!config.dir_path) {
    console.error('dir_path config is required.');
    return -1;
  }
  config.sub_paths.forEach((subPath) => {
    const fileList = getFileList(path.join(config.dir_path, subPath));
    renameFiles(fileList, subPath);
  });

  return 0;
};

main();
