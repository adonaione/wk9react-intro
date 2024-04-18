import Alert from 'react-bootstrap/Alert';
import { CategoryType } from '../types';

type AlertMessageProps = {
    message: string|undefined,
    category: CategoryType|undefined,
    flashMessage: (newMessage:string|undefined, newCategory:CategoryType|undefined) => void
}

export default function AlertMessage({ message, category }: AlertMessageProps) {
    return (
        <Alert className='mt-3' variant={category} dismissable onClose={() => flashMesage(undefined, undefined) }>
            {message}
        </Alert>
    )
}


