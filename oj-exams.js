// 模拟考试 · 中国电子学会（全国青少年软件编程等级考试）分级卷
// 由 gen_exams.py 生成：每级 3 张（2 模拟 + 1 真题·大纲同步），三语言各满级。
// 母题/子题策略：同一核心算法多套题面变体；选择题/判断题/编程题三类，编程题提交时经 Wandbox 真实判题。

const PAPERS = [
  {
    "id": "EXPYTHON010",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Python 软件编程等级考试（1级）模拟卷（一）",
    "level": "1级",
    "duration": 60,
    "year": "2026",
    "lang": "python",
    "questions": [
      {
        "type": "choice",
        "stem": "while 循环的特点是？",
        "options": [
          "至少执行一次",
          "条件为真时重复",
          "只能计数",
          "不能嵌套"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "while 在条件为真时反复执行。"
      },
      {
        "type": "choice",
        "stem": "下列哪个是合法的 Python 变量名？",
        "options": [
          "1x",
          "x-y",
          "_sum",
          "for"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "变量名不能以数字开头、不能含减号、不能是关键字。"
      },
      {
        "type": "choice",
        "stem": "关于数组下标，下列说法正确的是？",
        "options": [
          "从 1 开始",
          "从 0 开始",
          "可负",
          "随意"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "C/C++/Java/Python 列表下标均从 0 开始。"
      },
      {
        "type": "choice",
        "stem": "十进制数 13 转换成二进制后是？",
        "options": [
          "1101",
          "1110",
          "1011",
          "1001"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "13=8+4+1=2^3+2^2+2^0，二进制为 1101。"
      },
      {
        "type": "judge",
        "stem": "布尔类型只有真和假两种取值。",
        "answer": "T",
        "score": 5,
        "analysis": "bool 仅 True/False。"
      },
      {
        "type": "judge",
        "stem": "字符串 'abc' 的长度是 3。",
        "answer": "T",
        "score": 5,
        "analysis": "三个字符。"
      },
      {
        "type": "program",
        "score": 20,
        "analysis": "遍历，能被 2 整除即计数。",
        "desc": "班级里有 n 个同学的学号（整数）。输入后请输出其中偶数学号的个数。",
        "input": "第一行 n；第二行 n 个学号。",
        "output": "偶数学号个数。",
        "samples": [
          {
            "input": "5\n1 2 3 4 5",
            "output": "2"
          },
          {
            "input": "4\n2 4 6 8",
            "output": "4"
          }
        ],
        "solutions": {
          "python": "import sys\nv=list(map(int,sys.stdin.read().split()))\nn=v[0]\nc=sum(1 for x in v[1:1+n] if x%2==0)\nprint(c)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;int c=0;\nfor(int i=0;i<n;i++){int x;cin>>x;if(x%2==0)c++;}\ncout<<c<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();int c=0;\n    for(int i=0;i<n;i++){int x=sc.nextInt();if(x%2==0)c++;}\n    System.out.println(c);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXPYTHON011",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Python 软件编程等级考试（1级）模拟卷（二）",
    "level": "1级",
    "duration": 60,
    "year": "2026",
    "lang": "python",
    "questions": [
      {
        "type": "choice",
        "stem": "十进制数 13 转换成二进制后是？",
        "options": [
          "1101",
          "1110",
          "1011",
          "1001"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "13=8+4+1=2^3+2^2+2^0，二进制为 1101。"
      },
      {
        "type": "choice",
        "stem": "关于数组下标，下列说法正确的是？",
        "options": [
          "从 1 开始",
          "从 0 开始",
          "可负",
          "随意"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "C/C++/Java/Python 列表下标均从 0 开始。"
      },
      {
        "type": "choice",
        "stem": "表达式 7 % 3 的值是？",
        "options": [
          "1",
          "2",
          "3",
          "0"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "7 除以 3 余 2。"
      },
      {
        "type": "choice",
        "stem": "下列哪个是合法的 Python 变量名？",
        "options": [
          "1x",
          "x-y",
          "_sum",
          "for"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "变量名不能以数字开头、不能含减号、不能是关键字。"
      },
      {
        "type": "judge",
        "stem": "Python 中 print(3/2) 输出 1。",
        "answer": "F",
        "score": 5,
        "analysis": "3/2=1.5，输出 1.5。"
      },
      {
        "type": "judge",
        "stem": "while 循环条件永远为真时会正常自行结束。",
        "answer": "F",
        "score": 5,
        "analysis": "这将构成死循环。"
      },
      {
        "type": "program",
        "score": 20,
        "analysis": "遍历，能被 2 整除即计数。",
        "desc": "班级里有 n 个同学的学号（整数）。输入后请输出其中偶数学号的个数。",
        "input": "第一行 n；第二行 n 个学号。",
        "output": "偶数学号个数。",
        "samples": [
          {
            "input": "5\n1 2 3 4 5",
            "output": "2"
          },
          {
            "input": "4\n2 4 6 8",
            "output": "4"
          }
        ],
        "solutions": {
          "python": "import sys\nv=list(map(int,sys.stdin.read().split()))\nn=v[0]\nc=sum(1 for x in v[1:1+n] if x%2==0)\nprint(c)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;int c=0;\nfor(int i=0;i<n;i++){int x;cin>>x;if(x%2==0)c++;}\ncout<<c<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();int c=0;\n    for(int i=0;i<n;i++){int x=sc.nextInt();if(x%2==0)c++;}\n    System.out.println(c);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXPYTHON012",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Python 软件编程等级考试（1级）真题卷（大纲同步）",
    "level": "1级",
    "duration": 60,
    "year": "2026",
    "lang": "python",
    "questions": [
      {
        "type": "choice",
        "stem": "若 a=5, b=2，Python 表达式 a // b 的值是？",
        "options": [
          "2.5",
          "2",
          "3",
          "2.0"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "// 为整除，5//2=2。"
      },
      {
        "type": "choice",
        "stem": "Python 中 for i in range(3): 会循环几次？",
        "options": [
          "2",
          "3",
          "4",
          "0"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "range(3) 产生 0、1、2 共 3 个值。"
      },
      {
        "type": "choice",
        "stem": "下列哪种说法是正确的？",
        "options": [
          "print(3/2) 输出 1",
          "print(3/2) 输出 1.5",
          "3/2 报错",
          "3/2 输出 3"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "Python 中 / 为浮点除，3/2=1.5。"
      },
      {
        "type": "choice",
        "stem": "Python 中 list 的 append 方法作用是？",
        "options": [
          "删除末尾",
          "末尾添加元素",
          "排序",
          "反转"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "append 在列表末尾追加一个元素。"
      },
      {
        "type": "judge",
        "stem": "C++ 中数组下标从 0 开始。",
        "answer": "T",
        "score": 5,
        "analysis": "C/C++ 下标由 0 计起。"
      },
      {
        "type": "judge",
        "stem": "Python 中 print(3/2) 输出 1。",
        "answer": "F",
        "score": 5,
        "analysis": "3/2=1.5，输出 1.5。"
      },
      {
        "type": "program",
        "score": 20,
        "analysis": "遍历，能被 2 整除即计数。",
        "desc": "仓库记录了 n 件货物的重量（整数，单位 kg）。输入后请输出重量为双数（能被 2 整除）的件数。",
        "input": "第一行 n；第二行 n 个重量。",
        "output": "双数重量件数。",
        "samples": [
          {
            "input": "5\n1 2 3 4 5",
            "output": "2"
          },
          {
            "input": "4\n2 4 6 8",
            "output": "4"
          }
        ],
        "solutions": {
          "python": "import sys\nv=list(map(int,sys.stdin.read().split()))\nn=v[0]\nc=sum(1 for x in v[1:1+n] if x%2==0)\nprint(c)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;int c=0;\nfor(int i=0;i<n;i++){int x;cin>>x;if(x%2==0)c++;}\ncout<<c<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();int c=0;\n    for(int i=0;i<n;i++){int x=sc.nextInt();if(x%2==0)c++;}\n    System.out.println(c);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXPYTHON020",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Python 软件编程等级考试（2级）模拟卷（一）",
    "level": "2级",
    "duration": 60,
    "year": "2026",
    "lang": "python",
    "questions": [
      {
        "type": "choice",
        "stem": "表达式 7 % 3 的值是？",
        "options": [
          "1",
          "2",
          "3",
          "0"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "7 除以 3 余 2。"
      },
      {
        "type": "choice",
        "stem": "算法的哪一特性保证每一步都有确切含义？",
        "options": [
          "有穷性",
          "确定性",
          "可行性",
          "输入"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "确定性要求每一步无歧义。"
      },
      {
        "type": "choice",
        "stem": "下列哪个是合法的 Python 变量名？",
        "options": [
          "1x",
          "x-y",
          "_sum",
          "for"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "变量名不能以数字开头、不能含减号、不能是关键字。"
      },
      {
        "type": "choice",
        "stem": "Python 中 for i in range(3): 会循环几次？",
        "options": [
          "2",
          "3",
          "4",
          "0"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "range(3) 产生 0、1、2 共 3 个值。"
      },
      {
        "type": "judge",
        "stem": "Python 中 print(3/2) 输出 1。",
        "answer": "F",
        "score": 5,
        "analysis": "3/2=1.5，输出 1.5。"
      },
      {
        "type": "judge",
        "stem": "布尔类型只有真和假两种取值。",
        "answer": "T",
        "score": 5,
        "analysis": "bool 仅 True/False。"
      },
      {
        "type": "program",
        "score": 20,
        "analysis": "边读边维护目标值即可，无需存整个数组。",
        "desc": "山队测量了 n 座山峰的海拔（整数，单位米）。输入第一行 n，第二行 n 个整数，请输出其中最高的海拔。",
        "input": "第一行 n；第二行 n 个整数海拔。",
        "output": "最高海拔（整数）。",
        "samples": [
          {
            "input": "5\n3 9 -2 4 9",
            "output": "9"
          },
          {
            "input": "3\n-5 -8 -1",
            "output": "-1"
          }
        ],
        "solutions": {
          "python": "import sys\nv=list(map(int,sys.stdin.read().split()))\nn=v[0]\nprint(max(v[1:1+n]))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;int mx;cin>>mx;\nfor(int i=1;i<n;i++){int x;cin>>x;if(x>mx)mx=x;}\ncout<<mx<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();int mx=sc.nextInt();\n    for(int i=1;i<n;i++){int x=sc.nextInt();if(x>mx)mx=x;}\n    System.out.println(mx);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXPYTHON021",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Python 软件编程等级考试（2级）模拟卷（二）",
    "level": "2级",
    "duration": 60,
    "year": "2026",
    "lang": "python",
    "questions": [
      {
        "type": "choice",
        "stem": "下列 C++ 基础类型中，通常占用 4 个字节的是？",
        "options": [
          "char",
          "short",
          "int",
          "bool"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "在多数平台 int 为 4 字节。"
      },
      {
        "type": "choice",
        "stem": "字符串 'abc' 的长度是？",
        "options": [
          "2",
          "3",
          "4",
          "0"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "三个字符，长度为 3。"
      },
      {
        "type": "choice",
        "stem": "下列哪种说法是正确的？",
        "options": [
          "print(3/2) 输出 1",
          "print(3/2) 输出 1.5",
          "3/2 报错",
          "3/2 输出 3"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "Python 中 / 为浮点除，3/2=1.5。"
      },
      {
        "type": "choice",
        "stem": "若 a=5, b=2，Python 表达式 a // b 的值是？",
        "options": [
          "2.5",
          "2",
          "3",
          "2.0"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "// 为整除，5//2=2。"
      },
      {
        "type": "judge",
        "stem": "while 循环条件永远为真时会正常自行结束。",
        "answer": "F",
        "score": 5,
        "analysis": "这将构成死循环。"
      },
      {
        "type": "judge",
        "stem": "字符串 'abc' 的长度是 3。",
        "answer": "T",
        "score": 5,
        "analysis": "三个字符。"
      },
      {
        "type": "program",
        "score": 20,
        "analysis": "遍历，能被 2 整除即计数。",
        "desc": "输入第一行整数 n（1 ≤ n ≤ 100），第二行是 n 个整数。请输出其中偶数的个数。",
        "input": "第一行 n；第二行 n 个整数。",
        "output": "偶数个数。",
        "samples": [
          {
            "input": "5\n1 2 3 4 5",
            "output": "2"
          },
          {
            "input": "4\n2 4 6 8",
            "output": "4"
          }
        ],
        "solutions": {
          "python": "import sys\nv=list(map(int,sys.stdin.read().split()))\nn=v[0]\nc=sum(1 for x in v[1:1+n] if x%2==0)\nprint(c)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;int c=0;\nfor(int i=0;i<n;i++){int x;cin>>x;if(x%2==0)c++;}\ncout<<c<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();int c=0;\n    for(int i=0;i<n;i++){int x=sc.nextInt();if(x%2==0)c++;}\n    System.out.println(c);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXPYTHON022",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Python 软件编程等级考试（2级）真题卷（大纲同步）",
    "level": "2级",
    "duration": 60,
    "year": "2026",
    "lang": "python",
    "questions": [
      {
        "type": "choice",
        "stem": "下列 C++ 基础类型中，通常占用 4 个字节的是？",
        "options": [
          "char",
          "short",
          "int",
          "bool"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "在多数平台 int 为 4 字节。"
      },
      {
        "type": "choice",
        "stem": "while 循环的特点是？",
        "options": [
          "至少执行一次",
          "条件为真时重复",
          "只能计数",
          "不能嵌套"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "while 在条件为真时反复执行。"
      },
      {
        "type": "choice",
        "stem": "字符串 'abc' 的长度是？",
        "options": [
          "2",
          "3",
          "4",
          "0"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "三个字符，长度为 3。"
      },
      {
        "type": "choice",
        "stem": "算法的哪一特性保证每一步都有确切含义？",
        "options": [
          "有穷性",
          "确定性",
          "可行性",
          "输入"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "确定性要求每一步无歧义。"
      },
      {
        "type": "judge",
        "stem": "布尔类型只有真和假两种取值。",
        "answer": "T",
        "score": 5,
        "analysis": "bool 仅 True/False。"
      },
      {
        "type": "judge",
        "stem": "for 循环只能遍历数字。",
        "answer": "F",
        "score": 5,
        "analysis": "还可遍历字符串、列表等可迭代对象。"
      },
      {
        "type": "program",
        "score": 20,
        "analysis": "在极值基础上求第二大：先找最大值，再在严格小于最大值的数中找最大。",
        "desc": "输入 n 和 n 个整数，输出严格小于最大值中的最大者（即第二大）。",
        "input": "第一行 n；第二行 n 个整数。",
        "output": "第二大值。",
        "samples": [
          {
            "input": "5\n3 9 9 4 1",
            "output": "4"
          },
          {
            "input": "4\n5 5 2 8",
            "output": "5"
          }
        ],
        "solutions": {
          "python": "import sys\nv=list(map(int,sys.stdin.read().split()))\nn=v[0];a=v[1:1+n]\nmx=max(a);\ncand=[x for x in a if x<mx]\nprint(max(cand) if cand else mx)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int i=0;i<n;i++)cin>>a[i];\nint mx=*max_element(a.begin(),a.end());\nint sm=-2e9;bool f=false;\nfor(int x:a)if(x<mx){if(!f||x>sm){sm=x;f=true;}}\ncout<<(f?sm:mx)<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();int[]a=new int[n];\n    for(int i=0;i<n;i++)a[i]=sc.nextInt();\n    int mx=Arrays.stream(a).max().getAsInt();\n    int sm=(int)-2e9;boolean f=false;\n    for(int x:a)if(x<mx){if(!f||x>sm){sm=x;f=true;}}\n    System.out.println(f?sm:mx);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXPYTHON030",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Python 软件编程等级考试（3级）模拟卷（一）",
    "level": "3级",
    "duration": 90,
    "year": "2026",
    "lang": "python",
    "questions": [
      {
        "type": "choice",
        "stem": "下列算法中属于分治思想的是？",
        "options": [
          "冒泡排序",
          "归并排序",
          "选择排序",
          "插入排序"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "归并排序先分后治。"
      },
      {
        "type": "choice",
        "stem": "冒泡排序的时间复杂度是？",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(log n)"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "两两比较，约 n^2/2 次比较。"
      },
      {
        "type": "choice",
        "stem": "枚举算法的核心思想是？",
        "options": [
          "分治",
          "逐一尝试所有可能",
          "贪心",
          "动态规划"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "把解空间全部尝试一遍。"
      },
      {
        "type": "choice",
        "stem": "朴素递归实现斐波那契的时间复杂度近似为？",
        "options": [
          "O(n)",
          "O(2^n)",
          "O(log n)",
          "O(n^2)"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "存在大量重复子问题，呈指数级。"
      },
      {
        "type": "judge",
        "stem": "哈希表查找的平均时间复杂度是 O(1)。",
        "answer": "T",
        "score": 5,
        "analysis": "理想情况下常数时间。"
      },
      {
        "type": "judge",
        "stem": "快速排序在最坏情况下退化为 O(n^2)。",
        "answer": "T",
        "score": 5,
        "analysis": "每次极不平衡划分时。"
      },
      {
        "type": "program",
        "score": 25,
        "analysis": "把数字反转后与原数比较是否相等。",
        "desc": "输入一个非负整数 n（0 ≤ n ≤ 10^9），若其十进制表示是回文数（正读反读相同）输出 Yes，否则 No。",
        "input": "一行，非负整数 n。",
        "output": "Yes 或 No。",
        "samples": [
          {
            "input": "121",
            "output": "Yes"
          },
          {
            "input": "123",
            "output": "No"
          }
        ],
        "solutions": {
          "python": "import sys\ns=sys.stdin.read().strip()\nprint(\"Yes\" if s==s[::-1] else \"No\")",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring s;cin>>s;string t=s;reverse(t.begin(),t.end());\ncout<<(s==t?\"Yes\":\"No\")<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    String s=sc.next();\n    String t=new StringBuilder(s).reverse().toString();\n    System.out.println(s.equals(t)?\"Yes\":\"No\");\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXPYTHON031",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Python 软件编程等级考试（3级）模拟卷（二）",
    "level": "3级",
    "duration": 90,
    "year": "2026",
    "lang": "python",
    "questions": [
      {
        "type": "choice",
        "stem": "按值传递参数时，修改形参会影响实参吗？",
        "options": [
          "会",
          "不会",
          "视语言而定",
          "总是"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "按值传递复制的是副本（基本类型）。"
      },
      {
        "type": "choice",
        "stem": "队列的特点是？",
        "options": [
          "先进先出",
          "后进先出",
          "随机访问",
          "只能写"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "队列是 FIFO。"
      },
      {
        "type": "choice",
        "stem": "朴素递归实现斐波那契的时间复杂度近似为？",
        "options": [
          "O(n)",
          "O(2^n)",
          "O(log n)",
          "O(n^2)"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "存在大量重复子问题，呈指数级。"
      },
      {
        "type": "choice",
        "stem": "线性查找最坏情况下的比较次数是？",
        "options": [
          "1",
          "n/2",
          "n",
          "n+1"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "可能要遍历全部 n 个元素。"
      },
      {
        "type": "judge",
        "stem": "归并排序是稳定的排序算法。",
        "answer": "T",
        "score": 5,
        "analysis": "相等元素相对次序保持不变。"
      },
      {
        "type": "judge",
        "stem": "快速排序在最坏情况下退化为 O(n^2)。",
        "answer": "T",
        "score": 5,
        "analysis": "每次极不平衡划分时。"
      },
      {
        "type": "program",
        "score": 25,
        "analysis": "试除到 sqrt(n)。",
        "desc": "密码学入门：输入 n，若 n 只有 1 和自身两个正因数输出 Yes，否则 No。",
        "input": "一行，整数 n。",
        "output": "Yes 或 No。",
        "samples": [
          {
            "input": "17",
            "output": "Yes"
          },
          {
            "input": "9",
            "output": "No"
          }
        ],
        "solutions": {
          "python": "import sys,math\nn=int(sys.stdin.read().strip())\nok=True\nif n<2:ok=False\nelse:\n    i=2\n    while i*i<=n:\n        if n%i==0:ok=False;break\n        i+=1\nprint(\"Yes\" if ok else \"No\")",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long n;cin>>n;bool ok=true;\nif(n<2)ok=false;\nelse{for(long long i=2;i*i<=n;i++){if(n%i==0){ok=false;break;}}\ncout<<(ok?\"Yes\":\"No\")<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long n=sc.nextLong();boolean ok=true;\n    if(n<2)ok=false;\n    else{for(long i=2;i*i<=n;i++){if(n%i==0){ok=false;break;}}\n    System.out.println(ok?\"Yes\":\"No\");\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXPYTHON032",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Python 软件编程等级考试（3级）真题卷（大纲同步）",
    "level": "3级",
    "duration": 90,
    "year": "2026",
    "lang": "python",
    "questions": [
      {
        "type": "choice",
        "stem": "二维数组 a[3][4] 共有几个元素？",
        "options": [
          "7",
          "12",
          "16",
          "34"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "3×4=12。"
      },
      {
        "type": "choice",
        "stem": "下列算法中属于分治思想的是？",
        "options": [
          "冒泡排序",
          "归并排序",
          "选择排序",
          "插入排序"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "归并排序先分后治。"
      },
      {
        "type": "choice",
        "stem": "队列的特点是？",
        "options": [
          "先进先出",
          "后进先出",
          "随机访问",
          "只能写"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "队列是 FIFO。"
      },
      {
        "type": "choice",
        "stem": "枚举算法的核心思想是？",
        "options": [
          "分治",
          "逐一尝试所有可能",
          "贪心",
          "动态规划"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "把解空间全部尝试一遍。"
      },
      {
        "type": "judge",
        "stem": "哈希表查找的平均时间复杂度是 O(1)。",
        "answer": "T",
        "score": 5,
        "analysis": "理想情况下常数时间。"
      },
      {
        "type": "judge",
        "stem": "归并排序是稳定的排序算法。",
        "answer": "T",
        "score": 5,
        "analysis": "相等元素相对次序保持不变。"
      },
      {
        "type": "program",
        "score": 25,
        "analysis": "双重循环枚举所有 i<j。",
        "desc": "凑数游戏：输入 n、目标和 t 与 n 个数，统计能凑出 t 的（无序）数对个数。",
        "input": "第一行 n t；第二行 n 个数。",
        "output": "数对个数。",
        "samples": [
          {
            "input": "5 9\n1 2 7 4 5",
            "output": "2"
          },
          {
            "input": "4 10\n1 9 2 8",
            "output": "2"
          }
        ],
        "solutions": {
          "python": "import sys\nv=list(map(int,sys.stdin.read().split()))\nn=v[0];t=v[1]\na=v[2:2+n]\nc=0\nfor i in range(n):\n    for j in range(i+1,n):\n        if a[i]+a[j]==t:c+=1\nprint(c)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;long long t;cin>>n>>t;vector<long long>a(n);\nfor(int i=0;i<n;i++)cin>>a[i];\nint c=0;\nfor(int i=0;i<n;i++)for(int j=i+1;j<n;j++)if(a[i]+a[j]==t)c++;\ncout<<c<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();long t=sc.nextLong();long[] a=new long[n];\n    for(int i=0;i<n;i++)a[i]=sc.nextLong();\n    int c=0;\n    for(int i=0;i<n;i++)for(int j=i+1;j<n;j++)if(a[i]+a[j]==t)c++;\n    System.out.println(c);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXPYTHON040",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Python 软件编程等级考试（4级）模拟卷（一）",
    "level": "4级",
    "duration": 90,
    "year": "2026",
    "lang": "python",
    "questions": [
      {
        "type": "choice",
        "stem": "线性查找最坏情况下的比较次数是？",
        "options": [
          "1",
          "n/2",
          "n",
          "n+1"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "可能要遍历全部 n 个元素。"
      },
      {
        "type": "choice",
        "stem": "递归函数必须包含什么才能正常结束？",
        "options": [
          "循环",
          "基准（终止）条件",
          "全局变量",
          "数组"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "递归需要基准情形避免无限递归。"
      },
      {
        "type": "choice",
        "stem": "枚举算法的核心思想是？",
        "options": [
          "分治",
          "逐一尝试所有可能",
          "贪心",
          "动态规划"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "把解空间全部尝试一遍。"
      },
      {
        "type": "choice",
        "stem": "朴素递归实现斐波那契的时间复杂度近似为？",
        "options": [
          "O(n)",
          "O(2^n)",
          "O(log n)",
          "O(n^2)"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "存在大量重复子问题，呈指数级。"
      },
      {
        "type": "judge",
        "stem": "函数内部定义的变量默认是全局变量。",
        "answer": "F",
        "score": 5,
        "analysis": "未声明 global 的是局部变量。"
      },
      {
        "type": "judge",
        "stem": "递归一定比迭代执行得更快。",
        "answer": "F",
        "score": 5,
        "analysis": "递归有调用开销，未必更快。"
      },
      {
        "type": "program",
        "score": 25,
        "analysis": "最小公倍数 = a / gcd(a,b) * b，注意先除后乘防溢出。",
        "desc": "输入两个正整数 a, b（1 ≤ a, b ≤ 10^9），输出它们的最小公倍数（lcm）。",
        "input": "一行，a b。",
        "output": "最小公倍数。",
        "samples": [
          {
            "input": "4 6",
            "output": "12"
          },
          {
            "input": "3 5",
            "output": "15"
          }
        ],
        "solutions": {
          "python": "import sys,math\na,b=map(int,sys.stdin.read().split())\nprint(a//math.gcd(a,b)*b)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nlong long gcd(long long a,long long b){while(b){long long t=a%b;a=b;b=t;}return a;}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long a,b;cin>>a>>b;\nlong long g=gcd(a,b);\ncout<<a/g*b<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long a=sc.nextLong(),b=sc.nextLong();\n    long g=a;long t=b;while(t!=0){long x=g%t;g=t;t=x;}\n    System.out.println(a/g*b);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXPYTHON041",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Python 软件编程等级考试（4级）模拟卷（二）",
    "level": "4级",
    "duration": 90,
    "year": "2026",
    "lang": "python",
    "questions": [
      {
        "type": "choice",
        "stem": "递归函数必须包含什么才能正常结束？",
        "options": [
          "循环",
          "基准（终止）条件",
          "全局变量",
          "数组"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "递归需要基准情形避免无限递归。"
      },
      {
        "type": "choice",
        "stem": "线性查找最坏情况下的比较次数是？",
        "options": [
          "1",
          "n/2",
          "n",
          "n+1"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "可能要遍历全部 n 个元素。"
      },
      {
        "type": "choice",
        "stem": "枚举算法的核心思想是？",
        "options": [
          "分治",
          "逐一尝试所有可能",
          "贪心",
          "动态规划"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "把解空间全部尝试一遍。"
      },
      {
        "type": "choice",
        "stem": "冒泡排序的时间复杂度是？",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(log n)"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "两两比较，约 n^2/2 次比较。"
      },
      {
        "type": "judge",
        "stem": "二分查找可以在无序数组上直接使用。",
        "answer": "F",
        "score": 5,
        "analysis": "必须有序。"
      },
      {
        "type": "judge",
        "stem": "递归一定比迭代执行得更快。",
        "answer": "F",
        "score": 5,
        "analysis": "递归有调用开销，未必更快。"
      },
      {
        "type": "program",
        "score": 25,
        "analysis": "辗转相除。",
        "desc": "分数化简：输入分子分母 a, b，输出约分所需的分子分母最大公因数。",
        "input": "一行，两个整数 a b。",
        "output": "最大公因数。",
        "samples": [
          {
            "input": "12 18",
            "output": "6"
          },
          {
            "input": "7 13",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys,math\na,b=map(int,sys.stdin.read().split())\nprint(math.gcd(a,b))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nlong long gcd(long long a,long long b){while(b){long long t=a%b;a=b;b=t;}return a;}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long a,b;cin>>a>>b;cout<<gcd(a,b)<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long a=sc.nextLong(),b=sc.nextLong();\n    while(b!=0){long t=a%b;a=b;b=t;}\n    System.out.println(a);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXPYTHON042",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Python 软件编程等级考试（4级）真题卷（大纲同步）",
    "level": "4级",
    "duration": 90,
    "year": "2026",
    "lang": "python",
    "questions": [
      {
        "type": "choice",
        "stem": "递归函数必须包含什么才能正常结束？",
        "options": [
          "循环",
          "基准（终止）条件",
          "全局变量",
          "数组"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "递归需要基准情形避免无限递归。"
      },
      {
        "type": "choice",
        "stem": "二维数组 a[3][4] 共有几个元素？",
        "options": [
          "7",
          "12",
          "16",
          "34"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "3×4=12。"
      },
      {
        "type": "choice",
        "stem": "按值传递参数时，修改形参会影响实参吗？",
        "options": [
          "会",
          "不会",
          "视语言而定",
          "总是"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "按值传递复制的是副本（基本类型）。"
      },
      {
        "type": "choice",
        "stem": "枚举算法的核心思想是？",
        "options": [
          "分治",
          "逐一尝试所有可能",
          "贪心",
          "动态规划"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "把解空间全部尝试一遍。"
      },
      {
        "type": "judge",
        "stem": "二分查找可以在无序数组上直接使用。",
        "answer": "F",
        "score": 5,
        "analysis": "必须有序。"
      },
      {
        "type": "judge",
        "stem": "递归一定比迭代执行得更快。",
        "answer": "F",
        "score": 5,
        "analysis": "递归有调用开销，未必更快。"
      },
      {
        "type": "program",
        "score": 25,
        "analysis": "双重循环枚举所有 i<j。",
        "desc": "凑数游戏：输入 n、目标和 t 与 n 个数，统计能凑出 t 的（无序）数对个数。",
        "input": "第一行 n t；第二行 n 个数。",
        "output": "数对个数。",
        "samples": [
          {
            "input": "5 9\n1 2 7 4 5",
            "output": "2"
          },
          {
            "input": "4 10\n1 9 2 8",
            "output": "2"
          }
        ],
        "solutions": {
          "python": "import sys\nv=list(map(int,sys.stdin.read().split()))\nn=v[0];t=v[1]\na=v[2:2+n]\nc=0\nfor i in range(n):\n    for j in range(i+1,n):\n        if a[i]+a[j]==t:c+=1\nprint(c)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;long long t;cin>>n>>t;vector<long long>a(n);\nfor(int i=0;i<n;i++)cin>>a[i];\nint c=0;\nfor(int i=0;i<n;i++)for(int j=i+1;j<n;j++)if(a[i]+a[j]==t)c++;\ncout<<c<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();long t=sc.nextLong();long[] a=new long[n];\n    for(int i=0;i<n;i++)a[i]=sc.nextLong();\n    int c=0;\n    for(int i=0;i<n;i++)for(int j=i+1;j<n;j++)if(a[i]+a[j]==t)c++;\n    System.out.println(c);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXPYTHON050",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Python 软件编程等级考试（5级）模拟卷（一）",
    "level": "5级",
    "duration": 90,
    "year": "2026",
    "lang": "python",
    "questions": [
      {
        "type": "choice",
        "stem": "广度优先搜索使用？",
        "options": [
          "栈",
          "队列",
          "树",
          "图"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "BFS 用队列层序扩展。"
      },
      {
        "type": "choice",
        "stem": "求最大公约数的欧几里得算法基于？",
        "options": [
          "a%b==0",
          "gcd(a,b)=gcd(b,a%b)",
          "素数判定",
          "阶乘"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "辗转相除。"
      },
      {
        "type": "choice",
        "stem": "拓扑排序适用于？",
        "options": [
          "有环图",
          "有向无环图",
          "无向图",
          "矩阵"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "DAG 才有拓扑序。"
      },
      {
        "type": "choice",
        "stem": "BFS 求无权图最短路的依据是？",
        "options": [
          "层序扩展",
          "随机选择",
          "贪心",
          "回溯"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "首达即最短。"
      },
      {
        "type": "judge",
        "stem": "一棵树的边数等于顶点数减一。",
        "answer": "T",
        "score": 5,
        "analysis": "树的性质。"
      },
      {
        "type": "judge",
        "stem": "素数有无穷多个。",
        "answer": "T",
        "score": 5,
        "analysis": "欧几里得已证明。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "按 '0' 切分后求最长连续 1 段的长度。",
        "desc": "信号检测：输入 01 串，输出连续信号 1 的最长持续时间（连续 1 的段长）。",
        "input": "一行，01 串。",
        "output": "最长连续 1 长度。",
        "samples": [
          {
            "input": "110111",
            "output": "3"
          },
          {
            "input": "000",
            "output": "0"
          }
        ],
        "solutions": {
          "python": "import sys\ns=sys.stdin.read().strip()\nif '1' not in s:print(0)\nelse:print(max(len(x) for x in s.split('0')))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring s;cin>>s;int cur=0,best=0;\nfor(char c:s){if(c=='1'){cur++;if(cur>best)best=cur;}else cur=0;}\ncout<<best<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    String s=sc.next();int cur=0,best=0;\n    for(int i=0;i<s.length();i++){char c=s.charAt(i);\n      if(c=='1'){cur++;if(cur>best)best=cur;}else cur=0;}\n    System.out.println(best);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "O(n^2) DP：dp[i]=以 a[i] 结尾的最长上升子序列长度。",
        "desc": "输入 n 和 n 个整数，输出其中最长严格递增子序列的长度。",
        "input": "n，然后 n 个整数。",
        "output": "最长上升子序列长度。",
        "samples": [
          {
            "input": "6\n1 3 2 5 4 6",
            "output": "4"
          },
          {
            "input": "5\n5 4 3 2 1",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys\nv=list(map(int,sys.stdin.read().split()))\nn=v[0];a=v[1:1+n]\ndp=[1]*n\nfor i in range(n):\n    for j in range(i):\n        if a[j]<a[i]:dp[i]=max(dp[i],dp[j]+1)\nprint(max(dp))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int i=0;i<n;i++)cin>>a[i];\nvector<int>dp(n,1);int mx=1;\nfor(int i=0;i<n;i++)for(int j=0;j<i;j++)\n  if(a[j]<a[i])dp[i]=max(dp[i],dp[j]+1);\nfor(int i=0;i<n;i++)mx=max(mx,dp[i]);\ncout<<mx<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();int[]a=new int[n];\n    for(int i=0;i<n;i++)a[i]=sc.nextInt();\n    int[]dp=new int[n];int mx=1;\n    for(int i=0;i<n;i++){dp[i]=1;\n      for(int j=0;j<i;j++)if(a[j]<a[i])dp[i]=Math.max(dp[i],dp[j]+1);\n      mx=Math.max(mx,dp[i]);}\n    System.out.println(mx);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXPYTHON051",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Python 软件编程等级考试（5级）模拟卷（二）",
    "level": "5级",
    "duration": 90,
    "year": "2026",
    "lang": "python",
    "questions": [
      {
        "type": "choice",
        "stem": "广度优先搜索使用？",
        "options": [
          "栈",
          "队列",
          "树",
          "图"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "BFS 用队列层序扩展。"
      },
      {
        "type": "choice",
        "stem": "BFS 求无权图最短路的依据是？",
        "options": [
          "层序扩展",
          "随机选择",
          "贪心",
          "回溯"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "首达即最短。"
      },
      {
        "type": "choice",
        "stem": "0-1 背包问题通常归类为？",
        "options": [
          "贪心",
          "动态规划",
          "分治",
          "回溯"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "具有最优子结构，用 DP 求解。"
      },
      {
        "type": "choice",
        "stem": "哈希冲突难以避免的根本原因是？",
        "options": [
          "算法错误",
          "桶（空间）有限",
          "语言限制",
          "内存太小"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "映射空间小于键空间。"
      },
      {
        "type": "judge",
        "stem": "DFS 一定比 BFS 占用更少内存。",
        "answer": "F",
        "score": 5,
        "analysis": "取决于图的结构。"
      },
      {
        "type": "judge",
        "stem": "动态规划在满足最优子结构时能得到全局最优。",
        "answer": "T",
        "score": 5,
        "analysis": "DP 的正确性基础。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "埃氏筛标记合数后统计。",
        "desc": "输入 n（1 ≤ n ≤ 10^6），统计 1 到 n 之间素数的个数。",
        "input": "一行，整数 n。",
        "output": "素数个数。",
        "samples": [
          {
            "input": "10",
            "output": "4"
          },
          {
            "input": "20",
            "output": "8"
          }
        ],
        "solutions": {
          "python": "import sys\nn=int(sys.stdin.read().strip())\nif n<2:print(0)\nelse:\n    isp=[True]*(n+1);isp[0]=isp[1]=False\n    i=2\n    while i*i<=n:\n        if isp[i]:\n            for j in range(i*i,n+1,i):isp[j]=False\n        i+=1\n    print(sum(isp))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;if(n<2){cout<<0<<endl;return 0;}\nvector<bool>isp(n+1,true);isp[0]=isp[1]=false;\nfor(int i=2;i*i<=n;i++)if(isp[i])\n  for(int j=i*i;j<=n;j+=i)isp[j]=false;\nint c=0;for(int i=2;i<=n;i++)if(isp[i])c++;\ncout<<c<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();\n    if(n<2){System.out.println(0);return;}\n    boolean[] isp=new boolean[n+1];Arrays.fill(isp,true);isp[0]=isp[1]=false;\n    for(int i=2;i*i<=n;i++)if(isp[i])\n      for(int j=i*i;j<=n;j+=i)isp[j]=false;\n    int c=0;for(int i=2;i<=n;i++)if(isp[i])c++;\n    System.out.println(c);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "O(n^2) DP：dp[i]=以 a[i] 结尾的最长上升子序列长度。",
        "desc": "输入 n 和 n 个整数，输出其中最长严格递增子序列的长度。",
        "input": "n，然后 n 个整数。",
        "output": "最长上升子序列长度。",
        "samples": [
          {
            "input": "6\n1 3 2 5 4 6",
            "output": "4"
          },
          {
            "input": "5\n5 4 3 2 1",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys\nv=list(map(int,sys.stdin.read().split()))\nn=v[0];a=v[1:1+n]\ndp=[1]*n\nfor i in range(n):\n    for j in range(i):\n        if a[j]<a[i]:dp[i]=max(dp[i],dp[j]+1)\nprint(max(dp))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int i=0;i<n;i++)cin>>a[i];\nvector<int>dp(n,1);int mx=1;\nfor(int i=0;i<n;i++)for(int j=0;j<i;j++)\n  if(a[j]<a[i])dp[i]=max(dp[i],dp[j]+1);\nfor(int i=0;i<n;i++)mx=max(mx,dp[i]);\ncout<<mx<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();int[]a=new int[n];\n    for(int i=0;i<n;i++)a[i]=sc.nextInt();\n    int[]dp=new int[n];int mx=1;\n    for(int i=0;i<n;i++){dp[i]=1;\n      for(int j=0;j<i;j++)if(a[j]<a[i])dp[i]=Math.max(dp[i],dp[j]+1);\n      mx=Math.max(mx,dp[i]);}\n    System.out.println(mx);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXPYTHON052",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Python 软件编程等级考试（5级）真题卷（大纲同步）",
    "level": "5级",
    "duration": 90,
    "year": "2026",
    "lang": "python",
    "questions": [
      {
        "type": "choice",
        "stem": "求最大公约数的欧几里得算法基于？",
        "options": [
          "a%b==0",
          "gcd(a,b)=gcd(b,a%b)",
          "素数判定",
          "阶乘"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "辗转相除。"
      },
      {
        "type": "choice",
        "stem": "0-1 背包问题通常归类为？",
        "options": [
          "贪心",
          "动态规划",
          "分治",
          "回溯"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "具有最优子结构，用 DP 求解。"
      },
      {
        "type": "choice",
        "stem": "动态规划与分治的主要区别是？",
        "options": [
          "都递推",
          "子问题是否重叠",
          "都用栈",
          "都贪心"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "DP 的子问题重叠并可查表复用。"
      },
      {
        "type": "choice",
        "stem": "DFS 遍历图时用什么标记已访问？",
        "options": [
          "数组/visited",
          "排序",
          "清空栈",
          "队列"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "用 visited 数组避免重复访问。"
      },
      {
        "type": "judge",
        "stem": "素数有无穷多个。",
        "answer": "T",
        "score": 5,
        "analysis": "欧几里得已证明。"
      },
      {
        "type": "judge",
        "stem": "Dijkstra 算法不能处理带负权边的图。",
        "answer": "T",
        "score": 5,
        "analysis": "负权会破坏其贪心正确性。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "O(n^2) DP：dp[i]=以 a[i] 结尾的最长上升子序列长度。",
        "desc": "输入第一行 n（1 ≤ n ≤ 1000），第二行是 n 个整数。输出最长严格上升子序列（LIS）的长度。",
        "input": "n，然后 n 个整数。",
        "output": "LIS 长度。",
        "samples": [
          {
            "input": "6\n1 3 2 5 4 6",
            "output": "4"
          },
          {
            "input": "5\n5 4 3 2 1",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys\nv=list(map(int,sys.stdin.read().split()))\nn=v[0];a=v[1:1+n]\ndp=[1]*n\nfor i in range(n):\n    for j in range(i):\n        if a[j]<a[i]:dp[i]=max(dp[i],dp[j]+1)\nprint(max(dp))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int i=0;i<n;i++)cin>>a[i];\nvector<int>dp(n,1);int mx=1;\nfor(int i=0;i<n;i++)for(int j=0;j<i;j++)\n  if(a[j]<a[i])dp[i]=max(dp[i],dp[j]+1);\nfor(int i=0;i<n;i++)mx=max(mx,dp[i]);\ncout<<mx<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();int[]a=new int[n];\n    for(int i=0;i<n;i++)a[i]=sc.nextInt();\n    int[]dp=new int[n];int mx=1;\n    for(int i=0;i<n;i++){dp[i]=1;\n      for(int j=0;j<i;j++)if(a[j]<a[i])dp[i]=Math.max(dp[i],dp[j]+1);\n      mx=Math.max(mx,dp[i]);}\n    System.out.println(mx);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "对每个未访问的 '#' 做 DFS/BFS 标记整个连通块。",
        "desc": "输入第一行 h, w（1 ≤ h, w ≤ 20），随后 h 行每行 w 个字符（'#' 为岛屿，'.' 为海）。输出岛屿（四连通）的个数。",
        "input": "h w，然后 h 行字符图。",
        "output": "岛屿连通块个数。",
        "samples": [
          {
            "input": "3 3\n#..\n.#. \n..#",
            "output": "3"
          },
          {
            "input": "2 2\n##\n##",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nh=int(data[0]);w=int(data[1])\ng=data[2:2+h]\nvis=[[False]*w for _ in range(h)]\ndef dfs(i,j):\n    vis[i][j]=True\n    for di,dj in((1,0),(-1,0),(0,1),(0,-1)):\n        ni,nj=i+di,j+dj\n        if 0<=ni<h and 0<=nj<w and not vis[ni][nj] and g[ni][nj]=='#':dfs(ni,nj)\ncnt=0\nfor i in range(h):\n    for j in range(w):\n        if g[i][j]=='#' and not vis[i][j]:\n            dfs(i,j);cnt+=1\nprint(cnt)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint h,w;vector<string>g;vector<vector<bool>>vis;\nvoid dfs(int i,int j){vis[i][j]=true;\n  int d[4][2]={{1,0},{-1,0},{0,1},{0,-1}};\n  for(int k=0;k<4;k++){int ni=i+d[k][0],nj=j+d[k][1];\n    if(ni>=0&&ni<h&&nj>=0&&nj<w&&!vis[ni][nj]&&g[ni][nj]=='#')dfs(ni,nj);}}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\ncin>>h>>w;g.resize(h);for(int i=0;i<h;i++)cin>>g[i];\nvis.assign(h,vector<bool>(w,false));\nint cnt=0;\nfor(int i=0;i<h;i++)for(int j=0;j<w;j++)\n  if(g[i][j]=='#'&&!vis[i][j]){dfs(i,j);cnt++;}\ncout<<cnt<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  static int h,w;static char[][]g;static boolean[][]vis;\n  static void dfs(int i,int j){vis[i][j]=true;\n    int[]di={1,-1,0,0},dj={0,0,1,-1};\n    for(int k=0;k<4;k++){int ni=i+di[k],nj=j+dj[k];\n      if(ni>=0&&ni<h&&nj>=0&&nj<w&&!vis[ni][nj]&&g[ni][nj]=='#')dfs(ni,nj);}}\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    h=sc.nextInt();w=sc.nextInt();g=new char[h][w];\n    for(int i=0;i<h;i++)g[i]=sc.next().toCharArray();\n    vis=new boolean[h][w];int cnt=0;\n    for(int i=0;i<h;i++)for(int j=0;j<w;j++)\n      if(g[i][j]=='#'&&!vis[i][j]){dfs(i,j);cnt++;}\n    System.out.println(cnt);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXPYTHON060",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Python 软件编程等级考试（6级）模拟卷（一）",
    "level": "6级",
    "duration": 90,
    "year": "2026",
    "lang": "python",
    "questions": [
      {
        "type": "choice",
        "stem": "埃氏筛法的时间复杂度约为？",
        "options": [
          "O(n)",
          "O(n log log n)",
          "O(n^2)",
          "O(log n)"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "经典结论 O(n log log n)。"
      },
      {
        "type": "choice",
        "stem": "0-1 背包问题通常归类为？",
        "options": [
          "贪心",
          "动态规划",
          "分治",
          "回溯"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "具有最优子结构，用 DP 求解。"
      },
      {
        "type": "choice",
        "stem": "深度优先搜索通常借助哪种结构实现？",
        "options": [
          "队列",
          "栈",
          "堆",
          "数组"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "DFS 用递归或显式栈。"
      },
      {
        "type": "choice",
        "stem": "广度优先搜索使用？",
        "options": [
          "栈",
          "队列",
          "树",
          "图"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "BFS 用队列层序扩展。"
      },
      {
        "type": "judge",
        "stem": "DFS 一定比 BFS 占用更少内存。",
        "answer": "F",
        "score": 5,
        "analysis": "取决于图的结构。"
      },
      {
        "type": "judge",
        "stem": "哈希表在冲突严重时可能退化，变慢。",
        "answer": "T",
        "score": 5,
        "analysis": "退化为链表式查找。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "用计数器，遇 '(' 加一、遇 ')' 减一，过程中不可为负，结束应为 0。",
        "desc": "编译器括号检查：输入仅含 ( 和 ) 的字符串，输出是否合法配对。",
        "input": "一行，括号字符串。",
        "output": "Yes 或 No。",
        "samples": [
          {
            "input": "()(())",
            "output": "Yes"
          },
          {
            "input": "(()",
            "output": "No"
          }
        ],
        "solutions": {
          "python": "import sys\ns=sys.stdin.read().strip()\nbal=0\nfor ch in s:\n    if ch=='(':bal+=1\n    else:\n        bal-=1\n        if bal<0:break\nprint(\"Yes\" if bal==0 else \"No\")",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring s;cin>>s;int bal=0;bool ok=true;\nfor(char c:s){if(c=='(')bal++;else{bal--;if(bal<0){ok=false;break;}}}\ncout<<((ok&&bal==0)?\"Yes\":\"No\")<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    String s=sc.next();int bal=0;boolean ok=true;\n    for(int i=0;i<s.length();i++){char c=s.charAt(i);\n      if(c=='(')bal++;else{bal--;if(bal<0){ok=false;break;}}}\n    System.out.println((ok&&bal==0)?\"Yes\":\"No\");\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "0-1 背包，逆序更新 DP。",
        "desc": "输入 n 和容量 C，以及 n 个（重量, 价值）对，输出背包能装下的最大价值。",
        "input": "n C，然后 n 行 w v。",
        "output": "最大价值。",
        "samples": [
          {
            "input": "3 10\n2 6\n3 8\n5 12",
            "output": "26"
          },
          {
            "input": "2 5\n2 3\n3 4",
            "output": "7"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nn=int(data[0]);C=int(data[1])\ndp=[0]*(C+1)\nidx=2\nfor _ in range(n):\n    w=int(data[idx]);v=int(data[idx+1]);idx+=2\n    for cap in range(C,w-1,-1):\n        if dp[cap-w]+v>dp[cap]:dp[cap]=dp[cap-w]+v\nprint(max(dp))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,C;cin>>n>>C;vector<int>dp(C+1,0);\nfor(int i=0;i<n;i++){int w,v;cin>>w>>v;\n  for(int c=C;c>=w;c--)if(dp[c-w]+v>dp[c])dp[c]=dp[c-w]+v;}\ncout<<*max_element(dp.begin(),dp.end())<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt(),C=sc.nextInt();\n    int[]dp=new int[C+1];\n    for(int i=0;i<n;i++){int w=sc.nextInt(),v=sc.nextInt();\n      for(int c=C;c>=w;c--)if(dp[c-w]+v>dp[c])dp[c]=dp[c-w]+v;}\n    int mx=0;for(int x:dp)if(x>mx)mx=x;\n    System.out.println(mx);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXPYTHON061",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Python 软件编程等级考试（6级）模拟卷（二）",
    "level": "6级",
    "duration": 90,
    "year": "2026",
    "lang": "python",
    "questions": [
      {
        "type": "choice",
        "stem": "求最大公约数的欧几里得算法基于？",
        "options": [
          "a%b==0",
          "gcd(a,b)=gcd(b,a%b)",
          "素数判定",
          "阶乘"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "辗转相除。"
      },
      {
        "type": "choice",
        "stem": "完全二叉树的叶子节点数大约为？",
        "options": [
          "n/2",
          "n",
          "log n",
          "n-1"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "约一半节点是叶子。"
      },
      {
        "type": "choice",
        "stem": "拓扑排序适用于？",
        "options": [
          "有环图",
          "有向无环图",
          "无向图",
          "矩阵"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "DAG 才有拓扑序。"
      },
      {
        "type": "choice",
        "stem": "埃氏筛法的时间复杂度约为？",
        "options": [
          "O(n)",
          "O(n log log n)",
          "O(n^2)",
          "O(log n)"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "经典结论 O(n log log n)。"
      },
      {
        "type": "judge",
        "stem": "一棵树的边数等于顶点数减一。",
        "answer": "T",
        "score": 5,
        "analysis": "树的性质。"
      },
      {
        "type": "judge",
        "stem": "动态规划在满足最优子结构时能得到全局最优。",
        "answer": "T",
        "score": 5,
        "analysis": "DP 的正确性基础。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "对每个未访问的 '#' 做 DFS/BFS 标记整个连通块。",
        "desc": "输入网格（'#' 为城市，'.' 为空地），输出相连城市块的数量。",
        "input": "h w，然后 h 行字符图。",
        "output": "城市块数量。",
        "samples": [
          {
            "input": "3 3\n#..\n.#. \n..#",
            "output": "3"
          },
          {
            "input": "2 2\n##\n##",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nh=int(data[0]);w=int(data[1])\ng=data[2:2+h]\nvis=[[False]*w for _ in range(h)]\ndef dfs(i,j):\n    vis[i][j]=True\n    for di,dj in((1,0),(-1,0),(0,1),(0,-1)):\n        ni,nj=i+di,j+dj\n        if 0<=ni<h and 0<=nj<w and not vis[ni][nj] and g[ni][nj]=='#':dfs(ni,nj)\ncnt=0\nfor i in range(h):\n    for j in range(w):\n        if g[i][j]=='#' and not vis[i][j]:\n            dfs(i,j);cnt+=1\nprint(cnt)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint h,w;vector<string>g;vector<vector<bool>>vis;\nvoid dfs(int i,int j){vis[i][j]=true;\n  int d[4][2]={{1,0},{-1,0},{0,1},{0,-1}};\n  for(int k=0;k<4;k++){int ni=i+d[k][0],nj=j+d[k][1];\n    if(ni>=0&&ni<h&&nj>=0&&nj<w&&!vis[ni][nj]&&g[ni][nj]=='#')dfs(ni,nj);}}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\ncin>>h>>w;g.resize(h);for(int i=0;i<h;i++)cin>>g[i];\nvis.assign(h,vector<bool>(w,false));\nint cnt=0;\nfor(int i=0;i<h;i++)for(int j=0;j<w;j++)\n  if(g[i][j]=='#'&&!vis[i][j]){dfs(i,j);cnt++;}\ncout<<cnt<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  static int h,w;static char[][]g;static boolean[][]vis;\n  static void dfs(int i,int j){vis[i][j]=true;\n    int[]di={1,-1,0,0},dj={0,0,1,-1};\n    for(int k=0;k<4;k++){int ni=i+di[k],nj=j+dj[k];\n      if(ni>=0&&ni<h&&nj>=0&&nj<w&&!vis[ni][nj]&&g[ni][nj]=='#')dfs(ni,nj);}}\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    h=sc.nextInt();w=sc.nextInt();g=new char[h][w];\n    for(int i=0;i<h;i++)g[i]=sc.next().toCharArray();\n    vis=new boolean[h][w];int cnt=0;\n    for(int i=0;i<h;i++)for(int j=0;j<w;j++)\n      if(g[i][j]=='#'&&!vis[i][j]){dfs(i,j);cnt++;}\n    System.out.println(cnt);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "用计数器，遇 '(' 加一、遇 ')' 减一，过程中不可为负，结束应为 0。",
        "desc": "输入一个仅由 '(' 和 ')' 组成的字符串（长度 ≤ 10^5）。若括号完全匹配输出 Yes，否则输出 No。",
        "input": "一行，括号字符串。",
        "output": "Yes 或 No。",
        "samples": [
          {
            "input": "()(())",
            "output": "Yes"
          },
          {
            "input": "(()",
            "output": "No"
          }
        ],
        "solutions": {
          "python": "import sys\ns=sys.stdin.read().strip()\nbal=0\nfor ch in s:\n    if ch=='(':bal+=1\n    else:\n        bal-=1\n        if bal<0:break\nprint(\"Yes\" if bal==0 else \"No\")",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring s;cin>>s;int bal=0;bool ok=true;\nfor(char c:s){if(c=='(')bal++;else{bal--;if(bal<0){ok=false;break;}}}\ncout<<((ok&&bal==0)?\"Yes\":\"No\")<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    String s=sc.next();int bal=0;boolean ok=true;\n    for(int i=0;i<s.length();i++){char c=s.charAt(i);\n      if(c=='(')bal++;else{bal--;if(bal<0){ok=false;break;}}}\n    System.out.println((ok&&bal==0)?\"Yes\":\"No\");\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXPYTHON062",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Python 软件编程等级考试（6级）真题卷（大纲同步）",
    "level": "6级",
    "duration": 90,
    "year": "2026",
    "lang": "python",
    "questions": [
      {
        "type": "choice",
        "stem": "BFS 求无权图最短路的依据是？",
        "options": [
          "层序扩展",
          "随机选择",
          "贪心",
          "回溯"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "首达即最短。"
      },
      {
        "type": "choice",
        "stem": "埃氏筛法的时间复杂度约为？",
        "options": [
          "O(n)",
          "O(n log log n)",
          "O(n^2)",
          "O(log n)"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "经典结论 O(n log log n)。"
      },
      {
        "type": "choice",
        "stem": "0-1 背包问题通常归类为？",
        "options": [
          "贪心",
          "动态规划",
          "分治",
          "回溯"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "具有最优子结构，用 DP 求解。"
      },
      {
        "type": "choice",
        "stem": "广度优先搜索使用？",
        "options": [
          "栈",
          "队列",
          "树",
          "图"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "BFS 用队列层序扩展。"
      },
      {
        "type": "judge",
        "stem": "Dijkstra 算法不能处理带负权边的图。",
        "answer": "T",
        "score": 5,
        "analysis": "负权会破坏其贪心正确性。"
      },
      {
        "type": "judge",
        "stem": "哈希表在冲突严重时可能退化，变慢。",
        "answer": "T",
        "score": 5,
        "analysis": "退化为链表式查找。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "按 '0' 切分后求最长连续 1 段的长度。",
        "desc": "信号检测：输入 01 串，输出连续信号 1 的最长持续时间（连续 1 的段长）。",
        "input": "一行，01 串。",
        "output": "最长连续 1 长度。",
        "samples": [
          {
            "input": "110111",
            "output": "3"
          },
          {
            "input": "000",
            "output": "0"
          }
        ],
        "solutions": {
          "python": "import sys\ns=sys.stdin.read().strip()\nif '1' not in s:print(0)\nelse:print(max(len(x) for x in s.split('0')))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring s;cin>>s;int cur=0,best=0;\nfor(char c:s){if(c=='1'){cur++;if(cur>best)best=cur;}else cur=0;}\ncout<<best<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    String s=sc.next();int cur=0,best=0;\n    for(int i=0;i<s.length();i++){char c=s.charAt(i);\n      if(c=='1'){cur++;if(cur>best)best=cur;}else cur=0;}\n    System.out.println(best);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "O(n^2) DP：dp[i]=以 a[i] 结尾的最长上升子序列长度。",
        "desc": "输入 n 和 n 个整数，输出其中最长严格递增子序列的长度。",
        "input": "n，然后 n 个整数。",
        "output": "最长上升子序列长度。",
        "samples": [
          {
            "input": "6\n1 3 2 5 4 6",
            "output": "4"
          },
          {
            "input": "5\n5 4 3 2 1",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys\nv=list(map(int,sys.stdin.read().split()))\nn=v[0];a=v[1:1+n]\ndp=[1]*n\nfor i in range(n):\n    for j in range(i):\n        if a[j]<a[i]:dp[i]=max(dp[i],dp[j]+1)\nprint(max(dp))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int i=0;i<n;i++)cin>>a[i];\nvector<int>dp(n,1);int mx=1;\nfor(int i=0;i<n;i++)for(int j=0;j<i;j++)\n  if(a[j]<a[i])dp[i]=max(dp[i],dp[j]+1);\nfor(int i=0;i<n;i++)mx=max(mx,dp[i]);\ncout<<mx<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();int[]a=new int[n];\n    for(int i=0;i<n;i++)a[i]=sc.nextInt();\n    int[]dp=new int[n];int mx=1;\n    for(int i=0;i<n;i++){dp[i]=1;\n      for(int j=0;j<i;j++)if(a[j]<a[i])dp[i]=Math.max(dp[i],dp[j]+1);\n      mx=Math.max(mx,dp[i]);}\n    System.out.println(mx);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXCPP010",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "C++ 软件编程等级考试（1级）模拟卷（一）",
    "level": "1级",
    "duration": 60,
    "year": "2026",
    "lang": "cpp",
    "questions": [
      {
        "type": "choice",
        "stem": "下列哪个是合法的 Python 变量名？",
        "options": [
          "1x",
          "x-y",
          "_sum",
          "for"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "变量名不能以数字开头、不能含减号、不能是关键字。"
      },
      {
        "type": "choice",
        "stem": "下列 C++ 基础类型中，通常占用 4 个字节的是？",
        "options": [
          "char",
          "short",
          "int",
          "bool"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "在多数平台 int 为 4 字节。"
      },
      {
        "type": "choice",
        "stem": "表达式 7 % 3 的值是？",
        "options": [
          "1",
          "2",
          "3",
          "0"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "7 除以 3 余 2。"
      },
      {
        "type": "choice",
        "stem": "Python 中 for i in range(3): 会循环几次？",
        "options": [
          "2",
          "3",
          "4",
          "0"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "range(3) 产生 0、1、2 共 3 个值。"
      },
      {
        "type": "judge",
        "stem": "字符串 'abc' 的长度是 3。",
        "answer": "T",
        "score": 5,
        "analysis": "三个字符。"
      },
      {
        "type": "judge",
        "stem": "布尔类型只有真和假两种取值。",
        "answer": "T",
        "score": 5,
        "analysis": "bool 仅 True/False。"
      },
      {
        "type": "program",
        "score": 20,
        "analysis": "逐位取模乘 10 累积。",
        "desc": "输入一个非负整数 n（0 ≤ n ≤ 10^9），将其十进制数字反转后输出（忽略前导 0）。例如 123→321，100→1，0→0。",
        "input": "一行，非负整数 n。",
        "output": "反转后的整数。",
        "samples": [
          {
            "input": "123",
            "output": "321"
          },
          {
            "input": "100",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys\nn=int(sys.stdin.read().strip())\nr=0\nwhile n>0:\n    r=r*10+n%10\n    n//=10\nprint(r)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long n;cin>>n;long long r=0;\nwhile(n>0){r=r*10+n%10;n/=10;}\ncout<<r<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long n=sc.nextLong();long r=0;\n    while(n>0){r=r*10+n%10;n/=10;}\n    System.out.println(r);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXCPP011",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "C++ 软件编程等级考试（1级）模拟卷（二）",
    "level": "1级",
    "duration": 60,
    "year": "2026",
    "lang": "cpp",
    "questions": [
      {
        "type": "choice",
        "stem": "字符串 'abc' 的长度是？",
        "options": [
          "2",
          "3",
          "4",
          "0"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "三个字符，长度为 3。"
      },
      {
        "type": "choice",
        "stem": "十进制数 13 转换成二进制后是？",
        "options": [
          "1101",
          "1110",
          "1011",
          "1001"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "13=8+4+1=2^3+2^2+2^0，二进制为 1101。"
      },
      {
        "type": "choice",
        "stem": "若 a=5, b=2，Python 表达式 a // b 的值是？",
        "options": [
          "2.5",
          "2",
          "3",
          "2.0"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "// 为整除，5//2=2。"
      },
      {
        "type": "choice",
        "stem": "关于数组下标，下列说法正确的是？",
        "options": [
          "从 1 开始",
          "从 0 开始",
          "可负",
          "随意"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "C/C++/Java/Python 列表下标均从 0 开始。"
      },
      {
        "type": "judge",
        "stem": "Python 中 print(3/2) 输出 1。",
        "answer": "F",
        "score": 5,
        "analysis": "3/2=1.5，输出 1.5。"
      },
      {
        "type": "judge",
        "stem": "while 循环条件永远为真时会正常自行结束。",
        "answer": "F",
        "score": 5,
        "analysis": "这将构成死循环。"
      },
      {
        "type": "program",
        "score": 20,
        "analysis": "边读边维护目标值即可，无需存整个数组。",
        "desc": "山队测量了 n 座山峰的海拔（整数，单位米）。输入第一行 n，第二行 n 个整数，请输出其中最高的海拔。",
        "input": "第一行 n；第二行 n 个整数海拔。",
        "output": "最高海拔（整数）。",
        "samples": [
          {
            "input": "5\n3 9 -2 4 9",
            "output": "9"
          },
          {
            "input": "3\n-5 -8 -1",
            "output": "-1"
          }
        ],
        "solutions": {
          "python": "import sys\nv=list(map(int,sys.stdin.read().split()))\nn=v[0]\nprint(max(v[1:1+n]))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;int mx;cin>>mx;\nfor(int i=1;i<n;i++){int x;cin>>x;if(x>mx)mx=x;}\ncout<<mx<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();int mx=sc.nextInt();\n    for(int i=1;i<n;i++){int x=sc.nextInt();if(x>mx)mx=x;}\n    System.out.println(mx);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXCPP012",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "C++ 软件编程等级考试（1级）真题卷（大纲同步）",
    "level": "1级",
    "duration": 60,
    "year": "2026",
    "lang": "cpp",
    "questions": [
      {
        "type": "choice",
        "stem": "字符串 'abc' 的长度是？",
        "options": [
          "2",
          "3",
          "4",
          "0"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "三个字符，长度为 3。"
      },
      {
        "type": "choice",
        "stem": "Python 中 list 的 append 方法作用是？",
        "options": [
          "删除末尾",
          "末尾添加元素",
          "排序",
          "反转"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "append 在列表末尾追加一个元素。"
      },
      {
        "type": "choice",
        "stem": "关于数组下标，下列说法正确的是？",
        "options": [
          "从 1 开始",
          "从 0 开始",
          "可负",
          "随意"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "C/C++/Java/Python 列表下标均从 0 开始。"
      },
      {
        "type": "choice",
        "stem": "下列哪个是合法的 Python 变量名？",
        "options": [
          "1x",
          "x-y",
          "_sum",
          "for"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "变量名不能以数字开头、不能含减号、不能是关键字。"
      },
      {
        "type": "judge",
        "stem": "布尔类型只有真和假两种取值。",
        "answer": "T",
        "score": 5,
        "analysis": "bool 仅 True/False。"
      },
      {
        "type": "judge",
        "stem": "while 循环条件永远为真时会正常自行结束。",
        "answer": "F",
        "score": 5,
        "analysis": "这将构成死循环。"
      },
      {
        "type": "program",
        "score": 20,
        "analysis": "等差数列求和公式 n*(n+1)/2。",
        "desc": "操场上有编号 1 到 n 的 n 级台阶。输入 n（1 ≤ n ≤ 10000），请输出从第 1 级到第 n 级编号之和。",
        "input": "一行，正整数 n。",
        "output": "编号之和。",
        "samples": [
          {
            "input": "100",
            "output": "5050"
          },
          {
            "input": "10",
            "output": "55"
          }
        ],
        "solutions": {
          "python": "import sys\nn=int(sys.stdin.read().strip())\nprint(n*(n+1)//2)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long n;cin>>n;cout<<n*(n+1)/2<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long n=sc.nextLong();\n    System.out.println(n*(n+1)/2);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXCPP020",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "C++ 软件编程等级考试（2级）模拟卷（一）",
    "level": "2级",
    "duration": 60,
    "year": "2026",
    "lang": "cpp",
    "questions": [
      {
        "type": "choice",
        "stem": "表达式 7 % 3 的值是？",
        "options": [
          "1",
          "2",
          "3",
          "0"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "7 除以 3 余 2。"
      },
      {
        "type": "choice",
        "stem": "Python 中 for i in range(3): 会循环几次？",
        "options": [
          "2",
          "3",
          "4",
          "0"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "range(3) 产生 0、1、2 共 3 个值。"
      },
      {
        "type": "choice",
        "stem": "算法的哪一特性保证每一步都有确切含义？",
        "options": [
          "有穷性",
          "确定性",
          "可行性",
          "输入"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "确定性要求每一步无歧义。"
      },
      {
        "type": "choice",
        "stem": "Python 中 list 的 append 方法作用是？",
        "options": [
          "删除末尾",
          "末尾添加元素",
          "排序",
          "反转"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "append 在列表末尾追加一个元素。"
      },
      {
        "type": "judge",
        "stem": "C++ 中数组下标从 0 开始。",
        "answer": "T",
        "score": 5,
        "analysis": "C/C++ 下标由 0 计起。"
      },
      {
        "type": "judge",
        "stem": "字符串 'abc' 的长度是 3。",
        "answer": "T",
        "score": 5,
        "analysis": "三个字符。"
      },
      {
        "type": "program",
        "score": 20,
        "analysis": "遍历，能被 2 整除即计数。",
        "desc": "仓库记录了 n 件货物的重量（整数，单位 kg）。输入后请输出重量为双数（能被 2 整除）的件数。",
        "input": "第一行 n；第二行 n 个重量。",
        "output": "双数重量件数。",
        "samples": [
          {
            "input": "5\n1 2 3 4 5",
            "output": "2"
          },
          {
            "input": "4\n2 4 6 8",
            "output": "4"
          }
        ],
        "solutions": {
          "python": "import sys\nv=list(map(int,sys.stdin.read().split()))\nn=v[0]\nc=sum(1 for x in v[1:1+n] if x%2==0)\nprint(c)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;int c=0;\nfor(int i=0;i<n;i++){int x;cin>>x;if(x%2==0)c++;}\ncout<<c<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();int c=0;\n    for(int i=0;i<n;i++){int x=sc.nextInt();if(x%2==0)c++;}\n    System.out.println(c);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXCPP021",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "C++ 软件编程等级考试（2级）模拟卷（二）",
    "level": "2级",
    "duration": 60,
    "year": "2026",
    "lang": "cpp",
    "questions": [
      {
        "type": "choice",
        "stem": "下列 C++ 基础类型中，通常占用 4 个字节的是？",
        "options": [
          "char",
          "short",
          "int",
          "bool"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "在多数平台 int 为 4 字节。"
      },
      {
        "type": "choice",
        "stem": "十进制数 13 转换成二进制后是？",
        "options": [
          "1101",
          "1110",
          "1011",
          "1001"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "13=8+4+1=2^3+2^2+2^0，二进制为 1101。"
      },
      {
        "type": "choice",
        "stem": "算法的哪一特性保证每一步都有确切含义？",
        "options": [
          "有穷性",
          "确定性",
          "可行性",
          "输入"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "确定性要求每一步无歧义。"
      },
      {
        "type": "choice",
        "stem": "Python 中 list 的 append 方法作用是？",
        "options": [
          "删除末尾",
          "末尾添加元素",
          "排序",
          "反转"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "append 在列表末尾追加一个元素。"
      },
      {
        "type": "judge",
        "stem": "Python 中 print(3/2) 输出 1。",
        "answer": "F",
        "score": 5,
        "analysis": "3/2=1.5，输出 1.5。"
      },
      {
        "type": "judge",
        "stem": "for 循环只能遍历数字。",
        "answer": "F",
        "score": 5,
        "analysis": "还可遍历字符串、列表等可迭代对象。"
      },
      {
        "type": "program",
        "score": 20,
        "analysis": "不断取个位并除以 10 累加。",
        "desc": "数字预处理：输入 n（0 ≤ n ≤ 10^9），输出其十进制各位相加的结果。",
        "input": "一行，非负整数 n。",
        "output": "相加结果。",
        "samples": [
          {
            "input": "130",
            "output": "4"
          },
          {
            "input": "0",
            "output": "0"
          }
        ],
        "solutions": {
          "python": "import sys\nn=int(sys.stdin.read().strip())\ns=0\nwhile n>0:\n    s+=n%10\n    n//=10\nprint(s)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long n;cin>>n;long long s=0;\nwhile(n>0){s+=n%10;n/=10;}\ncout<<s<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long n=sc.nextLong();long s=0;\n    while(n>0){s+=n%10;n/=10;}\n    System.out.println(s);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXCPP022",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "C++ 软件编程等级考试（2级）真题卷（大纲同步）",
    "level": "2级",
    "duration": 60,
    "year": "2026",
    "lang": "cpp",
    "questions": [
      {
        "type": "choice",
        "stem": "下列哪个是合法的 Python 变量名？",
        "options": [
          "1x",
          "x-y",
          "_sum",
          "for"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "变量名不能以数字开头、不能含减号、不能是关键字。"
      },
      {
        "type": "choice",
        "stem": "十进制数 13 转换成二进制后是？",
        "options": [
          "1101",
          "1110",
          "1011",
          "1001"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "13=8+4+1=2^3+2^2+2^0，二进制为 1101。"
      },
      {
        "type": "choice",
        "stem": "表达式 7 % 3 的值是？",
        "options": [
          "1",
          "2",
          "3",
          "0"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "7 除以 3 余 2。"
      },
      {
        "type": "choice",
        "stem": "字符串 'abc' 的长度是？",
        "options": [
          "2",
          "3",
          "4",
          "0"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "三个字符，长度为 3。"
      },
      {
        "type": "judge",
        "stem": "for 循环只能遍历数字。",
        "answer": "F",
        "score": 5,
        "analysis": "还可遍历字符串、列表等可迭代对象。"
      },
      {
        "type": "judge",
        "stem": "Python 中 print(3/2) 输出 1。",
        "answer": "F",
        "score": 5,
        "analysis": "3/2=1.5，输出 1.5。"
      },
      {
        "type": "program",
        "score": 20,
        "analysis": "等差数列求和公式 n*(n+1)/2。",
        "desc": "已知首项为 1、公差为 1 的等差数列前 n 项。输入 n（1 ≤ n ≤ 10000），输出该前 n 项和。",
        "input": "一行，正整数 n。",
        "output": "前 n 项和。",
        "samples": [
          {
            "input": "100",
            "output": "5050"
          },
          {
            "input": "10",
            "output": "55"
          }
        ],
        "solutions": {
          "python": "import sys\nn=int(sys.stdin.read().strip())\nprint(n*(n+1)//2)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long n;cin>>n;cout<<n*(n+1)/2<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long n=sc.nextLong();\n    System.out.println(n*(n+1)/2);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXCPP030",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "C++ 软件编程等级考试（3级）模拟卷（一）",
    "level": "3级",
    "duration": 90,
    "year": "2026",
    "lang": "cpp",
    "questions": [
      {
        "type": "choice",
        "stem": "栈的特点是？",
        "options": [
          "先进先出",
          "后进先出",
          "随机访问",
          "只能读"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "栈是 LIFO。"
      },
      {
        "type": "choice",
        "stem": "递归函数必须包含什么才能正常结束？",
        "options": [
          "循环",
          "基准（终止）条件",
          "全局变量",
          "数组"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "递归需要基准情形避免无限递归。"
      },
      {
        "type": "choice",
        "stem": "队列的特点是？",
        "options": [
          "先进先出",
          "后进先出",
          "随机访问",
          "只能写"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "队列是 FIFO。"
      },
      {
        "type": "choice",
        "stem": "下列算法中属于分治思想的是？",
        "options": [
          "冒泡排序",
          "归并排序",
          "选择排序",
          "插入排序"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "归并排序先分后治。"
      },
      {
        "type": "judge",
        "stem": "递归一定比迭代执行得更快。",
        "answer": "F",
        "score": 5,
        "analysis": "递归有调用开销，未必更快。"
      },
      {
        "type": "judge",
        "stem": "哈希表查找的平均时间复杂度是 O(1)。",
        "answer": "T",
        "score": 5,
        "analysis": "理想情况下常数时间。"
      },
      {
        "type": "program",
        "score": 25,
        "analysis": "最小公倍数 = a / gcd(a,b) * b，注意先除后乘防溢出。",
        "desc": "输入 a,b，输出能同时被 a 和 b 整除的最小正整数是多少（lcm）。",
        "input": "一行，a b。",
        "output": "lcm。",
        "samples": [
          {
            "input": "4 6",
            "output": "12"
          },
          {
            "input": "3 5",
            "output": "15"
          }
        ],
        "solutions": {
          "python": "import sys,math\na,b=map(int,sys.stdin.read().split())\nprint(a//math.gcd(a,b)*b)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nlong long gcd(long long a,long long b){while(b){long long t=a%b;a=b;b=t;}return a;}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long a,b;cin>>a>>b;\nlong long g=gcd(a,b);\ncout<<a/g*b<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long a=sc.nextLong(),b=sc.nextLong();\n    long g=a;long t=b;while(t!=0){long x=g%t;g=t;t=x;}\n    System.out.println(a/g*b);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXCPP031",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "C++ 软件编程等级考试（3级）模拟卷（二）",
    "level": "3级",
    "duration": 90,
    "year": "2026",
    "lang": "cpp",
    "questions": [
      {
        "type": "choice",
        "stem": "朴素递归实现斐波那契的时间复杂度近似为？",
        "options": [
          "O(n)",
          "O(2^n)",
          "O(log n)",
          "O(n^2)"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "存在大量重复子问题，呈指数级。"
      },
      {
        "type": "choice",
        "stem": "二分查找能够正确使用的前提是？",
        "options": [
          "数组无序",
          "数组有序",
          "数组很大",
          "有重复元素"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "二分查找要求序列有序。"
      },
      {
        "type": "choice",
        "stem": "队列的特点是？",
        "options": [
          "先进先出",
          "后进先出",
          "随机访问",
          "只能写"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "队列是 FIFO。"
      },
      {
        "type": "choice",
        "stem": "线性查找最坏情况下的比较次数是？",
        "options": [
          "1",
          "n/2",
          "n",
          "n+1"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "可能要遍历全部 n 个元素。"
      },
      {
        "type": "judge",
        "stem": "二分查找可以在无序数组上直接使用。",
        "answer": "F",
        "score": 5,
        "analysis": "必须有序。"
      },
      {
        "type": "judge",
        "stem": "归并排序是稳定的排序算法。",
        "answer": "T",
        "score": 5,
        "analysis": "相等元素相对次序保持不变。"
      },
      {
        "type": "program",
        "score": 25,
        "analysis": "辗转相除。",
        "desc": "输入两个正整数 a, b（1 ≤ a, b ≤ 10^9），输出它们的最大公约数（gcd）。",
        "input": "一行，两个整数 a b。",
        "output": "最大公约数。",
        "samples": [
          {
            "input": "12 18",
            "output": "6"
          },
          {
            "input": "7 13",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys,math\na,b=map(int,sys.stdin.read().split())\nprint(math.gcd(a,b))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nlong long gcd(long long a,long long b){while(b){long long t=a%b;a=b;b=t;}return a;}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long a,b;cin>>a>>b;cout<<gcd(a,b)<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long a=sc.nextLong(),b=sc.nextLong();\n    while(b!=0){long t=a%b;a=b;b=t;}\n    System.out.println(a);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXCPP032",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "C++ 软件编程等级考试（3级）真题卷（大纲同步）",
    "level": "3级",
    "duration": 90,
    "year": "2026",
    "lang": "cpp",
    "questions": [
      {
        "type": "choice",
        "stem": "冒泡排序的时间复杂度是？",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(log n)"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "两两比较，约 n^2/2 次比较。"
      },
      {
        "type": "choice",
        "stem": "线性查找最坏情况下的比较次数是？",
        "options": [
          "1",
          "n/2",
          "n",
          "n+1"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "可能要遍历全部 n 个元素。"
      },
      {
        "type": "choice",
        "stem": "递归函数必须包含什么才能正常结束？",
        "options": [
          "循环",
          "基准（终止）条件",
          "全局变量",
          "数组"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "递归需要基准情形避免无限递归。"
      },
      {
        "type": "choice",
        "stem": "下列算法中属于分治思想的是？",
        "options": [
          "冒泡排序",
          "归并排序",
          "选择排序",
          "插入排序"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "归并排序先分后治。"
      },
      {
        "type": "judge",
        "stem": "哈希表查找的平均时间复杂度是 O(1)。",
        "answer": "T",
        "score": 5,
        "analysis": "理想情况下常数时间。"
      },
      {
        "type": "judge",
        "stem": "递归一定比迭代执行得更快。",
        "answer": "F",
        "score": 5,
        "analysis": "递归有调用开销，未必更快。"
      },
      {
        "type": "program",
        "score": 25,
        "analysis": "任选一种排序均可。",
        "desc": "体育课上 n 名同学的身高（整数）记录。输入后请升序输出。",
        "input": "第一行 n；第二行 n 个身高。",
        "output": "升序一行身高，空格分隔。",
        "samples": [
          {
            "input": "4\n3 1 4 2",
            "output": "1 2 3 4"
          },
          {
            "input": "3\n5 5 1",
            "output": "1 5 5"
          }
        ],
        "solutions": {
          "python": "import sys\nv=list(map(int,sys.stdin.read().split()))\nn=v[0]\na=v[1:1+n]\na.sort()\nprint(' '.join(map(str,a)))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int i=0;i<n;i++)cin>>a[i];\nfor(int i=0;i<n;i++)for(int j=i+1;j<n;j++)if(a[i]>a[j])swap(a[i],a[j]);\nfor(int i=0;i<n;i++){cout<<a[i];if(i+1<n)cout<<' ';else cout<<endl;}\nreturn 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();Integer[] a=new Integer[n];\n    for(int i=0;i<n;i++)a[i]=sc.nextInt();\n    Arrays.sort(a);\n    StringBuilder sb=new StringBuilder();\n    for(int i=0;i<n;i++){sb.append(a[i]);if(i+1<n)sb.append(' ');}\n    System.out.println(sb);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXCPP040",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "C++ 软件编程等级考试（4级）模拟卷（一）",
    "level": "4级",
    "duration": 90,
    "year": "2026",
    "lang": "cpp",
    "questions": [
      {
        "type": "choice",
        "stem": "递归函数必须包含什么才能正常结束？",
        "options": [
          "循环",
          "基准（终止）条件",
          "全局变量",
          "数组"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "递归需要基准情形避免无限递归。"
      },
      {
        "type": "choice",
        "stem": "队列的特点是？",
        "options": [
          "先进先出",
          "后进先出",
          "随机访问",
          "只能写"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "队列是 FIFO。"
      },
      {
        "type": "choice",
        "stem": "线性查找最坏情况下的比较次数是？",
        "options": [
          "1",
          "n/2",
          "n",
          "n+1"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "可能要遍历全部 n 个元素。"
      },
      {
        "type": "choice",
        "stem": "下列算法中属于分治思想的是？",
        "options": [
          "冒泡排序",
          "归并排序",
          "选择排序",
          "插入排序"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "归并排序先分后治。"
      },
      {
        "type": "judge",
        "stem": "哈希表查找的平均时间复杂度是 O(1)。",
        "answer": "T",
        "score": 5,
        "analysis": "理想情况下常数时间。"
      },
      {
        "type": "judge",
        "stem": "函数内部定义的变量默认是全局变量。",
        "answer": "F",
        "score": 5,
        "analysis": "未声明 global 的是局部变量。"
      },
      {
        "type": "program",
        "score": 25,
        "analysis": "试除到 sqrt(n)。",
        "desc": "判断素数：输入 n（2 ≤ n ≤ 10^6），是素数输出 Yes，不是输出 No。",
        "input": "一行，整数 n。",
        "output": "Yes 或 No。",
        "samples": [
          {
            "input": "17",
            "output": "Yes"
          },
          {
            "input": "9",
            "output": "No"
          }
        ],
        "solutions": {
          "python": "import sys,math\nn=int(sys.stdin.read().strip())\nok=True\nif n<2:ok=False\nelse:\n    i=2\n    while i*i<=n:\n        if n%i==0:ok=False;break\n        i+=1\nprint(\"Yes\" if ok else \"No\")",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long n;cin>>n;bool ok=true;\nif(n<2)ok=false;\nelse{for(long long i=2;i*i<=n;i++){if(n%i==0){ok=false;break;}}\ncout<<(ok?\"Yes\":\"No\")<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long n=sc.nextLong();boolean ok=true;\n    if(n<2)ok=false;\n    else{for(long i=2;i*i<=n;i++){if(n%i==0){ok=false;break;}}\n    System.out.println(ok?\"Yes\":\"No\");\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXCPP041",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "C++ 软件编程等级考试（4级）模拟卷（二）",
    "level": "4级",
    "duration": 90,
    "year": "2026",
    "lang": "cpp",
    "questions": [
      {
        "type": "choice",
        "stem": "冒泡排序的时间复杂度是？",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(log n)"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "两两比较，约 n^2/2 次比较。"
      },
      {
        "type": "choice",
        "stem": "二分查找能够正确使用的前提是？",
        "options": [
          "数组无序",
          "数组有序",
          "数组很大",
          "有重复元素"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "二分查找要求序列有序。"
      },
      {
        "type": "choice",
        "stem": "下列算法中属于分治思想的是？",
        "options": [
          "冒泡排序",
          "归并排序",
          "选择排序",
          "插入排序"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "归并排序先分后治。"
      },
      {
        "type": "choice",
        "stem": "按值传递参数时，修改形参会影响实参吗？",
        "options": [
          "会",
          "不会",
          "视语言而定",
          "总是"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "按值传递复制的是副本（基本类型）。"
      },
      {
        "type": "judge",
        "stem": "二分查找可以在无序数组上直接使用。",
        "answer": "F",
        "score": 5,
        "analysis": "必须有序。"
      },
      {
        "type": "judge",
        "stem": "哈希表查找的平均时间复杂度是 O(1)。",
        "answer": "T",
        "score": 5,
        "analysis": "理想情况下常数时间。"
      },
      {
        "type": "program",
        "score": 25,
        "analysis": "任选一种排序均可。",
        "desc": "输入第一行整数 n（1 ≤ n ≤ 200），第二行是 n 个整数。请将它们从小到大排序后输出，数字之间用空格分隔。",
        "input": "第一行 n；第二行 n 个整数。",
        "output": "排序后一行整数，空格分隔。",
        "samples": [
          {
            "input": "4\n3 1 4 2",
            "output": "1 2 3 4"
          },
          {
            "input": "3\n5 5 1",
            "output": "1 5 5"
          }
        ],
        "solutions": {
          "python": "import sys\nv=list(map(int,sys.stdin.read().split()))\nn=v[0]\na=v[1:1+n]\na.sort()\nprint(' '.join(map(str,a)))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int i=0;i<n;i++)cin>>a[i];\nfor(int i=0;i<n;i++)for(int j=i+1;j<n;j++)if(a[i]>a[j])swap(a[i],a[j]);\nfor(int i=0;i<n;i++){cout<<a[i];if(i+1<n)cout<<' ';else cout<<endl;}\nreturn 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();Integer[] a=new Integer[n];\n    for(int i=0;i<n;i++)a[i]=sc.nextInt();\n    Arrays.sort(a);\n    StringBuilder sb=new StringBuilder();\n    for(int i=0;i<n;i++){sb.append(a[i]);if(i+1<n)sb.append(' ');}\n    System.out.println(sb);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXCPP042",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "C++ 软件编程等级考试（4级）真题卷（大纲同步）",
    "level": "4级",
    "duration": 90,
    "year": "2026",
    "lang": "cpp",
    "questions": [
      {
        "type": "choice",
        "stem": "按值传递参数时，修改形参会影响实参吗？",
        "options": [
          "会",
          "不会",
          "视语言而定",
          "总是"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "按值传递复制的是副本（基本类型）。"
      },
      {
        "type": "choice",
        "stem": "快速排序平均时间复杂度是？",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(n^3)"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "期望划分下为 O(n log n)。"
      },
      {
        "type": "choice",
        "stem": "栈的特点是？",
        "options": [
          "先进先出",
          "后进先出",
          "随机访问",
          "只能读"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "栈是 LIFO。"
      },
      {
        "type": "choice",
        "stem": "朴素递归实现斐波那契的时间复杂度近似为？",
        "options": [
          "O(n)",
          "O(2^n)",
          "O(log n)",
          "O(n^2)"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "存在大量重复子问题，呈指数级。"
      },
      {
        "type": "judge",
        "stem": "函数内部定义的变量默认是全局变量。",
        "answer": "F",
        "score": 5,
        "analysis": "未声明 global 的是局部变量。"
      },
      {
        "type": "judge",
        "stem": "二分查找可以在无序数组上直接使用。",
        "answer": "F",
        "score": 5,
        "analysis": "必须有序。"
      },
      {
        "type": "program",
        "score": 25,
        "analysis": "循环累乘，注意 0!=1。",
        "desc": "输入一个非负整数 n（0 ≤ n ≤ 20），输出 n 的阶乘 n!。",
        "input": "一行，非负整数 n。",
        "output": "n!。",
        "samples": [
          {
            "input": "5",
            "output": "120"
          },
          {
            "input": "0",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys\nn=int(sys.stdin.read().strip())\nf=1\nfor i in range(2,n+1):f*=i\nprint(f)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;long long f=1;\nfor(int i=2;i<=n;i++)f*=i;\ncout<<f<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();long f=1;\n    for(int i=2;i<=n;i++)f*=i;\n    System.out.println(f);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXCPP050",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "C++ 软件编程等级考试（5级）模拟卷（一）",
    "level": "5级",
    "duration": 90,
    "year": "2026",
    "lang": "cpp",
    "questions": [
      {
        "type": "choice",
        "stem": "DFS 遍历图时用什么标记已访问？",
        "options": [
          "数组/visited",
          "排序",
          "清空栈",
          "队列"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "用 visited 数组避免重复访问。"
      },
      {
        "type": "choice",
        "stem": "哈希冲突难以避免的根本原因是？",
        "options": [
          "算法错误",
          "桶（空间）有限",
          "语言限制",
          "内存太小"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "映射空间小于键空间。"
      },
      {
        "type": "choice",
        "stem": "拓扑排序适用于？",
        "options": [
          "有环图",
          "有向无环图",
          "无向图",
          "矩阵"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "DAG 才有拓扑序。"
      },
      {
        "type": "choice",
        "stem": "深度优先搜索通常借助哪种结构实现？",
        "options": [
          "队列",
          "栈",
          "堆",
          "数组"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "DFS 用递归或显式栈。"
      },
      {
        "type": "judge",
        "stem": "DFS 一定比 BFS 占用更少内存。",
        "answer": "F",
        "score": 5,
        "analysis": "取决于图的结构。"
      },
      {
        "type": "judge",
        "stem": "一棵树的边数等于顶点数减一。",
        "answer": "T",
        "score": 5,
        "analysis": "树的性质。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "对每个未访问的 '#' 做 DFS/BFS 标记整个连通块。",
        "desc": "输入第一行 h, w（1 ≤ h, w ≤ 20），随后 h 行每行 w 个字符（'#' 为岛屿，'.' 为海）。输出岛屿（四连通）的个数。",
        "input": "h w，然后 h 行字符图。",
        "output": "岛屿连通块个数。",
        "samples": [
          {
            "input": "3 3\n#..\n.#. \n..#",
            "output": "3"
          },
          {
            "input": "2 2\n##\n##",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nh=int(data[0]);w=int(data[1])\ng=data[2:2+h]\nvis=[[False]*w for _ in range(h)]\ndef dfs(i,j):\n    vis[i][j]=True\n    for di,dj in((1,0),(-1,0),(0,1),(0,-1)):\n        ni,nj=i+di,j+dj\n        if 0<=ni<h and 0<=nj<w and not vis[ni][nj] and g[ni][nj]=='#':dfs(ni,nj)\ncnt=0\nfor i in range(h):\n    for j in range(w):\n        if g[i][j]=='#' and not vis[i][j]:\n            dfs(i,j);cnt+=1\nprint(cnt)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint h,w;vector<string>g;vector<vector<bool>>vis;\nvoid dfs(int i,int j){vis[i][j]=true;\n  int d[4][2]={{1,0},{-1,0},{0,1},{0,-1}};\n  for(int k=0;k<4;k++){int ni=i+d[k][0],nj=j+d[k][1];\n    if(ni>=0&&ni<h&&nj>=0&&nj<w&&!vis[ni][nj]&&g[ni][nj]=='#')dfs(ni,nj);}}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\ncin>>h>>w;g.resize(h);for(int i=0;i<h;i++)cin>>g[i];\nvis.assign(h,vector<bool>(w,false));\nint cnt=0;\nfor(int i=0;i<h;i++)for(int j=0;j<w;j++)\n  if(g[i][j]=='#'&&!vis[i][j]){dfs(i,j);cnt++;}\ncout<<cnt<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  static int h,w;static char[][]g;static boolean[][]vis;\n  static void dfs(int i,int j){vis[i][j]=true;\n    int[]di={1,-1,0,0},dj={0,0,1,-1};\n    for(int k=0;k<4;k++){int ni=i+di[k],nj=j+dj[k];\n      if(ni>=0&&ni<h&&nj>=0&&nj<w&&!vis[ni][nj]&&g[ni][nj]=='#')dfs(ni,nj);}}\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    h=sc.nextInt();w=sc.nextInt();g=new char[h][w];\n    for(int i=0;i<h;i++)g[i]=sc.next().toCharArray();\n    vis=new boolean[h][w];int cnt=0;\n    for(int i=0;i<h;i++)for(int j=0;j<w;j++)\n      if(g[i][j]=='#'&&!vis[i][j]){dfs(i,j);cnt++;}\n    System.out.println(cnt);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "按 '0' 切分后求最长连续 1 段的长度。",
        "desc": "输入 01 串，输出最长的一段全 1 子串长度。",
        "input": "一行，01 串。",
        "output": "最长连续 1 长度。",
        "samples": [
          {
            "input": "110111",
            "output": "3"
          },
          {
            "input": "000",
            "output": "0"
          }
        ],
        "solutions": {
          "python": "import sys\ns=sys.stdin.read().strip()\nif '1' not in s:print(0)\nelse:print(max(len(x) for x in s.split('0')))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring s;cin>>s;int cur=0,best=0;\nfor(char c:s){if(c=='1'){cur++;if(cur>best)best=cur;}else cur=0;}\ncout<<best<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    String s=sc.next();int cur=0,best=0;\n    for(int i=0;i<s.length();i++){char c=s.charAt(i);\n      if(c=='1'){cur++;if(cur>best)best=cur;}else cur=0;}\n    System.out.println(best);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXCPP051",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "C++ 软件编程等级考试（5级）模拟卷（二）",
    "level": "5级",
    "duration": 90,
    "year": "2026",
    "lang": "cpp",
    "questions": [
      {
        "type": "choice",
        "stem": "DFS 遍历图时用什么标记已访问？",
        "options": [
          "数组/visited",
          "排序",
          "清空栈",
          "队列"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "用 visited 数组避免重复访问。"
      },
      {
        "type": "choice",
        "stem": "动态规划的核心思想是？",
        "options": [
          "枚举",
          "重叠子问题与最优子结构",
          "贪心",
          "分治"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "DP 利用子问题重叠与最优子结构。"
      },
      {
        "type": "choice",
        "stem": "BFS 求无权图最短路的依据是？",
        "options": [
          "层序扩展",
          "随机选择",
          "贪心",
          "回溯"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "首达即最短。"
      },
      {
        "type": "choice",
        "stem": "0-1 背包问题通常归类为？",
        "options": [
          "贪心",
          "动态规划",
          "分治",
          "回溯"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "具有最优子结构，用 DP 求解。"
      },
      {
        "type": "judge",
        "stem": "一棵树的边数等于顶点数减一。",
        "answer": "T",
        "score": 5,
        "analysis": "树的性质。"
      },
      {
        "type": "judge",
        "stem": "DFS 一定比 BFS 占用更少内存。",
        "answer": "F",
        "score": 5,
        "analysis": "取决于图的结构。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "0-1 背包，逆序更新 DP。",
        "desc": "输入 n 和容量 C，以及 n 个（重量, 价值）对，输出背包能装下的最大价值。",
        "input": "n C，然后 n 行 w v。",
        "output": "最大价值。",
        "samples": [
          {
            "input": "3 10\n2 6\n3 8\n5 12",
            "output": "26"
          },
          {
            "input": "2 5\n2 3\n3 4",
            "output": "7"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nn=int(data[0]);C=int(data[1])\ndp=[0]*(C+1)\nidx=2\nfor _ in range(n):\n    w=int(data[idx]);v=int(data[idx+1]);idx+=2\n    for cap in range(C,w-1,-1):\n        if dp[cap-w]+v>dp[cap]:dp[cap]=dp[cap-w]+v\nprint(max(dp))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,C;cin>>n>>C;vector<int>dp(C+1,0);\nfor(int i=0;i<n;i++){int w,v;cin>>w>>v;\n  for(int c=C;c>=w;c--)if(dp[c-w]+v>dp[c])dp[c]=dp[c-w]+v;}\ncout<<*max_element(dp.begin(),dp.end())<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt(),C=sc.nextInt();\n    int[]dp=new int[C+1];\n    for(int i=0;i<n;i++){int w=sc.nextInt(),v=sc.nextInt();\n      for(int c=C;c>=w;c--)if(dp[c-w]+v>dp[c])dp[c]=dp[c-w]+v;}\n    int mx=0;for(int x:dp)if(x>mx)mx=x;\n    System.out.println(mx);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "埃氏筛标记合数后统计。",
        "desc": "输入一个整数 n（1 ≤ n ≤ 10^6），输出不超过 n 的素数个数。",
        "input": "一行，整数 n。",
        "output": "素数个数。",
        "samples": [
          {
            "input": "10",
            "output": "4"
          },
          {
            "input": "20",
            "output": "8"
          }
        ],
        "solutions": {
          "python": "import sys\nn=int(sys.stdin.read().strip())\nif n<2:print(0)\nelse:\n    isp=[True]*(n+1);isp[0]=isp[1]=False\n    i=2\n    while i*i<=n:\n        if isp[i]:\n            for j in range(i*i,n+1,i):isp[j]=False\n        i+=1\n    print(sum(isp))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;if(n<2){cout<<0<<endl;return 0;}\nvector<bool>isp(n+1,true);isp[0]=isp[1]=false;\nfor(int i=2;i*i<=n;i++)if(isp[i])\n  for(int j=i*i;j<=n;j+=i)isp[j]=false;\nint c=0;for(int i=2;i<=n;i++)if(isp[i])c++;\ncout<<c<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();\n    if(n<2){System.out.println(0);return;}\n    boolean[] isp=new boolean[n+1];Arrays.fill(isp,true);isp[0]=isp[1]=false;\n    for(int i=2;i*i<=n;i++)if(isp[i])\n      for(int j=i*i;j<=n;j+=i)isp[j]=false;\n    int c=0;for(int i=2;i<=n;i++)if(isp[i])c++;\n    System.out.println(c);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXCPP052",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "C++ 软件编程等级考试（5级）真题卷（大纲同步）",
    "level": "5级",
    "duration": 90,
    "year": "2026",
    "lang": "cpp",
    "questions": [
      {
        "type": "choice",
        "stem": "埃氏筛法的时间复杂度约为？",
        "options": [
          "O(n)",
          "O(n log log n)",
          "O(n^2)",
          "O(log n)"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "经典结论 O(n log log n)。"
      },
      {
        "type": "choice",
        "stem": "求最大公约数的欧几里得算法基于？",
        "options": [
          "a%b==0",
          "gcd(a,b)=gcd(b,a%b)",
          "素数判定",
          "阶乘"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "辗转相除。"
      },
      {
        "type": "choice",
        "stem": "DFS 遍历图时用什么标记已访问？",
        "options": [
          "数组/visited",
          "排序",
          "清空栈",
          "队列"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "用 visited 数组避免重复访问。"
      },
      {
        "type": "choice",
        "stem": "深度优先搜索通常借助哪种结构实现？",
        "options": [
          "队列",
          "栈",
          "堆",
          "数组"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "DFS 用递归或显式栈。"
      },
      {
        "type": "judge",
        "stem": "Dijkstra 算法不能处理带负权边的图。",
        "answer": "T",
        "score": 5,
        "analysis": "负权会破坏其贪心正确性。"
      },
      {
        "type": "judge",
        "stem": "DFS 一定比 BFS 占用更少内存。",
        "answer": "F",
        "score": 5,
        "analysis": "取决于图的结构。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "用计数器，遇 '(' 加一、遇 ')' 减一，过程中不可为负，结束应为 0。",
        "desc": "编译器括号检查：输入仅含 ( 和 ) 的字符串，输出是否合法配对。",
        "input": "一行，括号字符串。",
        "output": "Yes 或 No。",
        "samples": [
          {
            "input": "()(())",
            "output": "Yes"
          },
          {
            "input": "(()",
            "output": "No"
          }
        ],
        "solutions": {
          "python": "import sys\ns=sys.stdin.read().strip()\nbal=0\nfor ch in s:\n    if ch=='(':bal+=1\n    else:\n        bal-=1\n        if bal<0:break\nprint(\"Yes\" if bal==0 else \"No\")",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring s;cin>>s;int bal=0;bool ok=true;\nfor(char c:s){if(c=='(')bal++;else{bal--;if(bal<0){ok=false;break;}}}\ncout<<((ok&&bal==0)?\"Yes\":\"No\")<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    String s=sc.next();int bal=0;boolean ok=true;\n    for(int i=0;i<s.length();i++){char c=s.charAt(i);\n      if(c=='(')bal++;else{bal--;if(bal<0){ok=false;break;}}}\n    System.out.println((ok&&bal==0)?\"Yes\":\"No\");\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "对每个未访问的 '#' 做 DFS/BFS 标记整个连通块。",
        "desc": "输入 h 行 w 列的地图（'#' 表示陆地，'.' 表示水），输出陆地的四连通块数。",
        "input": "h w，然后 h 行地图。",
        "output": "陆块数量。",
        "samples": [
          {
            "input": "3 3\n#..\n.#. \n..#",
            "output": "3"
          },
          {
            "input": "2 2\n##\n##",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nh=int(data[0]);w=int(data[1])\ng=data[2:2+h]\nvis=[[False]*w for _ in range(h)]\ndef dfs(i,j):\n    vis[i][j]=True\n    for di,dj in((1,0),(-1,0),(0,1),(0,-1)):\n        ni,nj=i+di,j+dj\n        if 0<=ni<h and 0<=nj<w and not vis[ni][nj] and g[ni][nj]=='#':dfs(ni,nj)\ncnt=0\nfor i in range(h):\n    for j in range(w):\n        if g[i][j]=='#' and not vis[i][j]:\n            dfs(i,j);cnt+=1\nprint(cnt)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint h,w;vector<string>g;vector<vector<bool>>vis;\nvoid dfs(int i,int j){vis[i][j]=true;\n  int d[4][2]={{1,0},{-1,0},{0,1},{0,-1}};\n  for(int k=0;k<4;k++){int ni=i+d[k][0],nj=j+d[k][1];\n    if(ni>=0&&ni<h&&nj>=0&&nj<w&&!vis[ni][nj]&&g[ni][nj]=='#')dfs(ni,nj);}}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\ncin>>h>>w;g.resize(h);for(int i=0;i<h;i++)cin>>g[i];\nvis.assign(h,vector<bool>(w,false));\nint cnt=0;\nfor(int i=0;i<h;i++)for(int j=0;j<w;j++)\n  if(g[i][j]=='#'&&!vis[i][j]){dfs(i,j);cnt++;}\ncout<<cnt<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  static int h,w;static char[][]g;static boolean[][]vis;\n  static void dfs(int i,int j){vis[i][j]=true;\n    int[]di={1,-1,0,0},dj={0,0,1,-1};\n    for(int k=0;k<4;k++){int ni=i+di[k],nj=j+dj[k];\n      if(ni>=0&&ni<h&&nj>=0&&nj<w&&!vis[ni][nj]&&g[ni][nj]=='#')dfs(ni,nj);}}\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    h=sc.nextInt();w=sc.nextInt();g=new char[h][w];\n    for(int i=0;i<h;i++)g[i]=sc.next().toCharArray();\n    vis=new boolean[h][w];int cnt=0;\n    for(int i=0;i<h;i++)for(int j=0;j<w;j++)\n      if(g[i][j]=='#'&&!vis[i][j]){dfs(i,j);cnt++;}\n    System.out.println(cnt);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXCPP060",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "C++ 软件编程等级考试（6级）模拟卷（一）",
    "level": "6级",
    "duration": 90,
    "year": "2026",
    "lang": "cpp",
    "questions": [
      {
        "type": "choice",
        "stem": "哈希冲突难以避免的根本原因是？",
        "options": [
          "算法错误",
          "桶（空间）有限",
          "语言限制",
          "内存太小"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "映射空间小于键空间。"
      },
      {
        "type": "choice",
        "stem": "DFS 遍历图时用什么标记已访问？",
        "options": [
          "数组/visited",
          "排序",
          "清空栈",
          "队列"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "用 visited 数组避免重复访问。"
      },
      {
        "type": "choice",
        "stem": "拓扑排序适用于？",
        "options": [
          "有环图",
          "有向无环图",
          "无向图",
          "矩阵"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "DAG 才有拓扑序。"
      },
      {
        "type": "choice",
        "stem": "动态规划与分治的主要区别是？",
        "options": [
          "都递推",
          "子问题是否重叠",
          "都用栈",
          "都贪心"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "DP 的子问题重叠并可查表复用。"
      },
      {
        "type": "judge",
        "stem": "DFS 一定比 BFS 占用更少内存。",
        "answer": "F",
        "score": 5,
        "analysis": "取决于图的结构。"
      },
      {
        "type": "judge",
        "stem": "动态规划在满足最优子结构时能得到全局最优。",
        "answer": "T",
        "score": 5,
        "analysis": "DP 的正确性基础。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "对每个未访问的 '#' 做 DFS/BFS 标记整个连通块。",
        "desc": "输入 h 行 w 列的地图（'#' 表示陆地，'.' 表示水），输出陆地的四连通块数。",
        "input": "h w，然后 h 行地图。",
        "output": "陆块数量。",
        "samples": [
          {
            "input": "3 3\n#..\n.#. \n..#",
            "output": "3"
          },
          {
            "input": "2 2\n##\n##",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nh=int(data[0]);w=int(data[1])\ng=data[2:2+h]\nvis=[[False]*w for _ in range(h)]\ndef dfs(i,j):\n    vis[i][j]=True\n    for di,dj in((1,0),(-1,0),(0,1),(0,-1)):\n        ni,nj=i+di,j+dj\n        if 0<=ni<h and 0<=nj<w and not vis[ni][nj] and g[ni][nj]=='#':dfs(ni,nj)\ncnt=0\nfor i in range(h):\n    for j in range(w):\n        if g[i][j]=='#' and not vis[i][j]:\n            dfs(i,j);cnt+=1\nprint(cnt)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint h,w;vector<string>g;vector<vector<bool>>vis;\nvoid dfs(int i,int j){vis[i][j]=true;\n  int d[4][2]={{1,0},{-1,0},{0,1},{0,-1}};\n  for(int k=0;k<4;k++){int ni=i+d[k][0],nj=j+d[k][1];\n    if(ni>=0&&ni<h&&nj>=0&&nj<w&&!vis[ni][nj]&&g[ni][nj]=='#')dfs(ni,nj);}}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\ncin>>h>>w;g.resize(h);for(int i=0;i<h;i++)cin>>g[i];\nvis.assign(h,vector<bool>(w,false));\nint cnt=0;\nfor(int i=0;i<h;i++)for(int j=0;j<w;j++)\n  if(g[i][j]=='#'&&!vis[i][j]){dfs(i,j);cnt++;}\ncout<<cnt<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  static int h,w;static char[][]g;static boolean[][]vis;\n  static void dfs(int i,int j){vis[i][j]=true;\n    int[]di={1,-1,0,0},dj={0,0,1,-1};\n    for(int k=0;k<4;k++){int ni=i+di[k],nj=j+dj[k];\n      if(ni>=0&&ni<h&&nj>=0&&nj<w&&!vis[ni][nj]&&g[ni][nj]=='#')dfs(ni,nj);}}\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    h=sc.nextInt();w=sc.nextInt();g=new char[h][w];\n    for(int i=0;i<h;i++)g[i]=sc.next().toCharArray();\n    vis=new boolean[h][w];int cnt=0;\n    for(int i=0;i<h;i++)for(int j=0;j<w;j++)\n      if(g[i][j]=='#'&&!vis[i][j]){dfs(i,j);cnt++;}\n    System.out.println(cnt);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "埃氏筛标记合数后统计。",
        "desc": "输入 n（1 ≤ n ≤ 10^6），统计 1 到 n 之间素数的个数。",
        "input": "一行，整数 n。",
        "output": "素数个数。",
        "samples": [
          {
            "input": "10",
            "output": "4"
          },
          {
            "input": "20",
            "output": "8"
          }
        ],
        "solutions": {
          "python": "import sys\nn=int(sys.stdin.read().strip())\nif n<2:print(0)\nelse:\n    isp=[True]*(n+1);isp[0]=isp[1]=False\n    i=2\n    while i*i<=n:\n        if isp[i]:\n            for j in range(i*i,n+1,i):isp[j]=False\n        i+=1\n    print(sum(isp))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;if(n<2){cout<<0<<endl;return 0;}\nvector<bool>isp(n+1,true);isp[0]=isp[1]=false;\nfor(int i=2;i*i<=n;i++)if(isp[i])\n  for(int j=i*i;j<=n;j+=i)isp[j]=false;\nint c=0;for(int i=2;i<=n;i++)if(isp[i])c++;\ncout<<c<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();\n    if(n<2){System.out.println(0);return;}\n    boolean[] isp=new boolean[n+1];Arrays.fill(isp,true);isp[0]=isp[1]=false;\n    for(int i=2;i*i<=n;i++)if(isp[i])\n      for(int j=i*i;j<=n;j+=i)isp[j]=false;\n    int c=0;for(int i=2;i<=n;i++)if(isp[i])c++;\n    System.out.println(c);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXCPP061",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "C++ 软件编程等级考试（6级）模拟卷（二）",
    "level": "6级",
    "duration": 90,
    "year": "2026",
    "lang": "cpp",
    "questions": [
      {
        "type": "choice",
        "stem": "BFS 求无权图最短路的依据是？",
        "options": [
          "层序扩展",
          "随机选择",
          "贪心",
          "回溯"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "首达即最短。"
      },
      {
        "type": "choice",
        "stem": "广度优先搜索使用？",
        "options": [
          "栈",
          "队列",
          "树",
          "图"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "BFS 用队列层序扩展。"
      },
      {
        "type": "choice",
        "stem": "DFS 遍历图时用什么标记已访问？",
        "options": [
          "数组/visited",
          "排序",
          "清空栈",
          "队列"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "用 visited 数组避免重复访问。"
      },
      {
        "type": "choice",
        "stem": "动态规划与分治的主要区别是？",
        "options": [
          "都递推",
          "子问题是否重叠",
          "都用栈",
          "都贪心"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "DP 的子问题重叠并可查表复用。"
      },
      {
        "type": "judge",
        "stem": "一棵树的边数等于顶点数减一。",
        "answer": "T",
        "score": 5,
        "analysis": "树的性质。"
      },
      {
        "type": "judge",
        "stem": "哈希表在冲突严重时可能退化，变慢。",
        "answer": "T",
        "score": 5,
        "analysis": "退化为链表式查找。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "O(n^2) DP：dp[i]=以 a[i] 结尾的最长上升子序列长度。",
        "desc": "输入 n 和 n 个整数，输出其中最长严格递增子序列的长度。",
        "input": "n，然后 n 个整数。",
        "output": "最长上升子序列长度。",
        "samples": [
          {
            "input": "6\n1 3 2 5 4 6",
            "output": "4"
          },
          {
            "input": "5\n5 4 3 2 1",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys\nv=list(map(int,sys.stdin.read().split()))\nn=v[0];a=v[1:1+n]\ndp=[1]*n\nfor i in range(n):\n    for j in range(i):\n        if a[j]<a[i]:dp[i]=max(dp[i],dp[j]+1)\nprint(max(dp))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int i=0;i<n;i++)cin>>a[i];\nvector<int>dp(n,1);int mx=1;\nfor(int i=0;i<n;i++)for(int j=0;j<i;j++)\n  if(a[j]<a[i])dp[i]=max(dp[i],dp[j]+1);\nfor(int i=0;i<n;i++)mx=max(mx,dp[i]);\ncout<<mx<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();int[]a=new int[n];\n    for(int i=0;i<n;i++)a[i]=sc.nextInt();\n    int[]dp=new int[n];int mx=1;\n    for(int i=0;i<n;i++){dp[i]=1;\n      for(int j=0;j<i;j++)if(a[j]<a[i])dp[i]=Math.max(dp[i],dp[j]+1);\n      mx=Math.max(mx,dp[i]);}\n    System.out.println(mx);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "f(n)=f(n-1)+f(n-2)，滚动迭代（f(1)=1,f(2)=2）。",
        "desc": "爬 n 级楼梯，每次上 1 或 2 级。输入 n（1 ≤ n ≤ 40），输出有多少种走法。",
        "input": "一行，正整数 n。",
        "output": "走法数。",
        "samples": [
          {
            "input": "3",
            "output": "3"
          },
          {
            "input": "4",
            "output": "5"
          }
        ],
        "solutions": {
          "python": "import sys\nn=int(sys.stdin.read().strip())\na,b=1,1\nfor _ in range(n):a,b=b,a+b\nprint(a)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;long long a=1,b=1;\nfor(int i=1;i<=n;i++){long long t=a+b;a=b;b=t;}\ncout<<a<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();long a=1,b=1;\n    for(int i=1;i<=n;i++){long t=a+b;a=b;b=t;}\n    System.out.println(a);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXCPP062",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "C++ 软件编程等级考试（6级）真题卷（大纲同步）",
    "level": "6级",
    "duration": 90,
    "year": "2026",
    "lang": "cpp",
    "questions": [
      {
        "type": "choice",
        "stem": "拓扑排序适用于？",
        "options": [
          "有环图",
          "有向无环图",
          "无向图",
          "矩阵"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "DAG 才有拓扑序。"
      },
      {
        "type": "choice",
        "stem": "DFS 遍历图时用什么标记已访问？",
        "options": [
          "数组/visited",
          "排序",
          "清空栈",
          "队列"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "用 visited 数组避免重复访问。"
      },
      {
        "type": "choice",
        "stem": "深度优先搜索通常借助哪种结构实现？",
        "options": [
          "队列",
          "栈",
          "堆",
          "数组"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "DFS 用递归或显式栈。"
      },
      {
        "type": "choice",
        "stem": "动态规划的核心思想是？",
        "options": [
          "枚举",
          "重叠子问题与最优子结构",
          "贪心",
          "分治"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "DP 利用子问题重叠与最优子结构。"
      },
      {
        "type": "judge",
        "stem": "Dijkstra 算法不能处理带负权边的图。",
        "answer": "T",
        "score": 5,
        "analysis": "负权会破坏其贪心正确性。"
      },
      {
        "type": "judge",
        "stem": "素数有无穷多个。",
        "answer": "T",
        "score": 5,
        "analysis": "欧几里得已证明。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "对每个未访问的 '#' 做 DFS/BFS 标记整个连通块。",
        "desc": "输入 h 行 w 列的地图（'#' 表示陆地，'.' 表示水），输出陆地的四连通块数。",
        "input": "h w，然后 h 行地图。",
        "output": "陆块数量。",
        "samples": [
          {
            "input": "3 3\n#..\n.#. \n..#",
            "output": "3"
          },
          {
            "input": "2 2\n##\n##",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nh=int(data[0]);w=int(data[1])\ng=data[2:2+h]\nvis=[[False]*w for _ in range(h)]\ndef dfs(i,j):\n    vis[i][j]=True\n    for di,dj in((1,0),(-1,0),(0,1),(0,-1)):\n        ni,nj=i+di,j+dj\n        if 0<=ni<h and 0<=nj<w and not vis[ni][nj] and g[ni][nj]=='#':dfs(ni,nj)\ncnt=0\nfor i in range(h):\n    for j in range(w):\n        if g[i][j]=='#' and not vis[i][j]:\n            dfs(i,j);cnt+=1\nprint(cnt)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint h,w;vector<string>g;vector<vector<bool>>vis;\nvoid dfs(int i,int j){vis[i][j]=true;\n  int d[4][2]={{1,0},{-1,0},{0,1},{0,-1}};\n  for(int k=0;k<4;k++){int ni=i+d[k][0],nj=j+d[k][1];\n    if(ni>=0&&ni<h&&nj>=0&&nj<w&&!vis[ni][nj]&&g[ni][nj]=='#')dfs(ni,nj);}}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\ncin>>h>>w;g.resize(h);for(int i=0;i<h;i++)cin>>g[i];\nvis.assign(h,vector<bool>(w,false));\nint cnt=0;\nfor(int i=0;i<h;i++)for(int j=0;j<w;j++)\n  if(g[i][j]=='#'&&!vis[i][j]){dfs(i,j);cnt++;}\ncout<<cnt<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  static int h,w;static char[][]g;static boolean[][]vis;\n  static void dfs(int i,int j){vis[i][j]=true;\n    int[]di={1,-1,0,0},dj={0,0,1,-1};\n    for(int k=0;k<4;k++){int ni=i+di[k],nj=j+dj[k];\n      if(ni>=0&&ni<h&&nj>=0&&nj<w&&!vis[ni][nj]&&g[ni][nj]=='#')dfs(ni,nj);}}\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    h=sc.nextInt();w=sc.nextInt();g=new char[h][w];\n    for(int i=0;i<h;i++)g[i]=sc.next().toCharArray();\n    vis=new boolean[h][w];int cnt=0;\n    for(int i=0;i<h;i++)for(int j=0;j<w;j++)\n      if(g[i][j]=='#'&&!vis[i][j]){dfs(i,j);cnt++;}\n    System.out.println(cnt);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "0-1 背包，逆序更新 DP。",
        "desc": "输入第一行 n C（1 ≤ n ≤ 20，1 ≤ C ≤ 200），随后 n 行每行重量 w 与价值 v。输出在总重量不超过 C 时能得到的最大价值。",
        "input": "n C，然后 n 行 w v。",
        "output": "最大价值。",
        "samples": [
          {
            "input": "3 10\n2 6\n3 8\n5 12",
            "output": "26"
          },
          {
            "input": "2 5\n2 3\n3 4",
            "output": "7"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nn=int(data[0]);C=int(data[1])\ndp=[0]*(C+1)\nidx=2\nfor _ in range(n):\n    w=int(data[idx]);v=int(data[idx+1]);idx+=2\n    for cap in range(C,w-1,-1):\n        if dp[cap-w]+v>dp[cap]:dp[cap]=dp[cap-w]+v\nprint(max(dp))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,C;cin>>n>>C;vector<int>dp(C+1,0);\nfor(int i=0;i<n;i++){int w,v;cin>>w>>v;\n  for(int c=C;c>=w;c--)if(dp[c-w]+v>dp[c])dp[c]=dp[c-w]+v;}\ncout<<*max_element(dp.begin(),dp.end())<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt(),C=sc.nextInt();\n    int[]dp=new int[C+1];\n    for(int i=0;i<n;i++){int w=sc.nextInt(),v=sc.nextInt();\n      for(int c=C;c>=w;c--)if(dp[c-w]+v>dp[c])dp[c]=dp[c-w]+v;}\n    int mx=0;for(int x:dp)if(x>mx)mx=x;\n    System.out.println(mx);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXCPP070",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "C++ 软件编程等级考试（7级）模拟卷（一）",
    "level": "7级",
    "duration": 120,
    "year": "2026",
    "lang": "cpp",
    "questions": [
      {
        "type": "choice",
        "stem": "最长上升子序列可优化到 O(n log n) 依靠？",
        "options": [
          "线段树",
          "二分 + 贪心",
          "DFS",
          "并查集"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "维护末尾最小值 + 二分。"
      },
      {
        "type": "choice",
        "stem": "下列可用于求最小生成树的是？",
        "options": [
          "Dijkstra",
          "Kruskal / Prim",
          "Floyd",
          "DFS"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "Kruskal 与 Prim 求 MST。"
      },
      {
        "type": "choice",
        "stem": "在 DAG 上做动态规划通常先？",
        "options": [
          "排序",
          "拓扑排序",
          "并查集",
          "哈希"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "按拓扑序递推保证无后效性。"
      },
      {
        "type": "choice",
        "stem": "线段树主要用于？",
        "options": [
          "字符串匹配",
          "区间查询与修改",
          "排序",
          "图遍历"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "支持区间求和、最值、更新。"
      },
      {
        "type": "judge",
        "stem": "若图中存在负权回路，则最短路可能不存在。",
        "answer": "T",
        "score": 5,
        "analysis": "可无限减小。"
      },
      {
        "type": "judge",
        "stem": "并查集经过路径压缩后单次操作接近常数。",
        "answer": "T",
        "score": 5,
        "analysis": "近乎 O(1) 反阿克曼。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "贪心：按结束时间排序，依次选不冲突的。",
        "desc": "输入第一行 n（1 ≤ n ≤ 10^5），随后 n 行每行 l r（区间端点）。输出最多能选出多少个互不重叠的区间（端点相接视为重叠）。",
        "input": "n，然后 n 行 l r。",
        "output": "最多不重叠区间数。",
        "samples": [
          {
            "input": "3\n1 2\n3 4\n5 6",
            "output": "3"
          },
          {
            "input": "3\n1 4\n2 3\n3 5",
            "output": "2"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nn=int(data[0])\niv=[]\nidx=1\nfor _ in range(n):\n    l=int(data[idx]);r=int(data[idx+1]);idx+=2\n    iv.append((r,l))\niv.sort()\ncnt=0;last=-10**18\nfor r,l in iv:\n    if l>=last:\n        cnt+=1;last=r\nprint(cnt)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<pair<int,int>>iv(n);\nfor(int i=0;i<n;i++){int l,r;cin>>l>>r;iv[i]={r,l};}\nsort(iv.begin(),iv.end());\nint cnt=0,last=-2e9;\nfor(auto&p:iv){if(p.second>=last){cnt++;last=p.first;}}\ncout<<cnt<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();\n    int[][]iv=new int[n][2];\n    for(int i=0;i<n;i++){iv[i][0]=sc.nextInt();iv[i][1]=sc.nextInt();}\n    Arrays.sort(iv,(a,b)->Integer.compare(a[1],b[1]));\n    int cnt=0,last=(int)-2e9;\n    for(int[]p:iv){if(p[0]>=last){cnt++;last=p[1];}}\n    System.out.println(cnt);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "并查集维护连通性，最后统计不同根的数量。",
        "desc": "输入第一行 n m（1 ≤ n ≤ 1000，0 ≤ m ≤ n*(n-1)/2），随后 m 行每行 u v 表示一条无向边。输出图的连通块个数。",
        "input": "n m，然后 m 行 u v。",
        "output": "连通块个数。",
        "samples": [
          {
            "input": "5 2\n1 2\n3 4",
            "output": "3"
          },
          {
            "input": "4 3\n1 2\n2 3\n3 4",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nn=int(data[0]);m=int(data[1])\nparent=list(range(n+1))\ndef find(x):\n    while parent[x]!=x:parent[x]=parent[parent[x]];x=parent[x]\n    return x\nidx=2\nfor _ in range(m):\n    u=int(data[idx]);v=int(data[idx+1]);idx+=2\n    pu,pv=find(u),find(v)\n    if pu!=pv:parent[pu]=pv\nroots=set(find(i) for i in range(1,n+1))\nprint(len(roots))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint parent[1005];\nint find(int x){while(parent[x]!=x){parent[x]=parent[parent[x]];x=parent[x];}return x;}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;for(int i=1;i<=n;i++)parent[i]=i;\nfor(int i=0;i<m;i++){int u,v;cin>>u>>v;\n  int pu=find(u),pv=find(v);if(pu!=pv)parent[pu]=pv;}\nint cnt=0;for(int i=1;i<=n;i++)if(find(i)==i)cnt++;\ncout<<cnt<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  static int[]parent;\n  static int find(int x){while(parent[x]!=x){parent[x]=parent[parent[x]];x=parent[x];}return x;}\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt(),m=sc.nextInt();\n    parent=new int[n+1];for(int i=1;i<=n;i++)parent[i]=i;\n    for(int i=0;i<m;i++){int u=sc.nextInt(),v=sc.nextInt();\n      int pu=find(u),pv=find(v);if(pu!=pv)parent[pu]=pv;}\n    int cnt=0;for(int i=1;i<=n;i++)if(find(i)==i)cnt++;\n    System.out.println(cnt);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXCPP071",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "C++ 软件编程等级考试（7级）模拟卷（二）",
    "level": "7级",
    "duration": 120,
    "year": "2026",
    "lang": "cpp",
    "questions": [
      {
        "type": "choice",
        "stem": "Floyd 全源最短路的时间复杂度是？",
        "options": [
          "O(n)",
          "O(n^2)",
          "O(n^3)",
          "O(n log n)"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "三重循环。"
      },
      {
        "type": "choice",
        "stem": "线段树主要用于？",
        "options": [
          "字符串匹配",
          "区间查询与修改",
          "排序",
          "图遍历"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "支持区间求和、最值、更新。"
      },
      {
        "type": "choice",
        "stem": "树状数组（Fenwick）支持高效？",
        "options": [
          "区间求和",
          "排序",
          "最短路",
          "哈希"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "前缀和/区间和更新查询。"
      },
      {
        "type": "choice",
        "stem": "最长上升子序列可优化到 O(n log n) 依靠？",
        "options": [
          "线段树",
          "二分 + 贪心",
          "DFS",
          "并查集"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "维护末尾最小值 + 二分。"
      },
      {
        "type": "judge",
        "stem": "贪心算法对所有问题都能得到最优解。",
        "answer": "F",
        "score": 5,
        "analysis": "仅满足特定条件时。"
      },
      {
        "type": "judge",
        "stem": "用优先队列优化后 Dijkstra 复杂度可达 O((n+m)log n)。",
        "answer": "T",
        "score": 5,
        "analysis": "经典堆优化。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "贪心：按结束时间排序，依次选不冲突的。",
        "desc": "输入 n 个区间 [l,r]，输出能选出多少个两两不重叠的区间。",
        "input": "n，然后 n 行 l r。",
        "output": "不重叠区间数。",
        "samples": [
          {
            "input": "3\n1 2\n3 4\n5 6",
            "output": "3"
          },
          {
            "input": "3\n1 4\n2 3\n3 5",
            "output": "2"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nn=int(data[0])\niv=[]\nidx=1\nfor _ in range(n):\n    l=int(data[idx]);r=int(data[idx+1]);idx+=2\n    iv.append((r,l))\niv.sort()\ncnt=0;last=-10**18\nfor r,l in iv:\n    if l>=last:\n        cnt+=1;last=r\nprint(cnt)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<pair<int,int>>iv(n);\nfor(int i=0;i<n;i++){int l,r;cin>>l>>r;iv[i]={r,l};}\nsort(iv.begin(),iv.end());\nint cnt=0,last=-2e9;\nfor(auto&p:iv){if(p.second>=last){cnt++;last=p.first;}}\ncout<<cnt<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();\n    int[][]iv=new int[n][2];\n    for(int i=0;i<n;i++){iv[i][0]=sc.nextInt();iv[i][1]=sc.nextInt();}\n    Arrays.sort(iv,(a,b)->Integer.compare(a[1],b[1]));\n    int cnt=0,last=(int)-2e9;\n    for(int[]p:iv){if(p[0]>=last){cnt++;last=p[1];}}\n    System.out.println(cnt);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "前缀和 O(1) 回答。",
        "desc": "成绩表：输入 n 个分数与 q 次区间查询，输出每次查询的区间总分。",
        "input": "n q，分数，然后 q 行 l r。",
        "output": "每次查询一行总分。",
        "samples": [
          {
            "input": "5 3\n1 2 3 4 5\n1 3\n2 5\n1 5",
            "output": "6\n14\n15"
          },
          {
            "input": "3 1\n10 20 30\n1 3",
            "output": "60"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nn=int(data[0]);q=int(data[1])\na=[0]*(n+1)\nfor i in range(1,n+1):a[i]=int(data[i+1])\npre=[0]*(n+1)\nfor i in range(1,n+1):pre[i]=pre[i-1]+a[i]\nidx=1+n+1\nout=[]\nfor _ in range(q):\n    l=int(data[idx]);r=int(data[idx+1]);idx+=2\n    out.append(str(pre[r]-pre[l-1]))\nprint('\\n'.join(out))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,q;cin>>n>>q;vector<long long>a(n+1),pre(n+1);\nfor(int i=1;i<=n;i++){cin>>a[i];pre[i]=pre[i-1]+a[i];}\nwhile(q--){int l,r;cin>>l>>r;cout<<pre[r]-pre[l-1]<<endl;}\nreturn 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt(),q=sc.nextInt();\n    long[]pre=new long[n+1];\n    for(int i=1;i<=n;i++){pre[i]=pre[i-1]+sc.nextLong();}\n    StringBuilder sb=new StringBuilder();\n    while(q-->0){int l=sc.nextInt(),r=sc.nextInt();\n      sb.append(pre[r]-pre[l-1]).append('\\n');}\n    System.out.print(sb);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXCPP072",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "C++ 软件编程等级考试（7级）真题卷（大纲同步）",
    "level": "7级",
    "duration": 120,
    "year": "2026",
    "lang": "cpp",
    "questions": [
      {
        "type": "choice",
        "stem": "并查集（Union-Find）常用于？",
        "options": [
          "排序",
          "维护连通性",
          "最短路",
          "哈希"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "高效判断两点是否连通。"
      },
      {
        "type": "choice",
        "stem": "Floyd 全源最短路的时间复杂度是？",
        "options": [
          "O(n)",
          "O(n^2)",
          "O(n^3)",
          "O(n log n)"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "三重循环。"
      },
      {
        "type": "choice",
        "stem": "下列可用于求最小生成树的是？",
        "options": [
          "Dijkstra",
          "Kruskal / Prim",
          "Floyd",
          "DFS"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "Kruskal 与 Prim 求 MST。"
      },
      {
        "type": "choice",
        "stem": "能处理负权边的最短路径算法是？",
        "options": [
          "Dijkstra",
          "Bellman-Ford",
          "Prim",
          "Kruskal"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "Bellman-Ford 支持负权（无负环时）。"
      },
      {
        "type": "judge",
        "stem": "线段树建树的时间复杂度为 O(n log n)。",
        "answer": "T",
        "score": 5,
        "analysis": "n 个叶子，高度 log n。"
      },
      {
        "type": "judge",
        "stem": "若图中存在负权回路，则最短路可能不存在。",
        "answer": "T",
        "score": 5,
        "analysis": "可无限减小。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "Dijkstra + 优先队列。",
        "desc": "输入 n 个节点 m 条带权无向边，输出节点 1 到节点 n 的最短距离，不可达输出 -1。",
        "input": "n m，然后 m 行 u v w。",
        "output": "最短距离或 -1。",
        "samples": [
          {
            "input": "4 4\n1 2 2\n2 3 3\n1 4 9\n3 4 1",
            "output": "6"
          },
          {
            "input": "3 1\n1 2 5",
            "output": "-1"
          }
        ],
        "solutions": {
          "python": "import sys,heapq\ndata=sys.stdin.read().split()\nn=int(data[0]);m=int(data[1])\nadj=[[] for _ in range(n+1)]\nidx=2\nfor _ in range(m):\n    u=int(data[idx]);v=int(data[idx+1]);w=int(data[idx+2]);idx+=3\n    adj[u].append((v,w));adj[v].append((u,w))\ndist=[10**18]*(n+1);dist[1]=0\npq=[(0,1)]\nwhile pq:\n    d,u=heapq.heappop(pq)\n    if d>dist[u]:continue\n    for v,w in adj[u]:\n        if dist[u]+w<dist[v]:\n            dist[v]=dist[u]+w;heapq.heappush(pq,(dist[v],v))\nprint(dist[n] if dist[n]<10**18 else -1)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;\nvector<vector<pair<int,int>>>adj(n+1);\nfor(int i=0;i<m;i++){int u,v,w;cin>>u>>v>>w;\n  adj[u].push_back({v,w});adj[v].push_back({u,w});}\nvector<long long>dist(n+1,1e18);dist[1]=0;\npriority_queue<pair<long long,int>,vector<pair<long long,int>>,greater<>>pq;\npq.push({0,1});\nwhile(!pq.empty()){auto d=pq.top();pq.pop();int u=d.second;\n  if(d.first>dist[u])continue;\n  for(auto&e:adj[u]){int v=e.first,w=e.second;\n    if(dist[u]+w<dist[v]){dist[v]=dist[u]+w;pq.push({dist[v],v});}}}\ncout<<(dist[n]>=1e18?-1:dist[n])<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt(),m=sc.nextInt();\n    ArrayList<ArrayList<int[]>>adj=new ArrayList<>();\n    for(int i=0;i<=n;i++)adj.add(new ArrayList<>());\n    for(int i=0;i<m;i++){int u=sc.nextInt(),v=sc.nextInt(),w=sc.nextInt();\n      adj.get(u).add(new int[]{v,w});adj.get(v).add(new int[]{u,w});}\n    long[]dist=new long[n+1];Arrays.fill(dist,Long.MAX_VALUE/2);dist[1]=0;\n    PriorityQueue<long[]>pq=new PriorityQueue<>((a,b)->Long.compare(a[0],b[0]));\n    pq.add(new long[]{0,1});\n    while(!pq.isEmpty()){long[]t=pq.poll();long d=t[0];int u=(int)t[1];\n      if(d>dist[u])continue;\n      for(int[]e:adj.get(u)){int v=e[0],w=e[1];\n        if(dist[u]+w<dist[v]){dist[v]=dist[u]+w;pq.add(new long[]{dist[v],v});}}}\n    System.out.println(dist[n]>=Long.MAX_VALUE/2?-1:dist[n]);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "前缀和 O(1) 回答。",
        "desc": "成绩表：输入 n 个分数与 q 次区间查询，输出每次查询的区间总分。",
        "input": "n q，分数，然后 q 行 l r。",
        "output": "每次查询一行总分。",
        "samples": [
          {
            "input": "5 3\n1 2 3 4 5\n1 3\n2 5\n1 5",
            "output": "6\n14\n15"
          },
          {
            "input": "3 1\n10 20 30\n1 3",
            "output": "60"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nn=int(data[0]);q=int(data[1])\na=[0]*(n+1)\nfor i in range(1,n+1):a[i]=int(data[i+1])\npre=[0]*(n+1)\nfor i in range(1,n+1):pre[i]=pre[i-1]+a[i]\nidx=1+n+1\nout=[]\nfor _ in range(q):\n    l=int(data[idx]);r=int(data[idx+1]);idx+=2\n    out.append(str(pre[r]-pre[l-1]))\nprint('\\n'.join(out))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,q;cin>>n>>q;vector<long long>a(n+1),pre(n+1);\nfor(int i=1;i<=n;i++){cin>>a[i];pre[i]=pre[i-1]+a[i];}\nwhile(q--){int l,r;cin>>l>>r;cout<<pre[r]-pre[l-1]<<endl;}\nreturn 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt(),q=sc.nextInt();\n    long[]pre=new long[n+1];\n    for(int i=1;i<=n;i++){pre[i]=pre[i-1]+sc.nextLong();}\n    StringBuilder sb=new StringBuilder();\n    while(q-->0){int l=sc.nextInt(),r=sc.nextInt();\n      sb.append(pre[r]-pre[l-1]).append('\\n');}\n    System.out.print(sb);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXCPP080",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "C++ 软件编程等级考试（8级）模拟卷（一）",
    "level": "8级",
    "duration": 120,
    "year": "2026",
    "lang": "cpp",
    "questions": [
      {
        "type": "choice",
        "stem": "求有向图的强连通分量可用？",
        "options": [
          "Dijkstra",
          "Kosaraju / Tarjan",
          "Prim",
          "冒泡"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "这两种是经典 SCC 算法。"
      },
      {
        "type": "choice",
        "stem": "区间调度贪心应按什么排序？",
        "options": [
          "开始时间",
          "结束时间",
          "区间长度",
          "权重"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "每次选结束最早且不冲突的。"
      },
      {
        "type": "choice",
        "stem": "Floyd 全源最短路的时间复杂度是？",
        "options": [
          "O(n)",
          "O(n^2)",
          "O(n^3)",
          "O(n log n)"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "三重循环。"
      },
      {
        "type": "choice",
        "stem": "最长上升子序列可优化到 O(n log n) 依靠？",
        "options": [
          "线段树",
          "二分 + 贪心",
          "DFS",
          "并查集"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "维护末尾最小值 + 二分。"
      },
      {
        "type": "judge",
        "stem": "Kruskal 算法按边权从小到大逐步加边。",
        "answer": "T",
        "score": 5,
        "analysis": "贪心加不会成环的边。"
      },
      {
        "type": "judge",
        "stem": "若图中存在负权回路，则最短路可能不存在。",
        "answer": "T",
        "score": 5,
        "analysis": "可无限减小。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "并查集维护连通性，最后统计不同根的数量。",
        "desc": "社交网络：输入 n 人 m 条好友关系，输出有多少个互不相连的朋友圈。",
        "input": "n m，然后 m 行 u v。",
        "output": "朋友圈个数。",
        "samples": [
          {
            "input": "5 2\n1 2\n3 4",
            "output": "3"
          },
          {
            "input": "4 3\n1 2\n2 3\n3 4",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nn=int(data[0]);m=int(data[1])\nparent=list(range(n+1))\ndef find(x):\n    while parent[x]!=x:parent[x]=parent[parent[x]];x=parent[x]\n    return x\nidx=2\nfor _ in range(m):\n    u=int(data[idx]);v=int(data[idx+1]);idx+=2\n    pu,pv=find(u),find(v)\n    if pu!=pv:parent[pu]=pv\nroots=set(find(i) for i in range(1,n+1))\nprint(len(roots))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint parent[1005];\nint find(int x){while(parent[x]!=x){parent[x]=parent[parent[x]];x=parent[x];}return x;}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;for(int i=1;i<=n;i++)parent[i]=i;\nfor(int i=0;i<m;i++){int u,v;cin>>u>>v;\n  int pu=find(u),pv=find(v);if(pu!=pv)parent[pu]=pv;}\nint cnt=0;for(int i=1;i<=n;i++)if(find(i)==i)cnt++;\ncout<<cnt<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  static int[]parent;\n  static int find(int x){while(parent[x]!=x){parent[x]=parent[parent[x]];x=parent[x];}return x;}\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt(),m=sc.nextInt();\n    parent=new int[n+1];for(int i=1;i<=n;i++)parent[i]=i;\n    for(int i=0;i<m;i++){int u=sc.nextInt(),v=sc.nextInt();\n      int pu=find(u),pv=find(v);if(pu!=pv)parent[pu]=pv;}\n    int cnt=0;for(int i=1;i<=n;i++)if(find(i)==i)cnt++;\n    System.out.println(cnt);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "Dijkstra + 优先队列。",
        "desc": "城市间道路：输入无向图 n 点 m 边及边权，输出 1 号城市到 n 号城市的最短路径长度，不连通输出 -1。",
        "input": "n m，然后 m 行 u v w。",
        "output": "最短距离或 -1。",
        "samples": [
          {
            "input": "4 4\n1 2 2\n2 3 3\n1 4 9\n3 4 1",
            "output": "6"
          },
          {
            "input": "3 1\n1 2 5",
            "output": "-1"
          }
        ],
        "solutions": {
          "python": "import sys,heapq\ndata=sys.stdin.read().split()\nn=int(data[0]);m=int(data[1])\nadj=[[] for _ in range(n+1)]\nidx=2\nfor _ in range(m):\n    u=int(data[idx]);v=int(data[idx+1]);w=int(data[idx+2]);idx+=3\n    adj[u].append((v,w));adj[v].append((u,w))\ndist=[10**18]*(n+1);dist[1]=0\npq=[(0,1)]\nwhile pq:\n    d,u=heapq.heappop(pq)\n    if d>dist[u]:continue\n    for v,w in adj[u]:\n        if dist[u]+w<dist[v]:\n            dist[v]=dist[u]+w;heapq.heappush(pq,(dist[v],v))\nprint(dist[n] if dist[n]<10**18 else -1)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;\nvector<vector<pair<int,int>>>adj(n+1);\nfor(int i=0;i<m;i++){int u,v,w;cin>>u>>v>>w;\n  adj[u].push_back({v,w});adj[v].push_back({u,w});}\nvector<long long>dist(n+1,1e18);dist[1]=0;\npriority_queue<pair<long long,int>,vector<pair<long long,int>>,greater<>>pq;\npq.push({0,1});\nwhile(!pq.empty()){auto d=pq.top();pq.pop();int u=d.second;\n  if(d.first>dist[u])continue;\n  for(auto&e:adj[u]){int v=e.first,w=e.second;\n    if(dist[u]+w<dist[v]){dist[v]=dist[u]+w;pq.push({dist[v],v});}}}\ncout<<(dist[n]>=1e18?-1:dist[n])<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt(),m=sc.nextInt();\n    ArrayList<ArrayList<int[]>>adj=new ArrayList<>();\n    for(int i=0;i<=n;i++)adj.add(new ArrayList<>());\n    for(int i=0;i<m;i++){int u=sc.nextInt(),v=sc.nextInt(),w=sc.nextInt();\n      adj.get(u).add(new int[]{v,w});adj.get(v).add(new int[]{u,w});}\n    long[]dist=new long[n+1];Arrays.fill(dist,Long.MAX_VALUE/2);dist[1]=0;\n    PriorityQueue<long[]>pq=new PriorityQueue<>((a,b)->Long.compare(a[0],b[0]));\n    pq.add(new long[]{0,1});\n    while(!pq.isEmpty()){long[]t=pq.poll();long d=t[0];int u=(int)t[1];\n      if(d>dist[u])continue;\n      for(int[]e:adj.get(u)){int v=e[0],w=e[1];\n        if(dist[u]+w<dist[v]){dist[v]=dist[u]+w;pq.add(new long[]{dist[v],v});}}}\n    System.out.println(dist[n]>=Long.MAX_VALUE/2?-1:dist[n]);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXCPP081",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "C++ 软件编程等级考试（8级）模拟卷（二）",
    "level": "8级",
    "duration": 120,
    "year": "2026",
    "lang": "cpp",
    "questions": [
      {
        "type": "choice",
        "stem": "能处理负权边的最短路径算法是？",
        "options": [
          "Dijkstra",
          "Bellman-Ford",
          "Prim",
          "Kruskal"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "Bellman-Ford 支持负权（无负环时）。"
      },
      {
        "type": "choice",
        "stem": "贪心算法能保证最优的条件是？",
        "options": [
          "总是最优",
          "具备贪心选择性质与最优子结构",
          "随机",
          "分治"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "满足这两条才可得全局最优。"
      },
      {
        "type": "choice",
        "stem": "求有向图的强连通分量可用？",
        "options": [
          "Dijkstra",
          "Kosaraju / Tarjan",
          "Prim",
          "冒泡"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "这两种是经典 SCC 算法。"
      },
      {
        "type": "choice",
        "stem": "线段树主要用于？",
        "options": [
          "字符串匹配",
          "区间查询与修改",
          "排序",
          "图遍历"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "支持区间求和、最值、更新。"
      },
      {
        "type": "judge",
        "stem": "用优先队列优化后 Dijkstra 复杂度可达 O((n+m)log n)。",
        "answer": "T",
        "score": 5,
        "analysis": "经典堆优化。"
      },
      {
        "type": "judge",
        "stem": "若图中存在负权回路，则最短路可能不存在。",
        "answer": "T",
        "score": 5,
        "analysis": "可无限减小。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "并查集维护连通性，最后统计不同根的数量。",
        "desc": "输入第一行 n m（1 ≤ n ≤ 1000，0 ≤ m ≤ n*(n-1)/2），随后 m 行每行 u v 表示一条无向边。输出图的连通块个数。",
        "input": "n m，然后 m 行 u v。",
        "output": "连通块个数。",
        "samples": [
          {
            "input": "5 2\n1 2\n3 4",
            "output": "3"
          },
          {
            "input": "4 3\n1 2\n2 3\n3 4",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nn=int(data[0]);m=int(data[1])\nparent=list(range(n+1))\ndef find(x):\n    while parent[x]!=x:parent[x]=parent[parent[x]];x=parent[x]\n    return x\nidx=2\nfor _ in range(m):\n    u=int(data[idx]);v=int(data[idx+1]);idx+=2\n    pu,pv=find(u),find(v)\n    if pu!=pv:parent[pu]=pv\nroots=set(find(i) for i in range(1,n+1))\nprint(len(roots))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint parent[1005];\nint find(int x){while(parent[x]!=x){parent[x]=parent[parent[x]];x=parent[x];}return x;}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;for(int i=1;i<=n;i++)parent[i]=i;\nfor(int i=0;i<m;i++){int u,v;cin>>u>>v;\n  int pu=find(u),pv=find(v);if(pu!=pv)parent[pu]=pv;}\nint cnt=0;for(int i=1;i<=n;i++)if(find(i)==i)cnt++;\ncout<<cnt<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  static int[]parent;\n  static int find(int x){while(parent[x]!=x){parent[x]=parent[parent[x]];x=parent[x];}return x;}\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt(),m=sc.nextInt();\n    parent=new int[n+1];for(int i=1;i<=n;i++)parent[i]=i;\n    for(int i=0;i<m;i++){int u=sc.nextInt(),v=sc.nextInt();\n      int pu=find(u),pv=find(v);if(pu!=pv)parent[pu]=pv;}\n    int cnt=0;for(int i=1;i<=n;i++)if(find(i)==i)cnt++;\n    System.out.println(cnt);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "Dijkstra + 优先队列。",
        "desc": "城市间道路：输入无向图 n 点 m 边及边权，输出 1 号城市到 n 号城市的最短路径长度，不连通输出 -1。",
        "input": "n m，然后 m 行 u v w。",
        "output": "最短距离或 -1。",
        "samples": [
          {
            "input": "4 4\n1 2 2\n2 3 3\n1 4 9\n3 4 1",
            "output": "6"
          },
          {
            "input": "3 1\n1 2 5",
            "output": "-1"
          }
        ],
        "solutions": {
          "python": "import sys,heapq\ndata=sys.stdin.read().split()\nn=int(data[0]);m=int(data[1])\nadj=[[] for _ in range(n+1)]\nidx=2\nfor _ in range(m):\n    u=int(data[idx]);v=int(data[idx+1]);w=int(data[idx+2]);idx+=3\n    adj[u].append((v,w));adj[v].append((u,w))\ndist=[10**18]*(n+1);dist[1]=0\npq=[(0,1)]\nwhile pq:\n    d,u=heapq.heappop(pq)\n    if d>dist[u]:continue\n    for v,w in adj[u]:\n        if dist[u]+w<dist[v]:\n            dist[v]=dist[u]+w;heapq.heappush(pq,(dist[v],v))\nprint(dist[n] if dist[n]<10**18 else -1)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;\nvector<vector<pair<int,int>>>adj(n+1);\nfor(int i=0;i<m;i++){int u,v,w;cin>>u>>v>>w;\n  adj[u].push_back({v,w});adj[v].push_back({u,w});}\nvector<long long>dist(n+1,1e18);dist[1]=0;\npriority_queue<pair<long long,int>,vector<pair<long long,int>>,greater<>>pq;\npq.push({0,1});\nwhile(!pq.empty()){auto d=pq.top();pq.pop();int u=d.second;\n  if(d.first>dist[u])continue;\n  for(auto&e:adj[u]){int v=e.first,w=e.second;\n    if(dist[u]+w<dist[v]){dist[v]=dist[u]+w;pq.push({dist[v],v});}}}\ncout<<(dist[n]>=1e18?-1:dist[n])<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt(),m=sc.nextInt();\n    ArrayList<ArrayList<int[]>>adj=new ArrayList<>();\n    for(int i=0;i<=n;i++)adj.add(new ArrayList<>());\n    for(int i=0;i<m;i++){int u=sc.nextInt(),v=sc.nextInt(),w=sc.nextInt();\n      adj.get(u).add(new int[]{v,w});adj.get(v).add(new int[]{u,w});}\n    long[]dist=new long[n+1];Arrays.fill(dist,Long.MAX_VALUE/2);dist[1]=0;\n    PriorityQueue<long[]>pq=new PriorityQueue<>((a,b)->Long.compare(a[0],b[0]));\n    pq.add(new long[]{0,1});\n    while(!pq.isEmpty()){long[]t=pq.poll();long d=t[0];int u=(int)t[1];\n      if(d>dist[u])continue;\n      for(int[]e:adj.get(u)){int v=e[0],w=e[1];\n        if(dist[u]+w<dist[v]){dist[v]=dist[u]+w;pq.add(new long[]{dist[v],v});}}}\n    System.out.println(dist[n]>=Long.MAX_VALUE/2?-1:dist[n]);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXCPP082",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "C++ 软件编程等级考试（8级）真题卷（大纲同步）",
    "level": "8级",
    "duration": 120,
    "year": "2026",
    "lang": "cpp",
    "questions": [
      {
        "type": "choice",
        "stem": "Floyd 全源最短路的时间复杂度是？",
        "options": [
          "O(n)",
          "O(n^2)",
          "O(n^3)",
          "O(n log n)"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "三重循环。"
      },
      {
        "type": "choice",
        "stem": "区间调度贪心应按什么排序？",
        "options": [
          "开始时间",
          "结束时间",
          "区间长度",
          "权重"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "每次选结束最早且不冲突的。"
      },
      {
        "type": "choice",
        "stem": "贪心算法能保证最优的条件是？",
        "options": [
          "总是最优",
          "具备贪心选择性质与最优子结构",
          "随机",
          "分治"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "满足这两条才可得全局最优。"
      },
      {
        "type": "choice",
        "stem": "并查集（Union-Find）常用于？",
        "options": [
          "排序",
          "维护连通性",
          "最短路",
          "哈希"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "高效判断两点是否连通。"
      },
      {
        "type": "judge",
        "stem": "线段树建树的时间复杂度为 O(n log n)。",
        "answer": "T",
        "score": 5,
        "analysis": "n 个叶子，高度 log n。"
      },
      {
        "type": "judge",
        "stem": "用优先队列优化后 Dijkstra 复杂度可达 O((n+m)log n)。",
        "answer": "T",
        "score": 5,
        "analysis": "经典堆优化。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "贪心：按结束时间排序，依次选不冲突的。",
        "desc": "会议室安排：输入 n 场会议的起止时间，输出最多可安排的不冲突会议数。",
        "input": "n，然后 n 行 l r。",
        "output": "最多会议数。",
        "samples": [
          {
            "input": "3\n1 2\n3 4\n5 6",
            "output": "3"
          },
          {
            "input": "3\n1 4\n2 3\n3 5",
            "output": "2"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nn=int(data[0])\niv=[]\nidx=1\nfor _ in range(n):\n    l=int(data[idx]);r=int(data[idx+1]);idx+=2\n    iv.append((r,l))\niv.sort()\ncnt=0;last=-10**18\nfor r,l in iv:\n    if l>=last:\n        cnt+=1;last=r\nprint(cnt)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<pair<int,int>>iv(n);\nfor(int i=0;i<n;i++){int l,r;cin>>l>>r;iv[i]={r,l};}\nsort(iv.begin(),iv.end());\nint cnt=0,last=-2e9;\nfor(auto&p:iv){if(p.second>=last){cnt++;last=p.first;}}\ncout<<cnt<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();\n    int[][]iv=new int[n][2];\n    for(int i=0;i<n;i++){iv[i][0]=sc.nextInt();iv[i][1]=sc.nextInt();}\n    Arrays.sort(iv,(a,b)->Integer.compare(a[1],b[1]));\n    int cnt=0,last=(int)-2e9;\n    for(int[]p:iv){if(p[0]>=last){cnt++;last=p[1];}}\n    System.out.println(cnt);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "前缀和 O(1) 回答。",
        "desc": "输入第一行 n q（1 ≤ n, q ≤ 10^5），第二行 n 个整数 a[1..n]，随后 q 行每行 l r，输出区间 [l, r] 的元素和。",
        "input": "n q，数组，然后 q 行 l r。",
        "output": "每个查询一行，区间和。",
        "samples": [
          {
            "input": "5 3\n1 2 3 4 5\n1 3\n2 5\n1 5",
            "output": "6\n14\n15"
          },
          {
            "input": "3 1\n10 20 30\n1 3",
            "output": "60"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nn=int(data[0]);q=int(data[1])\na=[0]*(n+1)\nfor i in range(1,n+1):a[i]=int(data[i+1])\npre=[0]*(n+1)\nfor i in range(1,n+1):pre[i]=pre[i-1]+a[i]\nidx=1+n+1\nout=[]\nfor _ in range(q):\n    l=int(data[idx]);r=int(data[idx+1]);idx+=2\n    out.append(str(pre[r]-pre[l-1]))\nprint('\\n'.join(out))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,q;cin>>n>>q;vector<long long>a(n+1),pre(n+1);\nfor(int i=1;i<=n;i++){cin>>a[i];pre[i]=pre[i-1]+a[i];}\nwhile(q--){int l,r;cin>>l>>r;cout<<pre[r]-pre[l-1]<<endl;}\nreturn 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt(),q=sc.nextInt();\n    long[]pre=new long[n+1];\n    for(int i=1;i<=n;i++){pre[i]=pre[i-1]+sc.nextLong();}\n    StringBuilder sb=new StringBuilder();\n    while(q-->0){int l=sc.nextInt(),r=sc.nextInt();\n      sb.append(pre[r]-pre[l-1]).append('\\n');}\n    System.out.print(sb);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXCPP090",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "C++ 软件编程等级考试（9级）模拟卷（一）",
    "level": "9级",
    "duration": 120,
    "year": "2026",
    "lang": "cpp",
    "questions": [
      {
        "type": "choice",
        "stem": "容斥原理主要用于？",
        "options": [
          "排序",
          "多个集合的并/交计数",
          "最短路",
          "贪心"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "处理重复计数的抵消。"
      },
      {
        "type": "choice",
        "stem": "状态压缩动态规划常用于？",
        "options": [
          "大数组",
          "小规模集合（如子集）",
          "字符串",
          "树"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "用二进制位表示集合状态。"
      },
      {
        "type": "choice",
        "stem": "Miller-Rabin 算法用于？",
        "options": [
          "排序",
          "大整数素数判定",
          "最短路",
          "哈希"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "概率性素数测试。"
      },
      {
        "type": "choice",
        "stem": "卡特兰数常用于计数以下哪类对象？",
        "options": [
          "全排列",
          "合法括号序列 / 出栈序列",
          "素数",
          "最短路"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "卡特兰数经典应用。"
      },
      {
        "type": "judge",
        "stem": "目前没有已知多项式时间算法能求解所有 NP 完全问题。",
        "answer": "T",
        "score": 5,
        "analysis": "P≠NP 猜想下成立。"
      },
      {
        "type": "judge",
        "stem": "在模素数意义下，可用费马小定理求乘法逆元。",
        "answer": "T",
        "score": 5,
        "analysis": "a^(p-2) mod p。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "二维 DP：dp[i][j]=dp[i-1][j-1]+1（相等）或 max(上,左)。",
        "desc": "比对两段序列（仅字母），输入两行字符串，输出最长公共子序列长度。",
        "input": "两行，字符串。",
        "output": "LCS 长度。",
        "samples": [
          {
            "input": "abcde\nbace",
            "output": "3"
          },
          {
            "input": "abcd\nacd",
            "output": "3"
          }
        ],
        "solutions": {
          "python": "import sys\ns=sys.stdin.read().split()\na=s[0];b=s[1]\nn=len(a);m=len(b)\ndp=[[0]*(m+1) for _ in range(n+1)]\nfor i in range(n):\n    for j in range(m):\n        dp[i+1][j+1]=dp[i][j]+1 if a[i]==b[j] else max(dp[i][j+1],dp[i+1][j])\nprint(dp[n][m])",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring a,b;cin>>a>>b;\nint n=a.size(),m=b.size();\nvector<vector<int>>dp(n+1,vector<int>(m+1,0));\nfor(int i=0;i<n;i++)for(int j=0;j<m;j++)\n  dp[i+1][j+1]=a[i]==b[j]?dp[i][j]+1:max(dp[i][j+1],dp[i+1][j]);\ncout<<dp[n][m]<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    String a=sc.next(),b=sc.next();\n    int n=a.length(),m=b.length();\n    int[][]dp=new int[n+1][m+1];\n    for(int i=0;i<n;i++)for(int j=0;j<m;j++)\n      dp[i+1][j+1]=a.charAt(i)==b.charAt(j)?dp[i][j]+1:Math.max(dp[i][j+1],dp[i+1][j]);\n    System.out.println(dp[n][m]);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "利用 C(n,k)=C(n,k-1)*(n-k+1)/k，边乘边取模（k 较大时用逆元）。",
        "desc": "输入两个整数 n, k（0 ≤ k ≤ n ≤ 1000），输出组合数 C(n,k) 模 1000000007 的值。",
        "input": "一行，n k。",
        "output": "C(n,k) mod 1000000007。",
        "samples": [
          {
            "input": "5 2",
            "output": "10"
          },
          {
            "input": "10 3",
            "output": "120"
          }
        ],
        "solutions": {
          "python": "import sys\nMOD=1000000007\nn,k=map(int,sys.stdin.read().split())\nif k<0 or k>n:print(0)\nelse:\n    k=min(k,n-k);res=1\n    for i in range(1,k+1):\n        res=res*(n-k+i)//i%MOD\n    print(res%MOD)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nconst long long MOD=1000000007;\nlong long modpow(long long a,long long e){long long r=1;while(e){if(e&1)r=r*a%MOD;a=a*a%MOD;e>>=1;}return r;}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long n,k;cin>>n>>k;\nif(k<0||k>n){cout<<0<<endl;return 0;}\nif(k>n-k)k=n-k;long long res=1;\nfor(long long i=1;i<=k;i++){\n  res=res*(n-k+i)%MOD;\n  res=res*modpow(i,MOD-2)%MOD;\n}\ncout<<res<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  static long MOD=1000000007;\n  static long modpow(long a,long e){long r=1;while(e>0){if((e&1)==1)r=r*a%MOD;a=a*a%MOD;e>>=1;}return r;}\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long n=sc.nextLong(),k=sc.nextLong();\n    if(k<0||k>n){System.out.println(0);return;}\n    if(k>n-k)k=n-k;long res=1;\n    for(long i=1;i<=k;i++){\n      res=res*(n-k+i)%MOD;\n      res=res*modpow(i,MOD-2)%MOD;\n    }\n    System.out.println(res);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXCPP091",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "C++ 软件编程等级考试（9级）模拟卷（二）",
    "level": "9级",
    "duration": 120,
    "year": "2026",
    "lang": "cpp",
    "questions": [
      {
        "type": "choice",
        "stem": "卡特兰数常用于计数以下哪类对象？",
        "options": [
          "全排列",
          "合法括号序列 / 出栈序列",
          "素数",
          "最短路"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "卡特兰数经典应用。"
      },
      {
        "type": "choice",
        "stem": "Edmonds-Karp 最大流复杂度约为？",
        "options": [
          "O(E)",
          "O(VE^2)",
          "O(V^2)",
          "O(E log V)"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "每次 BFS 增广，最多 VE 次。"
      },
      {
        "type": "choice",
        "stem": "Miller-Rabin 算法用于？",
        "options": [
          "排序",
          "大整数素数判定",
          "最短路",
          "哈希"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "概率性素数测试。"
      },
      {
        "type": "choice",
        "stem": "容斥原理主要用于？",
        "options": [
          "排序",
          "多个集合的并/交计数",
          "最短路",
          "贪心"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "处理重复计数的抵消。"
      },
      {
        "type": "judge",
        "stem": "目前没有已知多项式时间算法能求解所有 NP 完全问题。",
        "answer": "T",
        "score": 5,
        "analysis": "P≠NP 猜想下成立。"
      },
      {
        "type": "judge",
        "stem": "在模素数意义下，可用费马小定理求乘法逆元。",
        "answer": "T",
        "score": 5,
        "analysis": "a^(p-2) mod p。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "利用 C(n,k)=C(n,k-1)*(n-k+1)/k，边乘边取模（k 较大时用逆元）。",
        "desc": "输入两个整数 n, k（0 ≤ k ≤ n ≤ 1000），输出组合数 C(n,k) 模 1000000007 的值。",
        "input": "一行，n k。",
        "output": "C(n,k) mod 1000000007。",
        "samples": [
          {
            "input": "5 2",
            "output": "10"
          },
          {
            "input": "10 3",
            "output": "120"
          }
        ],
        "solutions": {
          "python": "import sys\nMOD=1000000007\nn,k=map(int,sys.stdin.read().split())\nif k<0 or k>n:print(0)\nelse:\n    k=min(k,n-k);res=1\n    for i in range(1,k+1):\n        res=res*(n-k+i)//i%MOD\n    print(res%MOD)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nconst long long MOD=1000000007;\nlong long modpow(long long a,long long e){long long r=1;while(e){if(e&1)r=r*a%MOD;a=a*a%MOD;e>>=1;}return r;}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long n,k;cin>>n>>k;\nif(k<0||k>n){cout<<0<<endl;return 0;}\nif(k>n-k)k=n-k;long long res=1;\nfor(long long i=1;i<=k;i++){\n  res=res*(n-k+i)%MOD;\n  res=res*modpow(i,MOD-2)%MOD;\n}\ncout<<res<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  static long MOD=1000000007;\n  static long modpow(long a,long e){long r=1;while(e>0){if((e&1)==1)r=r*a%MOD;a=a*a%MOD;e>>=1;}return r;}\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long n=sc.nextLong(),k=sc.nextLong();\n    if(k<0||k>n){System.out.println(0);return;}\n    if(k>n-k)k=n-k;long res=1;\n    for(long i=1;i<=k;i++){\n      res=res*(n-k+i)%MOD;\n      res=res*modpow(i,MOD-2)%MOD;\n    }\n    System.out.println(res);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "φ(n)=n*Π(1-1/p)，分解素因子后累乘。",
        "desc": "输入一个整数 n（1 ≤ n ≤ 10^6），输出欧拉函数 φ(n)（小于等于 n 且与 n 互质的正整数个数）。",
        "input": "一行，整数 n。",
        "output": "φ(n)。",
        "samples": [
          {
            "input": "9",
            "output": "6"
          },
          {
            "input": "12",
            "output": "4"
          }
        ],
        "solutions": {
          "python": "import sys\nn=int(sys.stdin.read().strip())\nres=n;i=2\nwhile i*i<=n:\n    if n%i==0:\n        while n%i==0:n//=i\n        res-=res//i\n    i+=1\nif n>1:res-=res//n\nprint(res)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long n;cin>>n;long long res=n;\nfor(long long i=2;i*i<=n;i++)if(n%i==0){\n  while(n%i==0)n/=i;res-=res/i;}\nif(n>1)res-=res/n;\ncout<<res<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long n=sc.nextLong();long res=n;\n    for(long i=2;i*i<=n;i++)if(n%i==0){\n      while(n%i==0)n/=i;res-=res/i;}\n    if(n>1)res-=res/n;\n    System.out.println(res);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXCPP092",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "C++ 软件编程等级考试（9级）真题卷（大纲同步）",
    "level": "9级",
    "duration": 120,
    "year": "2026",
    "lang": "cpp",
    "questions": [
      {
        "type": "choice",
        "stem": "Edmonds-Karp 最大流复杂度约为？",
        "options": [
          "O(E)",
          "O(VE^2)",
          "O(V^2)",
          "O(E log V)"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "每次 BFS 增广，最多 VE 次。"
      },
      {
        "type": "choice",
        "stem": "卡特兰数常用于计数以下哪类对象？",
        "options": [
          "全排列",
          "合法括号序列 / 出栈序列",
          "素数",
          "最短路"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "卡特兰数经典应用。"
      },
      {
        "type": "choice",
        "stem": "欧拉函数 φ(n) 表示？",
        "options": [
          "n 的因子个数",
          "小于 n 且与 n 互质的个数",
          "n 的质因数个数",
          "n!"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "经典数论函数。"
      },
      {
        "type": "choice",
        "stem": "二分图最大匹配可用？",
        "options": [
          "匈牙利算法",
          "冒泡",
          "快排",
          "Dijkstra"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "匈牙利算法（增广路）。"
      },
      {
        "type": "judge",
        "stem": "矩阵快速幂可以把线性递推优化到 O(log n)。",
        "answer": "T",
        "score": 5,
        "analysis": "状态矩阵自乘。"
      },
      {
        "type": "judge",
        "stem": "容斥原理可处理多个集合并集的计数。",
        "answer": "T",
        "score": 5,
        "analysis": "加交减交。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "φ(n)=n*Π(1-1/p)，分解素因子后累乘。",
        "desc": "输入 n（1 ≤ n ≤ 10^6），输出欧拉函数 φ(n)。",
        "input": "一行，整数 n。",
        "output": "φ(n)。",
        "samples": [
          {
            "input": "9",
            "output": "6"
          },
          {
            "input": "12",
            "output": "4"
          }
        ],
        "solutions": {
          "python": "import sys\nn=int(sys.stdin.read().strip())\nres=n;i=2\nwhile i*i<=n:\n    if n%i==0:\n        while n%i==0:n//=i\n        res-=res//i\n    i+=1\nif n>1:res-=res//n\nprint(res)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long n;cin>>n;long long res=n;\nfor(long long i=2;i*i<=n;i++)if(n%i==0){\n  while(n%i==0)n/=i;res-=res/i;}\nif(n>1)res-=res/n;\ncout<<res<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long n=sc.nextLong();long res=n;\n    for(long i=2;i*i<=n;i++)if(n%i==0){\n      while(n%i==0)n/=i;res-=res/i;}\n    if(n>1)res-=res/n;\n    System.out.println(res);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "Kruskal：按边权排序，并查集合并。",
        "desc": "带权无向图 n 点 m 边，输出最小生成树的总边权，不连通输出 -1。",
        "input": "n m，然后 m 行 u v w。",
        "output": "MST 总边权或 -1。",
        "samples": [
          {
            "input": "4 5\n1 2 1\n2 3 2\n3 4 3\n1 3 4\n2 4 5",
            "output": "6"
          },
          {
            "input": "3 1\n1 2 5",
            "output": "-1"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nn=int(data[0]);m=int(data[1])\nedges=[]\nidx=2\nfor _ in range(m):\n    u=int(data[idx]);v=int(data[idx+1]);w=int(data[idx+2]);idx+=3\n    edges.append((w,u,v))\nedges.sort()\nparent=list(range(n+1))\ndef find(x):\n    while parent[x]!=x:parent[x]=parent[parent[x]];x=parent[x]\n    return x\ntot=0;cnt=0\nfor w,u,v in edges:\n    pu,pv=find(u),find(v)\n    if pu!=pv:\n        parent[pu]=pv;tot+=w;cnt+=1\n        if cnt==n-1:break\nprint(tot if cnt==n-1 else -1)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint parent[105];\nint find(int x){while(parent[x]!=x){parent[x]=parent[parent[x]];x=parent[x];}return x;}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<tuple<int,int,int>>e(m);\nfor(int i=0;i<m;i++){int u,v,w;cin>>u>>v>>w;e[i]={w,u,v};}\nsort(e.begin(),e.end());\nfor(int i=1;i<=n;i++)parent[i]=i;\nlong long tot=0;int cnt=0;\nfor(auto&x:e){int w=get<0>(x),u=get<1>(x),v=get<2>(x);\n  int pu=find(u),pv=find(v);if(pu!=pv){parent[pu]=pv;tot+=w;cnt++;if(cnt==n-1)break;}}\ncout<<(cnt==n-1?tot:-1)<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  static int[]parent;\n  static int find(int x){while(parent[x]!=x){parent[x]=parent[parent[x]];x=parent[x];}return x;}\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt(),m=sc.nextInt();\n    int[][]e=new int[m][3];\n    for(int i=0;i<m;i++){e[i][0]=sc.nextInt();e[i][1]=sc.nextInt();e[i][2]=sc.nextInt();}\n    Arrays.sort(e,(a,b)->Integer.compare(a[0],b[0]));\n    parent=new int[n+1];for(int i=1;i<=n;i++)parent[i]=i;\n    long tot=0;int cnt=0;\n    for(int[]x:e){int w=x[0],u=x[1],v=x[2];\n      int pu=find(u),pv=find(v);if(pu!=pv){parent[pu]=pv;tot+=w;cnt++;if(cnt==n-1)break;}}\n    System.out.println(cnt==n-1?tot:-1);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXCPP100",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "C++ 软件编程等级考试（10级）模拟卷（一）",
    "level": "10级",
    "duration": 120,
    "year": "2026",
    "lang": "cpp",
    "questions": [
      {
        "type": "choice",
        "stem": "矩阵快速幂可用于加速？",
        "options": [
          "排序",
          "线性递推",
          "最短路",
          "哈希"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "将递推优化到 O(log n)。"
      },
      {
        "type": "choice",
        "stem": "Edmonds-Karp 最大流复杂度约为？",
        "options": [
          "O(E)",
          "O(VE^2)",
          "O(V^2)",
          "O(E log V)"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "每次 BFS 增广，最多 VE 次。"
      },
      {
        "type": "choice",
        "stem": "模意义下的除法（求 a/b mod p）需要？",
        "options": [
          "直接除",
          "乘法逆元",
          "减法",
          "取整"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "除以 b 等价于乘 b 的逆元。"
      },
      {
        "type": "choice",
        "stem": "Miller-Rabin 算法用于？",
        "options": [
          "排序",
          "大整数素数判定",
          "最短路",
          "哈希"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "概率性素数测试。"
      },
      {
        "type": "judge",
        "stem": "目前没有已知多项式时间算法能求解所有 NP 完全问题。",
        "answer": "T",
        "score": 5,
        "analysis": "P≠NP 猜想下成立。"
      },
      {
        "type": "judge",
        "stem": "容斥原理可处理多个集合并集的计数。",
        "answer": "T",
        "score": 5,
        "analysis": "加交减交。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "Kruskal：按边权排序，并查集合并。",
        "desc": "输入第一行 n m（2 ≤ n ≤ 100，1 ≤ m ≤ n*(n-1)/2），随后 m 行每行 u v w（边权）。输出最小生成树的总边权；若不连通输出 -1。",
        "input": "n m，然后 m 行 u v w。",
        "output": "MST 总边权或 -1。",
        "samples": [
          {
            "input": "4 5\n1 2 1\n2 3 2\n3 4 3\n1 3 4\n2 4 5",
            "output": "6"
          },
          {
            "input": "3 1\n1 2 5",
            "output": "-1"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nn=int(data[0]);m=int(data[1])\nedges=[]\nidx=2\nfor _ in range(m):\n    u=int(data[idx]);v=int(data[idx+1]);w=int(data[idx+2]);idx+=3\n    edges.append((w,u,v))\nedges.sort()\nparent=list(range(n+1))\ndef find(x):\n    while parent[x]!=x:parent[x]=parent[parent[x]];x=parent[x]\n    return x\ntot=0;cnt=0\nfor w,u,v in edges:\n    pu,pv=find(u),find(v)\n    if pu!=pv:\n        parent[pu]=pv;tot+=w;cnt+=1\n        if cnt==n-1:break\nprint(tot if cnt==n-1 else -1)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint parent[105];\nint find(int x){while(parent[x]!=x){parent[x]=parent[parent[x]];x=parent[x];}return x;}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<tuple<int,int,int>>e(m);\nfor(int i=0;i<m;i++){int u,v,w;cin>>u>>v>>w;e[i]={w,u,v};}\nsort(e.begin(),e.end());\nfor(int i=1;i<=n;i++)parent[i]=i;\nlong long tot=0;int cnt=0;\nfor(auto&x:e){int w=get<0>(x),u=get<1>(x),v=get<2>(x);\n  int pu=find(u),pv=find(v);if(pu!=pv){parent[pu]=pv;tot+=w;cnt++;if(cnt==n-1)break;}}\ncout<<(cnt==n-1?tot:-1)<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  static int[]parent;\n  static int find(int x){while(parent[x]!=x){parent[x]=parent[parent[x]];x=parent[x];}return x;}\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt(),m=sc.nextInt();\n    int[][]e=new int[m][3];\n    for(int i=0;i<m;i++){e[i][0]=sc.nextInt();e[i][1]=sc.nextInt();e[i][2]=sc.nextInt();}\n    Arrays.sort(e,(a,b)->Integer.compare(a[0],b[0]));\n    parent=new int[n+1];for(int i=1;i<=n;i++)parent[i]=i;\n    long tot=0;int cnt=0;\n    for(int[]x:e){int w=x[0],u=x[1],v=x[2];\n      int pu=find(u),pv=find(v);if(pu!=pv){parent[pu]=pv;tot+=w;cnt++;if(cnt==n-1)break;}}\n    System.out.println(cnt==n-1?tot:-1);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "φ(n)=n*Π(1-1/p)，分解素因子后累乘。",
        "desc": "数论：输入 n，输出 φ(n)（与 n 互质且不超过 n 的正整数个数）。",
        "input": "一行，整数 n。",
        "output": "φ(n)。",
        "samples": [
          {
            "input": "9",
            "output": "6"
          },
          {
            "input": "12",
            "output": "4"
          }
        ],
        "solutions": {
          "python": "import sys\nn=int(sys.stdin.read().strip())\nres=n;i=2\nwhile i*i<=n:\n    if n%i==0:\n        while n%i==0:n//=i\n        res-=res//i\n    i+=1\nif n>1:res-=res//n\nprint(res)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long n;cin>>n;long long res=n;\nfor(long long i=2;i*i<=n;i++)if(n%i==0){\n  while(n%i==0)n/=i;res-=res/i;}\nif(n>1)res-=res/n;\ncout<<res<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long n=sc.nextLong();long res=n;\n    for(long i=2;i*i<=n;i++)if(n%i==0){\n      while(n%i==0)n/=i;res-=res/i;}\n    if(n>1)res-=res/n;\n    System.out.println(res);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXCPP101",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "C++ 软件编程等级考试（10级）模拟卷（二）",
    "level": "10级",
    "duration": 120,
    "year": "2026",
    "lang": "cpp",
    "questions": [
      {
        "type": "choice",
        "stem": "卡特兰数常用于计数以下哪类对象？",
        "options": [
          "全排列",
          "合法括号序列 / 出栈序列",
          "素数",
          "最短路"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "卡特兰数经典应用。"
      },
      {
        "type": "choice",
        "stem": "容斥原理主要用于？",
        "options": [
          "排序",
          "多个集合的并/交计数",
          "最短路",
          "贪心"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "处理重复计数的抵消。"
      },
      {
        "type": "choice",
        "stem": "Edmonds-Karp 最大流复杂度约为？",
        "options": [
          "O(E)",
          "O(VE^2)",
          "O(V^2)",
          "O(E log V)"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "每次 BFS 增广，最多 VE 次。"
      },
      {
        "type": "choice",
        "stem": "矩阵快速幂可用于加速？",
        "options": [
          "排序",
          "线性递推",
          "最短路",
          "哈希"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "将递推优化到 O(log n)。"
      },
      {
        "type": "judge",
        "stem": "网络最大流等于最小割。",
        "answer": "T",
        "score": 5,
        "analysis": "最大流最小割定理。"
      },
      {
        "type": "judge",
        "stem": "组合数 C(n,k) 当 k>n 时为 0。",
        "answer": "T",
        "score": 5,
        "analysis": "无法选出更多元素。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "φ(n)=n*Π(1-1/p)，分解素因子后累乘。",
        "desc": "输入 n（1 ≤ n ≤ 10^6），输出欧拉函数 φ(n)。",
        "input": "一行，整数 n。",
        "output": "φ(n)。",
        "samples": [
          {
            "input": "9",
            "output": "6"
          },
          {
            "input": "12",
            "output": "4"
          }
        ],
        "solutions": {
          "python": "import sys\nn=int(sys.stdin.read().strip())\nres=n;i=2\nwhile i*i<=n:\n    if n%i==0:\n        while n%i==0:n//=i\n        res-=res//i\n    i+=1\nif n>1:res-=res//n\nprint(res)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long n;cin>>n;long long res=n;\nfor(long long i=2;i*i<=n;i++)if(n%i==0){\n  while(n%i==0)n/=i;res-=res/i;}\nif(n>1)res-=res/n;\ncout<<res<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long n=sc.nextLong();long res=n;\n    for(long i=2;i*i<=n;i++)if(n%i==0){\n      while(n%i==0)n/=i;res-=res/i;}\n    if(n>1)res-=res/n;\n    System.out.println(res);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "Kruskal：按边权排序，并查集合并。",
        "desc": "输入第一行 n m（2 ≤ n ≤ 100，1 ≤ m ≤ n*(n-1)/2），随后 m 行每行 u v w（边权）。输出最小生成树的总边权；若不连通输出 -1。",
        "input": "n m，然后 m 行 u v w。",
        "output": "MST 总边权或 -1。",
        "samples": [
          {
            "input": "4 5\n1 2 1\n2 3 2\n3 4 3\n1 3 4\n2 4 5",
            "output": "6"
          },
          {
            "input": "3 1\n1 2 5",
            "output": "-1"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nn=int(data[0]);m=int(data[1])\nedges=[]\nidx=2\nfor _ in range(m):\n    u=int(data[idx]);v=int(data[idx+1]);w=int(data[idx+2]);idx+=3\n    edges.append((w,u,v))\nedges.sort()\nparent=list(range(n+1))\ndef find(x):\n    while parent[x]!=x:parent[x]=parent[parent[x]];x=parent[x]\n    return x\ntot=0;cnt=0\nfor w,u,v in edges:\n    pu,pv=find(u),find(v)\n    if pu!=pv:\n        parent[pu]=pv;tot+=w;cnt+=1\n        if cnt==n-1:break\nprint(tot if cnt==n-1 else -1)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint parent[105];\nint find(int x){while(parent[x]!=x){parent[x]=parent[parent[x]];x=parent[x];}return x;}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<tuple<int,int,int>>e(m);\nfor(int i=0;i<m;i++){int u,v,w;cin>>u>>v>>w;e[i]={w,u,v};}\nsort(e.begin(),e.end());\nfor(int i=1;i<=n;i++)parent[i]=i;\nlong long tot=0;int cnt=0;\nfor(auto&x:e){int w=get<0>(x),u=get<1>(x),v=get<2>(x);\n  int pu=find(u),pv=find(v);if(pu!=pv){parent[pu]=pv;tot+=w;cnt++;if(cnt==n-1)break;}}\ncout<<(cnt==n-1?tot:-1)<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  static int[]parent;\n  static int find(int x){while(parent[x]!=x){parent[x]=parent[parent[x]];x=parent[x];}return x;}\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt(),m=sc.nextInt();\n    int[][]e=new int[m][3];\n    for(int i=0;i<m;i++){e[i][0]=sc.nextInt();e[i][1]=sc.nextInt();e[i][2]=sc.nextInt();}\n    Arrays.sort(e,(a,b)->Integer.compare(a[0],b[0]));\n    parent=new int[n+1];for(int i=1;i<=n;i++)parent[i]=i;\n    long tot=0;int cnt=0;\n    for(int[]x:e){int w=x[0],u=x[1],v=x[2];\n      int pu=find(u),pv=find(v);if(pu!=pv){parent[pu]=pv;tot+=w;cnt++;if(cnt==n-1)break;}}\n    System.out.println(cnt==n-1?tot:-1);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXCPP102",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "C++ 软件编程等级考试（10级）真题卷（大纲同步）",
    "level": "10级",
    "duration": 120,
    "year": "2026",
    "lang": "cpp",
    "questions": [
      {
        "type": "choice",
        "stem": "Edmonds-Karp 最大流复杂度约为？",
        "options": [
          "O(E)",
          "O(VE^2)",
          "O(V^2)",
          "O(E log V)"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "每次 BFS 增广，最多 VE 次。"
      },
      {
        "type": "choice",
        "stem": "中国剩余定理解决？",
        "options": [
          "最短路",
          "同余方程组",
          "排序",
          "哈希"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "一元线性同余方程组。"
      },
      {
        "type": "choice",
        "stem": "模意义下的除法（求 a/b mod p）需要？",
        "options": [
          "直接除",
          "乘法逆元",
          "减法",
          "取整"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "除以 b 等价于乘 b 的逆元。"
      },
      {
        "type": "choice",
        "stem": "Miller-Rabin 算法用于？",
        "options": [
          "排序",
          "大整数素数判定",
          "最短路",
          "哈希"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "概率性素数测试。"
      },
      {
        "type": "judge",
        "stem": "组合数 C(n,k) 当 k>n 时为 0。",
        "answer": "T",
        "score": 5,
        "analysis": "无法选出更多元素。"
      },
      {
        "type": "judge",
        "stem": "矩阵快速幂可以把线性递推优化到 O(log n)。",
        "answer": "T",
        "score": 5,
        "analysis": "状态矩阵自乘。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "Kruskal：按边权排序，并查集合并。",
        "desc": "带权无向图 n 点 m 边，输出最小生成树的总边权，不连通输出 -1。",
        "input": "n m，然后 m 行 u v w。",
        "output": "MST 总边权或 -1。",
        "samples": [
          {
            "input": "4 5\n1 2 1\n2 3 2\n3 4 3\n1 3 4\n2 4 5",
            "output": "6"
          },
          {
            "input": "3 1\n1 2 5",
            "output": "-1"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nn=int(data[0]);m=int(data[1])\nedges=[]\nidx=2\nfor _ in range(m):\n    u=int(data[idx]);v=int(data[idx+1]);w=int(data[idx+2]);idx+=3\n    edges.append((w,u,v))\nedges.sort()\nparent=list(range(n+1))\ndef find(x):\n    while parent[x]!=x:parent[x]=parent[parent[x]];x=parent[x]\n    return x\ntot=0;cnt=0\nfor w,u,v in edges:\n    pu,pv=find(u),find(v)\n    if pu!=pv:\n        parent[pu]=pv;tot+=w;cnt+=1\n        if cnt==n-1:break\nprint(tot if cnt==n-1 else -1)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint parent[105];\nint find(int x){while(parent[x]!=x){parent[x]=parent[parent[x]];x=parent[x];}return x;}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<tuple<int,int,int>>e(m);\nfor(int i=0;i<m;i++){int u,v,w;cin>>u>>v>>w;e[i]={w,u,v};}\nsort(e.begin(),e.end());\nfor(int i=1;i<=n;i++)parent[i]=i;\nlong long tot=0;int cnt=0;\nfor(auto&x:e){int w=get<0>(x),u=get<1>(x),v=get<2>(x);\n  int pu=find(u),pv=find(v);if(pu!=pv){parent[pu]=pv;tot+=w;cnt++;if(cnt==n-1)break;}}\ncout<<(cnt==n-1?tot:-1)<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  static int[]parent;\n  static int find(int x){while(parent[x]!=x){parent[x]=parent[parent[x]];x=parent[x];}return x;}\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt(),m=sc.nextInt();\n    int[][]e=new int[m][3];\n    for(int i=0;i<m;i++){e[i][0]=sc.nextInt();e[i][1]=sc.nextInt();e[i][2]=sc.nextInt();}\n    Arrays.sort(e,(a,b)->Integer.compare(a[0],b[0]));\n    parent=new int[n+1];for(int i=1;i<=n;i++)parent[i]=i;\n    long tot=0;int cnt=0;\n    for(int[]x:e){int w=x[0],u=x[1],v=x[2];\n      int pu=find(u),pv=find(v);if(pu!=pv){parent[pu]=pv;tot+=w;cnt++;if(cnt==n-1)break;}}\n    System.out.println(cnt==n-1?tot:-1);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "二维 DP：dp[i][j]=dp[i-1][j-1]+1（相等）或 max(上,左)。",
        "desc": "输入两个字符串，输出它们最长公共子序列的长度（子序列不要求连续）。",
        "input": "两行，字符串。",
        "output": "LCS 长度。",
        "samples": [
          {
            "input": "abcde\nbace",
            "output": "3"
          },
          {
            "input": "abcd\nacd",
            "output": "3"
          }
        ],
        "solutions": {
          "python": "import sys\ns=sys.stdin.read().split()\na=s[0];b=s[1]\nn=len(a);m=len(b)\ndp=[[0]*(m+1) for _ in range(n+1)]\nfor i in range(n):\n    for j in range(m):\n        dp[i+1][j+1]=dp[i][j]+1 if a[i]==b[j] else max(dp[i][j+1],dp[i+1][j])\nprint(dp[n][m])",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring a,b;cin>>a>>b;\nint n=a.size(),m=b.size();\nvector<vector<int>>dp(n+1,vector<int>(m+1,0));\nfor(int i=0;i<n;i++)for(int j=0;j<m;j++)\n  dp[i+1][j+1]=a[i]==b[j]?dp[i][j]+1:max(dp[i][j+1],dp[i+1][j]);\ncout<<dp[n][m]<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    String a=sc.next(),b=sc.next();\n    int n=a.length(),m=b.length();\n    int[][]dp=new int[n+1][m+1];\n    for(int i=0;i<n;i++)for(int j=0;j<m;j++)\n      dp[i+1][j+1]=a.charAt(i)==b.charAt(j)?dp[i][j]+1:Math.max(dp[i][j+1],dp[i+1][j]);\n    System.out.println(dp[n][m]);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXJAVA010",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Java 软件编程等级考试（1级）模拟卷（一）",
    "level": "1级",
    "duration": 60,
    "year": "2026",
    "lang": "java",
    "questions": [
      {
        "type": "choice",
        "stem": "算法的哪一特性保证每一步都有确切含义？",
        "options": [
          "有穷性",
          "确定性",
          "可行性",
          "输入"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "确定性要求每一步无歧义。"
      },
      {
        "type": "choice",
        "stem": "下列 C++ 基础类型中，通常占用 4 个字节的是？",
        "options": [
          "char",
          "short",
          "int",
          "bool"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "在多数平台 int 为 4 字节。"
      },
      {
        "type": "choice",
        "stem": "下列哪个是合法的 Python 变量名？",
        "options": [
          "1x",
          "x-y",
          "_sum",
          "for"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "变量名不能以数字开头、不能含减号、不能是关键字。"
      },
      {
        "type": "choice",
        "stem": "表达式 7 % 3 的值是？",
        "options": [
          "1",
          "2",
          "3",
          "0"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "7 除以 3 余 2。"
      },
      {
        "type": "judge",
        "stem": "for 循环只能遍历数字。",
        "answer": "F",
        "score": 5,
        "analysis": "还可遍历字符串、列表等可迭代对象。"
      },
      {
        "type": "judge",
        "stem": "while 循环条件永远为真时会正常自行结束。",
        "answer": "F",
        "score": 5,
        "analysis": "这将构成死循环。"
      },
      {
        "type": "program",
        "score": 20,
        "analysis": "逐位取模乘 10 累积。",
        "desc": "镜像数字：输入 n，输出其十进制数字反转后的数值（忽略前导 0）。",
        "input": "一行，非负整数 n。",
        "output": "反转后的数值。",
        "samples": [
          {
            "input": "123",
            "output": "321"
          },
          {
            "input": "100",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys\nn=int(sys.stdin.read().strip())\nr=0\nwhile n>0:\n    r=r*10+n%10\n    n//=10\nprint(r)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long n;cin>>n;long long r=0;\nwhile(n>0){r=r*10+n%10;n/=10;}\ncout<<r<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long n=sc.nextLong();long r=0;\n    while(n>0){r=r*10+n%10;n/=10;}\n    System.out.println(r);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXJAVA011",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Java 软件编程等级考试（1级）模拟卷（二）",
    "level": "1级",
    "duration": 60,
    "year": "2026",
    "lang": "java",
    "questions": [
      {
        "type": "choice",
        "stem": "字符串 'abc' 的长度是？",
        "options": [
          "2",
          "3",
          "4",
          "0"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "三个字符，长度为 3。"
      },
      {
        "type": "choice",
        "stem": "十进制数 13 转换成二进制后是？",
        "options": [
          "1101",
          "1110",
          "1011",
          "1001"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "13=8+4+1=2^3+2^2+2^0，二进制为 1101。"
      },
      {
        "type": "choice",
        "stem": "下列哪种说法是正确的？",
        "options": [
          "print(3/2) 输出 1",
          "print(3/2) 输出 1.5",
          "3/2 报错",
          "3/2 输出 3"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "Python 中 / 为浮点除，3/2=1.5。"
      },
      {
        "type": "choice",
        "stem": "表达式 7 % 3 的值是？",
        "options": [
          "1",
          "2",
          "3",
          "0"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "7 除以 3 余 2。"
      },
      {
        "type": "judge",
        "stem": "while 循环条件永远为真时会正常自行结束。",
        "answer": "F",
        "score": 5,
        "analysis": "这将构成死循环。"
      },
      {
        "type": "judge",
        "stem": "字符串 'abc' 的长度是 3。",
        "answer": "T",
        "score": 5,
        "analysis": "三个字符。"
      },
      {
        "type": "program",
        "score": 20,
        "analysis": "不断取个位并除以 10 累加。",
        "desc": "快递单号校验：输入一个非负整数 n，把它各位数字相加，输出该和。",
        "input": "一行，非负整数 n。",
        "output": "数字和。",
        "samples": [
          {
            "input": "130",
            "output": "4"
          },
          {
            "input": "0",
            "output": "0"
          }
        ],
        "solutions": {
          "python": "import sys\nn=int(sys.stdin.read().strip())\ns=0\nwhile n>0:\n    s+=n%10\n    n//=10\nprint(s)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long n;cin>>n;long long s=0;\nwhile(n>0){s+=n%10;n/=10;}\ncout<<s<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long n=sc.nextLong();long s=0;\n    while(n>0){s+=n%10;n/=10;}\n    System.out.println(s);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXJAVA012",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Java 软件编程等级考试（1级）真题卷（大纲同步）",
    "level": "1级",
    "duration": 60,
    "year": "2026",
    "lang": "java",
    "questions": [
      {
        "type": "choice",
        "stem": "若 a=5, b=2，Python 表达式 a // b 的值是？",
        "options": [
          "2.5",
          "2",
          "3",
          "2.0"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "// 为整除，5//2=2。"
      },
      {
        "type": "choice",
        "stem": "十进制数 13 转换成二进制后是？",
        "options": [
          "1101",
          "1110",
          "1011",
          "1001"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "13=8+4+1=2^3+2^2+2^0，二进制为 1101。"
      },
      {
        "type": "choice",
        "stem": "Python 中 for i in range(3): 会循环几次？",
        "options": [
          "2",
          "3",
          "4",
          "0"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "range(3) 产生 0、1、2 共 3 个值。"
      },
      {
        "type": "choice",
        "stem": "下列哪种说法是正确的？",
        "options": [
          "print(3/2) 输出 1",
          "print(3/2) 输出 1.5",
          "3/2 报错",
          "3/2 输出 3"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "Python 中 / 为浮点除，3/2=1.5。"
      },
      {
        "type": "judge",
        "stem": "布尔类型只有真和假两种取值。",
        "answer": "T",
        "score": 5,
        "analysis": "bool 仅 True/False。"
      },
      {
        "type": "judge",
        "stem": "字符串 'abc' 的长度是 3。",
        "answer": "T",
        "score": 5,
        "analysis": "三个字符。"
      },
      {
        "type": "program",
        "score": 20,
        "analysis": "等差数列求和公式 n*(n+1)/2。",
        "desc": "输入一个正整数 n（1 ≤ n ≤ 10000），输出 1 + 2 + ... + n 的结果。",
        "input": "一行，正整数 n。",
        "output": "累加和。",
        "samples": [
          {
            "input": "100",
            "output": "5050"
          },
          {
            "input": "10",
            "output": "55"
          }
        ],
        "solutions": {
          "python": "import sys\nn=int(sys.stdin.read().strip())\nprint(n*(n+1)//2)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long n;cin>>n;cout<<n*(n+1)/2<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long n=sc.nextLong();\n    System.out.println(n*(n+1)/2);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXJAVA020",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Java 软件编程等级考试（2级）模拟卷（一）",
    "level": "2级",
    "duration": 60,
    "year": "2026",
    "lang": "java",
    "questions": [
      {
        "type": "choice",
        "stem": "算法的哪一特性保证每一步都有确切含义？",
        "options": [
          "有穷性",
          "确定性",
          "可行性",
          "输入"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "确定性要求每一步无歧义。"
      },
      {
        "type": "choice",
        "stem": "Python 中 for i in range(3): 会循环几次？",
        "options": [
          "2",
          "3",
          "4",
          "0"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "range(3) 产生 0、1、2 共 3 个值。"
      },
      {
        "type": "choice",
        "stem": "十进制数 13 转换成二进制后是？",
        "options": [
          "1101",
          "1110",
          "1011",
          "1001"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "13=8+4+1=2^3+2^2+2^0，二进制为 1101。"
      },
      {
        "type": "choice",
        "stem": "关于数组下标，下列说法正确的是？",
        "options": [
          "从 1 开始",
          "从 0 开始",
          "可负",
          "随意"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "C/C++/Java/Python 列表下标均从 0 开始。"
      },
      {
        "type": "judge",
        "stem": "字符串 'abc' 的长度是 3。",
        "answer": "T",
        "score": 5,
        "analysis": "三个字符。"
      },
      {
        "type": "judge",
        "stem": "for 循环只能遍历数字。",
        "answer": "F",
        "score": 5,
        "analysis": "还可遍历字符串、列表等可迭代对象。"
      },
      {
        "type": "program",
        "score": 20,
        "analysis": "逐位取模乘 10 累积。",
        "desc": "镜像数字：输入 n，输出其十进制数字反转后的数值（忽略前导 0）。",
        "input": "一行，非负整数 n。",
        "output": "反转后的数值。",
        "samples": [
          {
            "input": "123",
            "output": "321"
          },
          {
            "input": "100",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys\nn=int(sys.stdin.read().strip())\nr=0\nwhile n>0:\n    r=r*10+n%10\n    n//=10\nprint(r)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long n;cin>>n;long long r=0;\nwhile(n>0){r=r*10+n%10;n/=10;}\ncout<<r<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long n=sc.nextLong();long r=0;\n    while(n>0){r=r*10+n%10;n/=10;}\n    System.out.println(r);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXJAVA021",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Java 软件编程等级考试（2级）模拟卷（二）",
    "level": "2级",
    "duration": 60,
    "year": "2026",
    "lang": "java",
    "questions": [
      {
        "type": "choice",
        "stem": "十进制数 13 转换成二进制后是？",
        "options": [
          "1101",
          "1110",
          "1011",
          "1001"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "13=8+4+1=2^3+2^2+2^0，二进制为 1101。"
      },
      {
        "type": "choice",
        "stem": "算法的哪一特性保证每一步都有确切含义？",
        "options": [
          "有穷性",
          "确定性",
          "可行性",
          "输入"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "确定性要求每一步无歧义。"
      },
      {
        "type": "choice",
        "stem": "while 循环的特点是？",
        "options": [
          "至少执行一次",
          "条件为真时重复",
          "只能计数",
          "不能嵌套"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "while 在条件为真时反复执行。"
      },
      {
        "type": "choice",
        "stem": "关于数组下标，下列说法正确的是？",
        "options": [
          "从 1 开始",
          "从 0 开始",
          "可负",
          "随意"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "C/C++/Java/Python 列表下标均从 0 开始。"
      },
      {
        "type": "judge",
        "stem": "布尔类型只有真和假两种取值。",
        "answer": "T",
        "score": 5,
        "analysis": "bool 仅 True/False。"
      },
      {
        "type": "judge",
        "stem": "for 循环只能遍历数字。",
        "answer": "F",
        "score": 5,
        "analysis": "还可遍历字符串、列表等可迭代对象。"
      },
      {
        "type": "program",
        "score": 20,
        "analysis": "等差数列求和公式 n*(n+1)/2。",
        "desc": "操场上有编号 1 到 n 的 n 级台阶。输入 n（1 ≤ n ≤ 10000），请输出从第 1 级到第 n 级编号之和。",
        "input": "一行，正整数 n。",
        "output": "编号之和。",
        "samples": [
          {
            "input": "100",
            "output": "5050"
          },
          {
            "input": "10",
            "output": "55"
          }
        ],
        "solutions": {
          "python": "import sys\nn=int(sys.stdin.read().strip())\nprint(n*(n+1)//2)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long n;cin>>n;cout<<n*(n+1)/2<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long n=sc.nextLong();\n    System.out.println(n*(n+1)/2);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXJAVA022",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Java 软件编程等级考试（2级）真题卷（大纲同步）",
    "level": "2级",
    "duration": 60,
    "year": "2026",
    "lang": "java",
    "questions": [
      {
        "type": "choice",
        "stem": "下列 C++ 基础类型中，通常占用 4 个字节的是？",
        "options": [
          "char",
          "short",
          "int",
          "bool"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "在多数平台 int 为 4 字节。"
      },
      {
        "type": "choice",
        "stem": "算法的哪一特性保证每一步都有确切含义？",
        "options": [
          "有穷性",
          "确定性",
          "可行性",
          "输入"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "确定性要求每一步无歧义。"
      },
      {
        "type": "choice",
        "stem": "关于数组下标，下列说法正确的是？",
        "options": [
          "从 1 开始",
          "从 0 开始",
          "可负",
          "随意"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "C/C++/Java/Python 列表下标均从 0 开始。"
      },
      {
        "type": "choice",
        "stem": "while 循环的特点是？",
        "options": [
          "至少执行一次",
          "条件为真时重复",
          "只能计数",
          "不能嵌套"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "while 在条件为真时反复执行。"
      },
      {
        "type": "judge",
        "stem": "Python 中 print(3/2) 输出 1。",
        "answer": "F",
        "score": 5,
        "analysis": "3/2=1.5，输出 1.5。"
      },
      {
        "type": "judge",
        "stem": "for 循环只能遍历数字。",
        "answer": "F",
        "score": 5,
        "analysis": "还可遍历字符串、列表等可迭代对象。"
      },
      {
        "type": "program",
        "score": 20,
        "analysis": "遍历，能被 2 整除即计数。",
        "desc": "输入第一行整数 n（1 ≤ n ≤ 100），第二行是 n 个整数。请输出其中偶数的个数。",
        "input": "第一行 n；第二行 n 个整数。",
        "output": "偶数个数。",
        "samples": [
          {
            "input": "5\n1 2 3 4 5",
            "output": "2"
          },
          {
            "input": "4\n2 4 6 8",
            "output": "4"
          }
        ],
        "solutions": {
          "python": "import sys\nv=list(map(int,sys.stdin.read().split()))\nn=v[0]\nc=sum(1 for x in v[1:1+n] if x%2==0)\nprint(c)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;int c=0;\nfor(int i=0;i<n;i++){int x;cin>>x;if(x%2==0)c++;}\ncout<<c<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();int c=0;\n    for(int i=0;i<n;i++){int x=sc.nextInt();if(x%2==0)c++;}\n    System.out.println(c);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXJAVA030",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Java 软件编程等级考试（3级）模拟卷（一）",
    "level": "3级",
    "duration": 90,
    "year": "2026",
    "lang": "java",
    "questions": [
      {
        "type": "choice",
        "stem": "枚举算法的核心思想是？",
        "options": [
          "分治",
          "逐一尝试所有可能",
          "贪心",
          "动态规划"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "把解空间全部尝试一遍。"
      },
      {
        "type": "choice",
        "stem": "线性查找最坏情况下的比较次数是？",
        "options": [
          "1",
          "n/2",
          "n",
          "n+1"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "可能要遍历全部 n 个元素。"
      },
      {
        "type": "choice",
        "stem": "冒泡排序的时间复杂度是？",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(log n)"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "两两比较，约 n^2/2 次比较。"
      },
      {
        "type": "choice",
        "stem": "快速排序平均时间复杂度是？",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(n^3)"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "期望划分下为 O(n log n)。"
      },
      {
        "type": "judge",
        "stem": "哈希表查找的平均时间复杂度是 O(1)。",
        "answer": "T",
        "score": 5,
        "analysis": "理想情况下常数时间。"
      },
      {
        "type": "judge",
        "stem": "二分查找可以在无序数组上直接使用。",
        "answer": "F",
        "score": 5,
        "analysis": "必须有序。"
      },
      {
        "type": "program",
        "score": 25,
        "analysis": "最小公倍数 = a / gcd(a,b) * b，注意先除后乘防溢出。",
        "desc": "输入两个正整数 a, b（1 ≤ a, b ≤ 10^9），输出它们的最小公倍数（lcm）。",
        "input": "一行，a b。",
        "output": "最小公倍数。",
        "samples": [
          {
            "input": "4 6",
            "output": "12"
          },
          {
            "input": "3 5",
            "output": "15"
          }
        ],
        "solutions": {
          "python": "import sys,math\na,b=map(int,sys.stdin.read().split())\nprint(a//math.gcd(a,b)*b)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nlong long gcd(long long a,long long b){while(b){long long t=a%b;a=b;b=t;}return a;}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long a,b;cin>>a>>b;\nlong long g=gcd(a,b);\ncout<<a/g*b<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long a=sc.nextLong(),b=sc.nextLong();\n    long g=a;long t=b;while(t!=0){long x=g%t;g=t;t=x;}\n    System.out.println(a/g*b);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXJAVA031",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Java 软件编程等级考试（3级）模拟卷（二）",
    "level": "3级",
    "duration": 90,
    "year": "2026",
    "lang": "java",
    "questions": [
      {
        "type": "choice",
        "stem": "枚举算法的核心思想是？",
        "options": [
          "分治",
          "逐一尝试所有可能",
          "贪心",
          "动态规划"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "把解空间全部尝试一遍。"
      },
      {
        "type": "choice",
        "stem": "递归函数必须包含什么才能正常结束？",
        "options": [
          "循环",
          "基准（终止）条件",
          "全局变量",
          "数组"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "递归需要基准情形避免无限递归。"
      },
      {
        "type": "choice",
        "stem": "按值传递参数时，修改形参会影响实参吗？",
        "options": [
          "会",
          "不会",
          "视语言而定",
          "总是"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "按值传递复制的是副本（基本类型）。"
      },
      {
        "type": "choice",
        "stem": "冒泡排序的时间复杂度是？",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(log n)"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "两两比较，约 n^2/2 次比较。"
      },
      {
        "type": "judge",
        "stem": "函数内部定义的变量默认是全局变量。",
        "answer": "F",
        "score": 5,
        "analysis": "未声明 global 的是局部变量。"
      },
      {
        "type": "judge",
        "stem": "哈希表查找的平均时间复杂度是 O(1)。",
        "answer": "T",
        "score": 5,
        "analysis": "理想情况下常数时间。"
      },
      {
        "type": "program",
        "score": 25,
        "analysis": "试除到 sqrt(n)。",
        "desc": "密码学入门：输入 n，若 n 只有 1 和自身两个正因数输出 Yes，否则 No。",
        "input": "一行，整数 n。",
        "output": "Yes 或 No。",
        "samples": [
          {
            "input": "17",
            "output": "Yes"
          },
          {
            "input": "9",
            "output": "No"
          }
        ],
        "solutions": {
          "python": "import sys,math\nn=int(sys.stdin.read().strip())\nok=True\nif n<2:ok=False\nelse:\n    i=2\n    while i*i<=n:\n        if n%i==0:ok=False;break\n        i+=1\nprint(\"Yes\" if ok else \"No\")",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long n;cin>>n;bool ok=true;\nif(n<2)ok=false;\nelse{for(long long i=2;i*i<=n;i++){if(n%i==0){ok=false;break;}}\ncout<<(ok?\"Yes\":\"No\")<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long n=sc.nextLong();boolean ok=true;\n    if(n<2)ok=false;\n    else{for(long i=2;i*i<=n;i++){if(n%i==0){ok=false;break;}}\n    System.out.println(ok?\"Yes\":\"No\");\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXJAVA032",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Java 软件编程等级考试（3级）真题卷（大纲同步）",
    "level": "3级",
    "duration": 90,
    "year": "2026",
    "lang": "java",
    "questions": [
      {
        "type": "choice",
        "stem": "冒泡排序的时间复杂度是？",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(log n)"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "两两比较，约 n^2/2 次比较。"
      },
      {
        "type": "choice",
        "stem": "按值传递参数时，修改形参会影响实参吗？",
        "options": [
          "会",
          "不会",
          "视语言而定",
          "总是"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "按值传递复制的是副本（基本类型）。"
      },
      {
        "type": "choice",
        "stem": "枚举算法的核心思想是？",
        "options": [
          "分治",
          "逐一尝试所有可能",
          "贪心",
          "动态规划"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "把解空间全部尝试一遍。"
      },
      {
        "type": "choice",
        "stem": "递归函数必须包含什么才能正常结束？",
        "options": [
          "循环",
          "基准（终止）条件",
          "全局变量",
          "数组"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "递归需要基准情形避免无限递归。"
      },
      {
        "type": "judge",
        "stem": "函数内部定义的变量默认是全局变量。",
        "answer": "F",
        "score": 5,
        "analysis": "未声明 global 的是局部变量。"
      },
      {
        "type": "judge",
        "stem": "二分查找可以在无序数组上直接使用。",
        "answer": "F",
        "score": 5,
        "analysis": "必须有序。"
      },
      {
        "type": "program",
        "score": 25,
        "analysis": "试除到 sqrt(n)。",
        "desc": "输入一个整数 n（2 ≤ n ≤ 10^6），若 n 为素数输出 Yes，否则输出 No。",
        "input": "一行，整数 n。",
        "output": "Yes 或 No。",
        "samples": [
          {
            "input": "17",
            "output": "Yes"
          },
          {
            "input": "9",
            "output": "No"
          }
        ],
        "solutions": {
          "python": "import sys,math\nn=int(sys.stdin.read().strip())\nok=True\nif n<2:ok=False\nelse:\n    i=2\n    while i*i<=n:\n        if n%i==0:ok=False;break\n        i+=1\nprint(\"Yes\" if ok else \"No\")",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long n;cin>>n;bool ok=true;\nif(n<2)ok=false;\nelse{for(long long i=2;i*i<=n;i++){if(n%i==0){ok=false;break;}}\ncout<<(ok?\"Yes\":\"No\")<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long n=sc.nextLong();boolean ok=true;\n    if(n<2)ok=false;\n    else{for(long i=2;i*i<=n;i++){if(n%i==0){ok=false;break;}}\n    System.out.println(ok?\"Yes\":\"No\");\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXJAVA040",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Java 软件编程等级考试（4级）模拟卷（一）",
    "level": "4级",
    "duration": 90,
    "year": "2026",
    "lang": "java",
    "questions": [
      {
        "type": "choice",
        "stem": "下列算法中属于分治思想的是？",
        "options": [
          "冒泡排序",
          "归并排序",
          "选择排序",
          "插入排序"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "归并排序先分后治。"
      },
      {
        "type": "choice",
        "stem": "递归函数必须包含什么才能正常结束？",
        "options": [
          "循环",
          "基准（终止）条件",
          "全局变量",
          "数组"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "递归需要基准情形避免无限递归。"
      },
      {
        "type": "choice",
        "stem": "队列的特点是？",
        "options": [
          "先进先出",
          "后进先出",
          "随机访问",
          "只能写"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "队列是 FIFO。"
      },
      {
        "type": "choice",
        "stem": "按值传递参数时，修改形参会影响实参吗？",
        "options": [
          "会",
          "不会",
          "视语言而定",
          "总是"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "按值传递复制的是副本（基本类型）。"
      },
      {
        "type": "judge",
        "stem": "哈希表查找的平均时间复杂度是 O(1)。",
        "answer": "T",
        "score": 5,
        "analysis": "理想情况下常数时间。"
      },
      {
        "type": "judge",
        "stem": "快速排序在最坏情况下退化为 O(n^2)。",
        "answer": "T",
        "score": 5,
        "analysis": "每次极不平衡划分时。"
      },
      {
        "type": "program",
        "score": 25,
        "analysis": "循环累乘，注意 0!=1。",
        "desc": "输入一个非负整数 n（0 ≤ n ≤ 20），输出 n 的阶乘 n!。",
        "input": "一行，非负整数 n。",
        "output": "n!。",
        "samples": [
          {
            "input": "5",
            "output": "120"
          },
          {
            "input": "0",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys\nn=int(sys.stdin.read().strip())\nf=1\nfor i in range(2,n+1):f*=i\nprint(f)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;long long f=1;\nfor(int i=2;i<=n;i++)f*=i;\ncout<<f<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();long f=1;\n    for(int i=2;i<=n;i++)f*=i;\n    System.out.println(f);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXJAVA041",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Java 软件编程等级考试（4级）模拟卷（二）",
    "level": "4级",
    "duration": 90,
    "year": "2026",
    "lang": "java",
    "questions": [
      {
        "type": "choice",
        "stem": "线性查找最坏情况下的比较次数是？",
        "options": [
          "1",
          "n/2",
          "n",
          "n+1"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "可能要遍历全部 n 个元素。"
      },
      {
        "type": "choice",
        "stem": "下列算法中属于分治思想的是？",
        "options": [
          "冒泡排序",
          "归并排序",
          "选择排序",
          "插入排序"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "归并排序先分后治。"
      },
      {
        "type": "choice",
        "stem": "队列的特点是？",
        "options": [
          "先进先出",
          "后进先出",
          "随机访问",
          "只能写"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "队列是 FIFO。"
      },
      {
        "type": "choice",
        "stem": "朴素递归实现斐波那契的时间复杂度近似为？",
        "options": [
          "O(n)",
          "O(2^n)",
          "O(log n)",
          "O(n^2)"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "存在大量重复子问题，呈指数级。"
      },
      {
        "type": "judge",
        "stem": "函数内部定义的变量默认是全局变量。",
        "answer": "F",
        "score": 5,
        "analysis": "未声明 global 的是局部变量。"
      },
      {
        "type": "judge",
        "stem": "递归一定比迭代执行得更快。",
        "answer": "F",
        "score": 5,
        "analysis": "递归有调用开销，未必更快。"
      },
      {
        "type": "program",
        "score": 25,
        "analysis": "任选一种排序均可。",
        "desc": "输入 n 和 n 个整数，按从小到大排序后输出。",
        "input": "第一行 n；第二行 n 个整数。",
        "output": "排序结果一行。",
        "samples": [
          {
            "input": "4\n3 1 4 2",
            "output": "1 2 3 4"
          },
          {
            "input": "3\n5 5 1",
            "output": "1 5 5"
          }
        ],
        "solutions": {
          "python": "import sys\nv=list(map(int,sys.stdin.read().split()))\nn=v[0]\na=v[1:1+n]\na.sort()\nprint(' '.join(map(str,a)))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int i=0;i<n;i++)cin>>a[i];\nfor(int i=0;i<n;i++)for(int j=i+1;j<n;j++)if(a[i]>a[j])swap(a[i],a[j]);\nfor(int i=0;i<n;i++){cout<<a[i];if(i+1<n)cout<<' ';else cout<<endl;}\nreturn 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();Integer[] a=new Integer[n];\n    for(int i=0;i<n;i++)a[i]=sc.nextInt();\n    Arrays.sort(a);\n    StringBuilder sb=new StringBuilder();\n    for(int i=0;i<n;i++){sb.append(a[i]);if(i+1<n)sb.append(' ');}\n    System.out.println(sb);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXJAVA042",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Java 软件编程等级考试（4级）真题卷（大纲同步）",
    "level": "4级",
    "duration": 90,
    "year": "2026",
    "lang": "java",
    "questions": [
      {
        "type": "choice",
        "stem": "枚举算法的核心思想是？",
        "options": [
          "分治",
          "逐一尝试所有可能",
          "贪心",
          "动态规划"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "把解空间全部尝试一遍。"
      },
      {
        "type": "choice",
        "stem": "递归函数必须包含什么才能正常结束？",
        "options": [
          "循环",
          "基准（终止）条件",
          "全局变量",
          "数组"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "递归需要基准情形避免无限递归。"
      },
      {
        "type": "choice",
        "stem": "栈的特点是？",
        "options": [
          "先进先出",
          "后进先出",
          "随机访问",
          "只能读"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "栈是 LIFO。"
      },
      {
        "type": "choice",
        "stem": "二维数组 a[3][4] 共有几个元素？",
        "options": [
          "7",
          "12",
          "16",
          "34"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "3×4=12。"
      },
      {
        "type": "judge",
        "stem": "二分查找可以在无序数组上直接使用。",
        "answer": "F",
        "score": 5,
        "analysis": "必须有序。"
      },
      {
        "type": "judge",
        "stem": "归并排序是稳定的排序算法。",
        "answer": "T",
        "score": 5,
        "analysis": "相等元素相对次序保持不变。"
      },
      {
        "type": "program",
        "score": 25,
        "analysis": "辗转相除。",
        "desc": "输入两个正整数 a, b（1 ≤ a, b ≤ 10^9），输出它们的最大公约数（gcd）。",
        "input": "一行，两个整数 a b。",
        "output": "最大公约数。",
        "samples": [
          {
            "input": "12 18",
            "output": "6"
          },
          {
            "input": "7 13",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys,math\na,b=map(int,sys.stdin.read().split())\nprint(math.gcd(a,b))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nlong long gcd(long long a,long long b){while(b){long long t=a%b;a=b;b=t;}return a;}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long a,b;cin>>a>>b;cout<<gcd(a,b)<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long a=sc.nextLong(),b=sc.nextLong();\n    while(b!=0){long t=a%b;a=b;b=t;}\n    System.out.println(a);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXJAVA050",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Java 软件编程等级考试（5级）模拟卷（一）",
    "level": "5级",
    "duration": 90,
    "year": "2026",
    "lang": "java",
    "questions": [
      {
        "type": "choice",
        "stem": "BFS 求无权图最短路的依据是？",
        "options": [
          "层序扩展",
          "随机选择",
          "贪心",
          "回溯"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "首达即最短。"
      },
      {
        "type": "choice",
        "stem": "动态规划的核心思想是？",
        "options": [
          "枚举",
          "重叠子问题与最优子结构",
          "贪心",
          "分治"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "DP 利用子问题重叠与最优子结构。"
      },
      {
        "type": "choice",
        "stem": "深度优先搜索通常借助哪种结构实现？",
        "options": [
          "队列",
          "栈",
          "堆",
          "数组"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "DFS 用递归或显式栈。"
      },
      {
        "type": "choice",
        "stem": "DFS 遍历图时用什么标记已访问？",
        "options": [
          "数组/visited",
          "排序",
          "清空栈",
          "队列"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "用 visited 数组避免重复访问。"
      },
      {
        "type": "judge",
        "stem": "素数有无穷多个。",
        "answer": "T",
        "score": 5,
        "analysis": "欧几里得已证明。"
      },
      {
        "type": "judge",
        "stem": "动态规划在满足最优子结构时能得到全局最优。",
        "answer": "T",
        "score": 5,
        "analysis": "DP 的正确性基础。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "f(n)=f(n-1)+f(n-2)，滚动迭代（f(1)=1,f(2)=2）。",
        "desc": "输入 n，输出用 1 步或 2 步走到第 n 级的总方案数（n ≤ 40）。",
        "input": "一行，正整数 n。",
        "output": "方案数。",
        "samples": [
          {
            "input": "3",
            "output": "3"
          },
          {
            "input": "4",
            "output": "5"
          }
        ],
        "solutions": {
          "python": "import sys\nn=int(sys.stdin.read().strip())\na,b=1,1\nfor _ in range(n):a,b=b,a+b\nprint(a)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;long long a=1,b=1;\nfor(int i=1;i<=n;i++){long long t=a+b;a=b;b=t;}\ncout<<a<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();long a=1,b=1;\n    for(int i=1;i<=n;i++){long t=a+b;a=b;b=t;}\n    System.out.println(a);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "O(n^2) DP：dp[i]=以 a[i] 结尾的最长上升子序列长度。",
        "desc": "输入 n 和 n 个整数，输出其中最长严格递增子序列的长度。",
        "input": "n，然后 n 个整数。",
        "output": "最长上升子序列长度。",
        "samples": [
          {
            "input": "6\n1 3 2 5 4 6",
            "output": "4"
          },
          {
            "input": "5\n5 4 3 2 1",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys\nv=list(map(int,sys.stdin.read().split()))\nn=v[0];a=v[1:1+n]\ndp=[1]*n\nfor i in range(n):\n    for j in range(i):\n        if a[j]<a[i]:dp[i]=max(dp[i],dp[j]+1)\nprint(max(dp))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int i=0;i<n;i++)cin>>a[i];\nvector<int>dp(n,1);int mx=1;\nfor(int i=0;i<n;i++)for(int j=0;j<i;j++)\n  if(a[j]<a[i])dp[i]=max(dp[i],dp[j]+1);\nfor(int i=0;i<n;i++)mx=max(mx,dp[i]);\ncout<<mx<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();int[]a=new int[n];\n    for(int i=0;i<n;i++)a[i]=sc.nextInt();\n    int[]dp=new int[n];int mx=1;\n    for(int i=0;i<n;i++){dp[i]=1;\n      for(int j=0;j<i;j++)if(a[j]<a[i])dp[i]=Math.max(dp[i],dp[j]+1);\n      mx=Math.max(mx,dp[i]);}\n    System.out.println(mx);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXJAVA051",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Java 软件编程等级考试（5级）模拟卷（二）",
    "level": "5级",
    "duration": 90,
    "year": "2026",
    "lang": "java",
    "questions": [
      {
        "type": "choice",
        "stem": "完全二叉树的叶子节点数大约为？",
        "options": [
          "n/2",
          "n",
          "log n",
          "n-1"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "约一半节点是叶子。"
      },
      {
        "type": "choice",
        "stem": "动态规划与分治的主要区别是？",
        "options": [
          "都递推",
          "子问题是否重叠",
          "都用栈",
          "都贪心"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "DP 的子问题重叠并可查表复用。"
      },
      {
        "type": "choice",
        "stem": "DFS 遍历图时用什么标记已访问？",
        "options": [
          "数组/visited",
          "排序",
          "清空栈",
          "队列"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "用 visited 数组避免重复访问。"
      },
      {
        "type": "choice",
        "stem": "广度优先搜索使用？",
        "options": [
          "栈",
          "队列",
          "树",
          "图"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "BFS 用队列层序扩展。"
      },
      {
        "type": "judge",
        "stem": "Dijkstra 算法不能处理带负权边的图。",
        "answer": "T",
        "score": 5,
        "analysis": "负权会破坏其贪心正确性。"
      },
      {
        "type": "judge",
        "stem": "一棵树的边数等于顶点数减一。",
        "answer": "T",
        "score": 5,
        "analysis": "树的性质。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "O(n^2) DP：dp[i]=以 a[i] 结尾的最长上升子序列长度。",
        "desc": "输入第一行 n（1 ≤ n ≤ 1000），第二行是 n 个整数。输出最长严格上升子序列（LIS）的长度。",
        "input": "n，然后 n 个整数。",
        "output": "LIS 长度。",
        "samples": [
          {
            "input": "6\n1 3 2 5 4 6",
            "output": "4"
          },
          {
            "input": "5\n5 4 3 2 1",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys\nv=list(map(int,sys.stdin.read().split()))\nn=v[0];a=v[1:1+n]\ndp=[1]*n\nfor i in range(n):\n    for j in range(i):\n        if a[j]<a[i]:dp[i]=max(dp[i],dp[j]+1)\nprint(max(dp))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int i=0;i<n;i++)cin>>a[i];\nvector<int>dp(n,1);int mx=1;\nfor(int i=0;i<n;i++)for(int j=0;j<i;j++)\n  if(a[j]<a[i])dp[i]=max(dp[i],dp[j]+1);\nfor(int i=0;i<n;i++)mx=max(mx,dp[i]);\ncout<<mx<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();int[]a=new int[n];\n    for(int i=0;i<n;i++)a[i]=sc.nextInt();\n    int[]dp=new int[n];int mx=1;\n    for(int i=0;i<n;i++){dp[i]=1;\n      for(int j=0;j<i;j++)if(a[j]<a[i])dp[i]=Math.max(dp[i],dp[j]+1);\n      mx=Math.max(mx,dp[i]);}\n    System.out.println(mx);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "用计数器，遇 '(' 加一、遇 ')' 减一，过程中不可为负，结束应为 0。",
        "desc": "输入一个仅由 '(' 和 ')' 组成的字符串（长度 ≤ 10^5）。若括号完全匹配输出 Yes，否则输出 No。",
        "input": "一行，括号字符串。",
        "output": "Yes 或 No。",
        "samples": [
          {
            "input": "()(())",
            "output": "Yes"
          },
          {
            "input": "(()",
            "output": "No"
          }
        ],
        "solutions": {
          "python": "import sys\ns=sys.stdin.read().strip()\nbal=0\nfor ch in s:\n    if ch=='(':bal+=1\n    else:\n        bal-=1\n        if bal<0:break\nprint(\"Yes\" if bal==0 else \"No\")",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring s;cin>>s;int bal=0;bool ok=true;\nfor(char c:s){if(c=='(')bal++;else{bal--;if(bal<0){ok=false;break;}}}\ncout<<((ok&&bal==0)?\"Yes\":\"No\")<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    String s=sc.next();int bal=0;boolean ok=true;\n    for(int i=0;i<s.length();i++){char c=s.charAt(i);\n      if(c=='(')bal++;else{bal--;if(bal<0){ok=false;break;}}}\n    System.out.println((ok&&bal==0)?\"Yes\":\"No\");\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXJAVA052",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Java 软件编程等级考试（5级）真题卷（大纲同步）",
    "level": "5级",
    "duration": 90,
    "year": "2026",
    "lang": "java",
    "questions": [
      {
        "type": "choice",
        "stem": "完全二叉树的叶子节点数大约为？",
        "options": [
          "n/2",
          "n",
          "log n",
          "n-1"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "约一半节点是叶子。"
      },
      {
        "type": "choice",
        "stem": "0-1 背包问题通常归类为？",
        "options": [
          "贪心",
          "动态规划",
          "分治",
          "回溯"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "具有最优子结构，用 DP 求解。"
      },
      {
        "type": "choice",
        "stem": "求最大公约数的欧几里得算法基于？",
        "options": [
          "a%b==0",
          "gcd(a,b)=gcd(b,a%b)",
          "素数判定",
          "阶乘"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "辗转相除。"
      },
      {
        "type": "choice",
        "stem": "动态规划的核心思想是？",
        "options": [
          "枚举",
          "重叠子问题与最优子结构",
          "贪心",
          "分治"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "DP 利用子问题重叠与最优子结构。"
      },
      {
        "type": "judge",
        "stem": "Dijkstra 算法不能处理带负权边的图。",
        "answer": "T",
        "score": 5,
        "analysis": "负权会破坏其贪心正确性。"
      },
      {
        "type": "judge",
        "stem": "动态规划在满足最优子结构时能得到全局最优。",
        "answer": "T",
        "score": 5,
        "analysis": "DP 的正确性基础。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "埃氏筛标记合数后统计。",
        "desc": "输入 n（1 ≤ n ≤ 10^6），统计 1 到 n 之间素数的个数。",
        "input": "一行，整数 n。",
        "output": "素数个数。",
        "samples": [
          {
            "input": "10",
            "output": "4"
          },
          {
            "input": "20",
            "output": "8"
          }
        ],
        "solutions": {
          "python": "import sys\nn=int(sys.stdin.read().strip())\nif n<2:print(0)\nelse:\n    isp=[True]*(n+1);isp[0]=isp[1]=False\n    i=2\n    while i*i<=n:\n        if isp[i]:\n            for j in range(i*i,n+1,i):isp[j]=False\n        i+=1\n    print(sum(isp))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;if(n<2){cout<<0<<endl;return 0;}\nvector<bool>isp(n+1,true);isp[0]=isp[1]=false;\nfor(int i=2;i*i<=n;i++)if(isp[i])\n  for(int j=i*i;j<=n;j+=i)isp[j]=false;\nint c=0;for(int i=2;i<=n;i++)if(isp[i])c++;\ncout<<c<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();\n    if(n<2){System.out.println(0);return;}\n    boolean[] isp=new boolean[n+1];Arrays.fill(isp,true);isp[0]=isp[1]=false;\n    for(int i=2;i*i<=n;i++)if(isp[i])\n      for(int j=i*i;j<=n;j+=i)isp[j]=false;\n    int c=0;for(int i=2;i<=n;i++)if(isp[i])c++;\n    System.out.println(c);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "用计数器，遇 '(' 加一、遇 ')' 减一，过程中不可为负，结束应为 0。",
        "desc": "判断括号串是否平衡：输入仅由左右圆括号组成的字符串，完全匹配输出 Yes 否则 No。",
        "input": "一行，括号字符串。",
        "output": "Yes 或 No。",
        "samples": [
          {
            "input": "()(())",
            "output": "Yes"
          },
          {
            "input": "(()",
            "output": "No"
          }
        ],
        "solutions": {
          "python": "import sys\ns=sys.stdin.read().strip()\nbal=0\nfor ch in s:\n    if ch=='(':bal+=1\n    else:\n        bal-=1\n        if bal<0:break\nprint(\"Yes\" if bal==0 else \"No\")",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring s;cin>>s;int bal=0;bool ok=true;\nfor(char c:s){if(c=='(')bal++;else{bal--;if(bal<0){ok=false;break;}}}\ncout<<((ok&&bal==0)?\"Yes\":\"No\")<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    String s=sc.next();int bal=0;boolean ok=true;\n    for(int i=0;i<s.length();i++){char c=s.charAt(i);\n      if(c=='(')bal++;else{bal--;if(bal<0){ok=false;break;}}}\n    System.out.println((ok&&bal==0)?\"Yes\":\"No\");\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXJAVA060",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Java 软件编程等级考试（6级）模拟卷（一）",
    "level": "6级",
    "duration": 90,
    "year": "2026",
    "lang": "java",
    "questions": [
      {
        "type": "choice",
        "stem": "广度优先搜索使用？",
        "options": [
          "栈",
          "队列",
          "树",
          "图"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "BFS 用队列层序扩展。"
      },
      {
        "type": "choice",
        "stem": "DFS 遍历图时用什么标记已访问？",
        "options": [
          "数组/visited",
          "排序",
          "清空栈",
          "队列"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "用 visited 数组避免重复访问。"
      },
      {
        "type": "choice",
        "stem": "动态规划与分治的主要区别是？",
        "options": [
          "都递推",
          "子问题是否重叠",
          "都用栈",
          "都贪心"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "DP 的子问题重叠并可查表复用。"
      },
      {
        "type": "choice",
        "stem": "哈希冲突难以避免的根本原因是？",
        "options": [
          "算法错误",
          "桶（空间）有限",
          "语言限制",
          "内存太小"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "映射空间小于键空间。"
      },
      {
        "type": "judge",
        "stem": "素数有无穷多个。",
        "answer": "T",
        "score": 5,
        "analysis": "欧几里得已证明。"
      },
      {
        "type": "judge",
        "stem": "Dijkstra 算法不能处理带负权边的图。",
        "answer": "T",
        "score": 5,
        "analysis": "负权会破坏其贪心正确性。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "埃氏筛标记合数后统计。",
        "desc": "素数计数：输入 n，输出不大于 n 的素数有多少个。",
        "input": "一行，整数 n。",
        "output": "素数个数。",
        "samples": [
          {
            "input": "10",
            "output": "4"
          },
          {
            "input": "20",
            "output": "8"
          }
        ],
        "solutions": {
          "python": "import sys\nn=int(sys.stdin.read().strip())\nif n<2:print(0)\nelse:\n    isp=[True]*(n+1);isp[0]=isp[1]=False\n    i=2\n    while i*i<=n:\n        if isp[i]:\n            for j in range(i*i,n+1,i):isp[j]=False\n        i+=1\n    print(sum(isp))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;if(n<2){cout<<0<<endl;return 0;}\nvector<bool>isp(n+1,true);isp[0]=isp[1]=false;\nfor(int i=2;i*i<=n;i++)if(isp[i])\n  for(int j=i*i;j<=n;j+=i)isp[j]=false;\nint c=0;for(int i=2;i<=n;i++)if(isp[i])c++;\ncout<<c<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();\n    if(n<2){System.out.println(0);return;}\n    boolean[] isp=new boolean[n+1];Arrays.fill(isp,true);isp[0]=isp[1]=false;\n    for(int i=2;i*i<=n;i++)if(isp[i])\n      for(int j=i*i;j<=n;j+=i)isp[j]=false;\n    int c=0;for(int i=2;i<=n;i++)if(isp[i])c++;\n    System.out.println(c);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "对每个未访问的 '#' 做 DFS/BFS 标记整个连通块。",
        "desc": "输入网格（'#' 为城市，'.' 为空地），输出相连城市块的数量。",
        "input": "h w，然后 h 行字符图。",
        "output": "城市块数量。",
        "samples": [
          {
            "input": "3 3\n#..\n.#. \n..#",
            "output": "3"
          },
          {
            "input": "2 2\n##\n##",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nh=int(data[0]);w=int(data[1])\ng=data[2:2+h]\nvis=[[False]*w for _ in range(h)]\ndef dfs(i,j):\n    vis[i][j]=True\n    for di,dj in((1,0),(-1,0),(0,1),(0,-1)):\n        ni,nj=i+di,j+dj\n        if 0<=ni<h and 0<=nj<w and not vis[ni][nj] and g[ni][nj]=='#':dfs(ni,nj)\ncnt=0\nfor i in range(h):\n    for j in range(w):\n        if g[i][j]=='#' and not vis[i][j]:\n            dfs(i,j);cnt+=1\nprint(cnt)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint h,w;vector<string>g;vector<vector<bool>>vis;\nvoid dfs(int i,int j){vis[i][j]=true;\n  int d[4][2]={{1,0},{-1,0},{0,1},{0,-1}};\n  for(int k=0;k<4;k++){int ni=i+d[k][0],nj=j+d[k][1];\n    if(ni>=0&&ni<h&&nj>=0&&nj<w&&!vis[ni][nj]&&g[ni][nj]=='#')dfs(ni,nj);}}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\ncin>>h>>w;g.resize(h);for(int i=0;i<h;i++)cin>>g[i];\nvis.assign(h,vector<bool>(w,false));\nint cnt=0;\nfor(int i=0;i<h;i++)for(int j=0;j<w;j++)\n  if(g[i][j]=='#'&&!vis[i][j]){dfs(i,j);cnt++;}\ncout<<cnt<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  static int h,w;static char[][]g;static boolean[][]vis;\n  static void dfs(int i,int j){vis[i][j]=true;\n    int[]di={1,-1,0,0},dj={0,0,1,-1};\n    for(int k=0;k<4;k++){int ni=i+di[k],nj=j+dj[k];\n      if(ni>=0&&ni<h&&nj>=0&&nj<w&&!vis[ni][nj]&&g[ni][nj]=='#')dfs(ni,nj);}}\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    h=sc.nextInt();w=sc.nextInt();g=new char[h][w];\n    for(int i=0;i<h;i++)g[i]=sc.next().toCharArray();\n    vis=new boolean[h][w];int cnt=0;\n    for(int i=0;i<h;i++)for(int j=0;j<w;j++)\n      if(g[i][j]=='#'&&!vis[i][j]){dfs(i,j);cnt++;}\n    System.out.println(cnt);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXJAVA061",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Java 软件编程等级考试（6级）模拟卷（二）",
    "level": "6级",
    "duration": 90,
    "year": "2026",
    "lang": "java",
    "questions": [
      {
        "type": "choice",
        "stem": "埃氏筛法的时间复杂度约为？",
        "options": [
          "O(n)",
          "O(n log log n)",
          "O(n^2)",
          "O(log n)"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "经典结论 O(n log log n)。"
      },
      {
        "type": "choice",
        "stem": "动态规划的核心思想是？",
        "options": [
          "枚举",
          "重叠子问题与最优子结构",
          "贪心",
          "分治"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "DP 利用子问题重叠与最优子结构。"
      },
      {
        "type": "choice",
        "stem": "完全二叉树的叶子节点数大约为？",
        "options": [
          "n/2",
          "n",
          "log n",
          "n-1"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "约一半节点是叶子。"
      },
      {
        "type": "choice",
        "stem": "深度优先搜索通常借助哪种结构实现？",
        "options": [
          "队列",
          "栈",
          "堆",
          "数组"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "DFS 用递归或显式栈。"
      },
      {
        "type": "judge",
        "stem": "DFS 一定比 BFS 占用更少内存。",
        "answer": "F",
        "score": 5,
        "analysis": "取决于图的结构。"
      },
      {
        "type": "judge",
        "stem": "Dijkstra 算法不能处理带负权边的图。",
        "answer": "T",
        "score": 5,
        "analysis": "负权会破坏其贪心正确性。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "f(n)=f(n-1)+f(n-2)，滚动迭代（f(1)=1,f(2)=2）。",
        "desc": "输入 n，输出用 1 步或 2 步走到第 n 级的总方案数（n ≤ 40）。",
        "input": "一行，正整数 n。",
        "output": "方案数。",
        "samples": [
          {
            "input": "3",
            "output": "3"
          },
          {
            "input": "4",
            "output": "5"
          }
        ],
        "solutions": {
          "python": "import sys\nn=int(sys.stdin.read().strip())\na,b=1,1\nfor _ in range(n):a,b=b,a+b\nprint(a)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;long long a=1,b=1;\nfor(int i=1;i<=n;i++){long long t=a+b;a=b;b=t;}\ncout<<a<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();long a=1,b=1;\n    for(int i=1;i<=n;i++){long t=a+b;a=b;b=t;}\n    System.out.println(a);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "对每个未访问的 '#' 做 DFS/BFS 标记整个连通块。",
        "desc": "输入网格（'#' 为城市，'.' 为空地），输出相连城市块的数量。",
        "input": "h w，然后 h 行字符图。",
        "output": "城市块数量。",
        "samples": [
          {
            "input": "3 3\n#..\n.#. \n..#",
            "output": "3"
          },
          {
            "input": "2 2\n##\n##",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nh=int(data[0]);w=int(data[1])\ng=data[2:2+h]\nvis=[[False]*w for _ in range(h)]\ndef dfs(i,j):\n    vis[i][j]=True\n    for di,dj in((1,0),(-1,0),(0,1),(0,-1)):\n        ni,nj=i+di,j+dj\n        if 0<=ni<h and 0<=nj<w and not vis[ni][nj] and g[ni][nj]=='#':dfs(ni,nj)\ncnt=0\nfor i in range(h):\n    for j in range(w):\n        if g[i][j]=='#' and not vis[i][j]:\n            dfs(i,j);cnt+=1\nprint(cnt)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint h,w;vector<string>g;vector<vector<bool>>vis;\nvoid dfs(int i,int j){vis[i][j]=true;\n  int d[4][2]={{1,0},{-1,0},{0,1},{0,-1}};\n  for(int k=0;k<4;k++){int ni=i+d[k][0],nj=j+d[k][1];\n    if(ni>=0&&ni<h&&nj>=0&&nj<w&&!vis[ni][nj]&&g[ni][nj]=='#')dfs(ni,nj);}}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\ncin>>h>>w;g.resize(h);for(int i=0;i<h;i++)cin>>g[i];\nvis.assign(h,vector<bool>(w,false));\nint cnt=0;\nfor(int i=0;i<h;i++)for(int j=0;j<w;j++)\n  if(g[i][j]=='#'&&!vis[i][j]){dfs(i,j);cnt++;}\ncout<<cnt<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  static int h,w;static char[][]g;static boolean[][]vis;\n  static void dfs(int i,int j){vis[i][j]=true;\n    int[]di={1,-1,0,0},dj={0,0,1,-1};\n    for(int k=0;k<4;k++){int ni=i+di[k],nj=j+dj[k];\n      if(ni>=0&&ni<h&&nj>=0&&nj<w&&!vis[ni][nj]&&g[ni][nj]=='#')dfs(ni,nj);}}\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    h=sc.nextInt();w=sc.nextInt();g=new char[h][w];\n    for(int i=0;i<h;i++)g[i]=sc.next().toCharArray();\n    vis=new boolean[h][w];int cnt=0;\n    for(int i=0;i<h;i++)for(int j=0;j<w;j++)\n      if(g[i][j]=='#'&&!vis[i][j]){dfs(i,j);cnt++;}\n    System.out.println(cnt);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXJAVA062",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Java 软件编程等级考试（6级）真题卷（大纲同步）",
    "level": "6级",
    "duration": 90,
    "year": "2026",
    "lang": "java",
    "questions": [
      {
        "type": "choice",
        "stem": "0-1 背包问题通常归类为？",
        "options": [
          "贪心",
          "动态规划",
          "分治",
          "回溯"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "具有最优子结构，用 DP 求解。"
      },
      {
        "type": "choice",
        "stem": "哈希冲突难以避免的根本原因是？",
        "options": [
          "算法错误",
          "桶（空间）有限",
          "语言限制",
          "内存太小"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "映射空间小于键空间。"
      },
      {
        "type": "choice",
        "stem": "动态规划与分治的主要区别是？",
        "options": [
          "都递推",
          "子问题是否重叠",
          "都用栈",
          "都贪心"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "DP 的子问题重叠并可查表复用。"
      },
      {
        "type": "choice",
        "stem": "BFS 求无权图最短路的依据是？",
        "options": [
          "层序扩展",
          "随机选择",
          "贪心",
          "回溯"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "首达即最短。"
      },
      {
        "type": "judge",
        "stem": "素数有无穷多个。",
        "answer": "T",
        "score": 5,
        "analysis": "欧几里得已证明。"
      },
      {
        "type": "judge",
        "stem": "动态规划在满足最优子结构时能得到全局最优。",
        "answer": "T",
        "score": 5,
        "analysis": "DP 的正确性基础。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "埃氏筛标记合数后统计。",
        "desc": "输入一个整数 n（1 ≤ n ≤ 10^6），输出不超过 n 的素数个数。",
        "input": "一行，整数 n。",
        "output": "素数个数。",
        "samples": [
          {
            "input": "10",
            "output": "4"
          },
          {
            "input": "20",
            "output": "8"
          }
        ],
        "solutions": {
          "python": "import sys\nn=int(sys.stdin.read().strip())\nif n<2:print(0)\nelse:\n    isp=[True]*(n+1);isp[0]=isp[1]=False\n    i=2\n    while i*i<=n:\n        if isp[i]:\n            for j in range(i*i,n+1,i):isp[j]=False\n        i+=1\n    print(sum(isp))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;if(n<2){cout<<0<<endl;return 0;}\nvector<bool>isp(n+1,true);isp[0]=isp[1]=false;\nfor(int i=2;i*i<=n;i++)if(isp[i])\n  for(int j=i*i;j<=n;j+=i)isp[j]=false;\nint c=0;for(int i=2;i<=n;i++)if(isp[i])c++;\ncout<<c<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();\n    if(n<2){System.out.println(0);return;}\n    boolean[] isp=new boolean[n+1];Arrays.fill(isp,true);isp[0]=isp[1]=false;\n    for(int i=2;i*i<=n;i++)if(isp[i])\n      for(int j=i*i;j<=n;j+=i)isp[j]=false;\n    int c=0;for(int i=2;i<=n;i++)if(isp[i])c++;\n    System.out.println(c);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "O(n^2) DP：dp[i]=以 a[i] 结尾的最长上升子序列长度。",
        "desc": "输入 n 和 n 个整数，输出其中最长严格递增子序列的长度。",
        "input": "n，然后 n 个整数。",
        "output": "最长上升子序列长度。",
        "samples": [
          {
            "input": "6\n1 3 2 5 4 6",
            "output": "4"
          },
          {
            "input": "5\n5 4 3 2 1",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys\nv=list(map(int,sys.stdin.read().split()))\nn=v[0];a=v[1:1+n]\ndp=[1]*n\nfor i in range(n):\n    for j in range(i):\n        if a[j]<a[i]:dp[i]=max(dp[i],dp[j]+1)\nprint(max(dp))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int i=0;i<n;i++)cin>>a[i];\nvector<int>dp(n,1);int mx=1;\nfor(int i=0;i<n;i++)for(int j=0;j<i;j++)\n  if(a[j]<a[i])dp[i]=max(dp[i],dp[j]+1);\nfor(int i=0;i<n;i++)mx=max(mx,dp[i]);\ncout<<mx<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();int[]a=new int[n];\n    for(int i=0;i<n;i++)a[i]=sc.nextInt();\n    int[]dp=new int[n];int mx=1;\n    for(int i=0;i<n;i++){dp[i]=1;\n      for(int j=0;j<i;j++)if(a[j]<a[i])dp[i]=Math.max(dp[i],dp[j]+1);\n      mx=Math.max(mx,dp[i]);}\n    System.out.println(mx);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXJAVA070",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Java 软件编程等级考试（7级）模拟卷（一）",
    "level": "7级",
    "duration": 120,
    "year": "2026",
    "lang": "java",
    "questions": [
      {
        "type": "choice",
        "stem": "树状数组（Fenwick）支持高效？",
        "options": [
          "区间求和",
          "排序",
          "最短路",
          "哈希"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "前缀和/区间和更新查询。"
      },
      {
        "type": "choice",
        "stem": "求有向图的强连通分量可用？",
        "options": [
          "Dijkstra",
          "Kosaraju / Tarjan",
          "Prim",
          "冒泡"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "这两种是经典 SCC 算法。"
      },
      {
        "type": "choice",
        "stem": "并查集（Union-Find）常用于？",
        "options": [
          "排序",
          "维护连通性",
          "最短路",
          "哈希"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "高效判断两点是否连通。"
      },
      {
        "type": "choice",
        "stem": "最长上升子序列可优化到 O(n log n) 依靠？",
        "options": [
          "线段树",
          "二分 + 贪心",
          "DFS",
          "并查集"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "维护末尾最小值 + 二分。"
      },
      {
        "type": "judge",
        "stem": "贪心算法对所有问题都能得到最优解。",
        "answer": "F",
        "score": 5,
        "analysis": "仅满足特定条件时。"
      },
      {
        "type": "judge",
        "stem": "并查集经过路径压缩后单次操作接近常数。",
        "answer": "T",
        "score": 5,
        "analysis": "近乎 O(1) 反阿克曼。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "贪心：按结束时间排序，依次选不冲突的。",
        "desc": "会议室安排：输入 n 场会议的起止时间，输出最多可安排的不冲突会议数。",
        "input": "n，然后 n 行 l r。",
        "output": "最多会议数。",
        "samples": [
          {
            "input": "3\n1 2\n3 4\n5 6",
            "output": "3"
          },
          {
            "input": "3\n1 4\n2 3\n3 5",
            "output": "2"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nn=int(data[0])\niv=[]\nidx=1\nfor _ in range(n):\n    l=int(data[idx]);r=int(data[idx+1]);idx+=2\n    iv.append((r,l))\niv.sort()\ncnt=0;last=-10**18\nfor r,l in iv:\n    if l>=last:\n        cnt+=1;last=r\nprint(cnt)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<pair<int,int>>iv(n);\nfor(int i=0;i<n;i++){int l,r;cin>>l>>r;iv[i]={r,l};}\nsort(iv.begin(),iv.end());\nint cnt=0,last=-2e9;\nfor(auto&p:iv){if(p.second>=last){cnt++;last=p.first;}}\ncout<<cnt<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();\n    int[][]iv=new int[n][2];\n    for(int i=0;i<n;i++){iv[i][0]=sc.nextInt();iv[i][1]=sc.nextInt();}\n    Arrays.sort(iv,(a,b)->Integer.compare(a[1],b[1]));\n    int cnt=0,last=(int)-2e9;\n    for(int[]p:iv){if(p[0]>=last){cnt++;last=p[1];}}\n    System.out.println(cnt);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "并查集维护连通性，最后统计不同根的数量。",
        "desc": "输入 n 个点 m 条无向边，输出把图分成几块互不连通的部分。",
        "input": "n m，然后 m 行 u v。",
        "output": "连通块数。",
        "samples": [
          {
            "input": "5 2\n1 2\n3 4",
            "output": "3"
          },
          {
            "input": "4 3\n1 2\n2 3\n3 4",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nn=int(data[0]);m=int(data[1])\nparent=list(range(n+1))\ndef find(x):\n    while parent[x]!=x:parent[x]=parent[parent[x]];x=parent[x]\n    return x\nidx=2\nfor _ in range(m):\n    u=int(data[idx]);v=int(data[idx+1]);idx+=2\n    pu,pv=find(u),find(v)\n    if pu!=pv:parent[pu]=pv\nroots=set(find(i) for i in range(1,n+1))\nprint(len(roots))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint parent[1005];\nint find(int x){while(parent[x]!=x){parent[x]=parent[parent[x]];x=parent[x];}return x;}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;for(int i=1;i<=n;i++)parent[i]=i;\nfor(int i=0;i<m;i++){int u,v;cin>>u>>v;\n  int pu=find(u),pv=find(v);if(pu!=pv)parent[pu]=pv;}\nint cnt=0;for(int i=1;i<=n;i++)if(find(i)==i)cnt++;\ncout<<cnt<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  static int[]parent;\n  static int find(int x){while(parent[x]!=x){parent[x]=parent[parent[x]];x=parent[x];}return x;}\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt(),m=sc.nextInt();\n    parent=new int[n+1];for(int i=1;i<=n;i++)parent[i]=i;\n    for(int i=0;i<m;i++){int u=sc.nextInt(),v=sc.nextInt();\n      int pu=find(u),pv=find(v);if(pu!=pv)parent[pu]=pv;}\n    int cnt=0;for(int i=1;i<=n;i++)if(find(i)==i)cnt++;\n    System.out.println(cnt);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXJAVA071",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Java 软件编程等级考试（7级）模拟卷（二）",
    "level": "7级",
    "duration": 120,
    "year": "2026",
    "lang": "java",
    "questions": [
      {
        "type": "choice",
        "stem": "下列可用于求最小生成树的是？",
        "options": [
          "Dijkstra",
          "Kruskal / Prim",
          "Floyd",
          "DFS"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "Kruskal 与 Prim 求 MST。"
      },
      {
        "type": "choice",
        "stem": "在 DAG 上做动态规划通常先？",
        "options": [
          "排序",
          "拓扑排序",
          "并查集",
          "哈希"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "按拓扑序递推保证无后效性。"
      },
      {
        "type": "choice",
        "stem": "区间调度贪心应按什么排序？",
        "options": [
          "开始时间",
          "结束时间",
          "区间长度",
          "权重"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "每次选结束最早且不冲突的。"
      },
      {
        "type": "choice",
        "stem": "求有向图的强连通分量可用？",
        "options": [
          "Dijkstra",
          "Kosaraju / Tarjan",
          "Prim",
          "冒泡"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "这两种是经典 SCC 算法。"
      },
      {
        "type": "judge",
        "stem": "用优先队列优化后 Dijkstra 复杂度可达 O((n+m)log n)。",
        "answer": "T",
        "score": 5,
        "analysis": "经典堆优化。"
      },
      {
        "type": "judge",
        "stem": "并查集经过路径压缩后单次操作接近常数。",
        "answer": "T",
        "score": 5,
        "analysis": "近乎 O(1) 反阿克曼。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "前缀和 O(1) 回答。",
        "desc": "成绩表：输入 n 个分数与 q 次区间查询，输出每次查询的区间总分。",
        "input": "n q，分数，然后 q 行 l r。",
        "output": "每次查询一行总分。",
        "samples": [
          {
            "input": "5 3\n1 2 3 4 5\n1 3\n2 5\n1 5",
            "output": "6\n14\n15"
          },
          {
            "input": "3 1\n10 20 30\n1 3",
            "output": "60"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nn=int(data[0]);q=int(data[1])\na=[0]*(n+1)\nfor i in range(1,n+1):a[i]=int(data[i+1])\npre=[0]*(n+1)\nfor i in range(1,n+1):pre[i]=pre[i-1]+a[i]\nidx=1+n+1\nout=[]\nfor _ in range(q):\n    l=int(data[idx]);r=int(data[idx+1]);idx+=2\n    out.append(str(pre[r]-pre[l-1]))\nprint('\\n'.join(out))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,q;cin>>n>>q;vector<long long>a(n+1),pre(n+1);\nfor(int i=1;i<=n;i++){cin>>a[i];pre[i]=pre[i-1]+a[i];}\nwhile(q--){int l,r;cin>>l>>r;cout<<pre[r]-pre[l-1]<<endl;}\nreturn 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt(),q=sc.nextInt();\n    long[]pre=new long[n+1];\n    for(int i=1;i<=n;i++){pre[i]=pre[i-1]+sc.nextLong();}\n    StringBuilder sb=new StringBuilder();\n    while(q-->0){int l=sc.nextInt(),r=sc.nextInt();\n      sb.append(pre[r]-pre[l-1]).append('\\n');}\n    System.out.print(sb);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "Dijkstra + 优先队列。",
        "desc": "输入 n 个节点 m 条带权无向边，输出节点 1 到节点 n 的最短距离，不可达输出 -1。",
        "input": "n m，然后 m 行 u v w。",
        "output": "最短距离或 -1。",
        "samples": [
          {
            "input": "4 4\n1 2 2\n2 3 3\n1 4 9\n3 4 1",
            "output": "6"
          },
          {
            "input": "3 1\n1 2 5",
            "output": "-1"
          }
        ],
        "solutions": {
          "python": "import sys,heapq\ndata=sys.stdin.read().split()\nn=int(data[0]);m=int(data[1])\nadj=[[] for _ in range(n+1)]\nidx=2\nfor _ in range(m):\n    u=int(data[idx]);v=int(data[idx+1]);w=int(data[idx+2]);idx+=3\n    adj[u].append((v,w));adj[v].append((u,w))\ndist=[10**18]*(n+1);dist[1]=0\npq=[(0,1)]\nwhile pq:\n    d,u=heapq.heappop(pq)\n    if d>dist[u]:continue\n    for v,w in adj[u]:\n        if dist[u]+w<dist[v]:\n            dist[v]=dist[u]+w;heapq.heappush(pq,(dist[v],v))\nprint(dist[n] if dist[n]<10**18 else -1)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;\nvector<vector<pair<int,int>>>adj(n+1);\nfor(int i=0;i<m;i++){int u,v,w;cin>>u>>v>>w;\n  adj[u].push_back({v,w});adj[v].push_back({u,w});}\nvector<long long>dist(n+1,1e18);dist[1]=0;\npriority_queue<pair<long long,int>,vector<pair<long long,int>>,greater<>>pq;\npq.push({0,1});\nwhile(!pq.empty()){auto d=pq.top();pq.pop();int u=d.second;\n  if(d.first>dist[u])continue;\n  for(auto&e:adj[u]){int v=e.first,w=e.second;\n    if(dist[u]+w<dist[v]){dist[v]=dist[u]+w;pq.push({dist[v],v});}}}\ncout<<(dist[n]>=1e18?-1:dist[n])<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt(),m=sc.nextInt();\n    ArrayList<ArrayList<int[]>>adj=new ArrayList<>();\n    for(int i=0;i<=n;i++)adj.add(new ArrayList<>());\n    for(int i=0;i<m;i++){int u=sc.nextInt(),v=sc.nextInt(),w=sc.nextInt();\n      adj.get(u).add(new int[]{v,w});adj.get(v).add(new int[]{u,w});}\n    long[]dist=new long[n+1];Arrays.fill(dist,Long.MAX_VALUE/2);dist[1]=0;\n    PriorityQueue<long[]>pq=new PriorityQueue<>((a,b)->Long.compare(a[0],b[0]));\n    pq.add(new long[]{0,1});\n    while(!pq.isEmpty()){long[]t=pq.poll();long d=t[0];int u=(int)t[1];\n      if(d>dist[u])continue;\n      for(int[]e:adj.get(u)){int v=e[0],w=e[1];\n        if(dist[u]+w<dist[v]){dist[v]=dist[u]+w;pq.add(new long[]{dist[v],v});}}}\n    System.out.println(dist[n]>=Long.MAX_VALUE/2?-1:dist[n]);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXJAVA072",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Java 软件编程等级考试（7级）真题卷（大纲同步）",
    "level": "7级",
    "duration": 120,
    "year": "2026",
    "lang": "java",
    "questions": [
      {
        "type": "choice",
        "stem": "网络最大流常用算法是？",
        "options": [
          "Edmonds-Karp",
          "冒泡",
          "快速排序",
          "BFS 树"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "基于 BFS 找增广路。"
      },
      {
        "type": "choice",
        "stem": "区间调度贪心应按什么排序？",
        "options": [
          "开始时间",
          "结束时间",
          "区间长度",
          "权重"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "每次选结束最早且不冲突的。"
      },
      {
        "type": "choice",
        "stem": "下列可用于求最小生成树的是？",
        "options": [
          "Dijkstra",
          "Kruskal / Prim",
          "Floyd",
          "DFS"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "Kruskal 与 Prim 求 MST。"
      },
      {
        "type": "choice",
        "stem": "在 DAG 上做动态规划通常先？",
        "options": [
          "排序",
          "拓扑排序",
          "并查集",
          "哈希"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "按拓扑序递推保证无后效性。"
      },
      {
        "type": "judge",
        "stem": "贪心算法对所有问题都能得到最优解。",
        "answer": "F",
        "score": 5,
        "analysis": "仅满足特定条件时。"
      },
      {
        "type": "judge",
        "stem": "Kruskal 算法按边权从小到大逐步加边。",
        "answer": "T",
        "score": 5,
        "analysis": "贪心加不会成环的边。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "并查集维护连通性，最后统计不同根的数量。",
        "desc": "输入 n 个点 m 条无向边，输出把图分成几块互不连通的部分。",
        "input": "n m，然后 m 行 u v。",
        "output": "连通块数。",
        "samples": [
          {
            "input": "5 2\n1 2\n3 4",
            "output": "3"
          },
          {
            "input": "4 3\n1 2\n2 3\n3 4",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nn=int(data[0]);m=int(data[1])\nparent=list(range(n+1))\ndef find(x):\n    while parent[x]!=x:parent[x]=parent[parent[x]];x=parent[x]\n    return x\nidx=2\nfor _ in range(m):\n    u=int(data[idx]);v=int(data[idx+1]);idx+=2\n    pu,pv=find(u),find(v)\n    if pu!=pv:parent[pu]=pv\nroots=set(find(i) for i in range(1,n+1))\nprint(len(roots))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint parent[1005];\nint find(int x){while(parent[x]!=x){parent[x]=parent[parent[x]];x=parent[x];}return x;}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;for(int i=1;i<=n;i++)parent[i]=i;\nfor(int i=0;i<m;i++){int u,v;cin>>u>>v;\n  int pu=find(u),pv=find(v);if(pu!=pv)parent[pu]=pv;}\nint cnt=0;for(int i=1;i<=n;i++)if(find(i)==i)cnt++;\ncout<<cnt<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  static int[]parent;\n  static int find(int x){while(parent[x]!=x){parent[x]=parent[parent[x]];x=parent[x];}return x;}\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt(),m=sc.nextInt();\n    parent=new int[n+1];for(int i=1;i<=n;i++)parent[i]=i;\n    for(int i=0;i<m;i++){int u=sc.nextInt(),v=sc.nextInt();\n      int pu=find(u),pv=find(v);if(pu!=pv)parent[pu]=pv;}\n    int cnt=0;for(int i=1;i<=n;i++)if(find(i)==i)cnt++;\n    System.out.println(cnt);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "Dijkstra + 优先队列。",
        "desc": "输入 n 个节点 m 条带权无向边，输出节点 1 到节点 n 的最短距离，不可达输出 -1。",
        "input": "n m，然后 m 行 u v w。",
        "output": "最短距离或 -1。",
        "samples": [
          {
            "input": "4 4\n1 2 2\n2 3 3\n1 4 9\n3 4 1",
            "output": "6"
          },
          {
            "input": "3 1\n1 2 5",
            "output": "-1"
          }
        ],
        "solutions": {
          "python": "import sys,heapq\ndata=sys.stdin.read().split()\nn=int(data[0]);m=int(data[1])\nadj=[[] for _ in range(n+1)]\nidx=2\nfor _ in range(m):\n    u=int(data[idx]);v=int(data[idx+1]);w=int(data[idx+2]);idx+=3\n    adj[u].append((v,w));adj[v].append((u,w))\ndist=[10**18]*(n+1);dist[1]=0\npq=[(0,1)]\nwhile pq:\n    d,u=heapq.heappop(pq)\n    if d>dist[u]:continue\n    for v,w in adj[u]:\n        if dist[u]+w<dist[v]:\n            dist[v]=dist[u]+w;heapq.heappush(pq,(dist[v],v))\nprint(dist[n] if dist[n]<10**18 else -1)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;\nvector<vector<pair<int,int>>>adj(n+1);\nfor(int i=0;i<m;i++){int u,v,w;cin>>u>>v>>w;\n  adj[u].push_back({v,w});adj[v].push_back({u,w});}\nvector<long long>dist(n+1,1e18);dist[1]=0;\npriority_queue<pair<long long,int>,vector<pair<long long,int>>,greater<>>pq;\npq.push({0,1});\nwhile(!pq.empty()){auto d=pq.top();pq.pop();int u=d.second;\n  if(d.first>dist[u])continue;\n  for(auto&e:adj[u]){int v=e.first,w=e.second;\n    if(dist[u]+w<dist[v]){dist[v]=dist[u]+w;pq.push({dist[v],v});}}}\ncout<<(dist[n]>=1e18?-1:dist[n])<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt(),m=sc.nextInt();\n    ArrayList<ArrayList<int[]>>adj=new ArrayList<>();\n    for(int i=0;i<=n;i++)adj.add(new ArrayList<>());\n    for(int i=0;i<m;i++){int u=sc.nextInt(),v=sc.nextInt(),w=sc.nextInt();\n      adj.get(u).add(new int[]{v,w});adj.get(v).add(new int[]{u,w});}\n    long[]dist=new long[n+1];Arrays.fill(dist,Long.MAX_VALUE/2);dist[1]=0;\n    PriorityQueue<long[]>pq=new PriorityQueue<>((a,b)->Long.compare(a[0],b[0]));\n    pq.add(new long[]{0,1});\n    while(!pq.isEmpty()){long[]t=pq.poll();long d=t[0];int u=(int)t[1];\n      if(d>dist[u])continue;\n      for(int[]e:adj.get(u)){int v=e[0],w=e[1];\n        if(dist[u]+w<dist[v]){dist[v]=dist[u]+w;pq.add(new long[]{dist[v],v});}}}\n    System.out.println(dist[n]>=Long.MAX_VALUE/2?-1:dist[n]);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXJAVA080",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Java 软件编程等级考试（8级）模拟卷（一）",
    "level": "8级",
    "duration": 120,
    "year": "2026",
    "lang": "java",
    "questions": [
      {
        "type": "choice",
        "stem": "在 DAG 上做动态规划通常先？",
        "options": [
          "排序",
          "拓扑排序",
          "并查集",
          "哈希"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "按拓扑序递推保证无后效性。"
      },
      {
        "type": "choice",
        "stem": "能处理负权边的最短路径算法是？",
        "options": [
          "Dijkstra",
          "Bellman-Ford",
          "Prim",
          "Kruskal"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "Bellman-Ford 支持负权（无负环时）。"
      },
      {
        "type": "choice",
        "stem": "网络最大流常用算法是？",
        "options": [
          "Edmonds-Karp",
          "冒泡",
          "快速排序",
          "BFS 树"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "基于 BFS 找增广路。"
      },
      {
        "type": "choice",
        "stem": "并查集（Union-Find）常用于？",
        "options": [
          "排序",
          "维护连通性",
          "最短路",
          "哈希"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "高效判断两点是否连通。"
      },
      {
        "type": "judge",
        "stem": "Kruskal 算法按边权从小到大逐步加边。",
        "answer": "T",
        "score": 5,
        "analysis": "贪心加不会成环的边。"
      },
      {
        "type": "judge",
        "stem": "贪心算法对所有问题都能得到最优解。",
        "answer": "F",
        "score": 5,
        "analysis": "仅满足特定条件时。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "并查集维护连通性，最后统计不同根的数量。",
        "desc": "输入第一行 n m（1 ≤ n ≤ 1000，0 ≤ m ≤ n*(n-1)/2），随后 m 行每行 u v 表示一条无向边。输出图的连通块个数。",
        "input": "n m，然后 m 行 u v。",
        "output": "连通块个数。",
        "samples": [
          {
            "input": "5 2\n1 2\n3 4",
            "output": "3"
          },
          {
            "input": "4 3\n1 2\n2 3\n3 4",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nn=int(data[0]);m=int(data[1])\nparent=list(range(n+1))\ndef find(x):\n    while parent[x]!=x:parent[x]=parent[parent[x]];x=parent[x]\n    return x\nidx=2\nfor _ in range(m):\n    u=int(data[idx]);v=int(data[idx+1]);idx+=2\n    pu,pv=find(u),find(v)\n    if pu!=pv:parent[pu]=pv\nroots=set(find(i) for i in range(1,n+1))\nprint(len(roots))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint parent[1005];\nint find(int x){while(parent[x]!=x){parent[x]=parent[parent[x]];x=parent[x];}return x;}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;for(int i=1;i<=n;i++)parent[i]=i;\nfor(int i=0;i<m;i++){int u,v;cin>>u>>v;\n  int pu=find(u),pv=find(v);if(pu!=pv)parent[pu]=pv;}\nint cnt=0;for(int i=1;i<=n;i++)if(find(i)==i)cnt++;\ncout<<cnt<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  static int[]parent;\n  static int find(int x){while(parent[x]!=x){parent[x]=parent[parent[x]];x=parent[x];}return x;}\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt(),m=sc.nextInt();\n    parent=new int[n+1];for(int i=1;i<=n;i++)parent[i]=i;\n    for(int i=0;i<m;i++){int u=sc.nextInt(),v=sc.nextInt();\n      int pu=find(u),pv=find(v);if(pu!=pv)parent[pu]=pv;}\n    int cnt=0;for(int i=1;i<=n;i++)if(find(i)==i)cnt++;\n    System.out.println(cnt);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "贪心：按结束时间排序，依次选不冲突的。",
        "desc": "输入第一行 n（1 ≤ n ≤ 10^5），随后 n 行每行 l r（区间端点）。输出最多能选出多少个互不重叠的区间（端点相接视为重叠）。",
        "input": "n，然后 n 行 l r。",
        "output": "最多不重叠区间数。",
        "samples": [
          {
            "input": "3\n1 2\n3 4\n5 6",
            "output": "3"
          },
          {
            "input": "3\n1 4\n2 3\n3 5",
            "output": "2"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nn=int(data[0])\niv=[]\nidx=1\nfor _ in range(n):\n    l=int(data[idx]);r=int(data[idx+1]);idx+=2\n    iv.append((r,l))\niv.sort()\ncnt=0;last=-10**18\nfor r,l in iv:\n    if l>=last:\n        cnt+=1;last=r\nprint(cnt)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<pair<int,int>>iv(n);\nfor(int i=0;i<n;i++){int l,r;cin>>l>>r;iv[i]={r,l};}\nsort(iv.begin(),iv.end());\nint cnt=0,last=-2e9;\nfor(auto&p:iv){if(p.second>=last){cnt++;last=p.first;}}\ncout<<cnt<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();\n    int[][]iv=new int[n][2];\n    for(int i=0;i<n;i++){iv[i][0]=sc.nextInt();iv[i][1]=sc.nextInt();}\n    Arrays.sort(iv,(a,b)->Integer.compare(a[1],b[1]));\n    int cnt=0,last=(int)-2e9;\n    for(int[]p:iv){if(p[0]>=last){cnt++;last=p[1];}}\n    System.out.println(cnt);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXJAVA081",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Java 软件编程等级考试（8级）模拟卷（二）",
    "level": "8级",
    "duration": 120,
    "year": "2026",
    "lang": "java",
    "questions": [
      {
        "type": "choice",
        "stem": "树状数组（Fenwick）支持高效？",
        "options": [
          "区间求和",
          "排序",
          "最短路",
          "哈希"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "前缀和/区间和更新查询。"
      },
      {
        "type": "choice",
        "stem": "能处理负权边的最短路径算法是？",
        "options": [
          "Dijkstra",
          "Bellman-Ford",
          "Prim",
          "Kruskal"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "Bellman-Ford 支持负权（无负环时）。"
      },
      {
        "type": "choice",
        "stem": "最长上升子序列可优化到 O(n log n) 依靠？",
        "options": [
          "线段树",
          "二分 + 贪心",
          "DFS",
          "并查集"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "维护末尾最小值 + 二分。"
      },
      {
        "type": "choice",
        "stem": "下列可用于求最小生成树的是？",
        "options": [
          "Dijkstra",
          "Kruskal / Prim",
          "Floyd",
          "DFS"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "Kruskal 与 Prim 求 MST。"
      },
      {
        "type": "judge",
        "stem": "线段树建树的时间复杂度为 O(n log n)。",
        "answer": "T",
        "score": 5,
        "analysis": "n 个叶子，高度 log n。"
      },
      {
        "type": "judge",
        "stem": "贪心算法对所有问题都能得到最优解。",
        "answer": "F",
        "score": 5,
        "analysis": "仅满足特定条件时。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "并查集维护连通性，最后统计不同根的数量。",
        "desc": "输入第一行 n m（1 ≤ n ≤ 1000，0 ≤ m ≤ n*(n-1)/2），随后 m 行每行 u v 表示一条无向边。输出图的连通块个数。",
        "input": "n m，然后 m 行 u v。",
        "output": "连通块个数。",
        "samples": [
          {
            "input": "5 2\n1 2\n3 4",
            "output": "3"
          },
          {
            "input": "4 3\n1 2\n2 3\n3 4",
            "output": "1"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nn=int(data[0]);m=int(data[1])\nparent=list(range(n+1))\ndef find(x):\n    while parent[x]!=x:parent[x]=parent[parent[x]];x=parent[x]\n    return x\nidx=2\nfor _ in range(m):\n    u=int(data[idx]);v=int(data[idx+1]);idx+=2\n    pu,pv=find(u),find(v)\n    if pu!=pv:parent[pu]=pv\nroots=set(find(i) for i in range(1,n+1))\nprint(len(roots))",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint parent[1005];\nint find(int x){while(parent[x]!=x){parent[x]=parent[parent[x]];x=parent[x];}return x;}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;for(int i=1;i<=n;i++)parent[i]=i;\nfor(int i=0;i<m;i++){int u,v;cin>>u>>v;\n  int pu=find(u),pv=find(v);if(pu!=pv)parent[pu]=pv;}\nint cnt=0;for(int i=1;i<=n;i++)if(find(i)==i)cnt++;\ncout<<cnt<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  static int[]parent;\n  static int find(int x){while(parent[x]!=x){parent[x]=parent[parent[x]];x=parent[x];}return x;}\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt(),m=sc.nextInt();\n    parent=new int[n+1];for(int i=1;i<=n;i++)parent[i]=i;\n    for(int i=0;i<m;i++){int u=sc.nextInt(),v=sc.nextInt();\n      int pu=find(u),pv=find(v);if(pu!=pv)parent[pu]=pv;}\n    int cnt=0;for(int i=1;i<=n;i++)if(find(i)==i)cnt++;\n    System.out.println(cnt);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "Dijkstra + 优先队列。",
        "desc": "输入第一行 n m（2 ≤ n ≤ 200，1 ≤ m ≤ 2000），随后 m 行每行 u v w（w ≤ 10^4，无向边权）。输出从 1 号点到 n 号点的最短距离；若不可达输出 -1。",
        "input": "n m，然后 m 行 u v w。",
        "output": "最短距离或 -1。",
        "samples": [
          {
            "input": "4 4\n1 2 2\n2 3 3\n1 4 9\n3 4 1",
            "output": "6"
          },
          {
            "input": "3 1\n1 2 5",
            "output": "-1"
          }
        ],
        "solutions": {
          "python": "import sys,heapq\ndata=sys.stdin.read().split()\nn=int(data[0]);m=int(data[1])\nadj=[[] for _ in range(n+1)]\nidx=2\nfor _ in range(m):\n    u=int(data[idx]);v=int(data[idx+1]);w=int(data[idx+2]);idx+=3\n    adj[u].append((v,w));adj[v].append((u,w))\ndist=[10**18]*(n+1);dist[1]=0\npq=[(0,1)]\nwhile pq:\n    d,u=heapq.heappop(pq)\n    if d>dist[u]:continue\n    for v,w in adj[u]:\n        if dist[u]+w<dist[v]:\n            dist[v]=dist[u]+w;heapq.heappush(pq,(dist[v],v))\nprint(dist[n] if dist[n]<10**18 else -1)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;\nvector<vector<pair<int,int>>>adj(n+1);\nfor(int i=0;i<m;i++){int u,v,w;cin>>u>>v>>w;\n  adj[u].push_back({v,w});adj[v].push_back({u,w});}\nvector<long long>dist(n+1,1e18);dist[1]=0;\npriority_queue<pair<long long,int>,vector<pair<long long,int>>,greater<>>pq;\npq.push({0,1});\nwhile(!pq.empty()){auto d=pq.top();pq.pop();int u=d.second;\n  if(d.first>dist[u])continue;\n  for(auto&e:adj[u]){int v=e.first,w=e.second;\n    if(dist[u]+w<dist[v]){dist[v]=dist[u]+w;pq.push({dist[v],v});}}}\ncout<<(dist[n]>=1e18?-1:dist[n])<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt(),m=sc.nextInt();\n    ArrayList<ArrayList<int[]>>adj=new ArrayList<>();\n    for(int i=0;i<=n;i++)adj.add(new ArrayList<>());\n    for(int i=0;i<m;i++){int u=sc.nextInt(),v=sc.nextInt(),w=sc.nextInt();\n      adj.get(u).add(new int[]{v,w});adj.get(v).add(new int[]{u,w});}\n    long[]dist=new long[n+1];Arrays.fill(dist,Long.MAX_VALUE/2);dist[1]=0;\n    PriorityQueue<long[]>pq=new PriorityQueue<>((a,b)->Long.compare(a[0],b[0]));\n    pq.add(new long[]{0,1});\n    while(!pq.isEmpty()){long[]t=pq.poll();long d=t[0];int u=(int)t[1];\n      if(d>dist[u])continue;\n      for(int[]e:adj.get(u)){int v=e[0],w=e[1];\n        if(dist[u]+w<dist[v]){dist[v]=dist[u]+w;pq.add(new long[]{dist[v],v});}}}\n    System.out.println(dist[n]>=Long.MAX_VALUE/2?-1:dist[n]);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXJAVA082",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Java 软件编程等级考试（8级）真题卷（大纲同步）",
    "level": "8级",
    "duration": 120,
    "year": "2026",
    "lang": "java",
    "questions": [
      {
        "type": "choice",
        "stem": "网络最大流常用算法是？",
        "options": [
          "Edmonds-Karp",
          "冒泡",
          "快速排序",
          "BFS 树"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "基于 BFS 找增广路。"
      },
      {
        "type": "choice",
        "stem": "在 DAG 上做动态规划通常先？",
        "options": [
          "排序",
          "拓扑排序",
          "并查集",
          "哈希"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "按拓扑序递推保证无后效性。"
      },
      {
        "type": "choice",
        "stem": "下列可用于求最小生成树的是？",
        "options": [
          "Dijkstra",
          "Kruskal / Prim",
          "Floyd",
          "DFS"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "Kruskal 与 Prim 求 MST。"
      },
      {
        "type": "choice",
        "stem": "Floyd 全源最短路的时间复杂度是？",
        "options": [
          "O(n)",
          "O(n^2)",
          "O(n^3)",
          "O(n log n)"
        ],
        "answer": "C",
        "score": 5,
        "analysis": "三重循环。"
      },
      {
        "type": "judge",
        "stem": "贪心算法对所有问题都能得到最优解。",
        "answer": "F",
        "score": 5,
        "analysis": "仅满足特定条件时。"
      },
      {
        "type": "judge",
        "stem": "线段树建树的时间复杂度为 O(n log n)。",
        "answer": "T",
        "score": 5,
        "analysis": "n 个叶子，高度 log n。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "贪心：按结束时间排序，依次选不冲突的。",
        "desc": "会议室安排：输入 n 场会议的起止时间，输出最多可安排的不冲突会议数。",
        "input": "n，然后 n 行 l r。",
        "output": "最多会议数。",
        "samples": [
          {
            "input": "3\n1 2\n3 4\n5 6",
            "output": "3"
          },
          {
            "input": "3\n1 4\n2 3\n3 5",
            "output": "2"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nn=int(data[0])\niv=[]\nidx=1\nfor _ in range(n):\n    l=int(data[idx]);r=int(data[idx+1]);idx+=2\n    iv.append((r,l))\niv.sort()\ncnt=0;last=-10**18\nfor r,l in iv:\n    if l>=last:\n        cnt+=1;last=r\nprint(cnt)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<pair<int,int>>iv(n);\nfor(int i=0;i<n;i++){int l,r;cin>>l>>r;iv[i]={r,l};}\nsort(iv.begin(),iv.end());\nint cnt=0,last=-2e9;\nfor(auto&p:iv){if(p.second>=last){cnt++;last=p.first;}}\ncout<<cnt<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt();\n    int[][]iv=new int[n][2];\n    for(int i=0;i<n;i++){iv[i][0]=sc.nextInt();iv[i][1]=sc.nextInt();}\n    Arrays.sort(iv,(a,b)->Integer.compare(a[1],b[1]));\n    int cnt=0,last=(int)-2e9;\n    for(int[]p:iv){if(p[0]>=last){cnt++;last=p[1];}}\n    System.out.println(cnt);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "Dijkstra + 优先队列。",
        "desc": "输入 n 个节点 m 条带权无向边，输出节点 1 到节点 n 的最短距离，不可达输出 -1。",
        "input": "n m，然后 m 行 u v w。",
        "output": "最短距离或 -1。",
        "samples": [
          {
            "input": "4 4\n1 2 2\n2 3 3\n1 4 9\n3 4 1",
            "output": "6"
          },
          {
            "input": "3 1\n1 2 5",
            "output": "-1"
          }
        ],
        "solutions": {
          "python": "import sys,heapq\ndata=sys.stdin.read().split()\nn=int(data[0]);m=int(data[1])\nadj=[[] for _ in range(n+1)]\nidx=2\nfor _ in range(m):\n    u=int(data[idx]);v=int(data[idx+1]);w=int(data[idx+2]);idx+=3\n    adj[u].append((v,w));adj[v].append((u,w))\ndist=[10**18]*(n+1);dist[1]=0\npq=[(0,1)]\nwhile pq:\n    d,u=heapq.heappop(pq)\n    if d>dist[u]:continue\n    for v,w in adj[u]:\n        if dist[u]+w<dist[v]:\n            dist[v]=dist[u]+w;heapq.heappush(pq,(dist[v],v))\nprint(dist[n] if dist[n]<10**18 else -1)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;\nvector<vector<pair<int,int>>>adj(n+1);\nfor(int i=0;i<m;i++){int u,v,w;cin>>u>>v>>w;\n  adj[u].push_back({v,w});adj[v].push_back({u,w});}\nvector<long long>dist(n+1,1e18);dist[1]=0;\npriority_queue<pair<long long,int>,vector<pair<long long,int>>,greater<>>pq;\npq.push({0,1});\nwhile(!pq.empty()){auto d=pq.top();pq.pop();int u=d.second;\n  if(d.first>dist[u])continue;\n  for(auto&e:adj[u]){int v=e.first,w=e.second;\n    if(dist[u]+w<dist[v]){dist[v]=dist[u]+w;pq.push({dist[v],v});}}}\ncout<<(dist[n]>=1e18?-1:dist[n])<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt(),m=sc.nextInt();\n    ArrayList<ArrayList<int[]>>adj=new ArrayList<>();\n    for(int i=0;i<=n;i++)adj.add(new ArrayList<>());\n    for(int i=0;i<m;i++){int u=sc.nextInt(),v=sc.nextInt(),w=sc.nextInt();\n      adj.get(u).add(new int[]{v,w});adj.get(v).add(new int[]{u,w});}\n    long[]dist=new long[n+1];Arrays.fill(dist,Long.MAX_VALUE/2);dist[1]=0;\n    PriorityQueue<long[]>pq=new PriorityQueue<>((a,b)->Long.compare(a[0],b[0]));\n    pq.add(new long[]{0,1});\n    while(!pq.isEmpty()){long[]t=pq.poll();long d=t[0];int u=(int)t[1];\n      if(d>dist[u])continue;\n      for(int[]e:adj.get(u)){int v=e[0],w=e[1];\n        if(dist[u]+w<dist[v]){dist[v]=dist[u]+w;pq.add(new long[]{dist[v],v});}}}\n    System.out.println(dist[n]>=Long.MAX_VALUE/2?-1:dist[n]);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXJAVA090",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Java 软件编程等级考试（9级）模拟卷（一）",
    "level": "9级",
    "duration": 120,
    "year": "2026",
    "lang": "java",
    "questions": [
      {
        "type": "choice",
        "stem": "矩阵快速幂可用于加速？",
        "options": [
          "排序",
          "线性递推",
          "最短路",
          "哈希"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "将递推优化到 O(log n)。"
      },
      {
        "type": "choice",
        "stem": "卡特兰数常用于计数以下哪类对象？",
        "options": [
          "全排列",
          "合法括号序列 / 出栈序列",
          "素数",
          "最短路"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "卡特兰数经典应用。"
      },
      {
        "type": "choice",
        "stem": "Miller-Rabin 算法用于？",
        "options": [
          "排序",
          "大整数素数判定",
          "最短路",
          "哈希"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "概率性素数测试。"
      },
      {
        "type": "choice",
        "stem": "Edmonds-Karp 最大流复杂度约为？",
        "options": [
          "O(E)",
          "O(VE^2)",
          "O(V^2)",
          "O(E log V)"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "每次 BFS 增广，最多 VE 次。"
      },
      {
        "type": "judge",
        "stem": "目前没有已知多项式时间算法能求解所有 NP 完全问题。",
        "answer": "T",
        "score": 5,
        "analysis": "P≠NP 猜想下成立。"
      },
      {
        "type": "judge",
        "stem": "容斥原理可处理多个集合并集的计数。",
        "answer": "T",
        "score": 5,
        "analysis": "加交减交。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "利用 C(n,k)=C(n,k-1)*(n-k+1)/k，边乘边取模（k 较大时用逆元）。",
        "desc": "从 n 个不同元素中选 k 个，输入 n,k，输出方案数模 1000000007。",
        "input": "一行，n k。",
        "output": "方案数 mod 1000000007。",
        "samples": [
          {
            "input": "5 2",
            "output": "10"
          },
          {
            "input": "10 3",
            "output": "120"
          }
        ],
        "solutions": {
          "python": "import sys\nMOD=1000000007\nn,k=map(int,sys.stdin.read().split())\nif k<0 or k>n:print(0)\nelse:\n    k=min(k,n-k);res=1\n    for i in range(1,k+1):\n        res=res*(n-k+i)//i%MOD\n    print(res%MOD)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nconst long long MOD=1000000007;\nlong long modpow(long long a,long long e){long long r=1;while(e){if(e&1)r=r*a%MOD;a=a*a%MOD;e>>=1;}return r;}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long n,k;cin>>n>>k;\nif(k<0||k>n){cout<<0<<endl;return 0;}\nif(k>n-k)k=n-k;long long res=1;\nfor(long long i=1;i<=k;i++){\n  res=res*(n-k+i)%MOD;\n  res=res*modpow(i,MOD-2)%MOD;\n}\ncout<<res<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  static long MOD=1000000007;\n  static long modpow(long a,long e){long r=1;while(e>0){if((e&1)==1)r=r*a%MOD;a=a*a%MOD;e>>=1;}return r;}\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long n=sc.nextLong(),k=sc.nextLong();\n    if(k<0||k>n){System.out.println(0);return;}\n    if(k>n-k)k=n-k;long res=1;\n    for(long i=1;i<=k;i++){\n      res=res*(n-k+i)%MOD;\n      res=res*modpow(i,MOD-2)%MOD;\n    }\n    System.out.println(res);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "φ(n)=n*Π(1-1/p)，分解素因子后累乘。",
        "desc": "输入一个整数 n（1 ≤ n ≤ 10^6），输出欧拉函数 φ(n)（小于等于 n 且与 n 互质的正整数个数）。",
        "input": "一行，整数 n。",
        "output": "φ(n)。",
        "samples": [
          {
            "input": "9",
            "output": "6"
          },
          {
            "input": "12",
            "output": "4"
          }
        ],
        "solutions": {
          "python": "import sys\nn=int(sys.stdin.read().strip())\nres=n;i=2\nwhile i*i<=n:\n    if n%i==0:\n        while n%i==0:n//=i\n        res-=res//i\n    i+=1\nif n>1:res-=res//n\nprint(res)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long n;cin>>n;long long res=n;\nfor(long long i=2;i*i<=n;i++)if(n%i==0){\n  while(n%i==0)n/=i;res-=res/i;}\nif(n>1)res-=res/n;\ncout<<res<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long n=sc.nextLong();long res=n;\n    for(long i=2;i*i<=n;i++)if(n%i==0){\n      while(n%i==0)n/=i;res-=res/i;}\n    if(n>1)res-=res/n;\n    System.out.println(res);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXJAVA091",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Java 软件编程等级考试（9级）模拟卷（二）",
    "level": "9级",
    "duration": 120,
    "year": "2026",
    "lang": "java",
    "questions": [
      {
        "type": "choice",
        "stem": "欧拉函数 φ(n) 表示？",
        "options": [
          "n 的因子个数",
          "小于 n 且与 n 互质的个数",
          "n 的质因数个数",
          "n!"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "经典数论函数。"
      },
      {
        "type": "choice",
        "stem": "模意义下的除法（求 a/b mod p）需要？",
        "options": [
          "直接除",
          "乘法逆元",
          "减法",
          "取整"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "除以 b 等价于乘 b 的逆元。"
      },
      {
        "type": "choice",
        "stem": "卡特兰数常用于计数以下哪类对象？",
        "options": [
          "全排列",
          "合法括号序列 / 出栈序列",
          "素数",
          "最短路"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "卡特兰数经典应用。"
      },
      {
        "type": "choice",
        "stem": "求最长公共子序列（LCS）二维 DP 的复杂度是？",
        "options": [
          "O(n)",
          "O(nm)",
          "O(log n)",
          "O(n^2 log n)"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "两串长度乘积。"
      },
      {
        "type": "judge",
        "stem": "组合数 C(n,k) 当 k>n 时为 0。",
        "answer": "T",
        "score": 5,
        "analysis": "无法选出更多元素。"
      },
      {
        "type": "judge",
        "stem": "在模素数意义下，可用费马小定理求乘法逆元。",
        "answer": "T",
        "score": 5,
        "analysis": "a^(p-2) mod p。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "φ(n)=n*Π(1-1/p)，分解素因子后累乘。",
        "desc": "数论：输入 n，输出 φ(n)（与 n 互质且不超过 n 的正整数个数）。",
        "input": "一行，整数 n。",
        "output": "φ(n)。",
        "samples": [
          {
            "input": "9",
            "output": "6"
          },
          {
            "input": "12",
            "output": "4"
          }
        ],
        "solutions": {
          "python": "import sys\nn=int(sys.stdin.read().strip())\nres=n;i=2\nwhile i*i<=n:\n    if n%i==0:\n        while n%i==0:n//=i\n        res-=res//i\n    i+=1\nif n>1:res-=res//n\nprint(res)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long n;cin>>n;long long res=n;\nfor(long long i=2;i*i<=n;i++)if(n%i==0){\n  while(n%i==0)n/=i;res-=res/i;}\nif(n>1)res-=res/n;\ncout<<res<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long n=sc.nextLong();long res=n;\n    for(long i=2;i*i<=n;i++)if(n%i==0){\n      while(n%i==0)n/=i;res-=res/i;}\n    if(n>1)res-=res/n;\n    System.out.println(res);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "二维 DP：dp[i][j]=dp[i-1][j-1]+1（相等）或 max(上,左)。",
        "desc": "输入两个字符串，输出它们最长公共子序列的长度（子序列不要求连续）。",
        "input": "两行，字符串。",
        "output": "LCS 长度。",
        "samples": [
          {
            "input": "abcde\nbace",
            "output": "3"
          },
          {
            "input": "abcd\nacd",
            "output": "3"
          }
        ],
        "solutions": {
          "python": "import sys\ns=sys.stdin.read().split()\na=s[0];b=s[1]\nn=len(a);m=len(b)\ndp=[[0]*(m+1) for _ in range(n+1)]\nfor i in range(n):\n    for j in range(m):\n        dp[i+1][j+1]=dp[i][j]+1 if a[i]==b[j] else max(dp[i][j+1],dp[i+1][j])\nprint(dp[n][m])",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring a,b;cin>>a>>b;\nint n=a.size(),m=b.size();\nvector<vector<int>>dp(n+1,vector<int>(m+1,0));\nfor(int i=0;i<n;i++)for(int j=0;j<m;j++)\n  dp[i+1][j+1]=a[i]==b[j]?dp[i][j]+1:max(dp[i][j+1],dp[i+1][j]);\ncout<<dp[n][m]<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    String a=sc.next(),b=sc.next();\n    int n=a.length(),m=b.length();\n    int[][]dp=new int[n+1][m+1];\n    for(int i=0;i<n;i++)for(int j=0;j<m;j++)\n      dp[i+1][j+1]=a.charAt(i)==b.charAt(j)?dp[i][j]+1:Math.max(dp[i][j+1],dp[i+1][j]);\n    System.out.println(dp[n][m]);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXJAVA092",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Java 软件编程等级考试（9级）真题卷（大纲同步）",
    "level": "9级",
    "duration": 120,
    "year": "2026",
    "lang": "java",
    "questions": [
      {
        "type": "choice",
        "stem": "Edmonds-Karp 最大流复杂度约为？",
        "options": [
          "O(E)",
          "O(VE^2)",
          "O(V^2)",
          "O(E log V)"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "每次 BFS 增广，最多 VE 次。"
      },
      {
        "type": "choice",
        "stem": "二分图最大匹配可用？",
        "options": [
          "匈牙利算法",
          "冒泡",
          "快排",
          "Dijkstra"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "匈牙利算法（增广路）。"
      },
      {
        "type": "choice",
        "stem": "求最长公共子序列（LCS）二维 DP 的复杂度是？",
        "options": [
          "O(n)",
          "O(nm)",
          "O(log n)",
          "O(n^2 log n)"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "两串长度乘积。"
      },
      {
        "type": "choice",
        "stem": "欧拉函数 φ(n) 表示？",
        "options": [
          "n 的因子个数",
          "小于 n 且与 n 互质的个数",
          "n 的质因数个数",
          "n!"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "经典数论函数。"
      },
      {
        "type": "judge",
        "stem": "在模素数意义下，可用费马小定理求乘法逆元。",
        "answer": "T",
        "score": 5,
        "analysis": "a^(p-2) mod p。"
      },
      {
        "type": "judge",
        "stem": "组合数 C(n,k) 当 k>n 时为 0。",
        "answer": "T",
        "score": 5,
        "analysis": "无法选出更多元素。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "利用 C(n,k)=C(n,k-1)*(n-k+1)/k，边乘边取模（k 较大时用逆元）。",
        "desc": "组合数：输入 n,k（0≤k≤n≤1000），输出 C(n,k) 对 1000000007 取模。",
        "input": "一行，n k。",
        "output": "取模后的组合数。",
        "samples": [
          {
            "input": "5 2",
            "output": "10"
          },
          {
            "input": "10 3",
            "output": "120"
          }
        ],
        "solutions": {
          "python": "import sys\nMOD=1000000007\nn,k=map(int,sys.stdin.read().split())\nif k<0 or k>n:print(0)\nelse:\n    k=min(k,n-k);res=1\n    for i in range(1,k+1):\n        res=res*(n-k+i)//i%MOD\n    print(res%MOD)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nconst long long MOD=1000000007;\nlong long modpow(long long a,long long e){long long r=1;while(e){if(e&1)r=r*a%MOD;a=a*a%MOD;e>>=1;}return r;}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long n,k;cin>>n>>k;\nif(k<0||k>n){cout<<0<<endl;return 0;}\nif(k>n-k)k=n-k;long long res=1;\nfor(long long i=1;i<=k;i++){\n  res=res*(n-k+i)%MOD;\n  res=res*modpow(i,MOD-2)%MOD;\n}\ncout<<res<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  static long MOD=1000000007;\n  static long modpow(long a,long e){long r=1;while(e>0){if((e&1)==1)r=r*a%MOD;a=a*a%MOD;e>>=1;}return r;}\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long n=sc.nextLong(),k=sc.nextLong();\n    if(k<0||k>n){System.out.println(0);return;}\n    if(k>n-k)k=n-k;long res=1;\n    for(long i=1;i<=k;i++){\n      res=res*(n-k+i)%MOD;\n      res=res*modpow(i,MOD-2)%MOD;\n    }\n    System.out.println(res);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "二维 DP：dp[i][j]=dp[i-1][j-1]+1（相等）或 max(上,左)。",
        "desc": "输入两个字符串，输出它们最长公共子序列的长度（子序列不要求连续）。",
        "input": "两行，字符串。",
        "output": "LCS 长度。",
        "samples": [
          {
            "input": "abcde\nbace",
            "output": "3"
          },
          {
            "input": "abcd\nacd",
            "output": "3"
          }
        ],
        "solutions": {
          "python": "import sys\ns=sys.stdin.read().split()\na=s[0];b=s[1]\nn=len(a);m=len(b)\ndp=[[0]*(m+1) for _ in range(n+1)]\nfor i in range(n):\n    for j in range(m):\n        dp[i+1][j+1]=dp[i][j]+1 if a[i]==b[j] else max(dp[i][j+1],dp[i+1][j])\nprint(dp[n][m])",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring a,b;cin>>a>>b;\nint n=a.size(),m=b.size();\nvector<vector<int>>dp(n+1,vector<int>(m+1,0));\nfor(int i=0;i<n;i++)for(int j=0;j<m;j++)\n  dp[i+1][j+1]=a[i]==b[j]?dp[i][j]+1:max(dp[i][j+1],dp[i+1][j]);\ncout<<dp[n][m]<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    String a=sc.next(),b=sc.next();\n    int n=a.length(),m=b.length();\n    int[][]dp=new int[n+1][m+1];\n    for(int i=0;i<n;i++)for(int j=0;j<m;j++)\n      dp[i+1][j+1]=a.charAt(i)==b.charAt(j)?dp[i][j]+1:Math.max(dp[i][j+1],dp[i+1][j]);\n    System.out.println(dp[n][m]);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXJAVA100",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Java 软件编程等级考试（10级）模拟卷（一）",
    "level": "10级",
    "duration": 120,
    "year": "2026",
    "lang": "java",
    "questions": [
      {
        "type": "choice",
        "stem": "求最长公共子序列（LCS）二维 DP 的复杂度是？",
        "options": [
          "O(n)",
          "O(nm)",
          "O(log n)",
          "O(n^2 log n)"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "两串长度乘积。"
      },
      {
        "type": "choice",
        "stem": "容斥原理主要用于？",
        "options": [
          "排序",
          "多个集合的并/交计数",
          "最短路",
          "贪心"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "处理重复计数的抵消。"
      },
      {
        "type": "choice",
        "stem": "二分图最大匹配可用？",
        "options": [
          "匈牙利算法",
          "冒泡",
          "快排",
          "Dijkstra"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "匈牙利算法（增广路）。"
      },
      {
        "type": "choice",
        "stem": "Miller-Rabin 算法用于？",
        "options": [
          "排序",
          "大整数素数判定",
          "最短路",
          "哈希"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "概率性素数测试。"
      },
      {
        "type": "judge",
        "stem": "在模素数意义下，可用费马小定理求乘法逆元。",
        "answer": "T",
        "score": 5,
        "analysis": "a^(p-2) mod p。"
      },
      {
        "type": "judge",
        "stem": "目前没有已知多项式时间算法能求解所有 NP 完全问题。",
        "answer": "T",
        "score": 5,
        "analysis": "P≠NP 猜想下成立。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "Kruskal：按边权排序，并查集合并。",
        "desc": "输入第一行 n m（2 ≤ n ≤ 100，1 ≤ m ≤ n*(n-1)/2），随后 m 行每行 u v w（边权）。输出最小生成树的总边权；若不连通输出 -1。",
        "input": "n m，然后 m 行 u v w。",
        "output": "MST 总边权或 -1。",
        "samples": [
          {
            "input": "4 5\n1 2 1\n2 3 2\n3 4 3\n1 3 4\n2 4 5",
            "output": "6"
          },
          {
            "input": "3 1\n1 2 5",
            "output": "-1"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nn=int(data[0]);m=int(data[1])\nedges=[]\nidx=2\nfor _ in range(m):\n    u=int(data[idx]);v=int(data[idx+1]);w=int(data[idx+2]);idx+=3\n    edges.append((w,u,v))\nedges.sort()\nparent=list(range(n+1))\ndef find(x):\n    while parent[x]!=x:parent[x]=parent[parent[x]];x=parent[x]\n    return x\ntot=0;cnt=0\nfor w,u,v in edges:\n    pu,pv=find(u),find(v)\n    if pu!=pv:\n        parent[pu]=pv;tot+=w;cnt+=1\n        if cnt==n-1:break\nprint(tot if cnt==n-1 else -1)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint parent[105];\nint find(int x){while(parent[x]!=x){parent[x]=parent[parent[x]];x=parent[x];}return x;}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<tuple<int,int,int>>e(m);\nfor(int i=0;i<m;i++){int u,v,w;cin>>u>>v>>w;e[i]={w,u,v};}\nsort(e.begin(),e.end());\nfor(int i=1;i<=n;i++)parent[i]=i;\nlong long tot=0;int cnt=0;\nfor(auto&x:e){int w=get<0>(x),u=get<1>(x),v=get<2>(x);\n  int pu=find(u),pv=find(v);if(pu!=pv){parent[pu]=pv;tot+=w;cnt++;if(cnt==n-1)break;}}\ncout<<(cnt==n-1?tot:-1)<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  static int[]parent;\n  static int find(int x){while(parent[x]!=x){parent[x]=parent[parent[x]];x=parent[x];}return x;}\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt(),m=sc.nextInt();\n    int[][]e=new int[m][3];\n    for(int i=0;i<m;i++){e[i][0]=sc.nextInt();e[i][1]=sc.nextInt();e[i][2]=sc.nextInt();}\n    Arrays.sort(e,(a,b)->Integer.compare(a[0],b[0]));\n    parent=new int[n+1];for(int i=1;i<=n;i++)parent[i]=i;\n    long tot=0;int cnt=0;\n    for(int[]x:e){int w=x[0],u=x[1],v=x[2];\n      int pu=find(u),pv=find(v);if(pu!=pv){parent[pu]=pv;tot+=w;cnt++;if(cnt==n-1)break;}}\n    System.out.println(cnt==n-1?tot:-1);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "φ(n)=n*Π(1-1/p)，分解素因子后累乘。",
        "desc": "输入一个整数 n（1 ≤ n ≤ 10^6），输出欧拉函数 φ(n)（小于等于 n 且与 n 互质的正整数个数）。",
        "input": "一行，整数 n。",
        "output": "φ(n)。",
        "samples": [
          {
            "input": "9",
            "output": "6"
          },
          {
            "input": "12",
            "output": "4"
          }
        ],
        "solutions": {
          "python": "import sys\nn=int(sys.stdin.read().strip())\nres=n;i=2\nwhile i*i<=n:\n    if n%i==0:\n        while n%i==0:n//=i\n        res-=res//i\n    i+=1\nif n>1:res-=res//n\nprint(res)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long n;cin>>n;long long res=n;\nfor(long long i=2;i*i<=n;i++)if(n%i==0){\n  while(n%i==0)n/=i;res-=res/i;}\nif(n>1)res-=res/n;\ncout<<res<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long n=sc.nextLong();long res=n;\n    for(long i=2;i*i<=n;i++)if(n%i==0){\n      while(n%i==0)n/=i;res-=res/i;}\n    if(n>1)res-=res/n;\n    System.out.println(res);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXJAVA101",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Java 软件编程等级考试（10级）模拟卷（二）",
    "level": "10级",
    "duration": 120,
    "year": "2026",
    "lang": "java",
    "questions": [
      {
        "type": "choice",
        "stem": "Miller-Rabin 算法用于？",
        "options": [
          "排序",
          "大整数素数判定",
          "最短路",
          "哈希"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "概率性素数测试。"
      },
      {
        "type": "choice",
        "stem": "求最长公共子序列（LCS）二维 DP 的复杂度是？",
        "options": [
          "O(n)",
          "O(nm)",
          "O(log n)",
          "O(n^2 log n)"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "两串长度乘积。"
      },
      {
        "type": "choice",
        "stem": "欧拉函数 φ(n) 表示？",
        "options": [
          "n 的因子个数",
          "小于 n 且与 n 互质的个数",
          "n 的质因数个数",
          "n!"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "经典数论函数。"
      },
      {
        "type": "choice",
        "stem": "模意义下的除法（求 a/b mod p）需要？",
        "options": [
          "直接除",
          "乘法逆元",
          "减法",
          "取整"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "除以 b 等价于乘 b 的逆元。"
      },
      {
        "type": "judge",
        "stem": "容斥原理可处理多个集合并集的计数。",
        "answer": "T",
        "score": 5,
        "analysis": "加交减交。"
      },
      {
        "type": "judge",
        "stem": "组合数 C(n,k) 当 k>n 时为 0。",
        "answer": "T",
        "score": 5,
        "analysis": "无法选出更多元素。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "Kruskal：按边权排序，并查集合并。",
        "desc": "带权无向图 n 点 m 边，输出最小生成树的总边权，不连通输出 -1。",
        "input": "n m，然后 m 行 u v w。",
        "output": "MST 总边权或 -1。",
        "samples": [
          {
            "input": "4 5\n1 2 1\n2 3 2\n3 4 3\n1 3 4\n2 4 5",
            "output": "6"
          },
          {
            "input": "3 1\n1 2 5",
            "output": "-1"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nn=int(data[0]);m=int(data[1])\nedges=[]\nidx=2\nfor _ in range(m):\n    u=int(data[idx]);v=int(data[idx+1]);w=int(data[idx+2]);idx+=3\n    edges.append((w,u,v))\nedges.sort()\nparent=list(range(n+1))\ndef find(x):\n    while parent[x]!=x:parent[x]=parent[parent[x]];x=parent[x]\n    return x\ntot=0;cnt=0\nfor w,u,v in edges:\n    pu,pv=find(u),find(v)\n    if pu!=pv:\n        parent[pu]=pv;tot+=w;cnt+=1\n        if cnt==n-1:break\nprint(tot if cnt==n-1 else -1)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint parent[105];\nint find(int x){while(parent[x]!=x){parent[x]=parent[parent[x]];x=parent[x];}return x;}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<tuple<int,int,int>>e(m);\nfor(int i=0;i<m;i++){int u,v,w;cin>>u>>v>>w;e[i]={w,u,v};}\nsort(e.begin(),e.end());\nfor(int i=1;i<=n;i++)parent[i]=i;\nlong long tot=0;int cnt=0;\nfor(auto&x:e){int w=get<0>(x),u=get<1>(x),v=get<2>(x);\n  int pu=find(u),pv=find(v);if(pu!=pv){parent[pu]=pv;tot+=w;cnt++;if(cnt==n-1)break;}}\ncout<<(cnt==n-1?tot:-1)<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  static int[]parent;\n  static int find(int x){while(parent[x]!=x){parent[x]=parent[parent[x]];x=parent[x];}return x;}\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt(),m=sc.nextInt();\n    int[][]e=new int[m][3];\n    for(int i=0;i<m;i++){e[i][0]=sc.nextInt();e[i][1]=sc.nextInt();e[i][2]=sc.nextInt();}\n    Arrays.sort(e,(a,b)->Integer.compare(a[0],b[0]));\n    parent=new int[n+1];for(int i=1;i<=n;i++)parent[i]=i;\n    long tot=0;int cnt=0;\n    for(int[]x:e){int w=x[0],u=x[1],v=x[2];\n      int pu=find(u),pv=find(v);if(pu!=pv){parent[pu]=pv;tot+=w;cnt++;if(cnt==n-1)break;}}\n    System.out.println(cnt==n-1?tot:-1);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "二维 DP：dp[i][j]=dp[i-1][j-1]+1（相等）或 max(上,左)。",
        "desc": "输入两个字符串，输出它们最长公共子序列的长度（子序列不要求连续）。",
        "input": "两行，字符串。",
        "output": "LCS 长度。",
        "samples": [
          {
            "input": "abcde\nbace",
            "output": "3"
          },
          {
            "input": "abcd\nacd",
            "output": "3"
          }
        ],
        "solutions": {
          "python": "import sys\ns=sys.stdin.read().split()\na=s[0];b=s[1]\nn=len(a);m=len(b)\ndp=[[0]*(m+1) for _ in range(n+1)]\nfor i in range(n):\n    for j in range(m):\n        dp[i+1][j+1]=dp[i][j]+1 if a[i]==b[j] else max(dp[i][j+1],dp[i+1][j])\nprint(dp[n][m])",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring a,b;cin>>a>>b;\nint n=a.size(),m=b.size();\nvector<vector<int>>dp(n+1,vector<int>(m+1,0));\nfor(int i=0;i<n;i++)for(int j=0;j<m;j++)\n  dp[i+1][j+1]=a[i]==b[j]?dp[i][j]+1:max(dp[i][j+1],dp[i+1][j]);\ncout<<dp[n][m]<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    String a=sc.next(),b=sc.next();\n    int n=a.length(),m=b.length();\n    int[][]dp=new int[n+1][m+1];\n    for(int i=0;i<n;i++)for(int j=0;j<m;j++)\n      dp[i+1][j+1]=a.charAt(i)==b.charAt(j)?dp[i][j]+1:Math.max(dp[i][j+1],dp[i+1][j]);\n    System.out.println(dp[n][m]);\n  }\n}"
        }
      }
    ]
  },
  {
    "id": "EXJAVA102",
    "kind": "exam",
    "org": "cesi",
    "orgName": "中国电子学会 · 全国青少年软件编程等级考试",
    "name": "Java 软件编程等级考试（10级）真题卷（大纲同步）",
    "level": "10级",
    "duration": 120,
    "year": "2026",
    "lang": "java",
    "questions": [
      {
        "type": "choice",
        "stem": "二分图最大匹配可用？",
        "options": [
          "匈牙利算法",
          "冒泡",
          "快排",
          "Dijkstra"
        ],
        "answer": "A",
        "score": 5,
        "analysis": "匈牙利算法（增广路）。"
      },
      {
        "type": "choice",
        "stem": "求最长公共子序列（LCS）二维 DP 的复杂度是？",
        "options": [
          "O(n)",
          "O(nm)",
          "O(log n)",
          "O(n^2 log n)"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "两串长度乘积。"
      },
      {
        "type": "choice",
        "stem": "Miller-Rabin 算法用于？",
        "options": [
          "排序",
          "大整数素数判定",
          "最短路",
          "哈希"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "概率性素数测试。"
      },
      {
        "type": "choice",
        "stem": "中国剩余定理解决？",
        "options": [
          "最短路",
          "同余方程组",
          "排序",
          "哈希"
        ],
        "answer": "B",
        "score": 5,
        "analysis": "一元线性同余方程组。"
      },
      {
        "type": "judge",
        "stem": "网络最大流等于最小割。",
        "answer": "T",
        "score": 5,
        "analysis": "最大流最小割定理。"
      },
      {
        "type": "judge",
        "stem": "组合数 C(n,k) 当 k>n 时为 0。",
        "answer": "T",
        "score": 5,
        "analysis": "无法选出更多元素。"
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "利用 C(n,k)=C(n,k-1)*(n-k+1)/k，边乘边取模（k 较大时用逆元）。",
        "desc": "输入两个整数 n, k（0 ≤ k ≤ n ≤ 1000），输出组合数 C(n,k) 模 1000000007 的值。",
        "input": "一行，n k。",
        "output": "C(n,k) mod 1000000007。",
        "samples": [
          {
            "input": "5 2",
            "output": "10"
          },
          {
            "input": "10 3",
            "output": "120"
          }
        ],
        "solutions": {
          "python": "import sys\nMOD=1000000007\nn,k=map(int,sys.stdin.read().split())\nif k<0 or k>n:print(0)\nelse:\n    k=min(k,n-k);res=1\n    for i in range(1,k+1):\n        res=res*(n-k+i)//i%MOD\n    print(res%MOD)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nconst long long MOD=1000000007;\nlong long modpow(long long a,long long e){long long r=1;while(e){if(e&1)r=r*a%MOD;a=a*a%MOD;e>>=1;}return r;}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlong long n,k;cin>>n>>k;\nif(k<0||k>n){cout<<0<<endl;return 0;}\nif(k>n-k)k=n-k;long long res=1;\nfor(long long i=1;i<=k;i++){\n  res=res*(n-k+i)%MOD;\n  res=res*modpow(i,MOD-2)%MOD;\n}\ncout<<res<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  static long MOD=1000000007;\n  static long modpow(long a,long e){long r=1;while(e>0){if((e&1)==1)r=r*a%MOD;a=a*a%MOD;e>>=1;}return r;}\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    long n=sc.nextLong(),k=sc.nextLong();\n    if(k<0||k>n){System.out.println(0);return;}\n    if(k>n-k)k=n-k;long res=1;\n    for(long i=1;i<=k;i++){\n      res=res*(n-k+i)%MOD;\n      res=res*modpow(i,MOD-2)%MOD;\n    }\n    System.out.println(res);\n  }\n}"
        }
      },
      {
        "type": "program",
        "score": 30,
        "analysis": "Kruskal：按边权排序，并查集合并。",
        "desc": "带权无向图 n 点 m 边，输出最小生成树的总边权，不连通输出 -1。",
        "input": "n m，然后 m 行 u v w。",
        "output": "MST 总边权或 -1。",
        "samples": [
          {
            "input": "4 5\n1 2 1\n2 3 2\n3 4 3\n1 3 4\n2 4 5",
            "output": "6"
          },
          {
            "input": "3 1\n1 2 5",
            "output": "-1"
          }
        ],
        "solutions": {
          "python": "import sys\ndata=sys.stdin.read().split()\nn=int(data[0]);m=int(data[1])\nedges=[]\nidx=2\nfor _ in range(m):\n    u=int(data[idx]);v=int(data[idx+1]);w=int(data[idx+2]);idx+=3\n    edges.append((w,u,v))\nedges.sort()\nparent=list(range(n+1))\ndef find(x):\n    while parent[x]!=x:parent[x]=parent[parent[x]];x=parent[x]\n    return x\ntot=0;cnt=0\nfor w,u,v in edges:\n    pu,pv=find(u),find(v)\n    if pu!=pv:\n        parent[pu]=pv;tot+=w;cnt+=1\n        if cnt==n-1:break\nprint(tot if cnt==n-1 else -1)",
          "cpp": "#include <bits/stdc++.h>\nusing namespace std;\nint parent[105];\nint find(int x){while(parent[x]!=x){parent[x]=parent[parent[x]];x=parent[x];}return x;}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<tuple<int,int,int>>e(m);\nfor(int i=0;i<m;i++){int u,v,w;cin>>u>>v>>w;e[i]={w,u,v};}\nsort(e.begin(),e.end());\nfor(int i=1;i<=n;i++)parent[i]=i;\nlong long tot=0;int cnt=0;\nfor(auto&x:e){int w=get<0>(x),u=get<1>(x),v=get<2>(x);\n  int pu=find(u),pv=find(v);if(pu!=pv){parent[pu]=pv;tot+=w;cnt++;if(cnt==n-1)break;}}\ncout<<(cnt==n-1?tot:-1)<<endl;return 0;}",
          "java": "import java.util.*;\nclass Main{\n  static int[]parent;\n  static int find(int x){while(parent[x]!=x){parent[x]=parent[parent[x]];x=parent[x];}return x;}\n  public static void main(String[] __wb){\n    Scanner sc=new Scanner(System.in);\n    int n=sc.nextInt(),m=sc.nextInt();\n    int[][]e=new int[m][3];\n    for(int i=0;i<m;i++){e[i][0]=sc.nextInt();e[i][1]=sc.nextInt();e[i][2]=sc.nextInt();}\n    Arrays.sort(e,(a,b)->Integer.compare(a[0],b[0]));\n    parent=new int[n+1];for(int i=1;i<=n;i++)parent[i]=i;\n    long tot=0;int cnt=0;\n    for(int[]x:e){int w=x[0],u=x[1],v=x[2];\n      int pu=find(u),pv=find(v);if(pu!=pv){parent[pu]=pv;tot+=w;cnt++;if(cnt==n-1)break;}}\n    System.out.println(cnt==n-1?tot:-1);\n  }\n}"
        }
      }
    ]
  }
];

window.OJ_PAPERS = { PAPERS };
