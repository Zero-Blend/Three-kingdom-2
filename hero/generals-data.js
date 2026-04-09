// =============================================
// 真三國大戰2 ── 武將資料整合 Loader
// 此檔只負責合併，不放任何武將資料
// 新增武將請到對應陣營檔案：
//   魏國 → hero/data-wei.js
//   蜀國 → hero/data-shu.js
//   吳國 → hero/data-wu.js
//   群雄 → hero/data-qun.js
// =============================================

// 使用 var 避免與 index.html 內的變數名衝突
var generals = [].concat(
  generals_wei,
  generals_shu,
  generals_wu,
  generals_qun
);
