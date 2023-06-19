$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/medicalRecord_Verification.feature");
formatter.feature({
  "name": "medical record system verification",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdifinations.medical_Patient_Record.i_am_in_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid credential and click on Inpatient Ward",
  "keyword": "When "
});
formatter.match({
  "location": "stepdifinations.medical_Patient_Record.i_enter_valid_credential_and_click_on_Inpatient_Ward()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdifinations.medical_Patient_Record.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify medical record system",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "verify Login in Inpatient Ward",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdifinations.medical_Patient_Record.verify_Login_in_Inpatient_Ward()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Logout button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdifinations.medical_Patient_Record.click_on_Logout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdifinations.medical_Patient_Record.i_am_in_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid credential and click on Inpatient Ward",
  "keyword": "When "
});
formatter.match({
  "location": "stepdifinations.medical_Patient_Record.i_enter_valid_credential_and_click_on_Inpatient_Ward()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdifinations.medical_Patient_Record.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test Register a patient",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on Register a patient",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdifinations.medical_Patient_Record.i_click_on_Register_a_patient()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify I am in Register a patient page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdifinations.medical_Patient_Record.verify_I_am_in_Register_a_patient_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Patient Demographics",
  "keyword": "And "
});
formatter.match({
  "location": "stepdifinations.medical_Patient_Record.i_enter_Patient_Demographics()"
});
formatter.result({
  "error_message": "java.io.FileNotFoundException: C:\\Batch2021-JUNE-SDET\\JAVA\\workspace\\openMRSTest\\src\\test\\java\\TestData1\\Test.xlsx (The system cannot find the path specified)\r\n\tat java.base/java.io.FileInputStream.open0(Native Method)\r\n\tat java.base/java.io.FileInputStream.open(FileInputStream.java:219)\r\n\tat java.base/java.io.FileInputStream.\u003cinit\u003e(FileInputStream.java:157)\r\n\tat java.base/java.io.FileInputStream.\u003cinit\u003e(FileInputStream.java:112)\r\n\tat stepdifinations.medical_Patient_Record.i_enter_Patient_Demographics(medical_Patient_Record.java:101)\r\n\tat ✽.I enter Patient Demographics(file:///C:/Java/workspace1/openMRSTest/src/test/resources/features/medicalRecord_Verification.feature:15)\r\n",
  "status": "failed"
});
formatter.write("this is my failure message");
formatter.embedding("image/png", "embedded0.png", "Test Register a patient");
formatter.after({
  "status": "passed"
});
});