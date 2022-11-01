
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
  module.exports = todoList;

