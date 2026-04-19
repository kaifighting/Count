# 小記帳 App - GitHub 部署說明

## 這包裡面有什麼

- `index.html` - App 主程式
- `manifest.json` - App 的名字、圖示、顏色設定
- `sw.js` - 讓 App 能離線使用的程式
- `icon-192.png` / `icon-512.png` - App 圖示
- `README.md` - 就是你現在看的這份說明

---

## 先建立 GitHub 帳號（如果還沒有）

1. 打開 https://github.com
2. 點右上角 **Sign up**
3. 填 email、密碼、帳號名稱（這個帳號名會出現在網址裡，建議用英文小寫）
4. 驗證信箱完成註冊

---

## 第一步：建立 Repository（你的專案資料夾）

1. 登入後，點右上角的 **「+」** → **New repository**
2. **Repository name**（儲存庫名稱）：輸入 `expense-tracker`（或你喜歡的英文名，不要有空格或中文）
3. 下面選 **Public**（公開，這樣才能用免費的 GitHub Pages）
4. **勾選** 「Add a README file」
5. 點綠色按鈕 **Create repository**

完成後你會看到一個只有一個 README.md 檔案的頁面。

---

## 第二步：上傳檔案

1. 在你的 repository 頁面，找到 **Add file** 按鈕 → 選 **Upload files**
2. 把這包裡面的 **5 個檔案**（index.html、manifest.json、sw.js、icon-192.png、icon-512.png）通通拖進網頁
   - ⚠️ 注意：不要整個資料夾拖，要拖裡面的檔案本身
3. 等上傳完成（檔案名稱出現在列表裡）
4. 畫面往下滑，點綠色的 **Commit changes** 按鈕

上傳完後，你的 repository 頁面應該會看到這 5 個檔案加上原本的 README.md。

---

## 第三步：打開 GitHub Pages（變成網站）

1. 在 repository 頁面，點上方的 **Settings**（齒輪圖示）
2. 左邊選單找到 **Pages**
3. 中間 **Source** 的地方：
   - Branch 選 **main**
   - 資料夾選 **/ (root)**
   - 點 **Save**
4. 等 1~2 分鐘，重新整理這個頁面，會看到最上面出現：
   ```
   Your site is live at https://你的帳號.github.io/expense-tracker/
   ```

這就是你的網址了！

---

## 第四步：加到手機主畫面當 App 用

### iPhone（Safari）
1. 用 Safari 打開上面那個網址
2. 點下方中間的 **分享按鈕**（方形加向上箭頭）
3. 往下滑找 **加入主畫面**
4. 點 **新增** → 完成
5. 回主畫面就會看到「小記帳」的圖示，點下去就跟 App 一樣

### Android（Chrome）
1. 用 Chrome 打開網址
2. 通常會自動跳出「安裝小記帳」提示 → 點安裝
3. 沒跳出的話：點右上角 **⋮** → **加到主畫面** / **安裝應用程式**
4. 回主畫面就有圖示

---

## 之後要改程式怎麼辦

1. 在 GitHub repository 上點要修改的檔案（例如 index.html）
2. 點右上角的 **鉛筆圖示**（編輯）
3. 改完後往下滑 → **Commit changes**
4. 等 1~2 分鐘，重新整理手機上的 App 就是新版本

如果手機 App 沒變，試試：關掉 App 完全重開，或清除瀏覽器快取。

---

## 可能遇到的問題

**Q：網址打開是空白？**  
A：等個 5 分鐘再試，GitHub Pages 第一次建好有時候會慢。也檢查網址結尾有沒有 `/`。

**Q：語音輸入沒反應？**  
A：必須用 Chrome 或 Safari，而且必須是 https 開頭（GitHub Pages 一定是 https）。第一次用會問麥克風權限要按允許。

**Q：想改顏色、加新類別怎麼做？**  
A：`index.html` 檔案裡搜尋 `CATEGORIES` 可以改分類和關鍵字。顏色在 CSS 開頭的 style 裡。改完按上面「之後要改程式怎麼辦」的步驟。

**Q：不小心把 repository 設成 Private（私人）了？**  
A：Settings → 最下面 Danger Zone → Change visibility → 改成 Public。Private 的 repo 免費版不能用 GitHub Pages。

---

## 整個流程大概需要多久

- 註冊 GitHub：3 分鐘
- 建 repository + 上傳檔案：5 分鐘
- 開 Pages + 等生效：3 分鐘
- 加到手機主畫面：1 分鐘

**加起來大概 15 分鐘你就有一個自己的記帳 App 了。**

有卡關的地方隨時問我。
