import { useEffect, useState } from "react";
import { CardStoreProduct } from "../../components/Card/CardStoreProduct";
import { ImageProductStore } from "../../components/Pages/ImageProductStore";
import { TableBody } from "../../components/Table/TableBody";
import { TableHead } from "../../components/Table/TableHead";
import { TableRowData } from "../../components/Table/TableRowData";
import { TableWrap } from "../../components/Table/TableWrap";
import { useApi } from '../../hooks/useApi'
import { useStoreContext } from "../../contexts/StoreContext";
import { useLocation } from "react-router-dom";
import { ButtonIcon } from "../../components/Button/ButtonIcon";
import { AiOutlinePlus } from "react-icons/ai";

export function HomeStore() {
    const [products, setProducts] = useState({ rows: [] })
    const store = useStoreContext()
    const api = useApi(store.token)
    const query = new URLSearchParams(useLocation().search);

    const columns = [
        {
            label: 'image',
            maxWidth: '10rem',
        },
        {
            label: 'details',
            grow: 3,
        },
    ]

    const fetchProduct = async () => {
        const { data: { data } } = await api.get('/product/store', {
            params: {
                page: query.get('page') ?? 1
            }
        })
        setProducts(data)
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <>
            <div className="flex py-2 justify-end">
                <ButtonIcon to={'/store/product'}>
                    <AiOutlinePlus color="white" size={'18px'} />
                    Criar produto
                </ButtonIcon>
            </div>
            <TableWrap columns={columns} data={products.rows}>
                <TableHead />
                <TableBody>
                    <TableRowData label={'image'}>
                        <ImageProductStore />
                    </TableRowData>
                    <TableRowData label={'details'}>
                        <CardStoreProduct />
                    </TableRowData>
                </TableBody>
            </TableWrap>
        </>
    )
}
