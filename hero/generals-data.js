<!-- Step 1: 建立空陣列 -->
<script src="hero/generals-data.js"></script>

<!-- Step 2: 魏國武將（每人一行） -->
<script src="hero/data/wei/caocao_tianming.js"></script>
<script src="hero/data/wei/simayi_jifeng.js"></script>

<!-- 之後蜀國 -->
<!-- <script src="hero/data/shu/liubei_xxx.js"></script> -->

<!-- Step 3: 把 generals_data 交給原有邏輯 -->
<script>const generals = generals_data;</script>

// =============================================
// 真三國大戰２ 武將資料 主 Loader
// 此檔僅負責建立空陣列，實際資料請到 hero/data/ 對應資料夾新增
// =============================================

const generals_data = [];

// ← 各武將檔案會透過 index.html 的 <script> 依序載入，並將資料 push 進來
// ← 載入完所有檔案後，會在 index.html 尾部執行：
//    const generals = generals_data;
