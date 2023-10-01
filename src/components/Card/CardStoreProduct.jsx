import { ButtonDelete } from '../Button/ButtonDelete'
import { ButtonEdit } from '../Button/ButtonEdit'

export function CardStoreProduct({ data, column }) {
    return (
        <div className="flex flex-wrap flex-col md:flex-row">
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
                    {data['price']}
                </div>
            </div>
            <div className="flex gap-1 flex-none align-middle">
                <ButtonEdit />
                <ButtonDelete />
            </div>
        </div>
    )
}
