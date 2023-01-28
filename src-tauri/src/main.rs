#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
use std::process::Command;
#[tauri::command]
fn install() {
    Command::new("cmd")
        .args(["/k", "powershell -Command Invoke-WebRequest https://github.com/sobrooms/sobseed/releases/download/latest/SobseedPS_Latest.jar -OutFile SobseedPS.jar"])
        .output()
        .expect("failed to install jar");
    Command::new("cmd")
        .args(["/k", "powershell -Command Invoke-WebRequest https://cdn.discordapp.com/attachments/834695008736772097/1068698688056213515/iastart.bat -OutFile ias.cmd"])
        .output()
        .expect("failed to get starter");
}
#[tauri::command]
fn install_res() {
    Command::new("cmd")
        .args(["/k", "powershell -Command Invoke-WebRequest https://github.com/sobrooms/sobseed/releases/download/res/resources.zip -OutFile res.zip"])
        .output()
        .expect("failed to download resources");
    Command::new("cmd")
        .args([
            "/k",
            "powershell -Command Expand-Archive -Path res.zip resources -Force",
        ])
        .output()
        .expect("failed to extract resources");
    Command::new("cmd")
        .args(["/k", "@del res.zip"])
        .output()
        .expect("failed to delete resource zip");
}
#[tauri::command]
fn start() {
    Command::new("cmd")
        .args(["/k", "start ./ias.cmd & pause"])
        .output()
        .expect("failed to start SobseedPS");
}
#[tauri::command]
fn test() {
    Command::new("cmd")
        .args(["/k", "@echo off & pause"])
        .output()
        .expect("failed test");
}
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![install, install_res, start, test])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
