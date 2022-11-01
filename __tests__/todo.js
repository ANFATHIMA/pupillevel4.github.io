const todoList = require("../todo");
const { alltasks, markComplete, add, overdue, dueLater, dueToday } = todoList();
const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};
var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);
describe("TodoList Test Suite", () => {
  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: today,
    });
  });
  test("Should add new todo", () => {
    add(
      {
        title: "Test todo",
        completed: false,
        dueDate: tomorrow,
        
      },
      {
        title: "Test todo",
        completed: false,
        dueDate: yesterday,
      }
    );
    const todoItemCount = alltasks.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: yesterday,
    });

    expect(alltasks.length).toBe(todoItemCount + 1);
  });
  test("Should mark a todo as complete", () => {
    expect(alltasks[0].completed).toBe(false);
    markComplete(0);
    expect(alltasks[0].completed).toBe(true);
  });
  test("Should check retrieval of overdue items", () => {
    o = overdue();
    expect(alltasks[2].dueDate).toBe(o[0]["dueDate"]);
  });
  test("Should check retrieval of duetoday items", () => {
    o = dueToday();
    expect(alltasks[0].dueDate).toBe(o[0]["dueDate"]);
  });
  test("Should check retrieval of due later items", () => {
    o = dueLater();
    expect(alltasks[1].dueDate).toBe(o[0]["dueDate"]);
  });
});