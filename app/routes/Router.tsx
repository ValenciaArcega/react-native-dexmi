import React, { useContext, ReactElement } from "react"
import { contextUser } from "@/app/context/UserContext"
import { RouterNoSession } from "./RouterNoSession"
// import RouterTenedor from "./RouterTenedor"

export function Router(): ReactElement {
	const { globalUser } = useContext(contextUser) as {
		globalUser: { ID_PERFIL: number }
	}

	if (!globalUser) {
		return <RouterNoSession />
	}
	/* else {
		return <RouterTenedor />
	} */
}
