// スプレッドシートからspace, floor, timeを取得する処理
function doGet() {
    var id = "1BsXtxyB4-UztjUqrWscgO0JYxkJK1UU0cY5yO-khDeo"
    var ss = SpreadsheetApp.openById(id)
    var sheet = ss.getActiveSheet()
    var space = sheet.getRange("A2").getValue()
    var floor = sheet.getRange("B2").getValue()
    var time = sheet.getRange("C2").getValue()
    var obj = [
      {space: space, floor: floor, time: time}
    ]
    var json = JSON.stringify(obj)
    return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
  }
  