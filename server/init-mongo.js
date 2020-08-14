db.createUser({
    user: "sensei",
    pwd: "sensei",
    roles: [
        {
            role: "readWrite",
            db: "sensei"
        }
    ]
})
