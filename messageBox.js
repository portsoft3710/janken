var MessageBox = (function(){
	// ******************************************
	// 関数名：閉じる
	// 説明　：メッセージボックスを閉じる
	// ******************************************
	function Hidden(){
		document.getElementById("screenLock").style.visibility = 'hidden';
		document.getElementById("messageBox").style.visibility = 'hidden';
	}
	// ******************************************
	// 関数名：表示
	// 説明　：メッセージボックスを表示する
	// ******************************************
	function Show(){
		document.getElementById("screenLock").style.visibility = 'visible';
		document.getElementById("messageBox").style.visibility = 'visible';
	}
	return {
		// ******************************************
		// 関数名：警告(alert)
		// 説明　：警告のメッセージボックスを表示する
		// ******************************************
		Prompt: function(msgText, yesFunc, noFunc){
			// ボタンの設定
			document.getElementById("prompt").style.display = 'block';

			// メッセージを設定
			document.getElementById("messageBody").innerHTML = msgText;
			
			// 表示
			Show();
			
			// 「OK」ボタン
			document.getElementById("confirmOk").onclick = function(){ Hidden(); yesFunc(); };
			// 「キャンセル」ボタン
			document.getElementById("confirmCancel").onclick = function(){ Hidden(); noFunc(); };
		},
		// ******************************************
		// 関数名：確認(confirm)
		// 説明　：確認のメッセージボックスを表示する
		// ******************************************
		Confirm: function(msgText, yesFunc, noFunc){
			// ボタンの設定
			document.getElementById("prompt").style.display = 'none';
			document.getElementById("confirmCancel").style.display = 'inline';

			// メッセージを設定
			document.getElementById("messageBody").innerHTML = msgText;
			
			// 表示
			Show();
			
			// 「OK」ボタン
			document.getElementById("confirmOk").onclick = function(){ Hidden(); yesFunc(); };
			// 「キャンセル」ボタン
			document.getElementById("confirmCancel").onclick = function(){ Hidden(); noFunc(); };
		},
		Alert: function(msgText, yesFunc){
			// ボタンの設定
			document.getElementById("prompt").style.display = 'none';
			document.getElementById("confirmCancel").style.display = 'none';

			// メッセージを設定
			document.getElementById("messageBody").innerHTML = msgText;
			// 表示
			Show();
			
			// 「OK」ボタン
			document.getElementById("confirmOk").onclick = function(){ Hidden(); yesFunc(); };
		}
	}
})();