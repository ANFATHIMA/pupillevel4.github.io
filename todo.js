/*const http = require("http");
const fs = require("fs");

let homeContent = "";
let projectContent = "";
let registrationContent="";

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});

fs.readFile("registration.html",(err,reg) => {
  if (err){
    throw err;
  }
  registrationContent=reg;
});

let args=require("minimist")(process.argv.slice(2));

http.createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
        case "/project":
          response.write(projectContent);
          response.end();
          break;
        case "/registration":
          response.write(registrationContent);
          response.end();
          break;

        default:
          response.write(homeContent);
          response.end();
          break;
    }
  })
  .listen(args["port"]);*/
  /*const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
      // Write the date check condition here and return the array of overdue items accordingly.
      return all.filter((item) => item.dueDate < new Date().toLocaleDateString("en-CA"));
      }
    
  
    const dueToday = () => {
      // Write the date check condition here and return the array of todo items that are due today accordingly.
     return all.filter((item) => item.dueDate === new Date().toLocaleDateString("en-CA"));    }
  
    const dueLater = () => {
      // Write the date check condition here and return the array of todo items that are due later accordingly.
      return all.filter((item) => item.dueDate > new Date().toLocaleDateString("en-CA"));
    }
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string as per the format given above.
      return list.map(item => `${item.completed ? '[x]' : '[ ]' } ${item.title} ${item.dueDate === new Date().toLocaleDateString("en-CA")}`);
    }
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.add({ title: 'Pay rent', dueDate: today, completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
  
  console.log("My Todo-list\n\n")
  
  console.log("Overdue")
  var overdues = todos.overdue()
  var formattedOverdues = todos.toDisplayableList(overdues)
  console.log(formattedOverdues)
  console.log("\n\n")
  
  console.log("Due Today")
  let itemsDueToday = todos.dueToday()
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  console.log(formattedItemsDueToday)
  console.log("\n\n")
  
  console.log("Due Later")
  let itemsDueLater = todos.dueLater()
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  console.log(formattedItemsDueLater)
  console.log("\n\n")*/
  /*const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
      // Write the date check condition here and return the array of overdue items accordingly.
      // FILL YOUR CODE HERE
      // ..
      // ..
      // ..
      return all.filter((item)=> item.dueDate<new Date().toLocaleDateString("en-CA"));
    }
  
    const dueToday = () => {
      // Write the date check condition here and return the array of todo items that are due today accordingly.
      // FILL YOUR CODE HERE
      // ..
      // ..
      // ..
      return all.filter((item)=> item.dueDate==new Date().toLocaleDateString("en-CA"));
    }
  
    const dueLater = () => {
      // Write the date check condition here and return the array of todo items that are due later accordingly.
      // FILL YOUR CODE HERE
      // ..
      // ..
      // ..
      return all.filter((item)=> item.dueDate>new Date().toLocaleDateString("en-CA"));
    }
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string as per the format given above.
      // FILL YOUR CODE HERE
      // ..
      // ..
      // ..
      // return OUTPUT_STRING
      return list.map(item=>` ${item.completed ? '[x] ': '[ ]'} ${item.title} ${item.dueDate==new Date().toLocaleDateString("en-CA")}`);
    }
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
  */
 /* const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
        arr=[]
     // Write the date check condition here and return the array of overdue items accordingly.
        for(let i=0;i<all.length;i++){
            if(all[i].dueDate===yesterday){
                //console.log(all[i])
                arr.push(all[i])
            }
        }
        return arr
    }
  
    const dueToday = () => {
        arr=[]
      // Write the date check condition here and return the array of todo items that are due today accordingly.
        for(let i=0;i<all.length;i++){
            if(all[i].dueDate===today){
                //console.log(all[i])
                arr.push(all[i])
  
            }
        }
        return arr
  
    }
  
    const dueLater = () => {
        arr=[]
  
      // Write the date check condition here and return the array of todo items that are due later accordingly.
        for(let i=0;i<all.length;i++){
            if(all[i].dueDate==tomorrow){
                arr.push(all[i])
            }
        }
        return arr
    }
  
    const toDisplayableList = (list) => {
        //console.log(list.length)
        str=""
      // Format the To-Do list here, and return the output string as per the format given above.
        for(let i=0;i<list.length;i++){
            if(list[i].completed===true){
                if(i===list.length-1){
                      str += "[ ] "+list[i].title
                      }
                else{
                str += "[x] "+list[i].title+"\n"
  
            }}
            else if(list[i].dueDate===yesterday){
                if(i===list.length-1){
                    str += "[ ] "+list[i].title+" "+yesterday
                }
                else{
                str += "[ ] "+list[i].title+" "+yesterday+"\n"
            }}
            else if(list[i].dueDate===tomorrow){
                if(i===list.length-1){
                    str += "[ ] "+list[i].title+" "+tomorrow
                }
                else{
                str += "[ ] "+list[i].title+" "+tomorrow+"\n"
            }}
            else{
                if(i===list.length-1){
                    str += "[ ] "+list[i].title
                }
                else{
                str += "[ ] "+list[i].title+"\n"
  
        }}}
        return str
    }
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }*/
  const todoList = () => {
    alltasks = [];
    const add = (todoItem) => {
      alltasks.push(todoItem);
    };
    const markComplete = (index) => {
      alltasks[index].completed = true;
    };
  
    const overdue = () => {
      // Write the date check condition here and return the array of overdue items accordingly.
      const arra = alltasks.filter((person) => person.dueDate == yesterday);
      return arra;
    };
  
    const dueToday = () => {
      // Write the date check condition here and return the array of todo items that are due today accordingly.
      const arra = alltasks.filter((person) => person.dueDate === today);
      return arra;
    };
  
    const dueLater = () => {
      // Write the date check condition here and return the array of todo items that are due later accordingly.
      const arra = alltasks.filter((person) => person.dueDate === tomorrow);
  
      return arra;
    };
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string as per the format given above.
      arra = [];
      const display = list.map((item) => {
        const workstatus = item.completed ? "[x]" : "[ ]";
        const dateused =
          item.dueDate === new Date().toLocaleDateString("en-CA")
            ? ""
            : item.dueDate;
        arra.push(workstatus + " " + item.title + " " + dateused);
      });
      return arra.join("\n").trim();
    };
  
    return {
      alltasks,
      add,
      markComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList,
    };
  };
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.add({ title: 'Pay rent', dueDate: today, completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
  
  console.log("My Todo-list\n\n")
  
  console.log("Overdue")
  var overdues = todos.overdue()
  var formattedOverdues = todos.toDisplayableList(overdues)
  console.log(formattedOverdues)
  console.log("\n\n")
  
  console.log("Due Today")
  let itemsDueToday = todos.dueToday()
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  console.log(formattedItemsDueToday)
  console.log("\n\n")
  
  console.log("Due Later")
  let itemsDueLater = todos.dueLater()
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  console.log(formattedItemsDueLater)
  console.log("\n\n")