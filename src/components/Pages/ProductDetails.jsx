import { Card } from "../Card/Card";
import { CardBody } from "../Card/CardBody";
import { TextBold } from "../TextBold";
import { Button } from '../Button'
import { TextDescription } from "../TextDescription";
import { BsFillBasketFill } from 'react-icons/bs'
import { AiFillCreditCard, AiOutlineArrowDown } from 'react-icons/ai'
import { ReviewStar } from "../Review/ReviewStar";
import { numberToPrice, numberToPercent } from "../../helpers/numberFormat";

export function ProductDetails({
    description,
    title,
    price,
    discount,
    image,
    store,
}) {
    return (
        <div className="w-full flex gap-4 py-6 items-start md:flex-row flex-col">
            <div className="flex-1 w-full">
                <Card>
                    <CardBody>
                        <div className="py-6 px-3 gap-4 flex flex-col lg:flex-row gap-x-4">
                            <div className="flex-[2] flex items-center justify-center">
                                <img
                                    loading="lazy"
                                    src={image}
                                    className="object-contain max-h-80"
                                />
                            </div>
                            <div className="flex-[3]">
                                <TextBold>
                                    <h1 className="text-2xl">
                                        {title}
                                    </h1>
                                </TextBold>
                                <div className="flex gap-x-2 items-center">
                                    <ReviewStar stars={4.5} />
                                    <TextDescription>
                                        <div>
                                            <span>4.5</span>
                                            <span>(500 avaliações)</span>
                                        </div>
                                    </TextDescription>
                                </div>
                                <TextDescription>
                                    <p className="py-4 text-base">
                                        {description}
                                    </p>
                                </TextDescription>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div className="md:max-w-sm w-full flex-none">
                <Card>
                    <CardBody>
                        <div className="py-6 px-3">
                            {discount != 0 &&
                                <TextDescription>
                                    <div className="flex gap-x-2">
                                        <span
                                            className="underline 
                                            underline-offset-[-40%] 
                                            text-skip-ink text-base">
                                            {numberToPrice(price)}
                                        </span>
                                        <div
                                            className="bg-green-500 text-white
                                            px-2 rounded-md flex items-center 
                                            gap-x-1">
                                            <AiOutlineArrowDown />
                                            {numberToPercent(discount / 100)}
                                        </div>
                                    </div>
                                </TextDescription>
                            }
                            <TextBold>
                                <h3 className="text-3xl text-zinc-900">
                                    {numberToPrice(
                                        price - (price * discount / 100)
                                    )}
                                </h3>
                            </TextBold>
                            <TextDescription>
                                <div className="mt-1 flex items-center gap-x-1">
                                    <AiFillCreditCard size='1rem' />
                                    <span>
                                        até 5x de
                                        {numberToPrice(
                                            (price - (price * discount / 100)) / 5
                                        )}

                                    </span>
                                </div>
                            </TextDescription>
                            <Button>
                                <div className="flex items-center gap-x-3">
                                    <BsFillBasketFill />
                                    <span className="text-lg">
                                        comprar
                                    </span>
                                </div>
                            </Button>
                            <TextDescription>
                                <span>
                                    Este produto é vendido e entregue por {store?.name}
                                </span>
                            </TextDescription>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}
