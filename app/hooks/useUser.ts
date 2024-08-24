import { useContext } from "react";
import { contextUser } from "../context/UserContext";

export function useUser() {
	const {
		globalUser, setGlobalUser,
		idProfile, setIdProfile,
		idProfileKindPerson, setIdProfileKindPerson,
	} = useContext(contextUser)

	return {
		globalUser, setGlobalUser,
		idProfile, setIdProfile,
		idProfileKindPerson, setIdProfileKindPerson,
	}
}

