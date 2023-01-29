#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
mod download;
mod start;
mod test;

// main func
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            download::jar,
            download::res,
            start::start,
            test::test
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}