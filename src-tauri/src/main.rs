#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::process::Command;
#[tauri::command]
fn install() {
    Command::new("cmd")
        .args(["/k", "powershell -Command Invoke-WebRequest https://sobroom.rrryfoo.cf/SobSeed/builds/sobseed_v2.1.1.jar -OutFile SobseedPS.jar"])
        .output()
        .expect("failed to install jar");
    Command::new("cmd")
        .args(["/k", "powershell -Command Invoke-WebRequest https://github.com/sobrooms/launcher/releases/download/starterBAT/start.bat -OutFile start.bat"])
        .output()
        .expect("failed to install jar");
}
#[tauri::command]
fn install_res() {
    Command::new("cmd")
        .args(["/k", "powershell -Command Invoke-WebRequest https://github.com/sobrooms/sobseed/releases/download/res/resources.zip -OutFile res.zip "])
        .output()
        .expect("failed to download resources");
    Command::new("cmd")
        .args(["/k", "powershell -Command Expand-Archive -Path res.zip resources -Force"])
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
        .args(["/k", " start start.bat & timeout /t 3"])
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
