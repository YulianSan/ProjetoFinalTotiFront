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
    stars
}) {
    return (
        <div className="w-full flex gap-x-4 py-6 items-start">
            <div className="flex-1">
                <Card>
                    <CardBody>
                        <div className="py-6 px-3 flex gap-x-4">
                            <div className="flex-[2]">
                                <img 
                                    loading="lazy" 
                                    src={image}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex-[3]">
                                <TextBold>
                                    <h1 className="text-2xl">
                                        { title }
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
                                        fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est c...
                                    </p>
                                </TextDescription>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div className="max-w-sm w-full flex-none">
                <Card>
                    <CardBody>
                        <div className="py-6 px-3">
                            { discount != 0 &&
                                <TextDescription>
                                    <div className="flex gap-x-2">
                                        <span 
                                            className="underline 
                                            underline-offset-[-40%] 
                                            text-skip-ink text-base">
                                            { numberToPrice(
                                                price + ( price * discount ) 
                                            ) }
                                        </span>
                                        <div 
                                            className="bg-green-500 text-white
                                            px-2 rounded-md flex items-center 
                                            gap-x-1">
                                            <AiOutlineArrowDown />
                                            { numberToPercent(discount) }
                                        </div>
                                    </div>
                                </TextDescription>
                            }
                            <TextBold>
                                <h3 className="text-3xl text-zinc-900">
                                    { numberToPrice( price ) }
                                </h3>
                            </TextBold>
                            <TextDescription>
                                <div className="mt-1 flex items-center gap-x-1">
                                    <AiFillCreditCard size='1rem' />
                                    <span>
                                        até 5x de 
                                        { numberToPrice(
                                            (price + ( price * discount ) )/5
                                        ) }

                                    </span>
                                </div>
                            </TextDescription>
                            <Button>
                                <div className="flex items-center gap-x-3">
                                    <BsFillBasketFill/>
                                    <span className="text-lg">
                                        comprar
                                    </span>
                                </div>
                            </Button>
                            <TextDescription>
                                <span>
                                    Este produto é vendido e entregue por Amazon
                                </span>
                            </TextDescription>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}
