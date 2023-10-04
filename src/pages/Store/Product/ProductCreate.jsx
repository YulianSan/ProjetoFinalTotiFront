import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { useApi } from "../../../hooks/useApi";
import { useStoreContext } from "../../../contexts/StoreContext";
import { FormProduct } from "../../../components/Form/FormProduct";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export function ProductCreate() {
    const navigate = useNavigate()
    const store = useStoreContext()
    const api = useApi(store.token)
    const loginFormSchema = z.object({
        description: z.string()
            .min(1, 'Descrição obrigatório'),
        name: z.string()
            .min(1, 'Nome obrigatório'),
        price: z.preprocess(
            Number,
            z.number()
                .gte(0, 'Desconto deve ser maior que 0')
        ),
        discount: z.preprocess(
            Number,
            z.number()
                .gte(0, 'Desconto deve ser maior que 0')
                .optional(),
        ),
        image: z.string()
            .min(1, 'Imagem obrigatório')
            .url('Image deve ser uma url valida'),
    })

    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty },
        setError,
        clearErrors,
    } = useForm({
        resolver: zodResolver(loginFormSchema),
        criteriaMode: 'all',
    });

    const createProduct = async (data) => {
        try {
            await api.post('/product', data)
            toast.success('Criado com sucesso!')
            setTimeout(navigate, 1000, '/store/')
        } catch (e) {
            toast.error('Erro ao salvar')
        }
    }

    return (
        <>
            <FormProduct
                clearErrors={clearErrors}
                setError={setError}
                isValid={isValid}
                isDirty={isDirty}
                textButton='Criar'
                handleSubmit={handleSubmit(createProduct)}
                errors={errors}
                register={register}
            />
            <Toaster />
        </>
    )
}
