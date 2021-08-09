// space, floor, timeの値をスプレッドシートに登録する処理
function doGet(e) {
    var id = "1BsXtxyB4-UztjUqrWscgO0JYxkJK1UU0cY5yO-khDeo"
    var ss = SpreadsheetApp.openById(id)
    var sheet = ss.getActiveSheet();
    sheet.getRange("A2").setValue(e.parameter.space.toString())
    sheet.getRange("B2").setValue(e.parameter.floor)
    sheet.getRange("C2").setValue(e.parameter.time)
  }