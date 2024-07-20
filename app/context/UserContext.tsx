import { createContext, useState } from "react";

export const contextUser = createContext(null);

export function UserContext({ children }) {
	const [globalUser, setGlobalUser] = useState(null);

	return (
		<contextUser.Provider value={{ globalUser, setGlobalUser }}>
			{children}
		</contextUser.Provider>
	)
}