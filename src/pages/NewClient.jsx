import { useNavigate, Form, useActionData, redirect } from "react-router-dom"
import NewClientForm from "../components/NewClientForm"
import Error from "../components/Error"
import { addClient } from "../api/Client"

export async function action({request}) {
    const formDat = await request.formData()
    const data = Object.fromEntries(formDat)
    const email = formDat.get('email') 

    const error = []
    if (Object.values(data).includes('')) {
        error.push('All fields are required')
    }

    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if (!regex.test(email)) {
        error.push('Email is not valid')
    }

    if (Object.keys(error).length) {
        return error
    }
    await addClient(data)
    return redirect('/')
}

const NewClient = () => {
    const error = useActionData()
    const navigate = useNavigate()
    
    return (
        <div>
            <h1 className="text-blue-600 font-black text-4xl">New client</h1>
            <div className="flex justify-between">
            <h3 className="mt-3">Fill all fields for a new client</h3>

            
                <button type="button" onClick={() => navigate("/")} className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 mb-5 rounded uppercase">Return</button>
            </div>

            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto py-6 px-3">
                {error?.length > 0 && error.map( (err, index) => <Error key={index}>{err}</Error>)}

                <Form method="post" noValidate>
                    <NewClientForm />
                    <input type="submit" value="Add client" className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded uppercase" />
                </Form>
            </div>
        </div>
    )
}
export default NewClient