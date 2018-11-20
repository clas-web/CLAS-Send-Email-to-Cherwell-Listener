function sendMail() {
  
  var message = "CLAS Poster Printing#"+
    "Client (#rmccal14#) would like to have poster printed.<br /> "+
      "Client is in Dean's Office.  <br /><br />"+
        "Poster dimensions are [87] x [88].  <br />"+
          "Deliver to [98] by [85]."+
            "Poster file has been emailed separately to CLAS technician.";
  
  MailApp.sendEmail({
    //to: "cherwell-listener@uncc.edu",
    subject: "CLAS Testing", 
    htmlBody: message,
    cc: 'RyanMcCallum@uncc.edu',
    //repyTo: 'clas-web@uncc.edu'
  });
}
