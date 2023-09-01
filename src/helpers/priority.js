export const priorityToString = (priority) => {
  switch (priority) {
    case 0:
      return "High";
    case 1:
      return "Medium";
    case 2:
      return "Low";
    default:
      return "Unknown";
  }
};

export const getPriorityClass = (priority) => {
  switch (priority) {
    case 0:
      return "high-priority";
    case 1:
      return "medium-priority";
    case 2:
      return "low-priority";
    default:
      return "";
  }
};
