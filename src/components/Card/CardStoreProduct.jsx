import { useState } from 'react';
import { useStoreContext } from '../../contexts/StoreContext';
import { useApi } from '../../hooks/useApi'
import { ButtonDelete } from '../Button/ButtonDelete'
import { ButtonEdit } from '../Button/ButtonEdit'
import toast, { Toaster } from "react-hot-toast";

export function CardStoreProduct({ data, column }) {
    const user = useStoreContext()
    const api = useApi(user.token)
    const [isDeleted, setIsDeleted] = useState(false)
    const deleteProduct = async () => {
        if (confirm('Deseja deletar esse produto, isso não poderá ser desfeito')) {
            try {
                await api.delete(`/product/${data.id}`)
                toast.success('Deletado com sucesso!')
                setIsDeleted(true)
            } catch (e) {
                toast.success('Erro ao deletar')
            }
        }
    }

    return (
        <>
            {!isDeleted ?
                <>
                    <div className="flex flex-wrap flex-col gap-x-2 md:flex-row">
                        <div className="flex-1 md:block gap-4 flex">
                            <div className="font-lightlight text-zinc-400 uppercase">
                                Name
                            </div>
                            <div className="">
                                {data['name']}
                            </div>
                        </div>
                        <div className="flex-[3] md:block gap-4 flex">
                            <div className="font-lightlight text-zinc-400 uppercase">
                                Description
                            </div>
                            <div className="">
                                {data['description']}
                            </div>
                        </div>
                        <div className="flex-1 md:block gap-4 flex">
                            <div className="font-lightlight text-zinc-400 uppercase">
                                Price
                            </div>
                            <div className="">
                                {data['price'].toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                })}
                            </div>
                        </div>
                        <div className="flex-1 flex gap-1 items-center justify-center">
                            <ButtonEdit to={`/store/product/${data.id}`} />
                            <ButtonDelete click={deleteProduct} />
                        </div>
                    </div>
                    <Toaster />
                </>
                : <></>}
        </>
    )
}
