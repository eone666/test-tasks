import { Redirect, Route, Switch, useHistory } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

export default function App() {
    return (
        <BrowserRouter>
            <header className="h-20 bg-primary flex items-center p-4">
                <h1 className="text-3xl text-black">Title</h1>
            </header>
            <main className="flex flex-col p-4 h-full">
                <Route path="/" exact render={() => <Redirect to="/login/step-1" />} />
                <Route path="/login" component={LoginPage} />
            </main>
        </BrowserRouter>
    )
}

const useSessionState = (key: string, initialState: string) => {
    const [state, setState] = useState<string>(sessionStorage.getItem(key) || initialState)
    const wrappedSetState = (value: string) => {
        sessionStorage.setItem(key, value)
        setState(value)
    }

    return [state, wrappedSetState] as const
}

function LoginStepOne() {
    const [value, setValue] = useSessionState('email', '')
    const [checked, setChecked] = useState(false)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)
    const history = useHistory()

    const startTimeout = () => {
        if (timeoutRef.current) return
        timeoutRef.current = setTimeout(() => {
            history.push('/login/step-2')
        }, 500)
    }

    const stopTimeout = () => {
        if (timeoutRef.current) {
            clearInterval(timeoutRef.current)
            timeoutRef.current = null
        }
    }

    useEffect(() => {
        return stopTimeout()
    }, [])

    const isEmailValid = /.+@.+\..+/i.test(value)

    return <>
        <FormInput value={value} onChange={setValue} />
        <div className="p-1"></div>
        <FormCheckbox checked={checked} onChange={setChecked} />
        <button onPointerDown={startTimeout} onPointerUp={stopTimeout} onPointerLeave={stopTimeout}
                disabled={!isEmailValid || !checked}
                className="btn btn-primary mt-auto">Hold to proceed
        </button>
    </>
}

interface Response {
    ok: boolean,
    message?: string
}

function LoginStepTwo() {
    const [value, setValue] = useSessionState('email', '')
    const history = useHistory()
    const [isOk, setIsOk] = useState(false)
    const [message, setMessage] = useState('')
    const [dialogIsOpen, setDialogIsOpen] = useState(false)

    const openDialog = () => setDialogIsOpen(true)
    const closeDialog = () => setDialogIsOpen(false)
    const handleBackButton = () => {
        history.push('/login/step-1')
    }

    const handleComplete = async () => {
        try {
            const response = await fetch('/api/endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: value })
            })

            const data = await response.json() as Response
            setIsOk(data.ok)
            setMessage(data.message || '')

            openDialog()
        } catch (_) {
            setIsOk(false)
            openDialog()
        }
    }


    useEffect(() => {
        /* какое то сломанное апи, через addEventListener на "popstate" не тригерится, e.preventDefault() не работает
        только с помощью такого костыля это заработало
        UPD: еще можно затолкать стейт диалогового окна в history в виде searchParams
        */
        window.onpopstate = function() {
            if (dialogIsOpen) {
                history.go(1)
                closeDialog()
            }
        }
    }, [dialogIsOpen])

    return <>
        <FormInput value={value} onChange={setValue} />
        <div className="mt-auto flex gap-4">
            <button onClick={handleBackButton} className="btn btn-neutral flex-1">Back</button>
            <button onClick={handleComplete} className="btn btn-primary flex-1">Confirm</button>
        </div>
        <Dialog open={dialogIsOpen} onClose={closeDialog} title={isOk ? 'Success!' : 'Error!'} message={message}/>
    </>
}

interface DialogProps {
    open: boolean;
    onClose: ()=>void;
    title: string;
    message?:string
}
function Dialog ({open, message, title, onClose}:DialogProps) {
    return <dialog className="modal" open={open}>
        <div className="modal-box max-w-[320px]">
            <h3 className="font-bold text-lg">{title}</h3>
            {!!message && <p className="py-4">{message}</p>}
            <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕
            </button>
        </div>
    </dialog>
}

function LoginPage() {
    return (
        <Switch>
            <Route path="/login/step-1">
                <LoginStepOne />
            </Route>
            <Route path="/login/step-2">
                <LoginStepTwo />
            </Route>
            <Route path="/login" exact render={() => <Redirect to="/login/step-1" />} />
        </Switch>
    )
}

interface FormCheckboxProps {
    checked: boolean;
    onChange: (value: boolean) => void
}

function FormCheckbox({ checked, onChange }: FormCheckboxProps) {
    return (
        <div className="form-control">
            <label className="label cursor-pointer justify-start gap-2">
                <input checked={checked} onChange={e => onChange(e.target.checked)} type="checkbox"
                       className="checkbox checkbox-primary" />
                <span className="label-text">I agree</span>
            </label>
        </div>
    )
}

interface FormInputProps {
    value: string;
    onChange: (value: string) => void;
}

function FormInput({ value, onChange }: FormInputProps) {
    return (
        <label className="form-control">
            <div className="label">
                <span className="label-text">Email</span>
            </div>
            <input value={value} onChange={e => onChange(e.target.value)} type="text" placeholder="Type here"
                   className="input" />
        </label>
    )
}
