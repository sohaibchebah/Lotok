import { useMutation } from "react-query"

export const useCreateUserAccount = () => {
    return useMutation({
        mutationFn : (user) => createUserAccount(user)
    })
}