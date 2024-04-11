#![allow(non_snake_case)]
#[macro_use] extern crate rocket;
use rocket::fs::{FileServer, NamedFile};
use std::process::Command;

#[get("/")]
async fn HomePage() -> Option<NamedFile> {
    NamedFile::open("../dist/index.html").await.ok()
}


#[get("/st")]
async fn ResponseJS() -> Option<NamedFile> {

    // Path to your .lnk file
    let shortcut_path = "C:/ProgramData/Microsoft/Windows/Start Menu/Programs/Riot Games/VALORANT.lnk";


    // Build the command
    let mut command = Command::new("cmd");
    command.arg("/c"); // Option to wait for command to finish
    command.arg(&shortcut_path); // Path to the shortcu
    // Execute the command

    let mut result = command.spawn().expect("failed to spawn command");
    // Handle the result (optional)
    println!("Process exited with: {}", result.wait().expect("failed to wait"));

    NamedFile::open("../dist/index.html").await.ok()
}

#[launch]
fn rocket() -> _ {
    //Assuming the build of the react file is in ../dist
    rocket::build()
    .mount("/", routes![HomePage])
    .mount("/", routes![ResponseJS])
    .mount("/", FileServer::from("../dist"))
    //.mount("/src", FileServer::from(""))
}