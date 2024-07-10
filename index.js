const fs = require('fs');

// Get command-line arguments
const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

// Perform operations based on the command
switch (operation) {
  case 'read':
    readFile(file);
    break;
  case 'delete':
    deleteFile(file);
    break;
  case 'create':
    createFile(file);
    break;
  case 'append':
    appendToFile(file, content);
    break;
  case 'rename':
    renameFile(file, content);
    break;
  case 'list':
    listFiles(file);
    break;
  default:
    console.log(`Invalid operation '${operation}'`);
}

// Functions for each operation

function readFile(filename) {
  if (!filename) {
    console.log('Please provide a file to read.');
    return;
  }
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file '${filename}':`, err);
    } else {
      console.log(data);
    }
  });
}

function deleteFile(filename) {
  if (!filename) {
    console.log('Please provide a file to delete.');
    return;
  }
  fs.access(filename, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(`File '${filename}' does not exist.`);
    } else {
      fs.unlink(filename, (err) => {
        if (err) {
          console.error(`Error deleting file '${filename}':`, err);
        } else {
          console.log(`File '${filename}' deleted`);
        }
      });
    }
  });
}

function createFile(filename) {
  if (!filename) {
    console.log('Please provide a file to create.');
    return;
  }
  fs.writeFile(filename, '', (err) => {
    if (err) {
      console.error(`Error creating file '${filename}':`, err);
    } else {
      console.log(`File '${filename}' created`);
    }
  });
}

function appendToFile(filename, content) {
  if (!filename || !content) {
    console.log('Please provide content and file to append.');
    return;
  }
  fs.appendFile(filename, content + '\n', (err) => {
    if (err) {
      console.error(`Error appending content to file '${filename}':`, err);
    } else {
      console.log(`Content appended to the file '${filename}'`);
    }
  });
}

function renameFile(oldName, newName) {
  if (!oldName || !newName) {
    console.log('Please provide the current file name and the new file name.');
    return;
  }
  fs.rename(oldName, newName, (err) => {
    if (err) {
      console.error(`Error renaming file '${oldName}' to '${newName}':`, err);
    } else {
      console.log(`File '${oldName}' renamed to '${newName}'`);
    }
  });
}

function listFiles(directory) {
  if (!directory) {
    console.log('Please provide a directory to list.');
    return;
  }
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error(`Error listing directory '${directory}':`, err);
    } else {
      files.forEach(file => {
        console.log(file);
      });
    }
  });
}



 