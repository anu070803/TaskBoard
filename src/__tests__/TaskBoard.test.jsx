// src/__tests__/taskboard.test.jsx
import { render, screen } from "@testing-library/react";
import TaskBoard from "../pages/TaskBoard.jsx"; // adjust path if needed

describe("TaskBoard Component", () => {
  it("renders task board heading", () => {
    render(<TaskBoard />);
    // Assuming your task board has a heading like <h2>Task Board</h2>
    expect(screen.getByRole("heading", { name: /task board/i })).toBeInTheDocument();
  });

  it("renders Add Task button", () => {
    render(<TaskBoard />);
    // Assuming your button text is "Add Task"
    expect(screen.getByRole("button", { name: /add task/i })).toBeInTheDocument();
  });
});
