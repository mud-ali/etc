let courses;
let info = {};

courses = Array.from(document.getElementsByClassName('course-item'));
courses.forEach((elem, ind) => {
    // text saying, for example, 8 active sections
    if (elem.innerHTML.includes("active section")) {
        let className = elem.getElementsByClassName('course-title')[0].innerText;
        info[className] = [];

        elem.getElementsByClassName('clickable')[0].click();
        let sections = Array.from(elem.getElementsByClassName('section-name'));
        sections.forEach((section, index) => {
            if (!section.parentElement.parentElement.parentElement.parentElement.classList.contains('section-inactive'))
                info[className].push(section.getElementsByTagName('a')[0].innerText);
        });

        if (info[className].length === 0)
            delete info[className];
    }
})

console.log(info);