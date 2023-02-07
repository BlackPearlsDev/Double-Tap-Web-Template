export const validate = (inputs) => {
    if (window.location.pathname === "/login") {
        const inputsSanitized = {
            pseudo : inputs.pseudo.trim(),
            password : inputs.password.trim(),
        }
        return inputsSanitized;
    }

    if (window.location.pathname === "/register") {
        if (inputs.secretKey.trim().length < 8 || inputs.password.trim().length < 8) {
            return "3 caractères minimum";
        } else return true;
    }
};
