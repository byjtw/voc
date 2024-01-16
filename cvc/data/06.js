//=======================================================
// HTML5 Spelling 題庫設定檔: 使用自定的 MP3 語音檔
//=======================================================
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
timer = 420;

//
//答對一題加幾分
number_of_points_for_one_question = 10;

//語音播放的速度 (1.0 正常, 0.5 慢速, 2.0 兩倍速)
audioPlaybackRate = 1.0; 

//
//每題要拿掉幾個字母當填空
blanks_total_number = 2;

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
[bad]##壞的##mp3/bad.mp3
[cap]##鴨舌帽##mp3/cap.mp3
[fat]##胖的##mp3/fat.mp3
[gas]##氣體##mp3/gas.mp3
[jam]##果醬##mp3/jam.mp3
[lag]##電腦速度慢##mp3/lag.mp3
[beg]##乞求##mp3/beg.mp3
[vet]##獸醫##mp3/vet.mp3
[den]##巢穴##mp3/den.mp3
[get]##得到##mp3/get.mp3
[leg]##腿##mp3/leg.mp3
[wet]##濕的##mp3/wet.mp3
[dig]##挖##mp3/dig.mp3
[fin]##背鰭##mp3/fin.mp3
[fit]##合身##mp3/fit.mp3
[fix]##使固定##mp3/fix.mp3
[hit]##打##mp3/hit.mp3
[kid]##孩子##mp3/kid.mp3
[lip]##唇##mp3/lip.mp3
[zip]##拉鏈起來##mp3/zip.mp3
[cot]##嬰兒床##mp3/cot.mp3
[fog]##霧##mp3/fog.mp3
[hot]##熱的##mp3/hot.mp3
[job]##工作##mp3/job.mp3
[pot]##鍋##mp3/pot.mp3
[hop]##跳##mp3/hop.mp3
[bug]##小蟲##mp3/bug.mp3
[bun]##小圓麵包##mp3/bun.mp3
[bus]##公共汽車##mp3/bus.mp3
[fun]##樂趣##mp3/fun.mp3
[gut]##腸##mp3/gut.mp3
[jug]##水罐##mp3/jug.mp3
[gum]##膠##mp3/gum.mp3
[mug]##馬克杯##mp3/mug.mp3
[nut]##堅果##mp3/nut.mp3
[pup]##小狗##mp3/pup.mp3
[rub]##擦##mp3/rub.mp3
[run]##跑步##mp3/run.mp3
[sun]##太陽##mp3/sun.mp3
-----*/}.toString().replace(/\r/g,"").slice("function(){/*--這一行請勿更改--".length+1,-9);
