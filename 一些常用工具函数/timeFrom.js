// 多久以前
// #timeFrom(time, format = String | false)
// 该函数必须传入第一个参数，格式为任何合法的时间格式、秒或毫秒的时间戳，第二个参数是可选的，返回的值类似刚刚，25分钟前，3小时前，7天前的结果。
// 如果第二个参数是时间的格式，当前和传入时间戳相差大于一个月时，返回格式化好的时间；如果第二个参数为false，则不会返回格式化好的时间，而是诸如"xxx年前"的结果。

// timestamp <String> 时间戳
// format <String / false> 时间格式，默认为yyyy-mm-dd，年为"yyyy"，月为"mm"，日为"dd"，时为"hh"，分为"MM"，秒为"ss"，格式可以自由搭配，如： yyyy:mm:dd，yyyy-mm-dd，yyyy年mm月dd日，yyyy年mm月dd日 hh时MM分ss秒，yyyy/mm/dd/，MM:ss等组合。
// 如果时间戳距离此时的时间，大于一个月，则返回一个格式化好的时间，如果此参数为false，返回均为"多久之前"的结果。

import timeFormat from '../../libs/function/timeFormat.js';

/**
 * 时间戳转为多久之前
 * @param String timestamp 时间戳
 * @param String | Boolean format 如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
 * 如果为布尔值false，无论什么时间，都返回多久以前的格式
 */
function timeFrom(dateTime = null, format = 'yyyy-mm-dd') {
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  let timestamp = +new Date(Number(dateTime));

  let timer = (Number(new Date()) - timestamp) / 1000;
  // 如果小于5分钟,则返回"刚刚",其他以此类推
  let tips = '';
  switch (true) {
    case timer < 300:
      tips = '刚刚';
      break;
    case timer >= 300 && timer < 3600:
      tips = parseInt(timer / 60) + '分钟前';
      break;
    case timer >= 3600 && timer < 86400:
      tips = parseInt(timer / 3600) + '小时前';
      break;
    case timer >= 86400 && timer < 2592000:
      tips = parseInt(timer / 86400) + '天前';
      break;
    default:
      // 如果format为false，则无论什么时间戳，都显示xx之前
      if (format === false) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = parseInt(timer / (86400 * 30)) + '个月前';
        } else {
          tips = parseInt(timer / (86400 * 365)) + '年前';
        }
      } else {
        tips = timeFormat(timestamp, format);
      }
  }
  return tips;
}

export default timeFrom;
