function sendEmail() {
var Property_name=2;
var Address=3;
var Subrurb=4;
var City=5;	
var	Province=6;
var unit_type=8;	
var unit_sub_type=9;
var	building_name=10;
var	floor_no=11;
var	unit_no=12;
var	unit_gla=13;
var	available_type=14;
var	available_date=15;
var	rent_tba=16;
var	gross_rent=17;		
var Since_Vacant= 19;	
var Months_vacant= 20;	
var Business_Name= 21;	
var Contact_name=22;
var	Contact_surname=23;	
var Contact_email=24;
var Email_template=25;	


var emailtemp=HtmlService.createTemplateFromFile("Email.html");

var worksheet= SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data");

var worksheet2= SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Email Template");

var data= worksheet.getRange('A2:AF'+ worksheet.getLastRow()).getValues();

var data= worksheet.getRange('A2:AF'+ worksheet.getLastRow()).getValues();

const lastr=worksheet.getFilter();

var Uniqueemails =worksheet2.getRange('G2:G').getValues();

Logger.log(lastr)

data.forEach(function(row){
  
  emailtemp.fn=row[Contact_name];
  emailtemp.ln=row[Contact_surname];
  emailtemp.Property_Name=row[Property_name];
  emailtemp.Building_Name=row[building_name];
  emailtemp.Business_Name=row[Business_Name];
  emailtemp.Since_Vacant=row[Since_Vacant];
  emailtemp.Unit_No=row[unit_no];
  emailtemp.Unit_GLA=row[unit_gla];
  emailtemp.Available_Type=row[available_type];
  emailtemp.Available_Date=row[available_date];
  emailtemp.Rent_TBA=row[rent_tba];
  emailtemp.Gross_Rent=row[gross_rent];
  emailtemp.Months_Vacant=row[Months_vacant];
  var htmlMessage= emailtemp.evaluate().getContent();
  // GmailApp.sendEmail(row[Contact_email],sub,
  // "Your Email doesnt Supports HTML",
  // {name:"Francois Lotter", htmlBody: htmlMessage})



})

}
