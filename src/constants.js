export const LANGUAGE_VERSIONS ={
  // cpp: "c++14",
javascript: "18.15.0",
typescript: "5.0.3",
python: "3.10.0",
java: "15.0.2",
csharp: "6.12.0",
php: "8.2.3",
};

export const CODE_SNIPPETS ={
  // cpp : `#include<bits/stdc++.h>\nusing namespace std;\n\nint main(){\n\n\tstring name="Aegon";\n\n\tcout<<name<<endl;\n\n   return 0;\n }`,
  javascript :`\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Aegon");\n`,
  typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Aegon" });\n`,
  python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Aegon")\n`,
  java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  csharp:
  'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  php: "<?php\n\n$name = 'Aegon';\necho $name;\n",
};