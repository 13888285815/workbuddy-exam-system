# 修复：选项/答案显示格式（commit 3101629）

## 问题
学生答题时看不到答案选项；预览试卷里答案显示乱码（如 "A.B.C.D."）；题库列表里选项显示双字母前缀（A.A.4位）。

## 根因
1. 选项存入 localStorage 时已含字母前缀（如 "A.4位"），但渲染时又用 `String.fromCharCode(65+oi)` 拼接，导致双前缀
2. `previewPaper()` 里用 `q.answer.join('；')` 对字符串答案报错，`q.options.forEach` 里直接输出原始带前缀选项

## 修复（admin.html）
1. **previewPaper() 选项**：渲染前先去掉选项文本中的前缀字母，输出干净的 `A. 4位` 格式
2. **previewPaper() 答案**：支持 `Array.isArray()` 判断，字符串答案直接显示（不报错）
3. **题目列表 renderQuestions() 选项**：strip 前缀后再拼接字母，避免双重前缀；答案匹配改用 `startsWith` 对处理过的纯文本比较