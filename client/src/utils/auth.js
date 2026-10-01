export const getToken = () => {
    return localStorage.getItem("token");
};

export const isLoggedIn = () => {
    return !!getToken();
};

export const getUserName = () => {
    return localStorage.getItem("userName") || "";
};

export const login = (token, userId, role, name) => {
    if (token) localStorage.setItem("token", token);
    if (userId) localStorage.setItem("userId", userId);
    if (role) localStorage.setItem("role", role);
    if (name) localStorage.setItem("userName", name);
    window.dispatchEvent(new Event("authChange"));
};

export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    localStorage.removeItem("userName");
    window.dispatchEvent(new Event("authChange"));
};