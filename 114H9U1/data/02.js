//=======================================================
// HTML5 Spelling 題庫設定檔: 使用自定的 MP3 語音檔
//=======================================================
//
//【測試區塊】
//-------------------------------
//用來偵測換行字元用的測試區塊
//請勿更動
//並且放在題庫設定區塊之前
//-------------------------------
//測試區塊開始
CR_LF_test = function(){/*--這一行請勿更改--
CR_LF testing block
-----*/}.toString().slice("function(){/*--這一行請勿更改--".length+2,-9);
CR_LF_First_Pos = CR_LF_test.indexOf('_LF')-'CR_LF'.indexOf('_LF');
//測試區塊結束
//-------------------------------
//

//---------------------------------------------------
//【TTS 語音設定】
//---------------------------------------------------
//
//是否使用 TTS 的語音(使用: true, 不使用: false)
tts_enabled = true;

//
//----------------
//Google TTS 文字轉語音的設定
//【注意】不能和 iSpeech TTS 同時使用
//----------------
//
//如果要使用 Google TTS，就拿掉下面這[4行]最左邊的註解(兩個斜線)
tts_language = 'en';  // en : 英語,   zh_tw : 中文
tts_speed = 0.3;  //語音的速度 0 ~ 1 (可用小數)
tts_base_url = 'https://translate.google.com/translate_tts?ie=UTF-8&tl='+tts_language+'&client=tw-ob&ttsspeed='+tts_speed+'&q=';
tts_cut_last_seconds = 0; //裁掉最後面的聲音長度(秒為單位)

//
//----------------
//iSpeech TTS 文字轉語音的設定
//【注意】不能和 Google TTS 同時使用
//----------------
//原始網站參數說明: http://www.ispeech.org/api/#voices-standard
//
//如果要使用 iSpeech TTS，就拿掉下面這[5行]最左邊的註解(兩個斜線)
//tts_language = 'ukenglishfemale';  //auenglishfemale , usenglishfemale , chchinesefemale
//tts_speed = 0;  	//語音的速度 10 ~ -10 (10:最快, 0:一般, -10最慢)
//tts_pitch = 100; 	//音高 0~200 (100:預設值)
//tts_base_url = 'https://www.ispeech.org/p/generic/getaudio?action=convert&pitch='+tts_pitch+'&speed='+tts_speed+'&voice='+tts_language+'&text=';
//tts_cut_last_seconds = 2.54; //english: 2.54 chinese: 5.5 裁掉 iSpeech 最後面的聲音長度(秒為單位)


//
//---------------------------------------------------
//【題庫設定】
//---------------------------------------------------
//
//計時幾秒
timer = 600;

//
//答對一題加幾分
number_of_points_for_one_question = 10;

//
//每題要拿掉幾個字母當填空
blanks_total_number = 10;

//
//欄位分隔符號為兩個井字號(##)
seperator = '##';

//
//【題目設定】
//  一行一題, 
//  欄位左起
//    第一欄為英文
//    第二欄為中文
//    第三欄為MP3語音檔的路徑(沒有的話，tts_enabled = true 會以第一欄為TTS的朗讀內容)
//
questionLines = function(){/*--這一行請勿更改--
[aunt]##阿姨##mp3/aunt.mp3
[baby]##嬰兒##mp3/baby.mp3
[beautiful]##美麗的##mp3/beautiful.mp3
[classmate]##同學##mp3/classmate.mp3
[cousin]##表哥##mp3/cousin.mp3
[daughter]##女兒##mp3/daughter.mp3
[dear]##親愛的##mp3/dear.mp3
[elementary] [school]##小學##mp3/elementary school.mp3
[family]##家庭##mp3/family.mp3
[handsome]##英俊的##mp3/handsome.mp3
[housewife]##家庭主婦##mp3/housewife.mp3
[husband]##丈夫##mp3/husband.mp3
[I] [see]##我懂了##mp3/I see.mp3
[junior] [high] [school]##國中##mp3/junior high school.mp3
[new]##新的##mp3/new.mp3
[nice] [to] [meet] [you]##很高興見到你##mp3/nice to meet you.mp3
[office] [worker]##辦公室職員##mp3/office worker.mp3
[police] [officer]##警官##mp3/police officer.mp3
[really]##真的##mp3/really.mp3
[singer]##歌手##mp3/singer.mp3
[son]##兒子##mp3/son.mp3
[two]##也##mp3/too.mp3
[uncle]##叔叔##mp3/uncle.mp3
[very]##非常##mp3/very.mp3
[wife]##妻子##mp3/wife.mp3
[woman]/[women]##女人單數_女人複數##mp3/woman women.mp3
[writer]##作家##mp3/writer.mp3
[year] old/[years] old##歲單數_歲複數##mp3/year old years old.mp3
[young]##年輕的##mp3/young.mp3
-----*/}.toString().slice("function(){/*--這一行請勿更改--".length+2+(typeof(CR_LF_First_Pos)!='undefined' ? CR_LF_First_Pos:0),-9);

