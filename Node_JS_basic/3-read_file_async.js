const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.trim().split('\n');
    const students = lines.slice(1).filter(line => line.trim() !== '');
    const fields = {};

    students.forEach(line => {
      const [first, , , field] = line.split(',');
      if (!fields[field]) fields[field] = [];
      fields[field].push(first);
    });

    // Krijojmë string final
    let output = `Number of students: ${students.length}`;
    for (const field in fields) {
      output += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
    }

    return output;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
