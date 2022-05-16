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
timer = 180;

//
//答對一題加幾分
number_of_points_for_one_question = 10;

//
//每題要拿掉幾個字母當填空
blanks_total_number = 1;

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
c[a]b##計程車##mp3/cab.mp3
t[a]b##標籤##mp3/cab.mp3
b[a]d##壞的##mp3/bad.mp3
d[a]d##爸爸##mp3/dad.mp3
b[a]g##袋子##mp3/bag.mp3
w[a]g##搖擺##mp3/wag.mp3
f[a]n##風扇##mp3/fan.mp3
p[a]n##平底鍋##mp3/pan.mp3
j[a]m##果醬##mp3/jam.mp3
c[a]p##鴨舌帽##mp3/cap.mp3
l[a]p##大腿##mp3/lap.mp3
n[a]p##小睡一下##mp3/nap.mp3
m[a]p##地圖##mp3/map.mp3
b[a]t##蝙蝠##mp3/bat.mp3
h[a]t##帽子##mp3/hat.mp3
r[a]t##老鼠##mp3/rat.mp3
b[e]d##床##mp3/bed.mp3
r[e]d##紅色##mp3/red.mp3
l[e]g##腳##mp3/mp3/leg.mp3
p[e]n##原子筆##mp3/pen.mp3
t[e]n##10##mp3/ten.mp3
j[e]t##噴射機##mp3/jet.mp3
n[e]t##網##mp3/net.mp3
p[e]t##寵物##mp3/pet.mp3
v[e]t##獸醫##mp3/vet.mp3
s[e]t##設定##mp3/set.mp3
l[e]t##讓##mp3/let.mp3
b[e]t##打賭##mp3/bet.mp3
m[e]d##醫學##mp3/med.mp3
T[e]d##泰迪（男孩名)##mp3/Ted.mp3
-----*/}.toString().slice("function(){/*--這一行請勿更改--".length+2+(typeof(CR_LF_First_Pos)!='undefined' ? CR_LF_First_Pos:0),-9);

