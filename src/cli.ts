#!/usr/bin/env node
import { Command } from "commander";
import { greet } from "./greet.js";

const program = new Command();

program
  .name("afk-2")
  .description("A basic TypeScript CLI template.")
  .version("0.1.0");

program
  .command("greet")
  .description("Print a friendly greeting")
  .argument("[name]", "name to greet", "world")
  .action((name: string) => {
    console.log(greet(name));
  });

program.parse();
