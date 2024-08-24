import React, { ReactElement, useEffect } from "react"
import { RouterNoSession } from "./RouterNoSession"
import { RouterBottom } from "./RouterBottom"
import { useUser } from "../hooks/useUser"

export function Router(): ReactElement {
	const { globalUser } = useUser()

	if (!globalUser) {
		return <RouterNoSession />
	} else {
		return <RouterBottom />
	}
}

/**
 * 🚀 testing access
 * jmartinez@vde-suite.com
 * papirrico
 */
