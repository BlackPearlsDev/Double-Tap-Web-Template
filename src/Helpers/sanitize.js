export const validate = (inputs) => {
    if (window.location.pathname === "/login") {
        const inputsSanitized = {
            pseudo : inputs.pseudo.trim(),
            password : inputs.password.trim(),
        }
        return inputsSanitized;
    }

    if (window.location.pathname === "/register") {
        if (inputs.email.trim().length < 3 || inputs.password.trim().length < 3) {
            return "3 caractères minimum";
        } else return true;
    }
};
