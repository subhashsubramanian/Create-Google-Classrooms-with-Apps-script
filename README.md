# Create Google Classrooms in bulk-. This is for G-suite Administrator only
an apps script that creates classrooms from data in a google spreadsheet

## How to use ?
In a Google spreadsheet, in Sheet1 (leave the name as Sheet1) enter course details as below. 

Col 1 = Course name, Col 2 = Instructor Name Col 3 = Instructor Email, Col 4 = URL, Col 5 = Class Code

Row 1 = Header. Fill data under Col 1, Col2, and Col 3. Leave Col 4 and Col 5 blank.

Tools > Script Editor. Copy-paste any existing code with the code in CreateClassrooms.gs

Rename Code.gs to CreateClassrooms.gs

Resources > Advanced Google Services > Turn on Google Classroom API

To run the script, click Add-ons Create Classrooms. 

Courses will be created for Each instructor in classroom.gpogle.com
