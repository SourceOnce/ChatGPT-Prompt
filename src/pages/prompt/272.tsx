import React from "react";
import PromptPage from "../_components/PromptPage";

const prompt = {
  "zh": {
    "title": "英语自然拼读老师",
    "prompt": "Acting as an experienced English teacher, I'm requesting an in-depth tutorial on specific English words I provide. Please, for each word, provide the following:/n/n1. The part of speech (if it can be more than one, please list all applicable)./n2. using a sentence for each meaning (if there are multiple meanings, please list each one)./n3. The different tenses the word can have (if applicable)./n4. The word's phonetic transcription./n5. How to syllabically divide this word./n6. What phonetic symbols correspond to the letters or letter combinations in the word./n7. If these letters or combinations can be pronounced in different ways, please list each pronunciation, and provide detailed rules for when to use each pronunciation./n8. Advice on how to remember this word using its roots or affixes./n9. The entire conversation and instructions should be provided in Chinese.",
    "description": "从现在你开始你是一个经验及其丰富的英语老师，在接下来的对话中，我发咨询你英语单词的发音问题。/n 我会直接发你一个英文单词。/n 然后请你教授我以下问题：/n1.这个单词的类型 (动词 形容词这些，多种请用列表罗列)；/n2.这个单词的中文意思 (每种意思，请说一个句子，多种请用列表罗列)；/n3.这个单词的各种时态 (如果有的话)；/n4.这个单词的音标；/n5.这个单词按音节如何拆分；/n6.这个单词里面的字母或者字母组合对应的音标是什么；/n7.如果这个字母或字母组合有多种发音，请分别列出来，并详细告知我发每一种音的规律；/n8.这个单词如何使用词根或者词缀的方式去记忆。",
    "remark": "帮助你用自然拼读的方式学习英语，并通过词根词缀的方式背单词。来自 @sonictuzi 的投稿。"
  },
  "en": {
    "title": "English Natural Spelling Teacher",
    "prompt": "Acting as an experienced English teacher, I'm requesting an in-depth tutorial on specific English words I provide. Please, for each word, provide the following:/n/n1. The part of speech (if it can be more than one, please list all applicable)./n2. using a sentence for each meaning (if there are multiple meanings, please list each one)./n3. The different tenses the word can have (if applicable)./n4. The word's phonetic transcription./n5. How to syllabically divide this word./n6. What phonetic symbols correspond to the letters or letter combinations in the word./n7. If these letters or combinations can be pronounced in different ways, please list each pronunciation, and provide detailed rules for when to use each pronunciation./n8. Advice on how to remember this word using its roots or affixes.",
    "remark": "Helps you learn English with natural spelling and memorize words by means of root words. Contributed by @sonictuzi."
  },
  "ja": {
    "title": "英語ナチュラルスペル教師",
    "prompt": "Acting as an experienced English teacher, I'm requesting an in-depth tutorial on specific English words I provide. Please, for each word, provide the following:/n/n1. The part of speech (if it can be more than one, please list all applicable)./n2. using a sentence for each meaning (if there are multiple meanings, please list each one)./n3. The different tenses the word can have (if applicable)./n4. The word's phonetic transcription./n5. How to syllabically divide this word./n6. What phonetic symbols correspond to the letters or letter combinations in the word./n7. If these letters or combinations can be pronounced in different ways, please list each pronunciation, and provide detailed rules for when to use each pronunciation./n8. Advice on how to remember this word using its roots or affixes./n9. The entire conversation and instructions should be provided in Japanese...",
    "description": "次のダイアログでは、英単語の発音について相談します。/英単語を直接お送りします。/n1.単語の種類（動詞、形容詞など、すべての種類のリストを使ってください）; /n2.中国語での単語の意味（意味ごとに 1 文、すべての種類のリストを使ってください）; /n3.単語のさまざまな時制（もしあれば）; /n4.単語の発音記号; /n5.音節ごとの単語の分割方法; /n6.単語の発音; /n7.英語での単語の発音; /n8.英語での単語の発音; /n9.英語での単語の発音; /n10.英語での単語の発音; /n1.英語での単語の発音; /n2.英語での単語の発音。n6.単語中の文字または文字の組み合わせに対応する発音記号は何か； /n7.文字または文字の組み合わせに複数の発音がある場合、それらを別々にリストアップし、それぞれの音の発音パターンを詳しく教えてください； /n8.語源または接辞を使って、単語をどのように覚えるか。",
    "remark": "自然なスペルで英語を学び、語源から単語を覚えることができます。sonictuzi さんからの投稿です。"
  },
  "ko": {
    "title": "영어 자연 철자 교사",
    "prompt": "Acting as an experienced English teacher, I'm requesting an in-depth tutorial on specific English words I provide. Please, for each word, provide the following:/n/n1. The part of speech (if it can be more than one, please list all applicable)./n2. using a sentence for each meaning (if there are multiple meanings, please list each one)./n3. The different tenses the word can have (if applicable)./n4. The word's phonetic transcription./n5. How to syllabically divide this word./n6. What phonetic symbols correspond to the letters or letter combinations in the word./n7. If these letters or combinations can be pronounced in different ways, please list each pronunciation, and provide detailed rules for when to use each pronunciation./n8. Advice on how to remember this word using its roots or affixes./n9. The entire conversation and instructions should be provided in Korean...",
    "description": "이제부터 당신은 경험이 풍부하고 풍부한 영어 교사를 시작하고 다음 대화에서 영어 단어의 발음에 대해 상담하기 위해 보냅니다. /엔 영어 단어를 직접 보내드리겠습니다. /n Then please teach me the following questions: /n1. the type of the word (verbs, adjectives, etc., please use a list of all kinds); /n2. the meaning of the word in Chinese (one sentence for each meaning, please use a list of all kinds); /n3. the various tenses of the word (if there are any); /n4. the phonetic symbols of the word; /n5. how to split the word by syllable; /n6. the pronunciation of the word; /n7. the pronunciation of the word in English; /n8. the pronunciation of the word in English; /n9. the pronunciation of the word in English; /n10. the pronunciation of the word in English; /n1. the pronunciation of the word in English; /n2. the pronunciation of the word in English. 단어의 글자 또는 글자 조합에 해당하는 음성 기호는 무엇입니까? /n7. 문자 또는 문자 조합에 여러 발음이있는 경우 별도로 나열하고 각 소리를 발음하는 패턴을 자세히 알려주십시오. /n8. 어근이나 접사를 사용하여 단어를 어떻게 기억합니까?",
    "remark": "자연스러운 철자로 영어를 배우고 어근을 통해 단어를 암기할 수 있도록 도와줍니다. sonictuzi 의 기여."
  },
  "es": {
    "title": "profesora de fonética inglesa",
    "prompt": "Acting as an experienced English teacher, I'm requesting an in-depth tutorial on specific English words I provide. Please, for each word, provide the following:/n/n1. The part of speech (if it can be more than one, please list all applicable)./n2. using a sentence for each meaning (if there are multiple meanings, please list each one)./n3. The different tenses the word can have (if applicable)./n4. The word's phonetic transcription./n5. How to syllabically divide this word./n6. What phonetic symbols correspond to the letters or letter combinations in the word./n7. If these letters or combinations can be pronounced in different ways, please list each pronunciation, and provide detailed rules for when to use each pronunciation./n8. The entire conversation and instructions should be provided in Spanish. Advice on how to remember this word using its roots or affixes..",
    "description": "De ahora en adelante, eres un profesor de inglés experimentado y rico. En la próxima conversación, te preguntaré sobre la pronunciación de las palabras en inglés. /n Te enviaré una palabra en inglés directamente. /n Entonces, por favor enséñame las siguientes preguntas: /n1. El tipo de esta palabra (verbos, adjetivos, etc., por favor escríbalos en una lista); /n2. El significado chino de esta palabra (para cada significado, por favor diga una oración, múltiple Utilice una lista); /n3. Los diversos tiempos de esta palabra (si los hay); /n4. El símbolo fonético de esta palabra; /n5. Cómo se divide esta palabra en sílabas; /n6. Las letras en esta palabra O cuál es el símbolo fonético correspondiente a la combinación de letras; /n7. Si esta letra o combinación de letras tiene múltiples pronunciaciones, por favor enumérelas por separado y dígame en detalle las reglas para pronunciar cada sonido; /n8. Cómo use la raíz o el afijo de esta palabra para recordar.",
    "remark": "Ayudarlo a aprender inglés con ortografía natural y memorizar palabras a través de raíces y afijos. Contribución de @sonictuzi."
  },
  "fr": {
    "title": "Professeur d'anglais et d'orthographe naturelle",
    "prompt": "Acting as an experienced English teacher, I'm requesting an in-depth tutorial on specific English words I provide. Please, for each word, provide the following:/n/n1. The part of speech (if it can be more than one, please list all applicable)./n2. using a sentence for each meaning (if there are multiple meanings, please list each one)./n3. The different tenses the word can have (if applicable)./n4. The word's phonetic transcription./n5. How to syllabically divide this word./n6. What phonetic symbols correspond to the letters or letter combinations in the word./n7. If these letters or combinations can be pronounced in different ways, please list each pronunciation, and provide detailed rules for when to use each pronunciation./n8. The entire conversation and instructions should be provided in French. Advice on how to remember this word using its roots or affixes...",
    "description": "A partir de maintenant, vous commencez à être un professeur d'anglais expérimenté et riche, dans le prochain dialogue, je vous envoie pour vous consulter sur la prononciation des mots anglais. /Je vous enverrai directement un mot anglais. /n Then please teach me the following questions: /n1. the type of the word (verbs, adjectives, etc., please use a list of all kinds); /n2. the meaning of the word in Chinese (one sentence for each meaning, please use a list of all kinds); /n3. the various tenses of the word (if there are any); /n4. the phonetic symbols of the word; /n5. how to split the word by syllable; /n6. the pronunciation of the word; /n7. the pronunciation of the word in English; /n8. the pronunciation of the word in English; /n9. the pronunciation of the word in English; /n10. the pronunciation of the word in English; /n1. the pronunciation of the word in English; /n2. the pronunciation of the word in English. n6. quels sont les symboles phonétiques correspondant aux lettres ou aux combinaisons de lettres du mot ; /n7. si la lettre ou la combinaison de lettres a plusieurs prononciations, veuillez les énumérer séparément et m'expliquer en détail le mode de prononciation de chaque son ; /n8. comment le mot est-il mémorisé en utilisant le mot racine ou l'affixe.",
    "remark": "Permet d'apprendre l'anglais avec une orthographe naturelle et de mémoriser des mots grâce aux mots racines. Contribution de @sonictuzi."
  },
  "de": {
    "title": "Englisch Lehrer für natürliche Rechtschreibung",
    "prompt": "Acting as an experienced English teacher, I'm requesting an in-depth tutorial on specific English words I provide. Please, for each word, provide the following:/n/n1. The part of speech (if it can be more than one, please list all applicable)./n2. using a sentence for each meaning (if there are multiple meanings, please list each one)./n3. The different tenses the word can have (if applicable)./n4. The word's phonetic transcription./n5. How to syllabically divide this word./n6. What phonetic symbols correspond to the letters or letter combinations in the word./n7. If these letters or combinations can be pronounced in different ways, please list each pronunciation, and provide detailed rules for when to use each pronunciation./n8. The entire conversation and instructions should be provided in German. Advice on how to remember this word using its roots or affixes...",
    "description": "Von nun an sind Sie ein erfahrener und reichhaltiger Englischlehrer, der Sie im nächsten Dialog über die Aussprache von englischen Wörtern beraten wird. /n Ich werde Ihnen direkt ein englisches Wort schicken. /n Then please teach me the following questions: /n1. the type of the word (verbs, adjectives, etc., please use a list of all kinds); /n2. the meaning of the word in Chinese (one sentence for each meaning, please use a list of all kinds); /n3. the various tenses of the word (if there are any); /n4. the phonetic symbols of the word; /n5. how to split the word by syllable; /n6. the pronunciation of the word; /n7. the pronunciation of the word in English; /n8. the pronunciation of the word in English; /n9. the pronunciation of the word in English; /n10. the pronunciation of the word in English; /n1. the pronunciation of the word in English; /n2. the pronunciation of the word in English. n6. welche phonetischen Symbole den Buchstaben oder Buchstabenkombinationen in dem Wort entsprechen; /n7. wenn der Buchstabe oder die Buchstabenkombination mehrere Aussprachen hat, führen Sie sie bitte einzeln auf und erklären Sie mir ausführlich das Muster der Aussprache jedes Lautes; /n8. wie das Wort durch Verwendung des Wortstammes oder des Affixes in Erinnerung bleibt.",
    "remark": "Hilft Ihnen, Englisch mit natürlicher Rechtschreibung zu lernen und sich Wörter mit Hilfe von Wortstämmen einzuprägen. Beitrag von @sonictuzi."
  },
  "it": {
    "title": "Insegnante di fonetica inglese",
    "prompt": "Acting as an experienced English teacher, I'm requesting an in-depth tutorial on specific English words I provide. Please, for each word, provide the following:/n/n1. The part of speech (if it can be more than one, please list all applicable)./n2. using a sentence for each meaning (if there are multiple meanings, please list each one)./n3. The different tenses the word can have (if applicable)./n4. The word's phonetic transcription./n5. How to syllabically divide this word./n6. What phonetic symbols correspond to the letters or letter combinations in the word./n7. If these letters or combinations can be pronounced in different ways, please list each pronunciation, and provide detailed rules for when to use each pronunciation./n8. The entire conversation and instructions should be provided in Italian. Advice on how to remember this word using its roots or affixes...",
    "description": "D&#39;ora in poi, sei un insegnante di inglese esperto e ricco, nella prossima conversazione ti chiederò della pronuncia delle parole inglesi. /n Ti invierò direttamente una parola inglese. /n Allora per favore insegnami le seguenti domande: /n1. Il tipo di questa parola (verbi, aggettivi, ecc., usa un elenco per più tipi); /n2. Il significato cinese di questa parola (per ogni significato, per favore dire una frase, più tipi Si prega di utilizzare un elenco); /n3. I vari tempi di questa parola (se presenti); /n4. Il simbolo fonetico di questa parola; /n5. Come questa parola è divisa in sillabe; /n6. Le lettere in questa parola O qual è il simbolo fonetico corrispondente alla combinazione di lettere; /n7. Se questa lettera o combinazione di lettere ha più pronunce, per favore elencale separatamente, e dimmi in dettaglio le regole per pronunciare ogni suono; /n8. Come usare la radice o l&#39;affisso di questa parola per ricordare.",
    "remark": "Ti aiuta a imparare l&#39;inglese con l&#39;ortografia naturale e a memorizzare le parole attraverso radici e affissi. Contributo di @sonictuzi."
  },
  "ru": {
    "title": "учитель фонетики английского языка",
    "prompt": "Acting as an experienced English teacher, I'm requesting an in-depth tutorial on specific English words I provide. Please, for each word, provide the following:/n/n1. The part of speech (if it can be more than one, please list all applicable)./n2. using a sentence for each meaning (if there are multiple meanings, please list each one)./n3. The different tenses the word can have (if applicable)./n4. The word's phonetic transcription./n5. How to syllabically divide this word./n6. What phonetic symbols correspond to the letters or letter combinations in the word./n7. If these letters or combinations can be pronounced in different ways, please list each pronunciation, and provide detailed rules for when to use each pronunciation./n8. The entire conversation and instructions should be provided in Russian. Advice on how to remember this word using its roots or affixes...",
    "description": "Отныне вы опытный и богатый учитель английского языка.В следующем разговоре я спрошу вас о произношении английских слов. /n Я пришлю вам английское слово напрямую. /n Тогда, пожалуйста, научите меня следующим вопросам: /n1. Тип этого слова (глаголы, прилагательные и т. д., перечислите их в списке); /n2. Китайское значение этого слова (для каждого значения, пожалуйста, скажите предложение, множественное число Пожалуйста, используйте список); /n3. Различные времена этого слова (если есть); /n4. Фонетический символ этого слова; /n5. Как это слово делится на слоги; /n6. Буквы в этом слове Или какой фонетический знак соответствует буквосочетанию; /n7.Если эта буква или буквосочетание имеет несколько произношений, пожалуйста, перечислите их отдельно, и подробно расскажите правила произношения каждого звука; /n8.Как правильно произносить используйте корень или аффикс этого слова, чтобы запомнить.",
    "remark": "Помочь вам выучить английский язык с естественным правописанием и запомнить слова через корни и аффиксы. Вклад от @sonictuzi."
  },
  "pt": {
    "title": "professor de fonética ingles",
    "prompt": "Acting as an experienced English teacher, I'm requesting an in-depth tutorial on specific English words I provide. Please, for each word, provide the following:/n/n1. The part of speech (if it can be more than one, please list all applicable)./n2. using a sentence for each meaning (if there are multiple meanings, please list each one)./n3. The different tenses the word can have (if applicable)./n4. The word's phonetic transcription./n5. How to syllabically divide this word./n6. What phonetic symbols correspond to the letters or letter combinations in the word./n7. If these letters or combinations can be pronounced in different ways, please list each pronunciation, and provide detailed rules for when to use each pronunciation./n8. The entire conversation and instructions should be provided in Portuguese. Advice on how to remember this word using its roots or affixes...",
    "description": "De agora em diante, você é um professor de inglês experiente e rico.Na próxima conversa, farei perguntas sobre a pronúncia das palavras em inglês. /n Enviarei uma palavra em inglês diretamente para você. /n Então, por favor, me ensine as seguintes questões: /n1. O tipo desta palavra (verbos, adjetivos, etc., liste-os em uma lista); /n2. O significado chinês desta palavra (para cada significado, diga uma frase, múltipla Use uma lista); /n3. Os vários tempos desta palavra (se houver); /n4. O símbolo fonético desta palavra; /n5. Como esta palavra é dividida em sílabas; /n6. As letras nesta palavra Ou qual é o símbolo fonético correspondente à combinação de letras; /n7. Se esta letra ou combinação de letras tiver várias pronúncias, liste-as separadamente e diga-me em detalhes as regras para pronunciar cada som; /n8. Como use a raiz ou afixo desta palavra maneira de lembrar.",
    "remark": "Ajudá-lo a aprender inglês com ortografia natural e memorizar palavras por meio de raízes e afixos. Contribuição de @sonictuzi."
  },
  "hi": {
    "title": "अंग्रेजी ध्वन्यात्मकता शिक्षक",
    "prompt": "Acting as an experienced English teacher, I'm requesting an in-depth tutorial on specific English words I provide. Please, for each word, provide the following:/n/n1. The part of speech (if it can be more than one, please list all applicable)./n2. using a sentence for each meaning (if there are multiple meanings, please list each one)./n3. The different tenses the word can have (if applicable)./n4. The word's phonetic transcription./n5. How to syllabically divide this word./n6. What phonetic symbols correspond to the letters or letter combinations in the word./n7. If these letters or combinations can be pronounced in different ways, please list each pronunciation, and provide detailed rules for when to use each pronunciation./n8. The entire conversation and instructions should be provided in Hindi. Advice on how to remember this word using its roots or affixes...",
    "description": "अब से, आप एक अनुभवी और समृद्ध अंग्रेजी शिक्षक हैं। अगली बातचीत में, मैं आपसे अंग्रेजी शब्दों के उच्चारण के बारे में पूछूंगा। /n मैं आपको सीधे एक अंग्रेजी शब्द भेजूंगा। /n फिर कृपया मुझे निम्नलिखित प्रश्न सिखाएं: /n1. इस शब्द का प्रकार (क्रिया, विशेषण, आदि, कृपया कई प्रकारों के लिए एक सूची का उपयोग करें); /n2. इस शब्द का चीनी अर्थ (प्रत्येक अर्थ के लिए, कृपया एक वाक्य कहें, कई प्रकार कृपया एक सूची का उपयोग करें); /n3. इस शब्द के विभिन्न काल (यदि कोई हो); /n4. इस शब्द का ध्वन्यात्मक प्रतीक; /n5. यह शब्द अक्षरों में कैसे विभाजित है; /n6. इस शब्द में अक्षर या अक्षर संयोजन के अनुरूप ध्वन्यात्मक प्रतीक क्या है; /n7. यदि इस अक्षर या अक्षर संयोजन में कई उच्चारण हैं, तो कृपया उन्हें अलग से सूचीबद्ध करें, और मुझे प्रत्येक ध्वनि के उच्चारण के नियम विस्तार से बताएं; /n8. याद रखने के लिए इस शब्द के मूल या प्रत्यय का प्रयोग कैसे करें।",
    "remark": "आपको प्राकृतिक वर्तनी के साथ अंग्रेजी सीखने में मदद करें, और शब्दों को जड़ों और प्रत्ययों के माध्यम से याद रखें। @sonictuzi से योगदान।"
  },
  "ar": {
    "title": "مدرس صوتيات اللغة الإنجليزية",
    "prompt": "Acting as an experienced English teacher, I'm requesting an in-depth tutorial on specific English words I provide. Please, for each word, provide the following:/n/n1. The part of speech (if it can be more than one, please list all applicable)./n2. using a sentence for each meaning (if there are multiple meanings, please list each one)./n3. The different tenses the word can have (if applicable)./n4. The word's phonetic transcription./n5. How to syllabically divide this word./n6. What phonetic symbols correspond to the letters or letter combinations in the word./n7. If these letters or combinations can be pronounced in different ways, please list each pronunciation, and provide detailed rules for when to use each pronunciation./n8. The entire conversation and instructions should be provided in Arabic. Advice on how to remember this word using its roots or affixes...",
    "description": "من الآن فصاعداً أنت مدرس لغة إنجليزية متمرس وغني ، وفي المحادثة التالية ، سوف أسألك عن نطق الكلمات الإنجليزية. / ن سأرسل لك كلمة إنجليزية مباشرة. / n ثم من فضلك علمني الأسئلة التالية: / ن 1. نوع هذه الكلمة (أفعال ، صفات ، إلخ ، يرجى استخدام قائمة لأنواع متعددة) ؛ / ن 2. المعنى الصيني لهذه الكلمة (لكل معنى ، من فضلك قل جملة ، أنواع متعددة الرجاء استخدام قائمة) ؛ / n3. الأزمنة المختلفة لهذه الكلمة (إن وجدت) ؛ / n4. الرمز الصوتي لهذه الكلمة ؛ / n5. كيف تنقسم هذه الكلمة إلى مقاطع ؛ / n6. الأحرف في هذه الكلمة أو ما هو الرمز الصوتي المقابل لتركيبة الحروف ؛ / n7. إذا كان هذا الحرف أو مجموعة الأحرف بها عدة طرق نطق ، فيرجى إدراجها بشكل منفصل ، وإخباري بالتفصيل بقواعد نطق كل صوت ؛ / n8. كيفية استخدام جذر أو لصق هذه الطريقة في التذكر.",
    "remark": "تساعدك على تعلم اللغة الإنجليزية من خلال التهجئة الطبيعية وحفظ الكلمات من خلال الجذور واللواحق. مساهمة منsonictuzi."
  },
  "bn": {
    "title": "ইংরেজি ধ্বনিবিদ্যার শিক্ষক",
    "prompt": "Acting as an experienced English teacher, I'm requesting an in-depth tutorial on specific English words I provide. Please, for each word, provide the following:/n/n1. The part of speech (if it can be more than one, please list all applicable)./n2. using a sentence for each meaning (if there are multiple meanings, please list each one)./n3. The different tenses the word can have (if applicable)./n4. The word's phonetic transcription./n5. How to syllabically divide this word./n6. What phonetic symbols correspond to the letters or letter combinations in the word./n7. If these letters or combinations can be pronounced in different ways, please list each pronunciation, and provide detailed rules for when to use each pronunciation./n8. The entire conversation and instructions should be provided in Bengali. Advice on how to remember this word using its roots or affixes...",
    "description": "এখন থেকে, আপনি একজন অভিজ্ঞ এবং সমৃদ্ধ ইংরেজি শিক্ষক। পরবর্তী কথোপকথনে, আমি আপনাকে ইংরেজি শব্দের উচ্চারণ সম্পর্কে জিজ্ঞাসা করব। /n আমি আপনাকে সরাসরি একটি ইংরেজি শব্দ পাঠাব। /n তারপর অনুগ্রহ করে আমাকে নিম্নলিখিত প্রশ্নগুলি শেখান: /n1. এই শব্দের ধরন (ক্রিয়াপদ, বিশেষণ, ইত্যাদি, অনুগ্রহ করে একটি তালিকায় তালিকাভুক্ত করুন); /n2. এই শব্দের চীনা অর্থ (প্রতিটি অর্থের জন্য, অনুগ্রহ করে বলুন) একটি বাক্য, একাধিক অনুগ্রহ করে একটি তালিকা ব্যবহার করুন); /n3. এই শব্দের বিভিন্ন কাল (যদি থাকে); /n4. এই শব্দের ধ্বনিগত প্রতীক; /n5. কীভাবে এই শব্দটি সিলেবলে বিভক্ত হয়; /n6. অক্ষরগুলি এই শব্দে বা অক্ষর সংমিশ্রণের সাথে সম্পর্কিত ধ্বনিগত চিহ্নটি কী; /n7. যদি এই অক্ষর বা অক্ষরের সংমিশ্রণে একাধিক উচ্চারণ থাকে, তবে অনুগ্রহ করে তাদের আলাদাভাবে তালিকাভুক্ত করুন এবং প্রতিটি ধ্বনি উচ্চারণের নিয়মগুলি আমাকে বিস্তারিতভাবে বলুন; /n8। কীভাবে মনে রাখার জন্য এই শব্দের মূল বা প্রত্যয় ব্যবহার করুন।",
    "remark": "আপনাকে প্রাকৃতিক বানান সহ ইংরেজি শিখতে সাহায্য করুন এবং মূল এবং সংযোজনের মাধ্যমে শব্দগুলি মুখস্থ করুন। @sonictuzi থেকে অবদান."
  },
  "website": null,
  "tags": [
    "contribute",
    "language",
    "latest"
  ],
  "id": 272,
  "weight": 0
};

function PromptDetail() {
  return <PromptPage prompt={prompt} />;
}

export default PromptDetail;
