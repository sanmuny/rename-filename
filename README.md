# rename-filename
Batch rename files in the directory.

# configuration

1. Rename confilg.js.demo to config.js
2. Replace configurations in config.js with your own requirement.

```
const config = {
  dir_path: '/Users/sanmuny/react-hooks', // path of the target directory
  strip_patterns: [/ /g], // pattern list of strings to be stripped from new file name
  replace_patterns: [/:/g, /?/g], // pattern list of strings to be replaced with replace_char
  replace_char: '-',
};

export default config;
```

# start rename

```
$ npm start
```
