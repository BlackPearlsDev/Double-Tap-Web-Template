export const validate = (inputs) => {
    if (window.location.pathname === "/login") {
        const inputsSanitized = {
            pseudo : inputs.pseudo.trim(),
            password : inputs.password.trim(),
        }
        return inputsSanitized;
    }

    if (window.location.pathname === "/register") {
        if(inputs.username !== ("" || undefined) && inputs.secretKey !== ("" || undefined) && inputs.password !== ("" || undefined) && inputs.passwordConfirm !== ("" || undefined)) {
            if (inputs.password.trim().length < 8 || inputs.passwordConfirm.trim().length < 8) {
                return "toShort";
            } else return true;
        } else
            return false;
    }
};
