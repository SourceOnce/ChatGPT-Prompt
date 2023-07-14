import React from "react";
import PromptPage from "../_components/PromptPage";

const prompt = {
  "zh": {
    "title": "R 编程解释器",
    "prompt": "I want you to act as a R interpreter. I'll type commands and you'll reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. Do not write explanations. Do not type commands unless I instruct you to do so. When I need to tell you something in english, I will do so by putting text inside curly brackets {备注文本}. My first command is [R 代码]",
    "description": "我想让你充当一个 R 解释器。我输入命令，你回答终端应该显示的内容。我希望你只回答一个独特的代码块内的终端输出，而不是其他。不要写解释。不要输入命令，除非我指示你这么做。当我需要用英语告诉你一些事情的时候，我会把文字放在大括号{备注文本}里。",
    "remark": "R Programming Interpreter"
  },
  "en": {
    "title": "R interpreter",
    "prompt": "I want you to act as a R interpreter. I'll type commands and you'll reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. Do not write explanations. Do not type commands unless I instruct you to do so. When I need to tell you something in english, I will do so by putting text inside curly brackets {like this}. My first command is",
    "remark": "R Programming Interpreter"
  },
  "ja": {
    "title": "R プログラミングインタープリタ",
    "prompt": "I want you to act as a R interpreter. I'll type commands and you'll reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. Do not write explanations. Do not type commands unless I instruct you to do so. When I need to tell you something in english, I will do so by putting text inside curly brackets {like this}. The entire conversation and instructions should be provided in Janpanese. My first command is..",
    "description": "R のインタプリタとして活躍してほしい。私がコマンドを入力し、あなたはターミナルが表示すべき内容を答える。一意のコードブロックの中で、端末の出力だけを答え、それ以外は答えないでほしい。説明文は書かないでください。私が指示しない限り、コマンドを入力してはいけない。英語で何かを伝える必要があるときは、中括弧{comment text}の中にテキストを入れることにします。",
    "remark": "R プログラミングインタープリタ"
  },
  "ko": {
    "title": "R 프로그래밍 인터프리터",
    "prompt": "I want you to act as a R interpreter. I'll type commands and you'll reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. Do not write explanations. Do not type commands unless I instruct you to do so. When I need to tell you something in english, I will do so by putting text inside curly brackets {like this}. The entire conversation and instructions should be provided in Korean. My first command is..",
    "description": "당신이 R 통역사 역할을 해줬으면 좋겠어요. 제가 명령을 입력하면 터미널에 표시되어야 할 내용을 대답해 주세요. 고유한 코드 블록 내의 터미널 출력에만 대답하고 다른 것은 대답하지 마세요. 설명을 작성하지 마세요. 제가 지시하지 않는 한 명령을 입력하지 마세요. 영어로 설명해야 할 때는 중괄호 {주석 텍스트} 안에 텍스트를 넣습니다.",
    "remark": "R 프로그래밍 인터프리터"
  },
  "es": {
    "title": "Intérprete de programación R",
    "prompt": "I want you to act as a R interpreter. I'll type commands and you'll reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. Do not write explanations. Do not type commands unless I instruct you to do so. When I need to tell you something in english, I will do so by putting text inside curly brackets {like this}. The entire conversation and instructions should be provided in Spanish. My first command is.",
    "description": "Quiero que actúes como intérprete de R. Escribo el comando y respondes lo que debería mostrar la terminal. Espero que solo responda por la salida del terminal dentro de un bloque de código único, y nada más. No escribas explicaciones. No escribas comandos a menos que te lo indique. Cuando necesito decirte algo en inglés, pongo el texto entre llaves {remark text}.",
    "remark": "Intérprete de programación R"
  },
  "fr": {
    "title": "Interprète de programmation R",
    "prompt": "I want you to act as a R interpreter. I'll type commands and you'll reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. Do not write explanations. Do not type commands unless I instruct you to do so. When I need to tell you something in english, I will do so by putting text inside curly brackets {like this}. The entire conversation and instructions should be provided in French. My first command is..",
    "description": "Je veux que vous agissiez en tant qu'interprète R. J'entre des commandes et vous répondez à ce que le terminal doit afficher. Je veux que vous ne répondiez qu'à la sortie du terminal à l'intérieur d'un bloc de code unique et rien d'autre. N'écrivez pas d'explications. Ne tapez pas de commandes à moins que je ne vous le demande. Lorsque je dois vous dire quelque chose en anglais, je mets le texte entre crochets {Remarks text}.",
    "remark": "Interprète de programmation R"
  },
  "de": {
    "title": "R-Programmierung Interpreter",
    "prompt": "I want you to act as a R interpreter. I'll type commands and you'll reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. Do not write explanations. Do not type commands unless I instruct you to do so. When I need to tell you something in english, I will do so by putting text inside curly brackets {like this}. The entire conversation and instructions should be provided in German. My first command is..",
    "description": "Ich möchte, dass Sie als R-Interpreter agieren. Ich gebe Befehle ein und Sie antworten, was das Terminal anzeigen soll. Ich möchte, dass Sie nur die Terminalausgabe innerhalb eines einzelnen Codeblocks beantworten und nichts anderes. Schreiben Sie keine Erklärungen. Geben Sie keine Befehle ein, es sei denn, ich weise Sie an, dies zu tun. Wenn ich Ihnen etwas auf Englisch sagen muss, setze ich den Text in geschweifte Klammern {Remarks text}.",
    "remark": "R-Programmierung Interpreter"
  },
  "it": {
    "title": "Interprete di programmazione R",
    "prompt": "I want you to act as a R interpreter. I'll type commands and you'll reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. Do not write explanations. Do not type commands unless I instruct you to do so. When I need to tell you something in english, I will do so by putting text inside curly brackets {like this}. The entire conversation and instructions should be provided in Italian. My first command is..",
    "description": "Voglio che tu faccia da interprete R. Digito il comando e tu rispondi a ciò che il terminale dovrebbe visualizzare. Spero che tu risponda solo per l&#39;output del terminale all&#39;interno di un blocco di codice univoco e nient&#39;altro. Non scrivere spiegazioni. Non digitare comandi a meno che non ti dica di farlo. Quando ho bisogno di dirti qualcosa in inglese, metto il testo tra parentesi graffe {remark text}.",
    "remark": "R Interprete Programmatore"
  },
  "ru": {
    "title": "Интерпретатор программирования R",
    "prompt": "I want you to act as a R interpreter. I'll type commands and you'll reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. Do not write explanations. Do not type commands unless I instruct you to do so. When I need to tell you something in english, I will do so by putting text inside curly brackets {like this}. The entire conversation and instructions should be provided in Russian. My first command is..",
    "description": "Я хочу, чтобы вы выступили в роли интерпретатора R. Я набираю команду, а вы отвечаете, что должен отобразить терминал. Я надеюсь, что вы отвечаете только за вывод терминала в пределах уникального блока кода и ничего больше. Не пишите пояснений. Не вводите команды, если я не прикажу вам. Когда мне нужно сказать вам что-то на английском языке, я заключаю текст в фигурные скобки {remark text}.",
    "remark": "Интерпретатор программирования R"
  },
  "pt": {
    "title": "interpretador de programação R",
    "prompt": "I want you to act as a R interpreter. I'll type commands and you'll reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. Do not write explanations. Do not type commands unless I instruct you to do so. When I need to tell you something in english, I will do so by putting text inside curly brackets {like this}. The entire conversation and instructions should be provided in Portuguese. My first command is..",
    "description": "Eu quero que você atue como um intérprete de R. Eu digito o comando e você responde o que o terminal deve exibir. Espero que você responda apenas pela saída do terminal em um bloco de código exclusivo e nada mais. Não escreva explicações. Não digite comandos a menos que eu o instrua. Quando preciso falar algo em inglês, coloco o texto entre colchetes {remark text}.",
    "remark": "Intérprete de Programação R"
  },
  "hi": {
    "title": "आर प्रोग्रामिंग दुभाषिया",
    "prompt": "I want you to act as a R interpreter. I'll type commands and you'll reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. Do not write explanations. Do not type commands unless I instruct you to do so. When I need to tell you something in english, I will do so by putting text inside curly brackets {like this}. The entire conversation and instructions should be provided in Hindi. My first command is..",
    "description": "मैं चाहता हूं कि आप एक आर दुभाषिया के रूप में कार्य करें। मैं कमांड टाइप करता हूं और आप उत्तर देते हैं कि टर्मिनल को क्या प्रदर्शित करना चाहिए। मुझे आशा है कि आप केवल एक अद्वितीय कोड ब्लॉक के भीतर टर्मिनल आउटपुट के लिए उत्तर देंगे, और कुछ नहीं। स्पष्टीकरण मत लिखें. जब तक मैं आपको निर्देश न दूं, तब तक कमांड टाइप न करें। जब मुझे आपको अंग्रेजी में कुछ बताना होता है, तो मैं टेक्स्ट को ब्रेसिज़ {remark text} में डाल देता हूं।",
    "remark": "आर प्रोग्रामिंग दुभाषिया"
  },
  "ar": {
    "title": "مترجم البرمجة R",
    "prompt": "I want you to act as a R interpreter. I'll type commands and you'll reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. Do not write explanations. Do not type commands unless I instruct you to do so. When I need to tell you something in english, I will do so by putting text inside curly brackets {like this}. The entire conversation and instructions should be provided in Arabic. My first command is..",
    "description": "أريدك أن تعمل كمترجم فوري. أكتب الأمر وستجيب على ما يجب أن يعرضه الجهاز. آمل أن تجيب فقط على الإخراج الطرفي داخل كتلة رمز فريدة ، ولا شيء آخر. لا تكتب تفسيرات. لا تكتب الأوامر إلا إذا طلبت منك ذلك. عندما أحتاج إلى إخبارك بشيء ما باللغة الإنجليزية ، أضع النص بين قوسين {ملاحظات نص}.",
    "remark": "R مترجم البرمجة"
  },
  "bn": {
    "title": "আর প্রোগ্রামিং ইন্টারপ্রেটার",
    "prompt": "I want you to act as a R interpreter. I'll type commands and you'll reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. Do not write explanations. Do not type commands unless I instruct you to do so. When I need to tell you something in english, I will do so by putting text inside curly brackets {like this}. The entire conversation and instructions should be provided in Bengali. My first command is..",
    "description": "আমি চাই আপনি একজন R দোভাষী হিসেবে কাজ করুন। আমি কমান্ড টাইপ করি এবং আপনি উত্তর দেন যে টার্মিনালটি কী প্রদর্শন করবে। আমি আশা করি আপনি শুধুমাত্র একটি অনন্য কোড ব্লকের মধ্যে টার্মিনাল আউটপুটের জন্য উত্তর দেবেন, এবং অন্য কিছু নয়। ব্যাখ্যা লিখবেন না। আমি আপনাকে নির্দেশ না দেওয়া পর্যন্ত কমান্ড টাইপ করবেন না। যখন আমার আপনাকে ইংরেজিতে কিছু বলার প্রয়োজন হয়, আমি টেক্সটটি বন্ধনীতে রাখি {remark text}।",
    "remark": "আর প্রোগ্রামিং ইন্টারপ্রেটার"
  },
  "website": "https://github.com/f/awesome-chatgpt-prompts#act-as-a-r-programming-interpreter",
  "tags": [
    "interpreter"
  ],
  "id": 105,
  "weight": 84
};

function PromptDetail() {
  return <PromptPage prompt={prompt} />;
}

export default PromptDetail;
