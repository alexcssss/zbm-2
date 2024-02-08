let authController = {} ;
let bcrypt = require("bcrypt");
const SALT_ROUND = 4;

authController.sendError = ({ req, res, msg }) => {
    res.render("login", { title: "Login", error: msg });
    return;
}

authController.postLogin = (req, res) => {
    let { email, password } = req.body;

    if(!email || !password) return authController.sendError({ req, res, msg: "Email o contraseña incorrecta" })

    req.getConnection((err, conn) =>{
        if (err) return authController.sendError({ req, res, msg: "Error interno" });
       
        conn.query('SELECT * FROM admin WHERE email = ?;', [email], (err, user) =>{
            if (err) return authController.sendError({ req, res, msg: "Error interno" });
            
            
            if(!user || !user.length) {
                return authController.sendError({ req, res, msg: "Usuario o contraseña incorrecta" });
            }

            let [ { password: encriptedPass } ] = user;

            // Validar password
            bcrypt.compare(password, encriptedPass, function(err, result) {
                if (err) return authController.sendError({ req, res, msg: "Error interno" });

                // result == true
                if(result) {
                    // Save auth token

                    return res.redirect("/home");
                } 
                    
                return authController.sendError({ req, res, msg: "Usuario o contraseña incorrecta" });
            });

        });
    });
}

authController.getLogin = (req, res) => {
    res.render("login", { title: "Login", error: false });
}

module.exports = authController;