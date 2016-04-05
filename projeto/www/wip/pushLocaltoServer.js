DEMODB.transaction(function (transaction) {
  transaction.executeSql("SELECT name FROM sqlite_master WHERE type='table';", [], function(transaction, results) {
    for (var i = 0; i < results.rows.length; i++) {
      var tables = results.rows.item(i);
      handleTable(tables['name'], transaction);
    }
  }, errorHandler);
});


function handleTable(tbl_name, transaction) {

  if (tbl_name=="__WebKitDatabaseInfoTable__" || tbl_name=="Submission") { return; }

  transaction.executeSql("SELECT * FROM " + tbl_name + " WHERE submissionID=?;", [ID], function(transaction, results) {
    varStr="";
    for (var i = 0; i < results.rows.length; i++) {
      var row = results.rows.item(i);

      for (col in row) {
        if (col=="submissionID" || col=="ID") { continue; }
        varStr += col + "=" + row[col] + '&';
      }
    }
    varStr += 'submissionID=' + submissionID + "&table=" + tbl_name + "&num=" + i;
    $.get("script/to/process.aspx",varStr);
  }, errorHandler);
}
