const getNotes = require("./notes.js");
const chalk = require("chalk");
const yargs = require("yargs");

//Customize yargs version
yargs.version("1.1.0");

//add, remove, read and list out all notes/individual notes

// Create add command

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    console.log("Title:- ", argv.title);
    console.log("Body:- ", argv.body);
  }
});

// Create a remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function() {
    console.log("Removing a note");
  }
});

// Create a list command
yargs.command({
  command: "list",
  describe: "Listing all existing notes",
  handler: function() {
    console.log("Listing all existing notes");
  }
});

// Create a read command
yargs.command({
  command: "read",
  describe: "Opens the chosen note",
  handler: function() {
    console.log("Opens the chosen note");
  }
});

yargs.parse();
