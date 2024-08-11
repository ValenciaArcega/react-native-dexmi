import React, { useContext, ReactElement } from "react"
import { contextUser } from "@/app/context/UserContext"
import { RouterNoSession } from "./RouterNoSession"
import { RouterBottom } from "./RouterBottom"

export function Router(): ReactElement {
	const { globalUser } = useContext(contextUser)

	if (globalUser) {
		return <RouterNoSession />
	} else {
		return <RouterBottom />
	}
}
