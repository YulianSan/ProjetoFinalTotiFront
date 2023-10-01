import { TextBold } from "../../components/TextBold";
import { GroupInput } from "../../components/Form/GroupInput";
import { Label } from '../../components/Form/Label'
import { Button } from "../../components/Button";
import { ErrorValidate } from "../../components/Form/ErrorValidate";
import { Input } from "../../components/Form/Input";
import { TextArea } from "./TextArea";
import { useRef } from "react";

export function FormProduct({
    errors,
    clearErrors,
    setError,
    register,
    handleSubmit,
    textButton,
}) {
    const canvas = useRef()

    const fetchImage = ({ target }) => {
        try {
            const image = new Image()
            image.src = new URL(target.value)
            setError('image', { type: 'custom', message: 'Imagem inválida' })
            const ctx = canvas.current.getContext('2d')
            ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);

            image.onload = () => {
                clearErrors('image')
                const { naturalWidth: width, naturalHeight: height } = image
                let reasonMeasure = 1

                if (width > height) {
                    reasonMeasure = canvas.current.width / width
                } else {
                    reasonMeasure = canvas.current.height / height
                }

                ctx.drawImage(
                    image,
                    0,
                    0,
                    width * reasonMeasure,
                    height * reasonMeasure,
                )
            }
        } catch (e) {
            console.log('url invalid')
        }
    }

    return (
        <div className="flex flex-col min-h-screen items-center max-w-lg mx-auto">
            <TextBold>
                <h1 className="text-4xl">Produto</h1>
            </TextBold>
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 w-full">
                <GroupInput id='name'>
                    <Label>Name</Label>
                    <Input register={register} type="text" />
                    <ErrorValidate>
                        {errors?.name?.message}
                    </ErrorValidate>
                </GroupInput>
                <GroupInput id='description'>
                    <Label>Description</Label>
                    <TextArea register={register} />
                    <ErrorValidate>
                        {errors?.description?.message}
                    </ErrorValidate>
                </GroupInput>
                <GroupInput id='price'>
                    <Label>price</Label>
                    <Input register={register} type="number" />
                    <ErrorValidate>
                        {errors?.price?.message}
                    </ErrorValidate>
                </GroupInput>
                <GroupInput id='discount'>
                    <Label>discount</Label>
                    <Input register={register} type="number" />
                    <ErrorValidate>
                        {errors?.discount?.message}
                    </ErrorValidate>
                </GroupInput>
                <GroupInput id='image'>
                    <Label>image</Label>
                    <Input register={register} type="url" onBlur={fetchImage} />
                    <ErrorValidate>
                        {errors?.image?.message}
                    </ErrorValidate>
                </GroupInput>
                <canvas ref={canvas} width={512} height={300}>
                    Navegador sem suporte a canvas
                </canvas>
                <Button type='submit'>
                    {textButton}
                </Button>
            </form>
        </div>
    )
}
