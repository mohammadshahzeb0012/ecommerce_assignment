const jwt = require("jsonwebtoken")

const isAuthanticated = async (req, res, next) => {
    try {
        const token = req?.cookies?.token || req?.headers["authorization"]?.slice(8);

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Session expired please login again",
            })
        }

        const decode = await jwt.verify(token, process.env.SECRET_KEY);
        if (!decode) {
            return res.status(401).json({
                message: "Session expired please login again",
                success: false
            })
        };
        req.id = decode.userId;
        next();
    } catch (err) {
        return res.status(401).json({
            message: "Session expired please login again",
            success: false
        })
    }
}

module.exports = isAuthanticated