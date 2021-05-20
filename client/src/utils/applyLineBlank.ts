const applyLineBlank = (input: string): string => {
  let source = input.replace(/\n/gi, '\\\n');

  if (source.slice(source.length - 1, source.length) === '\n') {
    source += '&nbsp;';
  }

  const strList = source.split('\n');
  let isFirstSlash = false;
  source.split('\n').forEach((str, index) => {
    if (str !== '\\' && strList[index - 1] === '\\' && str !== '&nbsp;') {
      strList[index - 1] += '\n&nbsp;';
    }

    if (str.length !== 1 && str.slice(str.length - 1, str.length) === '\\') {
      strList[index] = str.slice(0, str.length - 1);
    }
    if (str !== '\\') {
      isFirstSlash = false;
    }
    if (str === '\\' && isFirstSlash === false && strList[index + 1] !== '\\') {
      isFirstSlash = true;
      strList[index] = '\n\\\n&nbsp;';
    }
    if (str === '\\' && isFirstSlash === false && strList[index + 1] === '\\') {
      isFirstSlash = true;
      strList[index] = '\n\\';
    }
  });
  source = strList.join('\n');
  return source;
};

export default applyLineBlank;
