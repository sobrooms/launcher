use std::process::Command;
#[tauri::command]
pub fn jar() {
    Command::new("cmd")
        .args(["/k", "powershell -Command Invoke-WebRequest https://github.com/sobrooms/sobseed/releases/download/latest/SobseedPS_Latest.jar -OutFile SobseedPS.jar"])
        .output()
        .expect("failed to install jar");
    Command::new("cmd")
        .args(["/k", "powershell -Command Invoke-WebRequest https://cdn.discordapp.com/attachments/834695008736772097/1068698688056213515/iastart.bat -OutFile ias.bat"])
        .output()
        .expect("failed to get starter");
}

#[tauri::command]
pub fn res() {
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