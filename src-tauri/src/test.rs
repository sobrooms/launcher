use std::process::Command;
#[tauri::command]
pub fn test() {
    Command::new("cmd")
        .args(["/k", "@echo off & pause"])
        .output()
        .expect("failed test");
}