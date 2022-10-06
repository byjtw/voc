//=======================================================
// HTML5 Spelling 題庫設定檔: 使用自定的 MP3 語音檔
//=======================================================
//
//---------------------------------------------------
//【TTS 語音設定】
//---------------------------------------------------
//
//是否使用 TTS 的語音(使用: true, 不使用: false)
tts_enabled = false;

//
//----------------
//Google TTS 文字轉語音的設定
//【注意】不能和 iSpeech TTS 同時使用
//----------------
//
//如果要使用 Google TTS，就拿掉下面這[4行]最左邊的註解(兩個斜線)
//tts_language = 'en';  // en : 英語,   zh_tw : 中文
//tts_speed = 0.3;  //語音的速度 0 ~ 1 (可用小數)
//tts_base_url = 'https://translate.google.com/translate_tts?ie=UTF-8&tl='+tts_language+'&client=tw-ob&ttsspeed='+tts_speed+'&q=';
//tts_cut_last_seconds = 0; //裁掉最後面的聲音長度(秒為單位)

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
[six]##六_isx##mp3/six.mp3
[seven]##七_nesve##mp3/seven.mp3
[eight]##八_ehgit##mp3/eight.mp3
[nine]##九_inne##mp3/nine.mp3
[ten]##十_etn##mp3/ten.mp3
[how old]##幾歲_owh odl##mp3/how old.mp3
[are]##是_aer##mp3/are.mp3
[you]##你_yuo##mp3/you.mp3
[year]##年/歲_yaer##mp3/year.mp3
[one]##一_oen##mp3/one.mp3
[two]##二_tow##mp3/two.mp3
[three]##三_rteeh##mp3/three.mp3
[four]##四_frou##mp3/four.mp3
[five]##五_vefi##mp3/five.mp3
[key]##鑰匙_eyk##mp3/key.mp3
[kite]##風箏_ekti##mp3/kite.mp3
[lion]##獅子_ilon##mp3/lion.mp3
[leg]##腳_gle##mp3/leg.mp3
[monkey]##猴子_eynomk##mp3/monkey.mp3
[milk]##牛奶_lmki##mp3/milk.mp3
[nose]##鼻子_osne##mp3/nose.mp3
[neck]##脖子_cnek##mp3/neck.mp3
[ox]##公牛_xo##mp3/ox.mp3
[otter]##水獺_teotr##mp3/otter.mp3
-----*/}.toString().replace(/\r/g,"").slice("function(){/*--這一行請勿更改--".length+1,-9);
