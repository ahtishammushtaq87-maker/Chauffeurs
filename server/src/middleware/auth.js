import { verifyToken } from "../utils/jwt.js";
import db from "../db/index.js";

const getUserById = db.prepare("SELECT id, name, email, role FROM users WHERE id = ?");

export function requireAuth(req, res, next) {
  const token = req.cookies?.token;
  if (!token) {
    return res.status(401).json({ error: "Not authenticated." });
  }

  try {
    const payload = verifyToken(token);
    const user = getUserById.get(payload.sub);
    if (!user) {
      return res.status(401).json({ error: "Not authenticated." });
    }
    req.user = user;
    next();
  } catch {
    return res.status(401).json({ error: "Session expired. Please log in again." });
  }
}

export function requireRole(...roles) {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ error: "You don't have permission to do that." });
    }
    next();
  };
}
