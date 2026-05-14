// 测试数据注入脚本
// 在浏览器控制台执行此脚本来初始化测试数据

const testQuestions = [
  // 单选题
  {
    id: 'q001',
    type: 'single',
    content: '计算机中1字节等于多少位？',
    options: ['A. 4位', 'B. 8位', 'C. 16位', 'D. 32位'],
    answer: 'B',
    score: 2,
    subject: 'info',
    explain: '1字节(Byte)=8位(bit)，这是计算机基础知识。'
  },
  {
    id: 'q002',
    type: 'single',
    content: 'HTML是什么的缩写？',
    options: ['A. HyperText Markup Language', 'B. High Text Machine Language', 'C. HyperText Machine Language', 'D. High Transfer Markup Language'],
    answer: 'A',
    score: 2,
    subject: 'info',
    explain: 'HTML全称HyperText Markup Language，超文本标记语言。'
  },
  {
    id: 'q003',
    type: 'single',
    content: '以下哪种排序算法平均时间复杂度最低？',
    options: ['A. 冒泡排序', 'B. 选择排序', 'C. 快速排序', 'D. 插入排序'],
    answer: 'C',
    score: 2,
    subject: 'info',
    explain: '快速排序平均时间复杂度为O(nlogn)，是常用排序中最快的。'
  },
  {
    id: 'q004',
    type: 'single',
    content: 'TCP/IP协议中，HTTP默认端口号是？',
    options: ['A. 21', 'B. 23', 'C. 80', 'D. 443'],
    answer: 'C',
    score: 2,
    subject: 'info',
    explain: 'HTTP默认端口为80，HTTPS为443。'
  },
  {
    id: 'q005',
    type: 'single',
    content: '以下哪个不是关系型数据库？',
    options: ['A. MySQL', 'B. Oracle', 'C. MongoDB', 'D. PostgreSQL'],
    answer: 'C',
    score: 2,
    subject: 'info',
    explain: 'MongoDB是文档型NoSQL数据库，其余三个都是关系型数据库。'
  },
  // 多选题
  {
    id: 'q006',
    type: 'multi',
    content: '以下哪些是面向对象编程的基本特征？（多选）',
    options: ['A. 封装', 'B. 继承', 'C. 多态', 'D. 递归'],
    answer: ['A', 'B', 'C'],
    score: 4,
    subject: 'info',
    explain: '面向对象三大特征：封装、继承、多态。递归是编程技术，不是OOP特征。'
  },
  {
    id: 'q007',
    type: 'multi',
    content: '以下哪些是HTTP请求方法？（多选）',
    options: ['A. GET', 'B. POST', 'C. PUSH', 'D. DELETE'],
    answer: ['A', 'B', 'D'],
    score: 4,
    subject: 'info',
    explain: 'HTTP标准方法包括GET、POST、PUT、DELETE、PATCH等，PUSH不是HTTP方法。'
  },
  // 判断题
  {
    id: 'q008',
    type: 'judge',
    content: 'Python是一种编译型语言。',
    options: [],
    answer: '错误',
    score: 2,
    subject: 'info',
    explain: 'Python是解释型语言，代码在运行时逐行解释执行，而不是预先编译成机器码。'
  },
  {
    id: 'q009',
    type: 'judge',
    content: 'JavaScript可以在服务器端运行。',
    options: [],
    answer: '正确',
    score: 2,
    subject: 'info',
    explain: 'Node.js使JavaScript可以在服务器端运行，是现代全栈开发的重要技术。'
  },
  {
    id: 'q010',
    type: 'judge',
    content: 'CSS中class选择器使用#号前缀。',
    options: [],
    answer: '错误',
    score: 2,
    subject: 'info',
    explain: 'CSS中class选择器使用"."前缀，"#"是ID选择器的前缀。'
  },
  // 填空题
  {
    id: 'q011',
    type: 'fill',
    content: '在CSS中，用于设置文字颜色的属性是___。',
    options: [],
    answer: 'color',
    score: 2,
    subject: 'info',
    explain: 'CSS的color属性用于设置元素的文字颜色。'
  },
  {
    id: 'q012',
    type: 'fill',
    content: 'JavaScript中声明常量使用关键字___。',
    options: [],
    answer: 'const',
    score: 2,
    subject: 'info',
    explain: 'const用于声明不可重新赋值的常量，ES6引入。'
  },
  // 简答题
  {
    id: 'q013',
    type: 'essay',
    content: '请简述什么是闭包（Closure），并举一个简单的例子说明。',
    options: [],
    answer: '闭包是指函数可以访问其外部作用域的变量，即使外部函数已经执行完毕。例子：function outer() { let x = 1; return function inner() { return x; }; }',
    score: 10,
    subject: 'info',
    explain: '闭包是JavaScript的重要特性，可以实现数据私有化和函数工厂等模式。'
  }
];

const testPaper = {
  id: 'p001',
  name: '前端基础知识测试',
  subject: 'info',
  examType: 'monthly',
  grade: 'grade1',
  semester: 'semester1',
  total: 36,
  duration: 30,
  pass: 60,
  status: 'published',
  desc: '包含单选、多选、判断、填空、简答题型的综合测试',
  questionIds: ['q001', 'q002', 'q003', 'q004', 'q005', 'q006', 'q007', 'q008', 'q009', 'q010', 'q011', 'q012', 'q013'],
  created: new Date().toLocaleDateString()
};

const testUser = {
  id: 'u001',
  name: '测试学生',
  username: 'student',
  password: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', // 密码: 123456
  role: 'student'
};

// 存储到 localStorage
localStorage.setItem('exam_questions', JSON.stringify(testQuestions));
localStorage.setItem('exam_papers', JSON.stringify([testPaper]));
localStorage.setItem('exam_users', JSON.stringify([testUser]));

console.log('✅ 测试数据已注入！');
console.log('📝 题目数量:', testQuestions.length);
console.log('📋 试卷数量: 1');
console.log('👤 学生账号: student / 密码: 123456');
console.log('🌐 请访问 http://localhost:8765/index.html 开始测试');
