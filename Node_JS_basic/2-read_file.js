const fs = require('fs');

function countStudents(filePath) {
    let data;

    try {
        data = fs.readFileSync(filePath, 'utf-8');
    } catch (error) {
        throw new Error('Cannot load the database');
    }

    const lines = data.trim().split('\n');
    const students = lines.slice(1);

    const fields = {};

    console.log("students--", students);

    students.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        console.log("firstname--", line);
        if (!fields[field]) {
            fields[field] = [];
        }
        fields[field].push(firstname);
    });

    for (const field in fields) {
        // console.log(
        //   `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`
        // );
    }
}

module.exports = countStudents;
