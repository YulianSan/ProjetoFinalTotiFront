import { Input } from "../components/Form/Input";
import { useForm } from "react-hook-form";
import { InputPassword } from "../components/Form/InputPassword";
import { TextBold } from "../components/TextBold";
import { GroupInput } from "../components/Form/GroupInput";
import { Label } from '../components/Form/Label'
import { Button } from "../components/Button";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { ErrorValidate } from "../components/Form/ErrorValidate";
import { useApi } from "../hooks/useApi";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import toast, { Toaster } from "react-hot-toast";

export function Login() {
    const navigate = useNavigate();
    const api = useApi()

    const user = useUserContext('token')
    const loginFormSchema = z.object({
        email: z.string()
            .min(1, 'E-mail obrigatório')
            .email('E-mail inválido'),
        password: z.string()
            .min(1, 'Senha obrigatório'),
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(loginFormSchema) });

    const login = async (data) => {
        try {
            const { data: { token } } = await api.post('/login', data)
            user.setToken(token)
            navigate('/')
        } catch {
            toast.error('Login inválido!!')
        }
    }

    return (
        <>
            <div className="flex h-screen flex-col items-center max-w-sm mx-auto">
                <TextBold>
                    <h1 className="text-4xl">Login</h1>
                </TextBold>
                <form onSubmit={handleSubmit(login)} className="flex flex-col gap-y-4 w-full">
                    <GroupInput id='email'>
                        <Label>e-mail</Label>
                        <Input register={register} type="email" />
                        <ErrorValidate>
                            {errors?.email?.message}
                        </ErrorValidate>
                    </GroupInput>
                    <GroupInput id='password'>
                        <Label>senha</Label>
                        <InputPassword register={register} />
                        <ErrorValidate>
                            {errors?.password?.message}
                        </ErrorValidate>
                    </GroupInput>
                    <Button type='submit'>
                        Fazer login
                    </Button>
                </form>
            </div>
            <Toaster />
        </>
    )
}
