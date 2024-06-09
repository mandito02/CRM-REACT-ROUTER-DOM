import { Form, useNavigate, redirect } from "react-router-dom"
import { deleteClient } from "../api/Client"

export async function action({params}) {
    await deleteClient(params.id)
    return redirect('/')
}

const Clients = ({clients}) => {
    const { id, nombre, telefono, email, empresa } = clients
    const navigate = useNavigate()
    return (
        <tr className="border-b">
            <td className="p-3 space-y-1">
                <p className="text-gray-800 text-2xl ">{nombre}</p>
                <p>{empresa}</p>
            </td>
            <td className="p-5">
                <p className="text-gray-600"><span className="text-gray-800 font-bold uppercase">email: </span>{email}</p>
                <p className="text-gray-600"><span className="text-gray-800 font-bold uppercase">phone: </span>{telefono}</p>
            </td>
            <td className="p-5 gap-3">
                <button type="button" onClick={(e) => (navigate(`/clients/${id}/edit`))} className="text-blue-600 hover:text-blue-400 p-2 uppercase font-bold text-xs transition-all">Edit</button>
                <Form method="post" action={`/clients/${id}/delete`} noValidate onSubmit={e => {
                    if (!confirm(`Are you sure you want to delete client ${nombre}?`)) {
                        e.preventDefault()
                    }
                }}>
                    <button type="submit" className="text-red-600 hover:text-red-400 p-2 uppercase font-bold text-xs transition-all">Delete</button>
                </Form>           
            </td>
        </tr>

    )
}

export default Clients