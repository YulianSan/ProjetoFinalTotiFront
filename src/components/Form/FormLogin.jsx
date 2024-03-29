import { InputPassword } from "../../components/Form/InputPassword";
import { TextBold } from "../../components/TextBold";
import { GroupInput } from "../../components/Form/GroupInput";
import { Label } from '../../components/Form/Label'
import { Button } from "../../components/Button";
import { ErrorValidate } from "../../components/Form/ErrorValidate";
import { Input } from "../../components/Form/Input";

export function FormLogin({ errors, register, handleSubmit }) {
    return (
        <div className="flex h-screen flex-col items-center max-w-sm mx-auto">
            <TextBold>
                <h1 className="text-4xl">Login</h1>
            </TextBold>
            <form onSubmit={ handleSubmit } className="flex flex-col gap-y-4 w-full">
                <GroupInput id='email'>
                    <Label>e-mail</Label>
                    <Input register={register} type="email"/>
                    <ErrorValidate>
                        { errors?.email?.message }
                    </ErrorValidate>
                </GroupInput>
                <GroupInput id='password'>
                    <Label>senha</Label>
                    <InputPassword register={register} />
                    <ErrorValidate>
                        { errors?.password?.message }
                    </ErrorValidate>
                </GroupInput>
                <Button type='submit'>
                    Fazer login
                </Button>
            </form>
        </div>
    )
}
