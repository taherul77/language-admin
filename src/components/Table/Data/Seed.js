import fs from "fs";
import path from "path";
import { faker } from "@faker-js/faker";

import { labels, priorities, statuses } from "./Data";

const generateTasks = (numTasks) => {
  return Array.from({ length: numTasks }, () => ({
    id: `TASK-${faker.number.int({ min: 1000, max: 9999 })}`,
    title: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
    status: faker.helpers.arrayElement(statuses).value,
    label: faker.helpers.arrayElement(labels).value,
    priority: faker.helpers.arrayElement(priorities).value,
  }));
};

const tasks = generateTasks(100);

const filePath = path.join(__dirname, "tasks.json");
fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), "utf8");

console.log("✅ Tasks data generated.");
