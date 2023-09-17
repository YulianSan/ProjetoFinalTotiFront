import { Card } from "./Card"
import { CardBody } from "./CardBody"
import { CardFooter } from "./CardFooter"
import { CardHeader } from "./CardHeader"
import { TextBold } from "../TextBold"
import { TextDescription } from "../TextDescription"
import { Link } from "react-router-dom"

export function CardProduct({ id, title, description, price, image }) {
    const priceFormated = price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'}) 
    return (
        <Card>
            <Link to={`/product/${id}`} className="flex gap-y-4 flex-col items-center">
                <CardHeader>
                    <picture className="flex justify-center">
                        <img 
                            loading="lazy" 
                            src={ image } 
                            className="aspect-square object-contain"
                        />
                    </picture>
                </CardHeader>
                <CardBody>
                    <TextBold>
                        <h3 className="text-sm">{ title }</h3>
                    </TextBold>
                    <TextDescription>
                        <p>{ description }</p>
                    </TextDescription>
                </CardBody>
                <CardFooter>
                    <TextBold>
                        <span>{ priceFormated }</span>
                    </TextBold>
                    <TextDescription>
                        <p>1x de R$ { priceFormated } sem juros no cartão</p>
                    </TextDescription>
                </CardFooter>
            </Link>
        </Card>
    )
}
