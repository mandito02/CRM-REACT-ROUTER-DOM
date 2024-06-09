import { useLoaderData } from "react-router-dom";
import Clients from "../components/Clients";
import { getClients } from "../api/Client.js";


export function loader() {
    const clients = getClients()
    return clients
}

const Index = () => {
    const clients =  useLoaderData()
    return (
        <div>
            <h1 className="text-blue-600 font-black text-4xl">Clients</h1>
            <h3 className="mt-3">Manage your clients</h3>
            {clients.length > 0 ? (<div>
                <table className="table-auto mt-5 w-full bg-white shadow">
                    <thead className="bg-blue-600 text-white">
                        <tr>
                            <th className="p-2">Client</th>
                            <th className="p-2">Contact</th>
                            <th className="p-2">Accions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map( client => (
                            <Clients clients={client} key={client.id} />
                        ))}
                    </tbody>
                </table>
            </div>
            ):<p>No clients yet.</p>}
        </div>
    
    )
}

export default Index