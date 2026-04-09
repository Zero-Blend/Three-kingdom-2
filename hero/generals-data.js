// =============================================
// 真三國大戰２ 武將資料 主 Loader
// 此檔僅負責建立空陣列，實際資料請到 hero/data/ 對應資料夾新增
// =============================================

const generals_data = [];

// ← 各武將檔案會透過 index.html 的 <script> 依序載入，並將資料 push 進來
// ← 載入完所有檔案後，會在 index.html 尾部執行：
//    const generals = generals_data;
