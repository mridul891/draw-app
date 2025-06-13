#!/usr/bin/env node

const { execSync } = require("child_process");

const repoURL = "https://github.com/mridul891/draw-app.git"; // <-- replace with your repo
const targetDir = ".";

console.log(`⬇️ Downloading repo from ${repoURL}...`);

try {
  execSync(`git clone ${repoURL} ${targetDir}`, { stdio: "inherit" });
  console.log("✅ Done!");
} catch (err) {
  console.error("❌ Failed to download repo:", err.message);
}
