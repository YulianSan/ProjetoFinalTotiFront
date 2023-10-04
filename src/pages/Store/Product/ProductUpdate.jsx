import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { useApi } from "../../../hooks/useApi";
import { useStoreContext } from "../../../contexts/StoreContext";
import { FormProduct } from "../../../components/Form/FormProduct";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export function ProductUpdate() {
    const store = useStoreContext()
    const api = useApi(store.token)
    const { id } = useParams()

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

    const getProduct = async () => {
        const { data: { data } } = await api.get(`store/product/${id}`)

        return data
    }

    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty },
        setError,
        clearErrors,
        getValues,
    } = useForm({
        resolver: zodResolver(loginFormSchema),
        defaultValues: getProduct,
        criteriaMode: 'all',
    });

    const updateProduct = async (data) => {
        try {
            await api.put(`/product/${id}`, data)
            toast.success('Salvo com sucesso!')
        } catch (e) {
            toast.error('Erro ao salvar')
        }

    }

    return (
        <>
            <FormProduct
                getValues={getValues}
                clearErrors={clearErrors}
                setError={setError}
                isValid={isValid}
                isDirty={isDirty}
                textButton='Editar'
                handleSubmit={handleSubmit(updateProduct)}
                errors={errors}
                register={register}
            />
            <Toaster />
        </>
    )
}
