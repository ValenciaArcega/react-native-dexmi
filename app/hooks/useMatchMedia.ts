import "@expo/match-media"
import { useMediaQuery } from "react-responsive"

export function useMatchMedia() {
	const isShortPhone = useMediaQuery({
		query: "(max-device-width:320) and (min-device-height:568)",
	})

	const isSmallMediumPhone = useMediaQuery({
		query: "(max-device-width:375) and (min-device-height:667)",
	})

	const isMediumPhone = useMediaQuery({
		query: "(min-device-width:393) and (min-device-height:852)",
	})

	const isLargePhone = useMediaQuery({
		query: "(min-device-width:430) and (min-device-height:932)",
	})
	return { isShortPhone, isSmallMediumPhone, isLargePhone, isMediumPhone }
}