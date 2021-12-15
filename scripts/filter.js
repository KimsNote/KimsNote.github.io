
// 自定义格式化， --字符串-- 格式化为下划线 红色
hexo.extend.filter.register('before_generate', function (data) {
  /* const reg = /(?<=--).*?(?=--)/g;
  data.content = data.content
    .replace(reg, function (match) {
      if (match.indexOf(' ') === 0 || match.indexOf(' ') === match.length - 1) {
        return match;
      }  
      return `<span style='color: red;font-weight: bold;'><u>${match}</u></span>`
    })
    .replace(/--/g, '');
  return data; */
});

