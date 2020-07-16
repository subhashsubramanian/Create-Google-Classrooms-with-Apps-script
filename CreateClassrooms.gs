function onOpen(e) {
  SpreadsheetApp.getUi().createAddonMenu()
      .addItem('Create Classrooms', 'main')
      .addToUi();
}

function main() {
  
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName('Sheet1');
  
  // step 1 get course details from spreadsheet
  const courses = getCoursesFromSpreadsheet(sheet);
  
  // step 2 create classrooms using Classroom API
  const responses = courses.map((course,ind) => {
  const resource = createCourseResource(course);
  const response = Classroom.Courses.create(resource);
  course[3] = response.alternateLink;
  course[4] = response.enrollmentCode;
  return course;
  });

  //step 3 write class URL and Class code in same spreadsheet
  return writeCoursesToSpreadsheet(responses,sheet);
}



function getCoursesFromSpreadsheet(sheet){
  //const ss = SpreadsheetApp.getActive();
  //const sheet = ss.getSheetByName('Sheet1');
  const data = sheet.getDataRange().getValues();
  data.shift();
  return data.filter(row => row !== null);
}


function createCourseResource(course){
  const [courseName, instructorName, instructorEmail] = course;
  const resource = Classroom.newCourse();
  resource.name = courseName;
  resource.ownerId = instructorEmail;
  resource.description = instructorName;
  return resource;
}


function writeCoursesToSpreadsheet(responses,sheet){
  //const ss = SpreadsheetApp.getActive();
  //const sheet = ss.getSheetByName('Sheet1');
  const range = sheet.getRange(2, 1, sheet.getLastRow()-1, sheet.getLastColumn());
  //write the new values to spreadsheet
  range.setValues(responses);
  return true;
}


