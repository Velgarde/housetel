#![allow(non_snake_case)]
#[macro_use] extern crate rocket;
use rocket::fs::{FileServer, NamedFile};

#[get("/")]
async fn HomePage() -> Option<NamedFile> {
    NamedFile::open("../dist/index.html").await.ok()
}

async fn DefaultPage() -> Option<NamedFile> {
    NamedFile::open("../dist/default.html").await.ok()
}


#[launch]
fn rocket() -> _ {
    //Assuming the build of the react file is in ../dist
    rocket::build()
    .mount("/", routes![HomePage])
    .mount("/", FileServer::from("../dist"))
    //.mount("/src", FileServer::from(""))
}