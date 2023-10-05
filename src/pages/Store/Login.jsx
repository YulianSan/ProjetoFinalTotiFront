import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { useApi } from "../../hooks/useApi";
import { useNavigate } from "react-router-dom";
import { FormLogin } from "../../components/Form/FormLogin";
import { useStoreContext } from "../../contexts/StoreContext";
import toast, { Toaster } from "react-hot-toast";

export function Login() {
    const navigate = useNavigate();
    const api = useApi()

    const store = useStoreContext()
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
            const { data: { token } } = await api.post('/store/login', data)
            store.setToken(token)
            navigate('/store/')
        } catch {
            toast.error('Login inválido!!')
        }
    }

    return (
        <>
            <FormLogin
                handleSubmit={handleSubmit(login)}
                errors={errors}
                register={register}
            />
            <Toaster />
        </>
    )
}
