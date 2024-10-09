// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {
      sectionNum: 1,
      roomNum: "STC 353",
      enrolled: 26,
      days: "TTh",
      instructor: "Bro T",
    },
    {
      sectionNum: 2,
      roomNum: "STC 347",
      enrolled: 28,
      days: "TTh",
      instructor: "Sis A",
    },
  ],
  enrollStudents: function (sectionNum) {
    console.log(sections);
    const section = this.sections.find(
      (section) => section.sectionNum === sectionNum
    );
    if (section) {
      section.enrolled++; // increment the enrolled count by 1
    } else {
      console.log("Invalid section number");
    }
  },
};

//how to call the function
aCourse.name;
// aCourse["name"]
// aCourse["course code"]....use this fucntion call when the key is a multiword "course code"

// how do we access the sections array?
aCourse.sections[1].roomNum;
// aCourse.sections.find(item => item.roomNum == "STC 347" )
// aCourse.sections.find(function(item) { return item.roomNum == "STC 347" })

function setCourseInfo(course) {
  const courseNameEl = document.querySelector("#courseName");
  const courseCodeEl = document.querySelector("#courseCode");

  courseNameEl.innerHTML = `<em>${course.name}</em>`;
  courseCodeEl.innerText = course.code;
}

function sectionTemplate(section) {
  return `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
        </tr>`;
}

function renderSection(sections) {
  const sectionListEl = document.querySelector("#sections");
  const html = sections.map(sectionTemplate);
  sectionListEl.innerHTML = html.join("");
}

setCourseInfo(aCourse);
renderSection(aCourse.sections);

//add an event listner to my enroll student body
document.querySelector("#enrollButton").addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
});
