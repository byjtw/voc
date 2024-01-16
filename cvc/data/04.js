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
timer = 200;

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
[cob]##棒##mp3/cob.mp3
[cot]##嬰兒床##mp3/cot.mp3
[dog]##狗##mp3/dog.mp3
[fog]##霧##mp3/fog.mp3
[hot]##熱的##mp3/hot.mp3
[job]##工作##mp3/job.mp3
[flop]##砸鍋##mp3/flop.mp3
[mop]##拖把##mp3/mop.mp3
[nod]##點頭##mp3/nod.mp3
[pop]##流行音樂##mp3/pop.mp3
[pot]##鍋##mp3/pot.mp3
[rob]##搶##mp3/rob.mp3
[rock]##岩石##mp3/rock.mp3
[sob]##啜泣##mp3/sob.mp3
[sop]##小恩小惠##mp3/sop.mp3
[sock]##短襪##mp3/sock.mp3
[top]##頂部##mp3/top.mp3
[won]##贏##mp3/won.mp3
[hop]##跳##mp3/hop.mp3
-----*/}.toString().replace(/\r/g,"").slice("function(){/*--這一行請勿更改--".length+1,-9);
