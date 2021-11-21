import {
    RegistrationDocument,
    RegistrationMutation,
    RegistrationMutationVariables,
} from '../../generated/graphql'
import { IAuthenticationAPI } from '../../types'
import { IRegisterArgs } from '../types'

export const regsiter = (args: IRegisterArgs, global: IAuthenticationAPI) => {
    try {
        const { client } = global

        return client.mutate<
            RegistrationMutation,
            RegistrationMutationVariables
        >({
            mutation: RegistrationDocument,
            variables: {
                registrationInput: {
                    ...args,
                },
            },
        })
    } catch (error) {
        throw new Error()
    }
}
