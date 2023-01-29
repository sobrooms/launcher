use std::process::Command;
#[tauri::command]
pub fn start() {
    Command::new("cmd")
        .args(["/k", "start ./ias.bat & pause"])
        .output()
        .expect("failed to start SobseedPS");
}